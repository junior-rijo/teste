(function () {
 const search = document.getElementById("search")
 const profile = document.getElementById("profile")
 const url = "https://api.github.com/users"
 const client_id = "Iv1.dee7ae07fe76a271"
 const cliente_secret = "e51ea7341ec254e1ed7ea58ec0f5f291c5d17f95" 
//buscando e transformando o usuario em json
 async function getUser(user) {
     const profileResponse = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${cliente_secret}`)

     const profile = profileResponse.json()

     return profile
 }

 //construindo a função do componente

 function showProfile(user) {
     profile.innerHTML = `<div>
     <li>Repositorios:<span>${user.public_repos}</span></li>
     <button><a href="${user.html_url}">Ver Repositorio</button>
     </div>`
 }

 search.addEventListener("keyup", (e) =>{
     const user = e.target.value

    //efetuar a pesquisa só quando a string for maior que 0

    if (user.length > 0){
        getUser(user).then(res=> showProfile(res))
    }


 })

})()