const gessNumUser = document.querySelector("#guessInput")
const CheckBtn = document.querySelector("#checkBtn")
const outBut = document.querySelector("#message")
const loader = document.querySelector("#loader")

CheckBtn.addEventListener("click", function () {

  const UserValue = Number(gessNumUser.value)

  if (!UserValue || isNaN(UserValue))    {
    outBut.textContent = "Please enter a valid number"
    return;
  }

  const guessNum = Math.trunc(Math.random() * 20) + 1
  gessNumUser.value = ""
  loader.style.display = "block";
  outBut.textContent = ""

  setTimeout(function () {
    loader.style.display = "none"

    if (UserValue === guessNum) {
      outBut.textContent = "Nice!"
    } else {
      outBut.textContent = `You chose ${UserValue}, and the correct number is ${guessNum}.`
    }

  }, 1000)

})