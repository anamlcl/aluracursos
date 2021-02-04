const botao = document.querySelector('#adicionar-paciente')

// criando evento ao clicar no botão
botao.addEventListener('click', function (event) { // considerado boa prática sempre usar 'event' ou só 'e' como parâmetro em funções que são chamadas por eventos
    event.preventDefault() // evita que ocorra o compartamento/evento padrão do botão que faz o site recarregar e apagar as informações no formulário toda vez que o botão for clicado
    
    // buscando formulário do HTML
    let form = document.querySelector('#form-novo-paciente')
    
    // coletando os valores específicos de cada campo/dado
    let valorNome = form.nome.value
    let valorPeso = form.peso.value
    let valorAltura = form.altura.value
    let valorGordura = form.gordura.value
    
    // criando uma 'tr'
    let pacienteTr = document.createElement('tr')
    
    // criando as td's da 'tr' criada
    let nomeTd = document.createElement('td')
    let pesoTd = document.createElement('td')
    let alturaTd = document.createElement('td')
    let gorduraTd = document.createElement('td')
    let imcTd = document.createElement('td')
    
    // adicionando os valores coletados aos td's expecíficos de cada campo/dado
    nomeTd.textContent = valorNome
    pesoTd.textContent = valorPeso
    alturaTd.textContent = valorAltura
    gorduraTd.textContent = valorGordura
    
    // adicionando os valores coletados ao 'tr' criado
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)
    
    // buscando a tabela do HTML
    let tabela = document.querySelector('#tabela-pacientes')    
    // adicionando na tabela o 'tr' contendo os valores coletados
    tabela.appendChild(pacienteTr)

})