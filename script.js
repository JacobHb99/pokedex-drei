function renderLoadMoreButton() {
    let listContent = document.getElementById('loadMoreButton');
    listContent.innerHTML = '';

    listContent.innerHTML += /*html*/`
        <button onclick="loadMorePokemons()" type="button" class="btn btn-warning btn-lg">Load More ...</button>
    `
}



function renderPokedexListHTML (i, currentPokemon) {
    let listContent = document.getElementById('contentBody');
    let typeName = currentPokemon['types']['0']['type']['name'];
    let pokemonImage = currentPokemon['sprites']['other']['official-artwork']['front_shiny'];

    listContent.innerHTML += /*html*/`
        <div class="card rounded m-4 listCard" onclick="openPopUpCard(${i}, 'popUpContainer')">
            <div class="card-body ${typeName}">
                <div class="idContainer d-flex justify-content-end align-items-center color-white">
                    #${currentPokemon['id']}
                </div>
                
                <div id="nameContainer${i}" class="nameContainer d-flex justify-content-start align-items-cente color-white">
                    ${currentPokemon['name']}
                </div>
                <div class="d-flex">
                    <div class="typesContainer color-white" id="typesContainer${i}"></div>
                    <div class="imgContainer" id="imgContainer">
                        <img class="listCardImg" src="${pokemonImage}" alt="">
                    </div>
                </div>
            </div>
        </div>
        `
        renderTypesHTML(i, currentPokemon, `typesContainer${i}`);
        capitalizeString(i, currentPokemon, `nameContainer${i}`);
}



function renderTypesHTML(i, currentPokemon, elementID) {
    let typeContent = document.getElementById(elementID);

    for (let j = 0; j < currentPokemon['types'].length; j++) {
        let typeName = currentPokemon['types'][j]['type']['name'];
        typeContent.innerHTML += /*html*/`

        <div class="pokemonType d-flex align-items-center justify-content-center">
            ${typeName}
        </div>
    `
    }
}



function renderPopUpHTML(i, currentPokemon) {
    let content = document.getElementById(`popUpContainer`);
    let pokemonImage = currentPokemon['sprites']['other']['official-artwork']['front_shiny'];
    let typeName = currentPokemon['types']['0']['type']['name'];

    content.innerHTML = '';
    content.innerHTML += /*html*/`
        <div class="card popUpCard">

            <div class="popUpImgContainer d-flex justify-content-center align-items-center ${typeName}">
                <img  class="popUpImg" src="${pokemonImage}" alt="">
                <span class="popUpID">#${currentPokemon['id']}</span>
                <img class="btn popUpCloseButton" type="submit" onclick="closeTypePopUp('popUpContainer')" src="./img/pokeball.png" alt="">
            </div>

            <div class="popUpNameContainer d-flex justify-content-between">
                <div><img onclick="showLastPopUP(${i})" class="popUparrows" src="./img/linkerpfeil.png" alt=""></div>
                <h2 id="popUpName${i}" class="popUpName"><b>${currentPokemon['name']}</b></h2>
                <div><img onclick="showNextPopUP(${i})" class="popUparrows" src="./img/rechter-pfeil.png" alt=""></div>
            </div>

            <div class="d-flex justify-content-center align-items-center">
                <ul id="popUpNav${i}" class="nav nav-tabs"></ul>
            </div>

            <section id="aboutContainer${i}" class="aboutContainer m-2"></section>

            <section id="statsContainer${i}" class="statsContainer m-2 p-3 d-none" ></section>

            <section id="movesContainer${i}" class="movesContainer m-2 p-3 d-none"></section>

            <section id="abilitiesContainer${i}" class="abilitiesContainer m-2 p-3 d-none"></section>

        </div>
    `
        capitalizeString(i, currentPokemon, `popUpName${i}`);
        renderPopUpNav(i, currentPokemon);
        renderAboutHTML(i, currentPokemon);
        renderpStatsHTML(i, currentPokemon);
        renderMovesHTML(i, currentPokemon);
        renderAbilitiesHTML(i, currentPokemon);
}



function rendertypesOverviewHTML(i ,currentPokemonType) {
    let content = document.getElementById(`typesOverviewContainer`);
    let typeName = currentPokemonType['name'];

    content.innerHTML += /*html*/`
        <div class="${typeName} p-2 text-white singleType m-2">${typeName}</div>
    `;
}



