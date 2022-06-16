const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".advise__number");
const btnAdvise = document.querySelector(".images");
//Get Adice
const getAdvice = async function () {
  const apiUrl = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (!data.slip.advice) adviceText.textContent = "oops no advice for today";
    adviceText.textContent = data.slip.advice;
    adviceId.textContent = `Advice #${data.slip.id}`;
    throw new Error("oops");
  } catch (error) {
    console.log(error);
  }
};
btnAdvise.closest(".image__divider").addEventListener("click", getAdvice);

