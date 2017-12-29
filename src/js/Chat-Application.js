
// CHAT APPLICATION
var chatWindows = []
chatApp.addEventListener('click', function () {
  var clearHistoryBTN = document.createElement('BUTTON')
  var exampleSocket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')
  clearHistoryBTN.id = 'button'
  windowsNumber++
  console.log(windowsNumber)
  var mainWindow = document.createElement('div')
  mainWindow.id = 'one_' + windowsNumber
  mainWindow.style.height = '300px'
  mainWindow.style.width = '250px'
  mainWindow.style.border = '1px solid #ccc'
  mainWindow.style.background = 'linear-gradient(#DBCACA, #FFFFFF)'
  mainWindow.style.borderRadius = '10px 10px 2px 2px'
  mainWindow.style.boxShadow = '0px 0px 40px grey'

  mainWindow.addEventListener('drag', dragableNow(mainWindow))
  chatWindows[windowsNumber] = mainWindow
  zindex++
  mainWindow.style.zIndex = zindex

  var closeWindow = document.createElement('IMG')
  closeWindow.setAttribute('src', 'image/close.png')
  closeWindow.style.marginLeft = '100px'
  closeWindow.setAttribute('width', '20')
  closeWindow.setAttribute('height', '20')
  closeWindow.style.cursor = 'pointer'
  closeWindow.addEventListener('click', function () {
    var parent = document.getElementById('body')
    var child = document.getElementById(mainWindow.id)
    parent.removeChild(child)
  })

  var bar = document.createElement('div')
  bar.id = 'innerDiv'
  mainWindow.appendChild(bar)
  var img = document.createElement('IMG')
  img.setAttribute('src', 'image/chat.png')
  img.setAttribute('width', '20')
  img.setAttribute('height', '20')
  img.setAttribute('alt', 'No Image!')
  img.style.margin = '2px 5px'
  img.style.display = 'inline-block'

  bar.appendChild(img)

  var windowName = document.createElement('span')
  windowName.innerHTML = 'Chat App'
  windowName.style.display = 'inline-block'
  windowName.style.fontSize = '22px'
  bar.appendChild(windowName)
  bar.style.textAlign = 'left'

  bar.appendChild(closeWindow)

  var element = document.getElementById('body')
  element.appendChild(mainWindow)
  mainWindow.style.position = 'absolute'
  bar.style.position = 'absolute'
  x += 20
  y += 20
  if (y > 320) {
    x *= 1.5
    y = 0
  }
  mainWindow.style.left = x + 'px'
  mainWindow.style.top = y + 'px'

  var divFormArea = document.createElement('div')
  var textArea = document.createElement('textarea')
  var connectionStatus = document.createElement('P')
  connectionStatus.id = 'connectionStatus'
  var chatArea = document.createElement('textarea')
  chatArea.id = 'textarea'
  chatArea.style.height = '200px'
  chatArea.style.width = '220px'
  chatArea.style.marginLeft = '5%'
  chatArea.style.marginRight = '5%'
  chatArea.style.marginBottom = '0%'
  chatArea.style.marginTop = '32px'
  chatArea.style.backgroundColor = 'grey'

  mainWindow.appendChild(chatArea)
  divFormArea.appendChild(textArea)

  divFormArea.style.position = 'absolute'
  divFormArea.style.bottom = '15'
  divFormArea.style.margin = '5%'
  divFormArea.style.boxShadow = '0px 0px 20px black'
  mainWindow.appendChild(divFormArea)
  textArea.style.width = '220px'
  textArea.style.height = '20px'

  clearHistoryBTN.style.width = '235px'

  clearHistoryBTN.innerHTML = 'Remove History'
  mainWindow.style.height = '375px'

  mainWindow.appendChild(clearHistoryBTN)
  mainWindow.appendChild(connectionStatus)

  var chatHistory = localStorage.getItem('chatHistory')
  chatArea.value = chatHistory

  clearHistoryBTN.addEventListener('click', function () {
    var txt
    var r = confirm('Press OK if you are sure! All your chat history will be deleted!')
    if (r === true) {
      txt = 'YES'
    } else {
      txt = 'NO'
    }

    if (txt === 'YES') {
      chatArea.value = ''
      localStorage.setItem('chatHistory', chatArea.value)
    }

    var txt3
    var r2 = confirm('Press OK if you want to remove your User Name, otherwise Cancel.')
    if (r2 === true) {
      localStorage.setItem('chatUserName', null)
      txt3 = 'YES'
    } else {
      txt3 = 'NO'
    }

    if (txt3 === 'YES') {
      var txt2
      var U = prompt('Your UserName has been Removed. Please enter your chat User Name:', '')
      if (U === null || U === '') {
        txt2 = null
      } else {
        txt2 = U
      }
      localStorage.setItem('chatUserName', txt2)
    }
  })
  textArea.onmousedown = function () {
    textArea.focus()
  }

  exampleSocket.onopen = function (event) {
    connectionStatus.innerHTML = 'You Are Connected!'
  }

  exampleSocket.onerror = function (event) {
    connectionStatus.innerHTML = 'No Connection!'
  }

  exampleSocket.onmessage = function (event) {
    var msg = JSON.parse(event.data)
    var newMsg = msg.username + ': ' + msg.data

    // Ignoring heartbeats and other types
    if (msg.type === 'message') {
      chatArea.value += '\n' + newMsg
      localStorage.setItem('chatHistory', chatArea.value)
    }
  }

  textArea.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode
    if (key === 13) {
      var textData = textArea.value

      var msg = {
        type: 'message',
        data: textData,
        username: localStorage.getItem('chatUserName'),
        key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
      }

      // Send the msg object as a JSON-formatted string.
      exampleSocket.send(JSON.stringify(msg))
      textArea.value = ''
    }
  })
})
