var tabela = document.querySelector('table')

tabela.addEventListener('dblclick', (e) => {    
    e.target.parentNode.classList.add('fadeOut')
    
    // definindo um tempo para a tr selecionada ser removida depois que o conteúdo dela desaparecer
    setTimeout(() => {
        e.target.parentNode.remove() // parentNode faz com que o evento ocorra no pai (tr) do elemento (td) que sofrer o evento de duplo click    
    
    }, 500)
})



// OBS.1: 'this' é o dono do evento e 'target' é o que sofre o evento

// OBS.2: o código abaixo não remove os pacientes novos adicionados, só os já cadastrados (que estão no HTML)

// var pacientes = document.querySelectorAll('.paciente')

// pacientes.forEach(paciente => {
//     paciente.addEventListener('dblclick', () => {
//         paciente.remove()      
//     })
// })

