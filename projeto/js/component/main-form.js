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

  if ($input.value === "" && !$mainForm.querySelector(".main-error")) {
    // var $mainError = document.createElement("span");
    // $mainError.classList.add("main-error");
    // $mainError.textContent = "Preecha o campo acima com um email";

    // $mainForm.appendChild($mainError);
    var content = "Preecha o campo acima com um email";

    var $mainError = `
      <span class="main-error">${content}</span>
    `;

    $mainForm.innerHTML = $mainForm.innerHTML + $mainError;
  }
});
