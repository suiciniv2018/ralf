"use strict";

importScripts("js/libs/sw-toolbox/sw-toolbox.js");

toolbox.option.debug=true;
toolbox.precache([
    "index.html",
    "js/loja.js",
    "produtos.json",
    "view/principal.html",
    "view/produtos.html"    
    
]);
toolbox.router.get("index.html",toolbox.cacheFirst);
toolbox.router.get("js/libs/*",toolbox.cacheFirst);
toolbox.router.get("jd/loja.js",toolbox.cacheFirst);
toolbox.router.get("produtos.json",toolbox.cacheFirst);
toolbox.router.get("views*",toolbox.cacheFirst);
toolbox.router.get("icons/*",toolbox.cacheFirst);


toolbox.router.get("*",toolbox.networkFist);
