// ==UserScript==
// @name         bili_no_login_interface
// @namespace    http://tampermonkey.net/
// @version      2025-08-10
// @description  try to take over the world!
// @author       ReducedRadius
// @match        https://www.bilibili.com/video/*
// @icon          none
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var a = document.createElement('style');
    a.innerText = `body > div.bili-mini-mask{display:none !important;opacity:0;}\n *{font-family:initial;}`
    document.head.appendChild(a)
})();
