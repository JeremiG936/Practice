const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");

function getRandomIds() {
    let ids = []
    for (let i = 1; i <= 10; i++) {
        let randonNum  = Math.floor(Math.random() * 826) + 1;
        ids.push(randonNum)
    }
    return ids
}

function cardTemplate(character) {
    return `<div class="card m-4" style="width: 20rem;">
                <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <ul>
                        <li><strong>Gender:</strong>  ${character.gender}</li>
                        <li><strong>Location:</strong>  ${character.location.name}</li>
                        <li><strong>Origin:</strong>  ${character.origin.name}</li>
                        <li><strong>Species:</strong>  ${character.species}</li>
                        <li><strong>Status:</strong>  ${character.status}</li>
                        <li><strong>Type:</strong>  ${character.type}</li>
                    </ul>
                    <button class="btn btn-primary d-flex ms-auto mt-auto">Add to favorites</button>
                </div>
            </div>`    
}

async function fetchCharacterData(id) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!response.ok) {
            throw new Error (`Could not fetch ${id} character data`)
        }
        const data = await response.json();
        return data
    } 
    catch (error) {
        console(error)
    }
}

async function filterCharacterByName() {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=rick`);
        if (!response.ok) {
            throw new Error (`Could not fetch ${id} character data`)
        }
        const data = await response.json();
        console.log(data)
    } 
    catch (error) {
        console(error)
    }
}

async function renderdCards() {
    let ids  = getRandomIds();
    let promises = [];
    for (let id of ids) {
        promises.push(fetchCharacterData(id))    
    }
    let results =  await Promise.allSettled(promises)
    let cardsHolder = document.getElementById("cards-holder");
    let htmlContent = '';
    for (result of results) {
        htmlContent += cardTemplate(result.value)
    }
    cardsHolder.innerHTML = htmlContent
}

searchBtn.addEventListener("click", () => {
    let result = searchBar.value
})

function main() {
    renderdCards()
}

main()
