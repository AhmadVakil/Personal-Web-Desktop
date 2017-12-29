var open = 0
controlStylesPanel.addEventListener('click', function () {
  open++
  if (open === 1) {
    windowsNumber++
    console.log(windowsNumber)
    var mainWindow = document.createElement('div')
    mainWindow.id = 'one'
    mainWindow.addEventListener('drag', dragableNow(mainWindow))
    chatWindows[windowsNumber] = mainWindow
    zindex++
    mainWindow.style.zIndex = zindex
    var bar = document.createElement('div')
    bar.id = 'innerDiv'
    mainWindow.appendChild(bar)
    var img = document.createElement('IMG')
    img.setAttribute('src', 'image/control.ico')
    img.setAttribute('width', '20')
    img.setAttribute('height', '20')
    img.setAttribute('alt', 'No Image!')
    img.style.margin = '2px 5px'
    img.style.display = 'inline-block'

    var closeWindow = document.createElement('IMG')
    closeWindow.setAttribute('src', 'image/close.png')
    closeWindow.style.marginLeft = '20px'
    closeWindow.setAttribute('width', '20')
    closeWindow.setAttribute('height', '20')
    closeWindow.style.cursor = 'pointer'

    closeWindow.addEventListener('click', function () {
      var parent = document.getElementById('body')
      var child = document.getElementById(mainWindow.id)
      parent.removeChild(child)
      open = 0
    })

    bar.appendChild(img)

    var windowName = document.createElement('span')
    windowName.innerHTML = 'Style Controller'
    windowName.style.display = 'inline-block'
    windowName.style.fontSize = '22px'
    bar.appendChild(windowName)
    bar.style.textAlign = 'left'
    bar.appendChild(closeWindow)

    var element = document.getElementById('body')
    element.appendChild(mainWindow)
    mainWindow.style.position = 'absolute'
    bar.style.position = 'absolute'

    var mSize = document.createElement('P')
    mSize.innerHTML = 'Choose Mamory Game Size:'
    mSize.style.marginTop = '50px'
    mainWindow.appendChild(mSize)

    var option1 = document.createElement('SPAN')
    option1.innerHTML = '2 X 2'
    var twoXtwo = document.createElement('INPUT')
    twoXtwo.setAttribute('type', 'radio')
    twoXtwo.style.marginTop = '10px'
    mainWindow.appendChild(twoXtwo)
    mainWindow.appendChild(option1)

    var option2 = document.createElement('SPAN')
    option2.innerHTML = '2 X 4'
    var twoXfour = document.createElement('INPUT')
    twoXfour.setAttribute('type', 'radio')
    twoXfour.style.marginTop = '10px'
    mainWindow.appendChild(twoXfour)
    mainWindow.appendChild(option2)

    var option3 = document.createElement('SPAN')
    option3.innerHTML = '4 X 4'
    var fourXfour = document.createElement('INPUT')
    fourXfour.setAttribute('type', 'radio')
    fourXfour.innerHTML = '4 X 4'
    fourXfour.style.marginTop = '10px'
    fourXfour.checked = true
    mainWindow.appendChild(fourXfour)
    mainWindow.appendChild(option3)

    twoXtwo.addEventListener('click', function () {
      twoXfour.checked = false
      fourXfour.checked = false
      memoGameArraySize = 4
    })
    twoXfour.addEventListener('click', function () {
      twoXtwo.checked = false
      fourXfour.checked = false
      memoGameArraySize = 8
    })
    fourXfour.addEventListener('click', function () {
      twoXfour.checked = false
      twoXtwo.checked = false
      memoGameArraySize = 16
    })

    var backGroundChange = document.createElement('P')
    backGroundChange.innerHTML = 'Choose Background Color:'
    mainWindow.appendChild(backGroundChange)

    var backgroundFile = document.createElement('INPUT')
    backgroundFile.setAttribute('type', 'color')
    backgroundFile.style.width = '150px'
    mainWindow.appendChild(backgroundFile)
    mainWindow.style.textAlign = 'center'
    backgroundFile.value = localStorage.getItem('backColor')
    backgroundFile.addEventListener('input', function () {
      console.log(backgroundFile.value)
      var bodyImage = document.getElementById('body')
      bodyImage.style.background = backgroundFile.value
      localStorage.setItem('backColor', backgroundFile.value)
    })

    var taskBarColor = document.createElement('P')
    taskBarColor.innerHTML = 'Choose Taskbar Color:'
    mainWindow.appendChild(taskBarColor)

    var taskBarColorPicker = document.createElement('INPUT')
    taskBarColorPicker.setAttribute('type', 'color')
    taskBarColorPicker.style.width = '150px'
    mainWindow.appendChild(taskBarColorPicker)
    mainWindow.style.textAlign = 'center'
    taskBarColorPicker.value = localStorage.getItem('taskMainColor')
    taskBarColorPicker.addEventListener('input', function () {
      console.log(taskBarColorPicker.value)
      var bodyImage = document.getElementById('taskbar')
      bodyImage.style.background = taskBarColorPicker.value
      localStorage.setItem('taskMainColor', taskBarColorPicker.value)
    })

    var taskBarColorPicker2 = document.createElement('INPUT')
    taskBarColorPicker2.setAttribute('type', 'color')
    taskBarColorPicker2.style.width = '150px'
    mainWindow.appendChild(taskBarColorPicker2)
    mainWindow.style.textAlign = 'center'
    taskBarColorPicker2.value = localStorage.getItem('taskFadeColor')
    taskBarColorPicker2.addEventListener('input', function () {
      console.log(taskBarColorPicker2.value)
      var bodyImage = document.getElementById('taskbar')
      bodyImage.style.background = 'linear-gradient(' + taskBarColorPicker.value + ',' + taskBarColorPicker2.value + ')'
      localStorage.setItem('taskFadeColor', taskBarColorPicker2.value)
      localStorage.setItem('taskMainColor', taskBarColorPicker.value)
    })
  }
})
