/*!
 * Copyright (c) Squirrel Chat et al., All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 *    list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */let $=/^[a-z0-9-_]+$/i;function c(e){let t=typeof e;if(t==="object"){if(Array.isArray(e))return"array";if(e instanceof Date)return"date"}return t}function m(e){for(let t=0;t<e.length;t++)if(c(e[t])!=="object")return!1;return e.length!=0}function y(e){return JSON.stringify(e).replace(/\x7f/g,"\\u007f")}function a(e,t,f,n){if(f===0)throw new Error("Could not stringify the object: maximum object depth exceeded");if(t==="number")return isNaN(e)?"nan":e===1/0?"inf":e===-1/0?"-inf":n&&Number.isInteger(e)?e.toFixed(1):e.toString();if(t==="bigint"||t==="boolean")return e.toString();if(t==="string")return y(e);if(t==="date"){if(isNaN(e.getTime()))throw new TypeError("cannot serialize invalid date");return e.toISOString()}if(t==="object")return T(e,f,n);if(t==="array")return E(e,f,n)}function T(e,t,f){let n=Object.keys(e);if(n.length===0)return"{}";let r="{ ";for(let i=0;i<n.length;i++){let o=n[i];i&&(r+=", "),r+=$.test(o)?o:y(o),r+=" = ",r+=a(e[o],c(e[o]),t-1,f)}return r+" }"}function E(e,t,f){if(e.length===0)return"[]";let n="[ ";for(let r=0;r<e.length;r++){if(r&&(n+=", "),e[r]===null||e[r]===void 0)throw new TypeError("arrays cannot contain null or undefined values");n+=a(e[r],c(e[r]),t-1,f)}return n+" ]"}function b(e,t,f,n){if(f===0)throw new Error("Could not stringify the object: maximum object depth exceeded");let r="";for(let i=0;i<e.length;i++)r+=`${r&&`
`}[[${t}]]
`,r+=d(0,e[i],t,f,n);return r}function d(e,t,f,n,r){if(n===0)throw new Error("Could not stringify the object: maximum object depth exceeded");let i="",o="",h=Object.keys(t);for(let g=0;g<h.length;g++){let u=h[g];if(t[u]!==null&&t[u]!==void 0){let l=c(t[u]);if(l==="symbol"||l==="function")throw new TypeError(`cannot serialize values of type '${l}'`);let s=$.test(u)?u:y(u);if(l==="array"&&m(t[u]))o+=(o&&`
`)+b(t[u],f?`${f}.${s}`:s,n-1,r);else if(l==="object"){let w=f?`${f}.${s}`:s;o+=(o&&`
`)+d(w,t[u],w,n-1,r)}else i+=s,i+=" = ",i+=a(t[u],l,n,r),i+=`
`}}return e&&(i||!o)&&(i=i?`[${e}]
${i}`:`[${e}]`),i&&o?`${i}
${o}`:i||o}function x(e,{maxDepth:t=1e3,numbersAsFloat:f=!1}={}){if(c(e)!=="object")throw new TypeError("stringify can only be called with an object");let n=d(0,e,"",t,f);return n[n.length-1]!==`
`?n+`
`:n}export{x as s};
