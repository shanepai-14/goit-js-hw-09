!function(){var t,e=document.getElementById("start"),n=document.getElementById("stop");function a(n){n.target.hasAttribute("data-start")?(t=setInterval(o,1e3),e.disabled=!0,e.style.opacity="0.5",e.style.pointerEvents="none"):(clearInterval(t),e.disabled=!1,e.style.opacity="1",e.style.pointerEvents="auto")}function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.addEventListener("click",a),n.addEventListener("click",a)}();
//# sourceMappingURL=01-color-switcher.134701c3.js.map