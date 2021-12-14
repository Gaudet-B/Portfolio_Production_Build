
const userName = process.env.USER_SECRET_KEY
const passWord = process.env.PASS_SECRET_KEY


module.exports.contact = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message
    const reason = req.body.reason
    const mail = {
        from: name,
        to: "brian.f.gaudet@gmail.com",
        subject: "CONTACT FORM",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Reason: ${reason}</p>
                <p>Message: ${message}</p>`
    }
    const contactEmail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: userName,
            pass: passWord,
        },
    })
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });
}