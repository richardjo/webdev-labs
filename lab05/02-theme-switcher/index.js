const makeDefault = () => {
   document.querySelector("section").className = "default"
};

const makeOcean = () => {
   document.querySelector("section").className = "ocean"
};

const makeDesert = () => {
   document.querySelector("section").className = "desert"
};

const makeHighConstrast = () => {
   document.querySelector("section").className = "high-contrast"
};

document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeHighConstrast);