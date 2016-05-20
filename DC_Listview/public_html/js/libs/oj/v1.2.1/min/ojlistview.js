/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdomscroller"],function(b,f){b.Jc=function(a,b,c){this.qb=b;this.u=a;this.Qy=!1;this.F4(c);this.Init()};b.b.ga(b.Jc,b.b,"oj.DataSourceContentHandler");b.Jc.prototype.Init=function(){b.Jc.q.Init.call(this)};b.b.g("DataSourceContentHandler.prototype.Init",{Init:b.Jc.prototype.Init});b.Jc.prototype.HandleResize=function(){};b.Jc.prototype.Le=function(){f(this.qb).empty();this.qb=this.u=null};b.Jc.prototype.lz=function(){return!this.Qy};b.Jc.prototype.JO=
function(){this.hl()?this.qb.setAttribute("role","tree"):this.qb.setAttribute("role","listbox")};b.Jc.prototype.YP=function(){this.Bo(!1);this.JO()};b.Jc.prototype.qd=function(a){return a.key};b.Jc.prototype.Fd=function(a){var b,c,e;b=f(this.qb).find("."+this.u.Jf());for(c=0;c<b.length;c++)if(e=b[c],a==this.qd(e))return e;return null};b.Jc.prototype.getDataSource=function(){return this.vg};b.Jc.prototype.F4=function(a){this.vg=a};b.Jc.prototype.Bo=function(){};b.Jc.prototype.AM=function(a,b,c,e,g){var h;
h=document.createElement("li");f(h).uniqueId();a.insertBefore(h,b===a.childElementCount?null:a.children[b]);this.yS(h,b,a,b,c,e,g)};b.Jc.prototype.mea=function(a,b,c,e,g){var h,k;g=g.target;f(g).empty().removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.ZN);h=g.parentNode;k=f(h).children().index(g);this.yS(g,k,h,a,b,c,e)};b.Jc.prototype.mpa=function(a,b,c,e,g){null==this.ZN&&(this.ZN=this.mea.bind(this,b,c,e,g));f(a).addClass("oj-listview-item-add-remove-transition").on("transitionend",
this.ZN).css("opacity",0)};b.Jc.prototype.yS=function(a,b,c,e,f,h,k){void 0==k&&(k=this.Tq.bind(this));e=this.QM(e,f,h,a);h=this.u.mda();null!=h?(f=h.call(this,e),null!=f&&(null===f.parentNode||f.parentNode instanceof DocumentFragment?a.appendChild(f):null==f.parentNode&&f.toString&&(h=document.createElement("span"),h.appendChild(document.createTextNode(f.toString())),a.appendChild(h)))):(h=document.createElement("span"),h.appendChild(document.createTextNode(null==f?"":f.toString())),a.appendChild(h));
a=c.children[b];e.parentElement=a;k(a,e)};b.Jc.prototype.Tq=function(a,b){var c;a.key=b.key;a=f(a);a.uniqueId();c=this.u.dE(a);c.attr("role",this.hl()?"treeitem":"option");c!=a&&a.attr("role","presentation");c.addClass(this.u.Mk());this.NN(b)||a.addClass("oj-skipfocus");a.addClass(this.u.Jf())};b.Jc.prototype.QM=function(a,b,c,e){var f,h;f={};f.parentElement=e;f.index=a;f.data=b;f.component=this.u.sg();f.datasource=this.getDataSource();for(h in c)c.hasOwnProperty(h)&&(f[h]=c[h]);return f};b.Jc.prototype.NN=
function(a){return this.u.zw("focusable",a,!0)};b.Jc.prototype.jE=function(a){return this.u.zw("selectable",a,!0)};b.pb=function(a,d,c){b.pb.q.constructor.call(this,a,d,c)};b.b.ga(b.pb,b.Jc,"oj.TableDataSourceContentHandler");b.pb.prototype.Init=function(){b.pb.q.Init.call(this)};b.pb.prototype.hl=function(){return!1};b.pb.prototype.Le=function(){b.pb.q.Le.call(this);this.JZ();null!=this.Py&&(this.Py.destroy(),this.bO=this.Py=null);this.Ry=null};b.pb.prototype.HandleResize=function(a,b){this.vi()&&
void 0!=this.O3&&this.O3!=b&&(this.O3=b,this.checkViewport())};b.pb.prototype.vi=function(){return"loadMoreOnScroll"==this.u.options.scrollPolicy?!0:!1};b.pb.prototype.mk=function(){return Math.max(0,this.u.options.scrollPolicyOptions.fetchSize)};b.pb.prototype.VI=function(){return this.u.options.scrollPolicyOptions.maxCount};b.pb.prototype.F4=function(a){var d;this.JZ();if(null!=a){this.vi()&&(d=this,this.bO=function(a){null!=a?(d.dL(),d.FJ(a),a.maxCountLimit?d.LJ():d.LS()):void 0===a&&d.dL()},this.Py=
new b.Gg(this.u.yN(),a,{fetchSize:this.mk(),maxCount:this.VI(),success:this.bO}));this.N3=this.foa.bind(this);this.M3=this.eoa.bind(this);this.I3=this.aoa.bind(this);this.K3=this.coa.bind(this);this.J3=this.boa.bind(this);this.L3=this.doa.bind(this);if(b.ka&&a instanceof b.ka)a.on("sync",this.N3);a.on("sort",this.M3);a.on("add",this.I3);a.on("remove",this.K3);a.on("change",this.J3);a.on("reset",this.L3)}this.vg=a};b.pb.prototype.LS=function(){var a,b;null==this.Ry&&(a=f(document.createElement("li")),
a.uniqueId().attr("role","presentation").addClass(this.u.Gj()),b=f(document.createElement("div")),b.addClass("oj-listview-loading-icon"),a.append(b),f(this.qb).append(a),this.Ry=a)};b.pb.prototype.dL=function(){null!=this.Ry&&this.Ry.remove();this.Ry=null};b.pb.prototype.Tq=function(a,d){var c;b.pb.q.Tq.call(this,a,d);f(a).addClass(this.u.Gj());this.u.uk()&&this.jE(d)&&this.u.ke(f(a)).attr("aria-selected",!1);this.vi()&&(c=Math.min(this.vg.totalSize(),this.VI()),-1===c&&(c=this.VI()),0<c&&f(a).attr("aria-setsize",
c).attr("aria-posinset",d.index+1));this.u.Ly(a,d)};b.pb.prototype.kma=function(a,b){var c,e,g;this.Tq(a,b);c=f(a);e=c.outerHeight();c.css("opacity","0");c.css("maxHeight","0");g=this.u.Gj();c.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");c.removeClass(g).addClass("oj-listview-item-add-remove-transition");c.children().first().addClass(g);null==this.XN&&(this.XN=this.kea.bind(this,b));c.on("transitionend",this.XN);requestAnimationFrame(function(){c.css("opacity","1");c.css("maxHeight",e+"px")})};b.pb.prototype.LJ=
function(){b.r.error("max count reached")};b.pb.prototype.JZ=function(){null!=this.vg&&(this.vg.off("sync",this.N3),this.vg.off("sort",this.M3),this.vg.off("add",this.I3),this.vg.off("remove",this.K3),this.vg.off("change",this.J3),this.vg.off("reset",this.L3))};b.pb.prototype.Bo=function(a){var d=!0,c;if(this.lz()&&(this.Qy=!0,b.ka&&this.vg instanceof b.ka&&(d=!1),d||a)){a={fetchType:"init",startIndex:0};this.vi()&&(a.pageSize=this.mk());c=this;a=this.vg.fetch(a);a.then(function(a){d&&(c.FJ(a),c.vi()&&
c.LS())},function(a){c.Ll(a)});return}this.u.Bm()};b.pb.prototype.Ll=function(a){b.r.error(a);this.vi()&&this.dL();this.u.Bm()};b.pb.prototype.Nn=function(a,b){var c,e,f;c=this.qb.childElementCount;for(e=0;e<a.length;e++)f=a[e],this.AM(this.qb,c,f,this.getMetadata(c,b[e],f)),c+=1};b.pb.prototype.aoa=function(a){var b,c,e;if(null!=this.qb&&(b=a.data,c=a.keys,a=a.indexes,null!=b&&null!=c&&0<c.length&&0<b.length&&c.length==b.length&&null!=a&&c.length==a.length)){for(e=0;e<b.length;e++)this.AM(this.qb,
a[e],b[e],this.getMetadata(a[e],c[e],b[e]),this.kma.bind(this));this.T1()}};b.pb.prototype.kea=function(a,b){var c=f(b.target);c.removeClass("oj-listview-item-add-remove-transition").addClass(this.u.Gj()).off("transitionend",this.XN).children().children().unwrap();this.u.z3(c.get(0),a)};b.pb.prototype.coa=function(a){var b,c;a=a.keys;if(null!=this.qb&&null!=a&&0!=a.length){for(b=0;b<a.length;b++)c=this.Fd(a[b]),null!=c&&this.oja(c);this.u.Hr()}};b.pb.prototype.oja=function(a){var b;null==this.mO&&
(this.mO=this.pfa.bind(this));b=this.u.Gj();a=f(a);a.children().wrapAll("\x3cdiv class\x3d'"+b+"'\x3e\x3c/div\x3e");a.removeClass(b).css("maxHeight",a.outerHeight()+"px").addClass("oj-listview-item-add-remove-transition").on("transitionend",this.mO);setTimeout(function(){a.css("opacity","0");a.css("maxHeight","0px")},10)};b.pb.prototype.pfa=function(a){var b;a=f(a.target);b=a.parent();a.off("transitionend",this.mO);this.u.QN(a.get(0));a.remove();0==b.get(0).childElementCount&&this.u.Bm()};b.pb.prototype.boa=
function(a){var b,c,e,f;b=a.keys;if(null!=this.qb&&null!=b&&0!=b.length){c=a.data;a=a.indexes;for(e=0;e<b.length;e++)f=this.Fd(b[e]),null!=f&&this.mpa(f,a[e],c[e],this.getMetadata(a[e],b[e],c[e]),this.jma.bind(this));this.u.Hr()}};b.pb.prototype.jma=function(a,b){f(a).css("opacity",0);this.Tq(a,b);null==this.YN&&(this.YN=this.lea.bind(this,b));f(a).on("transitionend",this.YN);setTimeout(function(){f(a).addClass("oj-listview-item-add-remove-transition").css("opacity",1)},10)};b.pb.prototype.lea=function(a,
b){f(b.target).removeClass("oj-listview-item-add-remove-transition").off("transitionend",this.YN);this.u.ppa()};b.pb.prototype.doa=function(){null!=this.qb&&(f(this.qb).empty(),this.u.Hr(),this.Bo(!0))};b.pb.prototype.FJ=function(a){var b;null!=this.qb&&(b=a.data,a=a.keys,Array.isArray(b)&&Array.isArray(a)&&b.length==a.length&&(this.Nn(b,a),this.T1()))};b.pb.prototype.foa=function(a){null!=this.qb&&(0===a.startIndex&&f(this.qb).empty(),this.u.Hr(),this.FJ(a))};b.pb.prototype.eoa=function(){null!=
this.qb&&(f(this.qb).empty(),this.u.Hr(),this.u.nj()&&this.u.Qp(!0),this.Bo(!0))};b.pb.prototype.T1=function(){this.Qy=!1;this.u.Bm();this.checkViewport()};b.pb.prototype.checkViewport=function(){var a;null!=this.Py&&0<this.vg.totalSize()&&this.lz()&&(a=this.Py.checkViewport(),null!=a&&a.then(this.bO,null))};b.pb.prototype.getMetadata=function(a,b,c){c=c.context;null==c&&(c={});null==c.index&&(c.index=a);null==c.key&&(c.key=b);return c};b.Jg=function(a,d,c){b.Jg.q.constructor.call(this,a,d,c)};b.b.ga(b.Jg,
b.Jc,"oj.TreeDataSourceContentHandler");b.Jg.prototype.Init=function(){b.Jg.q.Init.call(this)};b.Jg.prototype.hl=function(){return!0};b.Jg.prototype.Bo=function(){this.Ff(0,null,this.qb,null)};b.Jg.prototype.Ff=function(a,b,c,e){this.Qy=!0;a={start:a,count:this.vg.Ye(b)};this.vg.Ff(b,a,{success:function(a){this.Nn(a,b,c,e)}.bind(this),error:function(a){this.Ll(a)}.bind(this)})};b.Jg.prototype.Nn=function(a,b,c,e){var f,h,k,l;b=a.ta();f=a.R();for(h=0;h<f;h++)k=a.getData(b+h),l=a.getMetadata(b+h),this.AM(c,
b+h,k,l);this.Qy=!1;null!=e&&e.call(null,c);this.u.Bm()};b.Jg.prototype.Tq=function(a,d){var c,e,g,h,k,l;b.Jg.q.Tq.call(this,a,d);c=this.u.Ei();e=this.u.Gj();g=this.u.kh();h=this.u.$q();l=this.u.Ej();k=this.u.Mk();a=f(a);!1==d.leaf?(a.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"),a.hasClass(k)?a.removeClass(k).children().first().addClass(k).attr("aria-expanded","false"):a.children().first().attr("role","presentation").find("."+k).attr("aria-expanded","false"),e=a.children().first(),e.uniqueId().addClass(g),
this.u.zu()&&(a.addClass("oj-collapsed"),g=document.createElement("a"),f(g).attr("href","#").attr("aria-labelledby",e.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),e.prepend(g)),l=document.createElement("ul"),f(l).addClass(c).addClass(h).attr("role","group"),a.append(l)):!0==d.leaf&&a.addClass(e);this.u.uk()&&this.jE(d)&&this.u.ke(a).attr("aria-selected",!1);this.u.Ly(a[0],d)};b.Jg.prototype.Ll=function(a){b.r.error(a);this.u.Bm()};b.Jg.prototype.Lr=function(a,b){var c,
e;c=this.qd(a[0]);e=a.children("ul")[0];this.Ff(0,c,e,b)};b.Jg.prototype.Ir=function(a){a.empty()};b.Pc=function(a,b){this.u=a;this.qb=b};b.b.ga(b.Pc,b.b,"oj.StaticContentHandler");b.Pc.prototype.Init=function(){b.Pc.q.Init.call(this)};b.Pc.prototype.Le=function(){this.y4(this.qb,0);this.Zpa()};b.Pc.prototype.lz=function(){return!0};b.Pc.prototype.HandleResize=function(){};b.Pc.prototype.YP=function(){this.X3(this.qb,0);this.JO();this.u.Bm()};b.Pc.prototype.Lr=function(a,b){var c;c="."+this.u.Ei();
c=f(a).children(c)[0];f(c).css("display","block");b.call(null,c)};b.Pc.prototype.Ir=function(){};b.Pc.prototype.hl=function(){null==this.gO&&(this.gO=0<f(this.qb).children("li").children("ul").length);return this.gO};b.Pc.prototype.y4=function(a,b){var c,e,g,h,k,l,m,n,p,r;c=this.u.Ei();e=this.u.$q();g=this.u.qu();h=this.u.kh();k=this.u.Gj();l=this.u.Jf();m=a.children;for(n=0;n<m.length;n++)p=m[n],this.Ypa(p),p=f(p),p.removeClass(l).removeClass(k).removeClass(this.u.oN(b)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"),
r=p.children("ul"),0<r.length&&(p.children("."+h).children().unwrap(),p.children(".oj-component-icon").remove(),p=f(r[0]),p.removeClass(c).removeClass(g).removeClass(e).removeAttr("role"),this.y4(p[0],b+1))};b.Pc.prototype.X3=function(a,b){var c,e,g,h,k,l,m,n,p,r,s,q,t,w,x;c=this.u.Gj();e=this.u.Jf();g=this.u.Ei();h=this.u.kh();k=this.u.$q();l=this.u.Ej();m=this.u.Mk();n=a.children;p=this.u.zu();for(r=0;r<n.length;r++)s=f(n[r]),q=this.QM(s),this.vpa(s),s.uniqueId().addClass(e),0<b&&s.addClass(this.u.oN(b)),
this.NN(q)||s.addClass("oj-skipfocus"),t=s.children("ul"),0<t.length?(this.gO=!0,s.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"),w=s.children().first(),w.addClass(h),this.noa(t[0])&&(s.hasClass(m)?(s.removeClass(m),w.addClass(m).attr("aria-expanded","false")):(w.attr("role","presentation"),w.find("."+m).attr("aria-expanded","false")),p&&(s.addClass("oj-collapsed"),w.uniqueId(),x=document.createElement("a"),f(x).attr("href","#").attr("role","button").attr("aria-labelledby",w.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass(l),
w.prepend(x))),t=f(t[0]),t.addClass(g).addClass(k).attr("role","group").css("display","none"),this.X3(t[0],b+1)):s.addClass(c),this.u.uk()&&this.jE(q)&&this.u.ke(s).attr("aria-selected",!1),this.u.Ly(s[0],q)};b.Pc.prototype.JO=function(){this.hl()?this.qb.setAttribute("role","tree"):this.qb.setAttribute("role","listbox")};b.Pc.prototype.Zpa=function(){this.qb.removeAttribute("role")};b.Pc.prototype.noa=function(a){return 0<f(a).children("li").length};b.Pc.prototype.QM=function(a){var b;b={};b.key=
a.attr("id");b.parentElement=a.children().first()[0];b.index=a.index();b.data=a[0];b.component=this.u.sg();this.hl()&&(b.leaf=0==a.children("ul").length,a=a.parents("li."+this.u.Jf()),b.depth=a.length,b.parentKey=0==a.length?null:a.first().attr("id"));return b};b.Pc.prototype.vpa=function(a){var b=this.u.dE(a);b.attr("role",this.hl()?"treeitem":"option");b!=a&&a.attr("role","presentation");b.addClass(this.u.Mk())};b.Pc.prototype.Ypa=function(a){a=this.u.dE(f(a));a.removeAttr("role");a.removeAttr("aria-selected");
a.removeAttr("aria-expanded");a.removeClass(this.u.Mk())};b.Pc.prototype.qd=function(a){return f(a).attr("id")};b.Pc.prototype.Fd=function(a){return document.getElementById(a)};b.Pc.prototype.NN=function(a){return this.u.zw("focusable",a,!0)};b.Pc.prototype.jE=function(a){return this.u.zw("selectable",a,!0)};b.BK=function(a,d){function c(){}b.b.ga(c,a,"");c.prototype=f.extend(c.prototype,d);return c}(Object,{$u:37,oz:39,WE:40,yF:38,y6:9,L5:13,M5:27,N5:113,w6:32,Wi:0,Vi:1,aQ:2,hqa:0,fp:1,om:function(a){var d=
this;this.W=a.W;this.element=a.element;this.options=a;this.element.uniqueId().addClass(this.dF()+" oj-component-initnode").attr("tabIndex",0);this.W._on(this.element,{click:function(a){d.iF(a);d.lO=!1},touchstart:function(a){d.DP(a)},touchend:function(a){d.jF(a)},touchcancel:function(a){d.jF(a)},mousedown:function(a){0!==a.button||d.xx()||d.DP(a)},mouseout:function(a){d.YW(a)},mouseover:function(a){d.jfa(a)},keydown:function(a){d.CP(a)},focus:function(a){d.hF(a)},blur:function(a){d.gF(a)}});b.Ma.oy().browser===
b.Ma.gl.sP&&this.W._on(this.ed(),{focus:function(){d.element.focus()}});this.fp===this.fp?this.W._on(this.element,{focusin:function(a){d.hF(a)},focusout:function(a){d.Y5(a)}}):this.W._on(this.element,{focus:function(a){d.hF(a)},blur:function(a){d.gF(a)}});this.W.document.bind("touchend.ojlistview touchcancel.ojlistview",this.jF.bind(this));this.FZ()},du:function(){var a;this.v$();this.vX();a=this.ed();this.tj(a[0])},refresh:function(){this.$Z();this.gv();this.vX();this.FZ()},destroy:function(){this.element.removeClass(this.dF()+
" oj-component-initnode");this.Ek(this.ed());this.$Z();b.v.unwrap(this.element,this.ed());this.W.document.off(".ojlistview")},$Z:function(){this.zF();this.T$(this.element);null!=this.Ee&&(this.Ee.Le(),this.Ee=null);this.ib=null;this.Hr()},e4:function(){this.ed().removeClass("oj-focus-ancestor");null!=this.ib&&f(this.ib.elem).removeClass("oj-focus");null!=this.hO&&this.Qq(this.hO,"oj-hover")},Ira:function(){},getNodeBySubId:function(a){var b;if(null==a)return this.element?this.element[0]:null;b=a.subId;
if("oj-listview-disclosure"===b||"oj-listview-icon"===b)if(a=a.key,a=this.Fd(a),null!=a&&a.firstElementChild&&(a=a.firstElementChild.firstElementChild,null!=a&&(f(a).hasClass(this.gm())||f(a).hasClass(this.Ej()))))return a;return null},getSubIdByNode:function(a){if(null!=a&&f(a).hasClass(this.gm())||f(a).hasClass(this.Ej()))if(a=this.Ri(a),null!=a&&0<a.length&&(a=this.qd(a[0]),null!=a))return{subId:"oj-listview-disclosure",key:a};return null},Ek:function(a){a&&this.De&&b.v.Qh(a,this.De)},tj:function(a){a&&
(null==this.De&&(this.De=this.Se.bind(this)),b.v.eh(a,this.De))},Se:function(a,b){0<a&&0<b&&null!=this.Ee&&this.Ee.HandleResize(a,b)},dQ:function(a){return null!=a.data||null!=a.drillMode||null!=a.groupHeaderPosition||null!=a.item||null!=a.scrollPolicy||null!=a.scrollPolicyOptions},zr:function(a){var b,c,e,g;if(this.dQ(a))return null!=a.data&&(null==a.currentItem&&this.wh("currentItem",null),null==a.selection&&this.Qp(!0)),!0;null!=a.currentItem?(c=this.Fd(a.currentItem),null!=c&&(c=f(c),this.$h(c)||
this.pn(c,null))):null===a.currentItem&&(this.sz(),this.ib=null);null!=a.expanded&&this.Ee.hl()&&(c=a.expanded,Array.isArray(c)&&(this.faa(),b=this,f.each(c,function(a,c){b.ZM(c,!0,!0,!0)})));if(null!=a.selection&&this.uk())for(a.selection=this.mca(a.selection),e=a.selection,this.Qp(!1),g=0;g<e.length;g++)c=this.Fd(e[g]),null!=c&&this.Pv(c,e[g]);null!=a.selectionMode&&(this.Qp(!0),this.gv());return!1},Xm:function(a,b,c){return this.W._trigger(a,b,c)},wh:function(a,b,c){this.W.option(a,b,c)},Qd:function(a){return this.W.option(a)},
vX:function(){var a;a=this.Qd("data");if(null!=a){if("undefined"===typeof b.T||"undefined"===typeof b.mp)throw"oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";if(a instanceof b.T)this.Ee=new b.pb(this,this.element[0],a);else if(a instanceof b.mp)this.Ee=new b.Jg(this,this.element[0],a);else throw"Invalid data";}else this.Ee=new b.Pc(this,this.element[0]);this.Zka();this.Ee.YP()},A6:function(a){this.element.attr("aria-activedescendant",a.attr("id"))},gv:function(){this.element.attr("aria-activedescendant",
"");this.nj()?this.element.attr("aria-multiselectable",!0):this.uk()&&this.element.attr("aria-multiselectable",!1)},zF:function(){this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable")},v$:function(){var a,b;a=this.ed();this.gv();b=this.y$();a.append(b);this.Q3=b},y$:function(){var a=f(document.createElement("div"));a.addClass("oj-listview-status").attr({id:this.LH("status"),role:"status"});return a},Zka:function(){var a=this.W.A("msgFetchingData");this.Q3.text(a).show()},
Ifa:function(){this.Q3.hide()},yN:function(){return this.ed()},ed:function(){null==this.Oy&&(this.Oy=this.Haa());return this.Oy},Haa:function(){var a=f(document.createElement("div"));a.addClass(this.yP()).addClass("oj-component");this.element.parent()[0].replaceChild(a[0],this.element[0]);a.prepend(this.element);return a},ada:function(){return this.W.A("msgNoData")},r$:function(){var a,b;a=this.ada();b=document.createElement("li");b.id=this.LH("empty");b.className="oj-listview-empty-text";b.textContent=
a;return b},Oe:function(a){a=this.ke(a).attr("aria-expanded");return"true"==a?this.Wi:"false"==a?this.Vi:this.aQ},lp:function(a,b){var c=this.zu();b==this.Wi?(this.ke(a).attr("aria-expanded","true"),c&&a.removeClass("oj-collapsed").addClass("oj-expanded")):b==this.Vi&&(this.ke(a).attr("aria-expanded","false"),c&&a.removeClass("oj-expanded").addClass("oj-collapsed"))},zw:function(a,b,c){a=this.options.item[a];return"function"==typeof a&&c?a.call(this,b):a},mda:function(){var a=this.zw("renderer",null,
!1);return"function"!=typeof a?null:a},z3:function(){},QN:function(a){var b;if(null!=a&&a.id&&null!=this.Wk)for(b in this.Wk)if(this.Wk.hasOwnProperty(b)&&this.Wk[b]===a.id){delete this.Wk[b];break}},Ly:function(a,b){var c,e,g,h;this.$H(a);if(this.uk())if(c=this.Qd("selection"),this.uh(a))for(g=0;g<c.length;g++){if(c[g]==b.key&&(this.Pv(a,c[g]),!this.nj())){1<c.length&&(e=f(this.Fd(b.key)),this.wh("selection",[b.key],{_context:{originalEvent:null,Za:!0,Cj:{items:e}},changed:!0}));break}}else if(g=
c.indexOf(b.key),-1<g){c=c.slice(0);c.splice(g,1);e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Fd(c[g]);this.wh("selection",c,{_context:{originalEvent:null,Za:!0,Cj:{items:f(e)}},changed:!0})}this.Ee.hl()&&this.Oe(f(a))==this.Vi&&(g=this.Qd("expanded"),this.ut()?this.ep(f(a),null,!1,null,!1,!1,!1):Array.isArray(g)&&(h=this,f.each(g,function(c,e){e==b.key&&h.ep(f(a),null,!1,null,!1,!1,!1)})));null!=this.ib&&b.key==this.ib.key&&null!=this.ib.elem&&a!=this.ib.elem.get(0)&&(this.ib.elem=f(a))},
Bm:function(){var a;this.Ifa();f(document.getElementById(this.LH("empty"))).remove();0==this.element[0].childElementCount?(a=this.r$(),this.element.append(a)):(this.Au=null,a=this.Qd("currentItem"),null==this.ib&&null!=a&&(a=this.Fd(a),null==a||this.$h(f(a))||this.pn(f(a),null)),this.ed().hasClass("oj-focus-ancestor")&&null==this.ib&&this.zX());this.Xm("ready",null,{})},ppa:function(){var a=this.Qd("currentItem");null!=a&&(a=this.Fd(a),null==a||this.$h(f(a))||this.pn(f(a),null))},Hr:function(){this.fO=
this.Au=null},d4:function(a,b,c){if(this.kz(f(b.target)))return!1;a=f(b.target).closest("."+this.Jf());0<a.length&&!this.$h(f(a[0]))&&this.pn(f(a[0]),null);a={launcher:this.element,initialFocus:"menu"};"keyboard"===c&&(a.position={my:"start top",at:"start bottom",of:this.ib.elem});this.W.nf(b,c,a)},GP:function(a){return null!=a.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/)},kz:function(a){for(;null!=a&&a[0]!=this.element[0]&&"LI"!=a.prop("nodeName");){if(3!=a[0].nodeType){var b=
a.attr("tabIndex"),c=a.attr("data-oj-tabindex");if(null!=b&&0<=b&&!a.hasClass(this.Mk())||this.GP(a)&&(-1!=b||-1!=c))return!0}a=a.parent()}return!1},$H:function(a){var b;f(a).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function(){f(this).removeAttr("data-first").removeAttr("data-last");b=parseInt(f(this).attr("tabIndex"),10);(isNaN(b)||0<=b)&&f(this).attr("tabIndex",-1).attr("data-tabmod",isNaN(b)?-1:b)})},Vba:function(a){var b;a=f(a).find("[data-tabmod]").each(function(){b=
parseInt(f(this).attr("data-tabmod"),10);f(this).removeAttr("data-tabmod");-1==b?f(this).removeAttr("tabIndex"):f(this).attr("tabIndex",b)});a.first().attr("data-first","true");a.last().attr("data-last","true")},T$:function(a){f(a).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last")},$h:function(a){return a.hasClass("oj-skipfocus")},hF:function(a){this.ed().addClass("oj-focus-ancestor");null==this.ib?this.yt()||this.lO||this.zX(a):
this.lO||this.Xu()},zX:function(a){var b,c,e;b=this.Aw();for(c=0;c<b.length;c++)if(e=f(b[c]),!this.$h(e)){this.pn(e,a);break}},Y5:function(a){this.gF(a)},gF:function(a){null!=a.relatedTarget&&f.contains(this.element.get(0),a.relatedTarget)||(this.ed().removeClass("oj-focus-ancestor"),this.sz())},YW:function(a){a=this.Ri(a.target);null!=a&&(this.hO=null,this.Qq(a,"oj-hover"))},jfa:function(a){this.xx()||(a=this.Ri(a.target),null==a||this.$h(a)||(this.hO=a,this.aC(a,"oj-hover")))},xx:function(){return 500>
Date.now()-this.qK},CP:function(a){var b,c;if(this.zu()&&(b=a.keyCode,b===this.$u||b===this.oz))if(c=this.ib.elem,b===this.$u){if(this.Oe(c)==this.Wi){this.Nm(c,a,!0,this.ib.key,!0,!0);return}}else if(this.Oe(c)==this.Vi){this.ep(c,a,!0,this.ib.key,!0,!0,!0);return}!0===this.EP(a)&&a.preventDefault()},DP:function(a){this.lO=!0;a=this.ij(f(a.target));null==a||0==a.length||this.$h(a)||(this.ed().hasClass("oj-focus-ancestor")||this.ed().addClass("oj-focus-ancestor"),this.aC(a,"oj-focus"))},jF:function(a){this.qK=
Date.now();this.YW(a)},iF:function(a){var b,c,e,g;0===a.button&&(b=this.Ej(),c=this.gm(),e=this.kh(),g=f(a.target),g.hasClass(c)?(this.gk(a),a.preventDefault()):g.hasClass(b)?(this.Xd(a),a.preventDefault()):(this.KX()&&null!=this.ib&&(this.rL(!1),this.$H(this.ib.elem)),b=this.ij(g),null==b||0==b.length||this.$h(b)||(this.ed().hasClass("oj-focus-ancestor")||this.ed().addClass("oj-focus-ancestor"),this.uk()&&this.uh(b[0])?this.yt()?this.zfa(b,a):this.X5(b,a):this.tea(b,a),this.zu()&&g.closest("."+e)&&
(this.Oe(b)==this.Vi?this.Xd(a):this.Oe(b)==this.Wi&&this.gk(a)))))},yt:function(){return b.v.Od()},QH:function(a){return b.v.Io(a)},LH:function(a){return[this.element.attr("id"),a].join(":")},Ri:function(a){return f(a).closest("."+this.Jf())},wga:function(a){return a.hasClass("oj-clickthrough-disabled")||a.hasClass("oj-component-initnode")||a.hasClass("oj-component")},ij:function(a){for(;0<a.length&&!this.wga(a);){if(a.hasClass(this.Jf()))return a;a=a.parent()}return null},sda:function(){null==this.H3&&
(this.H3=parseInt(this.ed().css("border-top-width"),10)+parseInt(this.ed().css("border-bottom-width"),10));return this.H3},o_:function(a){var b,c,e,g,h,k,l=0;b=a.offsetTop;c=a.offsetHeight;a=this.ed()[0];e=a.scrollTop;g=a.offsetHeight;null!=this.Fe&&(h=parseInt(this.Fe.style.top,10),k=f(this.Fe).outerHeight(),b<=h&&h<b+c?l=(c+b-h)/2:b>=h&&b<h+k&&(l=(h+k-b)/2));b>=e&&b+c<=e+g?0<l&&(a.scrollTop=e-l):(b=Math.max(0,Math.min(b-l,Math.abs(b+c-g))),b>e&&(b+=this.sda()),a.scrollTop=b)},qd:function(a){return this.Ee.qd(a)},
Fd:function(a){var b;return null!=this.Wk&&(b=this.Wk[a],null!=b)?document.getElementById(b):this.Ee.Fd(a)},Mr:function(a){return a==this.yF||a==this.WE},Aw:function(){var a,b,c;null==this.Au&&(a=this.$q(),b="."+this.Jf()+":visible",this.Au=this.element.find(b).filter(function(){return(c=f(this).parent().hasClass(a))?!f(this).parent().parent().hasClass("oj-collapsed"):!0}));return this.Au},ip:function(a,b,c){var e,g,h;if(!this.Ee.lz())return!0;e=!b||this.pE?this.ib.elem:this.Mo;g=!1;h=this.Aw();e=
h.index(e);switch(a){case this.yF:e--;if(0<=e){for(a=f(h[e]);this.$h(a);){e--;if(0>e)return!1;a=f(h[e])}b?(this.nI(a,c),this.pE=!1):(this.pn(a,c),this.pE=!0)}g=!0;break;case this.WE:e++;if(e<h.length){for(a=f(h[e]);this.$h(a);){e++;if(e==h.length)return!1;a=f(h[e])}b?(this.nI(a,c),this.pE=!1):(this.pn(a,c),this.pE=!0)}g=!0}return g},KX:function(){return"actionable"==this.Moa},rL:function(a){this.Moa=a?"actionable":"navigation";a||this.element[0].focus()},iqa:function(){return this.fp},ke:function(a){return a.hasClass(this.Mk())?
a:f(a.find("."+this.Mk()).first())},Hka:function(a){this.ke(a).attr("tabIndex",0)},Hja:function(a){var b;b=!0;"presentation"===a.attr("role")&&(b=!1);a=this.ke(a);b?a.removeAttr("tabIndex"):a.attr("tabIndex",-1)},lV:function(a,b){this.fp===this.fp?(null!=a&&this.Hja(a),this.Hka(b),this.element.attr("tabIndex")&&this.element.removeAttr("tabIndex")):this.A6(b)},dE:function(a){var b;b=a.children("a, input, select, textarea, button");return 1===b.length&&0===b.first().find("a, input, select, textarea, button").length?
b.first():a},s_:function(a,b){var c,e,f;null!=a?(c=a[0],c=this.qd(c),null==this.ib||c!=this.ib.key?(e={key:c,item:a},null!=this.ib&&(e.previousKey=this.ib.key,e.previousItem=this.ib.elem),f=!this.Xm("beforeCurrentItem",b,e),f||(this.ib=f={key:c,elem:a},this.lV(e.previousItem,a),this.wh("currentItem",c,{_context:{originalEvent:b,Za:!0,Cj:{item:a}},changed:!0}))):c==this.ib.key&&(this.ib=f={key:c,elem:a},this.lV(null,a))):this.ib=null},Xu:function(a){var b,c;null!=this.ib&&this.ed().hasClass("oj-focus-ancestor")&&
(a=a||!1,b=this.ib.elem,this.aC(b,"oj-focus"),this.fp===this.fp&&(b=this.ke(b),c=document.activeElement,!a&&b.get(0).contains(c)||b.get(0).focus()))},sz:function(){null!=this.ib&&this.Qq(this.ib.elem,"oj-focus")},tea:function(a,b){this.pn(a,b)},pn:function(a,b){this.o_(a[0]);this.sz();this.s_(a,b);this.Xu()},uk:function(){return"none"!=this.Qd("selectionMode")},nj:function(){return"multiple"==this.Qd("selectionMode")},uh:function(a){a=this.ke(f(a)).get(0);return a.hasAttribute("aria-selected")},mca:function(a){var b,
c,e;b=[];for(c=0;c<a.length&&(e=this.Fd(a[c]),null==e||!this.uh(e)||(b.push(a[c]),this.nj()));c++);return b},Gla:function(){var a,b;null!=this.Wk&&(a=this,f.each(this.Qd("selection"),function(c,e){b=a.Fd(e);null!=b&&a.Qq(b,"oj-selected")}))},aC:function(a,b){this.jp(a,b,!0)},Qq:function(a,b){this.jp(a,b,!1)},jp:function(a,b,c){var e;a=f(a);"oj-selected"==b&&this.ke(a).attr("aria-selected",c?"true":"false");e=a.children("."+this.kh());0<e.length&&(a=f(e[0]));c?a.addClass(b):a.removeClass(b)},X5:function(a,
b){var c,e;this.o_(a[0]);c=this.QH(b);e=b.shiftKey;this.nj()?c||e?!c&&e?this.nI(a,b):this.RG(a,b):this.fv(a,b):this.fv(a,b)},zfa:function(a,b){this.nj()?this.RG(a,b):this.fv(a,b)},Qp:function(a){this.Gla();a&&this.wh("selection",[],{_context:{originalEvent:null,Za:!0,Cj:{items:f()}},changed:!0});this.Mo=null},fv:function(a,b){this.Qp(!1);this.RG(a,b,[])},nI:function(a,b){var c;null!=this.ib&&(c=this.Mo,c!=a&&(this.Qq(a,"oj-focus"),this.VU(this.ib.elem,a,b)))},VU:function(a,b,c){this.Qp(!1);this.Mo=
b;this.Mfa(a,b,c);this.Xu()},Mfa:function(a,b,c){var e,g,h,k,l;e=[];g=[];h=this.Aw();a=h.index(a);k=h.index(b);a>k?b=k:(b=a,a=k);for(;b<=a;b++)k=h[b],this.uh(k)&&(l=this.Ee.qd(k),this.Pv(k,l),e.push(l),g.push(k));this.wh("selection",e,{_context:{originalEvent:c,Za:!0,Cj:{items:f(g)}},changed:!0})},Pv:function(a,b){null==this.Wk&&(this.Wk={});this.Wk[b]=f(a).attr("id");this.aC(a,"oj-selected")},RG:function(a,b,c){var e,g;e=this.qd(a[0]);void 0==c&&(c=this.Qd("selection").slice(0));this.sz();g=c.indexOf(e);
-1<g?(this.Qq(a,"oj-selected"),c.splice(g,1)):(this.Mo=a,this.Pv(a,e),c.push(e));e=Array(c.length);for(g=0;g<c.length;g++)e[g]=this.Fd(c[g]);this.s_(a,b);this.Xu();this.wh("selection",c,{_context:{originalEvent:b,Za:!0,Cj:{items:f(e)}},changed:!0})},rz:function(a,b,c){var e,g,h,k;e=this.Qd("selection").slice(0);g=this.ib.elem;h=this.ib.key;k=e.indexOf(h);if(-1<k){if(c)return;this.Qq(g,"oj-selected");e.splice(k,1);0==e.length&&(this.Mo=null)}else this.uh(g[0])&&(b||(this.Qp(!1),e.length=0),this.Mo=
g,this.Pv(g,h),e.push(h));b=Array(e.length);for(c=0;c<e.length;c++)b[c]=this.Fd(e[c]);this.wh("selection",e,{_context:{originalEvent:a,Za:!0,Cj:{items:f(b)}},changed:!0})},EP:function(a){var b,c,e,f=!1;if(null==this.ib)return!1;b=a.keyCode;c=this.ib.elem;this.KX()?b==this.M5?(this.rL(!1),this.$H(c),this.Xu(!0),f=!0):b===this.y6&&(b=c.find("[data-first]"),c=c.find("[data-last]"),a.shiftKey?0<b.length&&0<c.length&&b!=c&&a.target==b[0]&&(c[0].focus(),f=!0):0<b.length&&0<c.length&&b!=c&&a.target==c[0]&&
(b[0].focus(),f=!0)):b==this.N5?(this.Vba(c),b=c.find("[data-first]"),0<b.length&&(b[0].focus(),this.rL(!0))):b==this.w6&&this.uk()?(c=this.QH(a),(e=a.shiftKey)&&!c&&null!=this.Mo&&this.nj()?this.VU(this.Mo,this.ib.elem,a):this.rz(a,c&&!e&&this.nj(),!1),f=!0):b==this.L5&&this.uk()?this.rz(a,!1,!0):this.Mr(b)&&(c=this.QH(a),e=a.shiftKey,c||(f=this.ip(b,e&&this.uk()&&this.nj(),a)));return f},zu:function(){return"none"!=this.Qd("drillMode")},ut:function(){var a=this.Qd("expanded");if("auto"===a){if(!this.zu())return!0}else if("all"===
a)return!0;return!1},ZM:function(a,b,c,e){var g=this.Fd(a);null!=g&&this.ep(f(g),null,!1,a,b,e,c)},Xd:function(a){var b=this.Ri(a.target);null!=b&&0<b.length&&this.ep(b,a,!0,null,!0,!0,!0)},ep:function(a,b,c,e,f,h,k){var l;if(this.Oe(a)==this.Vi){null==e&&(e=this.qd(a[0]));l={item:a,key:e};if(k&&(e=!this.Xm("beforeExpand",b,l))&&f)return;this.Ee.Lr(a,function(a){this.eca(a,c,b,l,h)}.bind(this));this.Au=null;null!=b&&b.stopPropagation()}},eca:function(a,b,c,e,g){var h;this.RE(f(a),b);a=a.parentNode;
a=f(a);this.lp(a,this.Wi);b=this.Ej();h=this.gm();a.children("."+this.kh()).find("."+b).removeClass(b).addClass(h);g&&this.Xm("expand",c,e)},ES:function(a,b){var c;a.parentsUntil("ul.oj-component-initnode","ul."+this.Ei()).each(function(){c=parseInt(f(this).css("maxHeight"),10);0<c&&f(this).css("maxHeight",c+b+"px")})},RE:function(a,b){var c=0;b?(a.children().each(function(){c+=f(this).outerHeight(!0)}),this.yt()&&this.ES(a,c),null==this.cO&&(this.cO=this.Oea.bind(this)),a.css("maxHeight","0px"),
a.on("transitionend",this.cO),requestAnimationFrame(function(){a.css("maxHeight",c+"px")})):(this.yt()?(a.children().each(function(){c+=f(this).outerHeight(!0)}),a.css("maxHeight",c+"px"),this.ES(a,c)):a.css("maxHeight",""),this.SE(a))},Oea:function(a){a=f(a.target);a.off("transitionend",this.cO);this.yt()||a.css("maxHeight","");this.SE(a)},SE:function(a){a.removeClass(this.$q()).addClass(this.qu())},t1:function(a,b,c){var e=this.Fd(a);null!=e&&this.Nm(f(e),null,!1,a,b,c)},gk:function(a){var b=this.Ri(a.target);
null!=b&&0<b.length&&this.Nm(b,a,!0,null,!0,!0)},Nm:function(a,b,c,e,f,h){var k;this.Oe(a)==this.Wi&&(null==e&&(e=this.qd(a[0])),e={item:a,key:e},k=!this.Xm("beforeCollapse",b,e),k&&f||(this.PE(a,c),this.lp(a,this.Vi),c=this.Ej(),f=this.gm(),a.find("."+f).first().removeClass(f).addClass(c),this.Au=null,null!=b&&b.stopPropagation(),h&&this.Xm("collapse",b,e)))},PE:function(a,b){var c=0,e;e=a.children("ul").first();b?(null==this.$N&&(this.$N=this.vea.bind(this)),e.children().each(function(){c+=f(this).outerHeight()}),
e.css("transition-property","none"),e.css("maxHeight",c+"px"),e.css("transition-property",""),e.on("transitionend",this.$N),setTimeout(function(){e.css("maxHeight","0px")},100)):(e.css("maxHeight","0px"),this.QE(a))},vea:function(a){a=f(a.target);a.off("transitionend",this.$N);this.QE(a)},QE:function(a){a.removeClass(this.qu()).addClass(this.$q());null!=this.Ee&&this.Ee.Ir(a)},faa:function(){var a;a=this;this.Aw().each(function(){a.Nm(f(this),null,!1,null,!1,!1)})},getExpanded:function(){var a,b,
c;a=[];b=this;this.Aw().each(function(){c=f(this);b.Oe(c)==b.Wi&&a.push(b.qd(c[0]))});return a},sg:function(){return b.Components.sg(this.element)},yP:function(){return this.yt()?"oj-listview oj-listview-container-touch":"oj-listview oj-listview-container"},dF:function(){return"oj-listview-element"},Gj:function(){return"oj-listview-item"},Mk:function(){return"oj-listview-focused-element"},Jf:function(){return"oj-listview-item-element"},kh:function(){return"oj-listview-group-item"},Ei:function(){return"oj-listview-group"},
qu:function(){return"oj-listview-collapsible-transition"},$q:function(){return this.qu()},Ej:function(){return"oj-listview-collapse-icon"},gm:function(){return"oj-listview-expand-icon"},oN:function(){return""},FZ:function(){var a=this;this.W._off(this.ed(),"scroll");this.XX()&&this.W._on(this.ed(),{scroll:function(){a.bX()}})},XX:function(){return"static"!=this.Qd("groupHeaderPosition")},xw:function(){var a;null==this.fO&&(a="."+this.kh()+":visible",this.fO=this.element.find(a).filter(function(){return!f(this).parent().hasClass("oj-collapsed")&&
0<f(this).next().children().length?!0:!1}));return this.fO},nM:function(a){a.style.position="static";a.style.top="auto";a.style.width="auto"},cW:function(a){var b;b=this.xw();a=b.index(a);return-1<a&&a<b.length-1?b[a+1]:null},dia:function(a,b){var c,e,f;c=a.offsetWidth;e=a.offsetHeight;f=this.cW(a);null!=f&&f.offsetTop<=b+e+5&&(b-=e);a.style.position="absolute";a.style.top=b+"px";a.style.width=c+"px"},bX:function(){var a,b,c,e,f,h,k,l;a=this.ed().get(0).scrollTop;if(null!=this.Fe&&0==a)this.nM(this.Fe),
this.Fe=null;else{c=this.xw();e=0;null!=this.Fe&&(e=this.Fe.offsetHeight);for(f=0;f<c.length;f++)if(h=c[f],this.Fe!=h&&(k=c[f].offsetTop,l=k+h.parentNode.offsetHeight,k<a&&l>a+e)){b=h;break}null!=b&&b!=this.Fe?(null!=this.Fe&&this.nM(this.Fe),this.dia(b,a),this.Fe=b):null!=this.Fe&&(b=this.cW(this.Fe),this.Fe.style.top=null!=b&&b.offsetTop<=a+e?b.offsetTop-e+"px":a+"px")}},n_:function(a){var b,c;b=this.ed().get(0);c=b.scrollTop;null!=this.Fe&&(this.nM(this.Fe),this.Fe=null);b.scrollTop=a.offsetTop;
this.XX()&&c==b.scrollTop&&this.bX();this.lka(a)},lka:function(a){var b=this,c;f(a).next().children().each(function(){c=f(this);if(!b.$h(c))return b.wh("currentItem",this.key),!1})}});o_("_ojListView",b.BK,b);b.ya("oj.ojListView",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{currentItem:null,data:null,drillMode:"collapsible",expanded:"auto",groupHeaderPosition:"sticky",item:{focusable:!0,renderer:null,selectable:!0},scrollPolicy:"auto",scrollPolicyOptions:{fetchSize:25,maxCount:500},selection:[],
selectionMode:"none",beforeCurrentItem:null,beforeExpand:null,beforeCollapse:null,collapse:null,expand:null,optionChange:null,ready:null},_ComponentCreate:function(){this._super();this.Aa()},Aa:function(){var a={};a.element=this.element;a.W=this;a=f.extend(this.options,a);this.ld=new b.BK;this.ld.om(a)},hf:function(){this._super();this.ld.du()},_destroy:function(){this.ld.destroy();this._super()},lf:function(a,b,c){this.ld.d4(a,b,c)},_setOptions:function(a,b){var c=this.ld.zr(a,b);this._super(a,b);
c&&(this.ld.refresh(),this.gV())},_setOption:function(a,b){var c=!0;"selectionMode"==a?c="none"==b||"single"==b||"multiple"==b:"drillMode"==a?c="collapsible"==b||"none"==b:"scrollPolicy"==a?c="auto"==b||"loadMoreOnScroll"==b:"groupHeaderPosition"==a&&(c="static"==b||"sticky"==b);if(c)this._super(a,b);else throw"Invalid value: "+b+" for key: "+a;},ii:function(){this.ld.e4()},ml:function(){},widget:function(){return this.ld.yN()},refresh:function(){this._super();this.ld.refresh();this.gV()},getNodeBySubId:function(a){return this.ld.getNodeBySubId(a)},
getSubIdByNode:function(a){return this.ld.getSubIdByNode(a)},expand:function(a,b){this.ld.ZM(a,b,!0,!0)},collapse:function(a,b){this.ld.t1(a,b,!0)},getExpanded:function(){return this.ld.getExpanded()},getIndexerModel:function(){null==this.Ay&&b.Xf&&(this.Ay=new b.Xf(this.ld));return this.Ay},gV:function(){null!=this.Ay&&this.Ay.W1&&this.Ay.W1()}})});