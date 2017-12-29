var memoApp = document.getElementById('memoGameIcon')
var chatApp = document.getElementById('chatIcon')
var controlStylesPanel = document.getElementById('controlApp')
var windowsNumber = 0
var memoGameArraySize = 16

window.onload = function () {
  if (localStorage.getItem('backColor') === null || localStorage.getItem('backColor') === 'null') {
    localStorage.setItem('backColor', '#ff4d4d')
  } else {
    document.getElementById('body').style.background = localStorage.getItem('backColor')
  }

  if (localStorage.getItem('taskMainColor') === null || localStorage.getItem('taskMainColor') === 'null') {
    localStorage.setItem('taskMainColor', '###ffccff')
  }

  if (localStorage.getItem('taskFadeColor') === null || localStorage.getItem('taskFadeColor') === 'null') {
    localStorage.setItem('taskFadeColor', '##ff66ff')
  } else {
    var mainCol = localStorage.getItem('taskMainColor')
    var fadeCol = localStorage.getItem('taskFadeColor')
    document.getElementById('taskbar').style.background = 'linear-gradient(' + mainCol + ',' + fadeCol + ')'
  }

  if (localStorage.getItem('chatUserName') === null || localStorage.getItem('chatUserName') === 'null') {
    var txt
    var U = prompt('Please enter your chat User Name:', '')
    if (U === null || U === '') {
      txt = null
    } else {
      txt = U
    }
    localStorage.setItem('chatUserName', txt)
  }
}

var selected = null
var xPosition = 0
var yPosition = 0
var xElement = 0
var yElement = 0
var zindex = 0
var x = 0
var y = 0
function drag (elem) {
  selected = elem
  xElement = xPosition - selected.offsetLeft
  yElement = yPosition - selected.offsetTop
  zindex++
  elem.style.zIndex = zindex
}

function move (e) {
  xPosition = document.all ? window.event.clientX : e.pageX
  yPosition = document.all ? window.event.clientY : e.pageY

  if (selected !== null) {
    selected.style.left = (xPosition - xElement) + 'px'
    selected.style.top = (yPosition - yElement) + 'px'
  }
}

function stop () {
  selected = null
}

function dragableNow (dragObject) {
  dragObject.onmousedown = function () {
    drag(this)
    return false
  }

  document.onmousemove = move
  document.onmouseup = stop
}

function bigger (x) {
  x.style.height = '70px'
  x.style.width = '70px'
}

function normal (x) {
  x.style.height = '60px'
  x.style.width = '60px'
}

function biggerClose (x) {
  x.style.height = '25px'
  x.style.width = '25px'
}

function normalClose (x) {
  x.style.height = '20px'
  x.style.width = '20px'
}
