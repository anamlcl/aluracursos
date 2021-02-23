// abrindo o menu lateral ao clicar no menu "hambúrguer"
botaoAbrir = document.querySelector('.menu-aberto')

botaoAbrir.addEventListener('click', () => {
    document.documentElement.classList.add('menu-ativo')
}) 

// fechando o menu lateral ao clicar em fechar
botaoFechar = document.querySelector('.menu-fechado')

botaoFechar.addEventListener('click', () => {
    document.documentElement.classList.remove('menu-ativo')
})

// fechando o menu lateral ao clicar na área cinza
document.documentElement.addEventListener('click', (event) => {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo')
    }
}) 

// Por serem do CSS os pseudo-elementos não podem ser selecionados no JavaScript para adicionar um evento de clique. A solução é colocar o evento no elemento pai (no caso, o próprio <html>, que será acessado via o 'document.documentElement'). Todo clique no pseudo-elemento vai disparar em seu respectivo pai.

// Importante lembrar que escutar cliques no <html> acaba pegando todos os cliques na página (afinal tudo é descendente de <html>). Por isso foi adicionado o 'if', que vai filtrar a ação e executá-la apenas se o elemento clicado (target) for exatamente o <html> e não algum filho interno, como o menu.