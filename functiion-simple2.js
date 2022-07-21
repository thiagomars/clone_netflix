
const banco = [
    {'id': '1', 'url': '/imgs/filmes/adam.jpg'},
    {'id': '2', 'url': '/imgs/filmes/avatar.jpg'},
    {'id': '3', 'url': '/imgs/filmes/batman.jpg'},
    {'id': '4', 'url': '/imgs/filmes/dtr.jpg'},
    {'id': '5', 'url': '/imgs/filmes/it.jpg'},
    {'id': '6', 'url': '/imgs/filmes/jurassic.jpg'},
    {'id': '7', 'url': '/imgs/filmes/matrix.jpg'},
    {'id': '8', 'url': '/imgs/filmes/morbius.jpg'},
    {'id': '9', 'url': '/imgs/filmes/thor.jpg'},
    {'id': '10', 'url': '/imgs/filmes/guardioes.jpg'},
    {'id': '10', 'url': '/imgs/filmes/mulan.jpg'},
    {'id': '10', 'url': '/imgs/filmes/vingadores.jpg'},
    {'id': '10', 'url': '/imgs/filmes/minions.jpg'},
    {'id': '10', 'url': '/imgs/filmes/harry.jpg'},
    {'id': '10', 'url': '/imgs/filmes/rio.jpg'},
    {'id': '10', 'url': '/imgs/filmes/shrek.jpg'},
    {'id': '10', 'url': '/imgs/filmes/topgun.jpg'}
]

const containerItens = document.getElementById("slide2");

const loadImg2 = (banco, container) => {
    banco.forEach(imagem => {
        container.innerHTML += `
            <div class='item'>
                <img src='${imagem.url}'
            </div>
        `
    })
}

loadImg2(banco, containerItens);

let itens = document.querySelectorAll(".item");

const anterior2 = () => {
    const lastItem = itens[itens.length - 1];
    containerItens.insertBefore(lastItem, itens[0]);
    itens = document.querySelectorAll(".item");
}

const proximo2 = () => {
    containerItens.appendChild(itens[0]);
    itens = document.querySelectorAll(".item");
}

document.querySelector('#anterior2').addEventListener("click", anterior2);
document.querySelector('#proximo2').addEventListener("click", proximo2);





