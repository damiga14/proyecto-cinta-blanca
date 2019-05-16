
//si es multiplo de 3 imprime fiss, multiplo de 5 imprime buzz, si es de los 2 fissbuzz

function fissbuzz()
{
    var i
    var text = ""

    for(i = 0; i<=100; i++)
    {
        if(i%3 == 0 && i%5 == 0)
            {   
                text += "<br>"
                document.getElementById("mensaje").innerHTML = text += i + " fissbuzz"
            }
        else if (i%5 == 0)
            {
                text += "<br>"
                document.getElementById("mensaje").innerHTML = text += i +  " buzz"
            }
        else if (i%3 == 0)
            {
                text += "<br>"
                document.getElementById("mensaje").innerHTML = text += i + " fiss"
            }
    }
}