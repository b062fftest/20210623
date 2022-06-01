import "./styles.css";

for (var num = 9; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  
  const $ = (el) => document.querySelector(el);
  $(":root").style.setProperty("--rand-color"+RandomNum(), RandomColor());

  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle"+RandomNum());
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;

  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
}
var next = 1;
document.remove = function (id) {
  if (id === next) {
    document.getElementById("main").removeChild(document.getElementById(id));
    next = next + 1;
  }
};

function RandomColor() {
  var randomColor = "#";
  for (var i = 0; i < 6; i++) {
    randomColor += ((16 * Math.random()) | 0).toString(16);
  }
  return randomColor;
}

function RandomNum() {
  var min = 1;
  var max = 5;
  var a = Math.floor(Math.random() * (max + 1 - min)) + min;
  return a;
}
