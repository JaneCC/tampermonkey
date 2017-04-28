// ==UserScript==
// @name         【购物必备】自动勾选京东配送/仅显示有货/货到付款
// @description  方便在京东购物,免去点击的麻烦!
// @version      0.40
// @author       JaneCC
// @license      MIT
// @match        https://search.jd.com/*
// @match        https://list.jd.com/*
// @grant        none
// @run-at       document-body
// @namespace 	 https://JaneCC.com
// ==/UserScript==

if(!/wtype=1/.test(window.location.href)) window.location.href = window.location.href + '&wtype=1';
if(!/cod=1/.test(window.location.href)) window.location.href = window.location.href + '&cod=1';
if(!/stock=1/.test(window.location.href)) window.location.href = window.location.href + '&stock=1';

