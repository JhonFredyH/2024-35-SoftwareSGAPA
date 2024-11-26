

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.icon_right').addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        this.textContent = isPassword ? 'visibility' : 'visibility_off';
    });
});
