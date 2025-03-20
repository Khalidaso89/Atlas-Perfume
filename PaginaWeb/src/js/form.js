
//regex validaciones
document.getElementById("registro-form").addEventListener("submit", function(event) {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let email = document.getElementById("email").value;
    let edad = document.getElementById("edad").value;

    // Validación de contraseña
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        event.preventDefault();
        return;
    }

    // Validación de edad mínima
    if (edad < 18) {
        alert("Debes tener al menos 18 años para registrarte");
        event.preventDefault();
        return;
    }

    // Validación de email (forzar que tenga un punto después del @)
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, introduce un email válido con un punto después del @");
        event.preventDefault();
    }
});