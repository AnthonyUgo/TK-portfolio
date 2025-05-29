import"./modulepreload-polyfill-B5Qt9EMX.js";const bd=()=>{};var Fa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Pd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},gu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,p=o>>2,y=(o&3)<<4|u>>4;let T=(u&15)<<2|d>>6,b=d&63;h||(b=64,a||(T=64)),r.push(t[p],t[y],t[T],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||y==null)throw new Sd;const T=o<<2|u>>4;if(r.push(T),d!==64){const b=u<<4&240|d>>2;if(r.push(b),y!==64){const k=d<<6&192|y;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cd=function(n){const e=mu(n);return gu.encodeByteArray(e,!0)},Wr=function(n){return Cd(n).replace(/\./g,"")},_u=function(n){try{return gu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=()=>kd().__FIREBASE_DEFAULTS__,Dd=()=>{if(typeof process>"u"||typeof Fa>"u")return;const n=Fa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Nd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_u(n[1]);return e&&JSON.parse(e)},fi=()=>{try{return bd()||Vd()||Dd()||Nd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yu=n=>{var e,t;return(t=(e=fi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vu=n=>{const e=yu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Eu=()=>{var n;return(n=fi())===null||n===void 0?void 0:n.config},Tu=n=>{var e;return(e=fi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n){return n.endsWith(".cloudworkstations.dev")}async function $s(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wr(JSON.stringify(t)),Wr(JSON.stringify(a)),""].join(".")}const Fn={};function Ld(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fn))Fn[e]?n.emulator.push(e):n.prod.push(e);return n}function Md(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ba=!1;function qs(n,e){if(typeof window>"u"||typeof document>"u"||!Ft(window.location.host)||Fn[n]===e||Fn[n]||Ba)return;Fn[n]=e;function t(T){return`__firebase__banner__${T}`}const r="__firebase__banner",o=Ld().prod.length>0;function a(){const T=document.getElementById(r);T&&T.remove()}function u(T){T.style.display="flex",T.style.background="#7faaf0",T.style.position="fixed",T.style.bottom="5px",T.style.left="5px",T.style.padding=".5em",T.style.borderRadius="5px",T.style.alignItems="center"}function h(T,b){T.setAttribute("width","24"),T.setAttribute("id",b),T.setAttribute("height","24"),T.setAttribute("viewBox","0 0 24 24"),T.setAttribute("fill","none"),T.style.marginLeft="-6px"}function d(){const T=document.createElement("span");return T.style.cursor="pointer",T.style.marginLeft="16px",T.style.fontSize="24px",T.innerHTML=" &times;",T.onclick=()=>{Ba=!0,a()},T}function p(T,b){T.setAttribute("id",b),T.innerText="Learn more",T.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",T.setAttribute("target","__blank"),T.style.paddingLeft="5px",T.style.textDecoration="underline"}function y(){const T=Md(r),b=t("text"),k=document.getElementById(b)||document.createElement("span"),D=t("learnmore"),C=document.getElementById(D)||document.createElement("a"),$=t("preprendIcon"),M=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(T.created){const U=T.element;u(U),p(C,D);const z=d();h(M,$),U.append(M,k,C,z),document.body.appendChild(U)}o?(k.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Ud(){var n;const e=(n=fi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $d(){const n=Ie();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qd(){return!Ud()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zd(){try{return typeof indexedDB=="object"}catch{return!1}}function Hd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="FirebaseError";class He extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Gd,Object.setPrototypeOf(this,He.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?Wd(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new He(i,u,r)}}function Wd(n,e){return n.replace(Kd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Kd=/\{\$([^}]+)}/g;function Qd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(ja(o)&&ja(a)){if(!Nt(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function ja(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xd(n,e){const t=new Jd(n,e);return t.subscribe.bind(t)}class Jd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Zi),i.error===void 0&&(i.error=Zi),i.complete===void 0&&(i.complete=Zi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n){return n&&n._delegate?n._delegate:n}class yt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Od;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tf(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&e(a,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ef(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ef(n){return n===Ct?void 0:n}function tf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const rf={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},sf=H.INFO,of={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},af=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=of[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zs{constructor(e){this.name=e,this._logLevel=sf,this._logHandler=af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const cf=(n,e)=>e.some(t=>n instanceof t);let $a,qa;function uf(){return $a||($a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lf(){return qa||(qa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wu=new WeakMap,_s=new WeakMap,Au=new WeakMap,es=new WeakMap,Hs=new WeakMap;function hf(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(pt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&wu.set(t,n)}).catch(()=>{}),Hs.set(e,n),e}function df(n){if(_s.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});_s.set(n,e)}let ys={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _s.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Au.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ff(n){ys=n(ys)}function pf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ts(this),e,...t);return Au.set(r,e.sort?e.sort():[e]),pt(r)}:lf().includes(n)?function(...e){return n.apply(ts(this),e),pt(wu.get(this))}:function(...e){return pt(n.apply(ts(this),e))}}function mf(n){return typeof n=="function"?pf(n):(n instanceof IDBTransaction&&df(n),cf(n,uf())?new Proxy(n,ys):n)}function pt(n){if(n instanceof IDBRequest)return hf(n);if(es.has(n))return es.get(n);const e=mf(n);return e!==n&&(es.set(n,e),Hs.set(e,n)),e}const ts=n=>Hs.get(n);function gf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=pt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(pt(a.result),h.oldVersion,h.newVersion,pt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const _f=["get","getKey","getAll","getAllKeys","count"],yf=["put","add","delete","clear"],ns=new Map;function za(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ns.get(e))return ns.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=yf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_f.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return ns.set(e,o),o}ff(n=>({...n,get:(e,t,r)=>za(e,t)||n.get(e,t,r),has:(e,t)=>!!za(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ef(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ef(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vs="@firebase/app",Ha="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new zs("@firebase/app"),Tf="@firebase/app-compat",If="@firebase/analytics-compat",wf="@firebase/analytics",Af="@firebase/app-check-compat",Rf="@firebase/app-check",bf="@firebase/auth",Pf="@firebase/auth-compat",Sf="@firebase/database",Cf="@firebase/data-connect",kf="@firebase/database-compat",Vf="@firebase/functions",Df="@firebase/functions-compat",Nf="@firebase/installations",Of="@firebase/installations-compat",Lf="@firebase/messaging",Mf="@firebase/messaging-compat",xf="@firebase/performance",Uf="@firebase/performance-compat",Ff="@firebase/remote-config",Bf="@firebase/remote-config-compat",jf="@firebase/storage",$f="@firebase/storage-compat",qf="@firebase/firestore",zf="@firebase/ai",Hf="@firebase/firestore-compat",Gf="firebase",Wf="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="[DEFAULT]",Kf={[vs]:"fire-core",[Tf]:"fire-core-compat",[wf]:"fire-analytics",[If]:"fire-analytics-compat",[Rf]:"fire-app-check",[Af]:"fire-app-check-compat",[bf]:"fire-auth",[Pf]:"fire-auth-compat",[Sf]:"fire-rtdb",[Cf]:"fire-data-connect",[kf]:"fire-rtdb-compat",[Vf]:"fire-fn",[Df]:"fire-fn-compat",[Nf]:"fire-iid",[Of]:"fire-iid-compat",[Lf]:"fire-fcm",[Mf]:"fire-fcm-compat",[xf]:"fire-perf",[Uf]:"fire-perf-compat",[Ff]:"fire-rc",[Bf]:"fire-rc-compat",[jf]:"fire-gcs",[$f]:"fire-gcs-compat",[qf]:"fire-fst",[Hf]:"fire-fst-compat",[zf]:"fire-vertex","fire-js":"fire-js",[Gf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,Qf=new Map,Ts=new Map;function Ga(n,e){try{n.container.addComponent(e)}catch(t){Ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ot(n){const e=n.name;if(Ts.has(e))return Ye.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,n);for(const t of Kr.values())Ga(t,n);for(const t of Qf.values())Ga(t,n);return!0}function pi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ne(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new nr("app","Firebase",Xf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt=Wf;function Ru(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Es,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(t||(t=Eu()),!t)throw mt.create("no-options");const o=Kr.get(i);if(o){if(Nt(t,o.options)&&Nt(r,o.config))return o;throw mt.create("duplicate-app",{appName:i})}const a=new nf(i);for(const h of Ts.values())a.addComponent(h);const u=new Jf(t,r,a);return Kr.set(i,u),u}function Gs(n=Es){const e=Kr.get(n);if(!e&&n===Es&&Eu())return Ru();if(!e)throw mt.create("no-app",{appName:n});return e}function Ue(n,e,t){var r;let i=(r=Kf[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ye.warn(u.join(" "));return}Ot(new yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="firebase-heartbeat-database",Zf=1,Gn="firebase-heartbeat-store";let rs=null;function bu(){return rs||(rs=gf(Yf,Zf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gn)}catch(t){console.warn(t)}}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),rs}async function ep(n){try{const t=(await bu()).transaction(Gn),r=await t.objectStore(Gn).get(Pu(n));return await t.done,r}catch(e){if(e instanceof He)Ye.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(t.message)}}}async function Wa(n,e){try{const r=(await bu()).transaction(Gn,"readwrite");await r.objectStore(Gn).put(e,Pu(n)),await r.done}catch(t){if(t instanceof He)Ye.warn(t.message);else{const r=mt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(r.message)}}}function Pu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=1024,np=30;class rp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new sp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ka();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>np){const a=op(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ye.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ka(),{heartbeatsToSend:r,unsentEntries:i}=ip(this._heartbeatsCache.heartbeats),o=Wr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Ye.warn(t),""}}}function Ka(){return new Date().toISOString().substring(0,10)}function ip(n,e=tp){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Qa(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Qa(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class sp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zd()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ep(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qa(n){return Wr(JSON.stringify({version:2,heartbeats:n})).length}function op(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n){Ot(new yt("platform-logger",e=>new vf(e),"PRIVATE")),Ot(new yt("heartbeat",e=>new rp(e),"PRIVATE")),Ue(vs,Ha,n),Ue(vs,Ha,"esm2017"),Ue("fire-js","")}ap("");var cp="firebase",up="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(cp,up,"app");function Ws(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Su(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lp=Su,Cu=new nr("auth","Firebase",Su());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new zs("@firebase/auth");function hp(n,...e){Qr.logLevel<=H.WARN&&Qr.warn(`Auth (${Bt}): ${n}`,...e)}function Ur(n,...e){Qr.logLevel<=H.ERROR&&Qr.error(`Auth (${Bt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,...e){throw Ks(n,...e)}function Fe(n,...e){return Ks(n,...e)}function ku(n,e,t){const r=Object.assign(Object.assign({},lp()),{[e]:t});return new nr("auth","Firebase",r).create(e,{appName:n.name})}function Vt(n){return ku(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ks(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Cu.create(n,...e)}function F(n,e,...t){if(!n)throw Ks(e,...t)}function Qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ur(e),new Error(e)}function et(n,e){n||Qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dp(){return Xa()==="http:"||Xa()==="https:"}function Xa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dp()||Bd()||"connection"in navigator)?navigator.onLine:!0}function pp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,et(t>e,"Short delay should be less than long delay!"),this.isMobile=xd()||jd()}get(){return fp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,e){et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_p=new ir(3e4,6e4);function Xs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fn(n,e,t,r,i={}){return Du(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=rr(Object.assign({key:n.config.apiKey},a)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:h},o);return Fd()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Ft(n.emulatorConfig.host)&&(d.credentials="include"),Vu.fetch()(await Nu(n,n.config.apiHost,t,u),d)})}async function Du(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},mp),e);try{const i=new vp(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw kr(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw kr(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw kr(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw kr(n,"user-disabled",a);const p=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ku(n,p,d);Ze(n,p)}}catch(i){if(i instanceof He)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function yp(n,e,t,r,i={}){const o=await fn(n,e,t,r,i);return"mfaPendingCredential"in o&&Ze(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Nu(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?Qs(n.config,i):`${n.config.apiScheme}://${i}`;return gp.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class vp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),_p.get())})}}function kr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Fe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(n,e){return fn(n,"POST","/v1/accounts:delete",e)}async function Xr(n,e){return fn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tp(n,e=!1){const t=be(n),r=await t.getIdToken(e),i=Js(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Bn(is(i.auth_time)),issuedAtTime:Bn(is(i.iat)),expirationTime:Bn(is(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function is(n){return Number(n)*1e3}function Js(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ur("JWT malformed, contained fewer than 3 sections"),null;try{const i=_u(t);return i?JSON.parse(i):(Ur("Failed to decode base64 JWT payload"),null)}catch(i){return Ur("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ja(n){const e=Js(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof He&&Ip(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ip({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Wn(n,Xr(t,{idToken:r}));F(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const a=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Ou(o.providerUserInfo):[],u=Rp(n.providerData,a),h=n.isAnonymous,d=!(n.email&&o.passwordHash)&&!(u!=null&&u.length),p=h?d:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new ws(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function Ap(n){const e=be(n);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rp(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ou(n){return n.map(e=>{var{providerId:t}=e,r=Ws(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(n,e){const t=await Du(n,{},async()=>{const r=rr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await Nu(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Vu.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pp(n,e){return fn(n,"POST","/v2/accounts:revokeToken",Xs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ja(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=Ja(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await bp(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new en;return r&&(F(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Oe{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=Ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ws(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tp(this,e)}reload(){return Ap(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ne(this.auth.app))return Promise.reject(Vt(this.auth));const e=await this.getIdToken();return await Wn(this,Ep(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,a,u,h,d,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(i=t.email)!==null&&i!==void 0?i:void 0,b=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(u=t.tenantId)!==null&&u!==void 0?u:void 0,C=(h=t._redirectEventId)!==null&&h!==void 0?h:void 0,$=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:U,emailVerified:z,isAnonymous:le,providerData:J,stsTokenManager:E}=t;F(U&&E,e,"internal-error");const m=en.fromJSON(this.name,E);F(typeof U=="string",e,"internal-error"),at(y,e.name),at(T,e.name),F(typeof z=="boolean",e,"internal-error"),F(typeof le=="boolean",e,"internal-error"),at(b,e.name),at(k,e.name),at(D,e.name),at(C,e.name),at($,e.name),at(M,e.name);const _=new Oe({uid:U,auth:e,email:T,emailVerified:z,displayName:y,isAnonymous:le,photoURL:k,phoneNumber:b,tenantId:D,stsTokenManager:m,createdAt:$,lastLoginAt:M});return J&&Array.isArray(J)&&(_.providerData=J.map(v=>Object.assign({},v))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new en;i.updateFromServerResponse(t);const o=new Oe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jr(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];F(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Ou(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new en;u.updateFromIdToken(r);const h=new Oe({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ws(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Map;function Xe(n){et(n instanceof Function,"Expected a class definition");let e=Ya.get(n);return e?(et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ya.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lu.type="NONE";const Za=Lu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Fr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Fr("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xr(this.auth,{idToken:e}).catch(()=>{});return t?Oe._fromGetAccountInfoResponse(this.auth,t,e):null}return Oe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(Xe(Za),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||Xe(Za);const a=Fr(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let y;if(typeof p=="string"){const T=await Xr(e,{idToken:p}).catch(()=>{});if(!T)break;y=await Oe._fromGetAccountInfoResponse(e,T,p)}else y=Oe._fromJSON(e,p);d!==o&&(u=y),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new tn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new tn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ju(e))return"Blackberry";if($u(e))return"Webos";if(xu(e))return"Safari";if((e.includes("chrome/")||Uu(e))&&!e.includes("edge/"))return"Chrome";if(Bu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mu(n=Ie()){return/firefox\//i.test(n)}function xu(n=Ie()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uu(n=Ie()){return/crios\//i.test(n)}function Fu(n=Ie()){return/iemobile/i.test(n)}function Bu(n=Ie()){return/android/i.test(n)}function ju(n=Ie()){return/blackberry/i.test(n)}function $u(n=Ie()){return/webos/i.test(n)}function Ys(n=Ie()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Sp(n=Ie()){var e;return Ys(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cp(){return $d()&&document.documentMode===10}function qu(n=Ie()){return Ys(n)||Bu(n)||$u(n)||ju(n)||/windows phone/i.test(n)||Fu(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n,e=[]){let t;switch(n){case"Browser":t=ec(Ie());break;case"Worker":t=`${ec(Ie())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Bt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e={}){return fn(n,"GET","/v2/passwordPolicy",Xs(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp=6;class Np{constructor(e){var t,r,i,o;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Dp,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,a,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(t=h.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(a=h.containsNumericCharacter)!==null&&a!==void 0?a:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tc(this),this.idTokenSubscription=new tc(this),this.beforeStateQueue=new kp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xe(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xr(this,{idToken:e}),r=await Oe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ne(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ne(this.app))return Promise.reject(Vt(this));const t=e?be(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ne(this.app)?Promise.reject(Vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ne(this.app)?Promise.reject(Vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vp(this),t=new Np(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xe(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Ne(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zs(n){return be(n)}class tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xd(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lp(n){eo=n}function Mp(n){return eo.loadJS(n)}function xp(){return eo.gapiScript}function Up(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n,e){const t=pi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Nt(o,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function Bp(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Xe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jp(n,e,t){const r=Zs(n);F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Hu(e),{host:a,port:u}=$p(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},p=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){F(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),F(Nt(d,r.config.emulator)&&Nt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Ft(a)?($s(`${o}//${a}${h}`),qs("Auth",!0)):qp()}function Hu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function $p(n){const e=Hu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:nc(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:nc(a)}}}function nc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function qp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,t){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(n,e){return yp(n,"POST","/v1/accounts:signInWithIdp",Xs(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="http://localhost";class Lt extends Gu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=Ws(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Lt(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:zp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Wu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends sr{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends sr{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends sr{constructor(){super("twitter.com")}static credential(e,t){return Lt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ht.credential(t,r)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Oe._fromIdTokenResponse(e,r,i),a=rc(r);return new sn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=rc(r);return new sn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function rc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends He{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Yr(e,t,r,i)}}function Ku(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Yr._fromErrorAndOperation(n,o,e,r):o})}async function Hp(n,e,t=!1){const r=await Wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e,t=!1){const{auth:r}=n;if(Ne(r.app))return Promise.reject(Vt(r));const i="reauthenticate";try{const o=await Wn(n,Ku(r,i,e,n),t);F(o.idToken,r,"internal-error");const a=Js(o.idToken);F(a,r,"internal-error");const{sub:u}=a;return F(n.uid===u,r,"user-mismatch"),sn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(n,e,t=!1){if(Ne(n.app))return Promise.reject(Vt(n));const r="signIn",i=await Ku(n,r,e),o=await sn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}function Kp(n,e,t,r){return be(n).onIdTokenChanged(e,t,r)}function Qp(n,e,t){return be(n).beforeAuthStateChanged(e,t)}function Xp(n,e,t,r){return be(n).onAuthStateChanged(e,t,r)}function Jp(n){return be(n).signOut()}const Zr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Zr,"1"),this.storage.removeItem(Zr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=1e3,Zp=10;class Xu extends Qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);Cp()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zp):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Yp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xu.type="LOCAL";const em=Xu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ju.type="SESSION";const Yu=Ju;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new mi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await tm(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=to("",20);i.port1.start();const p=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const T=y;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(T.data.response);break;default:clearTimeout(p),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return window}function rm(n){Be().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return typeof Be().WorkerGlobalScope<"u"&&typeof Be().importScripts=="function"}async function im(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sm(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function om(){return Zu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el="firebaseLocalStorageDb",am=1,ei="firebaseLocalStorage",tl="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gi(n,e){return n.transaction([ei],e?"readwrite":"readonly").objectStore(ei)}function cm(){const n=indexedDB.deleteDatabase(el);return new or(n).toPromise()}function As(){const n=indexedDB.open(el,am);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ei,{keyPath:tl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ei)?e(r):(r.close(),await cm(),e(await As()))})})}async function ic(n,e,t){const r=gi(n,!0).put({[tl]:e,value:t});return new or(r).toPromise()}async function um(n,e){const t=gi(n,!1).get(e),r=await new or(t).toPromise();return r===void 0?null:r.value}function sc(n,e){const t=gi(n,!0).delete(e);return new or(t).toPromise()}const lm=800,hm=3;class nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await As(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>hm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mi._getInstance(om()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await im(),!this.activeServiceWorker)return;this.sender=new nm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await As();return await ic(e,Zr,"1"),await sc(e,Zr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ic(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>um(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=gi(i,!1).getAll();return new or(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nl.type="LOCAL";const dm=nl;new ir(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(n,e){return e?Xe(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Gu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pm(n){return Wp(n.auth,new no(n),n.bypassAuthState)}function mm(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Gp(t,new no(n),n.bypassAuthState)}async function gm(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),Hp(t,new no(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pm;case"linkViaPopup":case"linkViaRedirect":return gm;case"reauthViaPopup":case"reauthViaRedirect":return mm;default:Ze(this.auth,"internal-error")}}resolve(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new ir(2e3,1e4);class Zt extends rl{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Zt.currentPopupAction&&Zt.currentPopupAction.cancel(),Zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){et(this.filter.length===1,"Popup operations only handle one event");const e=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_m.get())};e()}}Zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="pendingRedirect",Br=new Map;class vm extends rl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Br.get(this.auth._key());if(!e){try{const r=await Em(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Br.set(this.auth._key(),e)}return this.bypassAuthState||Br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Em(n,e){const t=wm(e),r=Im(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Tm(n,e){Br.set(n._key(),e)}function Im(n){return Xe(n._redirectPersistence)}function wm(n){return Fr(ym,n.config.apiKey,n.name)}async function Am(n,e,t=!1){if(Ne(n.app))return Promise.reject(Vt(n));const r=Zs(n),i=fm(r,e),a=await new vm(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=10*60*1e3;class bm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!il(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rm&&this.cachedEventUids.clear(),this.cachedEventUids.has(oc(e))}saveEventToCache(e){this.cachedEventUids.add(oc(e)),this.lastProcessedEventTime=Date.now()}}function oc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function il({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return il(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(n,e={}){return fn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,km=/^https?/;async function Vm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Sm(n);for(const t of e)try{if(Dm(t))return}catch{}Ze(n,"unauthorized-domain")}function Dm(n){const e=Is(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!km.test(t))return!1;if(Cm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new ir(3e4,6e4);function ac(){const n=Be().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Om(n){return new Promise((e,t)=>{var r,i,o;function a(){ac(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ac(),t(Fe(n,"network-request-failed"))},timeout:Nm.get()})}if(!((i=(r=Be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Be().gapi)===null||o===void 0)&&o.load)a();else{const u=Up("iframefcb");return Be()[u]=()=>{gapi.load?a():t(Fe(n,"network-request-failed"))},Mp(`${xp()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw jr=null,e})}let jr=null;function Lm(n){return jr=jr||Om(n),jr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=new ir(5e3,15e3),xm="__/auth/iframe",Um="emulator/auth/iframe",Fm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jm(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qs(e,Um):`https://${n.config.authDomain}/${xm}`,r={apiKey:e.apiKey,appName:n.name,v:Bt},i=Bm.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${rr(r).slice(1)}`}async function $m(n){const e=await Lm(n),t=Be().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:jm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fm,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=Fe(n,"network-request-failed"),u=Be().setTimeout(()=>{o(a)},Mm.get());function h(){Be().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zm=500,Hm=600,Gm="_blank",Wm="http://localhost";class cc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Km(n,e,t,r=zm,i=Hm){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},qm),{width:r.toString(),height:i.toString(),top:o,left:a}),d=Ie().toLowerCase();t&&(u=Uu(d)?Gm:t),Mu(d)&&(e=e||Wm,h.scrollbars="yes");const p=Object.entries(h).reduce((T,[b,k])=>`${T}${b}=${k},`,"");if(Sp(d)&&u!=="_self")return Qm(e||"",u),new cc(null);const y=window.open(e||"",u,p);F(y,n,"popup-blocked");try{y.focus()}catch{}return new cc(y)}function Qm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="__/auth/handler",Jm="emulator/auth/handler",Ym=encodeURIComponent("fac");async function uc(n,e,t,r,i,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Bt,eventId:i};if(e instanceof Wu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Qd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof sr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const h=await n._getAppCheckToken(),d=h?`#${Ym}=${encodeURIComponent(h)}`:"";return`${Zm(n)}?${rr(u).slice(1)}${d}`}function Zm({config:n}){return n.emulator?Qs(n,Jm):`https://${n.authDomain}/${Xm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="webStorageSupport";class eg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yu,this._completeRedirectFn=Am,this._overrideRedirectResult=Tm}async _openPopup(e,t,r,i){var o;et((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await uc(e,t,r,Is(),i);return Km(e,a,to())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await uc(e,t,r,Is(),i);return rm(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(et(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await $m(e),r=new bm(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ss,{type:ss},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ss];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qu()||xu()||Ys()}}const tg=eg;var lc="@firebase/auth",hc="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ig(n){Ot(new yt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;F(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zu(n)},d=new Op(r,i,o,h);return Bp(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ot(new yt("auth-internal",e=>{const t=Zs(e.getProvider("auth").getImmediate());return(r=>new ng(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(lc,hc,rg(n)),Ue(lc,hc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=5*60,og=Tu("authIdTokenMaxAge")||sg;let dc=null;const ag=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>og)return;const i=t==null?void 0:t.token;dc!==i&&(dc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cg(n=Gs()){const e=pi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fp(n,{popupRedirectResolver:tg,persistence:[dm,em,Yu]}),r=Tu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=ag(o.toString());Qp(t,a,()=>a(t.currentUser)),Kp(t,u=>a(u))}}const i=yu("auth");return i&&jp(t,`http://${i}`),t}function ug(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Lp({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Fe("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",ug().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ig("Browser");var fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gt,sl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(v,I,A){for(var g=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)g[Ge-2]=arguments[Ge];return m.prototype[I].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var v=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)v[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;16>I;++I)v[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],I=E.g[2];var A=E.g[3],g=m+(A^_&(I^A))+v[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+v[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+v[2]+606105819&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+v[3]+3250441966&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(A^_&(I^A))+v[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+v[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+v[6]+2821735955&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+v[7]+4249261313&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(A^_&(I^A))+v[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+v[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+v[10]+4294925233&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+v[11]+2304563134&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(A^_&(I^A))+v[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(I^m&(_^I))+v[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=I+(_^A&(m^_))+v[14]+2792965006&4294967295,I=A+(g<<17&4294967295|g>>>15),g=_+(m^I&(A^m))+v[15]+1236535329&4294967295,_=I+(g<<22&4294967295|g>>>10),g=m+(I^A&(_^I))+v[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+v[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+v[11]+643717713&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+v[0]+3921069994&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^A&(_^I))+v[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+v[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+v[15]+3634488961&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+v[4]+3889429448&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^A&(_^I))+v[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+v[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+v[3]+4107603335&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+v[8]+1163531501&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(I^A&(_^I))+v[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^I&(m^_))+v[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=I+(m^_&(A^m))+v[7]+1735328473&4294967295,I=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(I^A))+v[12]+2368359562&4294967295,_=I+(g<<20&4294967295|g>>>12),g=m+(_^I^A)+v[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+v[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+v[11]+1839030562&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+v[14]+4259657740&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^A)+v[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+v[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+v[7]+4139469664&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+v[10]+3200236656&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^A)+v[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+v[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+v[3]+3572445317&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+v[6]+76029189&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(_^I^A)+v[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^I)+v[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=I+(A^m^_)+v[15]+530742520&4294967295,I=A+(g<<16&4294967295|g>>>16),g=_+(I^A^m)+v[2]+3299628645&4294967295,_=I+(g<<23&4294967295|g>>>9),g=m+(I^(_|~A))+v[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+v[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+v[14]+2878612391&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+v[5]+4237533241&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~A))+v[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+v[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+v[10]+4293915773&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+v[1]+2240044497&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~A))+v[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+v[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+v[6]+2734768916&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+v[13]+1309151649&4294967295,_=I+(g<<21&4294967295|g>>>11),g=m+(I^(_|~A))+v[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~I))+v[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=I+(m^(A|~_))+v[2]+718787259&4294967295,I=A+(g<<15&4294967295|g>>>17),g=_+(A^(I|~m))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(I+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,v=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(v[I++]=E.charCodeAt(A++),I==this.blockSize){i(this,v),I=0;break}}else for(;A<m;)if(v[I++]=E[A++],I==this.blockSize){i(this,v),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var v=0;32>v;v+=8)E[_++]=this.g[m]>>>v&255;return E};function o(E,m){var _=u;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],v=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;v&&A==m||(_[I]=A,v=!1)}this.g=_}var u={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return y;if(0>E)return C(d(-E));for(var m=[],_=1,v=0;E>=_;v++)m[v]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return C(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),v=y,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),g=parseInt(E.substring(I,I+A),m);8>A?(A=d(Math.pow(m,A)),v=v.j(A).add(d(g))):(v=v.j(_),v=v.add(d(g)))}return v}var y=h(0),T=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(D(this))return-C(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var v=this.i(_);E+=(0<=v?v:4294967296+v)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(D(this))return"-"+C(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,v="";;){var I=z(_,m).g;_=$(_,I.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=I,k(_))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function D(E){return E.h==-1}n.l=function(E){return E=$(this,E),D(E)?-1:k(E)?0:1};function C(E){for(var m=E.g.length,_=[],v=0;v<m;v++)_[v]=~E.g[v];return new a(_,~E.h).add(T)}n.abs=function(){return D(this)?C(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0,I=0;I<=m;I++){var A=v+(this.i(I)&65535)+(E.i(I)&65535),g=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);v=g>>>16,A&=65535,g&=65535,_[I]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(C(m))}n.j=function(E){if(k(this)||k(E))return y;if(D(this))return D(E)?C(this).j(C(E)):C(C(this).j(E));if(D(E))return C(this.j(C(E)));if(0>this.l(b)&&0>E.l(b))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],v=0;v<2*m;v++)_[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<E.g.length;I++){var A=this.i(v)>>>16,g=this.i(v)&65535,Ge=E.i(I)>>>16,yn=E.i(I)&65535;_[2*v+2*I]+=g*yn,M(_,2*v+2*I),_[2*v+2*I+1]+=A*yn,M(_,2*v+2*I+1),_[2*v+2*I+1]+=g*Ge,M(_,2*v+2*I+1),_[2*v+2*I+2]+=A*Ge,M(_,2*v+2*I+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function M(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function U(E,m){this.g=E,this.h=m}function z(E,m){if(k(m))throw Error("division by zero");if(k(E))return new U(y,y);if(D(E))return m=z(C(E),m),new U(C(m.g),C(m.h));if(D(m))return m=z(E,C(m)),new U(C(m.g),m.h);if(30<E.g.length){if(D(E)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=T,v=m;0>=v.l(E);)_=le(_),v=le(v);var I=J(_,1),A=J(v,1);for(v=J(v,2),_=J(_,2);!k(v);){var g=A.add(v);0>=g.l(E)&&(I=I.add(_),A=g),v=J(v,1),_=J(_,1)}return m=$(E,I.j(m)),new U(I,m)}for(I=y;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),v=Math.ceil(Math.log(_)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(_),g=A.j(m);D(g)||0<g.l(E);)_-=v,A=d(_),g=A.j(m);k(A)&&(A=T),I=I.add(A),E=$(E,g)}return new U(I,E)}n.A=function(E){return z(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)&E.i(v);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)|E.i(v);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],v=0;v<m;v++)_[v]=this.i(v)^E.i(v);return new a(_,this.h^E.h)};function le(E){for(var m=E.g.length+1,_=[],v=0;v<m;v++)_[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(_,E.h)}function J(E,m){var _=m>>5;m%=32;for(var v=E.g.length-_,I=[],A=0;A<v;A++)I[A]=0<m?E.i(A+_)>>>m|E.i(A+_+1)<<32-m:E.i(A+_);return new a(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,gt=a}).apply(typeof fc<"u"?fc:typeof self<"u"?self:typeof window<"u"?window:{});var Vr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ol,Mn,al,$r,Rs,cl,ul,ll;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,l){return s==Array.prototype||s==Object.prototype||(s[c]=l.value),s};function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vr=="object"&&Vr];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var w=s[f];if(!(w in l))break e;l=l[w]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}function o(s,c){s instanceof String&&(s+="");var l=0,f=!1,w={next:function(){if(!f&&l<s.length){var R=l++;return{value:c(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}i("Array.prototype.values",function(s){return s||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(s){var c=typeof s;return c=c!="object"?c:s?Array.isArray(s)?"array":c:"null",c=="array"||c=="object"&&typeof s.length=="number"}function d(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function p(s,c,l){return s.call.apply(s.bind,arguments)}function y(s,c,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),s.apply(c,w)}}return function(){return s.apply(c,arguments)}}function T(s,c,l){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,T.apply(null,arguments)}function b(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function k(s,c){function l(){}l.prototype=c.prototype,s.aa=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,w,R){for(var V=Array(arguments.length-2),X=2;X<arguments.length;X++)V[X-2]=arguments[X];return c.prototype[w].apply(f,V)}}function D(s){const c=s.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function C(s,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const w=s.length||0,R=f.length||0;s.length=w+R;for(let V=0;V<R;V++)s[w+V]=f[V]}else s.push(f)}}class ${constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(s){return/^[\s\xa0]*$/.test(s)}function U(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function z(s){return z[" "](s),s}z[" "]=function(){};var le=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function J(s,c,l){for(const f in s)c.call(l,s[f],f,s)}function E(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function m(s){const c={};for(const l in s)c[l]=s[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(s,c){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)s[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function I(s){var c=1;s=s.split(":");const l=[];for(;0<c&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function A(s){u.setTimeout(()=>{throw s},0)}function g(){var s=Ci;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class Ge{constructor(){this.h=this.g=null}add(c,l){const f=yn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var yn=new $(()=>new Hh,s=>s.reset());class Hh{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let vn,En=!1,Ci=new Ge,Fo=()=>{const s=u.Promise.resolve(void 0);vn=()=>{s.then(Gh)}};var Gh=()=>{for(var s;s=g();){try{s.h.call(s.g)}catch(l){A(l)}var c=yn;c.j(s),100>c.h&&(c.h++,s.next=c.g,c.g=s)}En=!1};function rt(){this.s=this.s,this.C=this.C}rt.prototype.s=!1,rt.prototype.ma=function(){this.s||(this.s=!0,this.N())},rt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Wh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return s}();function Tn(s,c){if(me.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget){if(le){e:{try{z(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Kh[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Tn.aa.h.call(this)}}k(Tn,me);var Kh={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var hr="closure_listenable_"+(1e6*Math.random()|0),Qh=0;function Xh(s,c,l,f,w){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=w,this.key=++Qh,this.da=this.fa=!1}function dr(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function fr(s){this.src=s,this.g={},this.h=0}fr.prototype.add=function(s,c,l,f,w){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var V=Vi(s,c,f,w);return-1<V?(c=s[V],l||(c.fa=!1)):(c=new Xh(c,this.src,R,!!f,w),c.fa=l,s.push(c)),c};function ki(s,c){var l=c.type;if(l in s.g){var f=s.g[l],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(dr(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Vi(s,c,l,f){for(var w=0;w<s.length;++w){var R=s[w];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return w}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Ni={};function Bo(s,c,l,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Bo(s,c[R],l,f,w);return null}return l=qo(l),s&&s[hr]?s.K(c,l,d(f)?!!f.capture:!1,w):Jh(s,c,l,!1,f,w)}function Jh(s,c,l,f,w,R){if(!c)throw Error("Invalid event type");var V=d(w)?!!w.capture:!!w,X=Li(s);if(X||(s[Di]=X=new fr(s)),l=X.add(c,l,f,V,R),l.proxy)return l;if(f=Yh(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)Wh||(w=V),w===void 0&&(w=!1),s.addEventListener(c.toString(),f,w);else if(s.attachEvent)s.attachEvent($o(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Yh(){function s(l){return c.call(s.src,s.listener,l)}const c=Zh;return s}function jo(s,c,l,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)jo(s,c[R],l,f,w);else f=d(f)?!!f.capture:!!f,l=qo(l),s&&s[hr]?(s=s.i,c=String(c).toString(),c in s.g&&(R=s.g[c],l=Vi(R,l,f,w),-1<l&&(dr(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete s.g[c],s.h--)))):s&&(s=Li(s))&&(c=s.g[c.toString()],s=-1,c&&(s=Vi(c,l,f,w)),(l=-1<s?c[s]:null)&&Oi(l))}function Oi(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[hr])ki(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent($o(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Li(c))?(ki(l,s),l.h==0&&(l.src=null,c[Di]=null)):dr(s)}}}function $o(s){return s in Ni?Ni[s]:Ni[s]="on"+s}function Zh(s,c){if(s.da)s=!0;else{c=new Tn(c,this);var l=s.listener,f=s.ha||s.src;s.fa&&Oi(s),s=l.call(f,c)}return s}function Li(s){return s=s[Di],s instanceof fr?s:null}var Mi="__closure_events_fn_"+(1e9*Math.random()>>>0);function qo(s){return typeof s=="function"?s:(s[Mi]||(s[Mi]=function(c){return s.handleEvent(c)}),s[Mi])}function ge(){rt.call(this),this.i=new fr(this),this.M=this,this.F=null}k(ge,rt),ge.prototype[hr]=!0,ge.prototype.removeEventListener=function(s,c,l,f){jo(this,s,c,l,f)};function we(s,c){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new me(c,s);else if(c instanceof me)c.target=c.target||s;else{var w=c;c=new me(f,s),v(c,w)}if(w=!0,l)for(var R=l.length-1;0<=R;R--){var V=c.g=l[R];w=pr(V,f,!0,c)&&w}if(V=c.g=s,w=pr(V,f,!0,c)&&w,w=pr(V,f,!1,c)&&w,l)for(R=0;R<l.length;R++)V=c.g=l[R],w=pr(V,f,!1,c)&&w}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var s=this.i,c;for(c in s.g){for(var l=s.g[c],f=0;f<l.length;f++)dr(l[f]);delete s.g[c],s.h--}}this.F=null},ge.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},ge.prototype.L=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function pr(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var V=c[R];if(V&&!V.da&&V.capture==l){var X=V.listener,he=V.ha||V.src;V.fa&&ki(s.i,V),w=X.call(he,f)!==!1&&w}}return w&&!f.defaultPrevented}function zo(s,c,l){if(typeof s=="function")l&&(s=T(s,l));else if(s&&typeof s.handleEvent=="function")s=T(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(s,c||0)}function Ho(s){s.g=zo(()=>{s.g=null,s.i&&(s.i=!1,Ho(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class ed extends rt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ho(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function In(s){rt.call(this),this.h=s,this.g={}}k(In,rt);var Go=[];function Wo(s){J(s.g,function(c,l){this.g.hasOwnProperty(l)&&Oi(c)},s),s.g={}}In.prototype.N=function(){In.aa.N.call(this),Wo(this)},In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xi=u.JSON.stringify,td=u.JSON.parse,nd=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function Ui(){}Ui.prototype.h=null;function Ko(s){return s.h||(s.h=s.i())}function Qo(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fi(){me.call(this,"d")}k(Fi,me);function Bi(){me.call(this,"c")}k(Bi,me);var Rt={},Xo=null;function mr(){return Xo=Xo||new ge}Rt.La="serverreachability";function Jo(s){me.call(this,Rt.La,s)}k(Jo,me);function An(s){const c=mr();we(c,new Jo(c))}Rt.STAT_EVENT="statevent";function Yo(s,c){me.call(this,Rt.STAT_EVENT,s),this.stat=c}k(Yo,me);function Ae(s){const c=mr();we(c,new Yo(c,s))}Rt.Ma="timingevent";function Zo(s,c){me.call(this,Rt.Ma,s),this.size=c}k(Zo,me);function Rn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},c)}function bn(){this.g=!0}bn.prototype.xa=function(){this.g=!1};function rd(s,c,l,f,w,R){s.info(function(){if(s.g)if(R)for(var V="",X=R.split("&"),he=0;he<X.length;he++){var K=X[he].split("=");if(1<K.length){var _e=K[0];K=K[1];var ye=_e.split("_");V=2<=ye.length&&ye[1]=="type"?V+(_e+"="+K+"&"):V+(_e+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+l+`
`+V})}function id(s,c,l,f,w,R,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+l+`
`+R+" "+V})}function Ht(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+od(s,l)+(f?" "+f:"")})}function sd(s,c){s.info(function(){return"TIMEOUT: "+c})}bn.prototype.info=function(){};function od(s,c){if(!s.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<w.length;V++)w[V]=""}}}}return xi(l)}catch{return c}}var gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ea={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ji;function _r(){}k(_r,Ui),_r.prototype.g=function(){return new XMLHttpRequest},_r.prototype.i=function(){return{}},ji=new _r;function it(s,c,l,f){this.j=s,this.i=c,this.l=l,this.R=f||1,this.U=new In(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ta}function ta(){this.i=null,this.g="",this.h=!1}var na={},$i={};function qi(s,c,l){s.L=1,s.v=Tr(We(c)),s.m=l,s.P=!0,ra(s,null)}function ra(s,c){s.F=Date.now(),yr(s),s.A=We(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),_a(l.i,"t",f),s.C=0,l=s.j.J,s.h=new ta,s.g=La(s.j,l?c:null,!s.m),0<s.O&&(s.M=new ed(T(s.Y,s,s.g),s.O)),c=s.U,l=s.g,f=s.ca;var w="readystatechange";Array.isArray(w)||(w&&(Go[0]=w.toString()),w=Go);for(var R=0;R<w.length;R++){var V=Bo(l,w[R],f||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,c)):(s.u="GET",s.g.ea(s.A,s.u,null,c)),An(),rd(s.i,s.u,s.A,s.l,s.R,s.m)}it.prototype.ca=function(s){s=s.target;const c=this.M;c&&Ke(s)==3?c.j():this.Y(s)},it.prototype.Y=function(s){try{if(s==this.g)e:{const ye=Ke(this.g);var c=this.g.Ba();const Kt=this.g.Z();if(!(3>ye)&&(ye!=3||this.g&&(this.h.h||this.g.oa()||Aa(this.g)))){this.J||ye!=4||c==7||(c==8||0>=Kt?An(3):An(2)),zi(this);var l=this.g.Z();this.X=l;t:if(ia(this)){var f=Aa(this.g);s="";var w=f.length,R=Ke(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),Pn(this);var V="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,s+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,id(this.i,this.u,this.A,this.l,this.R,ye,l),this.o){if(this.T&&!this.K){t:{if(this.g){var X,he=this.g;if((X=he.g?he.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(X)){var K=X;break t}}K=null}if(l=K)Ht(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hi(this,l);else{this.o=!1,this.s=3,Ae(12),bt(this),Pn(this);break e}}if(this.P){l=!0;let De;for(;!this.J&&this.C<V.length;)if(De=ad(this,V),De==$i){ye==4&&(this.s=4,Ae(14),l=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(De==na){this.s=4,Ae(15),Ht(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else Ht(this.i,this.l,De,null),Hi(this,De);if(ia(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ye!=4||V.length!=0||this.h.h||(this.s=1,Ae(16),l=!1),this.o=this.o&&l,!l)Ht(this.i,this.l,V,"[Invalid Chunked Response]"),bt(this),Pn(this);else if(0<V.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ji(_e),_e.M=!0,Ae(11))}}else Ht(this.i,this.l,V,null),Hi(this,V);ye==4&&bt(this),this.o&&!this.J&&(ye==4?Va(this.j,this):(this.o=!1,yr(this)))}else Ad(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),bt(this),Pn(this)}}}catch{}finally{}};function ia(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function ad(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?$i:(l=Number(c.substring(l,f)),isNaN(l)?na:(f+=1,f+l>c.length?$i:(c=c.slice(f,f+l),s.C=f+l,c)))}it.prototype.cancel=function(){this.J=!0,bt(this)};function yr(s){s.S=Date.now()+s.I,sa(s,s.I)}function sa(s,c){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Rn(T(s.ba,s),c)}function zi(s){s.B&&(u.clearTimeout(s.B),s.B=null)}it.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(sd(this.i,this.A),this.L!=2&&(An(),Ae(17)),bt(this),this.s=2,Pn(this)):sa(this,this.S-s)};function Pn(s){s.j.G==0||s.J||Va(s.j,s)}function bt(s){zi(s);var c=s.M;c&&typeof c.ma=="function"&&c.ma(),s.M=null,Wo(s.U),s.g&&(c=s.g,s.g=null,c.abort(),c.ma())}function Hi(s,c){try{var l=s.j;if(l.G!=0&&(l.g==s||Gi(l.h,s))){if(!s.K&&Gi(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Pr(l),Rr(l);else break e;Xi(l),Ae(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=Rn(T(l.Za,l),6e3));if(1>=ca(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else St(l,11)}else if((s.K||l.g==s)&&Pr(l),!M(c))for(w=l.Da.g.parse(c),c=0;c<w.length;c++){let K=w[c];if(l.T=K[0],K=K[1],l.G==2)if(K[0]=="c"){l.K=K[1],l.ia=K[2];const _e=K[3];_e!=null&&(l.la=_e,l.j.info("VER="+l.la));const ye=K[4];ye!=null&&(l.Aa=ye,l.j.info("SVER="+l.Aa));const Kt=K[5];Kt!=null&&typeof Kt=="number"&&0<Kt&&(f=1.5*Kt,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const De=s.g;if(De){const Cr=De.g?De.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cr){var R=f.h;R.g||Cr.indexOf("spdy")==-1&&Cr.indexOf("quic")==-1&&Cr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Wi(R,R.h),R.h=null))}if(f.D){const Yi=De.g?De.g.getResponseHeader("X-HTTP-Session-Id"):null;Yi&&(f.ya=Yi,Y(f.I,f.D,Yi))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var V=s;if(f.qa=Oa(f,f.J?f.ia:null,f.W),V.K){ua(f.h,V);var X=V,he=f.L;he&&(X.I=he),X.B&&(zi(X),yr(X)),f.g=V}else Ca(f);0<l.i.length&&br(l)}else K[0]!="stop"&&K[0]!="close"||St(l,7);else l.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?St(l,7):Qi(l):K[0]!="noop"&&l.l&&l.l.ta(K),l.v=0)}}An(4)}catch{}}var cd=class{constructor(s,c){this.g=s,this.map=c}};function oa(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function aa(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function ca(s){return s.h?1:s.g?s.g.size:0}function Gi(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Wi(s,c){s.g?s.g.add(c):s.h=c}function ua(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}oa.prototype.cancel=function(){if(this.i=la(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function la(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.D);return c}return D(s.i)}function ud(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var c=[],l=s.length,f=0;f<l;f++)c.push(s[f]);return c}c=[],l=0;for(f in s)c[l++]=s[f];return c}function ld(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var c=[];s=s.length;for(var l=0;l<s;l++)c.push(l);return c}c=[],l=0;for(const f in s)c[l++]=f;return c}}}function ha(s,c){if(s.forEach&&typeof s.forEach=="function")s.forEach(c,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,c,void 0);else for(var l=ld(s),f=ud(s),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],l&&l[R],s)}var da=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hd(s,c){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),w=null;if(0<=f){var R=s[l].substring(0,f);w=s[l].substring(f+1)}else R=s[l];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Pt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Pt){this.h=s.h,vr(this,s.j),this.o=s.o,this.g=s.g,Er(this,s.s),this.l=s.l;var c=s.i,l=new kn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),fa(this,l),this.m=s.m}else s&&(c=String(s).match(da))?(this.h=!1,vr(this,c[1]||"",!0),this.o=Sn(c[2]||""),this.g=Sn(c[3]||"",!0),Er(this,c[4]),this.l=Sn(c[5]||"",!0),fa(this,c[6]||"",!0),this.m=Sn(c[7]||"")):(this.h=!1,this.i=new kn(null,this.h))}Pt.prototype.toString=function(){var s=[],c=this.j;c&&s.push(Cn(c,pa,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Cn(c,pa,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Cn(l,l.charAt(0)=="/"?pd:fd,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Cn(l,gd)),s.join("")};function We(s){return new Pt(s)}function vr(s,c,l){s.j=l?Sn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Er(s,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);s.s=c}else s.s=null}function fa(s,c,l){c instanceof kn?(s.i=c,_d(s.i,s.h)):(l||(c=Cn(c,md)),s.i=new kn(c,s.h))}function Y(s,c,l){s.i.set(c,l)}function Tr(s){return Y(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Sn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Cn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,dd),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function dd(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var pa=/[#\/\?@]/g,fd=/[#\?:]/g,pd=/[#\?]/g,md=/[#\?@]/g,gd=/#/g;function kn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function st(s){s.g||(s.g=new Map,s.h=0,s.i&&hd(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=kn.prototype,n.add=function(s,c){st(this),this.i=null,s=Gt(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function ma(s,c){st(s),c=Gt(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function ga(s,c){return st(s),c=Gt(s,c),s.g.has(c)}n.forEach=function(s,c){st(this),this.g.forEach(function(l,f){l.forEach(function(w){s.call(c,w,f,this)},this)},this)},n.na=function(){st(this);const s=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const w=s[f];for(let R=0;R<w.length;R++)l.push(c[f])}return l},n.V=function(s){st(this);let c=[];if(typeof s=="string")ga(this,s)&&(c=c.concat(this.g.get(Gt(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)c=c.concat(s[l])}return c},n.set=function(s,c){return st(this),this.i=null,s=Gt(this,s),ga(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=this.V(s),0<s.length?String(s[0]):c):c};function _a(s,c,l){ma(s,c),0<l.length&&(s.i=null,s.g.set(Gt(s,c),D(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var w=R;V[f]!==""&&(w+="="+encodeURIComponent(String(V[f]))),s.push(w)}}return this.i=s.join("&")};function Gt(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function _d(s,c){c&&!s.j&&(st(s),s.i=null,s.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(ma(this,f),_a(this,w,l))},s)),s.j=c}function yd(s,c){const l=new bn;if(u.Image){const f=new Image;f.onload=b(ot,l,"TestLoadImage: loaded",!0,c,f),f.onerror=b(ot,l,"TestLoadImage: error",!1,c,f),f.onabort=b(ot,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(ot,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function vd(s,c){const l=new bn,f=new AbortController,w=setTimeout(()=>{f.abort(),ot(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ot(l,"TestPingServer: ok",!0,c):ot(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ot(l,"TestPingServer: error",!1,c)})}function ot(s,c,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function Ed(){this.g=new nd}function Td(s,c,l){const f=l||"";try{ha(s,function(w,R){let V=w;d(w)&&(V=xi(w)),c.push(f+R+"="+encodeURIComponent(V))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function Ir(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Ir,Ui),Ir.prototype.g=function(){return new wr(this.l,this.j)},Ir.prototype.i=function(s){return function(){return s}}({});function wr(s,c){ge.call(this),this.D=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(wr,ge),n=wr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=c,this.readyState=1,Dn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(c.body=s),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ya(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function ya(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Vn(this):Dn(this),this.readyState==3&&ya(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,Vn(this))},n.Qa=function(s){this.g&&(this.response=s,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Dn(s)}n.setRequestHeader=function(s,c){this.u.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Dn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function va(s){let c="";return J(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Ki(s,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=va(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):Y(s,c,l))}function ee(s){ge.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ee,ge);var Id=/^https?$/i,wd=["POST","PUT"];n=ee.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ji.g(),this.v=this.o?Ko(this.o):Ko(ji),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){Ea(this,R);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),w=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(wd,c,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of l)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wa(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Ea(this,R)}};function Ea(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.m=5,Ta(s),Ar(s)}function Ta(s){s.A||(s.A=!0,we(s,"complete"),we(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,we(this,"complete"),we(this,"abort"),Ar(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ar(this,!0)),ee.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ia(this):this.bb())},n.bb=function(){Ia(this)};function Ia(s){if(s.h&&typeof a<"u"&&(!s.v[1]||Ke(s)!=4||s.Z()!=2)){if(s.u&&Ke(s)==4)zo(s.Ea,0,s);else if(we(s,"readystatechange"),Ke(s)==4){s.h=!1;try{const V=s.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=V===0){var w=String(s.D).match(da)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!Id.test(w?w.toLowerCase():"")}l=f}if(l)we(s,"complete"),we(s,"success");else{s.m=6;try{var R=2<Ke(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Ta(s)}}finally{Ar(s)}}}}function Ar(s,c){if(s.g){wa(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,c||we(s,"ready");try{l.onreadystatechange=f}catch{}}}function wa(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ke(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ke(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),td(c)}};function Aa(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Ad(s){const c={};s=(s.g&&2<=Ke(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(M(s[f]))continue;var l=I(s[f]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[w]||[];c[w]=R,R.push(l)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function Ra(s){this.Aa=0,this.i=[],this.j=new bn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nn("baseRetryDelayMs",5e3,s),this.cb=Nn("retryDelaySeedMs",1e4,s),this.Wa=Nn("forwardChannelMaxRetries",2,s),this.wa=Nn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new oa(s&&s.concurrentRequestLimit),this.Da=new Ed,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ra.prototype,n.la=8,n.G=1,n.connect=function(s,c,l,f){Ae(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Oa(this,null,this.W),br(this)};function Qi(s){if(ba(s),s.G==3){var c=s.U++,l=We(s.I);if(Y(l,"SID",s.K),Y(l,"RID",c),Y(l,"TYPE","terminate"),On(s,l),c=new it(s,s.j,c),c.L=2,c.v=Tr(We(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=La(c.j,null),c.g.ea(c.v)),c.F=Date.now(),yr(c)}Na(s)}function Rr(s){s.g&&(Ji(s),s.g.cancel(),s.g=null)}function ba(s){Rr(s),s.u&&(u.clearTimeout(s.u),s.u=null),Pr(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function br(s){if(!aa(s.h)&&!s.s){s.s=!0;var c=s.Ga;vn||Fo(),En||(vn(),En=!0),Ci.add(c,s),s.B=0}}function Rd(s,c){return ca(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=c.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Rn(T(s.Ga,s,c),Da(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const w=new it(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Sa(this,w,c),l=We(this.I),Y(l,"RID",s),Y(l,"CVER",22),this.D&&Y(l,"X-HTTP-Session-Id",this.D),On(this,l),R&&(this.O?c="headers="+encodeURIComponent(String(va(R)))+"&"+c:this.m&&Ki(l,this.m,R)),Wi(this.h,w),this.Ua&&Y(l,"TYPE","init"),this.P?(Y(l,"$req",c),Y(l,"SID","null"),w.T=!0,qi(w,l,null)):qi(w,l,c),this.G=2}}else this.G==3&&(s?Pa(this,s):this.i.length==0||aa(this.h)||Pa(this))};function Pa(s,c){var l;c?l=c.l:l=s.U++;const f=We(s.I);Y(f,"SID",s.K),Y(f,"RID",l),Y(f,"AID",s.T),On(s,f),s.m&&s.o&&Ki(f,s.m,s.o),l=new it(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),c&&(s.i=c.D.concat(s.i)),c=Sa(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Wi(s.h,l),qi(l,f,c)}function On(s,c){s.H&&J(s.H,function(l,f){Y(c,f,l)}),s.l&&ha({},function(l,f){Y(c,f,l)})}function Sa(s,c,l){l=Math.min(s.i.length,l);var f=s.l?T(s.l.Na,s.l,s):null;e:{var w=s.i;let R=-1;for(;;){const V=["count="+l];R==-1?0<l?(R=w[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let X=!0;for(let he=0;he<l;he++){let K=w[he].g;const _e=w[he].map;if(K-=R,0>K)R=Math.max(0,w[he].g-100),X=!1;else try{Td(_e,V,"req"+K+"_")}catch{f&&f(_e)}}if(X){f=V.join("&");break e}}}return s=s.i.splice(0,l),c.D=s,f}function Ca(s){if(!s.g&&!s.u){s.Y=1;var c=s.Fa;vn||Fo(),En||(vn(),En=!0),Ci.add(c,s),s.v=0}}function Xi(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Rn(T(s.Fa,s),Da(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,ka(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Rn(T(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),Rr(this),ka(this))};function Ji(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function ka(s){s.g=new it(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var c=We(s.qa);Y(c,"RID","rpc"),Y(c,"SID",s.K),Y(c,"AID",s.T),Y(c,"CI",s.F?"0":"1"),!s.F&&s.ja&&Y(c,"TO",s.ja),Y(c,"TYPE","xmlhttp"),On(s,c),s.m&&s.o&&Ki(c,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Tr(We(c)),l.m=null,l.P=!0,ra(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Rr(this),Xi(this),Ae(19))};function Pr(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Va(s,c){var l=null;if(s.g==c){Pr(s),Ji(s),s.g=null;var f=2}else if(Gi(s.h,c))l=c.D,ua(s.h,c),f=1;else return;if(s.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var w=s.B;f=mr(),we(f,new Zo(f,l)),br(s)}else Ca(s);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Rd(s,c)||f==2&&Xi(s)))switch(l&&0<l.length&&(c=s.h,c.i=c.i.concat(l)),w){case 1:St(s,5);break;case 4:St(s,10);break;case 3:St(s,6);break;default:St(s,2)}}}function Da(s,c){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*c}function St(s,c){if(s.j.info("Error code "+c),c==2){var l=T(s.fb,s),f=s.Xa;const w=!f;f=new Pt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||vr(f,"https"),Tr(f),w?yd(f.toString(),l):vd(f.toString(),l)}else Ae(2);s.G=0,s.l&&s.l.sa(c),Na(s),ba(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function Na(s){if(s.G=0,s.ka=[],s.l){const c=la(s.h);(c.length!=0||s.i.length!=0)&&(C(s.ka,c),C(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function Oa(s,c,l){var f=l instanceof Pt?We(l):new Pt(l);if(f.g!="")c&&(f.g=c+"."+f.g),Er(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Pt(null);f&&vr(R,f),c&&(R.g=c),w&&Er(R,w),l&&(R.l=l),f=R}return l=s.D,c=s.ya,l&&c&&Y(f,l,c),Y(f,"VER",s.la),On(s,f),f}function La(s,c,l){if(c&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Ca&&!s.pa?new ee(new Ir({eb:l})):new ee(s.pa),c.Ha(s.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ma(){}n=Ma.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Sr(){}Sr.prototype.g=function(s,c){return new Se(s,c)};function Se(s,c){ge.call(this),this.g=new Ra(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(s?s["X-WebChannel-Client-Profile"]=c.va:s={"X-WebChannel-Client-Profile":c.va}),this.g.S=s,(s=c&&c.Sb)&&!M(s)&&(this.g.m=s),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!M(c)&&(this.g.D=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new Wt(this)}k(Se,ge),Se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Se.prototype.close=function(){Qi(this.g)},Se.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=xi(s),s=l);c.i.push(new cd(c.Ya++,s)),c.G==3&&br(c)},Se.prototype.N=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,Se.aa.N.call(this)};function xa(s){Fi.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}k(xa,Fi);function Ua(){Bi.call(this),this.status=1}k(Ua,Bi);function Wt(s){this.g=s}k(Wt,Ma),Wt.prototype.ua=function(){we(this.g,"a")},Wt.prototype.ta=function(s){we(this.g,new xa(s))},Wt.prototype.sa=function(s){we(this.g,new Ua)},Wt.prototype.ra=function(){we(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Se.prototype.send=Se.prototype.o,Se.prototype.open=Se.prototype.m,Se.prototype.close=Se.prototype.close,ll=function(){return new Sr},ul=function(){return mr()},cl=Rt,Rs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,$r=gr,ea.COMPLETE="complete",al=ea,Qo.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Mn=Qo,ee.prototype.listenOnce=ee.prototype.L,ee.prototype.getLastError=ee.prototype.Ka,ee.prototype.getLastErrorCode=ee.prototype.Ba,ee.prototype.getStatus=ee.prototype.Z,ee.prototype.getResponseJson=ee.prototype.Oa,ee.prototype.getResponseText=ee.prototype.oa,ee.prototype.send=ee.prototype.ea,ee.prototype.setWithCredentials=ee.prototype.Ha,ol=ee}).apply(typeof Vr<"u"?Vr:typeof self<"u"?self:typeof window<"u"?window:{});const pc="@firebase/firestore",mc="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ee.UNAUTHENTICATED=new Ee(null),Ee.GOOGLE_CREDENTIALS=new Ee("google-credentials-uid"),Ee.FIRST_PARTY=new Ee("first-party-uid"),Ee.MOCK_USER=new Ee("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new zs("@firebase/firestore");function Qt(){return Mt.logLevel}function N(n,...e){if(Mt.logLevel<=H.DEBUG){const t=e.map(ro);Mt.debug(`Firestore (${pn}): ${n}`,...t)}}function tt(n,...e){if(Mt.logLevel<=H.ERROR){const t=e.map(ro);Mt.error(`Firestore (${pn}): ${n}`,...t)}}function on(n,...e){if(Mt.logLevel<=H.WARN){const t=e.map(ro);Mt.warn(`Firestore (${pn}): ${n}`,...t)}}function ro(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,hl(n,r,t)}function hl(n,e,t){let r=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw tt(r),new Error(r)}function Q(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||hl(e,i,r)}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends He{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ee.UNAUTHENTICATED))}shutdown(){}}class hg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class dg{constructor(e){this.t=e,this.currentUser=Ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _t,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _t)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new dl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new Ee(e)}}class fg{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ee.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pg{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new fg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mg{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ne(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new gc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new gc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=gg(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function bs(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return q(r,i);{const o=fl(),a=_g(o.encode(_c(n,t)),o.encode(_c(e,t)));return a!==0?a:q(r,i)}}t+=r>65535?2:1}return q(n.length,e.length)}function _c(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function _g(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function an(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=-62135596800,vc=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*vc);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yc)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vc}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-yc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ae(0,0))}static max(){return new B(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="__name__";class Me{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Me.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Me?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Me.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return q(e.length,t.length)}static compareSegments(e,t){const r=Me.isNumericId(e),i=Me.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Me.extractNumericId(e).compare(Me.extractNumericId(t)):bs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gt.fromString(e.substring(4,e.length-2))}}class te extends Me{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new te(t)}static emptyPath(){return new te([])}}const yg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends Me{construct(e,t,r){return new fe(e,t,r)}static isValidIdentifier(e){return yg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ec}static keyField(){return new fe([Ec])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new O(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new O(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new O(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new O(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(te.fromString(e))}static fromName(e){return new L(te.fromString(e).popFirst(5))}static empty(){return new L(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new te(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=-1;function vg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new vt(i,L.empty(),e)}function Eg(n){return new vt(n.readTime,n.key,Kn)}class vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new vt(B.min(),L.empty(),Kn)}static max(){return new vt(B.max(),L.empty(),Kn)}}function Tg(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Ig)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(i=>i?P.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new P((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>i(p))}})}static doWhile(e,t){return new P((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Ag(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}_i.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=-1;function yi(n){return n==null}function ti(n){return n===0&&1/n==-1/0}function Rg(n){return typeof n=="number"&&Number.isInteger(n)&&!ti(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="";function bg(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Tc(e)),e=Pg(n.get(t),e);return Tc(e)}function Pg(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case ml:t+="";break;default:t+=o}}return t}function Tc(n){return n+ml+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function gl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dr(this.root,e,this.comparator,!0)}}class Dr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r??de.RED,this.left=i??de.EMPTY,this.right=o??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new de(e??this.key,t??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return de.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new Z(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wc(this.data.getIterator())}getIteratorFrom(e){return new wc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class wc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new Le([])}unionWith(e){let t=new ce(fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Le(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return an(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new _l("Invalid base64 string: "+o):o}}(e);return new pe(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const Sg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=Sg.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?pe.fromBase64String(n):pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="server_timestamp",vl="__type__",El="__previous_value__",Tl="__local_write_time__";function so(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[vl])===null||t===void 0?void 0:t.stringValue)===yl}function vi(n){const e=n.mapValue.fields[El];return so(e)?vi(e):e}function Qn(n){const e=Et(n.mapValue.fields[Tl].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t,r,i,o,a,u,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const ni="(default)";class Xn{constructor(e,t){this.projectId=e,this.database=t||ni}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===ni}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="__type__",kg="__max__",Nr={mapValue:{}},wl="__vector__",ri="value";function It(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?so(n)?4:Dg(n)?9007199254740991:Vg(n)?10:11:x(28295,{value:n})}function qe(n,e){if(n===e)return!0;const t=It(n);if(t!==It(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Qn(n).isEqual(Qn(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Et(i.timestampValue),u=Et(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Tt(i.bytesValue).isEqual(Tt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return ne(i.geoPointValue.latitude)===ne(o.geoPointValue.latitude)&&ne(i.geoPointValue.longitude)===ne(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ne(i.integerValue)===ne(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=ne(i.doubleValue),u=ne(o.doubleValue);return a===u?ti(a)===ti(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return an(n.arrayValue.values||[],e.arrayValue.values||[],qe);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(Ic(a)!==Ic(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!qe(a[h],u[h])))return!1;return!0}(n,e);default:return x(52216,{left:n})}}function Jn(n,e){return(n.values||[]).find(t=>qe(t,e))!==void 0}function cn(n,e){if(n===e)return 0;const t=It(n),r=It(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=ne(o.integerValue||o.doubleValue),h=ne(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return Ac(n.timestampValue,e.timestampValue);case 4:return Ac(Qn(n),Qn(e));case 5:return bs(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Tt(o),h=Tt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=q(u[d],h[d]);if(p!==0)return p}return q(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=q(ne(o.latitude),ne(a.latitude));return u!==0?u:q(ne(o.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Rc(n.arrayValue,e.arrayValue);case 10:return function(o,a){var u,h,d,p;const y=o.fields||{},T=a.fields||{},b=(u=y[ri])===null||u===void 0?void 0:u.arrayValue,k=(h=T[ri])===null||h===void 0?void 0:h.arrayValue,D=q(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Rc(b,k)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===Nr.mapValue&&a===Nr.mapValue)return 0;if(o===Nr.mapValue)return 1;if(a===Nr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const T=bs(h[y],p[y]);if(T!==0)return T;const b=cn(u[h[y]],d[p[y]]);if(b!==0)return b}return q(h.length,p.length)}(n.mapValue,e.mapValue);default:throw x(23264,{Pe:t})}}function Ac(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=Et(n),r=Et(e),i=q(t.seconds,r.seconds);return i!==0?i:q(t.nanos,r.nanos)}function Rc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=cn(t[i],r[i]);if(o)return o}return q(t.length,r.length)}function un(n){return Ps(n)}function Ps(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Et(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Tt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=Ps(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Ps(t.fields[a])}`;return i+"}"}(n.mapValue):x(61005,{value:n})}function qr(n){switch(It(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vi(n);return e?16+qr(e):16;case 5:return 2*n.stringValue.length;case 6:return Tt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+qr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return jt(r.fields,(o,a)=>{i+=o.length+qr(a)}),i}(n.mapValue);default:throw x(13486,{value:n})}}function Ss(n){return!!n&&"integerValue"in n}function oo(n){return!!n&&"arrayValue"in n}function bc(n){return!!n&&"nullValue"in n}function Pc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function zr(n){return!!n&&"mapValue"in n}function Vg(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Il])===null||t===void 0?void 0:t.stringValue)===wl}function jn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=jn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=jn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Dg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===kg}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!zr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=jn(t)}setAll(e){let t=fe.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=jn(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());zr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];zr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){jt(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new ke(jn(this.value))}}function Al(n){const e=[];return jt(n.fields,(t,r)=>{const i=new fe([t]);if(zr(r)){const o=Al(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new Le(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Te(e,0,B.min(),B.min(),B.min(),ke.empty(),0)}static newFoundDocument(e,t,r,i){return new Te(e,1,t,B.min(),r,i,0)}static newNoDocument(e,t){return new Te(e,2,t,B.min(),B.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,B.min(),B.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.position=e,this.inclusive=t}}function Sc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=cn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Cc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ng(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{}class oe extends Rl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Lg(e,t,r):t==="array-contains"?new Ug(e,r):t==="in"?new Fg(e,r):t==="not-in"?new Bg(e,r):t==="array-contains-any"?new jg(e,r):new oe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Mg(e,r):new xg(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cn(t,this.value)):t!==null&&It(this.value)===It(t)&&this.matchesComparison(cn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ze extends Rl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ze(e,t)}matches(e){return bl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function bl(n){return n.op==="and"}function Pl(n){return Og(n)&&bl(n)}function Og(n){for(const e of n.filters)if(e instanceof ze)return!1;return!0}function Cs(n){if(n instanceof oe)return n.field.canonicalString()+n.op.toString()+un(n.value);if(Pl(n))return n.filters.map(e=>Cs(e)).join(",");{const e=n.filters.map(t=>Cs(t)).join(",");return`${n.op}(${e})`}}function Sl(n,e){return n instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&qe(r.value,i.value)}(n,e):n instanceof ze?function(r,i){return i instanceof ze&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&Sl(a,i.filters[u]),!0):!1}(n,e):void x(19439)}function Cl(n){return n instanceof oe?function(t){return`${t.field.canonicalString()} ${t.op} ${un(t.value)}`}(n):n instanceof ze?function(t){return t.op.toString()+" {"+t.getFilters().map(Cl).join(" ,")+"}"}(n):"Filter"}class Lg extends oe{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mg extends oe{constructor(e,t){super(e,"in",t),this.keys=kl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class xg extends oe{constructor(e,t){super(e,"not-in",t),this.keys=kl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function kl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Ug extends oe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oo(t)&&Jn(t.arrayValue,this.value)}}class Fg extends oe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Jn(this.value.arrayValue,t)}}class Bg extends oe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Jn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Jn(this.value.arrayValue,t)}}class jg extends oe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Jn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Ie=null}}function kc(n,e=null,t=[],r=[],i=null,o=null,a=null){return new $g(n,e,t,r,i,o,a)}function ao(n){const e=j(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Cs(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),yi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>un(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>un(r)).join(",")),e.Ie=t}return e.Ie}function co(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ng(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Cc(n.startAt,e.startAt)&&Cc(n.endAt,e.endAt)}function ks(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function qg(n,e,t,r,i,o,a,u){return new Ei(n,e,t,r,i,o,a,u)}function uo(n){return new Ei(n)}function Vc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zg(n){return n.collectionGroup!==null}function $n(n){const e=j(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ee.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ce(fe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ee.push(new si(o,r))}),t.has(fe.keyField().canonicalString())||e.Ee.push(new si(fe.keyField(),r))}return e.Ee}function je(n){const e=j(n);return e.de||(e.de=Hg(e,$n(n))),e.de}function Hg(n,e){if(n.limitType==="F")return kc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new si(i.field,o)});const t=n.endAt?new ii(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ii(n.startAt.position,n.startAt.inclusive):null;return kc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Vs(n,e,t){return new Ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ti(n,e){return co(je(n),je(e))&&n.limitType===e.limitType}function Vl(n){return`${ao(je(n))}|lt:${n.limitType}`}function Xt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Cl(i)).join(", ")}]`),yi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>un(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>un(i)).join(",")),`Target(${r})`}(je(n))}; limitType=${n.limitType})`}function Ii(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of $n(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=Sc(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,$n(r),i)||r.endAt&&!function(a,u,h){const d=Sc(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,$n(r),i))}(n,e)}function Gg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Dl(n){return(e,t)=>{let r=!1;for(const i of $n(n)){const o=Wg(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Wg(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?cn(h,d):x(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jt(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return gl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Z(L.comparator);function nt(){return Kg}const Nl=new Z(L.comparator);function xn(...n){let e=Nl;for(const t of n)e=e.insert(t.key,t);return e}function Ol(n){let e=Nl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function kt(){return qn()}function Ll(){return qn()}function qn(){return new $t(n=>n.toString(),(n,e)=>n.isEqual(e))}const Qg=new Z(L.comparator),Xg=new ce(L.comparator);function G(...n){let e=Xg;for(const t of n)e=e.add(t);return e}const Jg=new ce(q);function Yg(){return Jg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ti(e)?"-0":e}}function Ml(n){return{integerValue:""+n}}function Zg(n,e){return Rg(e)?Ml(e):lo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this._=void 0}}function e_(n,e,t){return n instanceof oi?function(i,o){const a={fields:{[vl]:{stringValue:yl},[Tl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&so(o)&&(o=vi(o)),o&&(a.fields[El]=o),{mapValue:a}}(t,e):n instanceof Yn?Ul(n,e):n instanceof Zn?Fl(n,e):function(i,o){const a=xl(i,o),u=Dc(a)+Dc(i.Re);return Ss(a)&&Ss(i.Re)?Ml(u):lo(i.serializer,u)}(n,e)}function t_(n,e,t){return n instanceof Yn?Ul(n,e):n instanceof Zn?Fl(n,e):t}function xl(n,e){return n instanceof ai?function(r){return Ss(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class oi extends wi{}class Yn extends wi{constructor(e){super(),this.elements=e}}function Ul(n,e){const t=Bl(e);for(const r of n.elements)t.some(i=>qe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Zn extends wi{constructor(e){super(),this.elements=e}}function Fl(n,e){let t=Bl(e);for(const r of n.elements)t=t.filter(i=>!qe(i,r));return{arrayValue:{values:t}}}class ai extends wi{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Dc(n){return ne(n.integerValue||n.doubleValue)}function Bl(n){return oo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function n_(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Yn&&i instanceof Yn||r instanceof Zn&&i instanceof Zn?an(r.elements,i.elements,qe):r instanceof ai&&i instanceof ai?qe(r.Re,i.Re):r instanceof oi&&i instanceof oi}(n.transform,e.transform)}class r_{constructor(e,t){this.version=e,this.transformResults=t}}class Je{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Je}static exists(e){return new Je(void 0,e)}static updateTime(e){return new Je(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ai{}function jl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ql(n.key,Je.none()):new ar(n.key,n.data,Je.none());{const t=n.data,r=ke.empty();let i=new ce(fe.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new qt(n.key,r,new Le(i.toArray()),Je.none())}}function i_(n,e,t){n instanceof ar?function(i,o,a){const u=i.value.clone(),h=Oc(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof qt?function(i,o,a){if(!Hr(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Oc(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll($l(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function zn(n,e,t,r){return n instanceof ar?function(o,a,u,h){if(!Hr(o.precondition,a))return u;const d=o.value.clone(),p=Lc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof qt?function(o,a,u,h){if(!Hr(o.precondition,a))return u;const d=Lc(o.fieldTransforms,h,a),p=a.data;return p.setAll($l(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(o,a,u){return Hr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function s_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=xl(r.transform,i||null);o!=null&&(t===null&&(t=ke.empty()),t.set(r.field,o))}return t||null}function Nc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&an(r,i,(o,a)=>n_(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ar extends Ai{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qt extends Ai{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function $l(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Oc(n,e,t){const r=new Map;Q(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,t_(a,u,t[i]))}return r}function Lc(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,e_(o,a,e))}return r}class ql extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class o_ extends Ai{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&i_(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ll();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=jl(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),G())}isEqual(e){return this.batchId===e.batchId&&an(this.mutations,e.mutations,(t,r)=>Nc(t,r))&&an(this.baseMutations,e.baseMutations,(t,r)=>Nc(t,r))}}class ho{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Q(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return Qg}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new ho(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re,W;function l_(n){switch(n){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function zl(n){if(n===void 0)return tt("GRPC error has no .code"),S.UNKNOWN;switch(n){case re.OK:return S.OK;case re.CANCELLED:return S.CANCELLED;case re.UNKNOWN:return S.UNKNOWN;case re.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case re.INTERNAL:return S.INTERNAL;case re.UNAVAILABLE:return S.UNAVAILABLE;case re.UNAUTHENTICATED:return S.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case re.NOT_FOUND:return S.NOT_FOUND;case re.ALREADY_EXISTS:return S.ALREADY_EXISTS;case re.PERMISSION_DENIED:return S.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case re.ABORTED:return S.ABORTED;case re.OUT_OF_RANGE:return S.OUT_OF_RANGE;case re.UNIMPLEMENTED:return S.UNIMPLEMENTED;case re.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:n})}}(W=re||(re={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new gt([4294967295,4294967295],0);function Mc(n){const e=fl().encode(n),t=new sl;return t.update(e),new Uint8Array(t.digest())}function xc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new gt([t,r],0),new gt([i,o],0)]}class fo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Un(`Invalid padding: ${t}`);if(r<0)throw new Un(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Un(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Un(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=gt.fromNumber(this.pe)}we(e,t,r){let i=e.add(t.multiply(gt.fromNumber(r)));return i.compare(h_)===1&&(i=new gt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Mc(e),[r,i]=xc(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);if(!this.Se(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new fo(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.pe===0)return;const t=Mc(e),[r,i]=xc(t);for(let o=0;o<this.hashCount;o++){const a=this.we(r,i,o);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Un extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,cr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ri(B.min(),i,new Z(q),nt(),G())}}class cr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new cr(r,t,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e,t,r,i){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=i}}class Hl{constructor(e,t){this.targetId=e,this.Ce=t}}class Gl{constructor(e,t,r=pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Uc{constructor(){this.Fe=0,this.Me=Fc(),this.xe=pe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=G(),t=G(),r=G();return this.Me.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:x(38017,{changeType:o})}}),new cr(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Fc()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Q(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class d_{constructor(e){this.ze=e,this.je=new Map,this.He=nt(),this.Je=Or(),this.Ye=Or(),this.Ze=new Z(q)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:x(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,i)=>{this.it(i)&&t(i)})}ot(e){const t=e.targetId,r=e.Ce.count,i=this._t(t);if(i){const o=i.target;if(ks(o))if(r===0){const a=new L(o.path);this.tt(t,a,Te.newNoDocument(a,B.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const u=this.ct(e),h=u?this.lt(u,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=Tt(r).toUint8Array()}catch(h){if(h instanceof _l)return on("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new fo(a,i,o)}catch(h){return on(h instanceof Un?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.pe===0?null:u}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.ze.Pt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.tt(t,o,null),i++)}),i}It(e){const t=new Map;this.je.forEach((o,a)=>{const u=this._t(a);if(u){if(o.current&&ks(u.target)){const h=new L(u.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Te.newNoDocument(h,e))}o.Le&&(t.set(a,o.qe()),o.Qe())}});let r=G();this.Ye.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.He.forEach((o,a)=>a.setReadTime(e));const i=new Ri(e,t,this.Ze,this.He,r);return this.He=nt(),this.Je=Or(),this.Ye=Or(),this.Ze=new Z(q),i}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,t)?i.$e(t,1):i.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Uc,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new ce(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ce(q),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Uc),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Or(){return new Z(L.comparator)}function Fc(){return new Z(L.comparator)}const f_={asc:"ASCENDING",desc:"DESCENDING"},p_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m_={and:"AND",or:"OR"};class g_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ds(n,e){return n.useProto3Json||yi(e)?e:{value:e}}function ci(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function __(n,e){return ci(n,e.toTimestamp())}function $e(n){return Q(!!n,49232),B.fromTimestamp(function(t){const r=Et(t);return new ae(r.seconds,r.nanos)}(n))}function po(n,e){return Ns(n,e).canonicalString()}function Ns(n,e){const t=function(i){return new te(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Kl(n){const e=te.fromString(n);return Q(Zl(e),10190,{key:e.toString()}),e}function Os(n,e){return po(n.databaseId,e.path)}function os(n,e){const t=Kl(e);if(t.get(1)!==n.databaseId.projectId)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Xl(t))}function Ql(n,e){return po(n.databaseId,e)}function y_(n){const e=Kl(n);return e.length===4?te.emptyPath():Xl(e)}function Ls(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Xl(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Bc(n,e,t){return{name:Os(n,e),fields:t.value.mapValue.fields}}function v_(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string",58123),pe.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:zl(d.code);return new O(p,d.message||"")}(a);t=new Gl(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=os(n,r.document.name),o=$e(r.document.updateTime),a=r.document.createTime?$e(r.document.createTime):B.min(),u=new ke({mapValue:{fields:r.document.fields}}),h=Te.newFoundDocument(i,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new Gr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=os(n,r.document),o=r.readTime?$e(r.readTime):B.min(),a=Te.newNoDocument(i,o),u=r.removedTargetIds||[];t=new Gr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=os(n,r.document),o=r.removedTargetIds||[];t=new Gr([],o,i,null)}else{if(!("filter"in e))return x(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new u_(i,o),u=r.targetId;t=new Hl(u,a)}}return t}function E_(n,e){let t;if(e instanceof ar)t={update:Bc(n,e.key,e.value)};else if(e instanceof ql)t={delete:Os(n,e.key)};else if(e instanceof qt)t={update:Bc(n,e.key,e.data),updateMask:C_(e.fieldMask)};else{if(!(e instanceof o_))return x(16599,{ft:e.type});t={verify:Os(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof oi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Yn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Zn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof ai)return{fieldPath:a.field.canonicalString(),increment:u.Re};throw x(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:__(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)}(n,e.precondition)),t}function T_(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?$e(i.updateTime):$e(o);return a.isEqual(B.min())&&(a=$e(o)),new r_(a,i.transformResults||[])}(t,e))):[]}function I_(n,e){return{documents:[Ql(n,e.path)]}}function w_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ql(n,i);const o=function(d){if(d.length!==0)return Yl(ze.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(T){return{field:Jt(T.field),direction:b_(T.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Ds(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:i}}function A_(n){let e=y_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Q(r===1,65062);const p=t.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=function(y){const T=Jl(y);return T instanceof ze&&Pl(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(T=>function(k){return new si(Yt(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(T))}(t.orderBy));let u=null;t.limit&&(u=function(y){let T;return T=typeof y=="object"?y.value:y,yi(T)?null:T}(t.limit));let h=null;t.startAt&&(h=function(y){const T=!!y.before,b=y.values||[];return new ii(b,T)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const T=!y.before,b=y.values||[];return new ii(b,T)}(t.endAt)),qg(e,i,a,o,u,"F",h,d)}function R_(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Yt(t.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yt(t.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Yt(t.unaryFilter.field);return oe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yt(t.unaryFilter.field);return oe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}}(n):n.fieldFilter!==void 0?function(t){return oe.create(Yt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ze.create(t.compositeFilter.filters.map(r=>Jl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}}(t.compositeFilter.op))}(n):x(30097,{filter:n})}function b_(n){return f_[n]}function P_(n){return p_[n]}function S_(n){return m_[n]}function Jt(n){return{fieldPath:n.canonicalString()}}function Yt(n){return fe.fromServerFormat(n.fieldPath)}function Yl(n){return n instanceof oe?function(t){if(t.op==="=="){if(Pc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NAN"}};if(bc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NAN"}};if(bc(t.value))return{unaryFilter:{field:Jt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jt(t.field),op:P_(t.op),value:t.value}}}(n):n instanceof ze?function(t){const r=t.getFilters().map(i=>Yl(i));return r.length===1?r[0]:{compositeFilter:{op:S_(t.op),filters:r}}}(n):x(54877,{filter:n})}function C_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,r,i,o=B.min(),a=B.min(),u=pe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.wt=e}}function V_(n){const e=A_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Vs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(){this.Cn=new N_}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(vt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(vt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class N_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ce(te.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eh=41943040;class Pe{static withCacheSize(e){return new Pe(e,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe.DEFAULT_COLLECTION_PERCENTILE=10,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pe.DEFAULT=new Pe(eh,Pe.DEFAULT_COLLECTION_PERCENTILE,Pe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pe.DISABLED=new Pe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new ln(0)}static lr(){return new ln(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c="LruGarbageCollector",O_=1048576;function qc([n,e],[t,r]){const i=q(n,t);return i===0?q(e,r):i}class L_{constructor(e){this.Er=e,this.buffer=new ce(qc),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class M_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){N($c,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gn(t)?N($c,"Ignoring IndexedDB error during garbage collection: ",t):await mn(t)}await this.mr(3e5)})}}class x_{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(_i.le);const r=new L_(t);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(jc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),jc):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,i,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,a=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,u=Date.now(),this.removeTargets(e,r,t))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Qt()<=H.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:y})))}}function U_(n,e){return new x_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.changes=new $t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&zn(r.mutation,i,Le.empty(),ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,G()).next(()=>r))}getLocalViewOfDocuments(e,t,r=G()){const i=kt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=xn();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=kt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,G()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=nt();const a=qn(),u=function(){return qn()}();return t.forEach((h,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof qt)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),zn(p.mutation,d,p.mutation.getFieldMask(),ae.now())):a.set(d.key,Le.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return u.set(d,new B_(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(e,t){const r=qn();let i=new Z((a,u)=>a-u),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||Le.empty();p=u.applyToLocalView(d,p),r.set(h,p);const y=(i.get(u.batchId)||G()).add(h);i=i.insert(u.batchId,y)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,y=Ll();p.forEach(T=>{if(!o.has(T)){const b=jl(t.get(T),r.get(T));b!==null&&y.set(T,b),o=o.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):P.resolve(kt());let u=Kn,h=o;return a.next(d=>P.forEach(d,(p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(T=>{h=h.insert(p,T)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,G())).next(p=>({batchId:u,changes:Ol(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let i=xn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=xn();return this.indexManager.getCollectionParents(e,o).next(u=>P.forEach(u,h=>{const d=function(y,T){return new Ei(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,T)=>{a=a.insert(y,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Te.newInvalidDocument(p)))});let u=xn();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&zn(p.mutation,d,Le.empty(),ae.now()),Ii(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return P.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:$e(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(i){return{name:i.name,query:V_(i.bundledQuery),readTime:$e(i.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.overlays=new Z(L.comparator),this.Qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=kt();return P.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.bt(e,t,o)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const i=kt(),o=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new Z((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=kt(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=kt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return P.resolve(u)}bt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new c_(t,r));let o=this.Qr.get(t);o===void 0&&(o=G(),this.Qr.set(t,o)),this.Qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(){this.$r=new ce(ue.Ur),this.Kr=new ce(ue.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new ue(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new ue(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new L(new te([])),r=new ue(t,e),i=new ue(t,e+1),o=[];return this.Kr.forEachInRange([r,i],a=>{this.zr(a),o.push(a.key)}),o}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new L(new te([])),r=new ue(t,e),i=new ue(t,e+1);let o=G();return this.Kr.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new ue(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ue{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return L.comparator(e.key,t.key)||q(e.Zr,t.Zr)}static Wr(e,t){return q(e.Zr,t.Zr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new ce(ue.Ur)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new a_(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Xr=this.Xr.add(new ue(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ti(r),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?io:this.nr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ue(t,0),i=new ue(t,Number.POSITIVE_INFINITY),o=[];return this.Xr.forEachInRange([r,i],a=>{const u=this.ei(a.Zr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ce(q);return t.forEach(i=>{const o=new ue(i,0),a=new ue(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([o,a],u=>{r=r.add(u.Zr)})}),P.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const a=new ue(new L(o),0);let u=new ce(q);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.Zr)),!0)},a),P.resolve(this.ni(u))}ni(e){const t=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Q(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return P.forEach(t.mutations,i=>{const o=new ue(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new ue(t,0),i=this.Xr.firstAfterOrEqual(r);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.ii=e,this.docs=function(){return new Z(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=nt();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Te.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=nt();const a=t.path,u=new L(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Tg(Eg(p),r)<=0||(i.has(p.key)||Ii(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(e,t,r,i){x(9500)}si(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new W_(this)}getSize(e){return P.resolve(this.size)}}class W_ extends F_{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.persistence=e,this.oi=new $t(t=>ao(t),co),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this._i=0,this.ai=new mo,this.targetCount=0,this.ui=ln.cr()}forEachTarget(e,t){return this.oi.forEach((r,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),P.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new ln(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Tr(t),P.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.oi.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.oi.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),P.waitFor(o).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.ci={},this.overlays={},this.li=new _i(0),this.hi=!1,this.hi=!0,this.Pi=new z_,this.referenceDelegate=e(this),this.Ti=new K_(this),this.indexManager=new D_,this.remoteDocumentCache=function(i){return new G_(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new k_(t),this.Ei=new $_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new q_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new H_(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const i=new Q_(this.li.next());return this.referenceDelegate.di(),r(i).next(o=>this.referenceDelegate.Ai(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ri(e,t){return P.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class Q_ extends wg{constructor(e){super(),this.currentSequenceNumber=e}}class go{constructor(e){this.persistence=e,this.Vi=new mo,this.mi=null}static fi(e){return new go(e)}get gi(){if(this.mi)return this.mi;throw x(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.gi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.gi,r=>{const i=L.fromPath(r);return this.pi(e,i).next(o=>{o||t.removeEntry(i,B.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return P.or([()=>P.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class ui{constructor(e,t){this.persistence=e,this.yi=new $t(r=>bg(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=U_(this,t)}static fi(e,t){return new ui(e,t)}di(){}Ai(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return P.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(o=>o?P.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.si(e,a=>this.Dr(e,a,t).next(u=>{u||(r++,o.removeEntry(a,B.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qr(e.data.value)),t}Dr(e,t,r){return P.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.yi.get(t);return P.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.ds=r,this.As=i}static Rs(e,t){let r=G(),i=G();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new _o(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return qd()?8:Ag(Ie())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ws(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Ss(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new X_;return this.bs(e,t,a).next(u=>{if(o.result=u,this.fs)return this.Ds(e,t,a,u.size)})}).next(()=>o.result)}Ds(e,t,r,i){return r.documentReadCount<this.gs?(Qt()<=H.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Xt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),P.resolve()):(Qt()<=H.DEBUG&&N("QueryEngine","Query:",Xt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(Qt()<=H.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Xt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,je(t))):P.resolve())}ws(e,t){if(Vc(t))return P.resolve(null);let r=je(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Vs(t,null,"F"),r=je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=G(...o);return this.ys.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.vs(t,u);return this.Cs(t,d,a,h.readTime)?this.ws(e,Vs(t,null,"F")):this.Fs(e,d,t,h)}))})))}Ss(e,t,r,i){return Vc(t)||i.isEqual(B.min())?P.resolve(null):this.ys.getDocuments(e,r).next(o=>{const a=this.vs(t,o);return this.Cs(t,a,r,i)?P.resolve(null):(Qt()<=H.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xt(t)),this.Fs(e,a,t,vg(i,Kn)).next(u=>u))})}vs(e,t){let r=new ce(Dl(e));return t.forEach((i,o)=>{Ii(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}bs(e,t,r){return Qt()<=H.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Xt(t)),this.ys.getDocumentsMatchingQuery(e,t,vt.min(),r)}Fs(e,t,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="LocalStore",Y_=3e8;class Z_{constructor(e,t,r,i){this.persistence=e,this.Ms=t,this.serializer=i,this.xs=new Z(q),this.Os=new $t(o=>ao(o),co),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j_(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function ey(n,e,t,r){return new Z_(n,e,t,r)}async function nh(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=G();for(const d of i){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:u}))})})}function ty(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Bs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const y=d.batch,T=y.keys();let b=P.resolve();return T.forEach(k=>{b=b.next(()=>p.getEntry(h,k)).next(D=>{const C=d.docVersions.get(k);Q(C!==null,48541),D.version.compareTo(C)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(h,y))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=G();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function rh(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function ny(n,e){const t=j(n),r=e.snapshotVersion;let i=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});i=t.xs;const u=[];e.targetChanges.forEach((p,y)=>{const T=i.get(y);if(!T)return;u.push(t.Ti.removeMatchingKeys(o,p.removedDocuments,y).next(()=>t.Ti.addMatchingKeys(o,p.addedDocuments,y)));let b=T.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?b=b.withResumeToken(pe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),i=i.insert(y,b),function(D,C,$){return D.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Y_?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(T,b,p)&&u.push(t.Ti.updateTargetData(o,b))});let h=nt(),d=G();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(ry(o,a,e.documentUpdates).next(p=>{h=p.qs,d=p.Qs})),!r.isEqual(B.min())){const p=t.Ti.getLastRemoteSnapshotVersion(o).next(y=>t.Ti.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.xs=i,o))}function ry(n,e,t){let r=G(),i=G();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=nt();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(B.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):N(yo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:i}})}function iy(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=io),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sy(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Ti.getTargetData(r,e).next(o=>o?(i=o,P.resolve(i)):t.Ti.allocateTargetId(r).next(a=>(i=new ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function Ms(n,e,t){const r=j(n),i=r.xs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!gn(a))throw a;N(yo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function zc(n,e,t){const r=j(n);let i=B.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const y=j(h),T=y.Os.get(p);return T!==void 0?P.resolve(y.xs.get(T)):y.Ti.getTargetData(d,p)}(r,a,je(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?o:G())).next(u=>(oy(r,Gg(e),u),{documents:u,$s:o})))}function oy(n,e,t){let r=n.Ns.get(e)||B.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ns.set(e,r)}class Hc{constructor(){this.activeTargetIds=Yg()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ay{constructor(){this.xo=new Hc,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Hc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="ConnectivityMonitor";class Wc{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){N(Gc,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){N(Gc,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr=null;function xs(){return Lr===null?Lr=function(){return 268435456+Math.round(2147483648*Math.random())}():Lr++,"0x"+Lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="RestConnection",uy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ly{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===ni?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,t,r,i,o){const a=xs(),u=this.jo(e,t.toUriEncodedString());N(as,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,i,o);const{host:d}=new URL(u),p=Ft(d);return this.Jo(e,u,h,r,p).then(y=>(N(as,`Received RPC '${e}' ${a}: `,y),y),y=>{throw on(as,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",r),y})}Yo(e,t,r,i,o,a){return this.zo(e,t,r,i,o)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}jo(e,t){const r=uy[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="WebChannelConnection";class dy extends ly{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=xs();return new Promise((u,h)=>{const d=new ol;d.setWithCredentials(!0),d.listenOnce(al.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case $r.NO_ERROR:const y=d.getResponseJson();N(ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case $r.TIMEOUT:N(ve,`RPC '${e}' ${a} timed out`),h(new O(S.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const T=d.getStatus();if(N(ve,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const k=b==null?void 0:b.error;if(k&&k.status&&k.message){const D=function($){const M=$.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(M)>=0?M:S.UNKNOWN}(k.status);h(new O(D,k.message))}else h(new O(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new O(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(ve,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(i);N(ve,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",p,r,15)})}T_(e,t,r){const i=xs(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ll(),u=ul(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=o.join("");N(ve,`Creating RPC '${e}' stream ${i}: ${p}`,h);const y=a.createWebChannel(p,h);let T=!1,b=!1;const k=new hy({Zo:C=>{b?N(ve,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(T||(N(ve,`Opening RPC '${e}' stream ${i} transport.`),y.open(),T=!0),N(ve,`RPC '${e}' stream ${i} sending:`,C),y.send(C))},Xo:()=>y.close()}),D=(C,$,M)=>{C.listen($,U=>{try{M(U)}catch(z){setTimeout(()=>{throw z},0)}})};return D(y,Mn.EventType.OPEN,()=>{b||(N(ve,`RPC '${e}' stream ${i} transport opened.`),k.__())}),D(y,Mn.EventType.CLOSE,()=>{b||(b=!0,N(ve,`RPC '${e}' stream ${i} transport closed`),k.u_())}),D(y,Mn.EventType.ERROR,C=>{b||(b=!0,on(ve,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),k.u_(new O(S.UNAVAILABLE,"The operation could not be completed")))}),D(y,Mn.EventType.MESSAGE,C=>{var $;if(!b){const M=C.data[0];Q(!!M,16349);const U=M,z=(U==null?void 0:U.error)||(($=U[0])===null||$===void 0?void 0:$.error);if(z){N(ve,`RPC '${e}' stream ${i} received error:`,z);const le=z.status;let J=function(_){const v=re[_];if(v!==void 0)return zl(v)}(le),E=z.message;J===void 0&&(J=S.INTERNAL,E="Unknown error status: "+le+" with message "+z.message),b=!0,k.u_(new O(J,E)),y.close()}else N(ve,`RPC '${e}' stream ${i} received:`,M),k.c_(M)}}),D(u,cl.STAT_EVENT,C=>{C.stat===Rs.PROXY?N(ve,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Rs.NOPROXY&&N(ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.a_()},0),k}}function cs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){return new g_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,t,r=1e3,i=1.5,o=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=i,this.d_=o,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,t-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="PersistentStream";class sh{constructor(e,t,r,i,o,a,u,h){this.xi=e,this.y_=r,this.w_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new ih(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(tt(t.toString()),tt("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===t&&this.K_(r,i)},r=>{e(()=>{const i=new O(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return N(Kc,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(N(Kc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fy extends sh{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=v_(this.serializer,e),r=function(o){if(!("targetChange"in o))return B.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?$e(a.readTime):B.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=Ls(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=ks(h)?{documents:I_(o,h)}:{query:w_(o,h).gt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Wl(o,a.resumeToken);const d=Ds(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=ci(o,a.snapshotVersion.toTimestamp());const d=Ds(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=R_(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=Ls(this.serializer),t.removeTarget=e,this.L_(t)}}class py extends sh{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=T_(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=Ls(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>E_(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{}class gy extends my{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.zo(e,Ns(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(S.UNKNOWN,o.toString())})}Yo(e,t,r,i,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Yo(e,Ns(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(S.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class _y{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(tt(t),this.oa=!1):N("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="RemoteStore";class yy{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=o,this.Ea.No(a=>{r.enqueueAndForget(async()=>{zt(this)&&(N(xt,"Restarting streams for network reachability change."),await async function(h){const d=j(h);d.Ta.add(4),await ur(d),d.da.set("Unknown"),d.Ta.delete(4),await Pi(d)}(this))})}),this.da=new _y(r,i)}}async function Pi(n){if(zt(n))for(const e of n.Ia)await e(!0)}async function ur(n){for(const e of n.Ia)await e(!1)}function oh(n,e){const t=j(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Io(t)?To(t):_n(t).M_()&&Eo(t,e))}function vo(n,e){const t=j(n),r=_n(t);t.Pa.delete(e),r.M_()&&ah(t,e),t.Pa.size===0&&(r.M_()?r.N_():zt(t)&&t.da.set("Unknown"))}function Eo(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}_n(n).H_(e)}function ah(n,e){n.Aa.Ke(e),_n(n).J_(e)}function To(n){n.Aa=new d_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),_n(n).start(),n.da._a()}function Io(n){return zt(n)&&!_n(n).F_()&&n.Pa.size>0}function zt(n){return j(n).Ta.size===0}function ch(n){n.Aa=void 0}async function vy(n){n.da.set("Online")}async function Ey(n){n.Pa.forEach((e,t)=>{Eo(n,e)})}async function Ty(n,e){ch(n),Io(n)?(n.da.ca(e),To(n)):n.da.set("Unknown")}async function Iy(n,e,t){if(n.da.set("Online"),e instanceof Gl&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.Pa.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Pa.delete(u),i.Aa.removeTarget(u))}(n,e)}catch(r){N(xt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await li(n,r)}else if(e instanceof Gr?n.Aa.Xe(e):e instanceof Hl?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(B.min()))try{const r=await rh(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Aa.It(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Pa.get(d);p&&o.Pa.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.Pa.get(h);if(!p)return;o.Pa.set(h,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),ah(o,h);const y=new ft(p.target,h,d,p.sequenceNumber);Eo(o,y)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){N(xt,"Failed to raise snapshot:",r),await li(n,r)}}async function li(n,e,t){if(!gn(e))throw e;n.Ta.add(1),await ur(n),n.da.set("Offline"),t||(t=()=>rh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(xt,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await Pi(n)})}function uh(n,e){return e().catch(t=>li(n,t,e))}async function Si(n){const e=j(n),t=wt(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:io;for(;wy(e);)try{const i=await iy(e.localStore,r);if(i===null){e.ha.length===0&&t.N_();break}r=i.batchId,Ay(e,i)}catch(i){await li(e,i)}lh(e)&&hh(e)}function wy(n){return zt(n)&&n.ha.length<10}function Ay(n,e){n.ha.push(e);const t=wt(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function lh(n){return zt(n)&&!wt(n).F_()&&n.ha.length>0}function hh(n){wt(n).start()}async function Ry(n){wt(n).ta()}async function by(n){const e=wt(n);for(const t of n.ha)e.Z_(t.mutations)}async function Py(n,e,t){const r=n.ha.shift(),i=ho.from(r,e,t);await uh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Si(n)}async function Sy(n,e){e&&wt(n).Y_&&await async function(r,i){if(function(a){return l_(a)&&a!==S.ABORTED}(i.code)){const o=r.ha.shift();wt(r).O_(),await uh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Si(r)}}(n,e),lh(n)&&hh(n)}async function Qc(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),N(xt,"RemoteStore received new credentials");const r=zt(t);t.Ta.add(3),await ur(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Pi(t)}async function Cy(n,e){const t=j(n);e?(t.Ta.delete(2),await Pi(t)):e||(t.Ta.add(2),await ur(t),t.da.set("Unknown"))}function _n(n){return n.Ra||(n.Ra=function(t,r,i){const o=j(t);return o.ra(),new fy(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:vy.bind(null,n),n_:Ey.bind(null,n),i_:Ty.bind(null,n),j_:Iy.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Io(n)?To(n):n.da.set("Unknown")):(await n.Ra.stop(),ch(n))})),n.Ra}function wt(n){return n.Va||(n.Va=function(t,r,i){const o=j(t);return o.ra(),new py(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Ry.bind(null,n),i_:Sy.bind(null,n),X_:by.bind(null,n),ea:Py.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Si(n)):(await n.Va.stop(),n.ha.length>0&&(N(xt,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new wo(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ao(n,e){if(tt("AsyncQueue",`${e}: ${n}`),gn(n))return new O(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{static emptySet(e){return new rn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=xn(),this.sortedSet=new Z(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new rn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.ma=new Z(L.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):x(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class hn{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new hn(e,t,rn.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ti(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class Vy{constructor(){this.queries=Jc(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const i=j(t),o=i.queries;i.queries=Jc(),o.forEach((a,u)=>{for(const h of u.ya)h.onError(r)})})(this,new O(S.ABORTED,"Firestore shutting down"))}}function Jc(){return new $t(n=>Vl(n),Ti)}async function Dy(n,e){const t=j(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.wa()&&e.Sa()&&(r=2):(o=new ky,r=e.Sa()?0:1);try{switch(r){case 0:o.pa=await t.onListen(i,!0);break;case 1:o.pa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=Ao(a,`Initialization of query '${Xt(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.ya.push(e),e.Da(t.onlineState),o.pa&&e.va(o.pa)&&Ro(t)}async function Ny(n,e){const t=j(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.ya.indexOf(e);a>=0&&(o.ya.splice(a,1),o.ya.length===0?i=e.Sa()?0:1:!o.wa()&&e.Sa()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Oy(n,e){const t=j(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.ya)u.va(i)&&(r=!0);a.pa=i}}r&&Ro(t)}function Ly(n,e,t){const r=j(n),i=r.queries.get(e);if(i)for(const o of i.ya)o.onError(t);r.queries.delete(e)}function Ro(n){n.ba.forEach(e=>{e.next()})}var Us,Yc;(Yc=Us||(Us={})).Ca="default",Yc.Cache="cache";class My{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new hn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Us.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.key=e}}class fh{constructor(e){this.key=e}}class xy{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=G(),this.mutatedKeys=G(),this.Ha=Dl(e),this.Ja=new rn(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new Xc,i=t?t.Ja:this.Ja;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{const T=i.get(p),b=Ii(this.query,y)?y:null,k=!!T&&this.mutatedKeys.has(T.key),D=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;T&&b?T.data.isEqual(b.data)?k!==D&&(r.track({type:3,doc:b}),C=!0):this.eu(T,b)||(r.track({type:2,doc:b}),C=!0,(h&&this.Ha(b,h)>0||d&&this.Ha(b,d)<0)&&(u=!0)):!T&&b?(r.track({type:0,doc:b}),C=!0):T&&!b&&(r.track({type:1,doc:T}),C=!0,(h||d)&&(u=!0)),C&&(b?(a=a.add(b),o=D?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ja:a,Xa:r,Cs:u,mutatedKeys:o}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const a=e.Xa.ga();a.sort((p,y)=>function(b,k){const D=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Vt:C})}};return D(b)-D(k)}(p.type,y.type)||this.Ha(p.doc,y.doc)),this.tu(r),i=i!=null&&i;const u=t&&!i?this.nu():[],h=this.ja.size===0&&this.current&&!i?1:0,d=h!==this.za;return this.za=h,a.length!==0||d?{snapshot:new hn(this.query,e.Ja,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:u}:{ru:u}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Xc,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=G(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new fh(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new dh(r))}),t}su(e){this.Ga=e.$s,this.ja=G();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return hn.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const bo="SyncEngine";class Uy{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Fy{constructor(e){this.key=e,this._u=!1}}class By{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new $t(u=>Vl(u),Ti),this.cu=new Map,this.lu=new Set,this.hu=new Z(L.comparator),this.Pu=new Map,this.Tu=new mo,this.Iu={},this.Eu=new Map,this.du=ln.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function jy(n,e,t=!0){const r=vh(n);let i;const o=r.uu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ou()):i=await ph(r,e,t,!0),i}async function $y(n,e){const t=vh(n);await ph(t,e,!0,!1)}async function ph(n,e,t,r){const i=await sy(n.localStore,je(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await qy(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&oh(n.remoteStore,i),u}async function qy(n,e,t,r,i){n.Ru=(y,T,b)=>async function(D,C,$,M){let U=C.view.Za($);U.Cs&&(U=await zc(D.localStore,C.query,!1).then(({documents:E})=>C.view.Za(E,U)));const z=M&&M.targetChanges.get(C.targetId),le=M&&M.targetMismatches.get(C.targetId)!=null,J=C.view.applyChanges(U,D.isPrimaryClient,z,le);return eu(D,C.targetId,J.ru),J.snapshot}(n,y,T,b);const o=await zc(n.localStore,e,!0),a=new xy(e,o.$s),u=a.Za(o.documents),h=cr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);eu(n,t,d.ru);const p=new Uy(e,t,a);return n.uu.set(e,p),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),d.snapshot}async function zy(n,e,t){const r=j(n),i=r.uu.get(e),o=r.cu.get(i.targetId);if(o.length>1)return r.cu.set(i.targetId,o.filter(a=>!Ti(a,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ms(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&vo(r.remoteStore,i.targetId),Fs(r,i.targetId)}).catch(mn)):(Fs(r,i.targetId),await Ms(r.localStore,i.targetId,!0))}async function Hy(n,e){const t=j(n),r=t.uu.get(e),i=t.cu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),vo(t.remoteStore,r.targetId))}async function Gy(n,e,t){const r=Zy(n);try{const i=await function(a,u){const h=j(a),d=ae.now(),p=u.reduce((b,k)=>b.add(k.key),G());let y,T;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let k=nt(),D=G();return h.Bs.getEntries(b,p).next(C=>{k=C,k.forEach(($,M)=>{M.isValidDocument()||(D=D.add($))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,k)).next(C=>{y=C;const $=[];for(const M of u){const U=s_(M,y.get(M.key).overlayedDocument);U!=null&&$.push(new qt(M.key,U,Al(U.value.mapValue),Je.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,$,u)}).next(C=>{T=C;const $=C.applyToLocalDocumentSet(y,D);return h.documentOverlayCache.saveOverlays(b,C.batchId,$)})}).then(()=>({batchId:T.batchId,changes:Ol(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.Iu[a.currentUser.toKey()];d||(d=new Z(q)),d=d.insert(u,h),a.Iu[a.currentUser.toKey()]=d}(r,i.batchId,t),await lr(r,i.changes),await Si(r.remoteStore)}catch(i){const o=Ao(i,"Failed to persist write");t.reject(o)}}async function mh(n,e){const t=j(n);try{const r=await ny(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Pu.get(o);a&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a._u=!0:i.modifiedDocuments.size>0?Q(a._u,14607):i.removedDocuments.size>0&&(Q(a._u,42227),a._u=!1))}),await lr(t,r,e)}catch(r){await mn(r)}}function Zc(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.uu.forEach((o,a)=>{const u=a.view.Da(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=j(a);h.onlineState=u;let d=!1;h.queries.forEach((p,y)=>{for(const T of y.ya)T.Da(u)&&(d=!0)}),d&&Ro(h)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Wy(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Pu.get(e),o=i&&i.key;if(o){let a=new Z(L.comparator);a=a.insert(o,Te.newNoDocument(o,B.min()));const u=G().add(o),h=new Ri(B.min(),new Map,new Z(q),a,u);await mh(r,h),r.hu=r.hu.remove(o),r.Pu.delete(e),Po(r)}else await Ms(r.localStore,e,!1).then(()=>Fs(r,e,t)).catch(mn)}async function Ky(n,e){const t=j(n),r=e.batch.batchId;try{const i=await ty(t.localStore,e);_h(t,r,null),gh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await lr(t,i)}catch(i){await mn(i)}}async function Qy(n,e,t){const r=j(n);try{const i=await function(a,u){const h=j(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(y=>(Q(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);_h(r,e,t),gh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await lr(r,i)}catch(i){await mn(i)}}function gh(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function _h(n,e,t){const r=j(n);let i=r.Iu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Iu[r.currentUser.toKey()]=i}}function Fs(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||yh(n,r)})}function yh(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(vo(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Po(n))}function eu(n,e,t){for(const r of t)r instanceof dh?(n.Tu.addReference(r.key,e),Xy(n,r)):r instanceof fh?(N(bo,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||yh(n,r.key)):x(19791,{mu:r})}function Xy(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(N(bo,"New document in limbo: "+t),n.lu.add(r),Po(n))}function Po(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new L(te.fromString(e)),r=n.du.next();n.Pu.set(r,new Fy(t)),n.hu=n.hu.insert(t,r),oh(n.remoteStore,new ft(je(uo(t.path)),r,"TargetPurposeLimboResolution",_i.le))}}async function lr(n,e,t){const r=j(n),i=[],o=[],a=[];r.uu.isEmpty()||(r.uu.forEach((u,h)=>{a.push(r.Ru(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){i.push(d);const y=_o.Rs(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.au.j_(i),await async function(h,d){const p=j(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>P.forEach(d,T=>P.forEach(T.ds,b=>p.persistence.referenceDelegate.addReference(y,T.targetId,b)).next(()=>P.forEach(T.As,b=>p.persistence.referenceDelegate.removeReference(y,T.targetId,b)))))}catch(y){if(!gn(y))throw y;N(yo,"Failed to update sequence numbers: "+y)}for(const y of d){const T=y.targetId;if(!y.fromCache){const b=p.xs.get(T),k=b.snapshotVersion,D=b.withLastLimboFreeSnapshotVersion(k);p.xs=p.xs.insert(T,D)}}}(r.localStore,o))}async function Jy(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){N(bo,"User change. New user:",e.toKey());const r=await nh(t.localStore,e);t.currentUser=e,function(o,a){o.Eu.forEach(u=>{u.forEach(h=>{h.reject(new O(S.CANCELLED,a))})}),o.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(t,r.ks)}}function Yy(n,e){const t=j(n),r=t.Pu.get(e);if(r&&r._u)return G().add(r.key);{let i=G();const o=t.cu.get(e);if(!o)return i;for(const a of o){const u=t.uu.get(a);i=i.unionWith(u.view.Ya)}return i}}function vh(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=mh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yy.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Wy.bind(null,e),e.au.j_=Oy.bind(null,e.eventManager),e.au.Vu=Ly.bind(null,e.eventManager),e}function Zy(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ky.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Qy.bind(null,e),e}class hi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bi(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return ey(this.persistence,new J_,e.initialUser,this.serializer)}yu(e){return new th(go.fi,this.serializer)}pu(e){return new ay}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hi.provider={build:()=>new hi};class ev extends hi{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){Q(this.persistence.referenceDelegate instanceof ui,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new M_(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Pe.withCacheSize(this.cacheSizeBytes):Pe.DEFAULT;return new th(r=>ui.fi(r,t),this.serializer)}}class Bs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jy.bind(null,this.syncEngine),await Cy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Vy}()}createDatastore(e){const t=bi(e.databaseInfo.databaseId),r=function(o){return new dy(o)}(e.databaseInfo);return function(o,a,u,h){return new gy(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new yy(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>Zc(this.syncEngine,t,0),function(){return Wc.C()?new Wc:new cy}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,p){const y=new By(i,o,a,u,h,d);return p&&(y.Au=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=j(i);N(xt,"RemoteStore shutting down."),o.Ta.add(5),await ur(o),o.Ea.shutdown(),o.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bs.provider={build:()=>new Bs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):tt("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="FirestoreClient";class nv{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ee.UNAUTHENTICATED,this.clientId=pl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{N(At,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(At,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ao(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function us(n,e){n.asyncQueue.verifyOperationInProgress(),N(At,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function tu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await rv(n);N(At,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Qc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Qc(e.remoteStore,i)),n._onlineComponents=e}async function rv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(At,"Using user provided OfflineComponentProvider");try{await us(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===S.FAILED_PRECONDITION||i.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;on("Error using user provided cache. Falling back to memory cache: "+t),await us(n,new hi)}}else N(At,"Using default OfflineComponentProvider"),await us(n,new ev(void 0));return n._offlineComponents}async function Eh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(At,"Using user provided OnlineComponentProvider"),await tu(n,n._uninitializedComponentsProvider._online)):(N(At,"Using default OnlineComponentProvider"),await tu(n,new Bs))),n._onlineComponents}function iv(n){return Eh(n).then(e=>e.syncEngine)}async function sv(n){const e=await Eh(n),t=e.eventManager;return t.onListen=jy.bind(null,e.syncEngine),t.onUnlisten=zy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$y.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Hy.bind(null,e.syncEngine),t}function ov(n,e,t={}){const r=new _t;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new tv({next:T=>{p.Cu(),a.enqueueAndForget(()=>Ny(o,y));const b=T.docs.has(u);!b&&T.fromCache?d.reject(new O(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&T.fromCache&&h&&h.source==="server"?d.reject(new O(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new My(uo(u.path),p,{includeMetadataChanges:!0,La:!0});return Dy(o,y)}(await sv(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(n,e,t){if(!t)throw new O(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function cv(n,e,t,r){if(e===!0&&r===!0)throw new O(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ru(n){if(!L.isDocumentKey(n))throw new O(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function So(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function er(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=So(n);throw new O(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="firestore.googleapis.com",iu=!0;class su{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ih,this.ssl=iu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:iu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O_)throw new O(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Th((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Co{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new su({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new su(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lg;switch(r.type){case"firstParty":return new pg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=nu.get(t);r&&(N("ComponentProvider","Removing Datastore"),nu.delete(t),r.terminate())}(this),Promise.resolve()}}function uv(n,e,t,r={}){var i;n=er(n,Co);const o=Ft(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;o&&($s(`https://${h}`),qs("Firestore",!0)),a.host!==Ih&&a.host!==h&&on("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!Nt(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,y;if(typeof r.mockUserToken=="string")p=r.mockUserToken,y=Ee.MOCK_USER;else{p=Iu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new O(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Ee(T)}n._authCredentials=new hg(new dl(p,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ko(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class tr extends ko{constructor(e,t,r){super(e,t,uo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new L(e))}withConverter(e){return new tr(this.firestore,e,this._path)}}function ls(n,e,...t){if(n=be(n),arguments.length===1&&(e=pl.newId()),av("doc","path",e),n instanceof Co){const r=te.fromString(e,...t);return ru(r),new Ve(n,null,new L(r))}{if(!(n instanceof Ve||n instanceof tr))throw new O(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return ru(r),new Ve(n.firestore,n instanceof tr?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="AsyncQueue";class au{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new ih(this,"async_queue_retry"),this.ec=()=>{const r=cs();r&&N(ou,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=cs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=cs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new _t;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!gn(e))throw e;N(ou,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,tt("INTERNAL UNHANDLED ERROR: ",cu(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const i=wo.createAndSchedule(this,e,t,r,o=>this.oc(o));return this.Hu.push(i),i}nc(){this.Ju&&x(47125,{_c:cu(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function cu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Vo extends Co{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new au,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new au(e),this._firestoreClient=void 0,await e}}}function lv(n,e){const t=Gs(),r=ni,i=pi(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=vu("firestore");o&&uv(i,...o)}return i}function wh(n){if(n._terminated)throw new O(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hv(n),n._firestoreClient}function hv(n){var e,t,r;const i=n._freezeSettings(),o=function(u,h,d,p){return new Cg(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Th(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new nv(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dn(pe.fromBase64String(e))}catch(t){throw new O(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dn(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=/^__.*__$/;class fv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ar(e,this.data,t,this.fieldTransforms)}}function Rh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{hc:n})}}class Lo{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Pc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Lo(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.dc(e),i}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return di(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Rh(this.hc)&&dv.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class pv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bi(e)}gc(e,t,r,i=!1){return new Lo({hc:e,methodName:t,fc:r,path:fe.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mv(n){const e=n._freezeSettings(),t=bi(n._databaseId);return new pv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gv(n,e,t,r,i,o={}){const a=n.gc(o.merge||o.mergeFields?2:0,e,t,i);Ch("Data must be an object, but it was:",a,r);const u=Ph(r,a);let h,d;if(o.merge)h=new Le(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const T=_v(e,y,t);if(!a.contains(T))throw new O(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);vv(p,T)||p.push(T)}h=new Le(p),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new fv(new ke(u),h,d)}function bh(n,e){if(Sh(n=be(n)))return Ch("Unsupported field value:",e,n),Ph(n,e);if(n instanceof Ah)return function(r,i){if(!Rh(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=bh(u,i.Rc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zg(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ae.fromDate(r);return{timestampValue:ci(i.serializer,o)}}if(r instanceof ae){const o=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ci(i.serializer,o)}}if(r instanceof No)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dn)return{bytesValue:Wl(i.serializer,r._byteString)};if(r instanceof Ve){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:po(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Oo)return function(a,u){return{mapValue:{fields:{[Il]:{stringValue:wl},[ri]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Vc("VectorValues must only contain numeric values.");return lo(u.serializer,d)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${So(r)}`)}(n,e)}function Ph(n,e){const t={};return gl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(n,(r,i)=>{const o=bh(i,e.Ic(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function Sh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof No||n instanceof dn||n instanceof Ve||n instanceof Ah||n instanceof Oo)}function Ch(n,e,t){if(!Sh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=So(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function _v(n,e,t){if((e=be(e))instanceof Do)return e._internalPath;if(typeof e=="string")return kh(n,e);throw di("Field path arguments must be of type string or ",n,!1,void 0,t)}const yv=new RegExp("[~\\*/\\[\\]]");function kh(n,e,t){if(e.search(yv)>=0)throw di(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Do(...e.split("."))._internalPath}catch{throw di(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function di(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new O(S.INVALID_ARGUMENT,u+n+h)}function vv(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ev extends Vh{data(){return super.data()}}function Dh(n,e){return typeof e=="string"?kh(n,e):e instanceof Do?e._internalPath:e._delegate._internalPath}class Tv{convertValue(e,t="none"){switch(It(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jt(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var t,r,i;const o=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[ri].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>ne(a.doubleValue));return new Oo(o)}convertGeoPoint(e){return new No(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=vi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Qn(e));default:return null}}convertTimestamp(e){const t=Et(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);Q(Zl(r),9688,{name:e});const i=new Xn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(t)||tt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nh extends Vh{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Av(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Dh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Av extends Nh{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n){n=er(n,Ve);const e=er(n.firestore,Vo);return ov(wh(e),n._key).then(t=>Sv(e,n,t))}class Rv extends Tv{constructor(e){super(),this.firestore=e}convertBytes(e){return new dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function bv(n,e,t){n=er(n,Ve);const r=er(n.firestore,Vo),i=Iv(n.converter,e);return Pv(r,[gv(mv(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Je.none())])}function Pv(n,e){return function(r,i){const o=new _t;return r.asyncQueue.enqueueAndForget(async()=>Gy(await iv(r),i,o)),o.promise}(wh(n),e)}function Sv(n,e,t){const r=t.docs.get(e._key),i=new Rv(n);return new Nh(n,i,e._key,r,new wv(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){pn=i})(Bt),Ot(new yt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Vo(new dg(r.getProvider("auth-internal")),new mg(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(d.options.projectId,p)}(a,i),a);return o=Object.assign({useFetchStreams:t},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Ue(pc,mc,e),Ue(pc,mc,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="firebasestorage.googleapis.com",Lh="storageBucket",Cv=2*60*1e3,kv=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends He{constructor(e,t,r=0){super(hs(e),`Firebase Storage: ${t} (${hs(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ie;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ie||(ie={}));function hs(n){return"storage/"+n}function Mo(){const n="An unknown error occurred, please check the error payload for server response.";return new se(ie.UNKNOWN,n)}function Vv(n){return new se(ie.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Dv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new se(ie.UNAUTHENTICATED,n)}function Nv(){return new se(ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ov(n){return new se(ie.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Lv(){return new se(ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mv(){return new se(ie.CANCELED,"User canceled the upload/download.")}function xv(n){return new se(ie.INVALID_URL,"Invalid URL '"+n+"'.")}function Uv(n){return new se(ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Fv(){return new se(ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lh+"' property when initializing the app?")}function Bv(){return new se(ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function jv(n){return new se(ie.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function js(n){return new se(ie.INVALID_ARGUMENT,n)}function Mh(){return new se(ie.APP_DELETED,"The Firebase app was deleted.")}function $v(n){return new se(ie.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Hn(n,e){return new se(ie.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ln(n){throw new se(ie.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ce.makeFromUrl(e,t)}catch{return new Ce(e,"")}if(r.path==="")return r;throw Uv(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+i+a,"i"),h={bucket:1,path:3};function d(z){z.path_=decodeURIComponent(z.path)}const p="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",b=new RegExp(`^https?://${y}/${p}/b/${i}/o${T}`,"i"),k={bucket:1,path:3},D=t===Oh?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",$=new RegExp(`^https?://${D}/${i}/${C}`,"i"),U=[{regex:u,indices:h,postModify:o},{regex:b,indices:k,postModify:d},{regex:$,indices:{bucket:1,path:2},postModify:d}];for(let z=0;z<U.length;z++){const le=U[z],J=le.regex.exec(e);if(J){const E=J[le.indices.bucket];let m=J[le.indices.path];m||(m=""),r=new Ce(E,m),le.postModify(r);break}}if(r==null)throw xv(e);return r}}class qv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n,e,t){let r=1,i=null,o=null,a=!1,u=0;function h(){return u===2}let d=!1;function p(...C){d||(d=!0,e.apply(null,C))}function y(C){i=setTimeout(()=>{i=null,n(b,h())},C)}function T(){o&&clearTimeout(o)}function b(C,...$){if(d){T();return}if(C){T(),p.call(null,C,...$);return}if(h()||a){T(),p.call(null,C,...$);return}r<64&&(r*=2);let U;u===1?(u=2,U=0):U=(r+Math.random())*1e3,y(U)}let k=!1;function D(C){k||(k=!0,T(),!d&&(i!==null?(C||(u=2),clearTimeout(i),y(0)):C||(u=1)))}return y(0),o=setTimeout(()=>{a=!0,D(!0)},t),D}function Hv(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(n){return n!==void 0}function Wv(n){return typeof n=="object"&&!Array.isArray(n)}function xh(n){return typeof n=="string"||n instanceof String}function lu(n){return xo()&&n instanceof Blob}function xo(){return typeof Blob<"u"}function hu(n,e,t,r){if(r<e)throw js(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw js(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Qv(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Dt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Dt||(Dt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||i||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,r,i,o,a,u,h,d,p,y,T=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=y,this.retry=T,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,D)=>{this.resolve_=k,this.reject_=D,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Mr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=u=>{const h=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const u=o.getErrorCode()===Dt.NO_ERROR,h=o.getStatus();if(!u||Xv(h,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===Dt.ABORT;r(!1,new Mr(!1,null,p));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new Mr(d,o))})},t=(r,i)=>{const o=this.resolve_,a=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());Gv(h)?o(h):o()}catch(h){a(h)}else if(u!==null){const h=Mo();h.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,h)):a(h)}else if(i.canceled){const h=this.appDelete_?Mh():Mv();a(h)}else{const h=Lv();a(h)}};this.canceled_?t(!1,new Mr(!1,null,!0)):this.backoffId_=zv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Yv(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Zv(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eE(n,e){e&&(n["X-Firebase-GMPID"]=e)}function tE(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function nE(n,e,t,r,i,o,a=!0,u=!1){const h=Qv(n.urlParams),d=n.url+h,p=Object.assign({},n.headers);return eE(p,e),Yv(p,t),Zv(p,o),tE(p,r),new Jv(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iE(...n){const e=rE();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(xo())return new Blob(n);throw new se(ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function sE(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(n){if(typeof atob>"u")throw jv("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ds{constructor(e,t){this.data=e,this.contentType=t||null}}function aE(n,e){switch(n){case xe.RAW:return new ds(Uh(e));case xe.BASE64:case xe.BASE64URL:return new ds(Fh(n,e));case xe.DATA_URL:return new ds(uE(e),lE(e))}throw Mo()}function Uh(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=r,a=n.charCodeAt(++t);r=65536|(o&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cE(n){let e;try{e=decodeURIComponent(n)}catch{throw Hn(xe.DATA_URL,"Malformed data URL.")}return Uh(e)}function Fh(n,e){switch(n){case xe.BASE64:{const i=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(i||o)throw Hn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xe.BASE64URL:{const i=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(i||o)throw Hn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=oE(e)}catch(i){throw i.message.includes("polyfill")?i:Hn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Bh{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Hn(xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=hE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uE(n){const e=new Bh(n);return e.base64?Fh(xe.BASE64,e.rest):cE(e.rest)}function lE(n){return new Bh(n).contentType}function hE(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){let r=0,i="";lu(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(lu(this.data_)){const r=this.data_,i=sE(r,e,t);return i===null?null:new dt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new dt(r,!0)}}static getBlob(...e){if(xo()){const t=e.map(r=>r instanceof dt?r.data_:r);return new dt(iE.apply(null,t))}else{const t=e.map(a=>xh(a)?aE(xe.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let o=0;return t.forEach(a=>{for(let u=0;u<a.length;u++)i[o++]=a[u]}),new dt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){let e;try{e=JSON.parse(n)}catch{return null}return Wv(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function pE(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function jh(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n,e){return e}class Re{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||mE}}let xr=null;function gE(n){return!xh(n)||n.length<2?n:jh(n)}function _E(){if(xr)return xr;const n=[];n.push(new Re("bucket")),n.push(new Re("generation")),n.push(new Re("metageneration")),n.push(new Re("name","fullPath",!0));function e(o,a){return gE(a)}const t=new Re("name");t.xform=e,n.push(t);function r(o,a){return a!==void 0?Number(a):a}const i=new Re("size");return i.xform=r,n.push(i),n.push(new Re("timeCreated")),n.push(new Re("updated")),n.push(new Re("md5Hash",null,!0)),n.push(new Re("cacheControl",null,!0)),n.push(new Re("contentDisposition",null,!0)),n.push(new Re("contentEncoding",null,!0)),n.push(new Re("contentLanguage",null,!0)),n.push(new Re("contentType",null,!0)),n.push(new Re("metadata","customMetadata",!0)),xr=n,xr}function yE(n,e){function t(){const r=n.bucket,i=n.fullPath,o=new Ce(r,i);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function vE(n,e,t){const r={};r.type="file";const i=t.length;for(let o=0;o<i;o++){const a=t[o];r[a.local]=a.xform(r,e[a.server])}return yE(r,n),r}function EE(n,e,t){const r=dE(e);return r===null?null:vE(n,r,t)}function TE(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const o=e[i];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}class IE{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n){if(!n)throw Mo()}function AE(n,e){function t(r,i){const o=EE(n,i,e);return wE(o!==null),o}return t}function RE(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=Nv():i=Dv():t.getStatus()===402?i=Vv(n.bucket):t.getStatus()===403?i=Ov(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function bE(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function PE(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=bE(null,e)),r}function SE(n,e,t,r,i){const o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let U="";for(let z=0;z<2;z++)U=U+Math.random().toString().slice(2);return U}const h=u();a["Content-Type"]="multipart/related; boundary="+h;const d=PE(e,r,i),p=TE(d,t),y="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,T=`\r
--`+h+"--",b=dt.getBlob(y,r,T);if(b===null)throw Bv();const k={name:d.fullPath},D=Kv(o,n.host,n._protocol),C="POST",$=n.maxUploadRetryTime,M=new IE(D,C,AE(n,t),$);return M.urlParams=k,M.headers=a,M.body=b.uploadData(),M.errorHandler=RE(e),M}class CE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i,o){if(this.sent_)throw Ln("cannot .send() more than once");if(Ft(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const a in o)o.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,o[a].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ln("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ln("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ln("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ln("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class kE extends CE{initXhr(){this.xhr_.responseType="text"}}function VE(){return new kE}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this._service=e,t instanceof Ce?this._location=t:this._location=Ce.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ut(e,t)}get root(){const e=new Ce(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return jh(this._location.path)}get storage(){return this._service}get parent(){const e=fE(this._location.path);if(e===null)return null;const t=new Ce(this._location.bucket,e);return new Ut(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw $v(e)}}function DE(n,e,t){n._throwIfRoot("uploadBytes");const r=SE(n.storage,n._location,_E(),new dt(e,!0),t);return n.storage.makeRequestWithTokens(r,VE).then(i=>({metadata:i,ref:n}))}function NE(n,e){const t=pE(n._location.path,e),r=new Ce(n._location.bucket,t);return new Ut(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n){return/^[A-Za-z]+:\/\//.test(n)}function LE(n,e){return new Ut(n,e)}function $h(n,e){if(n instanceof Uo){const t=n;if(t._bucket==null)throw Fv();const r=new Ut(t,t._bucket);return e!=null?$h(r,e):r}else return e!==void 0?NE(n,e):n}function ME(n,e){if(e&&OE(e)){if(n instanceof Uo)return LE(n,e);throw js("To use ref(service, url), the first argument must be a Storage instance.")}else return $h(n,e)}function du(n,e){const t=e==null?void 0:e[Lh];return t==null?null:Ce.makeFromBucketSpec(t,n)}function xE(n,e,t,r={}){n.host=`${e}:${t}`;const i=Ft(e);i&&($s(`https://${n.host}`),qs("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:o}=r;o&&(n._overrideAuthToken=typeof o=="string"?o:Iu(o,n.app.options.projectId))}class Uo{constructor(e,t,r,i,o,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._isUsingEmulator=a,this._bucket=null,this._host=Oh,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cv,this._maxUploadRetryTime=kv,this._requests=new Set,i!=null?this._bucket=Ce.makeFromBucketSpec(i,this._host):this._bucket=du(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ce.makeFromBucketSpec(this._url,e):this._bucket=du(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ne(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ut(this,e)}_makeRequest(e,t,r,i,o=!0){if(this._deleted)return new qv(Mh());{const a=nE(e,this._appId,r,i,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const fu="@firebase/storage",pu="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="storage";function UE(n,e,t){return n=be(n),DE(n,e,t)}function FE(n,e){return n=be(n),ME(n,e)}function BE(n=Gs(),e){n=be(n);const r=pi(n,qh).getImmediate({identifier:e}),i=vu("storage");return i&&jE(r,...i),r}function jE(n,e,t,r={}){xE(n,e,t,r)}function $E(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Uo(t,r,i,e,Bt)}function qE(){Ot(new yt(qh,$E,"PUBLIC").setMultipleInstances(!0)),Ue(fu,pu,""),Ue(fu,pu,"esm2017")}qE();const zE={apiKey:"AIzaSyCYDNFAZgV1p1n349N1TnLDAkPVesvTkpE",authDomain:"tk-curated.firebaseapp.com",projectId:"tk-curated",storageBucket:"tk-curated.appspot.com",messagingSenderId:"474567523573",appId:"1:474567523573:web:5c7e6f51ff86f5158619bc",measurementId:"G-RSTZZET7G6"};Ru(zE);const zh=cg(),fs=lv(),HE=BE(),ps=document.getElementById("logoutBtn"),ms=document.getElementById("uploadBtn"),GE=document.getElementById("mediaUpload"),gs=document.getElementById("projectGrid");Xp(zh,n=>{n||(window.location.href="/admin-login.html")});ps==null||ps.addEventListener("click",async()=>{await Jp(zh),window.location.href="/"});ms==null||ms.addEventListener("click",async()=>{const n=GE.files[0];if(!n)return alert("No file selected.");const e=FE(HE,`media/${n.name}`);await UE(e,n),alert("Upload successful!")});const WE=[{id:"project1",name:"Look One"},{id:"project2",name:"Look Two"},{id:"project3",name:"Look Three"},{id:"project4",name:"Look Four"},{id:"project5",name:"Look Five"}];async function KE(){var n;for(const e of WE){const t=ls(fs,"projects",e.id),r=await uu(t),i=r.exists()?r.data().name:e.name,o=r.exists()?r.data().images||[]:[],a=r.exists()?r.data().videos||[]:[],u=document.createElement("div");u.className="project-card";let h="";o.forEach(d=>{h+=`<img src="${d}" alt="Project Image" style="max-width: 100%; border-radius: 8px; margin-bottom: 0.5rem;" />`}),a.forEach(d=>{h+=`<video controls src="${d}" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;"></video>`}),u.innerHTML=`
      <h3>${i}</h3>
      ${h}
      <input type="text" value="${i}" id="input-${e.id}" />
      <button data-id="${e.id}">Save Name</button>
    `,gs==null||gs.appendChild(u)}(n=document.querySelectorAll(".project-card button"))==null||n.forEach(e=>{e.addEventListener("click",async t=>{const r=t.target.getAttribute("data-id");if(r){const o=document.getElementById(`input-${r}`).value,a=ls(fs,"projects",r),u=await uu(a),h=u.exists()?u.data().images||[]:[],d=u.exists()?u.data().videos||[]:[];await bv(ls(fs,"projects",r),{name:o,images:h,videos:d}),alert("Project name updated!")}})})}KE();
