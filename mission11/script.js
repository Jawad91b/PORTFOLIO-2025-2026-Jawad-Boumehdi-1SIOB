
function ajouterLigne() {
    var modele = document.getElementById("modeleLigne");
    
    var nouveau = modele.cloneNode(true);
    
    nouveau.removeAttribute("id");
    
    var lesInputs = nouveau.getElementsByTagName("input");
    lesInputs[0].value = "Nouvel article"; // Description
    lesInputs[1].value = 0; // Quantité
    lesInputs[2].value = 0; // Prix
    lesInputs[3].value = 0; // Total
    
    var tbody = document.getElementById("table_inv").getElementsByTagName("tbody")[0];
    
    var derniereLigne = document.getElementById("lastLigne");
    
    tbody.insertBefore(nouveau, derniereLigne);
}

function remplir() {
    var tabDesc = new Array("portable", "bureau", "ram 8go", "clef usb 16go", "souris", "ecran 17 pouces");
    
    var listeDesc = document.getElementsByClassName("desc");
    var listeQte = document.getElementsByClassName("qte");
    var listePrix = document.getElementsByClassName("prix");
    
    for (var i = 0; i < listeDesc.length; i++) {
        
       
        var indexHasard = Math.floor(Math.random() * tabDesc.length);
        listeDesc[i].value = tabDesc[indexHasard];
        
        var qteHasard = Math.floor(10 * Math.random() + 1);
        listeQte[i].value = qteHasard;
        
        var prixHasard = Math.floor(100 * Math.random() + 1);
        listePrix[i].value = prixHasard;
    }
    
    calculate();
}

function calculate() {
    var totalGeneral = 0;
    
    var listeQte = document.getElementsByClassName("qte");
    var listePrix = document.getElementsByClassName("prix");
    var listeTotal = document.getElementsByClassName("totalLigne");
    
    for (var i = 0; i < listeQte.length; i++) {
        var q = parseFloat(listeQte[i].value);
        var p = parseFloat(listePrix[i].value);
        
        var resultatLigne = q * p;
        
        listeTotal[i].value = resultatLigne.toFixed(2);
        
        totalGeneral = totalGeneral + resultatLigne;
    }
    
    document.getElementById("sousTotal").value = totalGeneral.toFixed(2);
    
    var pourcentageRemise = parseFloat(document.getElementById("tauxRemise").value);
    var montantRemise = totalGeneral * (pourcentageRemise / 100);
    
    var sousTotalReduit = totalGeneral - montantRemise;
    document.getElementById("sousTotalRemise").value = sousTotalReduit.toFixed(2);
    
    var pourcentageImpot = parseFloat(document.getElementById("tauxImpot").value);
    var montantTaxe = sousTotalReduit * (pourcentageImpot / 100);
    document.getElementById("taxeTotale").value = montantTaxe.toFixed(2);
    
    var frais = parseFloat(document.getElementById("fraisExp").value);
    var soldeFinal = sousTotalReduit + montantTaxe + frais;
    
    document.getElementById("soldeDu").value = soldeFinal.toFixed(2) + " €";
}