const characters = [{
    Name: "Yu'velle",
    Class: "Warlock",
    Specialization: "Celestial",
    Status: false},
    {Name: "Eith",
    Class: "Cleric",
    Specialization: "Order",
    Status: true},
    {Name: "Gunther",
    Class: "Rogue",
    Specialization: "Arcane Trickster",
    Status: false}
]
function getAllChars(){
    return characters
}
function getOneChar(idx){
    return characters[idx]
}
function addChar(char){
    characters.push(char)
}
function changeStatus(idx){
    characters[idx].Status = !characters[idx].Status 
}
console.log('Models /')
module.exports = {
    getAllChars,
    getOneChar,
    addChar,
    changeStatus
}