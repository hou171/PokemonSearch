const searchBtn = document.querySelector('#search-btn');
const pokemon = document.querySelector('.pokemon');
const searchInput = document.querySelector('.search-input');


searchBtn.addEventListener('click', function () {
    if (searchInput.value === '') {
        alert('你還沒輸入寶可夢編號或英文名稱！');
    } else {
        getData();
    }
});

function getData() {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchInput.value.toLowerCase()}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            render(data);
        })
        .catch(error => {
            searchInput.value = '';
            alert('你不知道沒有這隻神奇寶貝嗎？還想成為神奇寶貝大濕啊！？');
        });
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function render(data) {
    const pokemonId = data.id;
    const pokemonName = capitalizeFirstLetter(data.name);

    pokemon.innerHTML = `<figure class="pokemon">
        <img id="pokemon-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${pokemonId}.gif" alt="寶可夢圖片">
        <figcaption id="pokemon-name">#${pokemonId} ${pokemonName}</figcaption>
    </figure>`;
    
    searchInput.value = '';
}