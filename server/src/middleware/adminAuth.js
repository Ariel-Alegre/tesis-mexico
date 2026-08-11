const jwt = require('jsonwebtoken');

const TOKEN_TTL = '8h';

function getJwtSecret() {
  return process.env.JWT_SECRET || process.env.FIRMA_TOKEN;
}

function createAdminToken(email) {
  const secret = getJwtSecret();
  if (!secret) throw new Error('JWT_SECRET no está configurado');
  return jwt.sign({ email, role: 'admin' }, secret, { expiresIn: TOKEN_TTL });
}

function requireAdmin(req, res, next) {
  const authorization = req.headers.authorization || '';
  const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : null;
  const secret = getJwtSecret();

  if (!token || !secret) {
    return res.status(401).json({ message: 'Acceso administrativo requerido.' });
  }

  try {
    const payload = jwt.verify(token, secret);
    if (payload.role !== 'admin') throw new Error('Rol inválido');
    req.admin = payload;
    return next();
  } catch (_) {
    return res.status(401).json({ message: 'La sesión no es válida o ha vencido.' });
  }
}

module.exports = { createAdminToken, requireAdmin };
