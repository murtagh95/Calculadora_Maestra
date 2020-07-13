// Declaro variables
var numeros = ""
var numero1 = "", numero2 = "" , operacion = ""
var pantalla = document.getElementById("pantalla")
function escribir_numeros(numero){
    numeros = numeros + numero

    // Verificamos que encuentre el elemento
    if(pantalla) {
        pantalla.value = numeros
    }
}

function suma() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        numero1 = numeros
        operacion = "+"
        numeros = numeros + "+"
        pantalla.value = numeros
    }
}

function resta() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        numero1 = numeros
        operacion = "-"
        numeros = numeros + "-"
        pantalla.value = numeros
    }
}

function divi() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        numero1 = numeros
        operacion = "/"
        numeros = numeros + "/"
        pantalla.value = numeros
    }
}

function multi() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        numero1 = numeros
        operacion = "*"
        numeros = numeros + "*"
        pantalla.value = numeros
    }
}

function borrar() {
    numeros = numeros.substring(0,numeros.length-1)
    if(pantalla) {
        pantalla.value = numeros
    }
}

function borrar_todo() {
    numeros = ""
    if(pantalla) {
        pantalla.value = numeros
    }
}

function igual() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        numero2 = numeros.substring(numero1.length + 1)  // Generamos un str a partir del operador
        // Convierto los números de cadena a enntero
        numero1 = parseFloat(numero1)
        numero2 = parseFloat(numero2)

        // Verifico que operación se ingreso
        if(operacion == "+") {
            pantalla.value = numeros + " = " + (numero1 + numero2)
        }

        else if(operacion == "-") {
            pantalla.value = numeros + " = " + (numero1 - numero2)
        }
        
        else if(operacion == "*") {
            pantalla.value = numeros + " = " + (numero1 * numero2)
        }
        
        else if(operacion == "/") {
            pantalla.value = numeros + " = " + (numero1 / numero2)
        }

        numeros = ""  // Acero la variable que guarda lo escrito en pantalla
    }
}