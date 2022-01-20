const keys = {
  Enter: 13,
  Space: 32,
  "!": 33,
  '"': 34,
  "#": 35,
  $: 36,
  "%": 37,
  "&": 38,
  "'": 39,
  "(": 40,
  ")": 41,
  "*": 42,
  ",": 44,
  "-": 45,
  ".": 46,
  "/": 47,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  ":": 58,
  ";": 59,
  "=": 61,
  "<": 60,
  ">": 62,
  "?": 63,
  "@": 64,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  "[": 91,
  "\\": 92,
  "]": 93,
  "^": 94,
  _: 95,
  "`": 96,
  a: 97,
  b: 98,
  c: 99,
  d: 100,
  e: 101,
  f: 102,
  g: 103,
  h: 104,
  i: 105,
  j: 106,
  k: 107,
  l: 108,
  m: 109,
  n: 110,
  o: 111,
  p: 112,
  q: 113,
  r: 114,
  s: 115,
  t: 116,
  u: 117,
  v: 118,
  w: 119,
  x: 120,
  y: 121,
  z: 122,
  "{": 123,
  "|": 124,
  "}": 125,
  "~": 126,
};

// declaring and assigning my variables
let container = document.querySelector("#container");
const firstText = document.getElementsByTagName("p").item(0);
const secondText = document.getElementsByTagName("p").item(1);

// styling my container
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";
container.style.boxSizing = "border-box";

// styling the first p tag
firstText.style.border = "5px solid rgba(128, 128, 128, 0.5)";
firstText.style.fontWeight = "300";
firstText.style.textShadow = "0.02em 0.02em 0.02em rgba(68, 66, 66, 0.76)";
firstText.style.boxShadow = "0 0.5em 0.5em -0.35em rgba(68, 66, 66, 0.76)";
firstText.style.borderRadius = "10px";
firstText.style.width = "30%";
firstText.style.textAlign = "center";
firstText.style.fontSize = "50px";
firstText.style.padding = "20px 28px";
firstText.style.margin = "10px auto";
firstText.style.color = "rgba(0,0,0,0)";

// styling the second p tag
secondText.style.display = "none";
secondText.style.minWidth = "8%";
secondText.style.height = "auto";
secondText.style.fontSize = "7em";
secondText.style.margin = "15px auto";
secondText.style.textAlign = "center";
secondText.style.color = "#21bf73";
secondText.style.textShadow = "0.02em 0.02em 0.02em rgba(68, 66, 66, 0.76)";
secondText.style.border = "3px solid rgba(128, 128, 128, 0.5)";
secondText.style.padding = "30px 15px";
secondText.style.margin = "15px auto";
secondText.style.borderRadius = "10px";

// the function responsible for the page functionality
document.body.addEventListener("keypress", (e) => {
  for (item in keys) {
    if (e.keyCode == keys[item]) {
      let pressedKey = document.createElement("span");
      pressedKey.textContent = item;
      pressedKey.style.color = "#21bf73";
      firstText.textContent = `You Pressed: `;
      firstText.append(pressedKey);
      secondText.style.display = "block";
      secondText.textContent = e.keyCode;
    }
  }
});
