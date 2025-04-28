const board = document.getElementById('board')
const message = document.getElementById('message')

let player = 1
let table = []


function init() {
    for (let i = 0; i < 3; i++) {
        table.push([0, 0, 0])
    }

    console.table(table)
}

function draw() {
    let tableHtml = '<table>'

    for (let i = 0; i < 3; i++) {
        tableHtml += '<tr>'
        for (let j = 0; j < 3; j++) {
            tableHtml += '<td>_</td>'
        }
        tableHtml += '</tr>'
    }
}

function check() {
    
}

function play() {
    
}