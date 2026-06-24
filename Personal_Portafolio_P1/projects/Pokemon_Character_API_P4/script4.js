let pokeCharacters = ["pikachu", "charizard", "bulbasaur", "squirtle", "jigglypuff", "gengar", "snorlax", "lucario", "eevee", "mewtwo"];

async function fetchData(pokeName) {
    try{
        let name = document.getElementById(`${pokeName}-name`);
        let ability1 = document.getElementById(`${pokeName}-ability-1`);
        let ability2 = document.getElementById(`${pokeName}-ability-2`);
        let weight = document.getElementById(`${pokeName}-weight`);
        let height = document.getElementById(`${pokeName}-height`);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
        const data = await response.json();
        name.innerText = data.name;
        ability1.innerText = data.abilities[0].ability.name;
        if (!data.abilities[1]) {
            ability2.innerText = "No 2nd hability"
        }
        else {
            ability2.innerText = data.abilities[1].ability.name
        }
        weight.innerText = `${data.weight} hg`;
        height.innerText = `${data.height} hm`;
    }
    catch(error) {
        console.error(error)
    }
}

function loopThroughPokes() {
    for (element of pokeCharacters) {
        fetchData(element)
    }
}

function main() {
    loopThroughPokes()
}

main()