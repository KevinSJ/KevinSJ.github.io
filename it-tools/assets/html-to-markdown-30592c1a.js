import{d as z,a0 as K,ac as R,r as q,i as Q,o as J,c as Z,k as p,w as C,l as c,m as b,ae as ee,x as te}from"./index-0c1fde36.js";import{_ as re}from"./TextareaCopyable-59231e95.js";import{_ as ne}from"./Space-7fc52151.js";import{_ as ae}from"./Divider-5fc425b0.js";import{_ as ie}from"./FormItem-1b9a5952.js";import"./base64-ae7cf34b.js";import"./index-a6f01dde.js";import"./downloadBase64-508288e2.js";import"./index-6fddb70d.js";import"./index-cfd4d427.js";import"./Copy-ef9ec73c.js";import"./Scrollbar-54724e22.js";import"./get-slot-1efb97e5.js";import"./context-00991937.js";function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}return e}function T(e,t){return Array(t+1).join(e)}function O(e){return e.replace(/^\n*/,"")}function D(e){for(var t=e.length;t>0&&e[t-1]===`
`;)t--;return e.substring(0,t)}function L(e){return D(O(e))}var oe=["ADDRESS","ARTICLE","ASIDE","AUDIO","BLOCKQUOTE","BODY","CANVAS","CENTER","DD","DIR","DIV","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","FORM","FRAMESET","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","HTML","ISINDEX","LI","MAIN","MENU","NAV","NOFRAMES","NOSCRIPT","OL","OUTPUT","P","PRE","SECTION","TABLE","TBODY","TD","TFOOT","TH","THEAD","TR","UL"];function w(e){return E(e,oe)}var $=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function P(e){return E(e,$)}function ue(e){return M(e,$)}var I=["A","TABLE","THEAD","TBODY","TFOOT","TH","TD","IFRAME","SCRIPT","AUDIO","VIDEO"];function se(e){return E(e,I)}function ce(e){return M(e,I)}function E(e,t){return t.indexOf(e.nodeName)>=0}function M(e,t){return e.getElementsByTagName&&t.some(function(r){return e.getElementsByTagName(r).length})}var s={};s.paragraph={filter:"p",replacement:function(e){return`

`+e+`

`}};s.lineBreak={filter:"br",replacement:function(e,t,r){return r.br+`
`}};s.heading={filter:["h1","h2","h3","h4","h5","h6"],replacement:function(e,t,r){var n=Number(t.nodeName.charAt(1));if(r.headingStyle==="setext"&&n<3){var a=T(n===1?"=":"-",e.length);return`

`+e+`
`+a+`

`}else return`

`+T("#",n)+" "+e+`

`}};s.blockquote={filter:"blockquote",replacement:function(e){return e=L(e).replace(/^/gm,"> "),`

`+e+`

`}};s.list={filter:["ul","ol"],replacement:function(e,t){var r=t.parentNode;return r.nodeName==="LI"&&r.lastElementChild===t?`
`+e:`

`+e+`

`}};s.listItem={filter:"li",replacement:function(e,t,r){var n=r.bulletListMarker+"   ",a=t.parentNode;if(a.nodeName==="OL"){var i=a.getAttribute("start"),o=Array.prototype.indexOf.call(a.children,t);n=(i?Number(i)+o:o+1)+".  "}var f=/\n$/.test(e);return e=L(e)+(f?`
`:""),e=e.replace(/\n/gm,`
`+" ".repeat(n.length)),n+e+(t.nextSibling?`
`:"")}};s.indentedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="indented"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,r){return`

    `+t.firstChild.textContent.replace(/\n/g,`
    `)+`

`}};s.fencedCodeBlock={filter:function(e,t){return t.codeBlockStyle==="fenced"&&e.nodeName==="PRE"&&e.firstChild&&e.firstChild.nodeName==="CODE"},replacement:function(e,t,r){for(var n=t.firstChild.getAttribute("class")||"",a=(n.match(/language-(\S+)/)||[null,""])[1],i=t.firstChild.textContent,o=r.fence.charAt(0),f=3,l=new RegExp("^"+o+"{3,}","gm"),u;u=l.exec(i);)u[0].length>=f&&(f=u[0].length+1);var m=T(o,f);return`

`+m+a+`
`+i.replace(/\n$/,"")+`
`+m+`

`}};s.horizontalRule={filter:"hr",replacement:function(e,t,r){return`

`+r.hr+`

`}};s.inlineLink={filter:function(e,t){return t.linkStyle==="inlined"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t){var r=t.getAttribute("href");r&&(r=r.replace(/([()])/g,"\\$1"));var n=v(t.getAttribute("title"));return n&&(n=' "'+n.replace(/"/g,'\\"')+'"'),"["+e+"]("+r+n+")"}};s.referenceLink={filter:function(e,t){return t.linkStyle==="referenced"&&e.nodeName==="A"&&e.getAttribute("href")},replacement:function(e,t,r){var n=t.getAttribute("href"),a=v(t.getAttribute("title"));a&&(a=' "'+a+'"');var i,o;switch(r.linkReferenceStyle){case"collapsed":i="["+e+"][]",o="["+e+"]: "+n+a;break;case"shortcut":i="["+e+"]",o="["+e+"]: "+n+a;break;default:var f=this.references.length+1;i="["+e+"]["+f+"]",o="["+f+"]: "+n+a}return this.references.push(o),i},references:[],append:function(e){var t="";return this.references.length&&(t=`

`+this.references.join(`
`)+`

`,this.references=[]),t}};s.emphasis={filter:["em","i"],replacement:function(e,t,r){return e.trim()?r.emDelimiter+e+r.emDelimiter:""}};s.strong={filter:["strong","b"],replacement:function(e,t,r){return e.trim()?r.strongDelimiter+e+r.strongDelimiter:""}};s.code={filter:function(e){var t=e.previousSibling||e.nextSibling,r=e.parentNode.nodeName==="PRE"&&!t;return e.nodeName==="CODE"&&!r},replacement:function(e){if(!e)return"";e=e.replace(/\r?\n|\r/g," ");for(var t=/^`|^ .*?[^ ].* $|`$/.test(e)?" ":"",r="`",n=e.match(/`+/gm)||[];n.indexOf(r)!==-1;)r=r+"`";return r+t+e+t+r}};s.image={filter:"img",replacement:function(e,t){var r=v(t.getAttribute("alt")),n=t.getAttribute("src")||"",a=v(t.getAttribute("title")),i=a?' "'+a+'"':"";return n?"!["+r+"]("+n+i+")":""}};function v(e){return e?e.replace(/(\n+\s*)+/g,`
`):""}function H(e){this.options=e,this._keep=[],this._remove=[],this.blankRule={replacement:e.blankReplacement},this.keepReplacement=e.keepReplacement,this.defaultRule={replacement:e.defaultReplacement},this.array=[];for(var t in e.rules)this.array.push(e.rules[t])}H.prototype={add:function(e,t){this.array.unshift(t)},keep:function(e){this._keep.unshift({filter:e,replacement:this.keepReplacement})},remove:function(e){this._remove.unshift({filter:e,replacement:function(){return""}})},forNode:function(e){if(e.isBlank)return this.blankRule;var t;return(t=k(this.array,e,this.options))||(t=k(this._keep,e,this.options))||(t=k(this._remove,e,this.options))?t:this.defaultRule},forEach:function(e){for(var t=0;t<this.array.length;t++)e(this.array[t],t)}};function k(e,t,r){for(var n=0;n<e.length;n++){var a=e[n];if(fe(a,t,r))return a}}function fe(e,t,r){var n=e.filter;if(typeof n=="string"){if(n===t.nodeName.toLowerCase())return!0}else if(Array.isArray(n)){if(n.indexOf(t.nodeName.toLowerCase())>-1)return!0}else if(typeof n=="function"){if(n.call(e,t,r))return!0}else throw new TypeError("`filter` needs to be a string, array, or function")}function me(e){var t=e.element,r=e.isBlock,n=e.isVoid,a=e.isPre||function(d){return d.nodeName==="PRE"};if(!(!t.firstChild||a(t))){for(var i=null,o=!1,f=null,l=x(f,t,a);l!==t;){if(l.nodeType===3||l.nodeType===4){var u=l.data.replace(/[ \r\n\t]+/g," ");if((!i||/ $/.test(i.data))&&!o&&u[0]===" "&&(u=u.substr(1)),!u){l=y(l);continue}l.data=u,i=l}else if(l.nodeType===1)r(l)||l.nodeName==="BR"?(i&&(i.data=i.data.replace(/ $/,"")),i=null,o=!1):n(l)||a(l)?(i=null,o=!0):i&&(o=!1);else{l=y(l);continue}var m=x(f,l,a);f=l,l=m}i&&(i.data=i.data.replace(/ $/,""),i.data||y(i))}}function y(e){var t=e.nextSibling||e.parentNode;return e.parentNode.removeChild(e),t}function x(e,t,r){return e&&e.parentNode===t||r(t)?t.nextSibling||t.parentNode:t.firstChild||t.nextSibling||t.parentNode}var _=typeof window<"u"?window:{};function de(){var e=_.DOMParser,t=!1;try{new e().parseFromString("","text/html")&&(t=!0)}catch{}return t}function pe(){var e=function(){};return he()?e.prototype.parseFromString=function(t){var r=new window.ActiveXObject("htmlfile");return r.designMode="on",r.open(),r.write(t),r.close(),r}:e.prototype.parseFromString=function(t){var r=document.implementation.createHTMLDocument("");return r.open(),r.write(t),r.close(),r},e}function he(){var e=!1;try{document.implementation.createHTMLDocument("").open()}catch{_.ActiveXObject&&(e=!0)}return e}var ge=de()?_.DOMParser:pe();function ve(e,t){var r;if(typeof e=="string"){var n=Ne().parseFromString('<x-turndown id="turndown-root">'+e+"</x-turndown>","text/html");r=n.getElementById("turndown-root")}else r=e.cloneNode(!0);return me({element:r,isBlock:w,isVoid:P,isPre:t.preformattedCode?be:null}),r}var A;function Ne(){return A=A||new ge,A}function be(e){return e.nodeName==="PRE"||e.nodeName==="CODE"}function ke(e,t){return e.isBlock=w(e),e.isCode=e.nodeName==="CODE"||e.parentNode.isCode,e.isBlank=ye(e),e.flankingWhitespace=Ae(e,t),e}function ye(e){return!P(e)&&!se(e)&&/^\s*$/i.test(e.textContent)&&!ue(e)&&!ce(e)}function Ae(e,t){if(e.isBlock||t.preformattedCode&&e.isCode)return{leading:"",trailing:""};var r=Te(e.textContent);return r.leadingAscii&&S("left",e,t)&&(r.leading=r.leadingNonAscii),r.trailingAscii&&S("right",e,t)&&(r.trailing=r.trailingNonAscii),{leading:r.leading,trailing:r.trailing}}function Te(e){var t=e.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);return{leading:t[1],leadingAscii:t[2],leadingNonAscii:t[3],trailing:t[4],trailingNonAscii:t[5],trailingAscii:t[6]}}function S(e,t,r){var n,a,i;return e==="left"?(n=t.previousSibling,a=/ $/):(n=t.nextSibling,a=/^ /),n&&(n.nodeType===3?i=a.test(n.nodeValue):r.preformattedCode&&n.nodeName==="CODE"?i=!1:n.nodeType===1&&!w(n)&&(i=a.test(n.textContent))),i}var we=Array.prototype.reduce,Ee=[[/\\/g,"\\\\"],[/\*/g,"\\*"],[/^-/g,"\\-"],[/^\+ /g,"\\+ "],[/^(=+)/g,"\\$1"],[/^(#{1,6}) /g,"\\$1 "],[/`/g,"\\`"],[/^~~~/g,"\\~~~"],[/\[/g,"\\["],[/\]/g,"\\]"],[/^>/g,"\\>"],[/_/g,"\\_"],[/^(\d+)\. /g,"$1\\. "]];function N(e){if(!(this instanceof N))return new N(e);var t={rules:s,headingStyle:"setext",hr:"* * *",bulletListMarker:"*",codeBlockStyle:"indented",fence:"```",emDelimiter:"_",strongDelimiter:"**",linkStyle:"inlined",linkReferenceStyle:"full",br:"  ",preformattedCode:!1,blankReplacement:function(r,n){return n.isBlock?`

`:""},keepReplacement:function(r,n){return n.isBlock?`

`+n.outerHTML+`

`:n.outerHTML},defaultReplacement:function(r,n){return n.isBlock?`

`+r+`

`:r}};this.options=le({},t,e),this.rules=new H(this.options)}N.prototype={turndown:function(e){if(!Ce(e))throw new TypeError(e+" is not a string, or an element/document/fragment node.");if(e==="")return"";var t=F.call(this,new ve(e,this.options));return _e.call(this,t)},use:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)this.use(e[t]);else if(typeof e=="function")e(this);else throw new TypeError("plugin must be a Function or an Array of Functions");return this},addRule:function(e,t){return this.rules.add(e,t),this},keep:function(e){return this.rules.keep(e),this},remove:function(e){return this.rules.remove(e),this},escape:function(e){return Ee.reduce(function(t,r){return t.replace(r[0],r[1])},e)}};function F(e){var t=this;return we.call(e.childNodes,function(r,n){n=new ke(n,t.options);var a="";return n.nodeType===3?a=n.isCode?n.nodeValue:t.escape(n.nodeValue):n.nodeType===1&&(a=Re.call(t,n)),V(r,a)},"")}function _e(e){var t=this;return this.rules.forEach(function(r){typeof r.append=="function"&&(e=V(e,r.append(t.options)))}),e.replace(/^[\t\r\n]+/,"").replace(/[\t\r\n\s]+$/,"")}function Re(e){var t=this.rules.forNode(e),r=F.call(this,e),n=e.flankingWhitespace;return(n.leading||n.trailing)&&(r=r.trim()),n.leading+t.replacement(r,e,this.options)+n.trailing}function V(e,t){var r=D(e),n=O(t),a=Math.max(e.length-r.length,t.length-n.length),i=`

`.substring(0,a);return r+i+n}function Ce(e){return e!=null&&(typeof e=="string"||e.nodeType&&(e.nodeType===1||e.nodeType===9||e.nodeType===11))}var B=/highlight-(?:text|source)-([a-z0-9]+)/;function xe(e){e.addRule("highlightedCodeBlock",{filter:function(t){var r=t.firstChild;return t.nodeName==="DIV"&&B.test(t.className)&&r&&r.nodeName==="PRE"},replacement:function(t,r,n){var a=r.className||"",i=(a.match(B)||[null,""])[1];return`

`+n.fence+i+`
`+r.firstChild.textContent+`
`+n.fence+`

`}})}function Se(e){e.addRule("strikethrough",{filter:["del","s","strike"],replacement:function(t){return"~"+t+"~"}})}var Be=Array.prototype.indexOf,h={};h.tableCell={filter:["th","td"],replacement:function(e,t){return U(e,t)+W(t,"")}};h.tableRow={filter:"tr",replacement:function(e,t){var r="",n={left:":--",right:"--:",center:":-:"};if(Oe(t))for(var a=0;a<t.childNodes.length;a++){var i="---",o=(t.childNodes[a].getAttribute("align")||"").toLowerCase();o&&(i=n[o]||i),r+=U(i,t.childNodes[a])+W(t.childNodes[a],i)}return`
`+e+(r?`
`+r:"")}};h.table={filter:function(e){return e.nodeName==="TABLE"&&!j(e)},replacement:function(e){return e=e.replace(`

`,`
`),`

`+e+`

`}};h.tableSection={filter:["thead","tbody","tfoot"],replacement:function(e){return e}};h.captionSection={filter:"caption",replacement:function(e,t){return t.parentNode.nodeName==="TABLE"&&t.parentNode.childNodes[0]===t?e:""}};function Oe(e){var t=e.parentNode,r=t;return(t.nodeName==="THEAD"||t.nodeName==="TFOOT"||t.nodeName==="TBODY")&&(r=t.parentNode),r.nodeName==="TABLE"&&r.rows[0]===e}function U(e,t){var r=Be.call(t.parentNode.childNodes,t),n=" ";return r===0&&(n="| "),e=e.replace(/\r\n/g,`
`).replace(/\n/g," "),e=e.replace(/\|/g,"\\|"),n+e+" |"}function W(e,t){var r=e.getAttribute("colspan")||1;return r<=1?"":(" "+t+" |").repeat(r-1)}function j(e){for(var t=e.parentNode;t;){if(t.nodeName==="TABLE")return!0;t=t.parentNode}return!1}function De(e){e.keep(function(r){return r.nodeName==="TABLE"&&j(r)});for(var t in h)e.addRule(t,h[t])}function Le(e){e.addRule("taskListItems",{filter:function(t){return t.type==="checkbox"&&t.parentNode.nodeName==="LI"},replacement:function(t,r){return(r.checked?"[x]":"[ ]")+" "}})}function $e(e){e.use([xe,Se,De,Le])}const qe=z({__name:"html-to-markdown",setup(e){const{t}=K(),r=R({name:"headings",storageName:"html-to-md:hs",defaultValue:"hash"}),n=R({name:"emphasis",storageName:"html-to-md:em",defaultValue:"standard"}),a=new N;function i(l){return l.replace(/\\/g,"\\\\").replace(/([*_#>|`])/g,"\\$1").replace(/([\[\]\(\)])/g,"\\$1").replace(/\|/g,"\\|")}a.addRule("escapeText",{filter(l){return l.nodeType===3},replacement(l){return i(l)}}),$e(a),a.addRule("normalizedHeading",{filter:["h1","h2","h3","h4","h5","h6"],replacement(l,u){const m=Number.parseInt(u.nodeName.charAt(1)),d=l.trim().replace(/\s+/g," ");if(r.value==="underline"){if(m===1)return`
${d}
${"=".repeat(d.length)}

`;if(m===2)return`
${d}
${"-".repeat(d.length)}

`}else if(r.value==="surround")return`
${"=".repeat(m)} ${d} ${"=".repeat(m)}

`;return`
${"#".repeat(m)} ${d}

`}}),a.addRule("customItalic",{filter:["em","i"],replacement(l){return n.value==="underscore"?`_${l}_`:n.value==="surround"?`~${l}~`:`*${l}*`}}),a.addRule("customBold",{filter:["strong","b"],replacement(l){return n.value==="underscore"?`__${l}__`:n.value==="surround"?`~~${l}~~`:`**${l}**`}});const o=q(""),f=Q(()=>{try{return a.turndown(o.value??"")}catch(l){return l.toString()}});return(l,u)=>{const m=ee,d=ne,G=te,X=ae,Y=ie;return J(),Z("div",null,[p(d,{justify:"center","mb-3":""},{default:C(()=>[p(m,{value:c(r),"onUpdate:value":u[0]||(u[0]=g=>b(r)?r.value=g:null),label:c(t)("tools.html-to-markdown.texts.label-heading-style"),"label-position":"left",style:{width:"300px"},options:[{value:"hash",label:c(t)("tools.html-to-markdown.texts.label-hash")},{value:"underline",label:c(t)("tools.html-to-markdown.texts.label-underline")},{value:"surround",label:c(t)("tools.html-to-markdown.texts.label-surround-heading")}]},null,8,["value","label","options"]),p(m,{value:c(n),"onUpdate:value":u[1]||(u[1]=g=>b(n)?n.value=g:null),label:c(t)("tools.html-to-markdown.texts.label-emphasis-style"),"label-position":"left",style:{width:"300px"},options:[{value:"standard",label:c(t)("tools.html-to-markdown.texts.label-asterisk")},{value:"underscore",label:c(t)("tools.html-to-markdown.texts.label-underscore")},{value:"surround",label:c(t)("tools.html-to-markdown.texts.label-tilde")}]},null,8,["value","label","options"])]),_:1}),p(G,{value:c(o),"onUpdate:value":u[2]||(u[2]=g=>b(o)?o.value=g:null),multiline:"","raw-text":"",placeholder:c(t)("tools.html-to-markdown.texts.placeholder-your-html-content"),rows:"8",autofocus:"",label:c(t)("tools.html-to-markdown.texts.label-your-html-to-convert-can-paste-from-clipboard"),"paste-html":""},null,8,["value","placeholder","label"]),p(X),p(Y,{label:c(t)("tools.html-to-markdown.texts.label-output-markdown")},{default:C(()=>[p(re,{value:c(f),"download-file-name":"output.md"},null,8,["value"])]),_:1},8,["label"])])}}});export{qe as default};
