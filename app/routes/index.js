const express = require('express')
const axios = require('axios')
const { decorateRouter } = require('@awaitjs/express')

const router = decorateRouter(express.Router())

const url = require('url')

const hbs = require('nodemailer-express-handlebars')
const MailConfig = require('./email')

const smtpTransport = MailConfig.SMTPTransport

router.postAsync('/api/send-email', async (req, res, next) => {
  const { email, message, captchaToken } = req.body
  if (!email || !message || !captchaToken) {
    res.json({ success: false, message: 'Missing fields or captcha unsolved' })
    return
  }
  if (
    !email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
  ) {
    res.json({ success: false, message: 'Invalid email address' })
    return
  }
  let ret
  try {
    const params = {
      secret: '6LeYjOYUAAAAAHQcC-iIRbAK3XvZa_CfQ3ymEw6Z',
      response: captchaToken,
    }
    console.log(params)
    ret = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      { params: params },
    )
  } catch (err) {
    res.json({
      success: false,
      message: 'error connecting to captcha server: ' + err,
    })
    return
  }
  if (!ret.data.success) {
    console.log(ret.data)

    res.json({
      success: false,
      message: `captcha verification failed: ${ret.data['error-codes']}`,
    })
    return
  }

  const userAgent = JSON.stringify(req.headers)
  MailConfig.ViewOption(smtpTransport, hbs)
  const HelperOptions = {
    from: '"thomasparadis.me" <thomas.paradis22@yahoo.com>',
    // replyTo: email,
    to: 'thomasparadis22@hotmail.com',
    subject: 'Message received from thomasparadis.me',
    template: 'test',
    context: {
      email,
      message,
      info: userAgent,
    },
  }
  // res.json({ success: false, message: "test" });
  // return;
  const sendEmail = async () => {
    return new Promise((resolve, reject) => {
      smtpTransport.verify((error, success) => {
        if (error) {
          res.json({ success: false, message: `at verify${error}` })
          resolve()
        } else {
          smtpTransport.sendMail(HelperOptions, (error, info) => {
            if (error) {
              res.json({ success: false, message: `at send: ${error}` })
              resolve()
            }
            res.json({ success: true, message: info })
            resolve()
          })
        }
      })
    })
  }
  await sendEmail()
})

module.exports = router
