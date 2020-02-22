function enviar () {
    fetch('http://localhost:3000/pacientes')
     .then(function (response) {
         return (response.json())
     })
     .then(function (response) {
         console.log(response)
     })
}