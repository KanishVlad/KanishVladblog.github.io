
var visitorName = localStorage.getItem("visitorName") || "Гість";
document.getElementById("name-visitor").innerHTML = "Привіт, " + visitorName + "!";


function calculateFactorial() {
    const numberInput = document.getElementById("number");
    const outputType = document.querySelector('input[name="output"]:checked').value;
    const number = parseInt(numberInput.value);

    if (isNaN(number) || number < 0) {
      alert("Будь ласка, введіть додатнє число.");
      return;
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }

    if (outputType === "alert") {
      alert(`Факторіал ${number} дорівнює ${factorial}.`);
    } else if (outputType === "new-window") {
      const newWindow = window.open( 'factorial.html', 'resizable,height=500,width=600');
         newWindow.document.write(`<p>Факторіал ${number} = ${factorial}</p>`);
    } else {
      const resultElement = document.createElement("p");
      resultElement.textContent = `Факторіал ${number} дорівнює ${factorial}.`;
      document.getElementById("answer").innerHTML = resultElement.textContent  ;
    }
  }

