function submitForm() {
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1086758674548129844/JCUCc_2_8fCmCCCdEPYRUMuuIopj--oMNvP8glv3i4EhvVVPs3-p0VXTGqyNiA2NmWln", true);
  request.setRequestHeader('Content-type', 'application/json');

  var inputText = document.getElementById("inputText").value;
  var params = {
    username: "Web Form",
    avatar_url: "",
    content: inputText
  }

  request.send(JSON.stringify(params));
}
