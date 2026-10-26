let form = document.getElementById("formContacto");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let respuestaCaptcha = grecaptcha.getResponse();

    if(respuestaCaptcha.length == 0){
        alert("dale copate y confirma que no sos un robot");
        return;
    }
    alert("bien ahí, se mando correcto");
});

import emailjs from '@emailjs/browser';

const templateParams = {
  from_name: 'Juan Pérez',
  to_name: 'Destinatario',
  message: '¡Hola, este es un mensaje de prueba desde EmailJS!'
};

emailjs.send('service_18hdaff', 'template_z8rg1tm', templateParams, 'Jj90ptdivMpcaRxE6')
  .then((response) => {
     console.log('¡Correo enviado con éxito!', response.status, response.text);
  }, (error) => {
     console.log('Fallo al enviar:', error);
  });
