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
        pass: 'xisstfqcbdvsohhg'
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