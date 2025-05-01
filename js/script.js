let board
let messageDiv
let message
let player = 1
let playerNumber = () => player % 2
let table = []


function init() {
    board = document.getElementById('board')
    messageDiv = document.getElementById('message')

    message = 'Player: ' + playerNumber()
    
    for (let i = 0; i < 3; i++) {
        table.push([0, 0, 0])
    }

    console.table(table)

    draw()
}

function draw() {
    let tableHtml = '<table>'

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>'
        for (let j = 0; j < 3; j++) {
            let marker = ''
            switch (table[i][j]) {
                case 1:
                    marker = 'X'
                    break
                case -1:
                    marker = 'O'
                    break
                default:
                    marker = '_'
            }
            
            tableHtml += `<td onclick="play(${i}, ${j})">${marker}</td>`
        }
        tableHtml += '</tr>'
    }

    tableHtml += '</table>'
    board.innerHTML = tableHtml
    messageDiv.innerText = message

}

function play(row, column) {
    console.log(playerNumber())
    if (table[row][column] == 0) {
        switch (playerNumber()) {
            case 1:
                table[row][column] = 1
                break
            case 0:
                table[row][column] = -1
                break
        }

        message = 'Player: ' + (playerNumber() + 1)
        if (check() == true) {
            player++
        }

    } else {
        message = "Already marked!"
    }

    draw()
    console.table(table)
}


function check() {
    function switchScore(score) {
        switch (score) {
            case 3:
                message = 'Player 1 won!'
                return false
            case -3:
                message = 'Player 2 won!'
                return false
            default:
                return true
        }  
    }
    
    // Calculating row scoring
    for (let row of table) { 
        let score = row.reduce((a, b) => a + b)
        if (switchScore(score) == false) {
            return false
        }
    }  

    // Calculating column scoring
    for (let i in table) { 
        let score = table[0][i] + table[1][i] + table[2][i]
        if (switchScore(score) == false) {
            return false
        }
    }

    // Calculating left-to-right diagonal scoring
    let score = table[0][0] + table [1][1] + table[2][2]
    
    if (switchScore(score) == false) {
        return false
    }

    // Calculating right-to-left diagonal scoring
    score = table[0][2] + table [1][1] + table[2][0]
    
    if (switchScore(score) == false) {
        return false
    }
    
    return true
}