function renderPopUpNav(i, currentPokemon) {
    let content = document.getElementById(`popUpNav${i}`);
    let typeName = currentPokemon['types']['0']['type']['name'];

    content.innerHTML = '';
    content.innerHTML += /*html*/`
        <li class="nav-item">
             <span id="aboutLink${i}" class="nav-link active color-white ${typeName}" onclick="openPopUpNavLinkHTML(${i}, 'aboutContainer${i}', 'movesContainer${i}', 'statsContainer${i}', 'abilitiesContainer${i}', 'aboutLink${i}', 'statsLink${i}', 'movesLink${i}', 'abilitiesLink${i}')">
             About</span>
        </li>
        <li class="nav-item">
            <span id="statsLink${i}" class="nav-link color-white ${typeName}" onclick="openPopUpNavLinkHTML(${i}, 'statsContainer${i}', 'movesContainer${i}', 'aboutContainer${i}', 'abilitiesContainer${i}', 'statsLink${i}', 'aboutLink${i}', 'movesLink${i}', 'abilitiesLink${i}')">
            Stats</span>
        </li>
        <li class="nav-item">
            <span id="movesLink${i}" class="nav-link color-white ${typeName}" onclick="openPopUpNavLinkHTML(${i}, 'movesContainer${i}', 'statsContainer${i}', 'aboutContainer${i}', 'abilitiesContainer${i}', 'movesLink${i}', 'statsLink${i}', 'aboutLink${i}', 'abilitiesLink${i}')">
            Moves</span>
        </li>
         <li class="nav-item">
            <span id="abilitiesLink${i}" class="nav-link color-white ${typeName}" onclick="openPopUpNavLinkHTML(${i}, 'abilitiesContainer${i}', 'movesContainer${i}', 'aboutContainer${i}', 'statsContainer${i}', 'abilitiesLink${i}', 'aboutLink${i}', 'statsLink${i}', 'movesLink${i}')">
            Abilities</span>
        </li>
    `
}



function renderAboutHTML(i, currentPokemon) {
    let content = document.getElementById(`aboutContainer${i}`);
    let typeName = currentPokemon['types']['0']['type']['name'];

    content.innerHTML = '';
    content.innerHTML += /*html*/`
        <div class="aboutList">
            <ul class="text-white aboutList p-3">
                <li class="d-flex justify-content-between">
                    <span class="aboutValueNameContainer"><b>Name:</b></span><span id="popUpAboutName${i}" class="aboutValueContainer">${currentPokemon['name']}</span>
                </li>

                <li class="d-flex justify-content-between">
                    <span class="aboutValueNameContainer"><b>ID:</b></span><span class="aboutValueContainer">#${currentPokemon['id']}</span>
                </li>

                <li class="d-flex justify-content-between">
                    <span class="aboutValueNameContainer"><b>Height:</b></span><span class="aboutValueContainer">${currentPokemon['height']}</span>
                </li>

                <li class="d-flex justify-content-between">
                    <span class="aboutValueNameContainer"><b>Weight:</b></span><span class="aboutValueContainer">${currentPokemon['weight']}</span>
                </li>

                <li class="d-flex justify-content-between">
                    <span class="aboutValueNameContainer"><b>Types:</b></span><span id="popUpTypes${i}" class="popUpTypes d-flex"></span>
                </li>
            </ul>
        </div>
         ` 
        capitalizeString(i, currentPokemon, `popUpAboutName${i}`);  
        renderPopUpTypes(i, currentPokemon);
}



function renderPopUpTypes(i, currentPokemon) {
    let content = document.getElementById(`popUpTypes${i}`);
    let typesArray = currentPokemon['types'];

    content.innerHTML = '';

    for (let j = 0; j < typesArray.length; j++) {
        const type = typesArray[j];
        let typeName = currentPokemon['types'][j]['type']['name'];

        content.innerHTML += /*html*/`
            <div class="popUptype ${typeName} p-2 text-white m-2">${typeName}</div>
        `
    }
}



function renderpStatsHTML(i, currentPokemon) {
    let content = document.getElementById(`statsContainer${i}`);
    let typeName = currentPokemon['types']['0']['type']['name'];
    let currentStats = currentPokemon['stats'];
  
    content.innerHTML = '';

    for (let j = 0; j < currentStats.length; j++) {
        let stat = currentPokemon['stats'][j]['base_stat'];
        
        content.innerHTML += /*html*/`
            <div class="skillContainer d-flex justify-content-between align-items-center">
                <div class="singleSkillContainer">
                <div class="progress" role="progressbar" aria-label="Animated striped example" 
                    aria-valuemin="0" aria-valuenow="${currentPokemon['stats'][j]['base_stat']}" aria-valuemax="120">
                <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${stat}%"></div>
            </div>
            </div>
            
            <div class="skillsNumber">
                <span>${stat}</span>
            </div>
            </div>

            <div class="skillName">
                ${currentPokemon['stats'][j]['stat']['name']}
            </div>
    `
    }
}



function renderMovesHTML(i, currentPokemon) {
    let content = document.getElementById(`movesContainer${i}`);
    let typeName = currentPokemon['types']['0']['type']['name'];
    let moves = currentPokemon['moves'];

    content.innerHTML = '';

    for (let j = 0; j < moves.length; j++) {
        const move = moves[j]['move']['name'];

        content.innerHTML += /*html*/`
        <div class="singleMoveContainer ${typeName}">
            ${move}
        </div>
         `   
    }
}



function renderAbilitiesHTML(i, currentPokemon) {
    let content = document.getElementById(`abilitiesContainer${i}`);
    let typeName = currentPokemon['types']['0']['type']['name'];
    let abilities = currentPokemon['abilities'];

    content.innerHTML = '';

    for (let j = 0; j < abilities.length; j++) {
        const move = abilities[j]['ability']['name'];

        content.innerHTML += /*html*/`
        <div class="singleMoveContainer ${typeName}">
            ${move}
        </div>
         `   
    }
}

































































