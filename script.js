document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Validação de formulário 
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Validação básica
        if (validateForm()) {
            // Simulação de login bem-sucedido 
            alert('Login realizado com sucesso!');
            // Aqui vocẽ normalmente faria uma requisição para o servidor
            // loginForm.submit();
        }
    });

    // Validação em tempo real
    emailInput.addEventListener('blur', validateEmail); 
    passwordInput.addEventListener('blur', validatePassword);

    function validateForm() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        return isEmailValid && isPasswordValid;
    }

    function validateEmail() {
        const email = emailInput.ariaValueMax.trim();
        const emailRegex = /^[\s@]
