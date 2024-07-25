document.addEventListener("DOMContentLoaded", () => {
  // Data set
  const upperletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerletter = "abcdefghijklmnopqrstuvwxyz";
  const numberset = "0123456789";
  const symbols = "~!@#$%^&*";

  // Selectors
  const passbox = document.getElementById("passwordbox");
  const upperInput = document.getElementById("uppercase");
  const lowerInput = document.getElementById("lowercase");
  const numberInput = document.getElementById("number");
  const symbolInput = document.getElementById("symbols");
  const passlength = document.getElementById("pass-max");
  const passlengthDisplay = document.getElementById("pass-length");

  // logic

  const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
  };

  passlength.addEventListener("input", () => {
    passlengthDisplay.textContent = passlength.value;
  });

  const generatePassword = (password = "") => {
    if (
      !upperInput.checked &&
      !lowerInput.checked &&
      !numberInput.checked &&
      !symbolInput.checked
    ) {
      alert("Please select atleast one setting!");
      return;
    }
    if (upperInput.checked) {
      password += getRandomData(upperletter);
    }
    if (lowerInput.checked) {
      password += getRandomData(lowerletter);
    }
    if (numberInput.checked) {
      password += getRandomData(numberset);
    }
    if (symbolInput.checked) {
      password += getRandomData(symbols);
    }
    if (password.length < passlength.value) {
      return generatePassword(password);
    }

    passbox.value = truncateString(password, passlength.value);
  };

  document.querySelector("#passwordbtn").addEventListener("click", () => {
    generatePassword();
  });
});

// Trim password length

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
