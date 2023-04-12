// Your code here
const url= "http://localhost:3000/films"

document.addEventListener("DOMContentLoaded",()=>{
    fetchMovies()
    document.querySelector("#btn").addEventListener("click", buyTickets())
})

function fetchMovies(){
    fetch(url)
    .then(response=>response.json)
    .then(movies=>{movies.forEach(movie=>{movielist(movie)})
        const firstMovie= document.querySelector("#id1")
        firstMovie.dispatchEvent(new Event("click"));
    })
}

function movielist(movie){
    const list=document.createElement("li")
    list.textContent=`${movie.title}`
    list.id="id"+movie.id
    document.querySelector("#Movie-list").appendChild(list)
    list.addEventListener("click",()=>{movieClick(movie)})
}

function movieClick(movie){
    const poster= document.querySelector("img#Poster")
    poster.src= movie.poster.alt
    const info= document.querySelector("#film-information")

    info.querySelector("#movie-titles").textContent= "Title: "+movie.title
    info.querySelector("#movie-duration").textContent= "full-length"+movie.runtime+"minutes"
    info.querySelector("#movie-timing").textContent= "Start-time"+movie.showtime
    info.querySelector("#film-information").textContent= "Description"+movie.decription
    info.querySelector("#ticket-number").textContent= movie.capacity-movie.tickets_sold
}

function buyTickets(){
    const ticket= document.querySelector("#ticket-number")
    const tickets=ticket.textContent.split(" ")[0]
    if(tickets >0){
        ticket.textContent=tickets-1+"tickets remaining"
    }
    else if(tickets == 0) {
        alert("No tickets available")
    }

}