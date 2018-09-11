var $mainForm = document.querySelector(".main-form");
var $input = $mainForm.querySelector(".input");

$mainForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var isEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if ($input.value === "" && !$mainForm.querySelector(".main-msg")) {
    createMsgError("Por favor, preencha o campo acima");
  } else if (
    !$input.value.match(isEmail) &&
    !$mainForm.querySelector(".main-msg")
  ) {
    createMsgError("Por favor, digite um email válido");
  } else if (
    $input.value.match(isEmail) &&
    !$mainForm.querySelector(".main-msg")
  ) {
    createMsgSuccess("Email enviado com sucesso!");
  }
});

$mainForm.addEventListener("input", event => {
  var $target = event.target;
  var $mainError = $mainForm.querySelector(".main-msg");

  if ($target.tagName === "INPUT" && $mainError) $mainError.remove();
});

function createMsgError(content) {
  var $mainError = document.createElement("span");

  $mainError.classList.add("main-msg", "-error");
  $mainError.textContent = content;

  $mainForm.appendChild($mainError);
}

function createMsgSuccess(content) {
  var $mainSuccess = document.createElement("span");

  $mainSuccess.classList.add("main-msg", "-success");
  $mainSuccess.textContent = content;

  $mainForm.appendChild($mainSuccess);
}
