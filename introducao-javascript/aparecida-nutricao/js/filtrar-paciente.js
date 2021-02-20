var campoFiltro = document.querySelector("#paciente-filtro")

campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente")

    for (var i = 0; i < pacientes.length; i++) {
        
        var paciente = pacientes[i];
        var tdNome = paciente.querySelector(".info-nome")
        var nome = tdNome.textContent
        var expressao = new RegExp(this.value, 'i') // o primeiro parâmetro é o padrão (o texto da expressão regular, o que deve ser buscado) e o segundo parâmetro são uma ou mais flags (como a expressão regular deve fazer a busca). A flag 'i' está sendo utilizada aqui para que não haja distinção entre letras maiúsculas e minúsculas.

        if (!expressao.test(nome)) {
            paciente.classList.add('invisivel')
        } else {
            paciente.classList.remove('invisivel')
        }
    }
});

// var campoFiltro = document.querySelectorAll('#paciente-filtro')

// campoFiltro.addEventListener('input', () => {

//     console.log(this.value)
//     var pacientes = document.querySelectorAll('.paciente')

//     for(var i = 0; i < pacientes.length; i++) {
//         var paciente = pacientes[i]
//         var tdNome = paciente.querySelector('.info-nome')
//         var nome = tdNome.textContent

//         if(this.value.length > 0 && nome != this.value) {
//             paciente.classList.add('invisivel')
//         } else {
//             paciente.classList.remove('invisivel')
//         }
//     }

// })