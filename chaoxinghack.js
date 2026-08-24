// ==UserScript==
// @name         chaoxinghack
// @namespace    http://tampermonkey.net/
// @version      2026-07-28
// @description  try to take over the world!
// @author       chaoxinghacker
// @match        https://*.chaoxing.com/*
// @match        https://*.cldisk.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chaoxing.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let ps = HTMLMediaElement.prototype.pause;
  HTMLMediaElement.prototype.pause = function(){};
 setTimeout(e =>{
   if(document.querySelector("video")){
       document.querySelector("video").play()
    document.querySelector("video").onended = function(){
       window.parent.parent.document.getElementById("prevNextFocusNext").click();
        window.top.document.querySelector("#mainid > div.maskDiv.jobFinishTip.maskFadeOut > div > div.popBottom > a.jb_btn.jb_btn_92.fr.fs14.nextChapter").click();
    }
   }
 },900)

    document.body.oncontextmenu = function(){
        //wps
    if(document.querySelector("#uil-content > svg")){
         confirm("请复制PPT课件文本")?prompt("请手动复制",document.querySelector("#uil-content > svg").innerText):0
      }
      if(document.querySelector(".pdf-page-wrapper")){
          var b = prompt('输入打印元素Selector',".pdf-page-wrapper");
          if(!b){return;}
            var win = window.open("about:blank");
          var head = win.document.head;
          var body = win.document.body;
          document.querySelectorAll("style").forEach(e =>{
               head.appendChild(e)
          });
         document.querySelectorAll("link[rel=stylesheet]").forEach(e =>{
             head.appendChild(e)
         })
          document.querySelectorAll("link[as=style]").forEach(e =>{
             head.appendChild(e)
         })
          body.appendChild(document.querySelector(b));
      }
    }

})();
