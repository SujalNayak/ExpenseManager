const mailer = require("nodemailer")

const sendMail = async (to, subject,text, html) => {
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
        html: `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Transaction Details</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
    
            .card {
                width: 300px;
                margin: 20px auto;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
                overflow: hidden;
            }
    
            .card-header {
                background-color: #3498db;
                color: #fff;
                padding: 15px;
                text-align: center;
            }
    
            .card-body {
                padding: 20px;
                text-align: center;
            }
    
            .otp-section, .amount-section {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin-bottom: 15px;
            }
    
            .amount-section {
                color: #27ae60;
            }
    
            .footer-text {
                font-size: 12px;
                color: #888;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
    
    <div class="card">
        <div class="card-header">
            <h2>Transaction Details</h2>
        </div>
        <div class="card-body">
            <div class="amount-section">
                Transaction Amount: ₹340.00
            </div>
            <p>Your One-Time Password (OTP) for the transaction:</p>
            <div class="otp-section">
                <!-- Display OTP here dynamically -->
                367 892
            </div>
            <p>Do not share this OTP with anyone.</p>
            <p class="footer-text">Thank You. Your Credentials is contains your privacy. We will not share it to anyone</p>
        </div>
    </div>
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

// sendMail("tirthpatel4822@gmail.com", "Test Mail", "This is test mail from nodejs")
module.exports=sendMail;

{/* <p class="footer-text">This is a sample transaction. Please verify the details before proceeding.</p> */}