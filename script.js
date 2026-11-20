// ===== JavaScript propio de la página de Edgar =====
// Tooltips, popovers y toasts son "opt-in" en Bootstrap:
// no funcionan solos, hay que activarlos aquí.

// Activa todos los tooltips (elementos con data-bs-toggle="tooltip")
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(elemento => new bootstrap.Tooltip(elemento));

// Activa todos los popovers (elementos con data-bs-toggle="popover")
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(elemento => new bootstrap.Popover(elemento));

// Muestra el toast de saludo al hacer clic en el botón "Salúdame"
const botonSaludo = document.getElementById('btnSaludo');
const toastSaludo = bootstrap.Toast.getOrCreateInstance(document.getElementById('toastSaludo'));

botonSaludo.addEventListener('click', () => {
    toastSaludo.show();
});
