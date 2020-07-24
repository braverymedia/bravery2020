const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'contact');
  fetch('/', {
    method: 'POST',
    body: data
  })
  .then(() => {
    form.innerHTML = `<div class="confirmation"><p>Thanks for getting in touch. We'll reply to you shortly!</p></div>`;
  })
  .catch(error => {
    form.innerHTML = `<div class="form--error">Something went wrong, please email us! Error: ${error}</div>`;
  })
}

const contactForm = document.querySelector('#bravery-contact')
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(contactForm);
  })
}

// Nav back from contact form
const closeContact = document.querySelector('.trigger-navback');
let referrer = document.referrer;
if (closeContact) {
  closeContact.addEventListener('click', e => {
    if ( referrer.match(/^https?:\/\/([^\/]+\.)?bravery\.co(\/|$)/i) ) {
      window.location.replace(referrer)
    } else {
      window.location.replace('https://bravery.co')
    }
  })
}

// panel color triggers
// const panels = document.querySelectorAll('.panel');
// const panelConfig = {
//   rootMargin: '20px',
//   threshold: 1
// };

// let panelObserver = new IntersectionObserver(function (entries, self) {
//   entries.forEach( entry => {
//     if ( entry.isIntersecting ) {
//       if (entry.target.classList.contains('services') || entry.target.classList.contains('testimonial') ) {
//         navColorChange("ffffff");
//       }
//       else {
//         navColorChange("000000");
//       }
//     }
//   })
// });

// panels.forEach( panel => { panelObserver.observe(panel); });

// function navColorChange(color) {
//   document.documentElement.style.setProperty('--color-nav', "#" + color);
// }


// Lazy loading images
const images = document.querySelectorAll('[data-src]');
const config = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 0
};
let observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        self.unobserve(entry.target);
      }
  });
}, config);

images.forEach(image => { observer.observe(image); });

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) { return; }
  img.src = src;
  img.classList.add('lazy-loaded');
}

// Mobile nav
const triggerMenu = document.querySelector('.menu-trigger');

triggerMenu.addEventListener('click', e => {
  if ( document.body.classList.contains('menu-open') ) {
    document.body.classList.remove('menu-open');
  }
  else {
    document.body.classList.add('menu-open');
  }
});