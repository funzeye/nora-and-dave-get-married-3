(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1533"],{"9fc3":function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n("3d66"),o=function(t){var e,n,o,l,v=10*-f,p=0,m=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,w=function(){return void 0!==e&&null!==e.parentElement},h=function(t){v=Object(i["l"])(t),j(t)},E=function(t){v=Object(i["l"])(t),k(t)},b=function(t){var e=Object(i["l"])(t)-f;v<e&&j(t)},g=function(t){var e=Object(i["l"])(t)-f;v<e&&k(t)},T=function(){clearTimeout(l),l=void 0,n&&(y(!1),n=void 0)},j=function(t){n||w()||(e=void 0,O(a(t),t))},k=function(t){O(void 0,t)},O=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var o=Object(i["m"])(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||S(n,a,c),y(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var f=r(t)?0:u;t.classList.remove(s),l=setTimeout((function(){S(t,a,c),l=void 0}),f)}n=t}},S=function(t,e,n){p=Date.now(),t.classList.add(s);var i=m&&c(t);i&&i.addRipple&&(R(),o=i.addRipple(e,n))},R=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},y=function(t){R();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),L.delete(e)}),d);L.set(e,o)}else e.classList.remove(s)}},q=document;q.addEventListener("ionScrollStart",(function(t){e=t.target,T()})),q.addEventListener("ionScrollEnd",(function(){e=void 0})),q.addEventListener("ionGestureCaptured",T),q.addEventListener("touchstart",h,!0),q.addEventListener("touchcancel",E,!0),q.addEventListener("touchend",E,!0),q.addEventListener("mousedown",b,!0),q.addEventListener("mouseup",g,!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=chunk-2d0f1533.176694a1.js.map