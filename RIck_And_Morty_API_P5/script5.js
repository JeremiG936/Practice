const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
const apiCall = "https://rickandmortyapi.com/api/character/";
let count = 1;

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

function nextBtnTemplate() {
    return `<button type="button" class="btn btn-success" id="next-btn" onclick="nextPage()">Next</button>`
}

function prevBtnTemplate() {
    return `<button type="button" class="btn btn-danger me-4" id="next-btn" onclick="prevPage()">Previous</button>`
}

function strConverter(str) {
    let separated = str.trim().split(" ")
    return  separated.join("%20")
}

async function fetchCharacterData(searchTerm, pageNum = 1) {
    try {
        if (typeof searchTerm === "number") {
            const response = await fetch(`${apiCall}${searchTerm}`);
            if (!response.ok) {
                throw new Error (`Could not fetch character data`)
            }
            const data = await response.json();
            return data
        }
        else if (typeof searchTerm === "string") {
            const response = await fetch(`${apiCall}?page=${pageNum}&name=${strConverter(searchTerm)}`);
            if (!response.ok) {
                throw new Error (`Could not fetch ${id} character data`)
            }
            const data = await response.json();
            return data
        }
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

async function renderFilteredCards(typedValue) {
    let fetchedData = await fetchCharacterData(typedValue, count);
    let resultInfo = document.getElementById("result-info");
    let pageBtns = document.getElementById("page-btns")
    resultInfo.innerHTML = `Found ${fetchedData.info.count} results`;
    let promises = [];
    for (let i = 0; i < fetchedData.results.length; i++) {
        promises.push(fetchedData.results[i])
    }
    let results = await Promise.allSettled(promises)
    let cardsHolder = document.getElementById("cards-holder");
    let htmlContent = '';
    for (result of results) {
        htmlContent += cardTemplate(result.value)
    }
    cardsHolder.innerHTML = htmlContent
    if (fetchedData.info.pages > 1) {
        pageBtns.innerHTML = nextBtnTemplate()
        if (count > 1 && count < fetchedData.info.pages) {
            pageBtns.innerHTML = prevBtnTemplate() + nextBtnTemplate()
        }
        else if (count === fetchedData.info.pages) {
            pageBtns.innerHTML = prevBtnTemplate()
        }
    }
}

function nextPage() {
    count++
    renderFilteredCards(searchBar.value)
}

function prevPage() {
    count--
    renderFilteredCards(searchBar.value)
}

searchBtn.addEventListener("click", () => {
    count = 1;
    let result = searchBar.value;
    renderFilteredCards(result)
})


function main() {
    renderdCards()
}

