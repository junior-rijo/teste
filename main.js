(function () {
    const search = document.getElementById("search")
    const profile = document.getElementById("profile")
    const url = "https://api.github.com/users"
    const client_id = "Iv1.dee7ae07fe76a271"
    const cliente_secret = "e51ea7341ec254e1ed7ea58ec0f5f291c5d17f95" 

    async function getUser(user) {//função do usuario
        const profileResponse = await fetch(
            `${url}/${user}?client_id=${client_id}&client_secret=${cliente_secret}`) //buscando pelas chaves api   
        
        const profile = profileResponse.json()//transformando em json

        return profile
    }

    search.addEventListener("keyup", e => {
        const user = e.target.value//valor digitado no botão.

        //só pesquisar quando for maior que 0

        if (user.length > 0) {
            getUser(user).then(res => console.log(res))//enviando meu users
        }

        
    })
})()