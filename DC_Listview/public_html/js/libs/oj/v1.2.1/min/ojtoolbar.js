/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(b,f){(function(){b.ya("oj.ojToolbar",f.oj.baseComponent,{widgetEventPrefix:"oj",options:{chroming:"half"},Ud:function(a,d){this._super(a,d);"disabled"in d&&b.r.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.")},_ComponentCreate:function(){this._super();this.element.attr(b.Components.hn,this.widgetName).addClass("oj-toolbar oj-component").attr("role","toolbar");
this.Aa(!0)},lf:function(a,b,c){a=this.element.find(":oj-button[tabindex\x3d0]");this.nf(b,c,{launcher:a,position:{of:"keyboard"===c?a.ojButton("widget"):b}})},_setOption:function(a,d){this._superApply(arguments);"disabled"===a?b.r.warn("Caller attempted to set the 'disabled' option on Toolbar, but Toolbar does not support the 'disabled' option.  See API doc.  Ignoring the call."):"chroming"===a&&(this.LE.ojButtonset("refresh"),this.fP.ojButton("refresh"))},refresh:function(){this._super();this.Aa(!1)},
Aa:function(a){var b=this;this.Lf="rtl"===this.ac();this.Bd=this.element.find(":oj-button").unbind("keydown"+this.eventNamespace).bind("keydown"+this.eventNamespace,function(a){b.nq(a,f(this))}).unbind("click"+this.eventNamespace).bind("click"+this.eventNamespace,function(){f(this).ojButton("option","disabled")||b.Iq(f(this))}).unbind("focus"+this.eventNamespace).bind("focus"+this.eventNamespace,function(){b.Iq(f(this))});this.LE=this.element.find(":oj-buttonset").ojButtonset("refresh");this.fP=this.Bd.not(this.LE.find(":oj-button")).ojButton("refresh");
this.fl=this.Bd.filter(function(){return!f(this).ojButton("option","disabled")});this.aK(a)},aK:function(a){var b=f(this.xq);this.xq=void 0;this.Bd.attr("tabindex","-1");a=a||!b.is(this.fl)?this.fl.first():b;this.Iq(a)},uK:function(a){var b=this.fl;return a.map(function(a,e){if("radio"!=e.type||e.checked||""==e.name)return e;var f=e.name;f?(f=f.replace(/'/g,"\\'"),f=b.filter(":radio[name\x3d'"+f+"']:oj-button")):f=b.filter(e).filter(":oj-button");f=f.filter(":checked");return f.length?f[0]:e})},Iq:function(a){a=
this.uK(a);var b=a[0],c=this.xq;b!==c&&(f(c).attr("tabindex","-1"),a.attr("tabindex","0"),this.xq=b)},nq:function(a,b){switch(a.which){case f.ui.keyCode.LEFT:case f.ui.keyCode.RIGHT:a.preventDefault();var c=this.fl,e=c.length;if(2>e)break;var g=c.index(b);c.eq((g+(a.which==f.ui.keyCode.RIGHT^this.Lf?1:-1)+e)%e).focus();break;case f.ui.keyCode.UP:case f.ui.keyCode.DOWN:"radio"==b.attr("type")&&a.preventDefault()}},_destroy:function(){this.element.removeClass("oj-toolbar oj-component").removeAttr(b.Components.hn).removeAttr("role");
this.Bd.attr("tabindex","0");this.LE.ojButtonset("refresh");this.fP.ojButton("refresh")}})})();b.Components.Em({ojToolbar:{chroming:b.Components.ih(function(){return b.we.Ok("toolbar").chroming})}})});