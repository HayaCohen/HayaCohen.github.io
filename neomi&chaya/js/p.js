// console.log('ajax-demo');
document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
    const url = 'https://swapi.dev/api/people/?search=Luke%20Skywalker';
    getPeople(url);
    const url_film = 'https://swapi.dev/api/films';
    get_films(url_film);
    const url_films1 = 'https://swapi.dev/api/people/?search=Darth%20Vader';
    get_films1(url_films1);
}

function showResponseOnPage(response) {
    let people = response.results;
    let peopleList = document.getElementById('people-list');
    let li = document.createElement('li');
    li.innerHTML = `${people[0].eye_color} ${people[0].height}`;
    peopleList.append(li);
}

function showResponseOnPage1(response) {
    let films = response.results;
    let films_list = document.getElementById('films-list');
    films.forEach(element => {
        if (element.director === 'George Lucas') {
            let li = document.createElement('li');
            li.innerHTML = `${element.title}`;
            films_list.append(li);
        }
    });
}

let films_list2;

function showResponseOnPage2(response) {
    let films_1 = response.results;
    films_list2 = document.getElementById('films-list1');
    films_1[0].films.forEach(element=>{
      
    // let url_films=element;
        get_films11(element);
    });
}

function print_films(recponse) {
    
    let li = document.createElement('li');
    li.innerHTML = `${recponse.title}`;
    films_list.append(li);
} 

function getPeople(url) {
    const request = new XMLHttpRequest();
    request.responseType = 'json';
    request.addEventListener('readystatechange', () => {
        if (request.readyState === XMLHttpRequest.DONE) {
            showResponseOnPage(request.response);
        }
    });
    request.open('GET', url);
    request.send();
}

function get_films(url_film) {
    const request1 = new XMLHttpRequest();
    request1.responseType = 'json'; 
    request1.addEventListener('readystatechange', () => {
        if (request1.readyState === XMLHttpRequest.DONE) {
            showResponseOnPage1(request1.response);
        }
    });
    request1.open('GET', url_film);
    request1.send();
}

function get_films1(url_film1) {
    const request1 = new XMLHttpRequest();
    request1.responseType = 'json'; 
    request1.addEventListener('readystatechange', () => {
        if (request1.readyState === XMLHttpRequest.DONE) {
            showResponseOnPage2(request1.response);
        }
    });
    request1.open('GET', url_film1);
    request1.send();
}

function get_films11(url_film1) {
    const request1 = new XMLHttpRequest();
    request1.responseType = 'json'; 
    request1.addEventListener('readystatechange', () => {
        if (request1.readyState === XMLHttpRequest.DONE) {
            let li = document.createElement('li');
            li.innerHTML = `${request1.response.title}`;
            films_list2.append(li);
        }
    });
    request1.open('GET', url_film1);
    request1.send();
}