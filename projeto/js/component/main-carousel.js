/*
  Objetivo: Fazer com que o card relacionado com o bullet tem a class -isActive

  1 - Pegar o card que está ativo no momento que o navegador carrega o nosso JS
  2 - Pegar o card relacionado com o bullet
  3 - Remover o class -isActive do card que está com ela no momento que o navegador carrega o nosso site
  4 - Adicionar a class -isActive para este card
*/

/* 
  BOM (Browser Object Model) - window
  DOM (Document Object Model) - document
*/

var $bullet = document.querySelectorAll('.bullet')
var $bulletIsActive = document.querySelector('.bullet.-isActive')
var $cardIsActive = document.querySelector('.card.-isActive')

console.log($cardIsActive)

$bullet.forEach((item) => {
  item.addEventListener('click', clickInBullet)
})

function clickInBullet() {
  var $bulletClicked = this

  $bulletIsActive.classList.remove('-isActive')
  $bulletClicked.classList.add('-isActive')
  $bulletIsActive = $bulletClicked

  $cardIsActive.classList.remove('-isActive')
  var idCard = $bulletClicked.querySelector('a').getAttribute('href')
  var $targetCard = document.querySelector(idCard)
  $targetCard.classList.add('-isActive')
  $cardIsActive = $targetCard
}








