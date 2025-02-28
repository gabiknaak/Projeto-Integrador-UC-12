function formatarCPF(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length > 3) value = value.slice(0, 3) + '.' + value.slice(3);
    if (value.length > 7) value = value.slice(0, 7) + '.' + value.slice(7);
    if (value.length > 11) value = value.slice(0, 11) + '-' + value.slice(11, 13);
    input.value = value;
}

function validarSenha(event) {
    const senha = document.getElementById('exampleInputPassword1').value;
    const confirmSenha = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('passwordError');

    if (senha !== confirmSenha) {
        event.preventDefault();
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }
}
