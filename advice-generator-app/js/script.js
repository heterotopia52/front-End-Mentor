const adviceId = document.querySelector("#advice-id");
const adviceText = document.querySelector(".advice-text")
const button = document.querySelector(".dice-button");
const adviceApi = fetch('https://api.adviceslip.com/advice');

button.addEventListener('click', function(event) {
    adviceApi
  .then((response) => response.json())
  .then((json) => {
      adviceText.innerText = json.slip.advice;
      adviceId.innerText = json.slip.id;
    })
    .catch(() => alert("We are busy right now, try in a few seconds"));
  })