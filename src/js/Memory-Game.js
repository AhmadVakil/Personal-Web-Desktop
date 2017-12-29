memoApp.addEventListener('click', function () {
  var tmpDiv = document.createElement('div')
  windowsNumber++
  var mainWindow = document.createElement('div')
  mainWindow.id = 'memory_board' + windowsNumber

  var closeWindow = document.createElement('IMG')
  closeWindow.setAttribute('src', 'image/close.png')
  closeWindow.style.marginLeft = '120px'
  closeWindow.setAttribute('width', '20')
  closeWindow.setAttribute('height', '20')
  closeWindow.style.cursor = 'pointer'

  closeWindow.addEventListener('click', function () {
    var parent = document.getElementById('body')
    var child = document.getElementById(mainWindow.id)
    parent.removeChild(child)
  })

  zindex++
  mainWindow.style.zIndex = zindex

  var bar = document.createElement('P')
  bar.id = 'innerDivMemo'
  bar.style.top = '0px'
  bar.style.marginTop = '0px'
  bar.style.marginLeft = '0px'
  bar.style.cssFloat = 'left'
  bar.style.zIndex = zindex++
  bar.style.textAlign = 'left'

  var windowName = document.createElement('span')
  windowName.innerHTML = 'Memo Game'
  windowName.style.display = 'inline-block'
  windowName.style.fontSize = '22px'

  var img = document.createElement('IMG')
  img.setAttribute('src', 'image/memoGame.png')
  img.setAttribute('width', '20')
  img.setAttribute('height', '20')
  img.setAttribute('alt', 'No Image!')
  img.style.margin = '2px 5px'
  img.style.display = 'inline-block'

  bar.appendChild(img)
  bar.appendChild(windowName)
  bar.appendChild(closeWindow)

  mainWindow.addEventListener('drag', dragableNow(mainWindow))
  var element = document.getElementById('body')

  mainWindow.style.position = 'absolute'
  mainWindow.style.borderRadius = '10px 10px 0px 0px'
  mainWindow.style.boxShadow = '0px 0px 35px white'
  bar.style.position = 'absolute'

  x += 20
  y += 20
  if (y > 320) {
    x *= 1.5
    y = 0
  }
  mainWindow.style.left = x + 'px'
  mainWindow.style.top = y + 'px'
  mainWindow.style.background = '#CCC'
  mainWindow.style.border = '#999 1px solid'
  mainWindow.style.width = '300px'
  mainWindow.style.height = '420px'
  mainWindow.style.margin = '0px auto'

  var memoryArray2x2 = ['1', '1', '2', '2']
  var memoryArray2x4 = ['1', '1', '2', '2', '3', '3', '4', '4']
  var memoryArray4x4 = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8']
  if (memoGameArraySize === 4) {
    var memoryArray = memoryArray2x2
  }
  if (memoGameArraySize === 8) {
    var memoryArray = memoryArray2x4
  }
  if (memoGameArraySize === 16) {
    var memoryArray = memoryArray4x4
  }
  var itemsValues = []
  var itemsID = []
  var turnedItems = 0
  Array.prototype.shuffle = function () {
    var i = this.length, j, temp
    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1))
      temp = this[j]
      this[j] = this[i]
      this[i] = temp
    }
  }
  element.appendChild(mainWindow)
  var timePart = document.createElement('div')
  timePart.style.background = '#CCC'
  timePart.style.bottom = '0px'
  timePart.style.position = 'absolute'
  timePart.style.zIndex = zindex++
  timePart.innerHTML = 'Time will appear here'
  timePart.style.width = '300px'
  timePart.style.textAlign = 'center'

  var idKeeper = []
  render()
  function render () {
    turnedItems = 0
    var output = ''
    memoryArray.shuffle()
    for (var i = 0; i < memoryArray.length; i++) {
      output += '<div id="tile_' + i + '' + windowsNumber + '' + zindex + '"></div>'
      var tmp = 'tile_' + i + '' + windowsNumber + '' + zindex
      idKeeper[i] = tmp
    }

    tmpDiv.innerHTML = output
    mainWindow.appendChild(bar)
    mainWindow.appendChild(tmpDiv)
    mainWindow.appendChild(timePart)
  }
  if (memoryArray.length === 4) {
    mainWindow.style.height = '130px'
  }
  if (memoryArray.length > 4) {
    mainWindow.style.height = '230px'
  }
  if (memoryArray.length > 8) {
    mainWindow.style.height = '420px'
  }

  var item0 = document.getElementById(idKeeper[0])
  item0.addEventListener('click', function () { showIt(item0, memoryArray[0]) })
  var item1 = document.getElementById(idKeeper[1])
  item1.addEventListener('click', function () { showIt(item1, memoryArray[1]) })
  var item2 = document.getElementById(idKeeper[2])
  item2.addEventListener('click', function () { showIt(item2, memoryArray[2]) })
  var item3 = document.getElementById(idKeeper[3])
  item3.addEventListener('click', function () { showIt(item3, memoryArray[3]) })
  if (memoryArray.length > 4) {
    mainWindow.style.height = '230px'
    var item4 = document.getElementById(idKeeper[4])
    item4.addEventListener('click', function () { showIt(item4, memoryArray[4]) })
    var item5 = document.getElementById(idKeeper[5])
    item5.addEventListener('click', function () { showIt(item5, memoryArray[5]) })
    var item6 = document.getElementById(idKeeper[6])
    item6.addEventListener('click', function () { showIt(item6, memoryArray[6]) })
    var item7 = document.getElementById(idKeeper[7])
    item7.addEventListener('click', function () { showIt(item7, memoryArray[7]) })
  }
  if (memoryArray.length > 8) {
    mainWindow.style.height = '420px'
    var item8 = document.getElementById(idKeeper[8])
    item8.addEventListener('click', function () { showIt(item8, memoryArray[8]) })
    var item9 = document.getElementById(idKeeper[9])
    item9.addEventListener('click', function () { showIt(item9, memoryArray[9]) })
    var item10 = document.getElementById(idKeeper[10])
    item10.addEventListener('click', function () { showIt(item10, memoryArray[10]) })
    var item11 = document.getElementById(idKeeper[11])
    item11.addEventListener('click', function () { showIt(item11, memoryArray[11]) })
    var item12 = document.getElementById(idKeeper[12])
    item12.addEventListener('click', function () { showIt(item12, memoryArray[12]) })
    var item13 = document.getElementById(idKeeper[13])
    item13.addEventListener('click', function () { showIt(item13, memoryArray[13]) })
    var item14 = document.getElementById(idKeeper[14])
    item14.addEventListener('click', function () { showIt(item14, memoryArray[14]) })
    var item15 = document.getElementById(idKeeper[15])
    item15.addEventListener('click', function () { showIt(item15, memoryArray[15]) })
  }
  for (var j = 0; j < memoryArray.length; j++) {
    var tmpStyle = document.getElementById(idKeeper[j])
    tmpStyle.style.background = 'url(image/0.png)'
    tmpStyle.style.backgroundSize = 'cover'
    tmpStyle.style.backgroundRepeat = 'no-repeat'
    tmpStyle.style.backgroundPosition = 'center center'
    tmpStyle.style.width = '40px'
    tmpStyle.style.height = '40px'
    tmpStyle.style.cssFloat = 'left'
    tmpStyle.style.margin = '3px'
    tmpStyle.style.marginTop = '35px'
    tmpStyle.style.padding = '10px'
    tmpStyle.style.marginLeft = '10px'
    tmpStyle.style.cursor = 'pointer'
    tmpStyle.style.boxShadow = '0px 0px 50px grey'
  }
  var timers = 0
  var count = 0
  function showIt (tile, val) {
    timers++
    if (timers === 1) {
      var secondsCounter = setInterval(timer, 1000)
      function timer () {
        count = count + 1
        if (count <= 0) {
          clearInterval(secondsCounter)
        }
        timePart.innerHTML = 'You are playing this for ' + count + ' Seconds'
      }
    }

    if (tile.innerHTML === '' && itemsValues.length < 2) {
      tile.style.background = 'url(image/' + val + '.png)'
      tile.style.backgroundSize = 'cover'
      if (itemsValues.length === 0) {
        itemsValues.push(val)
        itemsID.push(tile.id)
      } else if (itemsValues.length === 1) {
        itemsValues.push(val)
        itemsID.push(tile.id)
        if (itemsValues[0] === itemsValues[1]) {
          turnedItems += 2
          itemsValues = []
          itemsID = []
          if (turnedItems === memoryArray.length) {
            var finalParagraph = document.createElement('P')
            var wonPng = document.createElement('IMG')
            wonPng.setAttribute('src', 'image/Won.gif')
            wonPng.setAttribute('width', '150')
            wonPng.setAttribute('height', '150')
            wonPng.setAttribute('alt', 'No Image!')
            // wonPng.style.marginLeft = '50px'
            wonPng.style.display = 'inline-block'
            document.getElementById('memory_board' + windowsNumber).innerHTML = ''
            finalParagraph.innerHTML = 'You Won This Game in ' + count + ' Seconds'
            finalParagraph.style.textAlign = 'center'
            finalParagraph.style.marginTop = '30px'
            mainWindow.style.height = '230px'
            mainWindow.appendChild(bar)
            mainWindow.appendChild(finalParagraph)
            mainWindow.appendChild(wonPng)
            mainWindow.style.textAlign = 'center'
          }
        } else {
          function flip2Back () {
            var item1 = document.getElementById(itemsID[0])
            var item2 = document.getElementById(itemsID[1])

            item1.style.transition = 'all 2s'
            item1.style.animation = 'fadein 2s'
            item1.style.background = 'url(image/0.png)'
            item1.style.backgroundSize = 'cover'
            item1.style.backgroundRepeat = 'no-repeat'
            item1.style.backgroundPosition = 'center center'
            item1.innerHTML = ''

            item2.style.transition = 'all 2s'
            item2.style.animation = 'fadein 2s'
            item2.style.background = 'url(image/0.png)'
            item2.style.backgroundSize = 'cover'
            item2.style.backgroundRepeat = 'no-repeat'
            item2.style.backgroundPosition = 'center center'
            item2.innerHTML = ''
            itemsValues = []
            itemsID = []
          }
          setTimeout(flip2Back, 700)
        }
      }
    }
  }
})
