import{Y as S,Q as F,aB as Q,F as Y,o as Z,p as q,s as H,g as J,c as K,b as X,_ as d,l as z,v as tt,d as et,G as at,L as rt,a6 as nt,k as it}from"./mermaid-exporter-6ea789a7.js";import{p as ot}from"./chunk-4BX2VUAB-e49b8fae.js";import{p as st}from"./mermaid-parser.core-efd86db3.js";import{d as R}from"./arc-c55afb86.js";import{o as lt}from"./ordinal-ba9b4969.js";import"./index-0c1fde36.js";import"./isEmpty-10f615ca.js";import"./_basePickBy-b883d9c4.js";import"./_baseExtremum-ae2792a2.js";import"./_castFunction-302f37a8.js";import"./reduce-502ebc83.js";import"./_arrayReduce-865b0d3f.js";import"./toInteger-034643bc.js";import"./toNumber-29aad22f.js";import"./_baseUniq-310c658a.js";import"./_baseFlatten-f3872d66.js";import"./uniq-7ccc5583.js";import"./find-e7d3d4fe.js";import"./groupBy-f0323559.js";import"./clone-ec2723fb.js";import"./init-77b53fdd.js";function ct(t,a){return a<t?-1:a>t?1:a>=t?0:NaN}function pt(t){return t}function ut(){var t=pt,a=ct,f=null,x=S(0),o=S(F),l=S(0);function s(e){var n,c=(e=Q(e)).length,p,y,h=0,u=new Array(c),i=new Array(c),v=+x.apply(this,arguments),w=Math.min(F,Math.max(-F,o.apply(this,arguments)-v)),m,C=Math.min(Math.abs(w)/c,l.apply(this,arguments)),$=C*(w<0?-1:1),g;for(n=0;n<c;++n)(g=i[u[n]=n]=+t(e[n],n,e))>0&&(h+=g);for(a!=null?u.sort(function(A,D){return a(i[A],i[D])}):f!=null&&u.sort(function(A,D){return f(e[A],e[D])}),n=0,y=h?(w-c*$)/h:0;n<c;++n,v=m)p=u[n],g=i[p],m=v+(g>0?g*y:0)+$,i[p]={data:e[p],index:n,value:g,startAngle:v,endAngle:m,padAngle:C};return i}return s.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),s):t},s.sortValues=function(e){return arguments.length?(a=e,f=null,s):a},s.sort=function(e){return arguments.length?(f=e,a=null,s):f},s.startAngle=function(e){return arguments.length?(x=typeof e=="function"?e:S(+e),s):x},s.endAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),s):o},s.padAngle=function(e){return arguments.length?(l=typeof e=="function"?e:S(+e),s):l},s}var I=Y.pie,G={sections:new Map,showData:!1,config:I},T=G.sections,N=G.showData,dt=structuredClone(I),gt=d(()=>structuredClone(dt),"getConfig"),ft=d(()=>{T=new Map,N=G.showData,tt()},"clear"),mt=d(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,a),z.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ht=d(()=>T,"getSections"),vt=d(t=>{N=t},"setShowData"),St=d(()=>N,"getShowData"),_={getConfig:gt,clear:ft,setDiagramTitle:Z,getDiagramTitle:q,setAccTitle:H,getAccTitle:J,setAccDescription:K,getAccDescription:X,addSection:mt,getSections:ht,setShowData:vt,getShowData:St},xt=d((t,a)=>{ot(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),yt={parse:d(async t=>{const a=await st("pie",t);z.debug(a),xt(a,_)},"parse")},wt=d(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),At=wt,Dt=d(t=>{const a=[...t.values()].reduce((o,l)=>o+l,0),f=[...t.entries()].map(([o,l])=>({label:o,value:l})).filter(o=>o.value/a*100>=1).sort((o,l)=>l.value-o.value);return ut().value(o=>o.value)(f)},"createPieArcs"),Ct=d((t,a,f,x)=>{z.debug(`rendering pie chart
`+t);const o=x.db,l=et(),s=at(o.getConfig(),l.pie),e=40,n=18,c=4,p=450,y=p,h=rt(a),u=h.append("g");u.attr("transform","translate("+y/2+","+p/2+")");const{themeVariables:i}=l;let[v]=nt(i.pieOuterStrokeWidth);v??=2;const w=s.textPosition,m=Math.min(y,p)/2-e,C=R().innerRadius(0).outerRadius(m),$=R().innerRadius(m*w).outerRadius(m*w);u.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const g=o.getSections(),A=Dt(g),D=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let b=0;g.forEach(r=>{b+=r});const W=A.filter(r=>(r.data.value/b*100).toFixed(0)!=="0"),k=lt(D);u.selectAll("mySlices").data(W).enter().append("path").attr("d",C).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),u.selectAll("mySlices").data(W).enter().append("text").text(r=>(r.data.value/b*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-(p-50)/2).attr("class","pieTitleText");const L=[...g.entries()].map(([r,M])=>({label:r,value:M})),E=u.selectAll(".legend").data(L).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const P=n+c,V=P*L.length/2,U=12*n,j=M*P-V;return"translate("+U+","+j+")"});E.append("rect").attr("width",n).attr("height",n).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),E.append("text").attr("x",n+c).attr("y",n-c).text(r=>o.getShowData()?`${r.label} [${r.value}]`:r.label);const B=Math.max(...E.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),O=y+e+n+c+B;h.attr("viewBox",`0 0 ${O} ${p}`),it(h,p,O,s.useMaxWidth)},"draw"),$t={draw:Ct},Yt={parser:yt,db:_,renderer:$t,styles:At};export{Yt as diagram};
