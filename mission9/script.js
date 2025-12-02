
function calculerScore() {
    let score = 0;
    const totalQuestions = 10;
    const form = document.forms['qcmForm'];

   
    if (form['q1'].value === 'B') {
        score++;
    }

    
    if (form['q2'].value === 'B') {
        score++;
    }

    
    if (form['q4'].value === 'A') {
        score++;
    }

   
    if (form['q5'].value === 'C') {
        score++;
    }
    
    
    if (form['q7'].value === 'C') {
        score++;
    }

    
    if (form['q8'].value === 'B') {
        score++;
    }
    
    
    if (form['q9'].value === 'B') {
        score++;
    }

   
    const q3_A_ok = document.getElementById('q3a').checked;
    const q3_B_non = !document.getElementById('q3b').checked; 
    const q3_C_ok = document.getElementById('q3c').checked;
    
    if (q3_A_ok && q3_B_non && q3_C_ok) {
        score++;
    }

    
    const q6_A_ok = document.getElementById('q6a').checked;
    const q6_B_non = !document.getElementById('q6b').checked; 
    const q6_C_ok = document.getElementById('q6c').checked;
    
    if (q6_A_ok && q6_B_non && q6_C_ok) {
        score++;
    }

   
    const q10_A_ok = document.getElementById('q10a').checked;
    const q10_B_non = !document.getElementById('q10b').checked; 
    const q10_C_ok = document.getElementById('q10c').checked;

    if (q10_A_ok && q10_B_non && q10_C_ok) {
        score++;
    }
    
    
    const resultatElement = document.getElementById('resultat');
    resultatElement.innerHTML = `Votre score : ${score}/${totalQuestions} !`;
    
    
    alert(`Vous avez terminé le QCM ! Votre score est de ${score}/${totalQuestions}.`);
}


function afficherCorrigé() {
    
    window.open('corrige.html', '_blank', 'width=700,height=600'); 
}


function effacerSelections() {
    const form = document.forms['qcmForm'];
    
   
    const elements = form.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    
    elements.forEach(element => {
        element.checked = false; 
    });
    
    
    document.getElementById('resultat').innerHTML = 'Votre score : 0/10';
}