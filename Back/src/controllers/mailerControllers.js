const {pool} = require("../database.js");
const nodemailer = require('nodemailer');

const getMailer = async(datos) => {
   const {name, email, phone, message} = datos;
   if(!name || !email || !phone || !message) throw Error("Datos Incompletos");
   const contentHTML = `
      <h1>Informacion Usuario</h1>
      <ul>
         <li>Usuario: ${name}</li>
         <li>Email: ${email}</li>
         <li>Telefono: ${phone}</li>
      </ul>
      <p>${message}</p>
   `
   const transporter = nodemailer.createTransport({
     service: 'Gmail',
     port: 465,
     secure: false,
     auth: {
        user: 'solucionesgmpsas@gmail.com',
        pass: 'xisstfqcbdvsohhg',
        clientId: '826595290914-5hn5r7e80g00t2hjn5q660oj16olpk4d.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04URd-JvOIIqsCgYIARAAGAQSNgF-L9IrfREKoG2Gov_dLHkcXxud6aKTi6HYwD9D8Vf3lbhsa_2T5RHiK6lf9YvEEAKpNe1Q4A'
     }
   });
   
   const datosCorreo = {
      from: "solucionesgmpsas@gmail.com",
      to: `${email}`,
      subject: "Informacion de Contacto",
      html: contentHTML
   };

   try {
      const info = await transporter.sendMail(datosCorreo);
      console.log("Correo", info.id);
      return "Correo Enviado";
   } catch (error) {
      throw new Error(error);
   };


};

module.exports = {getMailer};