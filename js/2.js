
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
      window.open(`factorial.html?number=${number}&factorial=${factorial}`);
    } else {
      const resultElement = document.createElement("p");
      resultElement.textContent = `Факторіал ${number} дорівнює ${factorial}.`;
      document.getElementById("answer").innerHTML = resultElement.textContent  ;
    }
  }

