/*diga si numero es par o inpar*/


function FN_ParImpar()
{
    document.getElementById("mensaje").innerHTML = ""
    var numero = document.getElementById("userInput").value;

    if(numero == 0)
    {
        document.getElementById("mensaje").innerHTML = "No pusiste nada o pusiste un 0"
    }
    else
    {
        if (numero % 2 == 0)
            {document.getElementById("mensaje").innerHTML = "Tu numero es par"} 
        else
            {document.getElementById("mensaje").innerHTML = "Tu numero es impar"}
    }
}



function FN_formulaGeneral()
{
    var a = document.getElementById("valorA").value
    var b = document.getElementById("valorB").value
    var c = document.getElementById("valorC").value
    
    var parte1
    var parte2
    var parte3

    var x1
    var x2

    var tieneDecimal


    parte1 = (-1*b)

    tieneDecimal = Math.sqrt((b**2) - 4*a*c).toFixed(2)

    if (tieneDecimal - Math.floor(tieneDecimal) != 0)
        {parte2= Math.sqrt((b**2) - 4*a*c).toFixed(2)}
    else
        {parte2 = Math.sqrt((b**2) - 4*a*c)}

    parte3 = 2*a


    x1 = ((parte1 + parte2)/parte3).toFixed(2)
    x2 = ((parte1 - parte2)/parte3).toFixed(2)

    if (x1 - Math.floor(x1) == 0)
        {x1 = Math.floor(x1)}

    if (x2 - Math.floor(x2) == 0)
        {x2 = Math.floor(x2)}

    document.getElementById("mensaje2").innerHTML = "x1 = " + x1 + ", x2 = "  + x2
}