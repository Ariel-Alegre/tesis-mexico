require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
module.exports = {
    FormCotization: async (req, res) => {
    const {
      name,
     project,
     career,
     phone,
     email
    } = req.body;

    try {
      const emailAdmin = `
        <html>
          <body style="background-color: #f4f4f4; display: grid; justify-content: center; max-width: 100%; padding: 2em 0;">
              <div style="border: 1px solid #ddd; border-radius: 10px; padding: 2em; width: 600px; max-width: 100%; margin: 0 auto; font-family: Arial, Helvetica, sans-serif; background-color: #fff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">

               <div style="margin: 0 auto; text-align: center;">
                <img src="https://mitesismexico.com/static/media/Logo.e46b698fba98d7d7129a.png" alt="https://mitesismexico.com/static/media/Logo.e46b698fba98d7d7129a.png" style="display: block; max-width: 150px; margin: 0 auto;">
              </div>
              <p style="color: black;">Petición de cotización.</p>
        
              <p style="color: black;">Detalles:
                <ul>
                   <li>Nombre: ${name}</li>
                  <li>Tema o tipo de proyecto: ${project}</li>
                  <li>Carrera: ${career}</li>
                  <li>Correo electrónico: ${email}</li>
                  <li>Teléfono: ${phone}</li>        

                </ul>
              </p>



            </div>
          </body>
        </html>
      `;

     await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Petición de cotización.',
        html: emailAdmin,
      }); 

      // Correo al cliente
      const emailContent = `
      <html>

      <body style="background-color: #f4f4f4; padding: 2em 0;">
        <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; border-radius: 10px; font-family: Arial, Helvetica, sans-serif; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style=" text-align: center; padding: 1em;">
              <img src="https://mitesismexico.com/static/media/Logo.e46b698fba98d7d7129a.png" alt="https://mitesismexico.com/static/media/Logo.e46b698fba98d7d7129a.png" style="display: block; max-width: 150px; margin: 0 auto;">
            </td>
          </tr>
          <tr>
            <td style="padding: 2em; color: #333;">

                <p style="color: black;">¡Hola ${name}!</p>
                <p style="color: black;">Hemos recibido tu solicitud de cotización. Nuestro equipo se pondrá en contacto contigo en breve.</p>

                <p style="color: black;">Si tienes alguna pregunta, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
                <p style="color: black;">Contáctanos: <a href="https://wa.me/+5215564727323"  style="color: #023b6d;" target="_blank">Haz clic aquí </a></p>
                
                <p style="color: black;">El equipo de <strong>Mi Tesis Mexico</strong>.</p>
          
            </td>
          </tr>
        </table>
      </body>
</html>

      `;
    await transporter.sendMail({
        from: "info@mitesismexico.com",
        to: email,
        subject: '¡Tu petición de cotización ha sido completada exitosamente!',
        html: emailContent,
      }); 

      // Respuesta al cliente
      res.status(200).json({ message: 'Correos enviados exitosamente.' });
    } catch (error) {
      console.log('Error en el servidor:', error.message);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};