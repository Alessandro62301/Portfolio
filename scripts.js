
    const url = "https://api.github.com/users/";
    const client_id = "8ceebc8caecf5eee0b0e"
    const client_secret = "4552f7f6a70c88b9c74b5ef5ec8d9f616d73d631";
    const nome = "alessandro62301"
    var  context = document.querySelector(".banner-conteudo");
    //?per_pages=7&sortcreated:asc
   
async function getUser(){

    const repositoriesResponse = await fetch(`${url}${nome}/repos?per_page=8&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`);
    const repositories = await repositoriesResponse.json();

    const profile = null;

    return {repositories,profile};
}


function showRepositories(repos){
    let output = "";

    repos.forEach(repo => {
        output = 
        `
        <a href ="${repo.html_url}">
        <div class="card">
            <h1 class="card-title">${repo.name}</h1>
            <h4 class="card-title">${repo.description}</h4>
        </div>
        </a>
        `      
        context.innerHTML += output;
    });


}

function darkMode(){
    var element = document.querySelector("body");

    if(element.classList == "dark-mode"){
        element.classList.remove("dark-mode");
    }
    else{
        element.classList.add("dark-mode");
    }
}




getUser().then(res => {showRepositories(res.repositories)});




    



