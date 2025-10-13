function calcul_moyenne() {
    var n1 = prompt("Donner la première note :") ;
    var n2 = prompt("Donner la deuxième note :") ; 
    var n3 = prompt ("Donner la troisème note:") ; 

    var somme = Number (n1) + Number (n2) + Number (n3) ; 
     document.write("Voici la somme : " + somme + "<br>") ; 
    
     var moyenne = somme/3 ;
    document.write("Voici la moyenne: " + moyenne +"<br>" ) ; 
    
    if (moyenne < 10) {
        document.write(
            '<div style="font-size: 25px; text-align: center ; color: white">'
        )
        document.write (" Redoublant.") ;
        document.write ("</div>") ;
        document.write('<a href="index.html">Retour</a>') ;
}
 else if (moyenne < 12 ) {
    document.write(
        '<div style="font-size: 25px; text-align: center ; color: white">'
    )
     document.write ("Admis-Passable")
     document.write ("</div>") ;
     document.write('<a href="index.html">Retour</a>') ;
 }
 else if (moyenne < 14) {
    document.write(
        '<div style="font-size: 25px; text-align: center ; color: white">'
    )
     document.write ("Admis-Bien")
     document.write ("</div>") ;
     document.write('<a href="index.html">Retour</a>') ;
 }
else if (moyenne >= 14) {
    document.write(
        '<div style="font-size: 25px; text-align: center ; color: white">'
    )
    document.write ("Admis-Très Bien ")
    document.write ("</div>") ;
    document.write('<a href="index.html">Retour</a>') ;
}

}
function test_temperature() {
    let temperature= prompt ("Saisir une température en °C  ") ;
    
    if(temperature < 10) {
        document.write(
            '<div style="font-size: 25px; text-align: center ; color: white">'
        )
        document.write ("Froide") ;
        document.bgColor="blue"
        document.write ("</div>") ;
        document.write('<a href="index.html">Retour</a>') ;

    }
    else if (temperature >= 10 && temperature <= 25) {
        document.write(
            '<div style="font-size: 25px; text-align: center ; color: white">'
        )
        document.write ("Normal") ; 
        document.bgColor="green"
        document.write ("</div>") ;
        document.write('<a href="index.html">Retour</a>') ;


    }
    else if (temperature > 25) {
        document.write(
            '<div style="font-size: 25px; text-align: center ; color: white">'
        )
        document.write ("Chaud")
        document.bgColor="red"
        document.write ("</div>") ;
        document.write('<a href="index.html">Retour</a>') ;
    }



}

function comparaison_nombre() {
    var n1 = prompt("Saisissez votre premier nombre ")  ;
    var n2 = prompt("Saisissez votre deuxième nombre ")  ;

    var num1 = Number(n1) ;
    var num2 = Number(n2) ;

    if (num1>num2) {
        
        document.write( '<div>') ;
        document.write (num1 + " est le plus grand nombre") ;
        document.write ("</div>") ;
        document.write('<a href="index.html">Retour</a>') ;

     document.write( '<div>') ; 
        document.write (num2 + " est le plus petit nombre") ;
        document.write ("</div>") ;
        document.write('<a href="index.html">Retour</a>') ;
    

    }
    else if (num2>num1) {
        document.write( '<div>') ;

        document.write (num2 + " est le plus grand nombre") ; 
        document.write (num1 + " est le plus petit nombre") ;
        document.write ("</div>") ;
        document.write('<a href="index.html">Retour</a>') ;
    }
    else if (num1==num2) {
        
        document.write (" Vos nombres sont égaux") ;  
        document.write('<a href="index.html">Retour</a>') ;
    }


}

