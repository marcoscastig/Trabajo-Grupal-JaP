function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
} 


   
    const user = document.getElementById('nombre');
    const lastname = document.getElementById('apellido');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const terminos = document.getElementById('terminos');
    const boton = document.getElementById('regBtn')


    boton.addEventListener("click", function(){
        if (user.value == "" || lastname.value == "" || !terminos.checked || email.value == "" || password1.value == "" || password2.value =="" || password1.value != password2.value || password1.value.length < 6) {
            showAlertError()
        }
        else {
            showAlertSuccess()
        }

    })
   














