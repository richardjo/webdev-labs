const dyslexiaMode = () => {
  if (document.querySelector(".content")) {
    document.querySelector(".content").className = "dyslexia-mode";
  } else {
    document.querySelector(".dyslexia-mode").className = "content";
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaMode);