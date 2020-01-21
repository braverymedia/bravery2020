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
