const hamburguer = document.querySelector('[menu-button]');
const menuItens = document.querySelector('[menu-itens]');

const escondeMostra = () => {
    menuItens.classList.toggle('esconde');
}

hamburguer.onmouseover = escondeMostra;



