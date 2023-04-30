const form = document.getElementById("meuForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  if (nome === "") {
    alert("Por favor, digite seu nome");
    return;
  }

  if (idade === "" || idade < 18) {
    alert("Por favor, digite sua idade corretamente");
    return;
  }

  if (email === "" || !email.includes("@")) {
    alert("Por favor, digite um endereço de e-mail válido");
    return;
  }

  if (telefone === "" || isNaN(telefone)) {
    alert("Por favor, digite um número de telefone válido");
    return;
  }
  
  form.submit();

  alert("Obrigada pelo contato! Logo um de nossos atendentes entrará em contato.");
})