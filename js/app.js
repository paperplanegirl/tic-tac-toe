var currentPlayer = 'X'
var gamefinished = false

function resetBtn () {
  var gridArray = document.getElementsByClassName('grid')
  for (var i = 0; i < gridArray.length; i++) {
    gridArray[i].textContent = ''
  }
  document.getElementById('status').innerHTML = '&nbsp'
  gamefinished = false
}

document.getElementById('b0').onclick = click
document.getElementById('b1').onclick = click
document.getElementById('b2').onclick = click
document.getElementById('b3').onclick = click
document.getElementById('b4').onclick = click
document.getElementById('b5').onclick = click
document.getElementById('b6').onclick = click
document.getElementById('b7').onclick = click
document.getElementById('b8').onclick = click
document.getElementById('reset').onclick = resetBtn

function click () {
  if (currentPlayer === 'X' && this.textContent !== 'O' && this.textContent !== 'X' && gamefinished === false) {
    this.textContent = 'X'
    this.className = 'grid purple'
    currentPlayer = 'O'
    check_if_anyone_wins()
  } else if (currentPlayer === 'O' && this.textContent !== 'O' && this.textContent !== 'X' && gamefinished === false) {
    this.textContent = 'O'
    this.className = 'grid blue'

    currentPlayer = 'X'
    check_if_anyone_wins()
  }
}

function check_if_anyone_wins () {
  var b0 = document.getElementById('b0')
  var b1 = document.getElementById('b1')
  var b2 = document.getElementById('b2')
  var b3 = document.getElementById('b3')
  var b4 = document.getElementById('b4')
  var b5 = document.getElementById('b5')
  var b6 = document.getElementById('b6')
  var b7 = document.getElementById('b7')
  var b8 = document.getElementById('b8')

  if (b0.textContent === 'X' && b1.textContent === 'X' && b2.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    gamefinished = true
  } else if (b0.textContent === 'O' && b1.textContent === 'O' && b2.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }

  if (b3.textContent === 'X' && b4.textContent === 'X' && b5.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    console.log('X wins')
    gamefinished = true
  } else if (b3.textContent === 'O' && b4.textContent === 'O' && b5.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }

  if (b6.textContent === 'X' && b7.textContent === 'X' && b8.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    console.log('X wins')
    gamefinished = true
  } else if (b6.textContent === 'O' && b7.textContent === 'O' && b8.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }

  if (b0.textContent === 'X' && b3.textContent === 'X' && b6.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    console.log('X wins')
    gamefinished = true
  } else if (b0.textContent === 'O' && b3.textContent === 'O' && b6.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }

  if (b1.textContent === 'X' && b4.textContent === 'X' && b7.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    console.log('X wins')
    gamefinished = true
  } else if (b1.textContent === 'O' && b4.textContent === 'O' && b7.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }

  if (b2.textContent === 'X' && b5.textContent === 'X' && b8.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    console.log('X wins')
    gamefinished = true
  } else if (b2.textContent === 'O' && b5.textContent === 'O' && b8.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }

  if (b2.textContent === 'X' && b4.textContent === 'X' && b6.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    console.log('X wins')
    gamefinished = true
  } else if (b2.textContent === 'O' && b4.textContent === 'O' && b6.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }

  if (b0.textContent === 'X' && b4.textContent === 'X' && b8.textContent === 'X') {
    document.getElementById('status').textContent = 'Player X wins'
    console.log('X wins')
    gamefinished = true
  } else if (b0.textContent === 'O' && b4.textContent === 'O' && b8.textContent === 'O') {
    document.getElementById('status').textContent = 'Player O wins'
    console.log('O wins')
    gamefinished = true
  }
}
