(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,c,t){},,,,function(e,c,t){"use strict";t.r(c);var n=t(2),a=t.n(n),i=t(4),r=t.n(i),s=(t(13),t(0));function d(e){var c=e.title,t=e.children;return Object(s.jsxs)("section",{children:[c&&Object(s.jsx)("h2",{children:c}),t]})}function b(e){var c=e.avatar,t=e.username,n=e.tag,a=e.location,i=e.followers,r=e.views,d=e.likes;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:c,alt:t}),Object(s.jsx)("p",{children:t}),Object(s.jsxs)("p",{children:["@",n]}),Object(s.jsx)("p",{children:a})]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{children:"Followers"}),Object(s.jsx)("span",{children:i})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{children:"Views"}),Object(s.jsx)("span",{children:r})]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{children:"Likes"}),Object(s.jsx)("span",{children:d})]})]})]})}function l(e){var c=e.datas;return Object(s.jsxs)("ul",{children:[" ",c.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{children:e.label}),Object(s.jsx)("span",{children:e.percentage})]},e.id)}))]})}function o(e){var c=e.params;return Object(s.jsxs)("ul",{children:[" ",c.map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)("span",{children:e.isOnline}),Object(s.jsx)("img",{src:e.avatar,alt:"{param.name} avatar",width:"48"}),Object(s.jsx)("p",{children:e.name})]},e.id)}))]})}var j=t(5),p=t.n(j);function u(e){var c=e.transactions;return Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Amount"}),Object(s.jsx)("th",{children:"Currency"})]})}),c.map((function(e){return Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.type}),Object(s.jsx)("td",{children:e.amount}),Object(s.jsx)("td",{children:e.currency})]})},e.id)}))]})}u.propType={transaction:p.a.string};var f=t(6),h=t(1),O=t(7),m=t(8);function x(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{avatar:h.avatar,username:h.username,tag:h.tag,location:h.location,followers:h.stats.followers,views:h.stats.views,likes:h.stats.likes}),Object(s.jsx)(d,{title:"Upload stats",children:Object(s.jsx)(l,{datas:f})}),Object(s.jsx)(d,{children:Object(s.jsx)(o,{params:O})}),Object(s.jsx)(d,{children:Object(s.jsx)(u,{transactions:m})})]})}r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.querySelector("#root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.aecf0e53.chunk.js.map