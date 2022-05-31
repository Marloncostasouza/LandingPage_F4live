function Enviar() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  let infoUser = email.split("@");
  let infoDomain = infoUser[1].split(".");

  let user = infoUser[0];
  let domain = infoDomain[0];
  let com = infoDomain[1];

  let userRegex = /^[a-z0-9.]{1,32}$/i;
  let domainRegex = /^[a-z0-9]{1,16}$/;
  let emptyRegex = /^\s*$/;

  if (mensagem.match(emptyRegex)) {
    alert("Erro no envio: Insira uma mensagem");
  } else if (
    !user.match(userRegex) ||
    !domain.match(domainRegex) ||
    com !== "com"
  ) {
    alert("Erro no envio: Endereço de email invalido");
  } else {
    alert(`Obrigado pelo contato,${nome ? nome : user}`);
  }
}
