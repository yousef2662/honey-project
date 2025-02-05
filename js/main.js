document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".pro-card").forEach((card, index) => {
    const plusBtn = card.querySelector(".fa-plus");
    const minusBtn = card.querySelector(".fa-minus");
    const amountDiv = card.querySelector(".amount");

    let amount = 0;
    amountDiv.textContent = amount;

    plusBtn.addEventListener("click", function () {
      amount++;
      amountDiv.textContent = amount;
    });

    minusBtn.addEventListener("click", function () {
      if (amount > 0) {
        amount--;
        amountDiv.textContent = amount;
      }
    });
  });
});

