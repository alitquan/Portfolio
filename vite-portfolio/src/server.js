import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = 5002;

const credentials = {
	email: process.env.EMAIL, 
	pass: process.env.PASSWORD
};

console.log(credentials);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: credentials.email,
		pass: credentials.pass
	}
});


app.post('/send-email', (req,res) => {
	const { name, email, message } = req.body; 

	console.log(req.body);
	console.log("Name: ",name)
	console.log("Email: ", email)
	console.log("Message: ", message)

	const mailOptions = {
		from: email, 
		to: credentials.email,
		subject: `Contact Form Submission from ${name}`,
		text: message 
	};

	transporter.sendMail(mailOptions, (error,info) => {
		if (error) {
			console.log(error);
			res.status(500).send("Sending Email -failed");
		}
		else {
			res.status(200).send("Email sent successfully.");
		}


	});
});


app.listen(PORT, () => {
	console.log (`Server running on ${PORT}. Hi`);
	console.log (credentials);
});



