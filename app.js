//*********************** */
// GLOBAL VARIABLES
//************************ */
const apikey = "aa3d46c2-16dc-459b-b3dc-77c93007c461"
const baseURL = "https://api.harvardartmuseums.org/gallery"

//*********************** */
// Functions
//************************ */
// function to fetch the data
function getFloorLayout(floorLevel) {
    //construct our url
    const url = `${baseURL}?floor=${floorLevel}&apikey=${apikey}`
    //fetch from the url
    fetch(url)
    .then((res) => {return res.json()})
    .then((data) => {
        renderRoom(data)
        console.log(data)
    })
}

function getTheme(id) {
    //construct our url
    const url = `${baseURL}/${id}?apikey=${apikey}`
    //fetch from the url
    fetch(url)
    .then((res) => {return res.json()})
    .then((data2) => {
        renderDetail(data2)
        console.log(data2)
    })
}
//function that render the galleryid and name to the dom
function renderRoom(room){
    //grab the div.room
    console.log(room.records)
    const roomdiv = document.querySelector("ul.roomList")
    //alter the html inside the div
    let a = room.records.map((d) => {
        return `<li>${d.gallerynumber} - ${d.name}</li>`
    })
    roomdiv.innerHTML = a
}

function renderDetail(id){
    const roomDetails = document.querySelector('.roomD')
    roomDetails.innerHTML = `
    <h3>${id.theme} - ${id.labeltext}</h3>
    `
}

//*********************** */
// Main Code
//************************ */
getFloorLayout('2')
getTheme('2100')