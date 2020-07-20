var numeros = ""
var numero1 = [] , operacion = []
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
        
        if(operacion.length == 0) {
            // Si es el primer número ingresado copiamos los valores en el array
            numero1.push(numeros)
        }
        else {
            // Creo una variable para contar los números que llevamos ingresados
            let acumuladora = 0
            // Recorremos el array para contar los números ingresados
            for (var i = 0; i < numero1.length; i++) {
                acumuladora += numero1[i].length 
            }
            // Guardamos en el array una parte de la cadena original, que empieza desde el último signo hasta el final
            numero1.push(numeros.substring(acumuladora + operacion.length ))
        }


        operacion.push("+")
        numeros = numeros + "+"
        pantalla.value = numeros
    }
}

function resta() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        if(operacion.length == 0) {
            // Si es el primer número ingresado copiamos los valores en el array
            numero1.push(numeros)
        }
        else {
            let acumuladora = 0
            for (var i = 0; i < numero1.length; i++) {
                acumuladora += numero1[i].length 
            }
            numero1.push(numeros.substring(acumuladora + operacion.length ))
        }

        operacion.push("-")
        numeros = numeros + "-"
        pantalla.value = numeros
    }
}

function divi() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        if(operacion.length == 0) {
            // Si es el primer número ingresado copiamos los valores en el array
            numero1.push(numeros)
        }
        else {
            let acumuladora = 0
            for (var i = 0; i < numero1.length; i++) {
                acumuladora += numero1[i].length 
            }
            numero1.push(numeros.substring(acumuladora + operacion.length ))
        }

        operacion.push("/")
        numeros = numeros + "/"
        pantalla.value = numeros
    }
}

function multi() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        if(operacion.length == 0) {
            // Si es el primer número ingresado copiamos los valores en el array
            numero1.push(numeros)
        }
        else {
            let acumuladora = 0
            for (var i = 0; i < numero1.length; i++) {
                acumuladora += numero1[i].length 
            }
            numero1.push(numeros.substring(acumuladora + operacion.length ))
        }

        operacion.push("*")
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
    // Borramos todo de las variables que acumuladoras

    numeros = ""

    if(pantalla) {
        pantalla.value = numeros
    }

    numero1 = []
    operacion = []
}

function igual() {
    // Agregamos al array el último número ingresado
    let acumuladora = 0
    for (var i = 0; i < numero1.length; i++) {
        acumuladora += numero1[i].length 
    }
    numero1.push(numeros.substring(acumuladora + operacion.length ))


    // Verificamos que encuentre el elemento
    if(pantalla) {
        // Variable que acumulara el resultado
        let acumuladora = 0

        // Convierto los números de cadena a enntero
        for(var i = 0; i < numero1.length; i++) {
            numero1[i] = parseFloat(numero1[i])
        }

        // Recorro el array con las operaciones
        for(var i = 0; i < operacion.length; i++) {
                    
            // Verifico que operación se ingreso
            if(operacion[i] == "+") {
                if(i == 0){
                    // Guardo en la variable acumuladora el resultado de la operacion
                    acumuladora = acumuladora + (numero1[i] + numero1[i + 1])
                }
                else {
                    acumuladora = acumuladora  + numero1[i + 1]
                }

            }
    
            else if(operacion[i] == "-") {

                if(i == 0){
                    // Guardo en la variable acumuladora el resultado de la operacion
                    acumuladora = acumuladora + (numero1[i] - numero1[i + 1])
                }
                else {
                    acumuladora = acumuladora  - numero1[i + 1]
                }

            }
            
            else if(operacion[i] == "*") {

                if(i == 0){
                    // Guardo en la variable acumuladora el resultado de la operacion
                    acumuladora = acumuladora + (numero1[i] * numero1[i + 1])
                }
                else {
                    acumuladora = acumuladora  * numero1[i + 1]
                }
                
            }
            
            else if(operacion[i] == "/") {
                
                if(i == 0){
                    // Guardo en la variable acumuladora el resultado de la operacion
                    acumuladora = acumuladora + (numero1[i] / numero1[i + 1])
                }
                else {
                    acumuladora = acumuladora  / numero1[i + 1]
                }


               
            }
                    

        }

        pantalla.value = numeros + " = " + (acumuladora)

        numeros = ""  // Acero la variable que guarda lo escrito en pantalla
        numero1 = [], operacion = []
    }
}