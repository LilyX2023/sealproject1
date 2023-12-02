# Project
### By Somebody

DEPLOYED SITE : [Click Here] (https://sealproject1-ten.vercel.app/)

## Description on project
> I am creating an app that can retrieve the information of the art galleries that are in the Harvard Art Museums building on each floor.

## Details about the API

- `"https://api.harvardartmuseums.org/gallery?apikey=aa3d46c2-16dc-459b-b3dc-77c93007c461"`: Returns information on physical spaces within the Harvard Art Museums building at 32 Quincy Street, Cambridge, MA.


Sample Fetch/Ajax called:
```js
const url = "https://api.harvardartmuseums.org/gallery?apikey=aa3d46c2-16dc-459b-b3dc-77c93007c461"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
{
"info": {
"totalrecordsperquery": 10,
"totalrecords": 64,
"pages": 7,
"page": 1,
"next": "https://api.harvardartmuseums.org/gallery?apikey=aa3d46c2-16dc-459b-b3dc-77c93007c461&page=2",
"responsetime": "5 ms"
},
"records": [
{
"gallerynumber": "1000",
"labeltext": null,
"objectcount": 1,
"galleryid": 1000,
"name": "Calderwood Courtyard",
"theme": null,
"id": 1000,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 1,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/1/1000"
},
{
"gallerynumber": "1320",
"labeltext": "The seismic social, political, and economic events of the early twentieth century—the Mexican and Russian revolutions, World War I and its aftermath, the Spanish Civil War, the Sino-Japanese War, the rise of Fascism, and the Great Depression—radicalized many artists, leading them to organize international networks, federations, congresses, and unions as forums through which to rethink the form, content, and function of art in uncertain modern times.\r\nBy the early 1930s, many leftist artists had abandoned abstraction and other modernist idioms in an effort to create what the art historian and social critic Meyer Schapiro would term a new “public use of art.” They employed easily legible realist, narrative, and reportage approaches to image making that focused on the daily life, social concerns, and political activities of the working class. At stake was the proposition that the modern artist is a laborer who participates in social action and uses art as an instrument of persuasion and dissent.\r\nThe models for this radical approach to contemporary “history painting” or “document pictures” as they were sometimes called arose from an earlier generation of American realism, interwar realism in Russia and Germany, and the work of the Mexican muralists. It also drew from the rising cultural force of mass media. Documentary photography and film played a particularly critical role in the visual culture of the 1930s and 1940s, serving as media for artistic expression, source material, and the basis for a broadly shared aesthetic rooted in eyewitness journalism.\r\nThe Harvard Art Museums’ collection of American social realism and related material is especially strong in the works on paper that were pivotal in the movement.",
"objectcount": 27,
"galleryid": 1320,
"name": "Modern and Contemporary Art",
"theme": "Social Realism",
"id": 1320,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 1,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/1/1320"
},
{
"gallerynumber": "0006",
"labeltext": null,
"objectcount": 2,
"galleryid": 6,
"name": "Lower Level Lobby",
"theme": null,
"id": 6,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 0,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/0/0006"
},
{
"gallerynumber": "1010",
"labeltext": null,
"objectcount": 2,
"galleryid": 1010,
"name": "Prescott Street Entrance",
"theme": null,
"id": 1010,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 1,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/1/1010"
},
{
"gallerynumber": "4000",
"labeltext": null,
"objectcount": 2,
"galleryid": 4000,
"name": "Art Study Center Reception",
"theme": null,
"id": 4000,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 4,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/4/4000"
},
{
"gallerynumber": "1120",
"labeltext": null,
"objectcount": 69,
"galleryid": 1120,
"name": "Modern and Contemporary Art",
"theme": "Contemporary",
"id": 1120,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 1,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/1/1120"
},
{
"gallerynumber": "5000",
"labeltext": "Located at the apex of the building, the Lightbox was designed by architect Renzo Piano to offer a unique perspective on the activities and collections of the Harvard Art Museums. Providing a bird’s-eye view of the galleries and the Calderwood Courtyard as well as a window onto the conservation labs, this space also gives visitors a chance to appreciate the architecture of Piano’s \"light machine\"—the glass-enclosed rooftop design that disperses controlled natural light into the museums. Here, you can observe conservators at work on objects from the museums’ collections and, on a clear day, admire the skyline view across Harvard’s campus.",
"objectcount": 0,
"galleryid": 5000,
"name": "Lightbox Gallery",
"theme": null,
"id": 5000,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 5,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/5/5000"
},
{
"gallerynumber": "4400",
"labeltext": null,
"objectcount": 0,
"galleryid": 4400,
"name": "Seminar Room",
"theme": null,
"id": 4400,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 4,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/4/4400"
},
{
"gallerynumber": "2570",
"labeltext": "The University Collections Gallery is dedicated to the display of works of art from Harvard University’s collections beyond the Harvard Art Museums. This gallery presents university collections in a different display context and allows for expanded dialogue between these objects and those held by the Harvard Art Museums. Because the works on view in this gallery are on loan to the Harvard Art Museums, images of the works are not available online.",
"objectcount": 0,
"galleryid": 2570,
"name": "University Collections Gallery",
"theme": "Currently Closed",
"id": 2570,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 2,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/2/2570"
},
{
"gallerynumber": "3570",
"labeltext": null,
"objectcount": 0,
"galleryid": 3570,
"name": "Entryway",
"theme": null,
"id": 3570,
"lastupdate": "2023-12-02T04:43:44-0500",
"floor": 3,
"url": "https://www.harvardartmuseums.org/visit/floor-plan/3/3570"
}
]
}
```

## Mockup

The website comprises five parts:
- Title
- Search box for floor level
- Room numbers of the searched floor
- Search box for room numbers
- Information about the room 

#### Desktop View

![My Desktop View](https://i.imgur.com/W8UenSJ.png)

#### Mobile View

![My Mobile View](https://i.imgur.com/W8UenSJ.png)

## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||
