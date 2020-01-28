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
    form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
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
