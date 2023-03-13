"use strict";(self.webpackChunkrequest_management_app=self.webpackChunkrequest_management_app||[]).push([[455],{8455:(kt,A,y)=>{y.r(A),y.d(A,{DashboardModule:()=>Mt});var X=y(6895),$=y(3060),h=y(1086),D=y(3192),B=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),g_textSize=function(t,r,e){var o,a=[].concat(r),i=a.length,n=t.font,s=0;for(t.font=e.string,o=0;o<i;++o)s=Math.max(t.measureText(a[o]).width,s);return t.font=n,{height:i*e.lineHeight,width:s}};function R(t,r){var e=r.x,a=r.y;if(null===e)return{x:0,y:-1};if(null===a)return{x:1,y:0};var i=t.x-e,n=t.y-a,s=Math.sqrt(i*i+n*n);return{x:s?i/s:0,y:s?n/s:-1}}function M(t,r,e){var a=0;return t<e.left?a|=1:t>e.right&&(a|=2),r<e.top?a|=8:r>e.bottom&&(a|=4),a}function S(t,r){var i,n,e=r.anchor,a=t;return r.clamp&&(a=function Y(t,r){for(var l,u,d,e=t.x0,a=t.y0,i=t.x1,n=t.y1,s=M(e,a,r),o=M(i,n,r);s|o&&!(s&o);)8&(l=s||o)?(u=e+(i-e)*(r.top-a)/(n-a),d=r.top):4&l?(u=e+(i-e)*(r.bottom-a)/(n-a),d=r.bottom):2&l?(d=a+(n-a)*(r.right-e)/(i-e),u=r.right):1&l&&(d=a+(n-a)*(r.left-e)/(i-e),u=r.left),l===s?s=M(e=u,a=d,r):o=M(i=u,n=d,r);return{x0:e,x1:i,y0:a,y1:n}}(a,r.area)),"start"===e?(i=a.x0,n=a.y0):"end"===e?(i=a.x1,n=a.y1):(i=(a.x0+a.x1)/2,n=(a.y0+a.y1)/2),function Z(t,r,e,a,i){switch(i){case"center":e=a=0;break;case"bottom":e=0,a=1;break;case"right":e=1,a=0;break;case"left":e=-1,a=0;break;case"top":e=0,a=-1;break;case"start":e=-e,a=-a;break;case"end":break;default:i*=Math.PI/180,e=Math.cos(i),a=Math.sin(i)}return{x:t,y:r,vx:e,vy:a}}(i,n,t.vx,t.vy,r.align)}var k={arc:function(t,r){var e=(t.startAngle+t.endAngle)/2,a=Math.cos(e),i=Math.sin(e),n=t.innerRadius,s=t.outerRadius;return S({x0:t.x+a*n,y0:t.y+i*n,x1:t.x+a*s,y1:t.y+i*s,vx:a,vy:i},r)},point:function(t,r){var e=R(t,r.origin),a=e.x*t.options.radius,i=e.y*t.options.radius;return S({x0:t.x-a,y0:t.y-i,x1:t.x+a,y1:t.y+i,vx:e.x,vy:e.y},r)},bar:function(t,r){var e=R(t,r.origin),a=t.x,i=t.y,n=0,s=0;return t.horizontal?(a=Math.min(t.x,t.base),n=Math.abs(t.base-t.x)):(i=Math.min(t.y,t.base),s=Math.abs(t.base-t.y)),S({x0:a,y0:i+s,x1:a+n,y1:i,vx:e.x,vy:e.y},r)},fallback:function(t,r){var e=R(t,r.origin);return S({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:e.x,vy:e.y},r)}},b=function(t){return Math.round(t*B)/B};function tt(t,r){var e=r.chart.getDatasetMeta(r.datasetIndex).vScale;if(!e)return null;if(void 0!==e.xCenter&&void 0!==e.yCenter)return{x:e.xCenter,y:e.yCenter};var a=e.getBasePixel();return t.horizontal?{x:a,y:null}:{x:null,y:a}}function et(t){return t instanceof D.qi?k.arc:t instanceof D.od?k.point:t instanceof D.ZL?k.bar:k.fallback}function nt(t,r,e){var a=t.shadowBlur,i=e.stroked,n=b(e.x),s=b(e.y),o=b(e.w);i&&t.strokeText(r,n,s,o),e.filled&&(a&&i&&(t.shadowBlur=0),t.fillText(r,n,s,o),a&&i&&(t.shadowBlur=a))}var O=function(t,r,e,a){var i=this;i._config=t,i._index=a,i._model=null,i._rects=null,i._ctx=r,i._el=e};(0,h.a4)(O.prototype,{_modelize:function(t,r,e,a){var i=this,n=i._index,s=(0,h.a0)((0,h.a)([e.font,{}],a,n)),o=(0,h.a)([e.color,h.d.color],a,n);return{align:(0,h.a)([e.align,"center"],a,n),anchor:(0,h.a)([e.anchor,"center"],a,n),area:a.chart.chartArea,backgroundColor:(0,h.a)([e.backgroundColor,null],a,n),borderColor:(0,h.a)([e.borderColor,null],a,n),borderRadius:(0,h.a)([e.borderRadius,0],a,n),borderWidth:(0,h.a)([e.borderWidth,0],a,n),clamp:(0,h.a)([e.clamp,!1],a,n),clip:(0,h.a)([e.clip,!1],a,n),color:o,display:t,font:s,lines:r,offset:(0,h.a)([e.offset,4],a,n),opacity:(0,h.a)([e.opacity,1],a,n),origin:tt(i._el,a),padding:(0,h.E)((0,h.a)([e.padding,4],a,n)),positioner:et(i._el),rotation:(0,h.a)([e.rotation,0],a,n)*(Math.PI/180),size:g_textSize(i._ctx,r,s),textAlign:(0,h.a)([e.textAlign,"start"],a,n),textShadowBlur:(0,h.a)([e.textShadowBlur,0],a,n),textShadowColor:(0,h.a)([e.textShadowColor,o],a,n),textStrokeColor:(0,h.a)([e.textStrokeColor,o],a,n),textStrokeWidth:(0,h.a)([e.textStrokeWidth,0],a,n)}},update:function(t){var s,o,l,r=this,e=null,a=null,i=r._index,n=r._config,u=(0,h.a)([n.display,!0],t,i);u&&(o=(0,h.v)((0,h.Q)(n.formatter,[s=t.dataset.data[i],t]),s),(l=(0,h.k)(o)?[]:function(t){var e,r=[];for(t=[].concat(t);t.length;)"string"==typeof(e=t.pop())?r.unshift.apply(r,e.split("\n")):Array.isArray(e)?t.push.apply(t,e):(0,h.k)(t)||r.unshift(""+e);return r}(o)).length&&(a=function K(t){var r=t.borderWidth||0,e=t.padding,a=t.size.height,i=t.size.width,n=-i/2,s=-a/2;return{frame:{x:n-e.left-r,y:s-e.top-r,w:i+e.width+2*r,h:a+e.height+2*r},text:{x:n,y:s,w:i,h:a}}}(e=r._modelize(u,l,n,t)))),r._model=e,r._rects=a},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,r){var s,a=t.ctx,i=this._model,n=this._rects;!this.visible()||(a.save(),i.clip&&(s=i.area,a.beginPath(),a.rect(s.left,s.top,s.right-s.left,s.bottom-s.top),a.clip()),a.globalAlpha=function(t,r,e){return Math.max(t,Math.min(r,e))}(0,i.opacity,1),a.translate(b(r.x),b(r.y)),a.rotate(i.rotation),function rt(t,r,e){var a=e.backgroundColor,i=e.borderColor,n=e.borderWidth;!a&&(!i||!n)||(t.beginPath(),function at(t,r,e,a,i,n){var s=Math.PI/2;if(n){var o=Math.min(n,i/2,a/2),l=r+o,u=e+o,d=r+a-o,v=e+i-o;t.moveTo(r,u),l<d&&u<v?(t.arc(l,u,o,-Math.PI,-s),t.arc(d,u,o,-s,0),t.arc(d,v,o,0,s),t.arc(l,v,o,s,Math.PI)):l<d?(t.moveTo(l,e),t.arc(d,u,o,-s,s),t.arc(l,u,o,s,Math.PI+s)):u<v?(t.arc(l,u,o,-Math.PI,0),t.arc(l,v,o,0,Math.PI)):t.arc(l,u,o,-Math.PI,Math.PI),t.closePath(),t.moveTo(r,e)}else t.rect(r,e,a,i)}(t,b(r.x)+n/2,b(r.y)+n/2,b(r.w)-n,b(r.h)-n,e.borderRadius),t.closePath(),a&&(t.fillStyle=a,t.fill()),i&&n&&(t.strokeStyle=i,t.lineWidth=n,t.lineJoin="miter",t.stroke()))}(a,n.frame,i),function st(t,r,e,a){var p,i=a.textAlign,n=a.color,s=!!n,o=a.font,l=r.length,u=a.textStrokeColor,d=a.textStrokeWidth,v=u&&d;if(l&&(s||v))for(e=function it(t,r,e){var a=e.lineHeight,i=t.w,n=t.x;return"center"===r?n+=i/2:("end"===r||"right"===r)&&(n+=i),{h:a,w:i,x:n,y:t.y+a/2}}(e,i,o),t.font=o.string,t.textAlign=i,t.textBaseline="middle",t.shadowBlur=a.textShadowBlur,t.shadowColor=a.textShadowColor,s&&(t.fillStyle=n),v&&(t.lineJoin="round",t.lineWidth=d,t.strokeStyle=u),p=0,l=r.length;p<l;++p)nt(t,r[p],{stroked:v,filled:s,w:e.w,x:e.x,y:e.y+e.h*p})}(a,i.lines,n.text,i),a.restore())}});var ot=Number.MIN_SAFE_INTEGER||-9007199254740991,lt=Number.MAX_SAFE_INTEGER||9007199254740991;function _(t,r,e){var a=Math.cos(e),i=Math.sin(e),n=r.x,s=r.y;return{x:n+a*(t.x-n)-i*(t.y-s),y:s+i*(t.x-n)+a*(t.y-s)}}function W(t,r){var n,s,u,e=lt,a=ot,i=r.origin;for(n=0;n<t.length;++n)u=r.vx*((s=t[n]).x-i.x)+r.vy*(s.y-i.y),e=Math.min(e,u),a=Math.max(a,u);return{min:e,max:a}}function w(t,r){var e=r.x-t.x,a=r.y-t.y,i=Math.sqrt(e*e+a*a);return{vx:(r.x-t.x)/i,vy:(r.y-t.y)/i,origin:t,ln:i}}var H=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function N(t,r,e){var a=r.positioner(t,r),i=a.vx,n=a.vy;if(!i&&!n)return{x:a.x,y:a.y};var s=e.w,o=e.h,l=r.rotation,u=Math.abs(s/2*Math.cos(l))+Math.abs(o/2*Math.sin(l)),d=Math.abs(s/2*Math.sin(l))+Math.abs(o/2*Math.cos(l)),v=1/Math.max(Math.abs(i),Math.abs(n));return u*=i*v,d*=n*v,{x:a.x+(u+=r.offset*i),y:a.y+(d+=r.offset*n)}}(0,h.a4)(H.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,r,e){this._rotation=e,this._rect={x:r.x+t.x,y:r.y+t.y,w:r.w,h:r.h}},contains:function(t){var r=this,a=r._rect;return!((t=_(t,r.center(),-r._rotation)).x<a.x-1||t.y<a.y-1||t.x>a.x+a.w+2||t.y>a.y+a.h+2)},intersects:function(t){var i,n,s,r=this._points(),e=t._points(),a=[w(r[0],r[1]),w(r[0],r[3])];for(this._rotation!==t._rotation&&a.push(w(e[0],e[1]),w(e[0],e[3])),i=0;i<a.length;++i)if(n=W(r,a[i]),s=W(e,a[i]),n.max<s.min||s.max<n.min)return!1;return!0},_points:function(){var t=this,r=t._rect,e=t._rotation,a=t.center();return[_({x:r.x,y:r.y},a,e),_({x:r.x+r.w,y:r.y},a,e),_({x:r.x+r.w,y:r.y+r.h},a,e),_({x:r.x,y:r.y+r.h},a,e)]}});var C={prepare:function(t){var e,a,i,n,s,r=[];for(e=0,i=t.length;e<i;++e)for(a=0,n=t[e].length;a<n;++a)r.push(s=t[e][a]),s.$layout={_box:new H,_hidable:!1,_visible:!0,_set:e,_idx:s._index};return r.sort(function(o,l){var u=o.$layout,d=l.$layout;return u._idx===d._idx?d._set-u._set:d._idx-u._idx}),this.update(r),r},update:function(t){var e,a,i,n,s,r=!1;for(e=0,a=t.length;e<a;++e)n=(i=t[e]).model(),(s=i.$layout)._hidable=n&&"auto"===n.display,s._visible=i.visible(),r|=s._hidable;r&&function dt(t){var r,e,a,i,n,s,o;for(r=0,e=t.length;r<e;++r)(i=(a=t[r]).$layout)._visible&&(o=new Proxy(a._el,{get:(l,u)=>l.getProps([u],!0)[u]}),n=a.geometry(),s=N(o,a.model(),n),i._box.update(s,n,a.rotation()));(function ut(t,r){var e,a,i,n;for(e=t.length-1;e>=0;--e)for(i=t[e].$layout,a=e-1;a>=0&&i._visible;--a)(n=t[a].$layout)._visible&&i._box.intersects(n._box)&&r(i,n)})(t,function(l,u){var d=l._hidable,v=u._hidable;d&&v||v?u._visible=!1:d&&(l._visible=!1)})}(t)},lookup:function(t,r){var e,a;for(e=t.length-1;e>=0;--e)if((a=t[e].$layout)&&a._visible&&a._box.contains(r))return t[e];return null},draw:function(t,r){var e,a,i,n,s,o;for(e=0,a=r.length;e<a;++e)(n=(i=r[e]).$layout)._visible&&(s=i.geometry(),o=N(i._el,i.model(),s),n._box.update(o,s,i.rotation()),i.draw(t,o))}},c="$datalabels",Q="$default";function I(t,r,e,a){if(r){var s,i=e.$context,n=e.$groups;!r[n._set]||(s=r[n._set][n._key])&&!0===(0,h.Q)(s,[i,a])&&(t[c]._dirty=!0,e.update(i))}}var bt={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(t){if((0,h.k)(t))return null;var e,a,i,r=t;if((0,h.i)(t))if((0,h.k)(t.label))if((0,h.k)(t.r))for(r="",i=0,a=(e=Object.keys(t)).length;i<a;++i)r+=(0!==i?", ":"")+e[i]+": "+t[e[i]];else r=t.r;else r=t.label;return""+r},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(t){t[c]={_actives:[]}},beforeUpdate:function(t){var r=t[c];r._listened=!1,r._listeners={},r._datasets=[],r._labels=[]},afterDatasetUpdate:function(t,r,e){var v,p,L,G,T,J,m,x,a=r.index,i=t[c],n=i._datasets[a]=[],s=t.isDatasetVisible(a),o=t.data.datasets[a],l=function ft(t,r){var n,s,e=t.datalabels,a={},i=[];return!1===e?null:(!0===e&&(e={}),r=(0,h.a4)({},[r,e]),n=r.labels||{},s=Object.keys(n),delete r.labels,s.length?s.forEach(function(o){n[o]&&i.push((0,h.a4)({},[r,n[o],{_key:o}]))}):i.push(r),a=i.reduce(function(o,l){return(0,h.F)(l.listeners||{},function(u,d){o[d]=o[d]||{},o[d][l._key||Q]=u}),delete l.listeners,o},{}),{labels:i,listeners:a})}(o,e),u=r.meta.data||[],d=t.ctx;for(d.save(),v=0,L=u.length;v<L;++v)if((m=u[v])[c]=[],s&&m&&t.getDataVisibility(v)&&!m.skip)for(p=0,G=l.labels.length;p<G;++p)J=(T=l.labels[p])._key,(x=new O(T,d,m,v)).$groups={_set:a,_key:J||Q},x.$context={active:!1,chart:t,dataIndex:v,dataset:o,datasetIndex:a},x.update(x.$context),m[c].push(x),n.push(x);d.restore(),(0,h.a4)(i._listeners,l.listeners,{merger:function(P,E,St){E[P]=E[P]||{},E[P][r.index]=St[P],i._listened=!0}})},afterUpdate:function(t){t[c]._labels=C.prepare(t[c]._datasets)},afterDatasetsDraw:function(t){C.draw(t,t[c]._labels)},beforeEvent:function(t,r){if(t[c]._listened){var e=r.event;switch(e.type){case"mousemove":case"mouseout":!function yt(t,r){var i,n,e=t[c],a=e._listeners;if(a.enter||a.leave){if("mousemove"===r.type)n=C.lookup(e._labels,r);else if("mouseout"!==r.type)return;i=e._hovered,e._hovered=n,function ct(t,r,e,a,i){var n,s;!e&&!a||(e?a?e!==a&&(s=n=!0):s=!0:n=!0,s&&I(t,r.leave,e,i),n&&I(t,r.enter,a,i))}(t,a,i,n,r)}}(t,e);break;case"click":!function pt(t,r){var e=t[c],a=e._listeners.click,i=a&&C.lookup(e._labels,r);i&&I(t,a,i,r)}(t,e)}}},afterEvent:function(t){var n,s,o,l,u,d,v,r=t[c],i=function(t,r){var i,n,s,o,e=t.slice(),a=[];for(i=0,s=r.length;i<s;++i)-1===(n=e.indexOf(o=r[i]))?a.push([o,1]):e.splice(n,1);for(i=0,s=e.length;i<s;++i)a.push([e[i],-1]);return a}(r._actives,r._actives=t.getActiveElements());for(n=0,s=i.length;n<s;++n)if((u=i[n])[1])for(o=0,l=(v=u[0].element[c]||[]).length;o<l;++o)(d=v[o]).$context.active=1===u[1],d.update(d.$context);(r._dirty||i.length)&&(C.update(r._labels),t.render()),delete r._dirty}},q=y(9541),f=y(4650),xt=y(9307);let mt=(()=>{class t{constructor(e){this.httpDataService=e}getdashboardpiechartmetrics(){return this.httpDataService.post("request/dashboardPaymentStatusMetrics",{})}getdashboardRFQStatusMetrics(){return this.httpDataService.post("request/dashboardRFQStatusMetrics",{})}}return t.\u0275fac=function(e){return new(e||t)(f.LFG(xt.L))},t.\u0275prov=f.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const gt=[{path:"",component:(()=>{class t{constructor(e){this.dashboardService=e,this.paymentStatusChartValues=[0,0],this.rfqStatusChartValues=[0],this.barChartOptions={responsive:!0,scales:{x:{grid:{display:!1}},y:{min:0,grid:{display:!1},ticks:{stepSize:1}}},plugins:{legend:{display:!1}}},this.barChartType="bar",this.barChartPlugins=[],this.pieChartType="pie",this.pieChartPlugins=[bt],this.barChartData={datasets:[]},this.pieChartData={datasets:[]},this.pieChartOptions={responsive:!0,plugins:{legend:{display:!0,position:"top"},datalabels:{formatter:(a,i)=>{if(i.chart.data.labels)return i.chart.data.labels[i.dataIndex]}}}}}ngOnInit(){this.getPaymentStatusMetricsCount(),this.getRFQStatusMetricsCount()}chartClicked({event:e,active:a}){console.log(e,a)}chartHovered({event:e,active:a}){console.log(e,a)}getPaymentStatusMetricsCount(){this.dashboardService.getdashboardpiechartmetrics().subscribe(e=>{this.paymentStatusChartValues[0]=e?.results[0]?.pending[0].pending,this.paymentStatusChartValues[1]=e?.results[0]?.received[0].received,this.paymentStatusChartValues=[...this.paymentStatusChartValues],this.pieChartData={labels:["Pending","Received"],datasets:[{data:this.paymentStatusChartValues,backgroundColor:["#FAC7C3","#A9E2F5"]}]}})}getRFQStatusMetricsCount(){this.dashboardService.getdashboardRFQStatusMetrics().subscribe(e=>{console.log(e.results[0]),this.rfqStatusChartValues[0]=e.results[0]?.cancelled[0]?.count,this.rfqStatusChartValues[1]=e.results[0]?.expired[0]?.count,this.rfqStatusChartValues[2]=e.results[0]?.inProgress[0]?.count,this.rfqStatusChartValues[3]=e.results[0]?.noBid[0]?.count,this.rfqStatusChartValues[4]=e.results[0]?.open[0]?.count,this.rfqStatusChartValues[5]=e.results[0]?.submit[0]?.count,this.rfqStatusChartValues=[...this.rfqStatusChartValues],this.barChartData={labels:[`Cancelled (${1===e.results[0]?.cancelled.length?e.results[0]?.cancelled[0].count:0})`,`Expired (${1===e.results[0]?.expired.length?e.results[0]?.expired[0].count:0})`,`InProgress (${1===e.results[0]?.inProgress.length?e.results[0]?.inProgress[0].count:0})`,`NoBid (${1===e.results[0]?.noBid.length?e.results[0]?.noBid[0].count:0})`,`Open (${1===e.results[0]?.open.length?e.results[0]?.open[0].count:0})`,`Submit (${1===e.results[0]?.submit.length?e.results[0].submit[0].count:0})`],datasets:[{data:this.rfqStatusChartValues,backgroundColor:["#003049","#ffbb78","#f77f00","#fcbf49","#eae2b7","#ba181b"]}]}})}}return t.\u0275fac=function(e){return new(e||t)(f.Y36(mt))},t.\u0275cmp=f.Xpm({type:t,selectors:[["app-dashboard"]],viewQuery:function(e,a){if(1&e&&f.Gf(q.jh,5),2&e){let i;f.iGM(i=f.CRH())&&(a.chart=i.first)}},decls:5,vars:8,consts:[[1,"dashboard"],[1,"chat_align"],["baseChart","",1,"chart",3,"data","options","plugins","type","chartHover","chartClick"],["baseChart","",1,"chart",3,"data","type","options","plugins"]],template:function(e,a){1&e&&(f.TgZ(0,"div",0)(1,"div",1)(2,"canvas",2),f.NdJ("chartHover",function(n){return a.chartHovered(n)})("chartClick",function(n){return a.chartClicked(n)}),f.qZA()(),f.TgZ(3,"div",1),f._UZ(4,"canvas",3),f.qZA()()),2&e&&(f.xp6(2),f.Q6J("data",a.barChartData)("options",a.barChartOptions)("plugins",a.barChartPlugins)("type",a.barChartType),f.xp6(2),f.Q6J("data",a.pieChartData)("type",a.pieChartType)("options",a.pieChartOptions)("plugins",a.pieChartPlugins))},dependencies:[q.jh],styles:[".dashboard[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(400px,1fr));grid-gap:1rem;align-items:center}.dashboard[_ngcontent-%COMP%]   .chat_align[_ngcontent-%COMP%]{height:50vh;padding:1rem;display:flex;justify-content:center;align-items:center;box-shadow:0 2px 4px #8890c333,0 5px 15px #252c6126}"]}),t})()}];let _t=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[$.Bz.forChild(gt),$.Bz]}),t})();var Ct=y(4466);let Mt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=f.oAB({type:t}),t.\u0275inj=f.cJS({imports:[X.ez,_t,Ct.m]}),t})()}}]);