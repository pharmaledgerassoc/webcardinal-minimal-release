const a="pages",t="skins",n="templates",e="modals",s="scripts",o="components",r="assets",i="data-model",d="data-view-model",l="disable-binding",c="default-controller",u="hydrated",f="@",w="$",p=["_saveElement"],m=["webc-template","webc-container","webc-component","webc-datatable"],b="psk-",v="data-tag",h="getDataTagModel",E="data-for",P="no-data",g="loading",y="data-for-options",R="events",k="optimistic",A="rerender",L="content-updated",O="content-replaced",T="data-for-template-size",_="data-if",C="true",F="false",$="no-data",j="loading",G="data-if-options",N="events",U="content-updated",W="webc-skin-default-stylesheet",B="webc-skin-custom-stylesheet",D={NONE:"none",WARN:"warn",ERROR:"error"},S={BEFORE_APP:"beforeAppLoads",AFTER_APP:"afterAppLoads",BEFORE_PAGE:"beforePageLoads",AFTER_PAGE:"afterPageLoads",CLOSED_PAGE:"whenPageClose"},x="--mode",z="--mode-mobile-breakpoint";function M(a){return H(q(a))}function q(a=""){return a.startsWith("/")?a.slice(1):a}function H(a=""){return a.endsWith("/")?a.slice(0,-1):a}const I={trim:M,trimEnd:H,trimStart:q,join:(a,...t)=>{let n=new URL(H(window.location.origin)+"/");for(let a of t)a=H(a),""!==a&&(n=new URL(a+"/",n));return""!==(a=M(a))&&(n=new URL(a+"/"+M(n.pathname),M(n.origin))),{href:H(n.href),pathname:H(n.pathname)||"/"}}};async function J(a){try{const t=await fetch(`${a}.html`),n=await t.text();if(!t.ok)throw new Error(n);return[null,n]}catch(a){return[a]}}async function K(a){try{const t=await import(`${a}.js`);return t.default||t}catch(a){return}}async function Q(a){try{const t=await fetch(`${a}.json`);if(!t.ok){const a=await t.text();throw new Error(a)}return[null,await t.json()]}catch(a){return[a]}}function V(){var a,t,n;return(null===(a=window.WebCardinal)||void 0===a?void 0:a.state)&&"boolean"==typeof(null===(n=null===(t=window.WebCardinal)||void 0===t?void 0:t.state)||void 0===n?void 0:n.translations)?window.WebCardinal.state.translations:(console.warn(['Preferred "translations" can not be found in WebCardinal.state!','The fallback for translations is "true".'].join("\n"),window.WebCardinal),!0)}function X(){var a,t,n,e;return(null===(t=null===(a=window.WebCardinal)||void 0===a?void 0:a.state)||void 0===t?void 0:t.skin)&&"string"==typeof(null===(e=null===(n=window.WebCardinal)||void 0===n?void 0:n.state)||void 0===e?void 0:e.skin)?window.WebCardinal.state.skin:(console.warn(['Preferred "skin" can not be found in WebCardinal.state!','The fallback for skin is "default".'].join("\n"),window.WebCardinal),"default")}function Y(){const a=X();return"default"!==a?`skins/${a}`:""}function Z(){let{pathname:a}=window.location;return a.endsWith("/")&&"/"!==a&&(a=a.slice(0,-1)),a}export{r as A,W as B,o as C,l as D,B as E,E as F,S as G,u as H,_ as I,x as J,z as K,D as L,e as M,J as N,K as O,a as P,Q,V as R,t as S,n as T,I as U,d as V,X as W,Y as X,Z as Y,s as a,i as b,c,f as d,w as e,p as f,m as g,b as h,v as i,h as j,P as k,g as l,y as m,R as n,k as o,A as p,L as q,O as r,T as s,C as t,F as u,$ as v,j as w,G as x,N as y,U as z}