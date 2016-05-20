/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtGauge"],function(b,f,a,d,c){b.Ja("oj.dvtBaseGauge",f.oj.dvtBaseComponent,{yE:function(){this._super();this.options._thresholdColors=[this.options._threshold1,this.options._threshold2,this.options._threshold3];this.options._threshold1=null;this.options._threshold2=null;this.options._threshold3=null},Eg:function(){this._super();this.option("rawValue",this.options.value,{_context:{zd:!0,lb:!0}})},Pj:function(){var a=
this._super();a["oj-gauge-metric-label"]={path:"metricLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-tick-label"]={path:"tickLabel/style",property:"CSS_TEXT_PROPERTIES"};a["oj-gauge-threshold1"]={path:"_threshold1",property:"color"};a["oj-gauge-threshold2"]={path:"_threshold2",property:"color"};a["oj-gauge-threshold3"]={path:"_threshold3",property:"color"};return a},Rj:function(){return["input","optionChange"]},Sj:function(){var a=this.options.translations,b=this._super();b["DvtGaugeBundle.EMPTY_TEXT"]=
a.labelNoData;b["DvtUtilBundle.GAUGE"]=a.componentName;return b},jm:function(a){if("valueChange"===a.type){var b=a.newValue;a.complete?this.we("value",b):(this._trigger("input",null,{value:b}),this.we("rawValue",b))}else this._super(a)},_setOption:function(a,d,c){"rawValue"===a?b.r.error("'rawValue' is a read-only option and cannot be set"):("value"===a&&this.option("rawValue",d,{_context:{zd:!0,lb:!0}}),this._super(a,d,c))},Oj:function(a){var b=a.subId;if("oj-dialgauge-tooltip"==b||"oj-ledgauge-tooltip"==
b||"oj-ratinggauge-tooltip"==b||"oj-statusmetergauge-tooltip"==b)b="tooltip";"oj-ratinggauge-item"==b&&null!=a.index&&(b="item["+a.index+"]");return b}},!0);b.Ja("oj.ojLedGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{},Fg:function(a,b,d){return c.LedGauge.newInstance(a,b,d)},Dh:function(a){var b={};"tooltip"==a&&(b.subId="oj-ledgauge-tooltip");return b},Jf:function(){var a=this._super();a.push("oj-ledgauge");return a},Fh:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),
this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},getMetricLabel:function(){return this.ra.getAutomation().getMetricLabel()}});b.Ja("oj.ojRatingGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},Fg:function(a,b,d){return c.RatingGauge.newInstance(a,b,d)},Dh:function(a){var b={};"tooltip"==a?b.subId="oj-ratinggauge-tooltip":
0==a.indexOf("item")&&(b.subId="oj-ratinggauge-item",b.index=this.oi(a));return b},Jf:function(){var a=this._super();a.push("oj-ratinggauge");return a},Fh:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},we:function(a,b){this._superApply(arguments);"value"==a&&this.we("changed",
!0)}});b.Ja("oj.ojDialGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},Fg:function(a,b,d){return c.DialGauge.newInstance(a,b,d)},Dh:function(a){var b={};"tooltip"==a&&(b.subId="oj-dialgauge-tooltip");return b},Jf:function(){var a=this._super();a.push("oj-dialgauge");return a},Fh:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):
this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this.gva();this._super()},gva:function(){var a=this.options.background;null==a&&(a="circleAlta",this.options.background="circleAlta");var d=this.options.indicator;null==d&&(d="needleAlta",this.options.indicator="needleAlta");if("string"===typeof a){var c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"),width:200,height:200},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"),
width:400,height:400}];"rectangleAlta"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"),width:200,height:154},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"),width:400,height:309}]:"domeAlta"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"),width:200,height:154},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"),width:400,height:309}]:"circleAntique"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"),
width:200,height:200},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"),width:400,height:400}]:"rectangleAntique"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"),width:200,height:168},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"),width:400,height:335}]:"domeAntique"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"),width:200,height:176},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"),
width:400,height:352}]:"circleLight"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/light-circle-200x200.png"),width:200,height:200},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/light-circle-400x400.png"),width:400,height:400}]:"rectangleLight"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"),width:200,height:154},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"),width:400,height:307}]:"domeLight"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/light-dome-200x200.png"),
width:200,height:138},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/light-dome-400x400.png"),width:400,height:276}]:"circleDark"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"),width:200,height:200},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"),width:400,height:400}]:"rectangleDark"===a?c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"),width:200,height:154},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"),
width:400,height:307}]:"domeDark"===a&&(c=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"),width:200,height:138},{src:b.ha.Gb("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"),width:400,height:276}]);this.options._backgroundImages=c}"string"===typeof d&&(a=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"),width:374,height:575}],"needleAntique"===d?a=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"),width:81,
height:734}]:"needleDark"===d?a=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"),width:454,height:652}]:"needleLight"===d&&(a=[{src:b.ha.Gb("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"),width:454,height:652}]),this.options._indicatorImages=a)},getMetricLabel:function(){return this.ra.getAutomation().getMetricLabel()}});b.Ja("oj.ojStatusMeterGauge",f.oj.dvtBaseGauge,{widgetEventPrefix:"oj",options:{input:null,optionChange:null,rawValue:void 0},Fg:function(a,
b,d){return c.StatusMeterGauge.newInstance(a,b,d)},Dh:function(a){var b={};"tooltip"==a&&(b.subId="oj-statusmetergauge-tooltip");return b},Jf:function(){var a=this._super();a.push("oj-statusmetergauge");return a},Fh:function(){this.element.attr("title")?(this.options.shortDesc=this.element.attr("title"),this.element.data(this.element,"title",this.element.attr("title")),this.element.removeAttr("title")):this.element.data("title")&&(this.options.shortDesc=this.element.data("title"));this._super()},
getMetricLabel:function(){return this.ra.getAutomation().getMetricLabel()}})});