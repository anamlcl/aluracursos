let btnAdd = document.querySelector('#buscar-paciente')

btnAdd.addEventListener('click', () => {
    
    let xhr = new XMLHttpRequest() // o objeto XMLHttpRequest é responsável por fazer requisições HTTP assíncronas com JS. Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML; este nome só se manteve devido a um legado histórico. E para instanciar um novo objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new.

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes') // por se tratar de um XMLHttpRequest é necessário configurar a requisição dizendo para qual servidor queremos enviá-la e também qual método HTTP será usado. Isto é feito através do método '.open()' passando o método (GET, no caso) e a url.

    xhr.addEventListener('load', () => {

        let errorRequest = document.querySelector('#erro-requisicao')

        if (xhr.status == 200) {

            errorRequest.classList.add('invisivel')
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            pacientes.forEach(paciente => {
                addPacienteNaTabela(paciente)
            })

        } else {
            errorRequest.classList.remove('invisivel')
            errorRequest.classList.add('msg-erro')
        }
        

    })

    xhr.send() // a requisição só é enviada após chamarmos esse método '.send()'

})