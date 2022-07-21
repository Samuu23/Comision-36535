import { createTransport } from 'nodemailer';

const transporter = createTransport({
   host: 'smtp.ethereal.email',
   port: 587,
   auth: {
       user: 'xxxxxx@ethereal.email',
       pass: 'xxxxxx'
   }
});

const mailOptions = {
   from: 'Servidor Node.js',
   to: 'xxxxxxx@ethereal.email',
   subject: 'Mail de prueba desde Node.js',
   html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>'
}

try {
   await transporter.sendMail(mailOptions)
   console.log('OK!')
} catch (error) {
   console.log(error)
}
