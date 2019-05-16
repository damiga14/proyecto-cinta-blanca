function FN_boton()
{
    let nombre = document.getElementById("nombre").value + " " + document.getElementById("apellido").value

    document.getElementById("mensaje").innerHTML = nombre

    var aber = document.getElementById("este")
    aber.classList.remove("invisible")
}

var boton = document.getElementById("boton")

boton.addEventListener("click", FN_boton)





//Calculadora


var inputs = []
var qHAce = ""
var resultado = 0

function FN_cero()
{
    document.getElementById("pantalla").value += 0
}

function FN_uno()
{
    document.getElementById("pantalla").value += 1
}

function FN_dos()
{
    document.getElementById("pantalla").value += 2
}

function FN_tres()
{
    document.getElementById("pantalla").value += 3
}

function FN_cuatro()
{
    document.getElementById("pantalla").value += 4
}

function FN_cinco()
{
    document.getElementById("pantalla").value += 5
}

function FN_seis()
{
    document.getElementById("pantalla").value += 6
}

function FN_siete()
{
    document.getElementById("pantalla").value += 7
}

function FN_ocho()
{
    document.getElementById("pantalla").value += 8
}

function FN_nueve()
{
    document.getElementById("pantalla").value += 9
}

function FN_suma()
{
    if(qHAce != "suma")
    {
        FN_igual("si")
    }

    if(document.getElementById("pantalla").value != 0)
    {
        inputs.push(document.getElementById("pantalla").value)
    }

    document.getElementById("pantalla").value = ""

    qHAce = "suma"
}

function FN_resta()
{
    if(qHAce != "resta")
    {
        FN_igual("si")
    }

    if(document.getElementById("pantalla").value != 0)
    {
        inputs.push(document.getElementById("pantalla").value)
    }

    document.getElementById("pantalla").value = ""
    
    qHAce = "resta"
}

function FN_multiplica()
{
    if(qHAce != "multiplica")
    {
        FN_igual("si")
    }

    if(document.getElementById("pantalla").value != 0)
    {
        inputs.push(document.getElementById("pantalla").value)
    }

    document.getElementById("pantalla").value = ""
    
    qHAce = "multiplica"
}

function FN_divide()
{
    if(qHAce != "divide")
    {
        FN_igual("si")
    }

    if(document.getElementById("pantalla").value != 0)
    {
        inputs.push(document.getElementById("pantalla").value)
    }

    document.getElementById("pantalla").value = ""
    
    qHAce = "divide"
}

function FN_reset(borra)
{
    inputs = []
    qHAce = ""
    resultado = 0

    if(borra != "no")
    {
        document.getElementById("pantalla").value = ""
    }
}

function FN_igual(viene)
{
    inputs.push(document.getElementById("pantalla").value)

    if(qHAce == "suma")
    {
        for(i in inputs)
        {
            resultado += Number(inputs[i])
        }
    }
    else if(qHAce == "resta")
    {
        for(i in inputs)
        {
            if(resultado == 0)
            {
                resultado = Number(inputs[i]) - resultado
            }
            else
            {
                resultado -= Number(inputs[i])
            }
        }
    }
    else if(qHAce == "multiplica")
    {
        for(i in inputs)
        {
            if(resultado == 0)
            {
                resultado = inputs[i]
            }
            else
            {
                resultado *= Number(inputs[i])
            }
        }
    }
    else if(qHAce == "divide")
    {
        for(i in inputs)
        {
            if(resultado == 0)
            {
                resultado = inputs[i]
            }
            else
            {
                resultado /= Number(inputs[i])
            }
        }
    }

    document.getElementById("pantalla").value = resultado

    if(viene != "si")
    {
        FN_reset("no")
    }
}

var botones = []

botones[0] = document.getElementById("cero")
botones[0].addEventListener("click", FN_cero)
botones[1] = document.getElementById("uno")
botones[1].addEventListener("click", FN_uno)
botones[2] = document.getElementById("dos")
botones[2].addEventListener("click", FN_dos)
botones[3] = document.getElementById("tres")
botones[3].addEventListener("click", FN_tres)
botones[4] = document.getElementById("cuatro")
botones[4].addEventListener("click", FN_cuatro)
botones[5] = document.getElementById("cinco")
botones[5].addEventListener("click", FN_cinco)
botones[6] = document.getElementById("seis")
botones[6].addEventListener("click", FN_seis)
botones[7] = document.getElementById("siete")
botones[7].addEventListener("click", FN_siete)
botones[8] = document.getElementById("ocho")
botones[8].addEventListener("click", FN_ocho)
botones[9] = document.getElementById("nueve")
botones[9].addEventListener("click", FN_nueve)

botones["suma"] = document.getElementById("suma")
botones["suma"].addEventListener("click", FN_suma)

botones["resta"] = document.getElementById("resta")
botones["resta"].addEventListener("click", FN_resta)

botones["multiplica"] = document.getElementById("multiplica")
botones["multiplica"].addEventListener("click", FN_multiplica)

botones["divide"] = document.getElementById("divide")
botones["divide"].addEventListener("click", FN_divide)

botones["igual"] = document.getElementById("igual")
botones["igual"].addEventListener("click", FN_igual)

botones["reset"] = document.getElementById("reset")
botones["reset"].addEventListener("click", FN_reset)