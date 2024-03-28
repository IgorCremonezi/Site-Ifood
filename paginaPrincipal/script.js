document.getElementById('hamburguer').addEventListener('click', function() {
    var menuLista = document.querySelector('.menu-lista');
    menuLista.classList.toggle('menu-visivel');

    var cabecalho = document.querySelector('.menu-header');
    cabecalho.classList.toggle('expandido');

    var hamb = document.querySelector('#hamburguer');
    hamb.classList.toggle('clicado')

    var entrarElement = document.getElementById('entrar');
    entrarElement.classList.toggle('entrado');

    var criarc = document.getElementById('criarconta');
    criarc.classList.toggle('criar');
});