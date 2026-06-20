function getRandom() {
    return Math.floor(Math.random() * 827)
}

async function renderedCards() {
    const cardsHolder = document.getElementById("cards-holder");
    let cardsHolderContent = '';
    for (let i = 1; i <= 10; i++) {
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/character/${getRandom()}`);
                if (!response.ok) {
                    throw new Error("Could not fetch data")
                }
                const data = await response.json();  
                cardsHolderContent +=   `<div class="card m-4" style="width: 20rem;">
                                        <img src="${data.image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${data.name}</h5>
                                            <ul>
                                                <li><strong>Gender:</strong>  ${data.gender}</li>
                                                <li><strong>Location:</strong>  ${data.location.name}</li>
                                                <li><strong>Origin:</strong>  ${data.origin.name}</li>
                                                <li><strong>Species:</strong>  ${data.species}</li>
                                                <li><strong>Status:</strong>  ${data.status}</li>
                                                <li><strong>Type:</strong>  ${data.type}</li>
                                            </ul>
                                            <button class="btn btn-primary d-flex ms-auto">Add to favorites</button>
                                        </div>
                                    </div>`    
            }
            catch(error) {
                console.log(error)
            }
    }
    cardsHolder.innerHTML = cardsHolderContent  
}

renderedCards()

