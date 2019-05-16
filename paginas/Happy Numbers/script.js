function digits_count(n) {
    var count = 0;
    if (n >= 1) ++count;
  
    while (n / 10 >= 1) {
      n = n/10;
      ++count;
    }
  
    return count;
  }
  

function FN_HappyoSad()
{
    document.getElementById("mensaje").value = "loading..."

    var numeroOriginal = document.getElementById("numero").value
    var numero = numeroOriginal.toString();
    var numeroAmeter
    var i
    var arregloDigitos = []
    var suma = 0
    var sigue = "si"
    var cuantasVan = 0

    // array de numeros de numero original
    for (i = 0; i<digits_count(numeroOriginal); i++)
    {
        numeroAmeter = numero.charAt(i);
        arregloDigitos.push(numeroAmeter);
    }

    do
    {
        suma = 0

        for(i = 0; i < arregloDigitos.length; i++)
        {
            arregloDigitos[i] = Number(arregloDigitos[i]**2)   
            suma += arregloDigitos[i]
        }

        // array de numeros de numero original actualizado
        arregloDigitos = []
        for (i = 0; i<digits_count(suma); i++)
        {
            numeroAmeter = suma.toString().charAt(i);
            arregloDigitos.push(numeroAmeter);
        }

        //checa si hay mas de 1, si no checa si es 1 u original, si no entonces multiplica

        if(arregloDigitos.length > 1)
        {
            console.log("hay mas de 1")
        }
        else
        {
            console.log("hay solo 1")

            if(arregloDigitos[0] == 1)
            {
                //es happy :)
                document.getElementById("mensaje").innerHTML = "Tu numero " + numero + " es happy :)"
                sigue = "no"
            }
            
            else if (arregloDigitos[0] == Number(numeroOriginal))
            {
                //es sad :(
                document.getElementById("mensaje").innerHTML = "Tu numero " + numero + " es sad :("
                sigue = "no"
            }

            else if (cuantasVan >= 10000)
            {
                //es sad :(
                document.getElementById("mensaje").innerHTML = "Tu numero " + numero + " es sad :( <br>endless loop"
                sigue = "no"
            }            

            else
            {
                console.log("hay uno pero no es 1 ni el original")
            }
            
        }
        console.log("sigue? "+sigue)
        console.log(Number(arregloDigitos[0]) , numeroOriginal, arregloDigitos)
        cuantasVan++
        console.log("cuantas van ", cuantasVan)
    }   

    while (sigue == "si")
}