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
 */function p(e,n){let i=e.slice(0,n).split(/\r\n|\n|\r/g);return[i.length,i.pop().length+1]}function D(e,n,i){let l=e.split(/\r\n|\n|\r/g),o="",f=(Math.log10(n+1)|0)+1;for(let t=n-1;t<=n+1;t++){let r=l[t-1];r&&(o+=t.toString().padEnd(f," "),o+=":  ",o+=r,o+=`
`,t===n&&(o+=" ".repeat(f+i+2),o+=`^
`))}return o}class c extends Error{line;column;codeblock;constructor(n,i){const[l,o]=p(i.toml,i.ptr),f=D(i.toml,l,o);super(`Invalid TOML document: ${n}

${f}`,i),this.line=l,this.column=o,this.codeblock=f}}/*!
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
 */function I(e,n){let i=0;for(;e[n-++i]==="\\";);return--i&&i%2}function g(e,n=0,i=e.length){let l=e.indexOf(`
`,n);return e[l-1]==="\r"&&l--,l<=i?l:-1}function m(e,n){for(let i=n;i<e.length;i++){let l=e[i];if(l===`
`)return i;if(l==="\r"&&e[i+1]===`
`)return i+1;if(l<" "&&l!=="	"||l==="")throw new c("control characters are not allowed in comments",{toml:e,ptr:n})}return e.length}function h(e,n,i,l){let o;for(;(o=e[n])===" "||o==="	"||!i&&(o===`
`||o==="\r"&&e[n+1]===`
`);)n++;return l||o!=="#"?n:h(e,m(e,n),i)}function P(e,n,i,l,o=!1){if(!l)return n=g(e,n),n<0?e.length:n;for(let f=n;f<e.length;f++){let t=e[f];if(t==="#")f=g(e,f);else{if(t===i)return f+1;if(t===l||o&&(t===`
`||t==="\r"&&e[f+1]===`
`))return f}}throw new c("cannot find end of structure",{toml:e,ptr:n})}function T(e,n){let i=e[n],l=i===e[n+1]&&e[n+1]===e[n+2]?e.slice(n,n+3):i;n+=l.length-1;do n=e.indexOf(l,++n);while(n>-1&&i!=="'"&&I(e,n));return n>-1&&(n+=l.length,l.length>1&&(e[n]===i&&n++,e[n]===i&&n++)),n}/*!
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
 */let v=/^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;class w extends Date{#n=!1;#i=!1;#e=null;constructor(n){let i=!0,l=!0,o="Z";if(typeof n=="string"){let f=n.match(v);f?(f[1]||(i=!1,n=`0000-01-01T${n}`),l=!!f[2],l&&n[10]===" "&&(n=n.replace(" ","T")),f[2]&&+f[2]>23?n="":(o=f[3]||null,n=n.toUpperCase(),!o&&l&&(n+="Z"))):n=""}super(n),isNaN(this.getTime())||(this.#n=i,this.#i=l,this.#e=o)}isDateTime(){return this.#n&&this.#i}isLocal(){return!this.#n||!this.#i||!this.#e}isDate(){return this.#n&&!this.#i}isTime(){return this.#i&&!this.#n}isValid(){return this.#n||this.#i}toISOString(){let n=super.toISOString();if(this.isDate())return n.slice(0,10);if(this.isTime())return n.slice(11,23);if(this.#e===null)return n.slice(0,-1);if(this.#e==="Z")return n;let i=+this.#e.slice(1,3)*60+ +this.#e.slice(4,6);return i=this.#e[0]==="-"?i:-i,new Date(this.getTime()-i*6e4).toISOString().slice(0,-1)+this.#e}static wrapAsOffsetDateTime(n,i="Z"){let l=new w(n);return l.#e=i,l}static wrapAsLocalDateTime(n){let i=new w(n);return i.#e=null,i}static wrapAsLocalDate(n){let i=new w(n);return i.#i=!1,i.#e=null,i}static wrapAsLocalTime(n){let i=new w(n);return i.#n=!1,i.#e=null,i}}/*!
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
 */let L=/^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/,N=/^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/,$=/^[+-]?0[0-9_]/,k=/^[0-9a-f]{2,8}$/i,y={b:"\b",t:"	",n:`
`,f:"\f",r:"\r",e:"\x1B",'"':'"',"\\":"\\"};function _(e,n=0,i=e.length){let l=e[n]==="'",o=e[n++]===e[n]&&e[n]===e[n+1];o&&(i-=2,e[n+=2]==="\r"&&n++,e[n]===`
`&&n++);let f=0,t,r="",u=n;for(;n<i-1;){let a=e[n++];if(a===`
`||a==="\r"&&e[n]===`
`){if(!o)throw new c("newlines are not allowed in strings",{toml:e,ptr:n-1})}else if(a<" "&&a!=="	"||a==="")throw new c("control characters are not allowed in strings",{toml:e,ptr:n-1});if(t){if(t=!1,a==="x"||a==="u"||a==="U"){let d=e.slice(n,n+=a==="x"?2:a==="u"?4:8);if(!k.test(d))throw new c("invalid unicode escape",{toml:e,ptr:f});try{r+=String.fromCodePoint(parseInt(d,16))}catch{throw new c("invalid unicode escape",{toml:e,ptr:f})}}else if(o&&(a===`
`||a===" "||a==="	"||a==="\r")){if(n=h(e,n-1,!0),e[n]!==`
`&&e[n]!=="\r")throw new c("invalid escape: only line-ending whitespace may be escaped",{toml:e,ptr:f});n=h(e,n)}else if(a in y)r+=y[a];else throw new c("unrecognized escape sequence",{toml:e,ptr:f});u=n}else!l&&a==="\\"&&(f=n-1,t=!0,r+=e.slice(u,f))}return r+e.slice(u,i-1)}function C(e,n,i,l){if(e==="true")return!0;if(e==="false")return!1;if(e==="-inf")return-1/0;if(e==="inf"||e==="+inf")return 1/0;if(e==="nan"||e==="+nan"||e==="-nan")return NaN;if(e==="-0")return l?0n:0;let o=L.test(e);if(o||N.test(e)){if($.test(e))throw new c("leading zeroes are not allowed",{toml:n,ptr:i});e=e.replace(/_/g,"");let t=+e;if(isNaN(t))throw new c("invalid number",{toml:n,ptr:i});if(o){if((o=!Number.isSafeInteger(t))&&!l)throw new c("integer value cannot be represented losslessly",{toml:n,ptr:i});(o||l===!0)&&(t=BigInt(e))}return t}const f=new w(e);if(!f.isValid())throw new c("invalid value",{toml:n,ptr:i});return f}/*!
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
 */function R(e,n,i){let l=e.slice(n,i),o=l.indexOf("#");return o>-1&&(m(e,o),l=l.slice(0,o)),[l.trimEnd(),o]}function x(e,n,i,l,o){if(l===0)throw new c("document contains excessively nested structures. aborting.",{toml:e,ptr:n});let f=e[n];if(f==="["||f==="{"){let[u,a]=f==="["?M(e,n,l,o):j(e,n,l,o);if(i){if(a=h(e,a),e[a]===",")a++;else if(e[a]!==i)throw new c("expected comma or end of structure",{toml:e,ptr:a})}return[u,a]}let t;if(f==='"'||f==="'"){t=T(e,n);let u=_(e,n,t);if(i){if(t=h(e,t),e[t]&&e[t]!==","&&e[t]!==i&&e[t]!==`
`&&e[t]!=="\r")throw new c("unexpected character encountered",{toml:e,ptr:t});t+=+(e[t]===",")}return[u,t]}t=P(e,n,",",i);let r=R(e,n,t-+(e[t-1]===","));if(!r[0])throw new c("incomplete key-value declaration: no value specified",{toml:e,ptr:n});return i&&r[1]>-1&&(t=h(e,n+r[1]),t+=+(e[t]===",")),[C(r[0],e,n,o),t]}/*!
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
 */let Z=/^[a-zA-Z0-9-_]+[ \t]*$/;function b(e,n,i="="){let l=n-1,o=[],f=e.indexOf(i,n);if(f<0)throw new c("incomplete key-value: cannot find end of key",{toml:e,ptr:n});do{let t=e[n=++l];if(t!==" "&&t!=="	")if(t==='"'||t==="'"){if(t===e[n+1]&&t===e[n+2])throw new c("multiline strings are not allowed in keys",{toml:e,ptr:n});let r=T(e,n);if(r<0)throw new c("unfinished string encountered",{toml:e,ptr:n});l=e.indexOf(".",r);let u=e.slice(r,l<0||l>f?f:l),a=g(u);if(a>-1)throw new c("newlines are not allowed in keys",{toml:e,ptr:n+l+a});if(u.trimStart())throw new c("found extra tokens after the string part",{toml:e,ptr:r});if(f<r&&(f=e.indexOf(i,r),f<0))throw new c("incomplete key-value: cannot find end of key",{toml:e,ptr:n});o.push(_(e,n,r))}else{l=e.indexOf(".",n);let r=e.slice(n,l<0||l>f?f:l);if(!Z.test(r))throw new c("only letter, numbers, dashes and underscores are allowed in keys",{toml:e,ptr:n});o.push(r.trimEnd())}}while(l+1&&l<f);return[o,h(e,f+1,!0,!0)]}function j(e,n,i,l){let o={},f=new Set,t;for(n++;(t=e[n++])!=="}"&&t;){if(t===",")throw new c("expected value, found comma",{toml:e,ptr:n-1});if(t==="#")n=m(e,n);else if(t!==" "&&t!=="	"&&t!==`
`&&t!=="\r"){let r,u=o,a=!1,[d,S]=b(e,n-1);for(let s=0;s<d.length;s++){if(s&&(u=a?u[r]:u[r]={}),r=d[s],(a=Object.hasOwn(u,r))&&(typeof u[r]!="object"||f.has(u[r])))throw new c("trying to redefine an already defined value",{toml:e,ptr:n});!a&&r==="__proto__"&&Object.defineProperty(u,r,{enumerable:!0,configurable:!0,writable:!0})}if(a)throw new c("trying to redefine an already defined value",{toml:e,ptr:n});let[E,A]=x(e,S,"}",i-1,l);f.add(E),u[r]=E,n=A}}if(!t)throw new c("unfinished table encountered",{toml:e,ptr:n});return[o,n]}function M(e,n,i,l){let o=[],f;for(n++;(f=e[n++])!=="]"&&f;){if(f===",")throw new c("expected value, found comma",{toml:e,ptr:n-1});if(f==="#")n=m(e,n);else if(f!==" "&&f!=="	"&&f!==`
`&&f!=="\r"){let t=x(e,n-1,"]",i-1,l);o.push(t[0]),n=t[1]}}if(!f)throw new c("unfinished array encountered",{toml:e,ptr:n});return[o,n]}/*!
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
 */function O(e,n,i,l){let o=n,f=i,t,r=!1,u;for(let a=0;a<e.length;a++){if(a){if(o=r?o[t]:o[t]={},f=(u=f[t]).c,l===0&&(u.t===1||u.t===2))return null;if(u.t===2){let d=o.length-1;o=o[d],f=f[d].c}}if(t=e[a],(r=Object.hasOwn(o,t))&&f[t]?.t===0&&f[t]?.d)return null;r||(t==="__proto__"&&(Object.defineProperty(o,t,{enumerable:!0,configurable:!0,writable:!0}),Object.defineProperty(f,t,{enumerable:!0,configurable:!0,writable:!0})),f[t]={t:a<e.length-1&&l===2?3:l,d:!1,i:0,c:{}})}if(u=f[t],u.t!==l&&!(l===1&&u.t===3)||(l===2&&(u.d||(u.d=!0,o[t]=[]),o[t].push(o={}),u.c[u.i++]=u={t:1,d:!1,i:0,c:{}}),u.d))return null;if(u.d=!0,l===1)o=r?o[t]:o[t]={};else if(l===0&&r)return null;return[t,o,u.c]}function V(e,{maxDepth:n=1e3,integersAsBigInt:i}={}){let l={},o={},f=l,t=o;for(let r=h(e,0);r<e.length;){if(e[r]==="["){let u=e[++r]==="[",a=b(e,r+=+u,"]");if(u){if(e[a[1]-1]!=="]")throw new c("expected end of table declaration",{toml:e,ptr:a[1]-1});a[1]++}let d=O(a[0],l,o,u?2:1);if(!d)throw new c("trying to redefine an already defined table or value",{toml:e,ptr:r});t=d[2],f=d[1],r=a[1]}else{let u=b(e,r),a=O(u[0],f,t,0);if(!a)throw new c("trying to redefine an already defined table or value",{toml:e,ptr:r});let d=x(e,u[1],void 0,n,i);a[1][a[0]]=d[0],r=d[1]}if(r=h(e,r,!0),e[r]&&e[r]!==`
`&&e[r]!=="\r")throw new c("each key-value declaration must be followed by an end-of-line",{toml:e,ptr:r});r=h(e,r)}return l}export{V as p};
