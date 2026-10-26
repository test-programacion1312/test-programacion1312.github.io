emailjs.init("Jj90ptdivMpcaRxE6");

// 1. Creamos las variables una a una capturando los valores del HTML
    const nombreUsuario = document.getElementById("nombre").value;
    const emailUsuario = document.getElementById("email").value;
    const asuntoUsuario = document.getElementById("asunto").value;
    const mensajeUsuario = document.getElementById("mensaje").value;

    // 2. Creamos el objeto agrupando esas variables para EmailJS
    const templateParams = {
        from_name: nombreUsuario,
        from_email: emailUsuario,
        asunto: asuntoUsuario,
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
