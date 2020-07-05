function insertInLocalStorage() {
    let objetoUsuario = {
        nombre: "Julian",
        edad: 19,
        profesion: "Developer"
    }
    let stringSencillo = "React es genial!"
    localStorage.setItem("user", JSON.stringify(objetoUsuario))
    localStorage.setItem("text", stringSencillo)
}

insertInLocalStorage()

function getFromLocalStorage() {
    if (localStorage.getItem("user")) {
        let usuarioRecuperado = JSON.parse(localStorage.getItem("user"))
        console.log(usuarioRecuperado)
    } else {
        console.log("No hay una entrada en localStorage para 'user'")
    }
    if (localStorage.getItem("text")) {
        let stringRecuperado = localStorage.getItem("text")
        console.log(stringRecuperado)
    } else {
        console.log("No hay una entrada en localStorage para 'text'")
    }
}

getFromLocalStorage()
