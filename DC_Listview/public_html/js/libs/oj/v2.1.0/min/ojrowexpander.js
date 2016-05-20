/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdatasource-common"],function(b,f){b.bg=function(a,b){this.XAa=a;this.Gc=b};o_("EmptyNodeSet",b.bg,b);b.bg.prototype.getParent=function(){return this.XAa};b.b.g("EmptyNodeSet.prototype.getParent",{getParent:b.bg.prototype.getParent});b.bg.prototype.getStart=function(){return this.Gc};b.b.g("EmptyNodeSet.prototype.getStart",{getStart:b.bg.prototype.getStart});b.bg.prototype.getCount=function(){return 0};b.b.g("EmptyNodeSet.prototype.getCount",
{getCount:b.bg.prototype.getCount});b.bg.prototype.getData=function(){return null};b.b.g("EmptyNodeSet.prototype.getData",{getData:b.bg.prototype.getData});b.bg.prototype.getMetadata=function(){return null};b.b.g("EmptyNodeSet.prototype.getMetadata",{getMetadata:b.bg.prototype.getMetadata});b.cg=function(a,b){this.$b=a;this.Gc=b};o_("FlattenedNodeSet",b.cg,b);b.cg.prototype.getParent=function(){return this.$b.getParent()};b.b.g("FlattenedNodeSet.prototype.getParent",{getParent:b.cg.prototype.getParent});
b.cg.prototype.getStart=function(){return void 0!=this.Gc?this.Gc:this.$b.getStart()};b.b.g("FlattenedNodeSet.prototype.getStart",{getStart:b.cg.prototype.getStart});b.cg.prototype.getCount=function(){void 0===this.BJ&&(this.BJ=this.x2(this.$b,0),void 0!=this.Gc&&(this.BJ-=this.Gc));return this.BJ};b.b.g("FlattenedNodeSet.prototype.getCount",{getCount:b.cg.prototype.getCount});b.cg.prototype.x2=function(a,b){var c,e,f,h;c=a.getStart();e=a.getCount();b+=e;if(a.dh)for(f=0;f<e;f++)h=a.dh(f+c),null!=
h&&(b=this.x2(h,b));return b};b.cg.prototype.getData=function(a){return this.VO(this.$b,a,{index:this.$b.getStart()},this.zb)};b.b.g("FlattenedNodeSet.prototype.getData",{getData:b.cg.prototype.getData});b.cg.prototype.getMetadata=function(a){return this.VO(this.$b,a,{index:this.$b.getStart()},this.xA)};b.b.g("FlattenedNodeSet.prototype.getMetadata",{getMetadata:b.cg.prototype.getMetadata});b.cg.prototype.xA=function(a,b){return a.getMetadata(b)};b.cg.prototype.zb=function(a,b){return a.getData(b)};
b.cg.prototype.VO=function(a,b,c,e){var f,h,k,l;f=a.getStart();h=a.getCount();for(k=0;k<h;k++){l=c.index;if(l===b)return e.call(this,a,k+f);c.index=l+1;if(a.dh&&(l=a.dh(k+f),null!=l&&(l=this.VO(l,b,c,e),null!=l)))return l}return null};b.ki=function(a,b,c){this.zr=a;this.EV=b;this.DV=this.Cma(c)};o_("MergedNodeSet",b.ki,b);b.ki.prototype.Cma=function(a){var b,c,e;b=this.zr.getStart();for(c=b+this.zr.getCount();b<c;b++)if(e=this.zr.getMetadata(b).key,a===e)return b;return c-1};b.ki.prototype.getParent=
function(){return this.zr.getParent()};b.b.g("MergedNodeSet.prototype.getParent",{getParent:b.ki.prototype.getParent});b.ki.prototype.getStart=function(){return this.zr.getStart()};b.b.g("MergedNodeSet.prototype.getStart",{getStart:b.ki.prototype.getStart});b.ki.prototype.getCount=function(){return this.zr.getCount()+this.EV.getCount()};b.b.g("MergedNodeSet.prototype.getCount",{getCount:b.ki.prototype.getCount});b.ki.prototype.getData=function(a){a=this.p3(a);return a.set.getData(a.index)};b.b.g("MergedNodeSet.prototype.getData",
{getData:b.ki.prototype.getData});b.ki.prototype.getMetadata=function(a){a=this.p3(a);return a.set.getMetadata(a.index)};b.b.g("MergedNodeSet.prototype.getMetadata",{getMetadata:b.ki.prototype.getMetadata});b.ki.prototype.p3=function(a){if(a<=this.DV)return{set:this.zr,index:a};var b=this.EV.getCount();return a>this.DV+b?{set:this.zr,index:a-b}:{set:this.EV,index:a-(this.DV+1)}};b.gg=function(a,b,c,e){this.$b=a;this.Kl=b;this.iy=c;this.Bk=e};o_("NodeSetWrapper",b.gg,b);b.gg.prototype.getParent=function(){return this.$b.getParent()};
b.b.g("NodeSetWrapper.prototype.getParent",{getParent:b.gg.prototype.getParent});b.gg.prototype.getStart=function(){return null!=this.iy?this.iy.start:this.$b.getStart()};b.b.g("NodeSetWrapper.prototype.getStart",{getStart:b.gg.prototype.getStart});b.gg.prototype.getCount=function(){var a,b;a=this.$b.getStart();b=this.$b.getCount();null!=this.iy&&(this.iy.start>a?b=Math.min(0,b-(this.iy.start-a)):this.iy.start<a&&(b=0));return b};b.b.g("NodeSetWrapper.prototype.getCount",{getCount:b.gg.prototype.getCount});
b.gg.prototype.getData=function(a){return this.$b.getData(a)};b.b.g("NodeSetWrapper.prototype.getData",{getData:b.gg.prototype.getData});b.gg.prototype.getMetadata=function(a){var b;b=this.$b.getMetadata(a);b.index=a;b.parentKey=this.getParent();this.Kl.call(null,b.key,b);return b};b.b.g("NodeSetWrapper.prototype.getMetadata",{getMetadata:b.gg.prototype.getMetadata});b.gg.prototype.dh=function(a){return null!=this.Bk&&-1!=this.Bk.indexOf(this.$b.getMetadata(a).key)||!this.$b.dh||(a=this.$b.dh(a),
null==a)?null:new b.gg(a,this.Kl,null,this.Bk)};b.b.g("NodeSetWrapper.prototype.getChildNodeSet",{dh:b.gg.prototype.dh});b.ia=function(a,d){this.He=a;this.qa=d||{};b.ia.p.constructor.call(this)};o_("FlattenedTreeDataSource",b.ia,b);b.b.la(b.ia,b.Nk,"oj.FlattenedTreeDataSource");b.ia.prototype.Init=function(){var a;b.ia.p.Init.call(this);this.He.on("change",this.vpa.bind(this));this.xV=parseInt(this.qa.fetchSize,10);isNaN(this.xV)&&(this.xV=25);this.zu=parseInt(this.qa.maxCount,10);isNaN(this.zu)&&
(this.zu=500);a=this.qa.expanded;Array.isArray(a)?this.ep=a:("all"===a&&(this.Bk=[]),this.ep=[]);this.ap=[]};b.b.g("FlattenedTreeDataSource.prototype.Init",{Init:b.ia.prototype.Init});b.ia.prototype.handleEvent=function(a,d){return b.ia.p.handleEvent.call(this,a,d)};b.b.g("FlattenedTreeDataSource.prototype.handleEvent",{handleEvent:b.ia.prototype.handleEvent});b.ia.prototype.ag=function(){delete this.ap;delete this.ep;delete this.Bk;this.He.off("change");this.He.ag&&this.He.ag()};b.b.g("FlattenedTreeDataSource.prototype.Destroy",
{ag:b.ia.prototype.ag});b.ia.prototype.Jl=function(){return this.xV};b.ia.prototype.dJ=function(){return this.ep};b.b.g("FlattenedTreeDataSource.prototype.getExpandedKeys",{dJ:b.ia.prototype.dJ});b.ia.prototype.wC=function(a){return null!=this.qa?this.qa[a]:null};b.b.g("FlattenedTreeDataSource.prototype.getOption",{wC:b.ia.prototype.wC});b.ia.prototype.getWrappedDataSource=function(){return this.He};b.b.g("FlattenedTreeDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:b.ia.prototype.getWrappedDataSource});
b.ia.prototype.bP=function(a){var b,c;b=this.Jl();c=this.zu;return-1===b?-1===a?c:a:-1===a?Math.min(b,a):b};b.ia.prototype.cn=function(a,b){this.Mw()?this.xma(a,b):this.wma(a,b)};b.ia.prototype.wma=function(a,d){var c,e,f,h,k,l;if(a.start>this.Mf()){c=this.mP();if(0>this.Mf()){a.count=Math.min(c,a.count);this.He.ah(null,a,{success:function(b){this.Bq(b,null,0,a,0,d)}.bind(this),error:function(a){this.po(a,d)}.bind(this)});return}if(0<c){e=this.U2();f=e.parent;h=this.He.tg(f);k=e.index;l=e.depth;-1===
h||k<h-1?(e=this.bP(h),a.start=k+1,a.count=-1===h?Math.min(e,a.count):Math.min(c,Math.min(Math.min(e,a.count),h-a.start)),this.He.ah(f,a,{success:function(b){this.Bq(b,f,l,a,h,d)}.bind(this),error:function(a){this.po(a,d)}.bind(this)})):k===h-1?(c=new b.bg(null,a.start),null!=d&&null!=d.success&&d.success.call(null,c)):(c=this.P1(f,l,d,c),c||(c=new b.bg(null,a.start),null!=d&&null!=d.success&&d.success.call(null,c)));return}}this.LU(a,d)};b.ia.prototype.moveOK=function(a,b,c){return this.He.moveOK(a,
b,c)};b.b.g("FlattenedTreeDataSource.prototype.moveOK",{moveOK:b.ia.prototype.moveOK});b.ia.prototype.move=function(a,b,c,e){this.He.move(a,b,c,e)};b.b.g("FlattenedTreeDataSource.prototype.move",{move:b.ia.prototype.move});b.ia.prototype.mP=function(){return this.zu-(this.Mf()+1)};b.ia.prototype.po=function(a,b){null!=b&&null!=b.error&&b.error.call(null,a)};b.ia.prototype.Bq=function(a,d,c,e,f,h){var k;k=[];a=new b.gg(a,this.GC.bind(this),e);this.Ysa(a,d,c,k);-1===f&&0===a.getCount()&&null!=d&&0<
c?(k=this.P1(d,c,h))||null!=h&&null!=h.success&&h.success.call(null,a):0===k.length?null!=h&&null!=h.success&&h.success.call(null,a):(d=[],d.push(k),k={},k.callbacks=h,k.nodeSet=a,k.keys=[],this.Z8(d,k))};b.ia.prototype.tg=function(a){return this.He.tg(a)};b.b.g("FlattenedTreeDataSource.prototype.getChildCount",{tg:b.ia.prototype.tg});b.ia.prototype.P1=function(a,b,c,e){var f,h,k,l,p,n,m,q,s;void 0===e&&(e=this.mP());this.Rqa()&&(f={queueOnly:!0});h=s=this.bP(-1);for(k=this.Mf()-1;0<=k;k--)if(l=this.wi(k),
p=l.depth,p<b&&(a=l.parent,n=this.He.tg(a),l=l.index,(m=-1===n)||l<n-1)){q={};q.start=l+1;m?(q.count=Math.min(e,Math.max(0,h)),f=void 0):q.count=Math.min(e,Math.min(h,n-q.start));if(0==q.count)break;this.He.ah(a,q,{success:function(b){this.Bq(b,a,p,q,n,c)}.bind(this),error:function(a){this.po(a,c)}.bind(this)},f);b=p;h=Math.max(0,h-q.count);if(m||0===p||0===h)break}void 0!=f&&this.He.ah(a,{start:q.count,count:0},{success:function(b){this.Bq(b,a,p,q,n,c)}.bind(this),error:function(a){this.po(a,c)}.bind(this)});
return h!=s};b.ia.prototype.Ysa=function(a,b,c,e){var f,h,k,l;f=a.getStart();h=a.getCount();for(k=0;k<h;k++)l=a.getMetadata(f+k),l=l.key,this.RE(l,c,f+k,b),this.QA(l)&&e.push(l)};b.ia.prototype.GC=function(a,b){this.QA(a)&&!b.leaf?b.state="expanded":b.state=b.leaf?"leaf":"collapsed"};b.ia.prototype.xma=function(a,b){var c={maxCount:this.zu};0<=this.Mf()&&(c.start=this.wi(this.Mf()).key);this.He.Kx(null,{success:function(c){this.apa(c,a,b)}.bind(this),error:function(a){this.po(a,b)}.bind(this)},c)};
b.ia.prototype.To=function(){return this.He.To()};b.b.g("FlattenedTreeDataSource.prototype.getSortCriteria",{To:b.ia.prototype.To});b.ia.prototype.apa=function(a,d,c){var e,f,h;d.start>this.Mf()?(e=this.mP(),f=Math.min(e,d.count),a=new b.gg(a,this.GC.bind(this),null,this.Bk),0<=this.Mf()?(h=this.U2(),e={index:0,found:!1,count:0},this.FR(a,null,0,h,f,e),f=e.index+1):(e={count:0},this.FR(a,null,0,null,f,e),f=0),null!=c&&null!=c.success&&(a=null!=e?0===e.count?new b.bg(null,d.start):new b.cg(a,f):new b.cg(a),
c.success.call(null,a))):this.LU(d,c)};b.ia.prototype.FR=function(a,b,c,e,f,h){var k,l,p,n,m;k=a.getStart();l=a.getCount();for(p=0;p<l&&h.count!=f;p++){n=a.getMetadata(k+p);m=n.key;h.checkDepth&&e.depth===c&&(h.found=!0,h.checkDepth=!1);if(null==e||h.found)this.RE(m,c,k+p,b),h.count+=1,n.state=n.leaf?"leaf":"expanded";null==e||h.found||(m===e.key?n.leaf||this.QA(m)?h.found=!0:h.checkDepth=!0:h.index+=1);a.dh&&this.QA(m)&&(n=a.dh(p),null!=n&&this.FR(n,m,c+1,e,f,h))}};b.ia.prototype.expand=function(a){this.ff(a)};
b.b.g("FlattenedTreeDataSource.prototype.expand",{expand:b.ia.prototype.expand});b.ia.prototype.ff=function(a,d){var c,e,f,h;c=this.He.tg(a);e=this.bP(c);f=this.zu;if(this.Mf()+1===f&&(h=this.uk(a),h==f-1)){this.JU(a,new b.bg(a,0),0,d);return}0==e?this.JU(a,new b.bg(a,0),0,d):this.He.ah(a,{start:0,count:e},{success:function(b){this.JU(a,b,c,d)}.bind(this),error:function(){this.Mza(a)}.bind(this)})};b.ia.prototype.collapse=function(a){var b,c,e,f,h;b=this.uk(a)+1;c=this.wi(b-1);e=0;c=c.depth;f=this.Mf();
for(h=b;h<f+1;h++){var k=this.wi(h).depth;if(k>c)e+=1;else if(k==c)break}if(0!=e){this.Mw()?this.Bk.push(a):this.Pta(a);f=[];for(c=0;c<e;c++)f.push({key:this.wi(b+c).key,index:b+c});this.g7(b,e);this.lK(f)}this.handleEvent("collapse",{rowKey:a})};b.b.g("FlattenedTreeDataSource.prototype.collapse",{collapse:b.ia.prototype.collapse});b.ia.prototype.QA=function(a){return this.Mw()?this.Bk&&0<this.Bk.length?-1===this.o2(a):!0:this.ep&&0<this.ep.length?-1<this.E2(a):!1};b.ia.prototype.o2=function(a){return this.S2(this.Bk,
a)};b.ia.prototype.E2=function(a){return this.S2(this.ep,a)};b.ia.prototype.S2=function(a,b){var c,e;e=-1;for(c=0;c<a.length;c++)a[c]===b&&(e=c);return e};b.ia.prototype.Pta=function(a){a=this.E2(a);-1<a&&this.ep.splice(a,1)};b.ia.prototype.Jta=function(a){a=this.o2(a);-1<a&&this.Bk.splice(a,1)};b.ia.prototype.Mza=function(a){this.handleEvent("expand",{rowKey:a})};b.ia.prototype.JU=function(a,d,c,e){var f,h,k,l,p,n,m,q,s,r,u;d=new b.gg(d,this.GC.bind(this));h=f=this.uk(a)+1;k=d.getStart();l=d.getCount();
p=this.wi(f-1);n=p.depth+1;q=[];for(s=k;s<l;s++)k=d.getMetadata(s),m=k.key,this.QA(m)&&q.push(m),this.Y4(f,k,p.key,s,n),f++;this.Mw()?this.Jta(a):-1===this.ep.indexOf(a)&&this.ep.push(a);void 0!=e&&(r=e.queue,u=e.prevNodeSetInfo);void 0!=u&&(d=new b.ki(u.nodeSet,d,a));if(0!=q.length||void 0!==r&&0!=r.length)void 0===r&&(r=[]),0<q.length&&r.push(q),void 0===u&&(u={},u.firstIndex=h,u.firstKey=a,u.keys=[]),u.nodeSet=d,u.keys.push(a),this.Z8(r,u);else{if(void 0!=u){e=u.callbacks;if(null!=e){e.success.call(null,
d);return}this.sJ(u.firstIndex,u.firstKey,d)}else this.sJ(h,a,d);d=this.zu;-1===c&&l===this.Jl()||c>l||f==d?this.cO(f):this.Mf()>=d&&this.cO(d);if(void 0!=u)for(c=0;c<u.keys.length;c++)this.handleEvent("expand",{rowKey:u.keys[c]});this.handleEvent("expand",{rowKey:a})}};b.ia.prototype.Z8=function(a,b){var c,e;c=a[a.length-1];e=c.shift();0===c.length&&a.pop();this.ff(e,{prevNodeSetInfo:b,queue:a})};b.ia.prototype.Y4=function(a,b,c,e,f){b=b.key;a<=this.Mf()?this.RE(b,f,e,c,a):this.RE(b,f,e,c)};b.ia.prototype.cO=
function(a,b){var c;void 0==b&&(b=this.Mf()+1-a);c=[];for(var e=0;e<b;e++)c.push({row:this.wi(a+e).key,index:a+e});this.g7(a,b);this.lK(c)};b.ia.prototype.vpa=function(a){var b,c,e;b=a.operation;c=a.parent;c=Array.isArray(c)?c[c.length-1]:c;e=a.index;"insert"===b?this.gpa(c,e,a.data):"delete"===b?this.Uoa(c,e):"refresh"===b&&this.Ipa(c)};b.ia.prototype.gpa=function(a,b,c){var e,f;e=this.uk(a);f=this.wi(e).depth+1;e=e+b+1;c=c.getMetadata(c.getStart());this.Y4(e,c,a,b,f)};b.ia.prototype.Uoa=function(a,
d){var c,e,f,h,k;c=this.uk(a);e=this.wi(c);c+=d;f=this.wi(c);b.l.assert(f.parent===e&&f.depth===e.depth+1);e=c+1;for(h=this.Mf();e<=h;){k=this.wi(e);if(k.depth!=f.depth)break;e++}this.cO(c,1)};b.ia.prototype.Ipa=function(a){null==a&&this.refresh()};b.ia.prototype.Mw=function(){var a=this.He.getCapability("fetchDescendants");return void 0!=this.Bk&&null!=a&&"disable"!=a};b.ia.prototype.Rqa=function(){return"enable"===this.He.getCapability("batchFetch")};b.ia.prototype.refresh=function(){this.Xja()};
b.ia.prototype.uk=function(a){var b,c,e;b=this.Mf();for(c=0;c<=b;c++)if(e=this.wi(c),e.key==a)return c;return-1};b.ia.prototype.getKey=function(a){return 0>a||a>this.Mf()?null:this.wi(a).key};b.ia.prototype.Vya=function(){return{start:0,end:this.Mf()+1}};b.ia.prototype.Nya=function(a){var b;b=[];a=this.uk(a);for(a=this.kl(a);null!=a;)b.push(a),a=this.uk(a),a=this.kl(a);return b.reverse()};b.ia.prototype.LU=function(a,b){null!=b&&null!=b.error&&b.error.call(null)};b.ia.prototype.sJ=function(){b.l.Dc()};
b.ia.prototype.lK=function(){b.l.Dc()};b.ia.prototype.Mf=function(){return this.ap.length-1};b.ia.prototype.U2=function(){return this.ap[this.Mf()]};b.ia.prototype.wi=function(a){return this.ap[a]};b.ia.prototype.kl=function(a){a=this.ap[a];return null!=a?a.parent:null};b.ia.prototype.RE=function(a,b,c,e,f){var h={};h.key=a;h.depth=b;h.index=c;h.parent=e;void 0===f?this.ap.push(h):this.ap.splice(f,0,h)};b.ia.prototype.g7=function(a,b){this.ap.splice(a,b)};b.ia.prototype.Xja=function(){this.ap.length=
0};b.ia.prototype.getCapability=function(a){return this.He.getCapability(a)};b.b.g("FlattenedTreeDataSource.prototype.getCapability",{getCapability:b.ia.prototype.getCapability});b.Ja("oj.ojRowExpander",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{context:null,expand:null,collapse:null},Ym:{root:"oj-rowexpander",icon:"oj-component-icon",clickable:"oj-clickable-icon-nocontext",expand:"oj-rowexpander-expand-icon",collapse:"oj-rowexpander-collapse-icon",leaf:"oj-rowexpander-leaf-icon",
lazyload:"oj-rowexpander-lazyload-icon",toucharea:"oj-rowexpander-touch-area",indent:"oj-rowexpander-indent",iconspacer:"oj-rowexpander-icon-spacer",depth0:"oj-rowexpander-depth-0",depth1:"oj-rowexpander-depth-1",depth2:"oj-rowexpander-depth-2",depth3:"oj-rowexpander-depth-3",depth4:"oj-rowexpander-depth-4",depth5:"oj-rowexpander-depth-5",depth6:"oj-rowexpander-depth-6",depth7:"oj-rowexpander-depth-7"},Ex:{Ry:7,iL:53},_ComponentCreate:function(){this._super();this.element.addClass(this.Ym.root);this.L4()},
L4:function(){var a=this,b;b=this.options.context;this.T="function"===typeof b.component?b.component("instance"):b.component;this.Sc=b.datasource;this.depth=b.depth;this.zj=b.state;this.pp=b.key;this.index=b.index;this.cK=b.parentKey;this.xia();this.wia();this.OH();"expanded"===this.zj||"collapsed"===this.zj?(f(this.uW).on("touchend",function(b){b.preventDefault();a.HO()}),f(this.uW).on("click",function(b){b.preventDefault();a.HO()}),f(this.element).on("keypress",function(b){var d=b.keyCode||b.which;
if(d===f.ui.keyCode.ENTER||d===f.ui.keyCode.SPACE)a.HO(),b.preventDefault(),b.target.focus()}),this.qJ=this.d4.bind(this),f(this.T.element).on("ojkeydown",this.qJ),this.fba=this.Zoa.bind(this),this.bba=this.Koa.bind(this),this.Sc.on("expand",this.fba,this),this.Sc.on("collapse",this.bba,this)):"leaf"===this.zj&&(this.qJ=this.d4.bind(this),f(this.T.element).on("ojkeydown",this.qJ),f(this.icon).attr("tabindex",-1));this.$aa=this.zoa.bind(this);f(this.T.element).on("ojbeforecurrentcell",this.$aa)},refresh:function(){this.element.empty();
this.L4()},_destroy:function(){f(this.T.element).off("ojkeydown",this.qJ);f(this.T.element).off("ojbeforecurrentcell",this.$aa);this.Sc.off("expand",this.fba,this);this.Sc.off("collapse",this.bba,this);this.element.removeClass(this.Ym.root);this.element.empty()},_setOption:function(a,b,c){this._super(a,b,c);"context"==a&&this.refresh()},xia:function(){var a,b;b=this.depth-1;if(b<this.Ex.Ry)this.WM(b);else{for(a=1;a<=b/this.Ex.Ry;a++)this.WM(this.Ex.Ry);a=b%this.Ex.Ry;a<this.Ex.Ry&&this.WM(a)}},WM:function(a){a=
f(document.createElement("span")).addClass(this.Ym.indent).addClass(this.Ym["depth"+a]);this.element.append(a)},wia:function(){var a=f(document.createElement("div")).addClass(this.Ym.iconspacer);this.uW=f(document.createElement("div")).addClass(this.Ym.toucharea);this.icon=f(document.createElement("a")).attr("href","#").attr("aria-labelledby",this.T2()).addClass(this.Ym.icon).addClass(this.Ym.clickable);this.element.append(a.append(this.uW.append(this.icon)))},Is:function(a){this.icon.addClass(this.Ym[a])},
Jt:function(a){this.icon.removeClass(this.Ym[a])},OH:function(){switch(this.zj){case "leaf":this.Jt("icon");this.Jt("clickable");this.Is("leaf");break;case "collapsed":this.Is("expand");this.XE(!1);break;case "expanded":this.Is("collapse");this.XE(!0);break;case "loading":this.Jt("clickable"),this.Is("lazyload")}},SR:function(){switch(this.zj){case "leaf":this.Jt("leaf");this.Is("icon");this.Is("clickable");break;case "collapsed":this.Jt("expand");break;case "expanded":this.Jt("collapse");break;case "loading":this.Jt("lazyload"),
this.Is("clickable")}},zoa:function(a,b){var c,e;null!=b.currentCell&&(c="cell"==b.currentCell.type?b.currentCell.keys.row:b.currentCell.key,null!=b.previousValue&&(e="cell"==b.previousCurrentCell.type?b.previousCurrentCell.keys.row:b.previousCurrentCell.key),this.pp===c&&e!=c&&this.T.KH&&(c=this.v("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.Sc.getWrappedDataSource().tg(this.cK)}),e="collapsed"===this.zj?this.v("accessibleStateCollapsed"):"expanded"===this.zj?this.v("accessibleStateExpanded"):
"",this.T.KH({context:c,state:e})))},d4:function(a,d){var c,e,g;if(this.pp===d.rowKey&&(a=a.originalEvent,c=a.keyCode||a.which,b.A.Zo(a)))if(c==f.ui.keyCode.RIGHT&&"collapsed"===this.zj)this.hR(),this.Sc.expand(this.pp),a.preventDefault();else if(c==f.ui.keyCode.LEFT&&"expanded"===this.zj)this.hR(),this.Sc.collapse(this.pp),a.preventDefault();else if(a.altKey&&c==this.Ex.iL&&this.T.KH){c=this.Sc.Nya(this.pp);if(null!=c&&0<c.length)for(e=[],g=0;g<c.length;g++)e.push({key:c[g],label:this.v("accessibleLevelDescription",
{level:g+1})});c=this.v("accessibleRowDescription",{level:this.depth,num:this.index+1,total:this.Sc.getWrappedDataSource().tg(this.cK)});this.T.KH({context:c,state:"",ancestors:e});a.preventDefault()}},hR:function(){this.SR();this.zj="loading";this.OH()},Zoa:function(a){a=a.rowKey;a===this.pp&&(this.SR(),this.zj="expanded",this.OH(),this.XE(!0),this._trigger("expand",null,{rowKey:a}))},Koa:function(a){a=a.rowKey;a===this.pp&&(this.SR(),this.zj="collapsed",this.OH(),this.XE(!1),this._trigger("collapse",
null,{rowKey:a}))},HO:function(){var a=this.zj;this.hR();"collapsed"===a?this.Sc.expand(this.pp):"expanded"===a&&this.Sc.collapse(this.pp)},XE:function(a){this.icon.attr("aria-expanded",a)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;return"oj-rowexpander-disclosure"!==a&&"oj-rowexpander-icon"!==a||null==this.icon?null:this.icon.get(0)},getSubIdByNode:function(a){return a===this.icon.get(0)?{wEa:"oj-rowexpander-disclosure"}:null},Vp:function(){this._super();
this.icon.attr("aria-labelledby",this.T2())},T2:function(){return this.element.parent().closest("[id]").attr("id")}})});