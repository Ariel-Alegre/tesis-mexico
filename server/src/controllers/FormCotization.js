require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = {
  FormCotization: async (req, res) => {
    const { name, project, career, phone, email } = req.body;

    try {
      // ---------------------------
      // ✉️ Correo para el administrador
      // ---------------------------
      const emailAdmin = `
        <html>
          <body style="background-color: #f4f4f4; display: grid; justify-content: center; max-width: 100%; padding: 2em 0;">
            <div style="border: 1px solid #ddd; border-radius: 10px; padding: 2em; width: 600px; max-width: 100%; margin: 0 auto; font-family: Arial, Helvetica, sans-serif; background-color: #fff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <div style="margin: 0 auto; text-align: center;">
                <img src="https://mitesismexico.com/static/media/Logo.e46b698fba98d7d7129a.png" style="display: block; max-width: 150px; margin: 0 auto;">
              </div>
              <p style="color: black;">Petición de cotización.</p>
              <ul style="color: black;">
                <li>Nombre: ${name}</li>
                <li>Tema o tipo de proyecto: ${project}</li>
                <li>Carrera: ${career}</li>
                <li>Correo electrónico: ${email}</li>
                <li>Teléfono: ${phone}</li>
              </ul>
            </div>
          </body>
        </html>
      `;

      await resend.emails.send({
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Petición de cotización',
        html: emailAdmin,
      });

      // ---------------------------
      // ✉️ Correo para el cliente
      // ---------------------------
      const emailClient = `
        <html>
          <body style="background-color: #f4f4f4; padding: 2em 0;">
            <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #fff; border: 1px solid #ddd; border-radius: 10px; font-family: Arial, Helvetica, sans-serif; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="text-align: center; padding: 1em;">
                  <img src="https://mitesismexico.com/static/media/Logo.e46b698fba98d7d7129a.png" style="display: block; max-width: 150px; margin: 0 auto;">
                </td>
              </tr>
              <tr>
                <td style="padding: 2em; color: #333;">
                  <p>¡Hola ${name}!</p>
                  <p>Hemos recibido tu solicitud de cotización. Nuestro equipo se pondrá en contacto contigo en breve.</p>
                  <p>Si tienes preguntas, contáctanos por WhatsApp:</p>
                  <p><a href="https://wa.me/5215564727323" style="color: #023b6d;" target="_blank">Haz clic aquí</a></p>
                  <p>El equipo de <strong>Mi Tesis México</strong></p>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `;

      await resend.emails.send({
        from: process.env.EMAIL,
        to: email,
        subject: '¡Tu petición de cotización ha sido recibida!',
        html: emailClient,
      });

      // Respuesta al cliente
      return res.status(200).json({ message: 'Correos enviados exitosamente.' });

    } catch (error) {
      console.error("Error en el servidor:", error);
      return res.status(500).json({ message: 'Error al enviar correo', error });
    }
  },
};
