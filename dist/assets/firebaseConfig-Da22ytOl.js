const Hc=()=>{};var mo={};/**
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
 */const va=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Gc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],u=n[e++],l=n[e++],h=((i&7)<<18|(o&63)<<12|(u&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],u=i+1<n.length,l=u?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,_=o>>2,A=(o&3)<<4|l>>4;let w=(l&15)<<2|d>>6,P=d&63;h||(P=64,u||(w=64)),r.push(e[_],e[A],e[w],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(va(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Gc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const d=i<n.length?e[n.charAt(i)]:64;++i;const A=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||d==null||A==null)throw new Kc;const w=o<<2|l>>4;if(r.push(w),d!==64){const P=l<<4&240|d>>2;if(r.push(P),A!==64){const N=d<<6&192|A;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qc=function(n){const t=va(n);return Ia.encodeByteArray(t,!0)},sr=function(n){return Qc(n).replace(/\./g,"")},Wc=function(n){try{return Ia.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Xc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yc=()=>Xc().__FIREBASE_DEFAULTS__,Jc=()=>{if(typeof process>"u"||typeof mo>"u")return;const n=mo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Zc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Wc(n[1]);return t&&JSON.parse(t)},Ms=()=>{try{return Hc()||Yc()||Jc()||Zc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tl=n=>Ms()?.emulatorHosts?.[n],el=n=>{const t=tl(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Aa=()=>Ms()?.config;/**
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
 */class nl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function xs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function rl(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function sl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[sr(JSON.stringify(e)),sr(JSON.stringify(u)),""].join(".")}const cn={};function il(){const n={prod:[],emulator:[]};for(const t of Object.keys(cn))cn[t]?n.emulator.push(t):n.prod.push(t);return n}function ol(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let po=!1;function al(n,t){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||cn[n]===t||cn[n]||po)return;cn[n]=t;function e(w){return`__firebase__banner__${w}`}const r="__firebase__banner",o=il().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function h(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{po=!0,u()},w}function _(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function A(){const w=ol(r),P=e("text"),N=document.getElementById(P)||document.createElement("span"),O=e("learnmore"),b=document.getElementById(O)||document.createElement("a"),G=e("preprendIcon"),j=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const q=w.element;l(q),_(b,O);const at=d();h(j,G),q.append(j,N,b,at),document.body.appendChild(q)}o?(N.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
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
 */function ul(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cl(){const n=Ms()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ll(){return!cl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hl(){try{return typeof indexedDB=="object"}catch{return!1}}function fl(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}})}/**
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
 */const dl="FirebaseError";class xe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=dl,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],u=o?ml(o,r):"Error",l=`${this.serviceName}: ${u} (${i}).`;return new xe(i,l,r)}}function ml(n,t){return n.replace(pl,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const pl=/\{\$([^}]+)}/g;function ir(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],u=t[i];if(go(o)&&go(u)){if(!ir(o,u))return!1}else if(o!==u)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function go(n){return n!==null&&typeof n=="object"}/**
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
 */function mn(n){return n&&n._delegate?n._delegate:n}class pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ce="[DEFAULT]";/**
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
 */class gl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new nl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),r=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(yl(t))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ce){return this.instances.has(t)}getOptions(t=ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&u.resolve(i)}return i}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(r)??new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_l(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ce){return this.component?this.component.multipleInstances?t:ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _l(n){return n===ce?void 0:n}function yl(n){return n.instantiationMode==="EAGER"}/**
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
 */class El{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new gl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Tl={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},vl=z.INFO,Il={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Al=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Il[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ra{constructor(t){this.name=t,this._logLevel=vl,this._logHandler=Al,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in z))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Tl[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...t),this._logHandler(this,z.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...t),this._logHandler(this,z.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,z.INFO,...t),this._logHandler(this,z.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,z.WARN,...t),this._logHandler(this,z.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...t),this._logHandler(this,z.ERROR,...t)}}const wl=(n,t)=>t.some(e=>n instanceof e);let _o,yo;function Rl(){return _o||(_o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sl(){return yo||(yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,ms=new WeakMap,Ca=new WeakMap,is=new WeakMap,Ls=new WeakMap;function Cl(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Wt(n.result)),i()},u=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Sa.set(e,n)}).catch(()=>{}),Ls.set(t,n),t}function Pl(n){if(ms.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),i()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});ms.set(n,t)}let ps={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ms.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ca.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Wt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Vl(n){ps=n(ps)}function bl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(os(this),t,...e);return Ca.set(r,t.sort?t.sort():[t]),Wt(r)}:Sl().includes(n)?function(...t){return n.apply(os(this),t),Wt(Sa.get(this))}:function(...t){return Wt(n.apply(os(this),t))}}function Dl(n){return typeof n=="function"?bl(n):(n instanceof IDBTransaction&&Pl(n),wl(n,Rl())?new Proxy(n,ps):n)}function Wt(n){if(n instanceof IDBRequest)return Cl(n);if(is.has(n))return is.get(n);const t=Dl(n);return t!==n&&(is.set(n,t),Ls.set(t,n)),t}const os=n=>Ls.get(n);function Nl(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const u=indexedDB.open(n,t),l=Wt(u);return r&&u.addEventListener("upgradeneeded",h=>{r(Wt(u.result),h.oldVersion,h.newVersion,Wt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const kl=["get","getKey","getAll","getAllKeys","count"],Ol=["put","add","delete","clear"],as=new Map;function Eo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(as.get(t))return as.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Ol.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kl.includes(e)))return;const o=async function(u,...l){const h=this.transaction(u,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[e](...l),i&&h.done]))[0]};return as.set(t,o),o}Vl(n=>({...n,get:(t,e,r)=>Eo(t,e)||n.get(t,e,r),has:(t,e)=>!!Eo(t,e)||n.has(t,e)}));/**
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
 */class Ml{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(xl(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function xl(n){return n.getComponent()?.type==="VERSION"}const gs="@firebase/app",To="0.14.1";/**
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
 */const jt=new Ra("@firebase/app"),Ll="@firebase/app-compat",Fl="@firebase/analytics-compat",Ul="@firebase/analytics",Bl="@firebase/app-check-compat",jl="@firebase/app-check",ql="@firebase/auth",$l="@firebase/auth-compat",zl="@firebase/database",Hl="@firebase/data-connect",Gl="@firebase/database-compat",Kl="@firebase/functions",Ql="@firebase/functions-compat",Wl="@firebase/installations",Xl="@firebase/installations-compat",Yl="@firebase/messaging",Jl="@firebase/messaging-compat",Zl="@firebase/performance",th="@firebase/performance-compat",eh="@firebase/remote-config",nh="@firebase/remote-config-compat",rh="@firebase/storage",sh="@firebase/storage-compat",ih="@firebase/firestore",oh="@firebase/ai",ah="@firebase/firestore-compat",uh="firebase",ch="12.1.0";/**
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
 */const _s="[DEFAULT]",lh={[gs]:"fire-core",[Ll]:"fire-core-compat",[Ul]:"fire-analytics",[Fl]:"fire-analytics-compat",[jl]:"fire-app-check",[Bl]:"fire-app-check-compat",[ql]:"fire-auth",[$l]:"fire-auth-compat",[zl]:"fire-rtdb",[Hl]:"fire-data-connect",[Gl]:"fire-rtdb-compat",[Kl]:"fire-fn",[Ql]:"fire-fn-compat",[Wl]:"fire-iid",[Xl]:"fire-iid-compat",[Yl]:"fire-fcm",[Jl]:"fire-fcm-compat",[Zl]:"fire-perf",[th]:"fire-perf-compat",[eh]:"fire-rc",[nh]:"fire-rc-compat",[rh]:"fire-gcs",[sh]:"fire-gcs-compat",[ih]:"fire-fst",[ah]:"fire-fst-compat",[oh]:"fire-vertex","fire-js":"fire-js",[uh]:"fire-js-all"};/**
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
 */const or=new Map,hh=new Map,ys=new Map;function vo(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ar(n){const t=n.name;if(ys.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;ys.set(t,n);for(const e of or.values())vo(e,n);for(const e of hh.values())vo(e,n);return!0}function fh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function dh(n){return n==null?!1:n.settings!==void 0}/**
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
 */const mh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new wa("app","Firebase",mh);/**
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
 */class ph{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
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
 */const gh=ch;function Pa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:_s,automaticDataCollectionEnabled:!0,...t},i=r.name;if(typeof i!="string"||!i)throw Xt.create("bad-app-name",{appName:String(i)});if(e||(e=Aa()),!e)throw Xt.create("no-options");const o=or.get(i);if(o){if(ir(e,o.options)&&ir(r,o.config))return o;throw Xt.create("duplicate-app",{appName:i})}const u=new El(i);for(const h of ys.values())u.addComponent(h);const l=new ph(e,r,u);return or.set(i,l),l}function _h(n=_s){const t=or.get(n);if(!t&&n===_s&&Aa())return Pa();if(!t)throw Xt.create("no-app",{appName:n});return t}function Se(n,t,e){let r=lh[n]??n;e&&(r+=`-${e}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const u=[`Unable to register library "${r}" with version "${t}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(u.join(" "));return}ar(new pn(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const yh="firebase-heartbeat-database",Eh=1,gn="firebase-heartbeat-store";let us=null;function Va(){return us||(us=Nl(yh,Eh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),us}async function Th(n){try{const e=(await Va()).transaction(gn),r=await e.objectStore(gn).get(ba(n));return await e.done,r}catch(t){if(t instanceof xe)jt.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t?.message});jt.warn(e.message)}}}async function Io(n,t){try{const r=(await Va()).transaction(gn,"readwrite");await r.objectStore(gn).put(t,ba(n)),await r.done}catch(e){if(e instanceof xe)jt.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e?.message});jt.warn(r.message)}}}function ba(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vh=1024,Ih=30;class Ah{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ao();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats.length>Ih){const i=Sh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){jt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ao(),{heartbeatsToSend:e,unsentEntries:r}=wh(this._heartbeatsCache.heartbeats),i=sr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return jt.warn(t),""}}}function Ao(){return new Date().toISOString().substring(0,10)}function wh(n,t=vh){const e=[];let r=n.slice();for(const i of n){const o=e.find(u=>u.agent===i.agent);if(o){if(o.dates.push(i.date),wo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),wo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Rh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hl()?fl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Th(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Io(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Io(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function wo(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}function Sh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Ch(n){ar(new pn("platform-logger",t=>new Ml(t),"PRIVATE")),ar(new pn("heartbeat",t=>new Ah(t),"PRIVATE")),Se(gs,To,n),Se(gs,To,"esm2020"),Se("fire-js","")}Ch("");var Ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yt,Da;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function g(){}g.prototype=m.prototype,T.D=m.prototype,T.prototype=new g,T.prototype.constructor=T,T.C=function(y,E,I){for(var p=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)p[xt-2]=arguments[xt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=T.g[0],g=T.g[1],E=T.g[2];var I=T.g[3],p=m+(I^g&(E^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[2]+606105819&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[3]+3250441966&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[6]+2821735955&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[7]+4249261313&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[10]+4294925233&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[11]+2304563134&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[14]+2792965006&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[15]+1236535329&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(E^I&(g^E))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[11]+643717713&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[0]+3921069994&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[15]+3634488961&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[4]+3889429448&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[3]+4107603335&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[8]+1163531501&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[7]+1735328473&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[12]+2368359562&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(g^E^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[11]+1839030562&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[14]+4259657740&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[7]+4139469664&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[10]+3200236656&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[3]+3572445317&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[6]+76029189&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[15]+530742520&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[2]+3299628645&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(E^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[14]+2878612391&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[5]+4237533241&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[10]+4293915773&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[1]+2240044497&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[6]+2734768916&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[13]+1309151649&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[2]+718787259&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+I&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var g=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=g;)i(this,T,I),I+=this.blockSize;if(typeof T=="string"){for(;I<m;)if(y[E++]=T.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<m;)if(y[E++]=T[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var g=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=g&255,g/=256;for(this.u(T),T=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)T[g++]=this.g[m]>>>y&255;return T};function o(T,m){var g=l;return Object.prototype.hasOwnProperty.call(g,T)?g[T]:g[T]=m(T)}function u(T,m){this.h=m;for(var g=[],y=!0,E=T.length-1;0<=E;E--){var I=T[E]|0;y&&I==m||(g[E]=I,y=!1)}this.g=g}var l={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return A;if(0>T)return b(d(-T));for(var m=[],g=1,y=0;T>=g;y++)m[y]=T/g|0,g*=4294967296;return new u(m,0)}function _(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return b(_(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),y=A,E=0;E<T.length;E+=8){var I=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+I),m);8>I?(I=d(Math.pow(m,I)),y=y.j(I).add(d(p))):(y=y.j(g),y=y.add(d(p)))}return y}var A=h(0),w=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(O(this))return-b(this).m();for(var T=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(O(this))return"-"+b(this).toString(T);for(var m=d(Math.pow(T,6)),g=this,y="";;){var E=at(g,m).g;g=G(g,E.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(T);if(g=E,N(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=G(this,T),O(T)?-1:N(T)?0:1};function b(T){for(var m=T.g.length,g=[],y=0;y<m;y++)g[y]=~T.g[y];return new u(g,~T.h).add(w)}n.abs=function(){return O(this)?b(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(T.i(E)&65535),p=(I>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,I&=65535,p&=65535,g[E]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(T,m){return T.add(b(m))}n.j=function(T){if(N(this)||N(T))return A;if(O(this))return O(T)?b(this).j(b(T)):b(b(this).j(T));if(O(T))return b(this.j(b(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var I=this.i(y)>>>16,p=this.i(y)&65535,xt=T.i(E)>>>16,je=T.i(E)&65535;g[2*y+2*E]+=p*je,j(g,2*y+2*E),g[2*y+2*E+1]+=I*je,j(g,2*y+2*E+1),g[2*y+2*E+1]+=p*xt,j(g,2*y+2*E+1),g[2*y+2*E+2]+=I*xt,j(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function j(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function q(T,m){this.g=T,this.h=m}function at(T,m){if(N(m))throw Error("division by zero");if(N(T))return new q(A,A);if(O(T))return m=at(b(T),m),new q(b(m.g),b(m.h));if(O(m))return m=at(T,b(m)),new q(b(m.g),m.h);if(30<T.g.length){if(O(T)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var g=w,y=m;0>=y.l(T);)g=Pt(g),y=Pt(y);var E=ft(g,1),I=ft(y,1);for(y=ft(y,2),g=ft(g,2);!N(y);){var p=I.add(y);0>=p.l(T)&&(E=E.add(g),I=p),y=ft(y,1),g=ft(g,1)}return m=G(T,E.j(m)),new q(E,m)}for(E=A;0<=T.l(m);){for(g=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(g),p=I.j(m);O(p)||0<p.l(T);)g-=y,I=d(g),p=I.j(m);N(I)&&(I=w),E=E.add(I),T=G(T,p)}return new q(E,T)}n.A=function(T){return at(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&T.i(y);return new u(g,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|T.i(y);return new u(g,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^T.i(y);return new u(g,this.h^T.h)};function Pt(T){for(var m=T.g.length+1,g=[],y=0;y<m;y++)g[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(g,T.h)}function ft(T,m){var g=m>>5;m%=32;for(var y=T.g.length-g,E=[],I=0;I<y;I++)E[I]=0<m?T.i(I+g)>>>m|T.i(I+g+1)<<32-m:T.i(I+g);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Da=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=_,Yt=u}).apply(typeof Ro<"u"?Ro:typeof self<"u"?self:typeof window<"u"?window:{});var Kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Na,sn,ka,Jn,Es,Oa,Ma,xa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kn=="object"&&Kn];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var v=s[f];if(!(v in c))break t;c=c[v]}s=s[s.length-1],f=c[s],a=a(f),a!=f&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,f=!1,v={next:function(){if(!f&&c<s.length){var R=c++;return{value:a(R,s[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},l=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function w(s,a,c){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:A,w.apply(null,arguments)}function P(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function N(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(f,v,R){for(var V=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)V[Q-2]=arguments[Q];return a.prototype[v].apply(f,V)}}function O(s){const a=s.length;if(0<a){const c=Array(a);for(let f=0;f<a;f++)c[f]=s[f];return c}return[]}function b(s,a){for(let c=1;c<arguments.length;c++){const f=arguments[c];if(h(f)){const v=s.length||0,R=f.length||0;s.length=v+R;for(let V=0;V<R;V++)s[v+V]=f[V]}else s.push(f)}}class G{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function j(s){return/^[\s\xa0]*$/.test(s)}function q(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function at(s){return at[" "](s),s}at[" "]=function(){};var Pt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function ft(s,a,c){for(const f in s)a.call(c,s[f],f,s)}function T(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function m(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(c in f)s[c]=f[c];for(let R=0;R<g.length;R++)c=g[R],Object.prototype.hasOwnProperty.call(f,c)&&(s[c]=f[c])}}function E(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function I(s){l.setTimeout(()=>{throw s},0)}function p(){var s=Mr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,c){const f=je.get();f.set(a,c),this.h?this.h.next=f:this.g=f,this.h=f}}var je=new G(()=>new lc,s=>s.reset());class lc{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,$e=!1,Mr=new xt,di=()=>{const s=l.Promise.resolve(void 0);qe=()=>{s.then(hc)}};var hc=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(c){I(c)}var a=je;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}$e=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function dt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var fc=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};l.addEventListener("test",c,a),l.removeEventListener("test",c,a)}catch{}return s})();function ze(s,a){if(dt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Pt){t:{try{at(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:dc[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&ze.aa.h.call(this)}}N(ze,dt);var dc={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),mc=0;function pc(s,a,c,f,v){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!f,this.ha=v,this.key=++mc,this.da=this.fa=!1}function Vn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function bn(s){this.src=s,this.g={},this.h=0}bn.prototype.add=function(s,a,c,f,v){var R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);var V=Lr(s,a,f,v);return-1<V?(a=s[V],c||(a.fa=!1)):(a=new pc(a,this.src,R,!!f,v),a.fa=c,s.push(a)),a};function xr(s,a){var c=a.type;if(c in s.g){var f=s.g[c],v=Array.prototype.indexOf.call(f,a,void 0),R;(R=0<=v)&&Array.prototype.splice.call(f,v,1),R&&(Vn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function Lr(s,a,c,f){for(var v=0;v<s.length;++v){var R=s[v];if(!R.da&&R.listener==a&&R.capture==!!c&&R.ha==f)return v}return-1}var Fr="closure_lm_"+(1e6*Math.random()|0),Ur={};function mi(s,a,c,f,v){if(Array.isArray(a)){for(var R=0;R<a.length;R++)mi(s,a[R],c,f,v);return null}return c=_i(c),s&&s[Pn]?s.K(a,c,d(f)?!!f.capture:!1,v):gc(s,a,c,!1,f,v)}function gc(s,a,c,f,v,R){if(!a)throw Error("Invalid event type");var V=d(v)?!!v.capture:!!v,Q=jr(s);if(Q||(s[Fr]=Q=new bn(s)),c=Q.add(a,c,f,V,R),c.proxy)return c;if(f=_c(),c.proxy=f,f.src=s,f.listener=c,s.addEventListener)fc||(v=V),v===void 0&&(v=!1),s.addEventListener(a.toString(),f,v);else if(s.attachEvent)s.attachEvent(gi(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function _c(){function s(c){return a.call(s.src,s.listener,c)}const a=yc;return s}function pi(s,a,c,f,v){if(Array.isArray(a))for(var R=0;R<a.length;R++)pi(s,a[R],c,f,v);else f=d(f)?!!f.capture:!!f,c=_i(c),s&&s[Pn]?(s=s.i,a=String(a).toString(),a in s.g&&(R=s.g[a],c=Lr(R,c,f,v),-1<c&&(Vn(R[c]),Array.prototype.splice.call(R,c,1),R.length==0&&(delete s.g[a],s.h--)))):s&&(s=jr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Lr(a,c,f,v)),(c=-1<s?a[s]:null)&&Br(c))}function Br(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Pn])xr(a.i,s);else{var c=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(c,f,s.capture):a.detachEvent?a.detachEvent(gi(c),f):a.addListener&&a.removeListener&&a.removeListener(f),(c=jr(a))?(xr(c,s),c.h==0&&(c.src=null,a[Fr]=null)):Vn(s)}}}function gi(s){return s in Ur?Ur[s]:Ur[s]="on"+s}function yc(s,a){if(s.da)s=!0;else{a=new ze(a,this);var c=s.listener,f=s.ha||s.src;s.fa&&Br(s),s=c.call(f,a)}return s}function jr(s){return s=s[Fr],s instanceof bn?s:null}var qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function _i(s){return typeof s=="function"?s:(s[qr]||(s[qr]=function(a){return s.handleEvent(a)}),s[qr])}function mt(){zt.call(this),this.i=new bn(this),this.M=this,this.F=null}N(mt,zt),mt.prototype[Pn]=!0,mt.prototype.removeEventListener=function(s,a,c,f){pi(this,s,a,c,f)};function Tt(s,a){var c,f=s.F;if(f)for(c=[];f;f=f.F)c.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new dt(a,s);else if(a instanceof dt)a.target=a.target||s;else{var v=a;a=new dt(f,s),y(a,v)}if(v=!0,c)for(var R=c.length-1;0<=R;R--){var V=a.g=c[R];v=Dn(V,f,!0,a)&&v}if(V=a.g=s,v=Dn(V,f,!0,a)&&v,v=Dn(V,f,!1,a)&&v,c)for(R=0;R<c.length;R++)V=a.g=c[R],v=Dn(V,f,!1,a)&&v}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],f=0;f<c.length;f++)Vn(c[f]);delete s.g[a],s.h--}}this.F=null},mt.prototype.K=function(s,a,c,f){return this.i.add(String(s),a,!1,c,f)},mt.prototype.L=function(s,a,c,f){return this.i.add(String(s),a,!0,c,f)};function Dn(s,a,c,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,R=0;R<a.length;++R){var V=a[R];if(V&&!V.da&&V.capture==c){var Q=V.listener,ut=V.ha||V.src;V.fa&&xr(s.i,V),v=Q.call(ut,f)!==!1&&v}}return v&&!f.defaultPrevented}function yi(s,a,c){if(typeof s=="function")c&&(s=w(s,c));else if(s&&typeof s.handleEvent=="function")s=w(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function Ei(s){s.g=yi(()=>{s.g=null,s.i&&(s.i=!1,Ei(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Ec extends zt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(s){zt.call(this),this.h=s,this.g={}}N(He,zt);var Ti=[];function vi(s){ft(s.g,function(a,c){this.g.hasOwnProperty(c)&&Br(a)},s),s.g={}}He.prototype.N=function(){He.aa.N.call(this),vi(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $r=l.JSON.stringify,Tc=l.JSON.parse,vc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function zr(){}zr.prototype.h=null;function Ii(s){return s.h||(s.h=s.i())}function Ai(){}var Ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){dt.call(this,"d")}N(Hr,dt);function Gr(){dt.call(this,"c")}N(Gr,dt);var ie={},wi=null;function Nn(){return wi=wi||new mt}ie.La="serverreachability";function Ri(s){dt.call(this,ie.La,s)}N(Ri,dt);function Ke(s){const a=Nn();Tt(a,new Ri(a))}ie.STAT_EVENT="statevent";function Si(s,a){dt.call(this,ie.STAT_EVENT,s),this.stat=a}N(Si,dt);function vt(s){const a=Nn();Tt(a,new Si(a,s))}ie.Ma="timingevent";function Ci(s,a){dt.call(this,ie.Ma,s),this.size=a}N(Ci,dt);function Qe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function We(){this.g=!0}We.prototype.xa=function(){this.g=!1};function Ic(s,a,c,f,v,R){s.info(function(){if(s.g)if(R)for(var V="",Q=R.split("&"),ut=0;ut<Q.length;ut++){var H=Q[ut].split("=");if(1<H.length){var pt=H[0];H=H[1];var gt=pt.split("_");V=2<=gt.length&&gt[1]=="type"?V+(pt+"="+H+"&"):V+(pt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+a+`
`+c+`
`+V})}function Ac(s,a,c,f,v,R,V){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+a+`
`+c+`
`+R+" "+V})}function ye(s,a,c,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Rc(s,c)+(f?" "+f:"")})}function wc(s,a){s.info(function(){return"TIMEOUT: "+a})}We.prototype.info=function(){};function Rc(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var f=c[s];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var R=v[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<v.length;V++)v[V]=""}}}}return $r(c)}catch{return a}}var kn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kr;function On(){}N(On,zr),On.prototype.g=function(){return new XMLHttpRequest},On.prototype.i=function(){return{}},Kr=new On;function Ht(s,a,c,f){this.j=s,this.i=a,this.l=c,this.R=f||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vi}function Vi(){this.i=null,this.g="",this.h=!1}var bi={},Qr={};function Wr(s,a,c){s.L=1,s.v=Fn(Lt(a)),s.m=c,s.P=!0,Di(s,null)}function Di(s,a){s.F=Date.now(),Mn(s),s.A=Lt(s.v);var c=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Hi(c.i,"t",f),s.C=0,c=s.j.J,s.h=new Vi,s.g=co(s.j,c?a:null,!s.m),0<s.O&&(s.M=new Ec(w(s.Y,s,s.g),s.O)),a=s.U,c=s.g,f=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ti[0]=v.toString()),v=Ti);for(var R=0;R<v.length;R++){var V=mi(c,v[R],f||a.handleEvent,!1,a.h||a);if(!V)break;a.g[V.key]=V}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ke(),Ic(s.i,s.u,s.A,s.l,s.R,s.m)}Ht.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ft(s)==3?a.j():this.Y(s)},Ht.prototype.Y=function(s){try{if(s==this.g)t:{const gt=Ft(this.g);var a=this.g.Ba();const ve=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Ji(this.g)))){this.J||gt!=4||a==7||(a==8||0>=ve?Ke(3):Ke(2)),Xr(this);var c=this.g.Z();this.X=c;e:if(Ni(this)){var f=Ji(this.g);s="";var v=f.length,R=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),Xe(this);var V="";break e}this.h.i=new l.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(R&&a==v-1)});f.length=0,this.h.g+=s,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=c==200,Ac(this.i,this.u,this.A,this.l,this.R,gt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ut=this.g;if((Q=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Q)){var H=Q;break e}}H=null}if(c=H)ye(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yr(this,c);else{this.o=!1,this.s=3,vt(12),oe(this),Xe(this);break t}}if(this.P){c=!0;let St;for(;!this.J&&this.C<V.length;)if(St=Sc(this,V),St==Qr){gt==4&&(this.s=4,vt(14),c=!1),ye(this.i,this.l,null,"[Incomplete Response]");break}else if(St==bi){this.s=4,vt(15),ye(this.i,this.l,V,"[Invalid Chunk]"),c=!1;break}else ye(this.i,this.l,St,null),Yr(this,St);if(Ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||V.length!=0||this.h.h||(this.s=1,vt(16),c=!1),this.o=this.o&&c,!c)ye(this.i,this.l,V,"[Invalid Chunked Response]"),oe(this),Xe(this);else if(0<V.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),rs(pt),pt.M=!0,vt(11))}}else ye(this.i,this.l,V,null),Yr(this,V);gt==4&&oe(this),this.o&&!this.J&&(gt==4?io(this.j,this):(this.o=!1,Mn(this)))}else $c(this.g),c==400&&0<V.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),oe(this),Xe(this)}}}catch{}finally{}};function Ni(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Sc(s,a){var c=s.C,f=a.indexOf(`
`,c);return f==-1?Qr:(c=Number(a.substring(c,f)),isNaN(c)?bi:(f+=1,f+c>a.length?Qr:(a=a.slice(f,f+c),s.C=f+c,a)))}Ht.prototype.cancel=function(){this.J=!0,oe(this)};function Mn(s){s.S=Date.now()+s.I,ki(s,s.I)}function ki(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Qe(w(s.ba,s),a)}function Xr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Ht.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(wc(this.i,this.A),this.L!=2&&(Ke(),vt(17)),oe(this),this.s=2,Xe(this)):ki(this,this.S-s)};function Xe(s){s.j.G==0||s.J||io(s.j,s)}function oe(s){Xr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,vi(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Yr(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Jr(c.h,s))){if(!s.K&&Jr(c.h,s)&&c.G==3){try{var f=c.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)zn(c),qn(c);else break t;ns(c),vt(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=Qe(w(c.Za,c),6e3));if(1>=xi(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else ue(c,11)}else if((s.K||c.g==s)&&zn(c),!j(a))for(v=c.Da.g.parse(a),a=0;a<v.length;a++){let H=v[a];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const pt=H[3];pt!=null&&(c.la=pt,c.j.info("VER="+c.la));const gt=H[4];gt!=null&&(c.Aa=gt,c.j.info("SVER="+c.Aa));const ve=H[5];ve!=null&&typeof ve=="number"&&0<ve&&(f=1.5*ve,c.L=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const St=s.g;if(St){const Gn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gn){var R=f.h;R.g||Gn.indexOf("spdy")==-1&&Gn.indexOf("quic")==-1&&Gn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Zr(R,R.h),R.h=null))}if(f.D){const ss=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;ss&&(f.ya=ss,W(f.I,f.D,ss))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),f=c;var V=s;if(f.qa=uo(f,f.J?f.ia:null,f.W),V.K){Li(f.h,V);var Q=V,ut=f.L;ut&&(Q.I=ut),Q.B&&(Xr(Q),Mn(Q)),f.g=V}else ro(f);0<c.i.length&&$n(c)}else H[0]!="stop"&&H[0]!="close"||ue(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ue(c,7):es(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}Ke(4)}catch{}}var Cc=class{constructor(s,a){this.g=s,this.map=a}};function Oi(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mi(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function xi(s){return s.h?1:s.g?s.g.size:0}function Jr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Zr(s,a){s.g?s.g.add(a):s.h=a}function Li(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Oi.prototype.cancel=function(){if(this.i=Fi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Fi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return O(s.i)}function Pc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,f=0;f<c;f++)a.push(s[f]);return a}a=[],c=0;for(f in s)a[c++]=s[f];return a}function Vc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const f in s)a[c++]=f;return a}}}function Ui(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Vc(s),f=Pc(s),v=f.length,R=0;R<v;R++)a.call(void 0,f[R],c&&c[R],s)}var Bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var f=s[c].indexOf("="),v=null;if(0<=f){var R=s[c].substring(0,f);v=s[c].substring(f+1)}else R=s[c];a(R,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function ae(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ae){this.h=s.h,xn(this,s.j),this.o=s.o,this.g=s.g,Ln(this,s.s),this.l=s.l;var a=s.i,c=new Ze;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ji(this,c),this.m=s.m}else s&&(a=String(s).match(Bi))?(this.h=!1,xn(this,a[1]||"",!0),this.o=Ye(a[2]||""),this.g=Ye(a[3]||"",!0),Ln(this,a[4]),this.l=Ye(a[5]||"",!0),ji(this,a[6]||"",!0),this.m=Ye(a[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}ae.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Je(a,qi,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Je(a,qi,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Je(c,c.charAt(0)=="/"?kc:Nc,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Je(c,Mc)),s.join("")};function Lt(s){return new ae(s)}function xn(s,a,c){s.j=c?Ye(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Ln(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ji(s,a,c){a instanceof Ze?(s.i=a,xc(s.i,s.h)):(c||(a=Je(a,Oc)),s.i=new Ze(a,s.h))}function W(s,a,c){s.i.set(a,c)}function Fn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Ye(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Je(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Dc),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Dc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var qi=/[#\/\?@]/g,Nc=/[#\?:]/g,kc=/[#\?]/g,Oc=/[#\?@]/g,Mc=/#/g;function Ze(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&bc(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=Ze.prototype,n.add=function(s,a){Gt(this),this.i=null,s=Ee(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function $i(s,a){Gt(s),a=Ee(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function zi(s,a){return Gt(s),a=Ee(s,a),s.g.has(a)}n.forEach=function(s,a){Gt(this),this.g.forEach(function(c,f){c.forEach(function(v){s.call(a,v,f,this)},this)},this)},n.na=function(){Gt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let f=0;f<a.length;f++){const v=s[f];for(let R=0;R<v.length;R++)c.push(a[f])}return c},n.V=function(s){Gt(this);let a=[];if(typeof s=="string")zi(this,s)&&(a=a.concat(this.g.get(Ee(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return Gt(this),this.i=null,s=Ee(this,s),zi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Hi(s,a,c){$i(s,a),0<c.length&&(s.i=null,s.g.set(Ee(s,a),O(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var f=a[c];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var v=R;V[f]!==""&&(v+="="+encodeURIComponent(String(V[f]))),s.push(v)}}return this.i=s.join("&")};function Ee(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function xc(s,a){a&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(c,f){var v=f.toLowerCase();f!=v&&($i(this,f),Hi(this,v,c))},s)),s.j=a}function Lc(s,a){const c=new We;if(l.Image){const f=new Image;f.onload=P(Kt,c,"TestLoadImage: loaded",!0,a,f),f.onerror=P(Kt,c,"TestLoadImage: error",!1,a,f),f.onabort=P(Kt,c,"TestLoadImage: abort",!1,a,f),f.ontimeout=P(Kt,c,"TestLoadImage: timeout",!1,a,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function Fc(s,a){const c=new We,f=new AbortController,v=setTimeout(()=>{f.abort(),Kt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(v),R.ok?Kt(c,"TestPingServer: ok",!0,a):Kt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Kt(c,"TestPingServer: error",!1,a)})}function Kt(s,a,c,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(c)}catch{}}function Uc(){this.g=new vc}function Bc(s,a,c){const f=c||"";try{Ui(s,function(v,R){let V=v;d(v)&&(V=$r(v)),a.push(f+R+"="+encodeURIComponent(V))})}catch(v){throw a.push(f+"type="+encodeURIComponent("_badmap")),v}}function Un(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Un,zr),Un.prototype.g=function(){return new Bn(this.l,this.j)},Un.prototype.i=(function(s){return function(){return s}})({});function Bn(s,a){mt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Bn,mt),n=Bn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,en(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?tn(this):en(this),this.readyState==3&&Gi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,tn(this))},n.Qa=function(s){this.g&&(this.response=s,tn(this))},n.ga=function(){this.g&&tn(this)};function tn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,en(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function en(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ki(s){let a="";return ft(s,function(c,f){a+=f,a+=":",a+=c,a+=`\r
`}),a}function ts(s,a,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Ki(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):W(s,a,c))}function Z(s){mt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Z,mt);var jc=/^https?$/i,qc=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kr.g(),this.v=this.o?Ii(this.o):Ii(Kr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(R){Qi(this,R);return}if(s=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)c.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())c.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(R=>R.toLowerCase()=="content-type"),v=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qc,a,void 0))||f||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of c)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yi(this),this.u=!0,this.g.send(s),this.u=!1}catch(R){Qi(this,R)}};function Qi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Wi(s),jn(s)}function Wi(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xi(this):this.bb())},n.bb=function(){Xi(this)};function Xi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ft(s)!=4||s.Z()!=2)){if(s.u&&Ft(s)==4)yi(s.Ea,0,s);else if(Tt(s,"readystatechange"),Ft(s)==4){s.h=!1;try{const V=s.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var f;if(f=V===0){var v=String(s.D).match(Bi)[1]||null;!v&&l.self&&l.self.location&&(v=l.self.location.protocol.slice(0,-1)),f=!jc.test(v?v.toLowerCase():"")}c=f}if(c)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var R=2<Ft(s)?s.g.statusText:""}catch{R=""}s.l=R+" ["+s.Z()+"]",Wi(s)}}finally{jn(s)}}}}function jn(s,a){if(s.g){Yi(s);const c=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Tt(s,"ready");try{c.onreadystatechange=f}catch{}}}function Yi(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Ft(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Tc(a)}};function Ji(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function $c(s){const a={};s=(s.g&&2<=Ft(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(j(s[f]))continue;var c=E(s[f]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const R=a[v]||[];a[v]=R,R.push(c)}T(a,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Zi(s){this.Aa=0,this.i=[],this.j=new We,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,s),this.cb=nn("retryDelaySeedMs",1e4,s),this.Wa=nn("forwardChannelMaxRetries",2,s),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(s&&s.concurrentRequestLimit),this.Da=new Uc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Zi.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,f){vt(0),this.W=s,this.H=a||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.I=uo(this,null,this.W),$n(this)};function es(s){if(to(s),s.G==3){var a=s.U++,c=Lt(s.I);if(W(c,"SID",s.K),W(c,"RID",a),W(c,"TYPE","terminate"),rn(s,c),a=new Ht(s,s.j,a),a.L=2,a.v=Fn(Lt(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&l.Image&&(new Image().src=a.v,c=!0),c||(a.g=co(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Mn(a)}ao(s)}function qn(s){s.g&&(rs(s),s.g.cancel(),s.g=null)}function to(s){qn(s),s.u&&(l.clearTimeout(s.u),s.u=null),zn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function $n(s){if(!Mi(s.h)&&!s.s){s.s=!0;var a=s.Ga;qe||di(),$e||(qe(),$e=!0),Mr.add(a,s),s.B=0}}function zc(s,a){return xi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Qe(w(s.Ga,s,a),oo(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Ht(this,this.j,s);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(v.H=R,R=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=no(this,v,a),c=Lt(this.I),W(c,"RID",s),W(c,"CVER",22),this.D&&W(c,"X-HTTP-Session-Id",this.D),rn(this,c),R&&(this.O?a="headers="+encodeURIComponent(String(Ki(R)))+"&"+a:this.m&&ts(c,this.m,R)),Zr(this.h,v),this.Ua&&W(c,"TYPE","init"),this.P?(W(c,"$req",a),W(c,"SID","null"),v.T=!0,Wr(v,c,null)):Wr(v,c,a),this.G=2}}else this.G==3&&(s?eo(this,s):this.i.length==0||Mi(this.h)||eo(this))};function eo(s,a){var c;a?c=a.l:c=s.U++;const f=Lt(s.I);W(f,"SID",s.K),W(f,"RID",c),W(f,"AID",s.T),rn(s,f),s.m&&s.o&&ts(f,s.m,s.o),c=new Ht(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=no(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Zr(s.h,c),Wr(c,f,a)}function rn(s,a){s.H&&ft(s.H,function(c,f){W(a,f,c)}),s.l&&Ui({},function(c,f){W(a,f,c)})}function no(s,a,c){c=Math.min(s.i.length,c);var f=s.l?w(s.l.Na,s.l,s):null;t:{var v=s.i;let R=-1;for(;;){const V=["count="+c];R==-1?0<c?(R=v[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let Q=!0;for(let ut=0;ut<c;ut++){let H=v[ut].g;const pt=v[ut].map;if(H-=R,0>H)R=Math.max(0,v[ut].g-100),Q=!1;else try{Bc(pt,V,"req"+H+"_")}catch{f&&f(pt)}}if(Q){f=V.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,f}function ro(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;qe||di(),$e||(qe(),$e=!0),Mr.add(a,s),s.v=0}}function ns(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Qe(w(s.Fa,s),oo(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,so(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Qe(w(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),qn(this),so(this))};function rs(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function so(s){s.g=new Ht(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Lt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),rn(s,a),s.m&&s.o&&ts(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=Fn(Lt(a)),c.m=null,c.P=!0,Di(c,s)}n.Za=function(){this.C!=null&&(this.C=null,qn(this),ns(this),vt(19))};function zn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function io(s,a){var c=null;if(s.g==a){zn(s),rs(s),s.g=null;var f=2}else if(Jr(s.h,a))c=a.D,Li(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;f=Nn(),Tt(f,new Ci(f,c)),$n(s)}else ro(s);else if(v=a.s,v==3||v==0&&0<a.X||!(f==1&&zc(s,a)||f==2&&ns(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),v){case 1:ue(s,5);break;case 4:ue(s,10);break;case 3:ue(s,6);break;default:ue(s,2)}}}function oo(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function ue(s,a){if(s.j.info("Error code "+a),a==2){var c=w(s.fb,s),f=s.Xa;const v=!f;f=new ae(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||xn(f,"https"),Fn(f),v?Lc(f.toString(),c):Fc(f.toString(),c)}else vt(2);s.G=0,s.l&&s.l.sa(a),ao(s),to(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ao(s){if(s.G=0,s.ka=[],s.l){const a=Fi(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function uo(s,a,c){var f=c instanceof ae?Lt(c):new ae(c);if(f.g!="")a&&(f.g=a+"."+f.g),Ln(f,f.s);else{var v=l.location;f=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var R=new ae(null);f&&xn(R,f),a&&(R.g=a),v&&Ln(R,v),c&&(R.l=c),f=R}return c=s.D,a=s.ya,c&&a&&W(f,c,a),W(f,"VER",s.la),rn(s,f),f}function co(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Z(new Un({eb:c})):new Z(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lo(){}n=lo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Hn(){}Hn.prototype.g=function(s,a){return new At(s,a)};function At(s,a){mt.call(this),this.g=new Zi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!j(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!j(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Te(this)}N(At,mt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){es(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=$r(s),s=c);a.i.push(new Cc(a.Ya++,s)),a.G==3&&$n(a)},At.prototype.N=function(){this.g.l=null,delete this.j,es(this.g),delete this.g,At.aa.N.call(this)};function ho(s){Hr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(ho,Hr);function fo(){Gr.call(this),this.status=1}N(fo,Gr);function Te(s){this.g=s}N(Te,lo),Te.prototype.ua=function(){Tt(this.g,"a")},Te.prototype.ta=function(s){Tt(this.g,new ho(s))},Te.prototype.sa=function(s){Tt(this.g,new fo)},Te.prototype.ra=function(){Tt(this.g,"b")},Hn.prototype.createWebChannel=Hn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,xa=function(){return new Hn},Ma=function(){return Nn()},Oa=ie,Es={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,Jn=kn,Pi.COMPLETE="complete",ka=Pi,Ai.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",mt.prototype.listen=mt.prototype.K,sn=Ai,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Na=Z}).apply(typeof Kn<"u"?Kn:typeof self<"u"?self:typeof window<"u"?window:{});const So="@firebase/firestore",Co="4.9.0";/**
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
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let Le="12.0.0";/**
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
 */const fe=new Ra("@firebase/firestore");function Ie(){return fe.logLevel}function D(n,...t){if(fe.logLevel<=z.DEBUG){const e=t.map(Fs);fe.debug(`Firestore (${Le}): ${n}`,...e)}}function qt(n,...t){if(fe.logLevel<=z.ERROR){const e=t.map(Fs);fe.error(`Firestore (${Le}): ${n}`,...e)}}function Ve(n,...t){if(fe.logLevel<=z.WARN){const e=t.map(Fs);fe.warn(`Firestore (${Le}): ${n}`,...e)}}function Fs(n){if(typeof n=="string")return n;try{/**
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
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
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
 */function x(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,La(n,r,e)}function La(n,t,e){let r=`FIRESTORE (${Le}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw qt(r),new Error(r)}function K(n,t,e,r){let i="Unexpected state";typeof e=="string"?i=e:r=e,n||La(t,i,r)}function F(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends xe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ut{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class Fa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ph{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(yt.UNAUTHENTICATED)))}shutdown(){}}class Vh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class bh{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ut,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await i(this.currentUser)}))},l=h=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((h=>l(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ut)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string",31837,{l:r}),new Fa(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string",2055,{h:t}),new yt(t)}}class Dh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Nh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Dh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(yt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Po{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){K(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Po(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(K(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Po(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Oh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Us{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Oh(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function Ts(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const i=n.charAt(r),o=t.charAt(r);if(i!==o)return cs(i)===cs(o)?U(i,o):cs(i)?1:-1}return U(n.length,t.length)}const Mh=55296,xh=57343;function cs(n){const t=n.charCodeAt(0);return t>=Mh&&t<=xh}function be(n,t,e){return n.length===t.length&&n.every(((r,i)=>e(r,t[i])))}/**
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
 */const Vo="__name__";class Vt{constructor(t,e,r){e===void 0?e=0:e>t.length&&x(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&x(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Vt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Vt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Vt.isNumericId(t),i=Vt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Vt.extractNumericId(t).compare(Vt.extractNumericId(e)):Ts(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yt.fromString(t.substring(4,t.length-2))}}class X extends Vt{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((i=>i.length>0)))}return new X(e)}static emptyPath(){return new X([])}}const Lh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Vt{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return Lh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vo}static keyField(){return new lt([Vo])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new k(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else l==="`"?(u=!u,i++):l!=="."||u?(r+=l,i++):(o(),i++)}if(o(),u)throw new k(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
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
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
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
 */function Ua(n,t,e){if(!e)throw new k(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Fh(n,t,e,r){if(t===!0&&r===!0)throw new k(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function bo(n){if(!M.isDocumentKey(n))throw new k(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Do(n){if(M.isDocumentKey(n))throw new k(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ba(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Bs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function De(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Bs(n);throw new k(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */function nt(n,t){const e={typeString:n};return t&&(e.value=t),e}function An(n,t){if(!Ba(n))throw new k(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const i=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(i&&typeof u!==i){e=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new k(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const No=-62135596800,ko=1e6;class Y{static now(){return Y.fromMillis(Date.now())}static fromDate(t){return Y.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*ko);return new Y(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<No)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ko}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Y._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(An(t,Y._jsonSchema))return new Y(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-No;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Y._jsonSchemaVersion="firestore/timestamp/1.0",Y._jsonSchema={type:nt("string",Y._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new Y(0,0))}static max(){return new L(new Y(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _n=-1;function Uh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new Y(e+1,0):new Y(e,r));return new Zt(i,M.empty(),t)}function Bh(n){return new Zt(n.readTime,n.key,_n)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(L.min(),M.empty(),_n)}static max(){return new Zt(L.max(),M.empty(),_n)}}function jh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
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
 */const qh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $h{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Fe(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==qh)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let i=0,o=0,u=!1;t.forEach((l=>{++i,l.next((()=>{++o,u&&o===i&&e()}),(h=>r(h)))})),u=!0,o===i&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((i=>i?S.resolve(i):r()));return e}static forEach(t,e){const r=[];return t.forEach(((i,o)=>{r.push(e.call(this,i,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,i)=>{const o=t.length,u=new Array(o);let l=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next((_=>{u[d]=_,++l,l===o&&r(u)}),(_=>i(_)))}}))}static doWhile(t,e){return new S(((r,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):r()};o()}))}}function zh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ue(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Tr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Tr.ce=-1;/**
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
 */const js=-1;function vr(n){return n==null}function ur(n){return n===0&&1/n==-1/0}function Hh(n){return typeof n=="number"&&Number.isInteger(n)&&!ur(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ja="";function Gh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Oo(t)),t=Kh(n.get(e),t);return Oo(t)}function Kh(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ja:e+="";break;default:e+=o}}return e}function Oo(n){return n+ja+""}/**
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
 */function Mo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function qa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class J{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new J(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new J(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qn(this.root,t,this.comparator,!0)}}class Qn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=i??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ct(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw x(27949);return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(t,e,r,i,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new J(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xo(this.data.getIterator())}getIteratorFrom(t){return new xo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class xo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ct{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new st(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
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
 */class $a extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new $a("Invalid base64 string: "+o):o}})(t);return new ht(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Qh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(K(!!n,39018),typeof n=="string"){let t=0;const e=Qh.exec(n);if(K(!!e,46558,{timestamp:n}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ee(n){return typeof n=="string"?ht.fromBase64String(n):ht.fromUint8Array(n)}/**
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
 */const za="server_timestamp",Ha="__type__",Ga="__previous_value__",Ka="__local_write_time__";function qs(n){return(n?.mapValue?.fields||{})[Ha]?.stringValue===za}function Ir(n){const t=n.mapValue.fields[Ga];return qs(t)?Ir(t):t}function yn(n){const t=te(n.mapValue.fields[Ka].timestampValue);return new Y(t.seconds,t.nanos)}/**
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
 */class Wh{constructor(t,e,r,i,o,u,l,h,d,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=_}}const cr="(default)";class En{constructor(t,e){this.projectId=t,this.database=e||cr}static empty(){return new En("","")}get isDefaultDatabase(){return this.database===cr}isEqual(t){return t instanceof En&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Qa="__type__",Xh="__max__",Wn={mapValue:{}},Wa="__vector__",lr="value";function ne(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qs(n)?4:Jh(n)?9007199254740991:Yh(n)?10:11:x(28295,{value:n})}function Ot(n,t){if(n===t)return!0;const e=ne(n);if(e!==ne(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yn(n).isEqual(yn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=te(i.timestampValue),l=te(o.timestampValue);return u.seconds===l.seconds&&u.nanos===l.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(i,o){return ee(i.bytesValue).isEqual(ee(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(i,o){return tt(i.geoPointValue.latitude)===tt(o.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(o.geoPointValue.longitude)})(n,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return tt(i.integerValue)===tt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=tt(i.doubleValue),l=tt(o.doubleValue);return u===l?ur(u)===ur(l):isNaN(u)&&isNaN(l)}return!1})(n,t);case 9:return be(n.arrayValue.values||[],t.arrayValue.values||[],Ot);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Mo(u)!==Mo(l))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(l[h]===void 0||!Ot(u[h],l[h])))return!1;return!0})(n,t);default:return x(52216,{left:n})}}function Tn(n,t){return(n.values||[]).find((e=>Ot(e,t)))!==void 0}function Ne(n,t){if(n===t)return 0;const e=ne(n),r=ne(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const l=tt(o.integerValue||o.doubleValue),h=tt(u.integerValue||u.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1})(n,t);case 3:return Lo(n.timestampValue,t.timestampValue);case 4:return Lo(yn(n),yn(t));case 5:return Ts(n.stringValue,t.stringValue);case 6:return(function(o,u){const l=ee(o),h=ee(u);return l.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const l=o.split("/"),h=u.split("/");for(let d=0;d<l.length&&d<h.length;d++){const _=U(l[d],h[d]);if(_!==0)return _}return U(l.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const l=U(tt(o.latitude),tt(u.latitude));return l!==0?l:U(tt(o.longitude),tt(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return Fo(n.arrayValue,t.arrayValue);case 10:return(function(o,u){const l=o.fields||{},h=u.fields||{},d=l[lr]?.arrayValue,_=h[lr]?.arrayValue,A=U(d?.values?.length||0,_?.values?.length||0);return A!==0?A:Fo(d,_)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===Wn.mapValue&&u===Wn.mapValue)return 0;if(o===Wn.mapValue)return 1;if(u===Wn.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),d=u.fields||{},_=Object.keys(d);h.sort(),_.sort();for(let A=0;A<h.length&&A<_.length;++A){const w=Ts(h[A],_[A]);if(w!==0)return w;const P=Ne(l[h[A]],d[_[A]]);if(P!==0)return P}return U(h.length,_.length)})(n.mapValue,t.mapValue);default:throw x(23264,{he:e})}}function Lo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=te(n),r=te(t),i=U(e.seconds,r.seconds);return i!==0?i:U(e.nanos,r.nanos)}function Fo(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ne(e[i],r[i]);if(o)return o}return U(e.length,r.length)}function ke(n){return vs(n)}function vs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ee(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return M.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=vs(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${vs(e.fields[u])}`;return i+"}"})(n.mapValue):x(61005,{value:n})}function Zn(n){switch(ne(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ir(n);return t?16+Zn(t):16;case 5:return 2*n.stringValue.length;case 6:return ee(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,o)=>i+Zn(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return me(r.fields,((o,u)=>{i+=o.length+Zn(u)})),i})(n.mapValue);default:throw x(13486,{value:n})}}function Is(n){return!!n&&"integerValue"in n}function $s(n){return!!n&&"arrayValue"in n}function Uo(n){return!!n&&"nullValue"in n}function Bo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function tr(n){return!!n&&"mapValue"in n}function Yh(n){return(n?.mapValue?.fields||{})[Qa]?.stringValue===Wa}function ln(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return me(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=ln(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ln(n.arrayValue.values[e]);return t}return{...n}}function Jh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Xh}/**
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!tr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ln(e)}setAll(t){let e=lt.emptyPath(),r={},i=[];t.forEach(((u,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=l.popLast()}u?r[l.lastSegment()]=ln(u):i.push(l.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());tr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ot(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];tr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){me(e,((i,o)=>t[i]=o));for(const i of r)delete t[i]}clone(){return new wt(ln(this.value))}}function Xa(n){const t=[];return me(n.fields,((e,r)=>{const i=new lt([e]);if(tr(r)){const o=Xa(r.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)})),new Ct(t)}/**
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
 */class Et{constructor(t,e,r,i,o,u,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,L.min(),L.min(),L.min(),wt.empty(),0)}static newFoundDocument(t,e,r,i){return new Et(t,1,e,L.min(),r,i,0)}static newNoDocument(t,e){return new Et(t,2,e,L.min(),L.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,L.min(),L.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class hr{constructor(t,e){this.position=t,this.inclusive=e}}function jo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=Ne(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ot(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class fr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zh(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Ya{}class rt extends Ya{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ef(t,e,r):e==="array-contains"?new sf(t,r):e==="in"?new of(t,r):e==="not-in"?new af(t,r):e==="array-contains-any"?new uf(t,r):new rt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new nf(t,r):new rf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Ne(e,this.value)):e!==null&&ne(this.value)===ne(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Ya{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Mt(t,e)}matches(t){return Ja(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ja(n){return n.op==="and"}function Za(n){return tf(n)&&Ja(n)}function tf(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function As(n){if(n instanceof rt)return n.field.canonicalString()+n.op.toString()+ke(n.value);if(Za(n))return n.filters.map((t=>As(t))).join(",");{const t=n.filters.map((e=>As(e))).join(",");return`${n.op}(${t})`}}function tu(n,t){return n instanceof rt?(function(r,i){return i instanceof rt&&r.op===i.op&&r.field.isEqual(i.field)&&Ot(r.value,i.value)})(n,t):n instanceof Mt?(function(r,i){return i instanceof Mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((o,u,l)=>o&&tu(u,i.filters[l])),!0):!1})(n,t):void x(19439)}function eu(n){return n instanceof rt?(function(e){return`${e.field.canonicalString()} ${e.op} ${ke(e.value)}`})(n):n instanceof Mt?(function(e){return e.op.toString()+" {"+e.getFilters().map(eu).join(" ,")+"}"})(n):"Filter"}class ef extends rt{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class nf extends rt{constructor(t,e){super(t,"in",e),this.keys=nu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class rf extends rt{constructor(t,e){super(t,"not-in",e),this.keys=nu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function nu(n,t){return(t.arrayValue?.values||[]).map((e=>M.fromName(e.referenceValue)))}class sf extends rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $s(e)&&Tn(e.arrayValue,this.value)}}class of extends rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class af extends rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Tn(this.value.arrayValue,e)}}class uf extends rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Tn(this.value.arrayValue,r)))}}/**
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
 */class cf{constructor(t,e=null,r=[],i=[],o=null,u=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=l,this.Te=null}}function $o(n,t=null,e=[],r=[],i=null,o=null,u=null){return new cf(n,t,e,r,i,o,u)}function zs(n){const t=F(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>As(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),vr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>ke(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>ke(r))).join(",")),t.Te=e}return t.Te}function Hs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Zh(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!tu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qo(n.startAt,t.startAt)&&qo(n.endAt,t.endAt)}function ws(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Ar{constructor(t,e=null,r=[],i=[],o=null,u="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=l,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function lf(n,t,e,r,i,o,u,l){return new Ar(n,t,e,r,i,o,u,l)}function Gs(n){return new Ar(n)}function zo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hf(n){return n.collectionGroup!==null}function hn(n){const t=F(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let l=new st(lt.comparator);return u.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new fr(o,r))})),e.has(lt.keyField().canonicalString())||t.Ie.push(new fr(lt.keyField(),r))}return t.Ie}function bt(n){const t=F(n);return t.Ee||(t.Ee=ff(t,hn(n))),t.Ee}function ff(n,t){if(n.limitType==="F")return $o(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new fr(i.field,o)}));const e=n.endAt?new hr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new hr(n.startAt.position,n.startAt.inclusive):null;return $o(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Rs(n,t,e){return new Ar(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function wr(n,t){return Hs(bt(n),bt(t))&&n.limitType===t.limitType}function ru(n){return`${zs(bt(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((i=>eu(i))).join(", ")}]`),vr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((i=>ke(i))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((i=>ke(i))).join(",")),`Target(${r})`})(bt(n))}; limitType=${n.limitType})`}function Rr(n,t){return t.isFoundDocument()&&(function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,i){for(const o of hn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0})(n,t)&&(function(r,i){return!(r.startAt&&!(function(u,l,h){const d=jo(u,l,h);return u.inclusive?d<=0:d<0})(r.startAt,hn(r),i)||r.endAt&&!(function(u,l,h){const d=jo(u,l,h);return u.inclusive?d>=0:d>0})(r.endAt,hn(r),i))})(n,t)}function df(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function su(n){return(t,e)=>{let r=!1;for(const i of hn(n)){const o=mf(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function mf(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):(function(o,u,l){const h=u.data.field(o),d=l.data.field(o);return h!==null&&d!==null?Ne(h,d):x(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,((e,r)=>{for(const[i,o]of r)t(i,o)}))}isEmpty(){return qa(this.inner)}size(){return this.innerSize}}/**
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
 */const pf=new J(M.comparator);function $t(){return pf}const iu=new J(M.comparator);function on(...n){let t=iu;for(const e of n)t=t.insert(e.key,e);return t}function ou(n){let t=iu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function le(){return fn()}function au(){return fn()}function fn(){return new pe((n=>n.toString()),((n,t)=>n.isEqual(t)))}const gf=new J(M.comparator),_f=new st(M.comparator);function B(...n){let t=_f;for(const e of n)t=t.add(e);return t}const yf=new st(U);function Ef(){return yf}/**
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
 */function Ks(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ur(t)?"-0":t}}function uu(n){return{integerValue:""+n}}function Tf(n,t){return Hh(t)?uu(t):Ks(n,t)}/**
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
 */class Sr{constructor(){this._=void 0}}function vf(n,t,e){return n instanceof dr?(function(i,o){const u={fields:{[Ha]:{stringValue:za},[Ka]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&qs(o)&&(o=Ir(o)),o&&(u.fields[Ga]=o),{mapValue:u}})(e,t):n instanceof vn?lu(n,t):n instanceof In?hu(n,t):(function(i,o){const u=cu(i,o),l=Ho(u)+Ho(i.Ae);return Is(u)&&Is(i.Ae)?uu(l):Ks(i.serializer,l)})(n,t)}function If(n,t,e){return n instanceof vn?lu(n,t):n instanceof In?hu(n,t):e}function cu(n,t){return n instanceof mr?(function(r){return Is(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class dr extends Sr{}class vn extends Sr{constructor(t){super(),this.elements=t}}function lu(n,t){const e=fu(t);for(const r of n.elements)e.some((i=>Ot(i,r)))||e.push(r);return{arrayValue:{values:e}}}class In extends Sr{constructor(t){super(),this.elements=t}}function hu(n,t){let e=fu(t);for(const r of n.elements)e=e.filter((i=>!Ot(i,r)));return{arrayValue:{values:e}}}class mr extends Sr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Ho(n){return tt(n.integerValue||n.doubleValue)}function fu(n){return $s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Af(n,t){return n.field.isEqual(t.field)&&(function(r,i){return r instanceof vn&&i instanceof vn||r instanceof In&&i instanceof In?be(r.elements,i.elements,Ot):r instanceof mr&&i instanceof mr?Ot(r.Ae,i.Ae):r instanceof dr&&i instanceof dr})(n.transform,t.transform)}class wf{constructor(t,e){this.version=t,this.transformResults=e}}class Bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Bt}static exists(t){return new Bt(void 0,t)}static updateTime(t){return new Bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function er(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Cr{}function du(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new pu(n.key,Bt.none()):new wn(n.key,n.data,Bt.none());{const e=n.data,r=wt.empty();let i=new st(lt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new ge(n.key,r,new Ct(i.toArray()),Bt.none())}}function Rf(n,t,e){n instanceof wn?(function(i,o,u){const l=i.value.clone(),h=Ko(i.fieldTransforms,o,u.transformResults);l.setAll(h),o.convertToFoundDocument(u.version,l).setHasCommittedMutations()})(n,t,e):n instanceof ge?(function(i,o,u){if(!er(i.precondition,o))return void o.convertToUnknownDocument(u.version);const l=Ko(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(mu(i)),h.setAll(l),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function dn(n,t,e,r){return n instanceof wn?(function(o,u,l,h){if(!er(o.precondition,u))return l;const d=o.value.clone(),_=Qo(o.fieldTransforms,h,u);return d.setAll(_),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null})(n,t,e,r):n instanceof ge?(function(o,u,l,h){if(!er(o.precondition,u))return l;const d=Qo(o.fieldTransforms,h,u),_=u.data;return _.setAll(mu(o)),_.setAll(d),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,u,l){return er(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):l})(n,t,e)}function Sf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=cu(r.transform,i||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function Go(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&be(r,i,((o,u)=>Af(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class wn extends Cr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ge extends Cr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function mu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Ko(n,t,e){const r=new Map;K(n.length===e.length,32656,{Re:e.length,Ve:n.length});for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,l=t.data.field(o.field);r.set(o.field,If(u,l,e[i]))}return r}function Qo(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,vf(o,u,t))}return r}class pu extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cf extends Cr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Pf{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Rf(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=dn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=au();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let l=this.applyToLocalView(u,o.mutatedFields);l=e.has(i.key)?null:l;const h=du(u,l);h!==null&&r.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),B())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,((e,r)=>Go(e,r)))&&be(this.baseMutations,t.baseMutations,((e,r)=>Go(e,r)))}}class Qs{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let i=(function(){return gf})();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,r[u].version);return new Qs(t,e,r,i)}}/**
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
 */class Vf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class bf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var et,$;function Df(n){switch(n){case C.OK:return x(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function gu(n){if(n===void 0)return qt("GRPC error has no .code"),C.UNKNOWN;switch(n){case et.OK:return C.OK;case et.CANCELLED:return C.CANCELLED;case et.UNKNOWN:return C.UNKNOWN;case et.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case et.INTERNAL:return C.INTERNAL;case et.UNAVAILABLE:return C.UNAVAILABLE;case et.UNAUTHENTICATED:return C.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case et.NOT_FOUND:return C.NOT_FOUND;case et.ALREADY_EXISTS:return C.ALREADY_EXISTS;case et.PERMISSION_DENIED:return C.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case et.ABORTED:return C.ABORTED;case et.OUT_OF_RANGE:return C.OUT_OF_RANGE;case et.UNIMPLEMENTED:return C.UNIMPLEMENTED;case et.DATA_LOSS:return C.DATA_LOSS;default:return x(39323,{code:n})}}($=et||(et={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Nf(){return new TextEncoder}/**
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
 */const kf=new Yt([4294967295,4294967295],0);function Wo(n){const t=Nf().encode(n),e=new Da;return e.update(t),new Uint8Array(e.digest())}function Xo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Yt([e,r],0),new Yt([i,o],0)]}class Ws{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new an(`Invalid padding: ${e}`);if(r<0)throw new an(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new an(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=Yt.fromNumber(this.ge)}ye(t,e,r){let i=t.add(e.multiply(Yt.fromNumber(r)));return i.compare(kf)===1&&(i=new Yt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=Wo(t),[r,i]=Xo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(r,i,o);if(!this.we(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Ws(o,i,e);return r.forEach((l=>u.insert(l))),u}insert(t){if(this.ge===0)return;const e=Wo(t),[r,i]=Xo(e);for(let o=0;o<this.hashCount;o++){const u=this.ye(r,i,o);this.Se(u)}}Se(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Rn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Pr(L.min(),i,new J(U),$t(),B())}}class Rn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Rn(r,e,B(),B(),B())}}/**
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
 */class nr{constructor(t,e,r,i){this.be=t,this.removedTargetIds=e,this.key=r,this.De=i}}class _u{constructor(t,e){this.targetId=t,this.Ce=e}}class yu{constructor(t,e,r=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Yo{constructor(){this.ve=0,this.Fe=Jo(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=B(),e=B(),r=B();return this.Fe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:x(38017,{changeType:o})}})),new Rn(this.Me,this.xe,t,e,r)}qe(){this.Oe=!1,this.Fe=Jo()}Qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,K(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Of{constructor(t){this.Ge=t,this.ze=new Map,this.je=$t(),this.Je=Xn(),this.He=Xn(),this.Ye=new J(U)}Ze(t){for(const e of t.be)t.De&&t.De.isFoundDocument()?this.Xe(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,(e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:x(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach(((r,i)=>{this.rt(i)&&e(i)}))}st(t){const e=t.targetId,r=t.Ce.count,i=this.ot(e);if(i){const o=i.target;if(ws(o))if(r===0){const u=new M(o.path);this.et(e,u,Et.newNoDocument(u,L.min()))}else K(r===1,20013,{expectedCount:r});else{const u=this._t(e);if(u!==r){const l=this.ut(t),h=l?this.ct(l,t,u):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,l;try{u=ee(r).toUint8Array()}catch(h){if(h instanceof $a)return Ve("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new Ws(u,i,o)}catch(h){return Ve(h instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.ge===0?null:l}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let i=0;return r.forEach((o=>{const u=this.Ge.ht(),l=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.et(e,o,null),i++)})),i}Tt(t){const e=new Map;this.ze.forEach(((o,u)=>{const l=this.ot(u);if(l){if(o.current&&ws(l.target)){const h=new M(l.target.path);this.It(h).has(u)||this.Et(u,h)||this.et(u,h,Et.newNoDocument(h,t))}o.Be&&(e.set(u,o.ke()),o.qe())}}));let r=B();this.He.forEach(((o,u)=>{let l=!0;u.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(o))})),this.je.forEach(((o,u)=>u.setReadTime(t)));const i=new Pr(t,e,this.Ye,this.je,r);return this.je=$t(),this.Je=Xn(),this.He=Xn(),this.Ye=new J(U),i}Xe(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).Qe(e.key,r),this.je=this.je.insert(e.key,e),this.Je=this.Je.insert(e.key,this.It(e.key).add(t)),this.He=this.He.insert(e.key,this.dt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const i=this.nt(t);this.Et(t,e)?i.Qe(e,1):i.$e(e),this.He=this.He.insert(e,this.dt(e).delete(t)),this.He=this.He.insert(e,this.dt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let e=this.ze.get(t);return e||(e=new Yo,this.ze.set(t,e)),e}dt(t){let e=this.He.get(t);return e||(e=new st(U),this.He=this.He.insert(t,e)),e}It(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Yo),this.Ge.getRemoteKeysForTarget(t).forEach((e=>{this.et(t,e,null)}))}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Xn(){return new J(M.comparator)}function Jo(){return new J(M.comparator)}const Mf={asc:"ASCENDING",desc:"DESCENDING"},xf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lf={and:"AND",or:"OR"};class Ff{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ss(n,t){return n.useProto3Json||vr(t)?t:{value:t}}function pr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Eu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Uf(n,t){return pr(n,t.toTimestamp())}function Dt(n){return K(!!n,49232),L.fromTimestamp((function(e){const r=te(e);return new Y(r.seconds,r.nanos)})(n))}function Xs(n,t){return Cs(n,t).canonicalString()}function Cs(n,t){const e=(function(i){return new X(["projects",i.projectId,"databases",i.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Tu(n){const t=X.fromString(n);return K(Ru(t),10190,{key:t.toString()}),t}function Ps(n,t){return Xs(n.databaseId,t.path)}function ls(n,t){const e=Tu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(Iu(e))}function vu(n,t){return Xs(n.databaseId,t)}function Bf(n){const t=Tu(n);return t.length===4?X.emptyPath():Iu(t)}function Vs(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Iu(n){return K(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Zo(n,t,e){return{name:Ps(n,t),fields:e.value.mapValue.fields}}function jf(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,_){return d.useProto3Json?(K(_===void 0||typeof _=="string",58123),ht.fromBase64String(_||"")):(K(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ht.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),u=t.targetChange.cause,l=u&&(function(d){const _=d.code===void 0?C.UNKNOWN:gu(d.code);return new k(_,d.message||"")})(u);e=new yu(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ls(n,r.document.name),o=Dt(r.document.updateTime),u=r.document.createTime?Dt(r.document.createTime):L.min(),l=new wt({mapValue:{fields:r.document.fields}}),h=Et.newFoundDocument(i,o,u,l),d=r.targetIds||[],_=r.removedTargetIds||[];e=new nr(d,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ls(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),u=Et.newNoDocument(i,o),l=r.removedTargetIds||[];e=new nr([],l,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ls(n,r.document),o=r.removedTargetIds||[];e=new nr([],o,i,null)}else{if(!("filter"in t))return x(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new bf(i,o),l=r.targetId;e=new _u(l,u)}}return e}function qf(n,t){let e;if(t instanceof wn)e={update:Zo(n,t.key,t.value)};else if(t instanceof pu)e={delete:Ps(n,t.key)};else if(t instanceof ge)e={update:Zo(n,t.key,t.data),updateMask:Yf(t.fieldMask)};else{if(!(t instanceof Cf))return x(16599,{Vt:t.type});e={verify:Ps(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,u){const l=u.transform;if(l instanceof dr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof In)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mr)return{fieldPath:u.field.canonicalString(),increment:l.Ae};throw x(20930,{transform:u.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Uf(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x(27497)})(n,t.precondition)),e}function $f(n,t){return n&&n.length>0?(K(t!==void 0,14353),n.map((e=>(function(i,o){let u=i.updateTime?Dt(i.updateTime):Dt(o);return u.isEqual(L.min())&&(u=Dt(o)),new wf(u,i.transformResults||[])})(e,t)))):[]}function zf(n,t){return{documents:[vu(n,t.path)]}}function Hf(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=vu(n,i);const o=(function(d){if(d.length!==0)return wu(Mt.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(d){if(d.length!==0)return d.map((_=>(function(w){return{field:we(w.field),direction:Qf(w.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const l=Ss(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ft:e,parent:i}}function Gf(n){let t=Bf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1,65062);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(A){const w=Au(A);return w instanceof Mt&&Za(w)?w.getFilters():[w]})(e.where));let u=[];e.orderBy&&(u=(function(A){return A.map((w=>(function(N){return new fr(Re(N.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(w)))})(e.orderBy));let l=null;e.limit&&(l=(function(A){let w;return w=typeof A=="object"?A.value:A,vr(w)?null:w})(e.limit));let h=null;e.startAt&&(h=(function(A){const w=!!A.before,P=A.values||[];return new hr(P,w)})(e.startAt));let d=null;return e.endAt&&(d=(function(A){const w=!A.before,P=A.values||[];return new hr(P,w)})(e.endAt)),lf(t,i,u,o,l,"F",h,d)}function Kf(n,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Au(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Re(e.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Re(e.unaryFilter.field);return rt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Re(e.unaryFilter.field);return rt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Re(e.unaryFilter.field);return rt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(n):n.fieldFilter!==void 0?(function(e){return rt.create(Re(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Mt.create(e.compositeFilter.filters.map((r=>Au(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(e.compositeFilter.op))})(n):x(30097,{filter:n})}function Qf(n){return Mf[n]}function Wf(n){return xf[n]}function Xf(n){return Lf[n]}function we(n){return{fieldPath:n.canonicalString()}}function Re(n){return lt.fromServerFormat(n.fieldPath)}function wu(n){return n instanceof rt?(function(e){if(e.op==="=="){if(Bo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NAN"}};if(Uo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Bo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NAN"}};if(Uo(e.value))return{unaryFilter:{field:we(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:we(e.field),op:Wf(e.op),value:e.value}}})(n):n instanceof Mt?(function(e){const r=e.getFilters().map((i=>wu(i)));return r.length===1?r[0]:{compositeFilter:{op:Xf(e.op),filters:r}}})(n):x(54877,{filter:n})}function Yf(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ru(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Qt{constructor(t,e,r,i,o=L.min(),u=L.min(),l=ht.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Jf{constructor(t){this.yt=t}}function Zf(n){const t=Gf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rs(t,t.limit,"L"):t}/**
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
 */class td{constructor(){this.Cn=new ed}addToCollectionParentIndex(t,e){return this.Cn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Zt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class ed{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(X.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(X.comparator)).toArray()}}/**
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
 */const ta={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Su=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(Su,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
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
 */class Oe{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Oe(0)}static cr(){return new Oe(-1)}}/**
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
 */const ea="LruGarbageCollector",nd=1048576;function na([n,t],[e,r]){const i=U(n,e);return i===0?U(t,r):i}class rd{constructor(t){this.Ir=t,this.buffer=new st(na),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();na(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class sd{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){D(ea,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ue(e)?D(ea,"Ignoring IndexedDB error during garbage collection: ",e):await Fe(e)}await this.Vr(3e5)}))}}class id{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(Tr.ce);const r=new rd(e);return this.mr.forEachTarget(t,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(t,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.mr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(ta)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ta):this.yr(t,e)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let r,i,o,u,l,h,d;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),i=this.params.maximumSequenceNumbersToCollect):i=A,u=Date.now(),this.nthSequenceNumber(t,i)))).next((A=>(r=A,l=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(d=Date.now(),Ie()<=z.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${i} in `+(l-u)+`ms
	Removed ${o} targets in `+(h-l)+`ms
	Removed ${A} documents in `+(d-h)+`ms
Total Duration: ${d-_}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:A}))))}}function od(n,t){return new id(n,t)}/**
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
 */class ad{constructor(){this.changes=new pe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class ud{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class cd{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(r=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(r!==null&&dn(r.mutation,i,Ct.empty(),Y.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,B()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=B()){const i=le();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,r).next((o=>{let u=on();return o.forEach(((l,h)=>{u=u.insert(l,h.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=le();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,B())))}populateOverlays(t,e,r){const i=[];return r.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,l)=>{e.set(u,l)}))}))}computeViews(t,e,r,i){let o=$t();const u=fn(),l=(function(){return fn()})();return e.forEach(((h,d)=>{const _=r.get(d.key);i.has(d.key)&&(_===void 0||_.mutation instanceof ge)?o=o.insert(d.key,d):_!==void 0?(u.set(d.key,_.mutation.getFieldMask()),dn(_.mutation,d,_.mutation.getFieldMask(),Y.now())):u.set(d.key,Ct.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((d,_)=>u.set(d,_))),e.forEach(((d,_)=>l.set(d,new ud(_,u.get(d)??null)))),l)))}recalculateAndSaveOverlays(t,e){const r=fn();let i=new J(((u,l)=>u-l)),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const l of u)l.keys().forEach((h=>{const d=e.get(h);if(d===null)return;let _=r.get(h)||Ct.empty();_=l.applyToLocalView(d,_),r.set(h,_);const A=(i.get(l.batchId)||B()).add(h);i=i.insert(l.batchId,A)}))})).next((()=>{const u=[],l=i.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),d=h.key,_=h.value,A=au();_.forEach((w=>{if(!o.has(w)){const P=du(e.get(w),r.get(w));P!==null&&A.set(w,P),o=o.add(w)}})),u.push(this.documentOverlayCache.saveOverlays(t,d,A))}return S.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,i){return(function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(le());let l=_n,h=o;return u.next((d=>S.forEach(d,((_,A)=>(l<A.largestBatchId&&(l=A.largestBatchId),o.get(_)?S.resolve():this.remoteDocumentCache.getEntry(t,_).next((w=>{h=h.insert(_,w)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,h,d,B()))).next((_=>({batchId:l,changes:ou(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((r=>{let i=on();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=on();return this.indexManager.getCollectionParents(t,o).next((l=>S.forEach(l,(h=>{const d=(function(A,w){return new Ar(w,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next((_=>{_.forEach(((A,w)=>{u=u.insert(A,w)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i)))).next((u=>{o.forEach(((h,d)=>{const _=d.getKey();u.get(_)===null&&(u=u.insert(_,Et.newInvalidDocument(_)))}));let l=on();return u.forEach(((h,d)=>{const _=o.get(h);_!==void 0&&dn(_.mutation,d,Ct.empty(),Y.now()),Rr(e,d)&&(l=l.insert(h,d))})),l}))}}/**
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
 */class ld{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return S.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,(function(i){return{name:i.name,query:Zf(i.bundledQuery),readTime:Dt(i.readTime)}})(e)),S.resolve()}}/**
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
 */class hd{constructor(){this.overlays=new J(M.comparator),this.qr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=le();return S.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&r.set(i,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((i,o)=>{this.St(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.qr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=le(),o=e.length+1,u=new M(e.child("")),l=this.overlays.getIteratorFrom(u);for(;l.hasNext();){const h=l.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new J(((d,_)=>d-_));const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let _=o.get(d.largestBatchId);_===null&&(_=le(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const l=le(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,_)=>l.set(d,_))),!(l.size()>=i)););return S.resolve(l)}St(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Vf(e,r));let o=this.qr.get(e);o===void 0&&(o=B(),this.qr.set(e,o)),this.qr.set(e,o.add(r.key))}}/**
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
 */class fd{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
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
 */class Ys{constructor(){this.Qr=new st(it.$r),this.Ur=new st(it.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Gr(new it(t,e))}zr(t,e){t.forEach((r=>this.removeReference(r,e)))}jr(t){const e=new M(new X([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.Ur.forEachInRange([r,i],(u=>{this.Gr(u),o.push(u.key)})),o}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new M(new X([])),r=new it(e,t),i=new it(e,t+1);let o=B();return this.Ur.forEachInRange([r,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new it(t,0),r=this.Qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return M.comparator(t.key,e.key)||U(t.Yr,e.Yr)}static Kr(t,e){return U(t.Yr,e.Yr)||M.comparator(t.key,e.key)}}/**
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
 */class dd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new st(it.$r)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Pf(o,e,r,i);this.mutationQueue.push(u);for(const l of i)this.Zr=this.Zr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.ei(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?js:this.tr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],(u=>{const l=this.Xr(u.Yr);o.push(l)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(U);return e.forEach((i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,u],(l=>{r=r.add(l.Yr)}))})),S.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let l=new st(U);return this.Zr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(h.Yr)),!0)}),u),S.resolve(this.ti(l))}ti(t){const e=[];return t.forEach((r=>{const i=this.Xr(r);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){K(this.ni(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return S.forEach(e.mutations,(i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,e){const r=new it(e,0),i=this.Zr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ni(t,e){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class md{constructor(t){this.ri=t,this.docs=(function(){return new J(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.ri(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=$t();return e.forEach((i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=$t();const u=e.path,l=new M(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:d,value:{document:_}}=h.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||jh(Bh(_),r)<=0||(i.has(_.key)||Rr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){x(9500)}ii(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new pd(this)}getSize(t){return S.resolve(this.size)}}class pd extends ad{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}/**
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
 */class gd{constructor(t){this.persistence=t,this.si=new pe((e=>zs(e)),Hs),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.oi=0,this._i=new Ys,this.targetCount=0,this.ai=Oe.ur()}forEachTarget(t,e){return this.si.forEach(((r,i)=>e(i))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.oi&&(this.oi=e),S.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Oe(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Pr(e),S.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.si.forEach(((u,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.si.delete(u),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)})),S.waitFor(o).next((()=>i))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.si.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this._i.Wr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this._i.zr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this._i.Hr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this._i.containsKey(e))}}/**
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
 */class Cu{constructor(t,e){this.ui={},this.overlays={},this.ci=new Tr(0),this.li=!1,this.li=!0,this.hi=new fd,this.referenceDelegate=t(this),this.Pi=new gd(this),this.indexManager=new td,this.remoteDocumentCache=(function(i){return new md(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new Jf(e),this.Ii=new ld(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new hd,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ui[t.toKey()];return r||(r=new dd(e,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const i=new _d(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ai(t,e){return S.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,e))))}}class _d extends $h{constructor(t){super(),this.currentSequenceNumber=t}}class Js{constructor(t){this.persistence=t,this.Ri=new Ys,this.Vi=null}static mi(t){return new Js(t)}get fi(){if(this.Vi)return this.Vi;throw x(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.fi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.fi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.fi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.fi,(r=>{const i=M.fromPath(r);return this.gi(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Vi=null,e.apply(t))))}updateLimboDocument(t,e){return this.gi(t,e).next((r=>{r?this.fi.delete(e.toString()):this.fi.add(e.toString())}))}Ti(t){return 0}gi(t,e){return S.or([()=>S.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class gr{constructor(t,e){this.persistence=t,this.pi=new pe((r=>Gh(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=od(this,e)}static mi(t,e){return new gr(t,e)}Ei(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((i=>r+i))))}wr(t){let e=0;return this.pr(t,(r=>{e++})).next((()=>e))}pr(t,e){return S.forEach(this.pi,((r,i)=>this.br(t,r,i).next((o=>o?S.resolve():e(i)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(t,(u=>this.br(t,u,e).next((l=>{l||(r++,o.removeEntry(u,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.pi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),S.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Zn(t.data.value)),e}br(t,e,r){return S.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.pi.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Zs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Es=r,this.ds=i}static As(t,e){let r=B(),i=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Zs(t,e.fromCache,r,i)}}/**
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
 */class yd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ed{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return ll()?8:zh(ul())>0?6:4})()}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.ys(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ws(t,e,i,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new yd;return this.Ss(t,e,u).next((l=>{if(o.result=l,this.Vs)return this.bs(t,e,u,l.size)}))})).next((()=>o.result))}bs(t,e,r,i){return r.documentReadCount<this.fs?(Ie()<=z.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),S.resolve()):(Ie()<=z.DEBUG&&D("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ie()<=z.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):S.resolve())}ys(t,e){if(zo(e))return S.resolve(null);let r=bt(e);return this.indexManager.getIndexType(t,r).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Rs(e,null,"F"),r=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=B(...o);return this.ps.getDocuments(t,u).next((l=>this.indexManager.getMinOffset(t,r).next((h=>{const d=this.Ds(e,l);return this.Cs(e,d,u,h.readTime)?this.ys(t,Rs(e,null,"F")):this.vs(t,d,e,h)}))))})))))}ws(t,e,r,i){return zo(e)||i.isEqual(L.min())?S.resolve(null):this.ps.getDocuments(t,r).next((o=>{const u=this.Ds(e,o);return this.Cs(e,u,r,i)?S.resolve(null):(Ie()<=z.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ae(e)),this.vs(t,u,e,Uh(i,_n)).next((l=>l)))}))}Ds(t,e){let r=new st(su(t));return e.forEach(((i,o)=>{Rr(t,o)&&(r=r.add(o))})),r}Cs(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(t,e,r){return Ie()<=z.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.ps.getDocumentsMatchingQuery(t,e,Zt.min(),r)}vs(t,e,r,i){return this.ps.getDocumentsMatchingQuery(t,r,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
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
 */const ti="LocalStore",Td=3e8;class vd{constructor(t,e,r,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new J(U),this.xs=new pe((o=>zs(o)),Hs),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cd(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ms)))}}function Id(n,t,e,r){return new vd(n,t,e,r)}async function Pu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next((o=>(i=o,e.Bs(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],l=[];let h=B();for(const d of i){u.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}for(const d of o){l.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next((d=>({Ls:d,removedBatchIds:u,addedBatchIds:l})))}))}))}function Ad(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=t.batch.keys(),o=e.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,h,d,_){const A=d.batch,w=A.keys();let P=S.resolve();return w.forEach((N=>{P=P.next((()=>_.getEntry(h,N))).next((O=>{const b=d.docVersions.get(N);K(b!==null,48541),O.version.compareTo(b)<0&&(A.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),_.addEntry(O)))}))})),P.next((()=>l.mutationQueue.removeMutationBatch(h,A)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let h=B();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(h=h.add(l.batch.mutations[d].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,i)))}))}function Vu(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Pi.getLastRemoteSnapshotVersion(e)))}function wd(n,t){const e=F(n),r=t.snapshotVersion;let i=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Ns.newChangeBuffer({trackRemovals:!0});i=e.Ms;const l=[];t.targetChanges.forEach(((_,A)=>{const w=i.get(A);if(!w)return;l.push(e.Pi.removeMatchingKeys(o,_.removedDocuments,A).next((()=>e.Pi.addMatchingKeys(o,_.addedDocuments,A))));let P=w.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?P=P.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,r)),i=i.insert(A,P),(function(O,b,G){return O.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Td?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(w,P,_)&&l.push(e.Pi.updateTargetData(o,P))}));let h=$t(),d=B();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),l.push(Rd(o,u,t.documentUpdates).next((_=>{h=_.ks,d=_.qs}))),!r.isEqual(L.min())){const _=e.Pi.getLastRemoteSnapshotVersion(o).next((A=>e.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r)));l.push(_)}return S.waitFor(l).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(e.Ms=i,o)))}function Rd(n,t,e){let r=B(),i=B();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let u=$t();return e.forEach(((l,h)=>{const d=o.get(l);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(l,h.readTime),u=u.insert(l,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),u=u.insert(l,h)):D(ti,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",h.version)})),{ks:u,qs:i}}))}function Sd(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=js),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function Cd(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return e.Pi.getTargetData(r,t).next((o=>o?(i=o,S.resolve(i)):e.Pi.allocateTargetId(r).next((u=>(i=new Qt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=e.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ms=e.Ms.insert(r.targetId,r),e.xs.set(t,r.targetId)),r}))}async function bs(n,t,e){const r=F(n),i=r.Ms.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(u=>r.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!Ue(u))throw u;D(ti,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Ms=r.Ms.remove(t),r.xs.delete(i.target)}function ra(n,t,e){const r=F(n);let i=L.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(h,d,_){const A=F(h),w=A.xs.get(_);return w!==void 0?S.resolve(A.Ms.get(w)):A.Pi.getTargetData(d,_)})(r,u,bt(t)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(u,l.targetId).next((h=>{o=h}))})).next((()=>r.Fs.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:B()))).next((l=>(Pd(r,df(t),l),{documents:l,Qs:o})))))}function Pd(n,t,e){let r=n.Os.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.Os.set(t,r)}class sa{constructor(){this.activeTargetIds=Ef()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vd{constructor(){this.Mo=new sa,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,r){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new sa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class bd{Oo(t){}shutdown(){}}/**
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
 */const ia="ConnectivityMonitor";class oa{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){D(ia,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){D(ia,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yn=null;function Ds(){return Yn===null?Yn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yn++,"0x"+Yn.toString(16)}/**
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
 */const hs="RestConnection",Dd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Nd{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===cr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(t,e,r,i,o){const u=Ds(),l=this.zo(t,e.toUriEncodedString());D(hs,`Sending RPC '${t}' ${u}:`,l,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:d}=new URL(l),_=xs(d);return this.Jo(t,l,h,r,_).then((A=>(D(hs,`Received RPC '${t}' ${u}: `,A),A)),(A=>{throw Ve(hs,`RPC '${t}' ${u} failed with error: `,A,"url: ",l,"request:",r),A}))}Ho(t,e,r,i,o,u){return this.Go(t,e,r,i,o)}jo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Le})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),r&&r.headers.forEach(((i,o)=>t[o]=i))}zo(t,e){const r=Dd[t];return`${this.Uo}/v1/${e}:${r}`}terminate(){}}/**
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
 */class kd{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
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
 */const _t="WebChannelConnection";class Od extends Nd{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,r,i,o){const u=Ds();return new Promise(((l,h)=>{const d=new Na;d.setWithCredentials(!0),d.listenOnce(ka.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Jn.NO_ERROR:const A=d.getResponseJson();D(_t,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),l(A);break;case Jn.TIMEOUT:D(_t,`RPC '${t}' ${u} timed out`),h(new k(C.DEADLINE_EXCEEDED,"Request time out"));break;case Jn.HTTP_ERROR:const w=d.getStatus();if(D(_t,`RPC '${t}' ${u} failed with status:`,w,"response text:",d.getResponseText()),w>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const N=P?.error;if(N&&N.status&&N.message){const O=(function(G){const j=G.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(j)>=0?j:C.UNKNOWN})(N.status);h(new k(O,N.message))}else h(new k(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new k(C.UNAVAILABLE,"Connection failed."));break;default:x(9055,{l_:t,streamId:u,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{D(_t,`RPC '${t}' ${u} completed.`)}}));const _=JSON.stringify(i);D(_t,`RPC '${t}' ${u} sending request:`,i),d.send(e,"POST",_,r,15)}))}T_(t,e,r){const i=Ds(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=xa(),l=Ma(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");D(_t,`Creating RPC '${t}' stream ${i}: ${_}`,h);const A=u.createWebChannel(_,h);this.I_(A);let w=!1,P=!1;const N=new kd({Yo:b=>{P?D(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(w||(D(_t,`Opening RPC '${t}' stream ${i} transport.`),A.open(),w=!0),D(_t,`RPC '${t}' stream ${i} sending:`,b),A.send(b))},Zo:()=>A.close()}),O=(b,G,j)=>{b.listen(G,(q=>{try{j(q)}catch(at){setTimeout((()=>{throw at}),0)}}))};return O(A,sn.EventType.OPEN,(()=>{P||(D(_t,`RPC '${t}' stream ${i} transport opened.`),N.o_())})),O(A,sn.EventType.CLOSE,(()=>{P||(P=!0,D(_t,`RPC '${t}' stream ${i} transport closed`),N.a_(),this.E_(A))})),O(A,sn.EventType.ERROR,(b=>{P||(P=!0,Ve(_t,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),N.a_(new k(C.UNAVAILABLE,"The operation could not be completed")))})),O(A,sn.EventType.MESSAGE,(b=>{if(!P){const G=b.data[0];K(!!G,16349);const j=G,q=j?.error||j[0]?.error;if(q){D(_t,`RPC '${t}' stream ${i} received error:`,q);const at=q.status;let Pt=(function(m){const g=et[m];if(g!==void 0)return gu(g)})(at),ft=q.message;Pt===void 0&&(Pt=C.INTERNAL,ft="Unknown error status: "+at+" with message "+q.message),P=!0,N.a_(new k(Pt,ft)),A.close()}else D(_t,`RPC '${t}' stream ${i} received:`,G),N.u_(G)}})),O(l,Oa.STAT_EVENT,(b=>{b.stat===Es.PROXY?D(_t,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===Es.NOPROXY&&D(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.__()}),0),N}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((e=>e===t))}}function fs(){return typeof document<"u"?document:null}/**
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
 */function Vr(n){return new Ff(n,!0)}/**
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
 */class bu{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Mi=t,this.timerId=e,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const aa="PersistentStream";class Du{constructor(t,e,r,i,o,u,l,h){this.Mi=t,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new bu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(qt(e.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===e&&this.G_(r,i)}),(r=>{t((()=>{const i=new k(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(t,e){const r=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return D(aa,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget((()=>this.D_===t?e():(D(aa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Md extends Du{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=jf(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Dt(u.readTime):L.min()})(t);return this.listener.H_(e,r)}Y_(t){const e={};e.database=Vs(this.serializer),e.addTarget=(function(o,u){let l;const h=u.target;if(l=ws(h)?{documents:zf(o,h)}:{query:Hf(o,h).ft},l.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){l.resumeToken=Eu(o,u.resumeToken);const d=Ss(o,u.expectedCount);d!==null&&(l.expectedCount=d)}else if(u.snapshotVersion.compareTo(L.min())>0){l.readTime=pr(o,u.snapshotVersion.toTimestamp());const d=Ss(o,u.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,t);const r=Kf(this.serializer,t);r&&(e.labels=r),this.q_(e)}Z_(t){const e={};e.database=Vs(this.serializer),e.removeTarget=t,this.q_(e)}}class xd extends Du{constructor(t,e,r,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return K(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){K(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=$f(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Vs(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>qf(this.serializer,r)))};this.q_(e)}}/**
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
 */class Ld{}class Fd extends Ld{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Go(t,Cs(e,r),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(C.UNKNOWN,o.toString())}))}Ho(t,e,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,l])=>this.connection.Ho(t,Cs(e,r),i,u,l,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new k(C.UNKNOWN,u.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Ud{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qt(e),this.aa=!1):D("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const de="RemoteStore";class Bd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo((u=>{r.enqueueAndForget((async()=>{_e(this)&&(D(de,"Restarting streams for network reachability change."),await(async function(h){const d=F(h);d.Ea.add(4),await Sn(d),d.Ra.set("Unknown"),d.Ea.delete(4),await br(d)})(this))}))})),this.Ra=new Ud(r,i)}}async function br(n){if(_e(n))for(const t of n.da)await t(!0)}async function Sn(n){for(const t of n.da)await t(!1)}function Nu(n,t){const e=F(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),si(e)?ri(e):Be(e).O_()&&ni(e,t))}function ei(n,t){const e=F(n),r=Be(e);e.Ia.delete(t),r.O_()&&ku(e,t),e.Ia.size===0&&(r.O_()?r.L_():_e(e)&&e.Ra.set("Unknown"))}function ni(n,t){if(n.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Be(n).Y_(t)}function ku(n,t){n.Va.Ue(t),Be(n).Z_(t)}function ri(n){n.Va=new Of({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Be(n).start(),n.Ra.ua()}function si(n){return _e(n)&&!Be(n).x_()&&n.Ia.size>0}function _e(n){return F(n).Ea.size===0}function Ou(n){n.Va=void 0}async function jd(n){n.Ra.set("Online")}async function qd(n){n.Ia.forEach(((t,e)=>{ni(n,t)}))}async function $d(n,t){Ou(n),si(n)?(n.Ra.ha(t),ri(n)):n.Ra.set("Unknown")}async function zd(n,t,e){if(n.Ra.set("Online"),t instanceof yu&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const l of o.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,u),i.Ia.delete(l),i.Va.removeTarget(l))})(n,t)}catch(r){D(de,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _r(n,r)}else if(t instanceof nr?n.Va.Ze(t):t instanceof _u?n.Va.st(t):n.Va.tt(t),!e.isEqual(L.min()))try{const r=await Vu(n.localStore);e.compareTo(r)>=0&&await(function(o,u){const l=o.Va.Tt(u);return l.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.Ia.get(d);_&&o.Ia.set(d,_.withResumeToken(h.resumeToken,u))}})),l.targetMismatches.forEach(((h,d)=>{const _=o.Ia.get(h);if(!_)return;o.Ia.set(h,_.withResumeToken(ht.EMPTY_BYTE_STRING,_.snapshotVersion)),ku(o,h);const A=new Qt(_.target,h,d,_.sequenceNumber);ni(o,A)})),o.remoteSyncer.applyRemoteEvent(l)})(n,e)}catch(r){D(de,"Failed to raise snapshot:",r),await _r(n,r)}}async function _r(n,t,e){if(!Ue(t))throw t;n.Ea.add(1),await Sn(n),n.Ra.set("Offline"),e||(e=()=>Vu(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(de,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await br(n)}))}function Mu(n,t){return t().catch((e=>_r(n,e,t)))}async function Dr(n){const t=F(n),e=re(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:js;for(;Hd(t);)try{const i=await Sd(t.localStore,r);if(i===null){t.Ta.length===0&&e.L_();break}r=i.batchId,Gd(t,i)}catch(i){await _r(t,i)}xu(t)&&Lu(t)}function Hd(n){return _e(n)&&n.Ta.length<10}function Gd(n,t){n.Ta.push(t);const e=re(n);e.O_()&&e.X_&&e.ea(t.mutations)}function xu(n){return _e(n)&&!re(n).x_()&&n.Ta.length>0}function Lu(n){re(n).start()}async function Kd(n){re(n).ra()}async function Qd(n){const t=re(n);for(const e of n.Ta)t.ea(e.mutations)}async function Wd(n,t,e){const r=n.Ta.shift(),i=Qs.from(r,t,e);await Mu(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Dr(n)}async function Xd(n,t){t&&re(n).X_&&await(async function(r,i){if((function(u){return Df(u)&&u!==C.ABORTED})(i.code)){const o=r.Ta.shift();re(r).B_(),await Mu(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i))),await Dr(r)}})(n,t),xu(n)&&Lu(n)}async function ua(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),D(de,"RemoteStore received new credentials");const r=_e(e);e.Ea.add(3),await Sn(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await br(e)}async function Yd(n,t){const e=F(n);t?(e.Ea.delete(2),await br(e)):t||(e.Ea.add(2),await Sn(e),e.Ra.set("Unknown"))}function Be(n){return n.ma||(n.ma=(function(e,r,i){const o=F(e);return o.sa(),new Md(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:jd.bind(null,n),t_:qd.bind(null,n),r_:$d.bind(null,n),H_:zd.bind(null,n)}),n.da.push((async t=>{t?(n.ma.B_(),si(n)?ri(n):n.Ra.set("Unknown")):(await n.ma.stop(),Ou(n))}))),n.ma}function re(n){return n.fa||(n.fa=(function(e,r,i){const o=F(e);return o.sa(),new xd(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:Kd.bind(null,n),r_:Xd.bind(null,n),ta:Qd.bind(null,n),na:Wd.bind(null,n)}),n.da.push((async t=>{t?(n.fa.B_(),await Dr(n)):(await n.fa.stop(),n.Ta.length>0&&(D(de,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
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
 */class ii{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,l=new ii(t,e,u,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oi(n,t){if(qt("AsyncQueue",`${t}: ${n}`),Ue(n))return new k(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Ce{static emptySet(t){return new Ce(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=on(),this.sortedSet=new J(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ce)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ce;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class ca{constructor(){this.ga=new J(M.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):x(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Me{constructor(t,e,r,i,o,u,l,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach((l=>{u.push({type:0,doc:l})})),new Me(t,e,Ce.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Jd{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class Zd{constructor(){this.queries=la(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=la(),o.forEach(((u,l)=>{for(const h of l.Sa)h.onError(r)}))})(this,new k(C.ABORTED,"Firestore shutting down"))}}function la(){return new pe((n=>ru(n)),wr)}async function Fu(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.ba()&&t.Da()&&(r=2):(o=new Jd,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(i,!0);break;case 1:o.wa=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const l=oi(u,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.Sa.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ai(e)}async function Uu(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.Sa.indexOf(t);u>=0&&(o.Sa.splice(u,1),o.Sa.length===0?i=t.Da()?0:1:!o.ba()&&t.Da()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function tm(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const l of u.Sa)l.Fa(i)&&(r=!0);u.wa=i}}r&&ai(e)}function em(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.Sa)o.onError(e);r.queries.delete(t)}function ai(n){n.Ca.forEach((t=>{t.next()}))}var Ns,ha;(ha=Ns||(Ns={})).Ma="default",ha.Cache="cache";class Bu{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Me(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Me.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Ns.Cache}}/**
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
 */class ju{constructor(t){this.key=t}}class qu{constructor(t){this.key=t}}class nm{constructor(t,e){this.query=t,this.Ya=e,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=B(),this.mutatedKeys=B(),this.eu=su(t),this.tu=new Ce(this.eu)}get nu(){return this.Ya}ru(t,e){const r=e?e.iu:new ca,i=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,l=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((_,A)=>{const w=i.get(_),P=Rr(this.query,A)?A:null,N=!!w&&this.mutatedKeys.has(w.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;w&&P?w.data.isEqual(P.data)?N!==O&&(r.track({type:3,doc:P}),b=!0):this.su(w,P)||(r.track({type:2,doc:P}),b=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(l=!0)):!w&&P?(r.track({type:0,doc:P}),b=!0):w&&!P&&(r.track({type:1,doc:w}),b=!0,(h||d)&&(l=!0)),b&&(P?(u=u.add(P),o=O?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{tu:u,iu:r,Cs:l,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const u=t.iu.ya();u.sort(((_,A)=>(function(P,N){const O=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{Rt:b})}};return O(P)-O(N)})(_.type,A.type)||this.eu(_.doc,A.doc))),this.ou(r),i=i??!1;const l=e&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,d=h!==this.Za;return this.Za=h,u.length!==0||d?{snapshot:new Me(this.query,t.tu,o,u,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ca,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((e=>this.Ya=this.Ya.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ya=this.Ya.delete(e))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=B(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const e=[];return t.forEach((r=>{this.Xa.has(r)||e.push(new qu(r))})),this.Xa.forEach((r=>{t.has(r)||e.push(new ju(r))})),e}cu(t){this.Ya=t.Qs,this.Xa=B();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Me.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ui="SyncEngine";class rm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class sm{constructor(t){this.key=t,this.hu=!1}}class im{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Pu={},this.Tu=new pe((l=>ru(l)),wr),this.Iu=new Map,this.Eu=new Set,this.du=new J(M.comparator),this.Au=new Map,this.Ru=new Ys,this.Vu={},this.mu=new Map,this.fu=Oe.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function om(n,t,e=!0){const r=Qu(n);let i;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await $u(r,t,e,!0),i}async function am(n,t){const e=Qu(n);await $u(e,t,!0,!1)}async function $u(n,t,e,r){const i=await Cd(n.localStore,bt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let l;return r&&(l=await um(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&Nu(n.remoteStore,i),l}async function um(n,t,e,r,i){n.pu=(A,w,P)=>(async function(O,b,G,j){let q=b.view.ru(G);q.Cs&&(q=await ra(O.localStore,b.query,!1).then((({documents:T})=>b.view.ru(T,q))));const at=j&&j.targetChanges.get(b.targetId),Pt=j&&j.targetMismatches.get(b.targetId)!=null,ft=b.view.applyChanges(q,O.isPrimaryClient,at,Pt);return da(O,b.targetId,ft.au),ft.snapshot})(n,A,w,P);const o=await ra(n.localStore,t,!0),u=new nm(t,o.Qs),l=u.ru(o.documents),h=Rn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=u.applyChanges(l,n.isPrimaryClient,h);da(n,e,d.au);const _=new rm(t,e,u);return n.Tu.set(t,_),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function cm(n,t,e){const r=F(n),i=r.Tu.get(t),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter((u=>!wr(u,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await bs(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ei(r.remoteStore,i.targetId),ks(r,i.targetId)})).catch(Fe)):(ks(r,i.targetId),await bs(r.localStore,i.targetId,!0))}async function lm(n,t){const e=F(n),r=e.Tu.get(t),i=e.Iu.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ei(e.remoteStore,r.targetId))}async function hm(n,t,e){const r=ym(n);try{const i=await(function(u,l){const h=F(u),d=Y.now(),_=l.reduce(((P,N)=>P.add(N.key)),B());let A,w;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let N=$t(),O=B();return h.Ns.getEntries(P,_).next((b=>{N=b,N.forEach(((G,j)=>{j.isValidDocument()||(O=O.add(G))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,N))).next((b=>{A=b;const G=[];for(const j of l){const q=Sf(j,A.get(j.key).overlayedDocument);q!=null&&G.push(new ge(j.key,q,Xa(q.value.mapValue),Bt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,G,l)})).next((b=>{w=b;const G=b.applyToLocalDocumentSet(A,O);return h.documentOverlayCache.saveOverlays(P,b.batchId,G)}))})).then((()=>({batchId:w.batchId,changes:ou(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),(function(u,l,h){let d=u.Vu[u.currentUser.toKey()];d||(d=new J(U)),d=d.insert(l,h),u.Vu[u.currentUser.toKey()]=d})(r,i.batchId,e),await Cn(r,i.changes),await Dr(r.remoteStore)}catch(i){const o=oi(i,"Failed to persist write");e.reject(o)}}async function zu(n,t){const e=F(n);try{const r=await wd(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Au.get(o);u&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.hu=!0:i.modifiedDocuments.size>0?K(u.hu,14607):i.removedDocuments.size>0&&(K(u.hu,42227),u.hu=!1))})),await Cn(e,r,t)}catch(r){await Fe(r)}}function fa(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Tu.forEach(((o,u)=>{const l=u.view.va(t);l.snapshot&&i.push(l.snapshot)})),(function(u,l){const h=F(u);h.onlineState=l;let d=!1;h.queries.forEach(((_,A)=>{for(const w of A.Sa)w.va(l)&&(d=!0)})),d&&ai(h)})(r.eventManager,t),i.length&&r.Pu.H_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Au.get(t),o=i&&i.key;if(o){let u=new J(M.comparator);u=u.insert(o,Et.newNoDocument(o,L.min()));const l=B().add(o),h=new Pr(L.min(),new Map,new J(U),u,l);await zu(r,h),r.du=r.du.remove(o),r.Au.delete(t),ci(r)}else await bs(r.localStore,t,!1).then((()=>ks(r,t,e))).catch(Fe)}async function dm(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Ad(e.localStore,t);Gu(e,r,null),Hu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(e,i)}catch(i){await Fe(i)}}async function mm(n,t,e){const r=F(n);try{const i=await(function(u,l){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let _;return h.mutationQueue.lookupMutationBatch(d,l).next((A=>(K(A!==null,37113),_=A.keys(),h.mutationQueue.removeMutationBatch(d,A)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,_,l))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_))).next((()=>h.localDocuments.getDocuments(d,_)))}))})(r.localStore,t);Gu(r,t,e),Hu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cn(r,i)}catch(i){await Fe(i)}}function Hu(n,t){(n.mu.get(t)||[]).forEach((e=>{e.resolve()})),n.mu.delete(t)}function Gu(n,t,e){const r=F(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Vu[r.currentUser.toKey()]=i}}function ks(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Ru.jr(t).forEach((r=>{n.Ru.containsKey(r)||Ku(n,r)}))}function Ku(n,t){n.Eu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ei(n.remoteStore,e),n.du=n.du.remove(t),n.Au.delete(e),ci(n))}function da(n,t,e){for(const r of e)r instanceof ju?(n.Ru.addReference(r.key,t),pm(n,r)):r instanceof qu?(D(ui,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,t),n.Ru.containsKey(r.key)||Ku(n,r.key)):x(19791,{wu:r})}function pm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Eu.has(r)||(D(ui,"New document in limbo: "+e),n.Eu.add(r),ci(n))}function ci(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new M(X.fromString(t)),r=n.fu.next();n.Au.set(r,new sm(e)),n.du=n.du.insert(e,r),Nu(n.remoteStore,new Qt(bt(Gs(e.path)),r,"TargetPurposeLimboResolution",Tr.ce))}}async function Cn(n,t,e){const r=F(n),i=[],o=[],u=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,h)=>{u.push(r.pu(h,t,e).then((d=>{if((d||e)&&r.isPrimaryClient){const _=d?!d.fromCache:e?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){i.push(d);const _=Zs.As(h.targetId,d);o.push(_)}})))})),await Promise.all(u),r.Pu.H_(i),await(async function(h,d){const _=F(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>S.forEach(d,(w=>S.forEach(w.Es,(P=>_.persistence.referenceDelegate.addReference(A,w.targetId,P))).next((()=>S.forEach(w.ds,(P=>_.persistence.referenceDelegate.removeReference(A,w.targetId,P)))))))))}catch(A){if(!Ue(A))throw A;D(ti,"Failed to update sequence numbers: "+A)}for(const A of d){const w=A.targetId;if(!A.fromCache){const P=_.Ms.get(w),N=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(N);_.Ms=_.Ms.insert(w,O)}}})(r.localStore,o))}async function gm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){D(ui,"User change. New user:",t.toKey());const r=await Pu(e.localStore,t);e.currentUser=t,(function(o,u){o.mu.forEach((l=>{l.forEach((h=>{h.reject(new k(C.CANCELLED,u))}))})),o.mu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(e,r.Ls)}}function _m(n,t){const e=F(n),r=e.Au.get(t);if(r&&r.hu)return B().add(r.key);{let i=B();const o=e.Iu.get(t);if(!o)return i;for(const u of o){const l=e.Tu.get(u);i=i.unionWith(l.view.nu)}return i}}function Qu(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=zu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_m.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fm.bind(null,t),t.Pu.H_=tm.bind(null,t.eventManager),t.Pu.yu=em.bind(null,t.eventManager),t}function ym(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=mm.bind(null,t),t}class yr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Vr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Id(this.persistence,new Ed,t.initialUser,this.serializer)}Cu(t){return new Cu(Js.mi,this.serializer)}Du(t){return new Vd}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yr.provider={build:()=>new yr};class Em extends yr{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){K(this.persistence.referenceDelegate instanceof gr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sd(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Cu((r=>gr.mi(r,e)),this.serializer)}}class Os{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gm.bind(null,this.syncEngine),await Yd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Zd})()}createDatastore(t){const e=Vr(t.databaseInfo.databaseId),r=(function(o){return new Od(o)})(t.databaseInfo);return(function(o,u,l,h){return new Fd(o,u,l,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,i,o,u,l){return new Bd(r,i,o,u,l)})(this.localStore,this.datastore,t.asyncQueue,(e=>fa(this.syncEngine,e,0)),(function(){return oa.v()?new oa:new bd})())}createSyncEngine(t,e){return(function(i,o,u,l,h,d,_){const A=new im(i,o,u,l,h,d);return _&&(A.gu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await(async function(e){const r=F(e);D(de,"RemoteStore shutting down."),r.Ea.add(5),await Sn(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Os.provider={build:()=>new Os};/**
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
 */class Wu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):qt("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const se="FirestoreClient";class Tm{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=Us.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{D(se,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(D(se,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=oi(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ds(n,t){n.asyncQueue.verifyOperationInProgress(),D(se,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await Pu(t.localStore,i),r=i)})),t.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=t}async function ma(n,t){n.asyncQueue.verifyOperationInProgress();const e=await vm(n);D(se,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>ua(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>ua(t.remoteStore,i))),n._onlineComponents=t}async function vm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(se,"Using user provided OfflineComponentProvider");try{await ds(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Ve("Error using user provided cache. Falling back to memory cache: "+e),await ds(n,new yr)}}else D(se,"Using default OfflineComponentProvider"),await ds(n,new Em(void 0));return n._offlineComponents}async function Xu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(se,"Using user provided OnlineComponentProvider"),await ma(n,n._uninitializedComponentsProvider._online)):(D(se,"Using default OnlineComponentProvider"),await ma(n,new Os))),n._onlineComponents}function Im(n){return Xu(n).then((t=>t.syncEngine))}async function Yu(n){const t=await Xu(n),e=t.eventManager;return e.onListen=om.bind(null,t.syncEngine),e.onUnlisten=cm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=am.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=lm.bind(null,t.syncEngine),e}function Am(n,t,e={}){const r=new Ut;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,l,h,d){const _=new Wu({next:w=>{_.Nu(),u.enqueueAndForget((()=>Uu(o,A)));const P=w.docs.has(l);!P&&w.fromCache?d.reject(new k(C.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&h&&h.source==="server"?d.reject(new k(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),A=new Bu(Gs(l.path),_,{includeMetadataChanges:!0,qa:!0});return Fu(o,A)})(await Yu(n),n.asyncQueue,t,e,r))),r.promise}function wm(n,t,e={}){const r=new Ut;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,l,h,d){const _=new Wu({next:w=>{_.Nu(),u.enqueueAndForget((()=>Uu(o,A))),w.fromCache&&h.source==="server"?d.reject(new k(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),A=new Bu(l,_,{includeMetadataChanges:!0,qa:!0});return Fu(o,A)})(await Yu(n),n.asyncQueue,t,e,r))),r.promise}/**
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
 */function Ju(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const pa=new Map;/**
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
 */const Zu="firestore.googleapis.com",ga=!0;class _a{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zu,this.ssl=ga}else this.host=t.host,this.ssl=t.ssl??ga;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Su;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<nd)throw new k(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Fh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ju(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Nr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _a({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _a(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ph;switch(r.type){case"firstParty":return new Nh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=pa.get(e);r&&(D("ComponentProvider","Removing Datastore"),pa.delete(e),r.terminate())})(this),Promise.resolve()}}function Rm(n,t,e,r={}){n=De(n,Nr);const i=xs(t),o=n._getSettings(),u={...o,emulatorOptions:n._getEmulatorOptions()},l=`${t}:${e}`;i&&(rl(`https://${l}`),al("Firestore",!0)),o.host!==Zu&&o.host!==l&&Ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:l,ssl:i,emulatorOptions:r};if(!ir(h,u)&&(n._setSettings(h),r.mockUserToken)){let d,_;if(typeof r.mockUserToken=="string")d=r.mockUserToken,_=yt.MOCK_USER;else{d=sl(r.mockUserToken,n._app?.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new k(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new yt(A)}n._authCredentials=new Vh(new Fa(d,_))}}/**
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
 */class kr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new kr(this.firestore,t,this._query)}}class ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ot(this.firestore,t,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(An(e,ot._jsonSchema))return new ot(t,r||null,new M(X.fromString(e.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:nt("string",ot._jsonSchemaVersion),referencePath:nt("string")};class Jt extends kr{constructor(t,e,r){super(t,e,Gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ot(this.firestore,null,new M(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function Km(n,t,...e){if(n=mn(n),Ua("collection","path",t),n instanceof Nr){const r=X.fromString(t,...e);return Do(r),new Jt(n,null,r)}{if(!(n instanceof ot||n instanceof Jt))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Do(r),new Jt(n.firestore,null,r)}}function Sm(n,t,...e){if(n=mn(n),arguments.length===1&&(t=Us.newId()),Ua("doc","path",t),n instanceof Nr){const r=X.fromString(t,...e);return bo(r),new ot(n,null,new M(r))}{if(!(n instanceof ot||n instanceof Jt))throw new k(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return bo(r),new ot(n.firestore,n instanceof Jt?n.converter:null,new M(r))}}/**
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
 */const ya="AsyncQueue";class Ea{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new bu(this,"async_queue_retry"),this._c=()=>{const r=fs();r&&D(ya,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const e=new Ut;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!Ue(t))throw t;D(ya,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const e=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,qt("INTERNAL UNHANDLED ERROR: ",Ta(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=ii.createAndSchedule(this,t,e,r,(o=>this.hc(o)));return this.tc.push(i),i}uc(){this.nc&&x(47125,{Pc:Ta(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Ta(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Or extends Nr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Ea,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ea(t),this._firestoreClient=void 0,await t}}}function Qm(n,t){const e=typeof n=="object"?n:_h(),r=typeof n=="string"?n:cr,i=fh(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=el("firestore");o&&Rm(i,...o)}return i}function li(n){if(n._terminated)throw new k(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Cm(n),n._firestoreClient}function Cm(n){const t=n._freezeSettings(),e=(function(i,o,u,l){return new Wh(i,o,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Ju(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,t);n._componentsProvider||t.localCache?._offlineComponentProvider&&t.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Tm(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&(function(i){const o=i?._online.build();return{_offline:i?._offline.build(o),_online:o}})(n._componentsProvider))}/**
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
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(ht.fromBase64String(t))}catch(e){throw new k(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(An(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:nt("string",Rt._jsonSchemaVersion),bytes:nt("string")};/**
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
 */class hi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class tc{constructor(t){this._methodName=t}}/**
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
 */class Nt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nt._jsonSchemaVersion}}static fromJSON(t){if(An(t,Nt._jsonSchema))return new Nt(t.latitude,t.longitude)}}Nt._jsonSchemaVersion="firestore/geoPoint/1.0",Nt._jsonSchema={type:nt("string",Nt._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
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
 */class kt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(An(t,kt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new kt(t.vectorValues);throw new k(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kt._jsonSchemaVersion="firestore/vectorValue/1.0",kt._jsonSchema={type:nt("string",kt._jsonSchemaVersion),vectorValues:nt("object")};/**
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
 */const Pm=/^__.*__$/;class Vm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new wn(t,this.data,e,this.fieldTransforms)}}function ec(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ac:n})}}class fi{constructor(t,e,r,i,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new fi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.gc(t),r}yc(t){const e=this.path?.child(t),r=this.Vc({path:e,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return Er(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(ec(this.Ac)&&Pm.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class bm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Vr(t)}Cc(t,e,r,i=!1){return new fi({Ac:t,methodName:e,Dc:r,path:lt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dm(n){const t=n._freezeSettings(),e=Vr(n._databaseId);return new bm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Nm(n,t,e,r,i,o={}){const u=n.Cc(o.merge||o.mergeFields?2:0,t,e,i);ic("Data must be an object, but it was:",u,r);const l=rc(r,u);let h,d;if(o.merge)h=new Ct(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const A of o.mergeFields){const w=km(t,A,e);if(!u.contains(w))throw new k(C.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Mm(_,w)||_.push(w)}h=new Ct(_),d=u.fieldTransforms.filter((A=>h.covers(A.field)))}else h=null,d=u.fieldTransforms;return new Vm(new wt(l),h,d)}function nc(n,t){if(sc(n=mn(n)))return ic("Unsupported field value:",t,n),rc(n,t);if(n instanceof tc)return(function(r,i){if(!ec(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,i){const o=[];let u=0;for(const l of r){let h=nc(l,i.wc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}})(n,t)}return(function(r,i){if((r=mn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Tf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Y.fromDate(r);return{timestampValue:pr(i.serializer,o)}}if(r instanceof Y){const o=new Y(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pr(i.serializer,o)}}if(r instanceof Nt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:Eu(i.serializer,r._byteString)};if(r instanceof ot){const o=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw i.Sc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Xs(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof kt)return(function(u,l){return{mapValue:{fields:{[Qa]:{stringValue:Wa},[lr]:{arrayValue:{values:u.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return Ks(l.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Bs(r)}`)})(n,t)}function rc(n,t){const e={};return qa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(n,((r,i)=>{const o=nc(i,t.mc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function sc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Y||n instanceof Nt||n instanceof Rt||n instanceof ot||n instanceof tc||n instanceof kt)}function ic(n,t,e){if(!sc(e)||!Ba(e)){const r=Bs(e);throw r==="an object"?t.Sc(n+" a custom object"):t.Sc(n+" "+r)}}function km(n,t,e){if((t=mn(t))instanceof hi)return t._internalPath;if(typeof t=="string")return oc(n,t);throw Er("Field path arguments must be of type string or ",n,!1,void 0,e)}const Om=new RegExp("[~\\*/\\[\\]]");function oc(n,t,e){if(t.search(Om)>=0)throw Er(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new hi(...t.split("."))._internalPath}catch{throw Er(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Er(n,t,e,r,i){const o=r&&!r.isEmpty(),u=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${i}`),h+=")"),new k(C.INVALID_ARGUMENT,l+n+h)}function Mm(n,t){return n.some((e=>e.isEqual(t)))}/**
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
 */class ac{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new xm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(uc("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class xm extends ac{data(){return super.data()}}function uc(n,t){return typeof t=="string"?oc(n,t):t instanceof hi?t._internalPath:t._delegate._internalPath}/**
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
 */function Lm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Fm{convertValue(t,e="none"){switch(ne(t)){case 0:return null;case 1:return t.booleanValue;case 2:return tt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw x(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return me(t,((i,o)=>{r[i]=this.convertValue(o,e)})),r}convertVectorValue(t){const e=t.fields?.[lr].arrayValue?.values?.map((r=>tt(r.doubleValue)));return new kt(e)}convertGeoPoint(t){return new Nt(tt(t.latitude),tt(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ir(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yn(t));default:return null}}convertTimestamp(t){const e=te(t);return new Y(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);K(Ru(r),9688,{name:t});const i=new En(r.get(1),r.get(3)),o=new M(r.popFirst(5));return i.isEqual(e)||qt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function Um(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class un{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class he extends ac{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new rr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(uc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=he._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}he._jsonSchemaVersion="firestore/documentSnapshot/1.0",he._jsonSchema={type:nt("string",he._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class rr extends he{data(t={}){return super.data(t)}}class Pe{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new un(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new rr(this._firestore,this._userDataWriter,r.key,r,new un(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((l=>{const h=new rr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new un(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>o||l.type!==3)).map((l=>{const h=new rr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new un(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,_=-1;return l.type!==0&&(d=u.indexOf(l.doc.key),u=u.delete(l.doc.key)),l.type!==1&&(u=u.add(l.doc),_=u.indexOf(l.doc.key)),{type:Bm(l.type),doc:h,oldIndex:d,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Pe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Us.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Bm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
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
 */function Wm(n){n=De(n,ot);const t=De(n.firestore,Or);return Am(li(t),n._key).then((e=>qm(t,n,e)))}Pe._jsonSchemaVersion="firestore/querySnapshot/1.0",Pe._jsonSchema={type:nt("string",Pe._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class cc extends Fm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ot(this.firestore,null,e)}}function Xm(n){n=De(n,kr);const t=De(n.firestore,Or),e=li(t),r=new cc(t);return Lm(n._query),wm(e,n._query).then((i=>new Pe(t,r,n,i)))}function Ym(n,t){const e=De(n.firestore,Or),r=Sm(n),i=Um(n.converter,t);return jm(e,[Nm(Dm(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then((()=>r))}function jm(n,t){return(function(r,i){const o=new Ut;return r.asyncQueue.enqueueAndForget((async()=>hm(await Im(r),i,o))),o.promise})(li(n),t)}function qm(n,t,e){const r=e.docs.get(t._key),i=new cc(n);return new he(n,i,t._key,r,new un(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Le=i})(gh),ar(new pn("firestore",((r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),l=new Or(new bh(r.getProvider("auth-internal")),new kh(u,r.getProvider("app-check-internal")),(function(d,_){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new En(d.options.projectId,_)})(u,i),u);return o={useFetchStreams:e,...o},l._setSettings(o),l}),"PUBLIC").setMultipleInstances(!0)),Se(So,Co,t),Se(So,Co,"esm2020")})();var $m="firebase",zm="12.1.0";/**
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
 */Se($m,zm,"app");const Hm={apiKey:"AIzaSyCEi3hqZ5QywZ4RFbQIW479wpBjNlM4xMs",authDomain:"nha-cho-thue-x1.firebaseapp.com",projectId:"nha-cho-thue-x1",storageBucket:"nha-cho-thue-x1.firebasestorage.app",messagingSenderId:"295176364130",appId:"1:295176364130:web:e11cdbec5626dc9a8df13b",measurementId:"G-ZWLR9NXP2Y"},Jm=Pa(Hm);export{Y as T,Qm as a,Jm as b,Km as c,Ym as d,Sm as e,Wm as f,Xm as g};
