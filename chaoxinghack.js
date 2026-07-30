// ==UserScript==
// @name         chaoxinghack
// @namespace    http://tampermonkey.net/
// @version      2026-07-28
// @description  try to take over the world!
// @author       ReducedRadius
// @match        https://*.chaoxing.com/*
// @match        https://*.cldisk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let ps = HTMLMediaElement.prototype.pause;
  HTMLMediaElement.prototype.pause = function(){};
  //  HTMLMediaElement.prototype.paused = false;
    document.body.oncontextmenu = function(){
        //wps
    if(document.querySelector("#uil-content > svg")){
         confirm("是否复制课件文本？")?prompt("请手动复制",document.querySelector("#uil-content > svg").innerText):0
      }
    }

    
})();
