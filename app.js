function grade() {
    var result = document.getElementById("percent").value;
    var answer = document.getElementById("answer");
    if (result >= 100) {
      answer.innerText = "Please enter a correct percentage";
    } else if (result >= 90) {
      answer.innerText = "Congratulations! You have got A+ Grade";
    } else if (result >= 87) {
      answer.innerText = "Congratulations! You have got A Grade";
    } else if (result >= 82) {
      answer.innerText = "You have got B+ Grade";
    } else if (result >= 77) {
      answer.innerText = "You have got B Grade";
    } else if (result >= 70) {
      answer.innerText = "You have got C+ Grade";
    } else if (result >= 60) {
      answer.innerText = "You have got C Grade";
    }
    else if (result >= 50) {
      answer.innerText = "You have got D+ Grade";
    }
    else if (result >= 40) {
      answer.innerText = "You have got D Grade";
    }
    else if (result >= 33) {
      answer.innerText = "You have got E Grade";
    }
    else {
      answer.innerText = "Sorry You have failed";
    }
  }