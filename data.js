let currentPokemon;
let currentPokemonType;
let loadAmount = 20;
let loadedPokemons = 1;
let pokedex = [];



async function fetchPokemonData(loadedPokemons, loadAmount) {
    for (let i = loadedPokemons; i < loadAmount; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let respsonse = await fetch(url);
        let currentPokemon = await respsonse.json();

        pokedex.push(currentPokemon);

        renderPokedexListHTML(i, currentPokemon);
        console.log(currentPokemon);
    }  
    renderLoadMoreButton();
    catchtypesOverview();
}



async function catchtypesOverview(){
    for (let k = 1; k < 15; k++) {
        let url = `https://pokeapi.co/api/v2/type/${k}`;
        let response = await fetch(url);
        let currentPokemonType = await response.json();
        console.log(currentPokemonType);
        rendertypesOverviewHTML(k, currentPokemonType);
    }
}



async function catchNewIndex(i){
    let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    let response = await fetch(url);
    let currentPokemon = await response.json();

    renderPopUpHTML(i, currentPokemon);
}




function capitalizeString(i, currentPokemon, elementId) {
    let pokemonName = document.getElementById(elementId); 
    
    pokemonName.innerHTML = currentPokemon['name'].charAt(0).toUpperCase() + 
    currentPokemon['name'].slice(1);  
}



function openPopUpNavLinkHTML(i, addID, removeID1, removeID2, removeID3, activeID, deactiveID1, deactiveID2, deactiveID3) {
    document.getElementById(removeID1).classList.add('d-none');
    document.getElementById(removeID2).classList.add('d-none');
    document.getElementById(removeID3).classList.add('d-none');
    document.getElementById(addID).classList.remove('d-none');

    document.getElementById(activeID).classList.add('active');
    document.getElementById(deactiveID1).classList.remove('active');
    document.getElementById(deactiveID2).classList.remove('active');
    document.getElementById(deactiveID3).classList.remove('active');
}



function closeTypePopUp(ID) {
    document.getElementById(ID).classList.add('d-none');
}



function openTypePopUpCard(ID) {
    document.getElementById(ID).classList.remove('d-none');
}


function openPopUpCard(i, ID) {
    document.getElementById(ID).classList.remove('d-none');

    catchNewIndex(i);
} 



function showNextPopUP(i) {
    catchNewIndex(i, currentPokemon);
    if(i < 151) {
        i++;
    } else {
        i = 1;
    }

    catchNewIndex(i);
}



function showLastPopUP(i) {
    catchNewIndex(i, currentPokemon);
    if(i > 1) {
        i--;
    } else {
        i = 151;
    }
    catchNewIndex(i);
}



function loadMorePokemons() {
    loadedPokemons = loadedPokemons + loadAmount;
    loadAmount = loadAmount + 20;

    fetchPokemonData(loadedPokemons, loadAmount);
}

























