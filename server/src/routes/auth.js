const { Router } = require('express');
const bcrypt = require('bcrypt');
const { createAdminToken, requireAdmin } = require('../middleware/adminAuth');

const router = Router();

router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body || {};
  const adminEmail = process.env.ADMIN_EMAIL;
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!adminEmail || !passwordHash || !process.env.JWT_SECRET) {
    return res.status(503).json({ message: 'El acceso administrativo aún no está configurado.' });
  }

  const emailMatches = email && email.trim().toLowerCase() === adminEmail.trim().toLowerCase();
  const passwordMatches = typeof password === 'string' && await bcrypt.compare(password, passwordHash);
  if (!emailMatches || !passwordMatches) {
    return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
  }

  return res.json({ token: createAdminToken(adminEmail), user: { email: adminEmail } });
});

router.get('/auth/session', requireAdmin, (req, res) => res.json({ user: { email: req.admin.email } }));

module.exports = router;
