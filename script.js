var formulario = document.getElementById("formContacto");
formulario.addEventListener("submit", sendEmail);

var serviceId = "service_og8ydyr";
var templateId = "template_b7mz4ui";
var apiKey = "vIVCGnBskUpFy5bDA";

function sendEmail(event){
    event.preventDefault();
    emailjs.init(serviceId);

    emailjs.sendForm(serviceId, templateId, formulario, apiKey);
    .then(result => alert("Su mensaje se ha enviado con exito!"));
    .catch(error => alert("Ha ocurrido un error!"));
}
