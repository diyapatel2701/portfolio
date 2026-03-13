// SERVICES ACCORDION
document.querySelectorAll('.service-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.service-item')
      .forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// GLOW FOLLOW
const glow = document.querySelector('.glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX * 0.3 + 'px';
  glow.style.top = e.clientY * 0.3 + 'px';
});

function setActive(icon) {
  document.querySelectorAll('.side-menu i').forEach(i => {
    i.classList.remove('active');
  });
  icon.classList.add('active');
}
