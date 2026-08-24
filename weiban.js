// ==UserScript==
// @name         微伴刷课
// @namespace    http://tampermonkey.net/
// @version      2026-08-15
// @description  bypass a lengthy course!
// @author       reducedradius
// @match        https://*.mycourse.cn/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mycourse.cn
// @grant        none
// ==/UserScript==

(function() {
  //经实验，该方法会导致作弊！请谨慎使用！！！题目需自行做，或使用https://github.com/hangone/WeBan/中的题库。
    'use strict';
  var d = setInterval(e =>{
        if(document.querySelector(".btn-next")){
            document.querySelectorAll(".btn-next").forEach(e =>{e.click()});//反复点击下一个按钮，瞬间结束
            clearInterval(d);
        }
   },5000);
  setInterval(b =>{
       if(document.querySelector(".ai-assistant"))document.querySelector(".ai-assistant").remove()&&document.querySelector(".ai-assistant-overlay").remove();
  },200)
  
})();
