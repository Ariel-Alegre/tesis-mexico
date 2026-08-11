import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveAdminToken } from '../auth';

const API_URL = process.env.REACT_APP_API_URL || 'https://tesis-mexico-production.up.railway.app/api';

export default function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'No se pudo iniciar sesión.');
      saveAdminToken(data.token);
      navigate(location.state?.from || '/editar/inicio', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#f4f7fb', padding: 20 }}>
    <form onSubmit={submit} style={{ width: '100%', maxWidth: 390, background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 8px 30px #002b4d1f' }}>
      <h1 style={{ color: '#023b6d', fontSize: 26 }}>Administración</h1>
      <p>Inicia sesión para editar el contenido del sitio.</p>
      <label>Correo electrónico<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: 10, margin: '6px 0 16px' }} /></label>
      <label>Contraseña<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: 10, margin: '6px 0 16px' }} /></label>
      {error && <p role="alert" style={{ color: '#b42318' }}>{error}</p>}
      <button type="submit" disabled={loading} style={{ width: '100%', padding: 11, border: 0, borderRadius: 6, background: '#023b6d', color: '#fff' }}>{loading ? 'Ingresando...' : 'Ingresar'}</button>
    </form>
  </main>;
}
