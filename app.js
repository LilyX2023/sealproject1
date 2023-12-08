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
    if (floorLevel === "1" || floorLevel === "2" || floorLevel ==="3"|| floorLevel === "4"|| floorLevel==="5"){
        const url = `${baseURL}?floor=${floorLevel}&apikey=${apikey}`
        //fetch from the url
        fetch(url)
        .then((res) => {return res.json()})
        .then((data) => {
            renderRoom(data)
            console.log(data)
        })
        
    } else {
        const $roomdiv = $('ul.roomList')
        $roomdiv.html(`<h4>The entry is invalid. The museum only has 1 ~ 5 level </h4>`)
    }
//     //construct our url
//     const url = `${baseURL}?floor=${floorLevel}&apikey=${apikey}`
//     //fetch from the url
//     fetch(url)
//     .then((res) => {return res.json()})
//     .then((data) => {
//         renderRoom(data)
//         console.log(data)
//     })
}

function getTheme(id) {
    //construct our url
    const url = `${baseURL}/${id}?apikey=${apikey}`
    //fetch from the url
    fetch(url)
    .then((res) => {return res.json()})
    .then((data2) => {
        renderDetail(data2)
    })
}
//function that render the galleryid and name to the dom
function renderRoom(room){
    //grab the div.room
        const $roomdiv = $('ul.roomList')
        //alter the html inside the div
        let a = room.records.map((d) => {
            return `<li>${d.gallerynumber} - ${d.name}</li>`
        })
        $roomdiv.html(a)
    }

function renderDetail(id){
    const $roomDetails = $('.roomD')
    //roomDetails.innerHTML = `
    //<h3>${id.theme} - ${id.labeltext}</h3>
    //`
    if ( id.theme === null || id.labeltext === null){
        $roomDetails.html (`<h3>Sorry, the space is not a gallery or not open to the public at the moment</h3>`)
    } else {
        $roomDetails.html(`
        <h3>${id.theme}</h3> 
        <h4>${id.labeltext}</h4>`)

    }
}

//function to handlle the form submission
//for the gallery id number
function handleSubmit(event){
    //prevent the refreshing of the page from the submission
    event.preventDefault()
    //grab the form from the event
    const form = event.target
    //get the form data object to access form data
    const formData = new FormData(form)
    //grab the name of the input(floorLevel)
    const floorLevel = formData.get('floorLevel')
    getFloorLayout(floorLevel)
}

//for the theme of the room
function handleSubmit2(event){
    event.preventDefault()
    const form2 = event.target
    const form2Data = new FormData(form2)
    const id = form2Data.get('id')
    getTheme(id)
}


//*********************** */
// Main Code
//************************ */
document.querySelector("form").addEventListener('submit', handleSubmit)

document.querySelector('div.form2').addEventListener('submit', handleSubmit2)
// add the function to the form
