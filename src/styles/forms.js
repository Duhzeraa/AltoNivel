// ==========================================================
// 1. O PULO DO GATO
// Troca "SEU_LINK_AQUI" pelo link que você copiou no Passo 3
// ==========================================================
const URL_DO_SCRIPT = "https://script.google.com/macros/s/AKfycbw6R4UGFsCLZqd4JY35JdO8ttoSyZZaf6dZp1l54k_nWCYaBWq1OwEKdUUmb7Pic54B/exec"; // Confere se seu link tá aqui!

// 2. A gente "chama" os elementos do HTML pelo ID
const form = document.getElementById('meu-formulario');
const feedback = document.getElementById('feedback-msg');

// 3. Isso fica "ouvindo" o clique no botão "Enviar"
form.addEventListener("submit", function(e) {

  // 4. Impede a página de recarregar (o JS assume daqui)
  e.preventDefault(); 

  // 5. Mostra a mensagem de "enviando"
  feedback.style.display = 'block'; // Mostra a div
  feedback.style.color = 'black'; // Cor padrão
  feedback.innerText = 'Enviando, segura aí...';

  // 6. Pega todos os dados do formulário
  const dados = new FormData(form);

  // 7. A MÁGICA: Envia os dados pro seu link do Google
  fetch(URL_DO_SCRIPT, {
    method: 'POST',
    body: dados
  })
  // 8. Pega a resposta que o Google Script mandou
  .then(res => res.json())
  // 9. Agora a gente vê a resposta (se deu 'success' ou 'error')
  .then(data => {
    if (data.status == 'success') {
      // Deu BOM!
      feedback.innerText = 'Mensagem enviada! Logo menos eu respondo. Valeu!';
      feedback.style.color = 'green';
      form.reset(); // Limpa os campos do formulário

    } else {
      // Deu RUIM! (O erro veio do Google Script)
      feedback.innerText = 'Ih, deu B.O. (' + data.message + '). Tenta de novo.';
      feedback.style.color = 'red';
    }
  })
  // 10. Isso aqui pega se o "servidor" (script) tiver CAÍDO
  .catch(error => {
    feedback.innerText = 'Deu um erro feio na conexão. Tenta mais tarde.';
    feedback.style.color = 'red';
  });
});