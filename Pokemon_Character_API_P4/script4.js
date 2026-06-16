fetchPikachuData();

async function fetchPikachuData() {
    try{
        let name = document.getElementById("pikachu-name")
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
        const data = await response.json();
        console.log(data)
        name.innerText = data.name
    }
    catch(error) {
        console.error(error)
    }
}



