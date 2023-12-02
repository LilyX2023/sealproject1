const url = "https://api.harvardartmuseums.org/gallery?apikey=aa3d46c2-16dc-459b-b3dc-77c93007c461"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))