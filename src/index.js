// https://github.com/PierfrancescoSoffritti/doodles/blob/master/14_ThreejsTemplate

import SceneManager from "./SceneManager";

const canvas = document.getElementById("canvas");

const sceneManager = new SceneManager(canvas);
let requestId;


init();
render();

function init() {
  resizeCanvas();
  bindEventListeners();
}

function bindEventListeners() {
  window.onresize = resizeCanvas;
  
  window.addEventListener("same-color-collision", () => {
    cancelAnimationFrame(requestId);
  })
}

function resizeCanvas() {
	canvas.style.width = '100%';
	canvas.style.height= '100%';

	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
  
  sceneManager.onWindowResize();
}

function render() {
  requestId = requestAnimationFrame(render);
  sceneManager.update();
}