import{ao as c,d,au as u,u as r,aU as m,i as h,ay as f,h as p}from"./index-0c1fde36.js";const v=c("a",`
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),C=Object.assign({},r.props),g=d({name:"A",props:C,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=u(e),a=r("Typography","-a",v,m,e,o),t=h(()=>{const{common:{cubicBezierEaseInOut:i},self:{aTextColor:l}}=a.value;return{"--n-text-color":l,"--n-bezier":i}}),s=n?f("a",void 0,t,e):void 0;return{mergedClsPrefix:o,cssVars:n?void 0:t,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),p("a",{class:[`${this.mergedClsPrefix}-a`,this.themeClass],style:this.cssVars},this.$slots)}});export{g as _};
