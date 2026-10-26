emailjs.init("Jj90ptdivMpcaRxE6");

// 1. Creamos las variables una a una capturando los valores del HTML
    var nombreUsuario = document.getElementById("nombre").value;
    var emailUsuario = document.getElementById("email").value;
    var asuntoUsuario = document.getElementById("asunto").value;
    var mensajeUsuario = document.getElementById("mensaje").value;

    // 2. Creamos el objeto agrupando esas variables para EmailJS
    var templateParams = {
        name: nombreUsuario,
        correo: emailUsuario,
        title: asuntoUsuario,
        message: mensajeUsuario
        
    };

    // 3. Enviamos el objeto usando emailjs.send
    emailjs.send("service_18hdaff", "template_z8rg1tm", templateParams)
        .then(function(response) {
            console.log("¡Correo enviado con éxito!", response.status, response.text);
            alert('¡Mensaje enviado!');
            document.getElementById("contact-form").reset(); // Limpia el formulario
        }, function(error) {
            console.log("Error al enviar:", error);
            alert("Hubo un error al enviar el mensaje.");
        });
});
