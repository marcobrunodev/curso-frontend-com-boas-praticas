/*
  Objetivo: deixar o primeiro bullet com opacity 1 assim que o usuário clicar nele

  1 - Pegar o primeiro component com class bullet (OK)
  2 - Adiconar um ouvinte para o evento de clique do component que pegarmos anteriormente (OK)
  3 - No evento do clique nós queremos adicionar a class -isActive (OK)
  4 - Se o component bullet tiver a class -isActive nos queremos removéla caso contrario nós deveremos adicionar a class -isActive
*/

/* 
  BOM (Browser Object Model) - window
  DOM (Document Object Model) - document
*/

var $bullet = document.querySelector('.bullet')

$bullet.addEventListener('click', clickInBullet)

function clickInBullet() {
  $bullet.classList.toggle('-isActive')
}








