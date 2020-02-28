const $cepConsulta = document.getElementById('cep')
function consultarCep  () {
    axios
    .get('http://viacep.com.br/ws/${$cep.value}/json/')
    .then(({data}) => console.logh (data))
}