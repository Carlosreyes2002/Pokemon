const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const HTMLResponse = document.querySelector('#app');
const ul = document.createElement('ul');


const div1 = document.createElement('div');
div1.classList.add('card', 'col-md-4');
const img1 = document.createElement('img');
img1.classList.add('card-img-top');
const div3 = document.createElement('div');
div3.classList.add('card-body');
const parrafo1 = document.createElement('p');


const div2 = document.createElement('div');
div2.classList.add('card', 'col-md-4');
const img2 = document.createElement('img');
img2.classList.add('card-img-top');
const div4 = document.createElement('div');
div4.classList.add('card-body');
const parrafo2 = document.createElement('p');

const min = 1;
const max = 500;

var id_aleatorio1 = Math.floor(Math.random() * (max - min)) + min
var id_aleatorio2 = Math.floor(Math.random() * (max - min)) + min


fetch(`${API_URL}${id_aleatorio1}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(pokemon) {
        console.log(pokemon.moves[0].move);
        let numero_ataques = pokemon.moves.length;
        let ataque_aleatorio = Math.floor(Math.random() * (numero_ataques )) ;
        let nombre_ataque = pokemon.moves[ataque_aleatorio].move.name;
        // let nombre_url = pokemon.moves[ataque_aleatorio].move.url;
        let poder_ataque =  Math.floor(Math.random() * (500 - 100)) + 100
        let SP = pokemon.stats[0].base_stat;
        let DP = pokemon.stats[2].base_stat;
    

        img1.src = "https://th.bing.com/th/id/OIP.q74g_B0I-4Frr46tMtUzbwHaG5?pid=ImgDet&rs=1";
        div1.appendChild(img1);
        div1.appendChild(div3);
        parrafo1.appendChild(
            document.createTextNode('Nombre: '+ pokemon.name + '\n' + 'Tipo: '+pokemon.types[0].type.name + '\n' + 'Peso: '+pokemon.weight + '\n' + 'Altura: '+pokemon.height + '\n' + 'Ataque: '+ nombre_ataque + '\n' + 'Poder: '+poder_ataque  + '\n' + 'SP: '+SP + '\n' + 'DP: '+DP)
        );
        div1.appendChild(parrafo1);

        
    })


fetch(`${API_URL}${id_aleatorio2}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(pokemon) {
        let numero_ataques = pokemon.moves.length;
        let ataque_aleatorio = Math.floor(Math.random() * (numero_ataques )) ;
        let nombre_ataque = pokemon.moves[ataque_aleatorio].move.name;
        // let nombre_url = pokemon.moves[ataque_aleatorio].move.url;
        let poder_ataque =  Math.floor(Math.random() * (500 - 100)) + 100
        let SP = pokemon.stats[0].base_stat;
        let DP = pokemon.stats[2].base_stat;
 

        img2.src = "https://th.bing.com/th/id/R.ad6a3f3cddf66be471b562d74e6e1e08?rik=WHlT1JfqWUJyew&pid=ImgRaw&r=0";
        div2.appendChild(img2);
        div2.appendChild(div4);
        parrafo2.appendChild(
            document.createTextNode('Nombre: '+ pokemon.name + '\n' + 'Tipo: '+pokemon.types[0].type.name + '\n' + 'Peso: '+pokemon.weight + '\n' + 'Altura: '+pokemon.height + '\n' + 'Ataque: '+ nombre_ataque + '\n' + 'Poder: '+poder_ataque + '\n' + 'SP: '+SP + '\n' + 'DP: '+DP)
        );
        div2.appendChild(parrafo2);
        
    })

    HTMLResponse.appendChild(div1);
    HTMLResponse.appendChild(div2);