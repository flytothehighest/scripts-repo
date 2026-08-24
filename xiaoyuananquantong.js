// ==UserScript==
// @name         xiaoyuananquantong_quick
// @namespace    http://tampermonkey.net/
// @version      2026-08-24
// @description  try to take over the world!
// @author       ReducedRadius
// @match        http://wap.xiaoyuananquantong.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=xiaoyuananquantong.com
// @grant        none
// ==/UserScript==
//本页面是对某省学习内容进行快速通过，不必每次等待20s。
(function() {
    'use strict';
    var i = 0;
    setInterval(e =>{i += 88888},90)
globalThis.Date = class{
     constructor(){}
    getTime(){return i;}
}
})();
