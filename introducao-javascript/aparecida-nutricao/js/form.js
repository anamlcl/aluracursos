const botao = document.querySelector('#adicionar-paciente')

// criando evento ao clicar no botão
botao.addEventListener('click', function (event) { // considerado boa prática sempre usar 'event' ou só 'e' como parâmetro em funções que são chamadas por eventos
    event.preventDefault() // evita que ocorra o compartamento/evento padrão do botão que faz o site recarregar e apagar as informações no formulário toda vez que o botão for clicado
    
    // buscando formulário do HTML
    let form = document.querySelector('#form-novo-paciente')
    
    // chamando as funções
    let paciente = obtemDadosDoForm(form)    
    let erros = validaPaciente(paciente)

    if(erros.length > 0) {
        exibeMsgDeErro(erros) 
        return;
    }

    // chamando a função
    addPacienteNaTabela(paciente)

    form.reset() // limpa os campos do formúlario após envio dos dados do novo paciente

    let msgErro = document.querySelector('#msgs-erro')
    msgErro.innerHTML = ''

})

function addPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente)
    // buscando a tabela do HTML
    let tabela = document.querySelector('#tabela-pacientes')
    // adicionando na tabela o 'tr' contendo os valores coletados
    tabela.appendChild(pacienteTr)
}

function exibeMsgDeErro(erros) {
    let ul = document.querySelector('#msgs-erro')
    ul.innerHTML = '';

    erros.forEach(erro => {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

// coletando os valores específicos de cada campo/dado do novo paciente
function obtemDadosDoForm(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value) // reutilizando a função criada para calcular o IMC
    }

    return paciente

}

// criando uma nova 'tr' para adicionar um novo paciente
function montaTr(paciente) {

    let pacienteTr = document.createElement('tr') // criando uma 'tr'
    pacienteTr.classList.add('paciente') // add a class='paciente' a tag 'tr' para igualar com as outras tr's já criadas no HTML
    
    // chamando a função, criando as td's e adicionando os valores coletados na 'tr' criada
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome')) 
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))
    
    return pacienteTr

}

// criando td's para a 'tr' criada
function montaTd(dado, classe) {

    let td = document.createElement('td')
    td.textContent = dado // adicionando o valor coletado ao 'td' expecífico de cada dado do paciente
    td.classList.add(classe) // add a classe específica de cada 'td'

    return td

}

function validaPaciente(paciente){

    let erros = []
    // quando só tem uma condição pode colocar na mesma linha e não precisa das chaves
    // if(paciente.nome.length == 0) erros.push('Preencha o nome do paciente!')
    if(!validaPeso(paciente.peso)) erros.push('Valor do peso é inválido!')
    // if(paciente.peso.length == 0) erros.push('Insira o peso do paciente!')
    if(!validaAltura(paciente.altura)) erros.push('Valor da altura é inválido!')
    // if(paciente.altura.length == 0) erros.push('Insira a altura do paciente!')  
    // if(paciente.gordura.length == 0) erros.push('Insira o percentual de gordura do paciente!')
    if(paciente.nome.length == 0 || paciente.peso.length == 0 || paciente.altura.length == 0 || paciente.gordura.length == 0) {
        erros.push('Preencha o(s) campo(s) em branco!')
    }

    return erros
}