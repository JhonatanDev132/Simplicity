const botao = document.querySelector('nav h2');
const linksMenu = document.querySelector('.menu');
const icone = document.querySelector('.icone');
botao.addEventListener('click', function(event){
    event.preventDefault();
    linksMenu.classList.toggle('aberto');

    /* Lógica para alternância do texto/ícone
    Se a classe aberto estiver aplicada ao linksMenu,
    então mude o texto/ícone para 'fechar'.
    Senão, continue mostrando o  texto/ícone 'Menu'.*/
    if ( linksMenu.classList.contains('aberto')) {
            icone.innerHTML = 'Fechar &times';
    }   else {
            icone.innerHTML = 'Menu &equiv;'
    }
})