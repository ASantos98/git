const $name = document.getElementById ('name')
const $lastName = document.getElementById ('lastName')
const $cfn = document.getElementById ('cfn')
const $email = document.getElementById ('email')
const $password = document.getElementById ('password')
const $repeatPassword = document.getElementById ('repeatPassword')
const $cep = document.getElementById ('cep')
const $neighborhood = document.getElementById ('neighborhood')
const $street = document.getElementById ('street')
const $number = document.getElementById ('number')
const $state = document.getElementById ('state')
const $city = document.getElementById ('city')
const $location = document.getElementById ('location')
const $facebook = document.getElementById ('facebook')
const $twitter = document.getElementById ('twitter')
const $whatsapp = document.getElementById ('whatsapp')


function cadastrarNutricionista () {
    const dadosEnvio = {
        name: $name.value,
        lastName: $lastName.value,
        cfn: $cfn.value,
        email: $email.value,
        $password: $password.value,
        repeatPassword: $repeatPassword.value,
        cep: $cep.value,
        neighborhood: $neighborhood.value,
        street: $street.value,
        number: $number.value,
        state: $state.value,
        city: $city.value,
        location: $location.value,
        facebook: $facebook.value,
        twitter: $twitter.value,
        whatsapp: $whatsapp.value    
    }

    if (
      !dadosEnvio.name || 
      !dadosEnvio.lastName ||
      !dadosEnvio.cfn ||
      !dadosEnvio.email||
      !dadosEnvio.password||
      !dadosEnvio.repeatPassword||
      !dadosEnvio.cep||
      !dadosEnvio.neighborhood||
      !dadosEnvio.street||
      !dadosEnvio.number||
      !dadosEnvio.state||
      !dadosEnvio.city||
      !dadosEnvio.location||
      !dadosEnvio.facebook||
      !dadosEnvio.twitter||
      !dadosEnvio.whatsapp
      ) {
      alert ("você precisa preencher todos os campos obrigatórios!")
    } else{


  axios
  .post('http://localhost:3000/nutricionistas', dadosEnvio)
  .then(() => {
    $('#salvo-com-sucesso').modal('show')
})
  .catch(()=> {
    $('#erroAoSalvar').modal({
      backdrop: 'static', 
      show: true
    })
  })
 }
 }


$ ('#preenchaTodososCampos').modal({
  backdrop: 'static',
  show: true
})

return
}


$('#preenchaTodosOsCampos').modal({
  backdrop: 'static',
  show: true
})