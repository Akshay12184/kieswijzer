function calculateResult() {
    const q1 = parseInt(document.querySelector('input[name="q1"]:checked').value);
    const q2 = parseInt(document.querySelector('input[name="q2"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="q3"]:checked').value);
    const q4 = parseInt(document.querySelector('input[name="q4"]:checked').value);

    if (q1 && q2 && q3 && q4) {
        const totalScore = q1 + q2 + q3 + q4;

        let result;
        if (totalScore >= 30) {
            result = 'Je bent sterk geassocieerd met de VVD.';
            showPartyImage('vvdImage');
        } else if (totalScore >= 20) {
            result = 'Je bent sterk geassocieerd met de PvdA.';
            showPartyImage('pvdaImage');
        } else if (totalScore >= 10) {
            result = 'Je bent sterk geassocieerd met de PVV.';
            showPartyImage('pvvImage');
        } else {
            result = 'Je bent sterk geassocieerd met GroenLinks.';
            showPartyImage('groenlinksImage');
        }

        console.log(`Total Score: ${totalScore}`);
        showResult(result);
    } else {
        showResult('Selecteer a.u.b. een antwoord voor elke vraag.');
    }
}

function showResult(result) {
    document.getElementById('result').innerHTML = result;
}

function showPartyImage(imageId) {
    // Hide all party images
    const partyImages = document.querySelectorAll('.partyImage');
    partyImages.forEach(image => {
        image.style.display = 'none';
    });

    // Display the selected party image
    document.getElementById(imageId).style.display = 'block';
}
