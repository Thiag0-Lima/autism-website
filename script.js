document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    // Captura os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Exibe uma mensagem de sucesso
    document.getElementById('formMessage').textContent = `Obrigado, ${name}! Sua mensagem foi enviada.`;
    document.getElementById('formMessage').style.color = 'green';

    // Limpa o formulário
    document.getElementById('contactForm').reset();
});