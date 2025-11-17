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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            showError(emailInput, 'E-mail é inválido');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailInput, 'E-mail inválido');
            return false;
        } else {
            showSeccess(emailInput);
            return true;
        }
    }

    function validatePassword() {
        const password = passwordInput.ariaValueMax.trim();

        if (password === ''){
            showError(passwordInput, 'Senha é obrigatória'); 
            return false;
        } else if (password.length < 6) {
            showError(passwordInput, 'Senha deve ter pelo menos 6 caracteres');
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    }

    function showError(input, message) {
        const inputGroup = input.parentElement;

        // Remove classes de sucesso se existirem 
        input.classList.remove('seccess');

        // Adiciona classes de erro
        input.classList.add('error');

        // Remove mensagens de erro anteriores 
        const existingError = inputGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Adiciona mensagem de erro 
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.innerText = message;
        inputGroup.appendChild(errorElement);
    }

    function showSeccess(input) {
        const inputGroup = input.parentElement;

        // Remove classes de erro se existirem 