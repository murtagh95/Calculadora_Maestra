var numeros = ""
var numero1 = [] , operacion = []
var signo = false , resultados = false
var resultado_operaciones = 0
var pantalla = document.getElementById("pantalla")
function escribir_numeros(numero){
    numeros = numeros + numero

    // Verificamos que encuentre el elemento
    if(pantalla) {
        pantalla.value = numeros
    }
    // Se coloca falso ya que el usuario no desea realizar una operación con el resultado anterior
    resultados = false
}

function cambiar_signo() {
    // Se coloca falso ya que el usuario no desea realizar una operación con el resultado anterior
    resultados = false

    // Si el signo ya es negativo...
    if(signo) {
        signo = false
        // Verifico si es el primer número
        if(operacion.length == 0) {
            // Le quito el signo negativo al principio de la variable contenedora de la cadena
            numeros = numeros.substring(1)
            // Visualizo el cambio en la pantalla
            pantalla.value = numeros
            
        }
        else {
            // Creo una variable para contar los números que llevamos ingresados
            let acumuladora = 0
            // Recorremos el array para contar los números ingresados
            for (var i = 0; i < numero1.length; i++) {
                acumuladora += numero1[i].length 
            }
            // Guardamos en el array una parte de la cadena original, que empieza desde el último signo hasta el final  
            numeros = numeros.substring(0, acumuladora + operacion.length) +  numeros.substring(acumuladora + operacion.length + 1)

            // Visualizo el cambio en la pantalla
            pantalla.value = numeros
        }
        
    }
    else {
        signo = true
        // Verifico si es el primer número
        if(operacion.length == 0) {
            // Le agrego el signo negativo al principio de la variable contenedora de la cadena
            numeros = "-" + numeros
            // Visualizo el cambio en la pantalla
            pantalla.value = numeros
        }
        else {
            // Creo una variable para contar los números que llevamos ingresados
            let acumuladora = 0
            // Recorremos el array para contar los números ingresados
            for (var i = 0; i < numero1.length; i++) {
                acumuladora += numero1[i].length 
            }
            // Guardamos en el array una parte de la cadena original, que empieza desde el último signo hasta el final
            numeros = numeros.substring(0, acumuladora + operacion.length ) +  "-" + numeros.substring(acumuladora + operacion.length)

            // Visualizo el cambio en la pantalla
            pantalla.value = numeros
        }
    }
}

function suma() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        // Verificamos si el usuario quiere operar con el resultado de la última operación
        if(resultados) {
            // Volvemos la variable a falso para dejarla lista para la proxima operación
            resultados = false
            // Agrego el número al array contenedor
            numero1.push(resultado_operaciones.toString())
            numeros = "" +  resultado_operaciones.toString()

        }
        else {
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

        }
        

        // Agrego al array una operación
        operacion.push("+")
        // Agrego la operación a la cariable que contiene lo escrito en pantalla
        numeros = numeros + "+"
        //Escribo en pantalla lo agregado
        pantalla.value = numeros
    }
}

function resta() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        // Verificamos si el usuario quiere operar con el resultado de la última operación
        if(resultados) {
            // Volvemos la variable a falso para dejarla lista para la proxima operación
            resultados = false
            // Agrego el número al array contenedor
            numero1.push(resultado_operaciones.toString())
            numeros = "" +  resultado_operaciones.toString()

        }
        else{
            
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
        }

        operacion.push("-")
        numeros = numeros + "-"
        pantalla.value = numeros
    }
}

function divi() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        // Verificamos si el usuario quiere operar con el resultado de la última operación
        if(resultados) {
            // Volvemos la variable a falso para dejarla lista para la proxima operación
            resultados = false
            // Agrego el número al array contenedor
            numero1.push(resultado_operaciones.toString())
            numeros = "" +  resultado_operaciones.toString()

        }
        else{
            
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
        }


        operacion.push("/")
        numeros = numeros + "/"
        pantalla.value = numeros
    }
}

function multi() {
    // Verificamos que encuentre el elemento
    if(pantalla) {
        // Verificamos si el usuario quiere operar con el resultado de la última operación
        if(resultados) {
            // Volvemos la variable a falso para dejarla lista para la proxima operación
            resultados = false
            // Agrego el número al array contenedor
            numero1.push(resultado_operaciones.toString())
            numeros = "" +  resultado_operaciones.toString()

        }
        else {
            
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
        }

        operacion.push("*")
        numeros = numeros + "*"
        pantalla.value = numeros
    }
}

function borrar() {
    // Verificamos si lo borrados es un signo
    if((numeros.substring(numeros.length-1) == "+") || (numeros.substring(numeros.length-1) == "-") ||(numeros.substring(numeros.length-1) == "*") ||(numeros.substring(numeros.length-1) == "/")) {
        // Borramos el último número  y  operación de cada array
        numero1.splice(1, 1)
        operacion.splice(1, 1)

    }
    
    // Creamos un string nuevo borrando el ultimo caracter
    numeros = numeros.substring(0,numeros.length-1)

    if(pantalla) {
        // Visualizamos en la pantalla
        pantalla.value = numeros
    }
}

function borrar_todo() {
    // Borramos todo de las variables que acumuladoras

    numeros = ""

    if(pantalla) {
        pantalla.value = numeros
    }

    // Reseteo todas las variables
    numero1 = []
    operacion = []
    signo = false
    resultados = false
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
        resultado_operaciones = 0

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
                    resultado_operaciones = resultado_operaciones + (numero1[i] + numero1[i + 1])
                }
                else {
                    resultado_operaciones = resultado_operaciones  + numero1[i + 1]
                }

            }
    
            else if(operacion[i] == "-") {

                if(i == 0){
                    // Guardo en la variable acumuladora el resultado de la operacion
                    resultado_operaciones = resultado_operaciones + (numero1[i] - numero1[i + 1])
                }
                else {
                    resultado_operaciones = resultado_operaciones  - numero1[i + 1]
                }

            }
            
            else if(operacion[i] == "*") {

                if(i == 0){
                    // Guardo en la variable resultado_operaciones el resultado de la operacion
                    resultado_operaciones = resultado_operaciones + (numero1[i] * numero1[i + 1])
                }
                else {
                    resultado_operaciones = resultado_operaciones  * numero1[i + 1]
                }
                
            }
            
            else if(operacion[i] == "/") {
                
                if(i == 0){
                    // Guardo en la variable acumuladora el resultado de la operacion
                    resultado_operaciones = resultado_operaciones + (numero1[i] / numero1[i + 1])
                }
                else {
                    resultado_operaciones = resultado_operaciones  / numero1[i + 1]
                }


               
            }
                    

        }

        pantalla.value = numeros + " = " + (resultado_operaciones)

        numeros = ""  // Acero la variable que guarda lo escrito en pantalla
        numero1 = [], operacion = []
        signo = false 
        resultados = true

    }
}