document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Scroll-triggered animation (with reverse)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));

// Gallery filter logic
const filter = document.getElementById('event-filter');
const images = document.querySelectorAll('.gallery-grid img');
filter.addEventListener('change', function() {
  const val = this.value;
  images.forEach(img => {
    if (val === 'all' || img.dataset.event === val) {
      img.style.display = '';
    } else {
      img.style.display = 'none';
    }
  });
});

// Modal logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
    modalCaption.textContent = this.alt;
  });
});

closeBtn.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};