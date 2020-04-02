let nodemailer = require('nodemailer');
let path = require('path')
require('dotenv').config();
let environment = process.env;

module.exports.GmailTransport = nodemailer.createTransport({
    service: environment.GMAIL_SERVICE_NAME,
    host: environment.GMAIL_SERVICE_HOST,
    secure: environment.GMAIL_SERVICE_SECURE,
    port: environment.GMAIL_SERVICE_PORT,
    auth: {
        user: environment.GMAIL_USER_NAME,
        pass: environment.GMAIL_USER_PASSWORD
    }
});

module.exports.SMTPTransport = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: "465",
    secure: true, // upgrade later with STARTTLS
    debug: true,
    auth: {
        user: "thomas.paradis22@yahoo.com",
        pass: "zeviurinpbbsalsy", //"Super%^&titi"
    }
});

module.exports.ViewOption = (transport, hbs) => {
    const views = path.resolve(__dirname, "../views")
    transport.use('compile', hbs({
        viewEngine: {
            extName: '.hbs',
            partialsDir: views,
            layoutsDir: views,
            defaultLayout: false
        },
        viewPath: views,
        extName: '.hbs'
    }));
}