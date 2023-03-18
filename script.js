function submitForm() {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1081617393870196776/fDKBO8XvXcwAJE5EBNth6OghBVBPJzqJ_0vcVoh9m_Tm-rdtaBd0qELCxAbACE5e1r3h", true);
  request.setRequestHeader('Content-type', 'application/json');

  var inputText = document.getElementById("inputText").value;
  var params = {
    username: "Web Form",
    avatar_url: "",
    content: inputText
  }

  request.send(JSON.stringify(params));
}
