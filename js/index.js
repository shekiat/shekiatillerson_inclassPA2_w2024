window.onload = function () {
  const imagePaths = [
    "assets/images/css-letter-a.png",
    "assets/images/css-letter-b.png",
    "assets/images/css-letter-c.png",
  ];
  const resultHTML = `
        <div class="result" id="resultA" style="display: none;">
            <img src="${imagePaths[0]}">
            <button class="hide">Hide Result</button>
        </div>
        <div class="result" id="resultB" style="display: none;">
            <img src="${imagePaths[1]}">
            <button class="hide">Hide Result</button>
        </div>
        <div class="result"id="resultC" style="display: none;">
            <img src="${imagePaths[2]}">
            <button class="hide">Hide Result</button>
        </div>
    `;

  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = resultHTML;
  document.body.appendChild(resultDiv);

  const buttonA = document.querySelector("#btn-A");
  const buttonB = document.querySelector("#btn-B");
  const buttonC = document.querySelector("#btn-C");
  const resultA = document.getElementById("resultA");
  const resultB = document.getElementById("resultB");
  const resultC = document.getElementById("resultC");

  function showResult(result) {
    result.style.display = "block";
  }

  function hideResult(result) {
    result.style.display = "none";
  }

  buttonA.addEventListener("click", function () {
    showResult(resultA);
  });

  buttonB.addEventListener("click", function () {
    showResult(resultB);
  });

  buttonC.addEventListener("click", function () {
    showResult(resultC);
  });

  const hideButtons = document.querySelectorAll(".hide");
  hideButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const result = this.parentElement;
      hideResult(result);
    });
  });
};
