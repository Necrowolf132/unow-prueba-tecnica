(()=>{var t,e,i,o={3709:(t,e,i)=>{"use strict";const o=window.wp.blocks;var r=i(7723);const n=window.wp.blockEditor;var s,c=i(6087);const g=(t,e)=>{e&&s&&clearInterval(s);const i=JSON.parse(t?.getAttribute("data-countdown")),o=i.dueDate,r=i.style,n=new Date(o).getTime(),c=6048e5,g=864e5,a=36e5,k=6e4,u=(e,i,o=!0)=>{0===e&&o&&(t.querySelector(i).classList.add("gkit-flip"),".gkit-minutes"===i&&setTimeout((()=>{t.querySelector(i).classList.remove("gkit-flip")}),800)),o||(t.querySelector(i).classList.add("gkit-flip"),setTimeout((()=>{t.querySelector(i).classList.remove("gkit-flip")}),800))},d=(e,i)=>{const o=t.querySelector(`${i} .gkit-next.gkit-top`),r=t.querySelector(`${i} .gkit-next.gkit-bottom`),n=t.querySelector(`${i} .gkit-curr.gkit-top`),s=t.querySelector(`${i} .gkit-curr.gkit-bottom`);o&&(o.innerHTML=e),r&&(r.innerHTML=e),setTimeout((()=>{n&&(n.innerHTML=e),s&&(s.innerHTML=e)}),250)};s="style3"===r?setInterval((function(){const t=(new Date).getTime(),e=n-t;if(e<0)return void clearInterval(s);const i=Math.floor(e/c),o=Math.floor(e%c/g),r=Math.floor(e%g/a),l=Math.floor(e%a/k),m=Math.floor(e%k/1e3);d(i,".gkit-weeks"),d(o,".gkit-days"),d(r,".gkit-hours"),d(l,".gkit-minutes"),d(m,".gkit-seconds"),u(m,".gkit-minutes"),u(l,".gkit-hours"),u(r,".gkit-days"),u(o,".gkit-weeks"),u(m,".gkit-seconds",!1)}),1e3):setInterval((function(){const e=(new Date).getTime(),i=n-e;if(i<0)return void clearInterval(s);const o=Math.floor(i/g),r=Math.floor(i%g/a),c=Math.floor(i%a/k),u=Math.floor(i%k/1e3),d=t.querySelector(".gkit-days .gkit-timer-count");d&&(d.innerHTML=o);const l=t.querySelector(".gkit-hours .gkit-timer-count");l&&(l.innerHTML=r);const m=t.querySelector(".gkit-minutes .gkit-timer-count");m&&(m.innerHTML=c);const b=t.querySelector(".gkit-seconds .gkit-timer-count");b&&(b.innerHTML=u)}),1e3)};var a=i(6942),k=i.n(a),u=i(790);const d=({attributes:t,setAttributes:e,countdownData:i,isEdit:o})=>{const s={className:k()("gkit-countdown",{"gkit-countdown-timer":"style1"===t.style},{"gkit-countdown-timer-2":"style2"===t.style},{"gkit-flip-clock":"style3"===t.style},{"gkit-countdown-timer-3":"style4"===t.style},{"gkit-countdown-timer-3 gkit-version-box":"style5"===t.style},{"gkit-countdown-timer-4":"style6"===t.style})},c={className:k()("gkit-countdown-inner",{"gkit-inner-container":"style1"===t.style||"style2"===t.style},{"gkit-timer-content":"style4"===t.style||"style5"===t.style})},g={className:k()({"gkit-timer-content":"style1"===t.style||"style2"===t.style},{"gkit-inner-container":"style4"===t.style||"style5"===t.style})},a=(t,i)=>o?(0,u.jsx)(n.RichText,{value:t,tagName:"span",className:"gkit-timer-title",onChange:t=>e({[`${i}Label`]:t}),placeholder:(0,r.__)(`${i.charAt(0).toUpperCase()+i.slice(1)}`,"gutenkit-blocks-addon")}):(0,u.jsx)(n.RichText.Content,{className:" gkit-timer-title",tagName:"span",value:t}),d={days:a(t?.dayLabel,"day"),hours:a(t?.hourLabel,"hour"),minutes:a(t?.minuteLabel,"minute"),seconds:a(t?.secondLabel,"second")};let l=Object.entries(d).map((([t,e])=>(0,u.jsx)("div",{className:`gkit-timer-container gkit-${t}`,children:(0,u.jsx)("div",{...c,children:(0,u.jsxs)("div",{...g,children:[(0,u.jsx)("span",{className:"gkit-timer-count"}),e]})})},t)));if("style3"===t.style){const e={weeks:a(t?.weekLabel,"week"),...d};l=Object.entries(e).map((([t,e])=>(0,u.jsxs)("div",{className:`gkit-time gkit-countdown-inner gkit-${t}`,children:[(0,u.jsx)("span",{className:"gkit-count gkit-curr gkit-top"}),(0,u.jsx)("span",{className:"gkit-count gkit-next gkit-top"}),(0,u.jsx)("span",{className:"gkit-count gkit-next gkit-bottom"}),(0,u.jsx)("span",{className:"gkit-count gkit-curr gkit-bottom"}),e]},t)))}return"style6"!==t.style?(0,u.jsx)("div",{...s,"data-countdown":JSON.stringify(i),children:l}):(0,u.jsx)("div",{className:"gkit-countdown-container",children:(0,u.jsx)("div",{...s,"data-countdown":JSON.stringify(i),children:l})})},l=window.wp.compose,m=({attributes:t})=>(0,u.jsxs)("div",{className:"gkit-countdown-expire",children:[t.expireLabel," ",(0,u.jsx)("br",{}),t.expireDescription]}),b=(0,c.lazy)((()=>i.e(9634).then(i.bind(i,9634)))),p=JSON.parse('{"UU":"gutenkit/countdown-timer"}'),{countdownTimer:h}=window.gutenkit.editorIcon;(0,o.registerBlockType)(p.UU,{edit:function({attributes:t,setAttributes:e,advancedControl:i,isSelected:o}){const{useDeviceType:r,useBlockStyles:s,useDeviceList:a}=window.gutenkit.helpers,k=a(),{GkitStyle:p,GkitSuspense:h}=window.gutenkit.components,w=(0,c.useRef)(),y=(0,n.useBlockProps)({ref:(0,l.useMergeRefs)([w])}),$=r(),[f,v]=(0,c.useState)({dueDate:t.date,style:t.style,expireLabel:t.expireLabel,expireDescription:t.expireDescription}),[x,B]=(0,c.useState)(!0);(0,c.useEffect)((()=>{const t=w.current.querySelector(".gkit-countdown");g(t,!1),B(!1)}),[]),(0,c.useEffect)((()=>{var i;x||(i=t.date,new Date(i).getTime()-(new Date).getTime()<0?e({isExpired:!0}):(e({isExpired:!1}),v({dueDate:t.date,style:t.style,expireLabel:t.expireLabel,expireDescription:t.expireDescription}),setTimeout((()=>{const t=w.current.querySelector(".gkit-countdown");g(t,!0)}),200)))}),[t.date,t.style,t.expireLabel,t.expireDescription]);const L=s(t,e,"blocksCSS",((t,e)=>{const{getBoxShadowValue:i,getBoxValue:o,getBorderValue:r,getTypographyValue:n,getSliderValue:s,backgroundGenerator:c,parseCSS:g,getColor:a}=window.gutenkit.helpers,k=t?.blockClass;return g([[{selector:`.${k} .gkit-countdown-timer-4::before`,"border-top-color":t?.outerEdgeColor},{selector:`.${k} .gkit-countdown-timer-4::after`,"border-left-color":t?.outerEdgeColor},{selector:`.${k} .gkit-flip-clock .gkit-weeks .gkit-count`,color:a(t.weeksColor)},{selector:`.${k} .gkit-flip-clock .gkit-weeks .gkit-timer-title`,color:a(t.weeksLabelColor),background:c(t?.weeksLabelBackground).background,...r(t.weeksLabelBorder)},{selector:`.${k} .gkit-flip-clock > .gkit-weeks.gkit-time`,...r(t.weeksBorder),"box-shadow":i(t.weeksShadow)},{selector:`.${k} .gkit-flip-clock  > .gkit-weeks .gkit-count`,background:c(t?.weeksBackground).background},{selector:`.${k} .gkit-days .gkit-timer-count,\n            .${k} .gkit-flip-clock .gkit-days .gkit-count`,color:a(t.daysColor)},{selector:`.${k} .gkit-days .gkit-timer-title`,color:a(t.daysLabelColor),background:c(t?.daysLabelBackground).background,...r(t.daysLabelBorder)},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-days .gkit-inner-container,\n            .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-days .gkit-timer-count,\n            .${k} .gkit-countdown-timer-3  .gkit-days .gkit-timer-count::before,\n            .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-days .gkit-timer-content`,background:c(t?.daysBackground).background,...r(t.daysBorder),"box-shadow":i(t.daysShadow)},{selector:`.${k} .gkit-flip-clock > .gkit-days.gkit-time`,...r(t.daysBorder),"box-shadow":i(t.daysShadow)},{selector:`.${k} .gkit-flip-clock  > .gkit-days .gkit-count`,background:c(t?.daysBackground).background},{selector:`.${k} .gkit-hours .gkit-timer-count,\n            .${k} .gkit-flip-clock .gkit-hours .gkit-count`,color:a(t.hoursColor)},{selector:`.${k} .gkit-hours .gkit-timer-title`,color:a(t.hoursLabelColor),background:c(t?.hoursLabelBackground).background,...r(t.hoursLabelBorder)},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-hours .gkit-inner-container,\n            .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-hours .gkit-timer-count,\n            .${k} .gkit-countdown-timer-3  .gkit-hours .gkit-timer-count::before,\n            .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-hours .gkit-timer-content`,background:c(t?.hoursBackground).background,...r(t.hoursBorder),"box-shadow":i(t.hoursShadow)},{selector:`.${k} .gkit-flip-clock > .gkit-hours.gkit-time`,...r(t.hoursBorder),"box-shadow":i(t.hoursShadow)},{selector:`.${k} .gkit-flip-clock  > .gkit-hours .gkit-count`,background:c(t?.hoursBackground).background},{selector:`.${k} .gkit-minutes .gkit-timer-count,\n            .${k} .gkit-flip-clock .gkit-minutes .gkit-count`,color:a(t.minutesColor)},{selector:`.${k} .gkit-minutes .gkit-timer-title`,color:a(t.minutesLabelColor),background:c(t?.minutesLabelBackground).background,...r(t.minutesLabelBorder)},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-minutes .gkit-inner-container,\n            .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-minutes .gkit-timer-count,\n            .${k} .gkit-countdown-timer-3  .gkit-minutes .gkit-timer-count::before,\n            .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-minutes .gkit-timer-content`,background:c(t?.minutesBackground).background,...r(t.minutesBorder),"box-shadow":i(t.minutesShadow)},{selector:`.${k} .gkit-flip-clock > .gkit-minutes.gkit-time`,...r(t.minutesBorder),"box-shadow":i(t.minutesShadow)},{selector:`.${k} .gkit-flip-clock  > .gkit-minutes .gkit-count`,background:c(t?.minutesBackground).background},{selector:`.${k} .gkit-seconds .gkit-timer-count,\n            .${k} .gkit-flip-clock .gkit-seconds .gkit-count`,color:a(t.secondsColor)},{selector:`.${k} .gkit-seconds .gkit-timer-title`,color:a(t.secondsLabelColor),background:c(t?.secondsLabelBackground).background,...r(t.secondsLabelBorder)},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-seconds .gkit-inner-container,\n            .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-seconds .gkit-timer-count,\n            .${k} .gkit-countdown-timer-3  .gkit-seconds .gkit-timer-count::before,\n            .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-seconds .gkit-timer-content`,background:c(t?.secondsBackground).background,...r(t.secondsBorder),"box-shadow":i(t.secondsShadow)},{selector:`.${k} .gkit-flip-clock > .gkit-seconds.gkit-time`,...r(t.secondsBorder),"box-shadow":i(t.secondsShadow)},{selector:`.${k} .gkit-flip-clock  > .gkit-seconds .gkit-count`,background:c(t?.secondsBackground).background}],e=>[{selector:`.${k} .gkit-countdown:not(.gkit-countdown-timer-4) .gkit-countdown-inner`,width:s(t[`width${e}`]),height:s(t[`height${e}`])},{selector:`.${k} .gkit-countdown-timer-2 .gkit-timer-count`,height:t[`height${e}`]?.size-40+t[`height${e}`]?.unit,"line-height":s(t[`lineHeight${e}`])},{selector:`.${k} .gkit-countdown:not(.gkit-countdown-timer-4)`,"column-gap":s(t[`columnGap${e}`]),"row-gap":s(t[`rowGap${e}`])},{selector:`.${k} .gkit-countdown-timer-3 .gkit-timer-count`,height:t[`height${e}`]?.size-40+t[`height${e}`]?.unit,"line-height":s(t[`lineHeight${e}`])},{selector:`.${k} .gkit-countdown-timer-4`,height:s(t[`height${e}`]),"line-height":s(t[`lineHeight${e}`])},{selector:`.${k} .gkit-countdown-timer-3.gkit-version-box .gkit-timer-container:nth-child(2) .gkit-timer-content`,height:t[`height${e}`]?.size+40+t[`height${e}`]?.unit},{selector:`.${k} .gkit-countdown-timer-3.gkit-version-box .gkit-timer-container:nth-child(4) .gkit-timer-content`,height:t[`height${e}`]?.size-40+t[`height${e}`]?.unit},{selector:`.${k} .gkit-countdown-timer-3.gkit-version-box  .gkit-timer-content,\n                .${k} .gkit-countdown-timer .gkit-timer-container .gkit-inner-container,\n                .${k} .gkit-flip-clock .gkit-top`,"line-height":s(t[`lineHeight${e}`])},{selector:`.${k} .gkit-countdown-timer-4`,background:c(t?.outerBackground,"${device}`]").background,"background-size":c(t?.outerBackground,"${device}`]").size},{selector:`.${k} .gkit-countdown-container::before`,background:c(t?.innerBackground,"${device}`]").background,"background-size":c(t?.innerBackground,"${device}`]").size},{selector:`.${k} .gkit-flip-clock .gkit-weeks .gkit-count`,...n(t.weeksTypography,e)},{selector:`.${k} .gkit-flip-clock .gkit-weeks .gkit-timer-title`,...n(t.weeksLabelTypography,e),...o(t[`weeksLabelBorderRadius${e}`],"border-radius"),...o(t[`weeksLabelMargin${e}`],"margin")},{selector:`.${k} .gkit-flip-clock > .gkit-weeks.gkit-time`,...o(t[`weeksBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-days .gkit-timer-count,\n                .${k} .gkit-flip-clock .gkit-days .gkit-count`,...n(t.daysTypography,e),"margin-bottom":s(t[`daysMarginBottom${e}`])},{selector:`.${k} .gkit-days .gkit-timer-title`,...n(t.daysLabelTypography,e),...o(t[`daysLabelBorderRadius${e}`],"border-radius"),...o(t[`daysLabelMargin${e}`],"margin")},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-days .gkit-inner-container,\n                .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-days .gkit-timer-count,\n                .${k} .gkit-countdown-timer-3  .gkit-days .gkit-timer-count::before,\n                .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-days .gkit-timer-content`,...o(t[`daysBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-flip-clock > .gkit-days.gkit-time`,...o(t[`daysBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-hours .gkit-timer-count,\n                .${k} .gkit-flip-clock .gkit-hours .gkit-count`,...n(t.hoursTypography,e),"margin-bottom":s(t[`hoursMarginBottom${e}`])},{selector:`.${k} .gkit-hours .gkit-timer-title`,...n(t.hoursLabelTypography,e),...o(t[`hoursLabelBorderRadius${e}`],"border-radius"),...o(t[`hoursLabelMargin${e}`],"margin")},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-hours .gkit-inner-container,\n                .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-hours .gkit-timer-count,\n                .${k} .gkit-countdown-timer-3  .gkit-hours .gkit-timer-count::before,\n                .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-hours .gkit-timer-content`,...o(t[`hoursBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-flip-clock > .gkit-hours.gkit-time`,...o(t[`hoursBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-minutes .gkit-timer-count,\n                .${k} .gkit-flip-clock .gkit-minutes .gkit-count`,...n(t.minutesTypography,e),"margin-bottom":s(t[`minutesMarginBottom${e}`])},{selector:`.${k} .gkit-minutes .gkit-timer-title`,...n(t.minutesLabelTypography,e),...o(t[`minutesLabelBorderRadius${e}`],"border-radius"),...o(t[`minutesLabelMargin${e}`],"margin")},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-minutes .gkit-inner-container,\n                .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-minutes .gkit-timer-count,\n                .${k} .gkit-countdown-timer-3  .gkit-minutes .gkit-timer-count::before,\n                .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-minutes .gkit-timer-content`,...o(t[`minutesBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-flip-clock > .gkit-minutes.gkit-time`,...o(t[`minutesBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-seconds .gkit-timer-count,\n                .${k} .gkit-flip-clock .gkit-seconds .gkit-count`,...n(t.secondsTypography,e),"margin-bottom":s(t[`secondsMarginBottom${e}`])},{selector:`.${k} .gkit-seconds .gkit-timer-title`,...n(t.secondsLabelTypography,e),...o(t[`secondsLabelBorderRadius${e}`],"border-radius"),...o(t[`secondsLabelMargin${e}`],"margin")},{selector:`.${k} .gkit-countdown-timer .gkit-timer-container.gkit-seconds .gkit-inner-container,\n                .${k} .gkit-countdown-timer-2 .gkit-timer-container.gkit-seconds .gkit-timer-count,\n                .${k} .gkit-countdown-timer-3  .gkit-seconds .gkit-timer-count::before,\n                .${k} .gkit-countdown-timer-3.gkit-version-box .gkit-seconds .gkit-timer-content`,...o(t[`secondsBorderRadius${e}`],"border-radius")},{selector:`.${k} .gkit-flip-clock > .gkit-seconds.gkit-time`,...o(t[`secondsBorderRadius${e}`],"border-radius")}]],e)})(t,k));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p,{blocksCSS:L}),o&&(0,u.jsx)(h,{children:(0,u.jsx)(b,{attributes:t,setAttributes:e,device:$,advancedControl:i})}),(0,u.jsx)("div",{...y,children:t.isExpired?(0,u.jsx)(m,{attributes:t}):(0,u.jsx)(d,{attributes:t,setAttributes:e,countdownData:f,isEdit:!0})})]})},icon:{src:h},save:function({attributes:t}){const e=n.useBlockProps.save(),i={dueDate:t.date,style:t.style,expireLabel:t.expireLabel,expireDescription:t.expireDescription};return(0,u.jsx)("div",{...e,children:t.isExpired?(0,u.jsx)(m,{attributes:t}):(0,u.jsx)(d,{attributes:t,countdownData:i,isEdit:!1})})}})},790:t=>{"use strict";t.exports=window.ReactJSXRuntime},6427:t=>{"use strict";t.exports=window.wp.components},6087:t=>{"use strict";t.exports=window.wp.element},7723:t=>{"use strict";t.exports=window.wp.i18n},6942:(t,e)=>{var i;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var t="",e=0;e<arguments.length;e++){var i=arguments[e];i&&(t=s(t,n(i)))}return t}function n(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var i in t)o.call(t,i)&&t[i]&&(e=s(e,i));return e}function s(t,e){return e?t?t+" "+e:t+e:t}t.exports?(r.default=r,t.exports=r):void 0===(i=function(){return r}.apply(e,[]))||(t.exports=i)}()}},r={};function n(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return o[t](i,i.exports,n),i.exports}n.m=o,t=[],n.O=(e,i,o,r)=>{if(!i){var s=1/0;for(k=0;k<t.length;k++){i=t[k][0],o=t[k][1],r=t[k][2];for(var c=!0,g=0;g<i.length;g++)(!1&r||s>=r)&&Object.keys(n.O).every((t=>n.O[t](i[g])))?i.splice(g--,1):(c=!1,r<s&&(s=r));if(c){t.splice(k--,1);var a=o();void 0!==a&&(e=a)}}return e}r=r||0;for(var k=t.length;k>0&&t[k-1][2]>r;k--)t[k]=t[k-1];t[k]=[i,o,r]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce(((e,i)=>(n.f[i](t,e),e)),[])),n.u=t=>t+".js",n.miniCssF=t=>{},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},i="gutenkit-blocks-addon:",n.l=(t,o,r,s)=>{if(e[t])e[t].push(o);else{var c,g;if(void 0!==r)for(var a=document.getElementsByTagName("script"),k=0;k<a.length;k++){var u=a[k];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==i+r){c=u;break}}c||(g=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",i+r),c.src=t),e[t]=[o];var d=(i,o)=>{c.onerror=c.onload=null,clearTimeout(l);var r=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((t=>t(o))),i)return i(o)},l=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),g&&document.head.appendChild(c)}},n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=i[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../../"})(),(()=>{var t={6788:0,2620:0};n.f.j=(e,i)=>{var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else if(2620!=e){var r=new Promise(((i,r)=>o=t[e]=[i,r]));i.push(o[2]=r);var s=n.p+n.u(e),c=new Error;n.l(s,(i=>{if(n.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,o[1](c)}}),"chunk-"+e,e)}else t[e]=0},n.O.j=e=>0===t[e];var e=(e,i)=>{var o,r,s=i[0],c=i[1],g=i[2],a=0;if(s.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(g)var k=g(n)}for(e&&e(i);a<s.length;a++)r=s[a],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(k)},i=self.webpackChunkgutenkit_blocks_addon=self.webpackChunkgutenkit_blocks_addon||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var s=n.O(void 0,[2620],(()=>n(3709)));s=n.O(s)})();