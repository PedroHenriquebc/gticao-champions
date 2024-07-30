/*
quando clicar no pokémon da listagenm emos que esconder o cartao do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
*/

// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem dos pokémons
    pokemon.addEventListener('click', () => {
        //remover a clase aberto so do cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar em um pokémon da listagem pegamos o id para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

function changeImage(src) {
    document.getElementById('backgroundImage').src = src;
}

// #001
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movable-container');
    const backgroundImage = document.getElementById('backgroundImage');

    // Movimento com o mouse
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        // Rotação do container
        const rotateX = ((clientY / innerHeight) - 0.5) * 15; // Reduzir a amplitude para uma rotação mais realista
        const rotateY = ((clientX / innerWidth) - 0.5) * 15;  // Reduzir a amplitude para uma rotação mais realista
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // Movimento da imagem de fundo
        const moveX = ((clientX / innerWidth) - 0.5) * 20; // Ajuste a amplitude do movimento
        backgroundImage.style.transform = `translateX(${moveX}px)`;
    });

    // Movimento com o dispositivo móvel
    if (window.DeviceOrientationEvent) {
        const handleDeviceOrientation = (event) => {
            const { beta, gamma } = event;

            // Movimento do container apenas para a esquerda e direita
            const moveX = gamma / 2; // Ajuste a amplitude do movimento para ser mais suave
            container.style.transform = `translateX(${moveX}px)`;

            // Movimento da imagem de fundo
            const backgroundMoveX = gamma / 2; // Ajuste a amplitude do movimento
            backgroundImage.style.transform = `translateX(${backgroundMoveX}px)`;
        };

        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            // iOS 13+ exige permissão do usuário
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.addEventListener('deviceorientation', handleDeviceOrientation);
                    }
                })
                .catch(console.error);
        } else {
            // Android e iOS versões anteriores
            window.addEventListener('deviceorientation', handleDeviceOrientation);
        }
    }
});

//        #002
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movable-container2');
    const backgroundImage = document.getElementById('backgroundImage2');

    // Movimento com o mouse
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        // Rotação do container
        const rotateX = ((clientY / innerHeight) - 0.5) * 15; // Reduzir a amplitude para uma rotação mais realista
        const rotateY = ((clientX / innerWidth) - 0.5) * 15;  // Reduzir a amplitude para uma rotação mais realista
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // Movimento da imagem de fundo
        const moveX = ((clientX / innerWidth) - 0.5) * 20; // Ajuste a amplitude do movimento
        backgroundImage.style.transform = `translateX(${moveX}px)`;
    });

    // Movimento com o dispositivo móvel
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event;

            // // Rotação do container
            // const rotateX = beta / 3;   // Reduzir a amplitude para uma rotação mais realista
            // const rotateY = gamma / 3;  // Reduzir a amplitude para uma rotação mais realista
            // container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            // Movimento do container apenas para a esquerda e direita
            const moveX = gamma / 2; // Ajuste a amplitude do movimento para ser mais suave
            container.style.transform = `translateX(${moveX}px)`;

            // Movimento da imagem de fundo
            const backgroundMoveX = gamma / 2; // Ajuste a amplitude do movimento
            backgroundImage.style.transform = `translateX(${backgroundMoveX}px)`;
        });
    }
});

//        #003
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movable-container3');
    const backgroundImage = document.getElementById('backgroundImage3');

    // Movimento com o mouse
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        // Rotação do container
        const rotateX = ((clientY / innerHeight) - 0.5) * 15; // Reduzir a amplitude para uma rotação mais realista
        const rotateY = ((clientX / innerWidth) - 0.5) * 15;  // Reduzir a amplitude para uma rotação mais realista
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // Movimento da imagem de fundo
        const moveX = ((clientX / innerWidth) - 0.5) * 20; // Ajuste a amplitude do movimento
        backgroundImage.style.transform = `translateX(${moveX}px)`;
    });

    // Movimento com o dispositivo móvel
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event;

            // // Rotação do container
            // const rotateX = beta / 3;   // Reduzir a amplitude para uma rotação mais realista
            // const rotateY = gamma / 3;  // Reduzir a amplitude para uma rotação mais realista
            // container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            // Movimento do container apenas para a esquerda e direita
            const moveX = gamma / 2; // Ajuste a amplitude do movimento para ser mais suave
            container.style.transform = `translateX(${moveX}px)`;

            // Movimento da imagem de fundo
            const backgroundMoveX = gamma / 2; // Ajuste a amplitude do movimento
            backgroundImage.style.transform = `translateX(${backgroundMoveX}px)`;
        });
    }
});


//        #004
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('movable-container4');
    const backgroundImage = document.getElementById('backgroundImage4');

    // Movimento com o mouse
    document.addEventListener('mousemove', (event) => {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;

        // Rotação do container
        const rotateX = ((clientY / innerHeight) - 0.5) * 15; // Reduzir a amplitude para uma rotação mais realista
        const rotateY = ((clientX / innerWidth) - 0.5) * 15;  // Reduzir a amplitude para uma rotação mais realista
        container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // Movimento da imagem de fundo
        const moveX = ((clientX / innerWidth) - 0.5) * 20; // Ajuste a amplitude do movimento
        backgroundImage.style.transform = `translateX(${moveX}px)`;
    });

    // Movimento com o dispositivo móvel
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event;

            // // Rotação do container
            // const rotateX = beta / 3;   // Reduzir a amplitude para uma rotação mais realista
            // const rotateY = gamma / 3;  // Reduzir a amplitude para uma rotação mais realista
            // container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            // Movimento do container apenas para a esquerda e direita
            const moveX = gamma / 2; // Ajuste a amplitude do movimento para ser mais suave
            container.style.transform = `translateX(${moveX}px)`;

            // Movimento da imagem de fundo
            const backgroundMoveX = gamma / 2; // Ajuste a amplitude do movimento
            backgroundImage.style.transform = `translateX(${backgroundMoveX}px)`;
        });
    }
});