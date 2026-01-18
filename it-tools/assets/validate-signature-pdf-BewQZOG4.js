import{c as y,i as b}from"./style-ynO7IsM1.js";import"./version-BXrBJCm5.js";import"./full-width-DliZ98Ur.js";import"./simple-mode-footer-C6L5gDe0.js";import{a as E,r as $,f as k,b as H,h as R}from"./main-CdZmBCMR.js";import{f as v}from"./index-BFHzST9_.js";import"./mobileMenu-BoMunYmR.js";function U(e){const s=[],n=new TextDecoder("latin1").decode(e),t=/\/Type\s*\/Sig\b/g;let i,c=0;for(;(i=t.exec(n))!==null;)try{const a=Math.max(0,i.index-5e3),o=Math.min(n.length,i.index+1e4),d=n.substring(a,o),h=d.match(/\/ByteRange\s*\[\s*(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s*\]/);if(!h)continue;const A=[parseInt(h[1],10),parseInt(h[2],10),parseInt(h[3],10),parseInt(h[4],10)],S=d.match(/\/Contents\s*<([0-9A-Fa-f]+)>/);if(!S)continue;const L=S[1],C=j(L),p=d.match(/\/Reason\s*\(([^)]*)\)/),u=d.match(/\/Location\s*\(([^)]*)\)/),x=d.match(/\/ContactInfo\s*\(([^)]*)\)/),m=d.match(/\/Name\s*\(([^)]*)\)/),f=d.match(/\/M\s*\(D:(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/);let w;f&&(w=`${f[1]}-${f[2]}-${f[3]}T${f[4]}:${f[5]}:${f[6]}`),s.push({index:c++,contents:C,byteRange:A,reason:p?decodeURIComponent(escape(p[1])):void 0,location:u?decodeURIComponent(escape(u[1])):void 0,contactInfo:x?decodeURIComponent(escape(x[1])):void 0,name:m?decodeURIComponent(escape(m[1])):void 0,signingTime:w})}catch(a){console.warn("Error extracting signature at index",c,a)}return s}function B(e,s,n){const t={signatureIndex:e.index,isValid:!1,signerName:"Unknown",issuer:"Unknown",validFrom:new Date(0),validTo:new Date(0),isExpired:!1,isSelfSigned:!1,isTrusted:!1,algorithms:{digest:"Unknown",signature:"Unknown"},serialNumber:"",byteRange:e.byteRange,coverageStatus:"unknown",reason:e.reason,location:e.location,contactInfo:e.contactInfo};try{const i=String.fromCharCode.apply(null,Array.from(e.contents)),c=v.asn1.fromDer(i),a=v.pkcs7.messageFromAsn1(c);if(!a.certificates||a.certificates.length===0)return t.errorMessage="No certificates found in signature",t;const o=a.certificates[0],d=o.subject.getField("CN"),h=o.subject.getField("O"),A=o.subject.getField("E")||o.subject.getField("emailAddress"),S=o.issuer.getField("CN"),L=o.issuer.getField("O");t.signerName=d?.value??"Unknown",t.signerOrg=h?.value,t.signerEmail=A?.value,t.issuer=S?.value??"Unknown",t.issuerOrg=L?.value,t.validFrom=o.validity.notBefore,t.validTo=o.validity.notAfter,t.serialNumber=o.serialNumber;const C=new Date;if(t.isExpired=C>t.validTo||C<t.validFrom,t.isSelfSigned=o.isIssuer(o),n)try{const p=n.isIssuer(o),u=o.serialNumber===n.serialNumber;let x=!1;for(const m of a.certificates)if(n.isIssuer(m)||m.serialNumber===n.serialNumber){x=!0;break}t.isTrusted=p||u||x}catch{t.isTrusted=!1}if(t.algorithms={digest:P(o.siginfo?.algorithmOid||""),signature:V(o.signatureOid||"")},e.signingTime)t.signatureDate=new Date(e.signingTime);else try{const p=a;if(p.rawCapture?.authenticatedAttributes){for(const u of p.rawCapture.authenticatedAttributes)if(u.type===v.pki.oids.signingTime){t.signatureDate=u.value;break}}}catch{}if(e.byteRange&&e.byteRange.length===4){const[p,u,x,m]=e.byteRange,f=u+m,w=x+m;w===s.length?t.coverageStatus="full":w<s.length&&(t.coverageStatus="partial")}t.isValid=!0}catch(i){t.errorMessage=i instanceof Error?i.message:"Failed to parse signature"}return t}async function O(e,s){return U(e).map(t=>B(t,e,s))}function j(e){const s=new Uint8Array(e.length/2);for(let t=0;t<e.length;t+=2)s[t/2]=parseInt(e.substr(t,2),16);let n=s.length;for(;n>0&&s[n-1]===0;)n--;return s.slice(0,n)}function P(e){return{"1.2.840.113549.2.5":"MD5","1.3.14.3.2.26":"SHA-1","2.16.840.1.101.3.4.2.1":"SHA-256","2.16.840.1.101.3.4.2.2":"SHA-384","2.16.840.1.101.3.4.2.3":"SHA-512","2.16.840.1.101.3.4.2.4":"SHA-224"}[e]||e||"Unknown"}function V(e){return{"1.2.840.113549.1.1.1":"RSA","1.2.840.113549.1.1.5":"RSA with SHA-1","1.2.840.113549.1.1.11":"RSA with SHA-256","1.2.840.113549.1.1.12":"RSA with SHA-384","1.2.840.113549.1.1.13":"RSA with SHA-512","1.2.840.10045.2.1":"ECDSA","1.2.840.10045.4.1":"ECDSA with SHA-1","1.2.840.10045.4.3.2":"ECDSA with SHA-256","1.2.840.10045.4.3.3":"ECDSA with SHA-384","1.2.840.10045.4.3.4":"ECDSA with SHA-512"}[e]||e||"Unknown"}const r={pdfFile:null,pdfBytes:null,results:[],trustedCertFile:null,trustedCert:null};function l(e){return document.getElementById(e)}function N(){r.pdfFile=null,r.pdfBytes=null,r.results=[];const e=l("file-display-area");e&&(e.innerHTML="");const s=l("results-section");s&&s.classList.add("hidden");const n=l("results-container");n&&(n.innerHTML="");const t=l("file-input");t&&(t.value="");const i=l("custom-cert-section");i&&i.classList.add("hidden")}function T(){r.trustedCertFile=null,r.trustedCert=null;const e=l("cert-display-area");e&&(e.innerHTML="");const s=l("cert-input");s&&(s.value="")}function F(){y({icons:b});const e=l("file-input"),s=l("drop-zone"),n=l("back-to-tools"),t=l("cert-input"),i=l("cert-drop-zone");e&&(e.addEventListener("change",z),e.addEventListener("click",()=>{e.value=""})),s&&(s.addEventListener("dragover",c=>{c.preventDefault(),s.classList.add("bg-gray-700")}),s.addEventListener("dragleave",()=>{s.classList.remove("bg-gray-700")}),s.addEventListener("drop",c=>{c.preventDefault(),s.classList.remove("bg-gray-700");const a=c.dataTransfer?.files;a&&a.length>0&&I(a[0])})),t&&(t.addEventListener("change",Z),t.addEventListener("click",()=>{t.value=""})),i&&(i.addEventListener("dragover",c=>{c.preventDefault(),i.classList.add("bg-gray-700")}),i.addEventListener("dragleave",()=>{i.classList.remove("bg-gray-700")}),i.addEventListener("drop",c=>{c.preventDefault(),i.classList.remove("bg-gray-700");const a=c.dataTransfer?.files;a&&a.length>0&&M(a[0])})),n&&n.addEventListener("click",()=>{window.location.href="/itools/"})}function z(e){const s=e.target;s.files&&s.files.length>0&&I(s.files[0])}async function I(e){if(e.type!=="application/pdf"&&!e.name.toLowerCase().endsWith(".pdf")){E("Invalid File","Please select a PDF file.");return}N(),r.pdfFile=e,r.pdfBytes=new Uint8Array(await $(e)),W();const s=l("custom-cert-section");s&&s.classList.remove("hidden"),y({icons:b}),await D()}function W(){const e=l("file-display-area");if(!e||!r.pdfFile)return;e.innerHTML="";const s=document.createElement("div");s.className="flex items-center justify-between bg-gray-700 p-3 rounded-lg";const n=document.createElement("div");n.className="flex flex-col flex-1 min-w-0";const t=document.createElement("div");t.className="truncate font-medium text-gray-200 text-sm mb-1",t.textContent=r.pdfFile.name;const i=document.createElement("div");i.className="text-xs text-gray-400",i.textContent=k(r.pdfFile.size),n.append(t,i);const c=document.createElement("button");c.className="ml-4 text-red-400 hover:text-red-300 flex-shrink-0",c.innerHTML='<i data-lucide="trash-2" class="w-4 h-4"></i>',c.onclick=()=>N(),s.append(n,c),e.appendChild(s),y({icons:b})}function Z(e){const s=e.target;s.files&&s.files.length>0&&M(s.files[0])}async function M(e){if(![".pem",".crt",".cer",".der"].some(t=>e.name.toLowerCase().endsWith(t))){E("Invalid Certificate","Please select a .pem, .crt, .cer, or .der certificate file.");return}T(),r.trustedCertFile=e;try{const t=await e.text();if(t.includes("-----BEGIN CERTIFICATE-----"))r.trustedCert=v.pki.certificateFromPem(t);else{const i=new Uint8Array(await $(e)),c=String.fromCharCode.apply(null,Array.from(i)),a=v.asn1.fromDer(c);r.trustedCert=v.pki.certificateFromAsn1(a)}G(),r.pdfBytes&&await D()}catch(t){console.error("Error parsing certificate:",t),E("Invalid Certificate","Failed to parse the certificate file."),T()}}function G(){const e=l("cert-display-area");if(!e||!r.trustedCertFile||!r.trustedCert)return;e.innerHTML="";const s=document.createElement("div");s.className="flex items-center justify-between bg-gray-700 p-3 rounded-lg";const n=document.createElement("div");n.className="flex flex-col flex-1 min-w-0";const t=document.createElement("div");t.className="truncate font-medium text-gray-200 text-sm mb-1";const i=r.trustedCert.subject.getField("CN");t.textContent=i?.value||r.trustedCertFile.name;const c=document.createElement("div");c.className="text-xs text-green-400",c.innerHTML='<i data-lucide="check-circle" class="inline w-3 h-3 mr-1"></i>Trusted certificate loaded',n.append(t,c);const a=document.createElement("button");a.className="ml-4 text-red-400 hover:text-red-300 flex-shrink-0",a.innerHTML='<i data-lucide="trash-2" class="w-4 h-4"></i>',a.onclick=async()=>{T(),r.pdfBytes&&await D()},s.append(n,a),e.appendChild(s),y({icons:b})}async function D(){if(r.pdfBytes){H("Analyzing signatures...");try{r.results=await O(r.pdfBytes,r.trustedCert??void 0),q()}catch(e){console.error("Validation error:",e),E("Error","Failed to validate signatures. The file may be corrupted.")}finally{R()}}}function q(){const e=l("results-section"),s=l("results-container");if(!e||!s)return;if(s.innerHTML="",e.classList.remove("hidden"),r.results.length===0){s.innerHTML=`
            <div class="bg-gray-700 rounded-lg p-6 text-center border border-gray-600">
                <i data-lucide="file-x" class="w-12 h-12 mx-auto mb-4 text-gray-400"></i>
                <h3 class="text-lg font-semibold text-white mb-2">No Signatures Found</h3>
                <p class="text-gray-400">This PDF does not contain any digital signatures.</p>
            </div>
        `,y({icons:b});return}const n=document.createElement("div");n.className="mb-4 p-3 bg-gray-700 rounded-lg border border-gray-600";const t=r.results.filter(a=>a.isValid&&!a.isExpired).length,i=r.trustedCert?r.results.filter(a=>a.isTrusted).length:0;let c=`
        <p class="text-gray-300">
            <span class="font-semibold text-white">${r.results.length}</span> 
            signature${r.results.length>1?"s":""} found
            <span class="text-gray-500">•</span>
            <span class="${t===r.results.length?"text-green-400":"text-yellow-400"}">${t} valid</span>
        </p>
    `;r.trustedCert&&(c+=`
            <p class="text-xs text-gray-400 mt-1">
                <i data-lucide="shield-check" class="inline w-3 h-3 mr-1"></i>
                Trust verification: ${i}/${r.results.length} signatures verified against custom certificate
            </p>
        `),n.innerHTML=c,s.appendChild(n),r.results.forEach((a,o)=>{const d=J(a,o);s.appendChild(d)}),y({icons:b})}function J(e,s){const n=document.createElement("div");n.className="bg-gray-700 rounded-lg p-4 border border-gray-600 mb-4";let t="text-green-400",i="check-circle",c="Valid Signature";e.isValid?e.isExpired?(t="text-yellow-400",i="alert-triangle",c="Certificate Expired"):e.isSelfSigned&&(t="text-yellow-400",i="alert-triangle",c="Self-Signed Certificate"):(t="text-red-400",i="x-circle",c="Invalid Signature");const a=d=>!d||d.getTime()===0?"Unknown":d.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});let o="";return r.trustedCert&&(e.isTrusted?o='<span class="text-xs bg-green-900 text-green-300 px-2 py-1 rounded ml-2"><i data-lucide="shield-check" class="inline w-3 h-3 mr-1"></i>Trusted</span>':o='<span class="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded ml-2"><i data-lucide="shield-x" class="inline w-3 h-3 mr-1"></i>Not in trust chain</span>'),n.innerHTML=`
        <div class="flex items-start justify-between mb-4">
            <div class="flex items-center gap-3">
                <i data-lucide="${i}" class="w-6 h-6 ${t}"></i>
                <div>
                    <h3 class="font-semibold text-white">Signature ${s+1}</h3>
                    <p class="text-sm ${t}">${c}</p>
                </div>
            </div>
            <div class="flex items-center">
                ${e.coverageStatus==="full"?'<span class="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Full Coverage</span>':e.coverageStatus==="partial"?'<span class="text-xs bg-yellow-900 text-yellow-300 px-2 py-1 rounded">Partial Coverage</span>':""}${o}
            </div>
        </div>

        <div class="space-y-3 text-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-gray-400">Signed By</p>
                    <p class="text-white font-medium">${g(e.signerName)}</p>
                    ${e.signerOrg?`<p class="text-gray-400 text-xs">${g(e.signerOrg)}</p>`:""}
                    ${e.signerEmail?`<p class="text-gray-400 text-xs">${g(e.signerEmail)}</p>`:""}
                </div>
                <div>
                    <p class="text-gray-400">Issuer</p>
                    <p class="text-white font-medium">${g(e.issuer)}</p>
                    ${e.issuerOrg?`<p class="text-gray-400 text-xs">${g(e.issuerOrg)}</p>`:""}
                </div>
            </div>

            ${e.signatureDate?`
                <div>
                    <p class="text-gray-400">Signed On</p>
                    <p class="text-white">${a(e.signatureDate)}</p>
                </div>
            `:""}

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p class="text-gray-400">Valid From</p>
                    <p class="text-white">${a(e.validFrom)}</p>
                </div>
                <div>
                    <p class="text-gray-400">Valid Until</p>
                    <p class="${e.isExpired?"text-red-400":"text-white"}">${a(e.validTo)}</p>
                </div>
            </div>

            ${e.reason?`
                <div>
                    <p class="text-gray-400">Reason</p>
                    <p class="text-white">${g(e.reason)}</p>
                </div>
            `:""}

            ${e.location?`
                <div>
                    <p class="text-gray-400">Location</p>
                    <p class="text-white">${g(e.location)}</p>
                </div>
            `:""}

            <details class="mt-2">
                <summary class="cursor-pointer text-indigo-400 hover:text-indigo-300 text-sm">
                    Technical Details
                </summary>
                <div class="mt-2 p-3 bg-gray-800 rounded text-xs space-y-1">
                    <p><span class="text-gray-400">Serial Number:</span> <span class="text-gray-300 font-mono">${g(e.serialNumber)}</span></p>
                    <p><span class="text-gray-400">Digest Algorithm:</span> <span class="text-gray-300">${g(e.algorithms.digest)}</span></p>
                    <p><span class="text-gray-400">Signature Algorithm:</span> <span class="text-gray-300">${g(e.algorithms.signature)}</span></p>
                    ${e.errorMessage?`<p class="text-red-400">Error: ${g(e.errorMessage)}</p>`:""}
                </div>
            </details>
        </div>
    `,n}function g(e){const s=document.createElement("div");return s.textContent=e,s.innerHTML}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",F):F();
