function submitForm() {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1086760712266846331/bIsrqitbZZJo8NyghGeRRRhHrNj-wNOb2lLg_yFNpaQJNgE4Vhifgh3JgnSI1bPUTbhB", true);
  request.setRequestHeader('Content-type', 'application/json');

  var inputText = document.getElementById("inputText").value;
  var params = {
    username: "Web Form",
    avatar_url: "",
    content: inputText
  }

  request.send(JSON.stringify(params));
}
