let currentQuestion = 1;

function nextQuestion() {
  const currentSection = document.getElementById(`question${currentQuestion}`);
  const form = document.getElementById('politicalTestForm');

  const selectedOption = form.querySelector(`input[name="q${currentQuestion}"]:checked`);
  if (!selectedOption) {
    alert('Please select an option before proceeding.');
    return;
  }

  currentSection.style.display = 'none';
  currentQuestion++;

  if (currentQuestion <= 4) {
    const nextSection = document.getElementById(`question${currentQuestion}`);
    nextSection.style.display = 'block';
  } else {
    calculateResult();
  }
}

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
    } else if (totalScore >= 20) {
      result = 'Je bent sterk geassocieerd met de PvdA.';
    } else if (totalScore >= 10) {
      result = 'Je bent sterk geassocieerd met de PVV.';
    } else {
      result = 'Je bent sterk geassocieerd met GroenLinks.';
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