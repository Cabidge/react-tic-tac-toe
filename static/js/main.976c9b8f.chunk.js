(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(6),l=t.n(i),a=(t(13),t(14),t(7)),u=t(8),s=t(5),o=(t(15),t(16),t(0));var f=function(e){var n=e.status,t=e.onClick,r="Cell";return null!=n&&(r+=0===n?" red":" blue"),Object(o.jsx)("div",{className:r,onClick:t})};t(18);var j=function(e){var n=e.cellStatuses,t=e.onCellClick;return Object(o.jsx)("div",{className:"CellContainer",children:n.map((function(e,n){return Object(o.jsx)(f,{status:e,onClick:function(e){return t(n,e)}},n)}))})};var v=function(e){var n=e.playerId;return Object(o.jsx)("span",{className:"TurnDisplay",children:"Player ".concat(n+1," (").concat(0===n?"Red":"Blue",")")})};t(19);var d=function(e){var n=e.winner,t=e.onClickReset,r=null==n?"It's a Tie!":"Player ".concat(n+1," Wins!");return Object(o.jsxs)("span",{className:"ResultDisplay",children:[r,Object(o.jsx)("button",{className:"reset",onClick:t,children:"\u21bb"})]})};function b(e,n,t){var r=e[n];if(null==r)return!1;for(var c=n+t,i=0;i<2;c+=t,i++)if(e[c]!==r)return!1;return!0}function O(){return{isActive:!0,winner:null,cells:Array(9).fill(null),playerId:0}}function p(e,n){switch(n.type){case"reset":return O();default:return Object(s.a)(Object(s.a)({},e),n)}}var C=function(){var e=Object(r.useReducer)(p,O()),n=Object(u.a)(e,2),t=n[0],c=t.isActive,i=t.winner,l=t.cells,s=t.playerId,f=n[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"panel",children:c?Object(o.jsx)(v,{playerId:s}):Object(o.jsx)(d,{winner:i,onClickReset:function(){return f({type:"reset"})}})}),Object(o.jsx)(j,{cellStatuses:l,onCellClick:function(e){if(c&&null==l[e]){var n=Object(a.a)(l);n[e]=s,f({cells:n,playerId:(s+1)%2});var t=function(e){for(var n=0;n<3;n++)if(b(e,n,3))return e[n];for(var t=0;t<9;t+=3)if(b(e,t,1))return e[t];return b(e,0,4)?e[0]:b(e,2,2)?e[2]:null}(n);null!=t&&(console.log("Player ".concat(i+1," is the Winner!")),f({isActive:!1,winner:t})),n.every((function(e){return null!==e}))&&f({isActive:!1})}}})]})};var y=function(){return Object(o.jsx)(C,{})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,l=n.getTTFB;t(e),r(e),c(e),i(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),h()}],[[20,1,2]]]);
//# sourceMappingURL=main.976c9b8f.chunk.js.map