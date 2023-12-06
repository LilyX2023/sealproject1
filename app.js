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
        console.log(data)
    })
}

//function that renter the movie to the dom
function renderRoomNumber(room){
    //grab the div.room
    const room = document.querySelector("")
}
//*********************** */
// Main Code
//************************ */
getFloorLayout('2')