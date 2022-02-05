const SCALING_FACTOR = 0.2;

function getCurrentFontSize() {
   fontSize = 
      document.querySelector(".content").style.fontSize
   l = fontSize.length
   r = parseFloat(fontSize.slice(0, l-2))
   if (fontSize == "") {
      r = 1.4
   } 
   return r;
}

const makeBigger = () => {
   currFontSize =
      getCurrentFontSize();
   newFontSize = currFontSize + SCALING_FACTOR
   document.querySelector(".content").style.fontSize = newFontSize.toString() + "em";
};

const makeSmaller = () => {
   currFontSize =
      getCurrentFontSize();
   newFontSize = currFontSize - SCALING_FACTOR
   document.querySelector(".content").style.fontSize = newFontSize.toString() + "em";
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
