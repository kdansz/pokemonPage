const abrirDados = document.querySelector(".button1")

const form = document.querySelector(".form1")

const mascara = document.querySelector(".mascara-form")

function inserirDados(){

    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    form.style.transition = "1.5s, easy-in-out"
    mascara.style.visibility = "visible"
    mascara.style.transition = "1.5s, easy-in-out"


}

function esconderMascara(){

    mascara.style.visibility = "hidden"
    form.style.left = "-369px"
    form.style.transform = "translateX(0)"
    form
}


abrirDados.addEventListener("click", inserirDados)

mascara.addEventListener("click", esconderMascara)

const enviarDados = document.querySelector(".button2")

function Dados(){

    console.log(form.innerHTML)


}


enviarDados.addEventListener("click", Dados)


const formularioCampos = document.querySelector(".form1")

const campos = document.querySelectorAll(".inputs-form")


