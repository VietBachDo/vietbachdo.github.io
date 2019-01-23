setTimeout(function() {
      $('.animation-welcome').removeClass('hidden')
  }, 500);

function franceAns() {
  franceX.style.display = "inline-block";
  polandCheck.style.display = "none";
  vietnamX.style.display = "none";
  usaX.style.display = "none";
}

function polandAns() {
  franceX.style.display = "none";
  polandCheck.style.display = "inline-block";
  vietnamX.style.display = "none";
  usaX.style.display = "none";
}

function vietnamAns() {
  franceX.style.display = "none";
  polandCheck.style.display = "none";
  vietnamX.style.display = "inline-block";
  usaX.style.display = "none";
}

function usaAns() {
  franceX.style.display = "none";
  polandCheck.style.display = "none";
  vietnamX.style.display = "none";
  usaX.style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("franceBox").addEventListener("click", franceAns)
  document.getElementById("polandBox").addEventListener("click", polandAns)
  document.getElementById("vietnamBox").addEventListener("click", vietnamAns)
  document.getElementById("usaBox").addEventListener("click", usaAns)

  franceX = document.getElementById("franceWrong")
  polandCheck = document.getElementById("polandRight")
  vietnamX = document.getElementById("vietnamWrong")
  usaX = document.getElementById("usaWrong")
})
