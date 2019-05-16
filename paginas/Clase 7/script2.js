//version yo

function FN_cambiaMayuscula()
{
    document.getElementById("mensaje").innerHTML = "";

    var primeraLetra = "";
    var fraseFinal = "";
    var cuantoMide = 0;

    fraseFinal = document.getElementById("texto").value;

    var tieneEspacio = fraseFinal.indexOf(" ")

    if(tieneEspacio != -1)
    {
        var i = fraseFinal.length;

        var cuantosEspacios = 0

        var enDonde

        for(i; i>0; i--)
        {
            if(fraseFinal[i] == " ")
            {cuantosEspacios++;}
        }

        var letraAreemplazar = ""
        var ultima = 0
         
        for (cuantosEspacios; cuantosEspacios>=0; cuantosEspacios--)
        {
            enDonde = fraseFinal.indexOf(" ", ultima) + 1

            console.log(enDonde, cuantosEspacios)

            letraAreemplazar = fraseFinal.charAt(enDonde)

            console.log(letraAreemplazar, cuantosEspacios)
            
            fraseFinal = fraseFinal.replace(letraAreemplazar, letraAreemplazar.toUpperCase())
            
            document.getElementById("mensaje").innerHTML = fraseFinal

            letraAreemplazar = ""

            ultima = enDonde

            if (cuantosEspacios == 0)
            {
                letraAreemplazar = fraseFinal.charAt(0)

                fraseFinal = fraseFinal.replace(letraAreemplazar, letraAreemplazar.toUpperCase())
                
                document.getElementById("mensaje").innerHTML = fraseFinal

                letraAreemplazar = ""
            }
        }

    }
    else
    {
        cuantoMide = fraseFinal.length;
        
        primeraLetra = fraseFinal.charAt(0).toUpperCase();

        fraseFinal = fraseFinal.slice(1, cuantoMide).toLocaleLowerCase();

        document.getElementById("mensaje").innerHTML = primeraLetra + fraseFinal;
    }
}




/*

//version moy

var texto = "hola como estas"
var mayuscula = ""

texto = texto.toLowerCase()

for (var i = 0; i<texto.length; i++)
{
    if (i == 0 || texto.charAt(i-1)== " ")
        {mayuscula = mayuscula + texto.charAt(i).toUpperCase()}
    else 
        {mayuscula = mayuscula + texto.charAt(i)}
}
   
console.log(mayuscula)
*/