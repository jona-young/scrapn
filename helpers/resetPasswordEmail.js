const nodemailer = require("nodemailer");
require('dotenv').config();

const resetPasswordEmail = async (toAddress, name, id, token) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PW
        }
    })

    console.log(process.env.EMAIL_USER)

    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: toAddress,
        subject: "Scrapn - Password Reset Confirmation",
        html: `
        <html>
            <head>
            </head>
            <body>
                <p>
                    Dear ${name},
                    <br>
                    <br>
                    You recently requested a new password for your SCRAPN account.
                    If you made this request, please click the link below and follow the instructions.
                    <br>
                    <a href="${process.env.CLIENT_API}/reset-password/${id}/${token}">Click Here!</a>
                    <br>
                    <br>
                    Regards,
                    <br>
                    <br>
                    <b>Scrapn Support(AUTOMATED)</b>
                    <br>
                    E: <a href="mailto:scrapn.support@icloud.com">scrapn.support@icloud.com</a>
                </p>
            </body>
        </html>
        `
    })

    if (info)
    {
        return "Forgot password email sent!"
    }
}

module.exports = resetPasswordEmail;