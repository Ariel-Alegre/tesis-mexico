require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  socketTimeout: 15000, // tiempo de espera en milisegundos
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  Contact: async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    // Validar que se haya proporcionado un correo electrónico
    if (!email || !email.trim()) {
      return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
    }

    // Validar que el correo electrónico tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
    }

    try {
      const emailContent = `
      <html>
      <body>
        <p style="color: black;">Nombre: ${name}</p>
        <p style="color: black;">Email: ${email}</p>
        <p style="color: black;">Mensaje: ${message}</p>
        <p style="color: black;">Teléfono: ${phone}</p>

        
      </body>
      </html>
      `;

      // Enviar correo interno con los detalles del formulario
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL, // Dirección de correo interna
        subject: subject,
        html: emailContent,
      });

      const emailUser = `
    <html>
  <body style="background-color: #f4f4f4; padding: 2em 0;">
        <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; border-radius: 10px; font-family: Arial, Helvetica, sans-serif; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="text-align: center; padding: 1em;">
              <img src="https://mitesismexico.com/static/media/Logo.e46b698fba98d7d7129a.png" alt="logo" style="display: block; max-width: 150px; margin: 0 auto;">
            </td>
          </tr>
          <tr>
            <td style="padding: 2em; color: #333;">
              <p style="font-size: 18px; font-weight: bold; margin-bottom: 0.5em;">Hola ${name}!</p>
              <p style="font-size: 16px; margin-bottom: 1.5em;">Gracias por contactarnos. Nos pondremos en contacto con usted en breve.</p>

                   <p style="color: black;">Si tienes alguna otra pregunta, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
                <p style="color: black;">Contáctanos por WhatsApp: <a href="https://wa.me/+5215564727323" style="color: #1976d2;" target="_blank">Haz clic aquí para enviar un mensaje</a></p>
              <p style="font-size: 16px;">Equipo de <strong>Mi tesis México</strong>.</p>
            </td>
          </tr>
        </table>
      </body>
</html>

      `;

      // Enviar correo de confirmación al usuario
      await transporter.sendMail({
        from: "info@mitesismexico.com",
        to: email, // Enviar a la dirección del usuario
        subject: `Hola ${name}, hemos recibido tu mensaje`,

        html: emailUser,
      });

      console.log('Correos enviados correctamente');
      return res.status(200).send({ success: true, message: 'Correos enviados exitosamente.' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
