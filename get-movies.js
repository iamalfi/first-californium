// Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.
const express=require("express")
const app=express()

const movies=["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

app.get("/movies",(req,res)=>{
    res.send(movies)
})
// Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index 1). You can define an array of movies again in your api

// Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.

app.get("/movies/:indexNumber",(req,res)=>{
    const  index = req.params.indexNumber
    if(index>movies.length){
        res.send("use a valid index")
    }
    res.send(movies[index])
})

// Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
const films=[ {
 "id": 1,
 "name": "The Shining"
}, {
 "id": 2,
 "name": "Incendies"
}, {
 "id": 3,
 "name": "Rang de Basanti"
}, {
 "id": 4,
 "name": "Finding Nemo"
}]

app.get("/films",(req,res)=>{
    res.send(films)
})

// Return the entire array in this api’s response


// Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
app.get("/films/:filmId",(req,res)=>{
    const filmId=req.params.filmId
    
    const film = films.filter(film => {
        return film.id == filmId
    })
    if(film.length != 0){
        res.send(film)
    }else{
        res.send("No movie exists with this id")
    }
})


app.listen(9000,() => console.log("server running"))

