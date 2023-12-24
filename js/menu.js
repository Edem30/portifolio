const btnmenu = document.getElementById('btn-abrir-menu');
const btnmobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');
const body = document.body;

const adicionarClasseAbrirMenu = () => {
    btnmobile.classList.add('abrir-menu');
    body.classList.add('menu-aberto'); // Adiciona uma classe ao corpo para indicar que o menu está aberto
};

const removerClasseAbrirMenu = () => {
    btnmobile.classList.remove('abrir-menu');
    body.classList.remove('menu-aberto'); // Remove a classe ao fechar o menu
};

btnmenu.addEventListener('click', adicionarClasseAbrirMenu);
btnmobile.addEventListener('click', removerClasseAbrirMenu);
overlay.addEventListener('click', removerClasseAbrirMenu);

// Adiciona um event listener para fechar o menu ao clicar fora dele
body.addEventListener('click', (event) => {
    if (!event.target.closest('#menu-mobile') && !event.target.closest('#btn-abrir-menu')) {
        removerClasseAbrirMenu();
    }
});

// Impede que o clique no menu feche o menu imediatamente (opcional, dependendo do comportamento desejado)
btnmobile.addEventListener('click', (event) => {
    event.stopPropagation();
});