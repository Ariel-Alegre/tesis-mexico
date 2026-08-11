const TOKEN_KEY = 'tesisMexicoAdminToken';

export const getAdminToken = () => localStorage.getItem(TOKEN_KEY);
export const isAdminAuthenticated = () => Boolean(getAdminToken());
export const saveAdminToken = (token) => localStorage.setItem(TOKEN_KEY, token);
export const clearAdminToken = () => localStorage.removeItem(TOKEN_KEY);

// Añade la credencial sólo a las solicitudes de la API mientras existe una sesión.
export function enableAuthenticatedApiRequests() {
  if (window.__tesisMexicoFetchConfigured) return;
  window.__tesisMexicoFetchConfigured = true;
  const nativeFetch = window.fetch.bind(window);
  window.fetch = (input, init = {}) => {
    const url = typeof input === 'string' ? input : input.url;
    const token = getAdminToken();
    if (!token || !url.includes('/api/')) return nativeFetch(input, init);
    const headers = new Headers(init.headers || (typeof input === 'object' ? input.headers : undefined));
    headers.set('Authorization', `Bearer ${token}`);
    return nativeFetch(input, { ...init, headers });
  };
}
