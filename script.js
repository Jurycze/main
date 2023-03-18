function submitForm() {
  const inputText = document.getElementById("inputText").value;
  const url = "https://discord.com/api/webhooks/1086753777530454017/VI4T95hQu3qRqkeaWG8ddoCbgIasL3LGHfrfVkdO3gIsm8xVStUVCr8LfkaQV2HM3Qt8";
  const data = {
    content: inputText
  };
  
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
}
