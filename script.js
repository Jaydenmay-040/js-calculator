function dis(value) {
  document.getElementById("screen").value += value;
}

function solve() {
  let x = document.getElementById("screen").value;
  let y = eval(x);
  document.getElementById("screen").value = y;
}

function clr() {
  document.getElementById("screen").value = "";
}
