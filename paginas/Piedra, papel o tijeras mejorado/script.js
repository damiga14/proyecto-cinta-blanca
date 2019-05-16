var jugador1 = "";
var jugador2 = "";
var ganador = "";

function FN_fight() {
ganador = "El ganador es ";

jugador1 = document.getElementById("jugador1").value;
jugador2 = document.getElementById("jugador2").value;
  
jugador1 = jugador1.toLowerCase();
jugador2 = jugador2.toLowerCase();
  
if (jugador1 == "nada")
  {document.getElementById("ganador").innerHTML = ""; alert("Jugador 1 no ha seleccionado!")}
else if (jugador2 == "nada")
  {document.getElementById("ganador").innerHTML = ""; alert("Jugador 2 no ha seleccionado!")}
else
      switch(jugador1)
      {
        case "piedra":
          if(jugador2 == "piedra")
            {console.log("empate"); ganador = "Empate!"}
          else if (jugador2 == "papel") 
            {console.log("gana 2"); ganador += "Jugador 2!"}
          else if (jugador2 == "tijeras")
            {console.log("gana 1"); ganador += "Jugador 1!"}
        break;

        case "papel":
          if(jugador2 == "piedra")
            {console.log("gana 1"); ganador += "Jugador 1!"}
          else if (jugador2 == "papel") 
            {console.log("empate"); ganador = "Empate!"}
          else if (jugador2 == "tijeras")
            {console.log("gana 2"); ganador += "Jugador 2!"}
        break;

        case "tijeras":
          if(jugador2 == "piedra")
            {console.log("gana 2"); ganador += "Jugador 2!"}
          else if (jugador2 == "papel") 
            {console.log("gana 1"); ganador += "Jugador 1!"}
          else if (jugador2 == "tijeras")
            {console.log("empate"); ganador = "Empate!"}
        break;
      }

      if (ganador != "El ganador es ") {document.getElementById("ganador").innerHTML = ganador;}
    }