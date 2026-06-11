export function isAdminMode() {
  return localStorage.getItem('admin_mode') === 'true';
}

export function clearAdminMode() {
  localStorage.removeItem('admin_mode');
}
