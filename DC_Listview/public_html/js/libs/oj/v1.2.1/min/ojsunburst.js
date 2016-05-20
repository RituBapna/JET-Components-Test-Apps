/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtSunburst"],function(b,f,a,d,c){b.ya("oj.ojSunburst",f.oj.dvtBaseComponent,{widgetEventPrefix:"oj",options:{optionChange:null,rotateInput:null},jf:function(a,b,d){return c.DvtSunburst.newInstance(a,b,d)},ai:function(a){var b=a.subId;"oj-sunburst-node"==b?b="node"+this.rp(a.indexPath):"oj-sunburst-tooltip"==b&&(b="tooltip");return b},$f:function(a){var b={};0==a.indexOf("node")?(b.subId="oj-sunburst-node",
b.indexPath=this.kl(a)):"tooltip"==a&&(b.subId="oj-sunburst-tooltip");return b},ye:function(){var a=this._super();a.push("oj-sunburst");return a},bi:function(){var a=this._super();a["oj-sunburst-attribute-type-text"]={path:"styleDefaults/_attributeTypeTextStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-sunburst-attribute-value-text"]={path:"styleDefaults/_attributeValueTextStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-sunburst-node"]={path:"nodeDefaults/labelStyle",property:"CSS_TEXT_PROPERTIES"};a["oj-sunburst-node oj-hover"]=
{path:"nodeDefaults/hoverColor",property:"border-top-color"};a["oj-sunburst-node oj-selected"]=[{path:"nodeDefaults/selectedOuterColor",property:"border-top-color"},{path:"nodeDefaults/selectedInnerColor",property:"border-bottom-color"}];return a},di:function(){return["optionChange","rotateInput"]},ei:function(){var a=this.options.translations,b=this._super();b["DvtSunburstBundle.COLOR"]=a.labelColor;b["DvtSunburstBundle.SIZE"]=a.labelSize;b["DvtUtilBundle.SUNBURST"]=a.componentName;return b},hi:function(a){var b=
a&&a.getType?a.getType():null;b===c.DvtSelectionEvent.TYPE?this.gc("selection",a.getSelection()):b===c.DvtSunburstRotationEvent.TYPE?this.gc("startAngle",a.getStartAngle()):b===c.DvtSunburstRotationEvent.TYPE_INPUT?this._trigger("rotateInput",null,{value:a.getStartAngle()}):this._super(a)},ls:function(){null==this.options._resources&&(this.options._resources={});this.options._resources.rotateCursor=b.ba.hb("resources/internal-deps/dvt/sunburst/rotate.cur")},getNode:function(a){a=this.na.getAutomation().getNode(a);
this.Mg(a);return a},getContextByNode:function(a){return(a=this.getSubIdByNode(a))&&"oj-sunburst-tooltip"!==a.subId?a:null},ci:function(){return{root:["nodes"]}}})});