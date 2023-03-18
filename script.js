const form = document.querySelector('form');
const webhookUrl = 'https://discord.com/api/webhooks/1086753777530454017/VI4T95hQu3qRqkeaWG8ddoCbgIasL3LGHfrfVkdO3gIsm8xVStUVCr8LfkaQV2HM3Qt8';

form.addEventListener('submit', e => {
  e.preventDefault();

  const message = {
    content: `Nový návrh: ${form.elements.navrhy.value}`
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  })
  .then(response => console.log('Návrh byl odeslán na Discord.'))
  .catch(error => console.error(error));
});
