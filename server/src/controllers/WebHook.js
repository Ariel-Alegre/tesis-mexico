require('dotenv').config();
const mercadopago = require("mercadopago");
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
  socketTimeout: 15000,
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  WebHook: async (req, res) => {
    const payment = req.body;

    try {
      if (payment.type === "payment") {
        const paymentInfo = await mercadopago.payment.findById(payment.data.id);

        if (paymentInfo.body.status === "approved") {
          const { name, lastName, email, reference, phone } = paymentInfo.body.metadata;

          // Validar email
          if (!email || !email.trim()) {
            return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Dirección de correo electrónico no válida' });
          }

          // Contenido del correo interno (para el administrador)
          const internalEmailContent = `
            <html>
              <body>
                <h2 style="color: black;">Nuevo pago recibido</h2>
                <p><strong>Nombre:</strong> ${name} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>

                <p><strong>Referencia:</strong> ${reference}</p>
                <p><strong>Monto:</strong> $${paymentInfo.body.transaction_amount}</p>
              </body>
            </html>
          `;

          await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Nuevo pago recibido - ${name} ${lastName}`,
            html: internalEmailContent,
          });

          // Contenido del correo al usuario
          const userEmailContent = `
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
                      <p style="font-size: 16px; margin-bottom: 1.5em;">Hemos recibido tu pago con éxito.</p>
                      <p style="color: black;">Referencia: ${reference}</p>
                      <p style="color: black;">Monto abonado: $${paymentInfo.body.transaction_amount}</p>
                      <p style="color: black;">Gracias por confiar en nosotros. Pronto nos pondremos en contacto contigo.</p>
                      <p style="color: black;">Contáctanos por WhatsApp: <a href="https://wa.me/+5215564727323" style="color: #1976d2;" target="_blank">Haz clic aquí para enviar un mensaje</a></p>
                      <p style="font-size: 16px;">Equipo de <strong>Mi tesis México</strong>.</p>
                    </td>
                  </tr>
                </table>
              </body>
            </html>
          `;

          await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: `¡Gracias ${name} por tu pago!`,
            html: userEmailContent,
          });
        }
      }

      res.sendStatus(200);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
