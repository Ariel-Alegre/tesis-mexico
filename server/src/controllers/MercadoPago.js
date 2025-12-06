require('dotenv').config();
const mercadopago = require("mercadopago");

mercadopago.configure({
  access_token: "APP_USR-3698460790581666-042914-fac19da0a2a41a7c39db81962810244f-2254542493",
});



module.exports = {
    MercadoPago: async (req, res) => {
    try {
     const { amount, name, lastName, email, reference, phone } = req.body;
  
        if (!amount || isNaN(amount) || amount <= 0) {
          return res.status(400).json({ error: "El monto debe ser un número válido." });
        }
    
        const preference = {
          items: [
            {
              title: "Pago personalizado",
              quantity: 1,
              currency_id: "MXN",
              unit_price: parseFloat(amount), // Usa el monto ingresado por el usuario
            },
          ],
          back_urls: {
            success: "https://www.mitesismexico.com/exitoso",
            failure: "https://www.mitesismexico.com/error",
            pending: "https://www.mitesismexico.com/pendiente",
          },
          auto_return: "approved",
            payment_methods: {
    excluded_payment_types: [], // Esto asegura que no se excluyan tipos de pago
    installments: 9, // Número de cuotas permitidas, ajusta según lo que necesites
  },
          metadata: {
            name,
            lastName,
            email,
            phone,
            reference,
          },
        };
    
        const response = await mercadopago.preferences.create(preference);
        
        res.json({ 
          id: response.body.id, 
          init_point: response.body.init_point 
        });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
