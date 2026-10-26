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
