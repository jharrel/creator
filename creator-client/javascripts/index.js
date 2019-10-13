let posts = [
    {
        title: "Luke's great adventure",
        ship: "Luke Skywalker",
        planet: "Tattooine",
        content: "Luke and Han get the Falcon stuck again!"
    },
    {
        title: "Hi Wookie",
        author: "Ewok",
        planet: "somewhere over the moon",
        content: "Hey where'd that second moon come from?"
    },
    {
        title: "The princess",
        author: "Rey",
        planet: "Endoor",
        content: "I think Leia is my mom?"
    }
];

const BASE_URL = 'http://localhost:3000'

let colors = ["red", "green", "blue"];
let index = 0;
let maxIndex = colors.length;

function createData() {
    return {
        world: {
            planet: document.getElementById('planet').value,
            content: document.getElementById('content').value
        },
        user: {
            name: document.getElementById('title').value,
            ship: document.getElementById('ship').value
        }
    }
}

function displayWorld(world) {
    document.getElementsByClassName("post-lists")[0].innerHTML += formatWorld(world);
}

function formatWorld(world) {
    return `
    <div class="card">
        <div class="card-content">
            <span class="card-title">${world.title}</span>
            <p>Ship:${world.user.ship}</p>
            <p>Planet:${world.planet}</p>
            <p>${world.content}</p>
    `
}

function clearForm() {
    document.getElementById("title").value = ""
    document.getElementById("ship").value = ""
    document.getElementById("planet").value = ""
    document.getElementById("content").value = ""
}

function submitForm(event) {
    event.preventDefault();
    let data = createData();
    fetch(BASE_URL + '/api/worlds', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(world => {
        displayWorld(world)
        clearForm();
    })  
}

function changeColor(event) {
    this.style.color = colors[index++];
    if(index == maxIndex) {
        index = 0;
    }
}

function loadPosts() {

    fetch(BASE_URL + '/api/worlds')
    .then(resp => resp.json())
    .then(worlds => worlds.forEach(world => displayWorld(world)))
}

function addClickEventToPostListHeader() {
    document.querySelector('.post-lists h3').addEventListener('click', changeColor);
}

function addSubmitEventToForm() {
    document.getElementById("blog-form").addEventListener('submit', submitForm);
}

// function addMouseOverOverToStarWars() {
//     document.querySelector('h1').addEventListener('mouseover', changeColor);
// }

document.addEventListener('DOMContentLoaded', function () {
    addSubmitEventToForm();
    // addMouseOverOverToWelcome();
    loadPosts();
})