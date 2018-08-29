/*
  Objetivo: Verificar se o input do email tem valor, se não tiver valor aparecer uma menagem
  amigável para o usuário avisando que ele tem que preencher o input com um email

  1 - Pegar o component .main-form (OK)
  2 - Pegar o elemento .input (OK)
  3 - Ouvir o evento de submit no component .main-form (OK)
  4 - Dentro evento submit nós verificamos se o elemento .input tem algo digitado, se não mostra  mensagem
*/
/* 
  window => BOM (Browser Object Model)
  document => DOM (Document Object Model)

  Começar variaveis com $ é apenas uma boa práticas - toda variavel inicia $ nós estamos falando no nosso código que ela guarda uma referencia para elemento do HTML

  Node = nó de arvore HTML
*/

// console.log("Form", $mainForm);
// console.log(typeof "Input", $input, typeof 1);

var $mainForm = document.querySelector(".main-form");
var $input = $mainForm.querySelector(".input");

$mainForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if ($input.value === "" && !$mainForm.querySelector(".main-error")) {
    createMsgError("Por favor, preencha o campo acima");
  } else if (
    !$input.value.match(isEmail) &&
    !$mainForm.querySelector(".main-error")
  ) {
    createMsgError("Por favor, digite um email válido");
  }
});

$mainForm.addEventListener("input", event => {
  var $target = event.target;
  var $mainError = $mainForm.querySelector(".main-error");

  if ($target.tagName === "INPUT" && $mainError) $mainError.remove();
});

function createMsgError(content) {
  var $mainError = document.createElement("span");

  $mainError.classList.add("main-error");
  $mainError.textContent = content;

  $mainForm.insertBefore($mainError, null);
}
