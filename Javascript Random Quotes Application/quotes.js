const prevQuotes = document.querySelector(".previous-btn");
const nextQuotes = document.querySelector(".next-btn");
const showQuotes = document.querySelector("#showQuotes");
const quotes = document.querySelector("#quotes");
const quotesText = document.querySelector(".quotes-text");

let currentIndex = 0;

showQuotes.addEventListener("click", async () => {
  try {
    quotesText.innerHTML = `<h2>Loading...</h2>`;
    const response = await fetch(
      `https://api.breakingbadquotes.xyz/v1/quotes/5`
    );
    const quotesData = await response.json();
    console.log(quotesData);

    if (quotesData) {
    }

    quotesText.innerHTML = `
  <h1 id="quotes">${quotesData[currentIndex].quote}</h1>
  <h2 id="quotes" style="color:black">Author : ${quotesData[currentIndex].author}</h2>
  `;

    prevQuotes.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        showPrevQuotes(quotesData);
      } else {
        alert("Click next Quotes button for more new Quotes.");
      }
    });

    nextQuotes.addEventListener("click", () => {
      if (currentIndex < quotesData.length - 1) {
        currentIndex++;
        showNextQuotes(quotesData);
      } else {
        alert("Click previous Quotes button for new Quotes");
      }
    });
  } catch (err) {
    alert("Error fetching data..");
  }
});

function showPrevQuotes(quotesData) {
  quotesText.innerHTML = `
  <h1 id="quotes">${quotesData[currentIndex].quote}</h1>
  <h2 id="quotes" style="color:black">Author : ${quotesData[currentIndex].author}</h2>
  `;
}
function showNextQuotes(quotesData) {
  quotesText.innerHTML = `
  <h1 id="quotes">${quotesData[currentIndex].quote}</h1>
  <h2 id="quotes" style="color:black">Author : ${quotesData[currentIndex].author}</h2>
  `;
}
