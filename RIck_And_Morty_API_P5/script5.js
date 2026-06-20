async function fetchData() {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
            throw new Error("Could not fetch data")
        }
        const data = await response.json();
        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
}

fetchData()