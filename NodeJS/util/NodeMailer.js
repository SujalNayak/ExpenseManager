const mailer = require("nodemailer")

const sendMail = async (to, name, subject,text, html) => {
    const transporter = mailer.createTransport({
        service: "gmail",
        auth: {
            user: "sujalnayak1504@gmail.com",
            pass: "yqmrazgttgngfcda"
            }
        });

    const mailOptions = {
        from: 'sujalnayak1504@gmail.com',
        to: to,
        subject: subject,
        text: text ,
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Our Community!</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
        
            .card {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
        
            .card-header {
              background-color: #3498db;
              color: #ffffff;
              padding: 20px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
        
            .card-body {
              padding: 20px;
            }
        
            .welcome-message {
              font-size: 18px;
              line-height: 1.6;
              color: #333333;
            }
        
            .button {
              display: inline-block;
              padding: 10px 20px;
              font-size: 16px;
              text-align: center;
              text-decoration: none;
              background-color: #27ae60;
              color: #ffffff;
              border-radius: 5px;
              transition: background-color 0.3s;
            }
        
            .button:hover {
              background-color: #219653;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="card-header">
              <h1>Welcome to Our Community!</h1>
            </div>
            <div class="card-body">
              <p class="welcome-message">Dear ${name},</p>
              <p class="welcome-message">We are thrilled to welcome you to our community. Thank you for choosing us!</p>
              <p class="welcome-message">Feel free to explore and connect with others who share your interests.</p>
              <p class="welcome-message">If you have any questions or need assistance, don't hesitate to reach out.</p>
              <a href="#" class="button">Get Started</a>
            </div>
          </div>
        </body>
        </html>
        `
        // attachments:[
        //     {
        //         filename:'Windows_Wallpaper.jpeg',
        //         path:'C:\\Users\\sujal\\Downloads\\06b6983b5e563f2fb2299bb71f17212c.jpeg'

        //     }
        // ]
    };

    const res = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', res.messageId);
    return res;
}

// sendMail("11a11110sujal2019@gmail.com", "Test Mail", "This is test mail from nodejs")
module.exports=sendMail;

{/* <p class="footer-text">This is a sample transaction. Please verify the details before proceeding.</p> */}