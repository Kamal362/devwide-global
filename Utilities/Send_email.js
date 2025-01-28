const nodemailer = require('nodemailer');
const dotenv  = require('dotenv'); 

dotenv.config(); // Load environment variables from.env file

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // Replace with your SMTP host
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS 
  }
});

const sendEmail = async (name,email,message) => {

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: `Customer, <${email}>`,
      to: process.env.EMAIL_USER, // Your email address where you want to receive messages
      subject: "Business Inquiry",
      //text: `We want to hire a software developer`,
      html:   `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
         <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Contact Message</h1>
         <p style="color: #666; line-height: 1.6;">You have received a new message from your portfolio website</p>
         <p style="color: #666; line-height: 1.6;"><strong>${message}</strong></p>
         <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #007bff;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${email}:</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #e0e0e0; font-weight: bold; color: #007bff;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #e0e0e0;">${name}:</td>
        </tr>
      </table>
      <p style="color: #666; margin-top: 20px; text-align: center; font-style: italic;">This is a crucial message from a patential cliant.</p>
    </div>
  `
    });

    console.log("Message sent successfully");
    //res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    //res.status(500).json({ message: 'Error sending email' });
  }
};

module.exports = { sendEmail };