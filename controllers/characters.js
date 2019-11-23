const Characters = require('../models/characters')
console.log('Ctrl /')

module.exports = {
 index
}


function index(req, res){

    res.render('index', {data: Characters.getAllChars()})
}

function newChar(req, res){
    res.render('New', [])

}