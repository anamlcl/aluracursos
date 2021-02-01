// alterando o título da página
const title = document.querySelector('.titulo')
title.textContent = 'Aparecida Nutricionista'

// buscando dados do primeiro paciente da tabela
const paciente = document.querySelector('#primeiro-paciente')

const tdNome = paciente.querySelector('.info-nome')
const nome = tdNome.textContent

const tdPeso = paciente.querySelector('.info-peso')
const peso = tdPeso.textContent

const tdAltura = paciente.querySelector('.info-altura')
const altura = tdAltura.textContent

const tdImc =  paciente.querySelector('.info-imc')

let pesoValido = true;
let alturaValida = true;

if (peso <= 0 || peso >= 1000) {
    pesoValido = false;
    tdImc.textContent = 'Peso inválido!'
    tdImc.style.color = 'red'
    tdImc.style.fontWeight = 'bold'

}

if (altura <= 0 || altura >= 3.00) {
    alturaValida = false;
    tdImc.textContent = 'Altura inválida!'
    tdImc.style.color = 'red'
    tdImc.style.fontWeight = 'bold'
}

if (pesoValido && alturaValida) {
    const imc = peso / (altura * altura)
    tdImc.textContent = imc
    tdImc.style.fontWeight = 'bold'
}