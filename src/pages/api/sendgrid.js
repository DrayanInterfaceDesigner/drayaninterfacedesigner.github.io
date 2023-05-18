// import sendgrid from "@sendgrid/mail";
const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "drayanreset@gmail.com",
      from: "drayandev.port@gmail.com", // your website email address here
      subject: `${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              </div>
      </body>
      </html>`,
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: "" })
}

export default sendEmail;


// console.log("REQ.BODY", req.body)
// const body = JSON.parse(req.body)
// const message = `
//   Name: ${body.name} \r\n
//   Email: ${body.email}\r\n
//   subject: ${body.subject}\r\n
//   Message: ${body.message}\r\n
// `
// const sendData = {
//   to: 'drayanreset@gmail.com',
//   from: 'drayandev.port@gmail.com',
//   subject: 'New message from your Portfolio', 
//   text: message,
//   html: message.replace(/\r\n/g, '<br>')
// }
// await sendgrid.send(sendData)