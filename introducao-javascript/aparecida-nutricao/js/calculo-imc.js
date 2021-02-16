// alterando o título da página
const title = document.querySelector('.titulo')
title.textContent = 'Aparecida Nutricionista'

// buscando dados do primeiro paciente da tabela
// const paciente = document.querySelector('#primeiro-paciente')

// buscando dados de todos os pacientes da tabela
const pacientes = document.querySelectorAll('.paciente')

for (let i = 0; i < pacientes.length; i++) {

    const paciente = pacientes[i]

    console.log(paciente)

    // const tdNome = paciente.querySelector('.info-nome')
    // const nome = tdNome.textContent

    const tdPeso = paciente.querySelector('.info-peso')
    const peso = tdPeso.textContent

    const tdAltura = paciente.querySelector('.info-altura')
    const altura = tdAltura.textContent

    const tdImc = paciente.querySelector('.info-imc')

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        // tdPeso.style.backgroundColor = 'lightcoral'
        // tdPeso.style.fontWeight = 'bold'
        tdPeso.classList.add('dado-invalido') // prática mais correta de add CSS
        tdImc.textContent = 'Peso inválido!'
        tdImc.classList.add('imc-invalido')
        // tdImc.style.color = 'red'
        // tdImc.style.fontWeight = 'bold'

    }

    if (!alturaValida) {
        alturaValida = false;
        // tdAltura.style.backgroundColor = 'lightcoral'
        // tdAltura.style.fontWeight = 'bold'
        tdAltura.classList.add('dado-invalido')
        tdImc.textContent = 'Altura inválida!'
        tdImc.classList.add('imc-invalido')
        // tdImc.style.color = 'red'
        // tdImc.style.fontWeight = 'bold'
    }

    if (pesoValido && alturaValida) {
        let imc = calculaIMC(peso, altura)
        tdImc.textContent = imc
        // tdImc.style.fontWeight = 'bold' // prática menos correta de add CSS
    }

}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}

function calculaIMC(peso, altura) {
    let imc = 0
    imc = peso / (altura * altura)

    return imc.toFixed(2) // limita a quantidade de casas decimais que aparecem na tela
}