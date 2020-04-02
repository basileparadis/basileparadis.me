var express = require('express');
var router = express.Router();
let url = require('url')

var MailConfig = require('./email');
var hbs = require('nodemailer-express-handlebars');
var gmailTransport = MailConfig.GmailTransport;
var smtpTransport = MailConfig.SMTPTransport;


router.get('/email/template', (req, res, next) => {
    MailConfig.ViewOption(gmailTransport, hbs);
    let HelperOptions = {
        from: '"Tariqul islam" <tariqul.islam.rony@gmail.com>',
        to: 'tariqul@itconquest.com',
        subject: 'Hellow world!',
        template: 'test',
        context: {
            name: "tariqul_islam",
            email: "tariqul.islam.rony@gmail.com",
            address: "52, Kadamtola Shubag dhaka"
        }
    };
    gmailTransport.sendMail(HelperOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json(error);
        }
        console.log("email is send");
        console.log(info);
        res.json(info)
    });
});

router.post('/api/send-email', (req, res, next) => {
    const email = req.body.email || "test email"
    const message = req.body.message || "test message"
    // const userAgent = JSON.stringify(req.header('User-Agent'))
    const userAgent = JSON.stringify(req.headers)
    MailConfig.ViewOption(smtpTransport, hbs);
    let HelperOptions = {
        from: '"thomasparadis.me" <thomas.paradis22@yahoo.com>',
        // replyTo: email,
        to: 'thomasparadis22@hotmail.com',
        subject: 'Message received from thomasparadis.me',
        template: 'test',
        context: {
            email,
            message,
            info: userAgent,
        }
    };
    // res.send("/", { output: 'error', message: "at verify" + "a" })
    res.redirect(url.format({ pathname: "/", query: { error: "999" } }))
    return
    smtpTransport.verify((error, success) => {
        if (error) {
            res.redirect({ output: 'error', message: "at verify" + error })
        } else {
            smtpTransport.sendMail(HelperOptions, (error, info) => {
                if (error) {
                    res.redirect("/#contact", { output: 'error', message: "at send: " + error })
                    return
                }
                res.redirect("/#contact", { output: 'success', message: info });
                return
            });
        }
    })

});

module.exports = router;