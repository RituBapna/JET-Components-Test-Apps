/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$481$$, $id$$247$$, $styleMap$$55$$) {
  this.Init($context$$481$$, $id$$247$$, $styleMap$$55$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$482$$, $id$$248$$, $styleMap$$56$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$482$$, D.$JSCompiler_alias_NULL$$, $id$$248$$);
  this.$_styleMap$ = $styleMap$$56$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_itemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$482$$.$getTooltipManager$();
  this.$_isTouchDevice$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$248$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$482$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$482$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$482$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_7681_selectedIndex$$5$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_7681_selectedIndex$$5$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_7681_selectedIndex$$5$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_7681_selectedIndex$$5$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_7681_selectedIndex$$5$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$249$$) {
  var $JSCompiler_temp_const$$114_button$$67$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $context$$inline_7685_s$$inline_7691$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $s$$inline_7686$$ = new D.$DvtRect$$($context$$inline_7685_s$$inline_7691$$, 0, 0, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$w$, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$h$, $id$$249$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($s$$inline_7686$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($s$$inline_7686$$);
  $s$$inline_7686$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7685_s$$inline_7691$$, $s$$inline_7686$$.getWidth(), $s$$inline_7686$$.getHeight()));
  var $context$$inline_7690_context$$inline_7695$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $context$$inline_7685_s$$inline_7691$$ = new D.$DvtRect$$($context$$inline_7690_context$$inline_7695$$, 0, 0, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$w$, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$h$, $id$$249$$ + "_up");
  $context$$inline_7685_s$$inline_7691$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_7685_s$$inline_7691$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_7685_s$$inline_7691$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_7685_s$$inline_7691$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7690_context$$inline_7695$$, $context$$inline_7685_s$$inline_7691$$.getWidth(), $context$$inline_7685_s$$inline_7691$$.getHeight()));
  var $context$$inline_7690_context$$inline_7695$$ = $JSCompiler_StaticMethods_createButton$self$$.$getCtx$(), $s$$inline_7696$$ = new D.$DvtRect$$($context$$inline_7690_context$$inline_7695$$, 0, 0, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$w$, $JSCompiler_StaticMethods_createButton$self$$.$_itemDim$.$h$, $id$$249$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($s$$inline_7696$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $s$$inline_7696$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $s$$inline_7696$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $s$$inline_7696$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_7690_context$$inline_7695$$, $s$$inline_7696$$.getWidth(), $s$$inline_7696$$.getHeight()));
  $JSCompiler_temp_const$$114_button$$67$$ = new D.$DvtButton$$($JSCompiler_temp_const$$114_button$$67$$, $s$$inline_7686$$, $context$$inline_7685_s$$inline_7691$$, $s$$inline_7696$$, D.$JSCompiler_alias_NULL$$, $id$$249$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$114_button$$67$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$114_button$$67$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$114_button$$67$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$114_button$$67$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$314$$, $buttonStates_itdim_tooltip$$40$$, $enaState$$1$$, $ovrState$$4$$, $dwnState$$4$$) {
  $obj$$314$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$314$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$40$$);
  $buttonStates_itdim_tooltip$$40$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$getCtx$(), $enaState$$1$$ ? $enaState$$1$$ : $obj$$314$$);
  var $maxItemDim$$ = this.$_maxItemDim$;
  $buttonStates_itdim_tooltip$$40$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$40$$.$w$, this.$_itemDim$.$w$ = $buttonStates_itdim_tooltip$$40$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$40$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$40$$.$h$, this.$_itemDim$.$h$ = $buttonStates_itdim_tooltip$$40$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$40$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$4$$ && $dwnState$$4$$) && ($buttonStates_itdim_tooltip$$40$$ = [], $buttonStates_itdim_tooltip$$40$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$40$$[1] = $ovrState$$4$$, $buttonStates_itdim_tooltip$$40$$[2] = $dwnState$$4$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$40$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$314$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$750$$) {
  return this.$_items$[$i$$750$$]
};
D.$JSCompiler_prototypeAlias$$.$getItemCount$ = function $$JSCompiler_prototypeAlias$$$$getItemCount$$() {
  return this.$_items$.length
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$1$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$1$$ || $selIndex$$1$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$1$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$487_event$$652_stage$$18$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$487_event$$652_stage$$18$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$487_event$$652_stage$$18$$ = this.$getCtx$();
  for(var $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_7716_leftPadding$$inline_7702$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$, "paddingLeft", 0), $bottomPadding$$inline_7703$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$, "paddingBottom", 0), $rightPadding$$inline_7704$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$, 
  "paddingRight", 0), $interItemPadding$$inline_7705$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$, "paddingInner", 0), $currY$$inline_7706$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$, "paddingTop", 0), $context$$inline_7707$$ = this.$getCtx$(), $dim$$inline_7708_proxy$$inline_7713$$, $itemSprite$$inline_7709$$, $item$$inline_7710$$, $bgColor$$inline_7715_content$$inline_7711_dim$$65$$ = new D.$DvtContainer$$($context$$inline_7707$$, 
  "__dd"), $i$$inline_7712$$ = 0;$i$$inline_7712$$ < this.$_items$.length;$i$$inline_7712$$++) {
    $item$$inline_7710$$ = this.$_items$[$i$$inline_7712$$], $dim$$inline_7708_proxy$$inline_7713$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_7707$$, $item$$inline_7710$$), $itemSprite$$inline_7709$$ = new D.$DvtContainer$$($context$$inline_7707$$, "__it" + $i$$inline_7712$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_7709$$, $bgAlpha$$inline_7716_leftPadding$$inline_7702$$, $currY$$inline_7706$$), $itemSprite$$inline_7709$$.$addChild$($item$$inline_7710$$), 
    $item$$inline_7710$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $item$$inline_7710$$.setCursor("pointer"), $currY$$inline_7706$$ += $dim$$inline_7708_proxy$$inline_7713$$.$h$ + $interItemPadding$$inline_7705$$, this.$_eventManager$ && ($dim$$inline_7708_proxy$$inline_7713$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_7712$$]), 
    this.$_eventManager$.$associate$($item$$inline_7710$$, $dim$$inline_7708_proxy$$inline_7713$$)), $bgColor$$inline_7715_content$$inline_7711_dim$$65$$.$addChild$($itemSprite$$inline_7709$$)
  }
  $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_7707$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_7716_leftPadding$$inline_7702$$ + $rightPadding$$inline_7704$$, $currY$$inline_7706$$ + $bottomPadding$$inline_7703$$ - $interItemPadding$$inline_7705$$, $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$);
  $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$.$addChild$($bgColor$$inline_7715_content$$inline_7711_dim$$65$$);
  $bgColor$$inline_7715_content$$inline_7711_dim$$65$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_7716_leftPadding$$inline_7702$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_7715_content$$inline_7711_dim$$65$$ && $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$.$setSolidFill$($bgColor$$inline_7715_content$$inline_7711_dim$$65$$, $bgAlpha$$inline_7716_leftPadding$$inline_7702$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$;
  $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$487_event$$652_stage$$18$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_7715_content$$inline_7711_dim$$65$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$487_event$$652_stage$$18$$) ? -$comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$.$w$ + 1 * $bgColor$$inline_7715_content$$inline_7711_dim$$65$$.$w$ / 4 : 3 * $bgColor$$inline_7715_content$$inline_7711_dim$$65$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_7701_dd$$inline_7714_dddim_transX$$5$$, 3 * $bgColor$$inline_7715_content$$inline_7711_dim$$65$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$487_event$$652_stage$$18$$ = $context$$487_event$$652_stage$$18$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$487_event$$652_stage$$18$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$487_event$$652_stage$$18$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$HandleHideDropdownTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleHideDropdownTimer$$() {
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleStageMouseFocusChange$ = function $$JSCompiler_prototypeAlias$$$$HandleStageMouseFocusChange$$() {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outOfFocusCheckTimer$.reset();
  this.$_outOfFocusCheckTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleOutOfFocusCheckTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleOutOfFocusCheckTimer$$() {
  this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$HandleButtonDown$ = function $$JSCompiler_prototypeAlias$$$$HandleButtonDown$$() {
  (0,D.$DvtEventManager$consumeEvent$$)()
};
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$657$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$657$$);
  var $displayObject$$inline_7718_eventTarget$$;
  $displayObject$$inline_7718_eventTarget$$ = $event$$657$$.target;
  for(var $content$$7_n$$inline_7719$$, $id$$inline_7720$$;$displayObject$$inline_7718_eventTarget$$;) {
    if(($id$$inline_7720$$ = $displayObject$$inline_7718_eventTarget$$.getId()) && $displayObject$$inline_7718_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_7720$$.substr(0, 4)) {
      $content$$7_n$$inline_7719$$ = $displayObject$$inline_7718_eventTarget$$;
      break
    }
    $displayObject$$inline_7718_eventTarget$$ = $displayObject$$inline_7718_eventTarget$$.getParent()
  }
  $displayObject$$inline_7718_eventTarget$$ = $content$$7_n$$inline_7719$$;
  var $index$$228$$;
  this.$_dropdown$ && $displayObject$$inline_7718_eventTarget$$ && ($content$$7_n$$inline_7719$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$228$$ = $content$$7_n$$inline_7719$$.$getChildIndex$($displayObject$$inline_7718_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$657$$;
  this.$setSelectedIndex$($index$$228$$)
};
D.$JSCompiler_StaticMethods_HideDropdown$$ = function $$JSCompiler_StaticMethods_HideDropdown$$$($JSCompiler_StaticMethods_HideDropdown$self$$) {
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_HideDropdown$self$$.$_button$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_HideDropdown$self$$.$FireListener$(new D.$DvtComboBoxEvent$$("cbHideDropdown")), $JSCompiler_StaticMethods_HideDropdown$self$$.$_bRemoveDropdown$ = D.$JSCompiler_alias_TRUE$$);
  var $stage$$19$$ = $JSCompiler_StaticMethods_HideDropdown$self$$.$getCtx$().$_stage$;
  $stage$$19$$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_isTouchDevice$ ? $stage$$19$$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$) : $stage$$19$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$));
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$DvtComboBox$$.prototype.$getDimensions$ = function $$DvtComboBox$$$$$getDimensions$$() {
  return this.$_button$ != D.$JSCompiler_alias_NULL$$ ? this.$_button$.$getDimensions$() : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$DvtComboBox$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$JSCompiler_StaticMethods_UpdateContentArea$$ = function $$JSCompiler_StaticMethods_UpdateContentArea$$$($JSCompiler_StaticMethods_UpdateContentArea$self$$) {
  var $bUseItem$$ = D.$JSCompiler_alias_TRUE$$, $buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_selectedIndex$;
  if($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$ && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$.length > $buttonStates$$1_selIndex$$2$$ && ($buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$[$buttonStates$$1_selIndex$$2$$]) && 2 < $buttonStates$$1_selIndex$$2$$.length) {
    (0,D.$JSCompiler_StaticMethods_setUpState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[0]), (0,D.$JSCompiler_StaticMethods_setOverState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[1]), (0,D.$JSCompiler_StaticMethods_setDownState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[2]), $bUseItem$$ = D.$JSCompiler_alias_FALSE$$
  }
  $bUseItem$$ && (0 < $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$getNumChildren$() && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$removeChildAt$(0), $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$addChild$($JSCompiler_StaticMethods_UpdateContentArea$self$$.$getSelectedItem$()))
};
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$489_shape$$70$$, $ww$$100$$, $hh$$83$$) {
  var $aPoints$$1$$ = [];
  $aPoints$$1$$.push($ww$$100$$ - 12, $hh$$83$$ / 2 - 2);
  $aPoints$$1$$.push($ww$$100$$ - 4, $hh$$83$$ / 2 - 2);
  $aPoints$$1$$.push($ww$$100$$ - 8, $hh$$83$$ / 2 + 2);
  $aPoints$$1$$.push($ww$$100$$ - 12, $hh$$83$$ / 2 - 2);
  $context$$489_shape$$70$$ = new D.$DvtPolygon$$($context$$489_shape$$70$$, $aPoints$$1$$, D.$JSCompiler_alias_NULL$$);
  $context$$489_shape$$70$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$489_shape$$70$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$489_shape$$70$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$489_shape$$70$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$490$$, $x$$251$$, $y$$226$$, $w$$59$$, $h$$54$$, $id$$254$$) {
  this.Init($context$$490$$, $x$$251$$, $y$$226$$, $w$$59$$, $h$$54$$, $id$$254$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$491$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$491$$)
};
D.$DvtComboBoxEvent$$ = function $$DvtComboBoxEvent$$$($subtype$$10$$, $index$$229$$, $evt$$61$$) {
  this.Init($subtype$$10$$, $index$$229$$, $evt$$61$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBoxEvent$$, D.$DvtBaseEvent$$, "DvtComboBoxEvent");
D.$DvtComboBoxEvent$$.prototype.Init = function $$DvtComboBoxEvent$$$$Init$($subtype$$11$$, $index$$230$$, $evt$$62$$) {
  D.$DvtComboBoxEvent$$.$superclass$.Init.call(this, "comboBoxEvent");
  $index$$230$$ === D.$JSCompiler_alias_VOID$$ && ($index$$230$$ = -1);
  this.$subtype$ = $subtype$$11$$;
  this.$_index$ = $index$$230$$;
  this.$_evt$ = $evt$$62$$
};
D.$DvtComboBoxEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtBaseControl$$ = function $$DvtBaseControl$$$($context$$479$$) {
  this.Init($context$$479$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseControl$$, D.$DvtContainer$$, "DvtBaseControl");
D.$DvtBaseControl$$.prototype.Init = function $$DvtBaseControl$$$$Init$($context$$480$$) {
  D.$DvtBaseControl$$.$superclass$.Init.call(this, $context$$480$$);
  this.$_tooltipManager$ = $context$$480$$.$getTooltipManager$()
};
D.$DvtBaseControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$515$$, $button$$68$$, $panZoomCanvas$$8$$, $eventManager$$19$$) {
  this.Init($context$$515$$, $button$$68$$, $panZoomCanvas$$8$$, $eventManager$$19$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBaseControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$516_proxy$$10$$, $button$$69$$, $panZoomCanvas$$9$$, $eventManager$$20$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $context$$516_proxy$$10$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$9$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($context$$516_proxy$$10$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$516_proxy$$10$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $button$$69$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$20$$;
  $context$$516_proxy$$10$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomInMouseDown$, this.$HandleZoomInMouseUp$, this.$HandleZoomInMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMIN"));
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $context$$516_proxy$$10$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom$$9_newZoom$$5$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$9_newZoom$$5$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$9_newZoom$$5$$), $animator$$122$$ = new D.$DvtAnimator$$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$9_newZoom$$5$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$122$$);
    $animator$$122$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseDown$$() {
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomInTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseUp$$() {
  this.$_bZoomInMouseDown$ && (this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomInTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomInTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInTimer$$() {
  var $currZoom$$10_newZoom$$6$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$10_newZoom$$6$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$6$$);
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$19$$) {
  this.$_zoomInButton$.$setEnabled$($enabled$$19$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomInButton$)
};
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$517$$, $button$$70$$, $panZoomCanvas$$10$$, $eventManager$$21$$) {
  this.Init($context$$517$$, $button$$70$$, $panZoomCanvas$$10$$, $eventManager$$21$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBaseControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$518_proxy$$11$$, $button$$71$$, $panZoomCanvas$$11$$, $eventManager$$22$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $context$$518_proxy$$11$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$11$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($context$$518_proxy$$11$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$518_proxy$$11$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $button$$71$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$22$$;
  $context$$518_proxy$$11$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomOutMouseDown$, this.$HandleZoomOutMouseUp$, this.$HandleZoomOutMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMOUT"));
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $context$$518_proxy$$11$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$11_newZoom$$7$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$11_newZoom$$7$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$11_newZoom$$7$$), $animator$$123$$ = new D.$DvtAnimator$$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$11_newZoom$$7$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$123$$);
    $animator$$123$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseDown$$() {
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomOutTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseUp$$() {
  this.$_bZoomOutMouseDown$ && (this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomOutTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutTimer$$() {
  var $currZoom$$12_newZoom$$8$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$12_newZoom$$8$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$12_newZoom$$8$$);
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$12_newZoom$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$20$$) {
  this.$_zoomOutButton$.$setEnabled$($enabled$$20$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomOutButton$)
};
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$520$$, $button$$72$$, $panZoomCanvas$$12$$, $eventManager$$23$$) {
  this.Init($context$$520$$, $button$$72$$, $panZoomCanvas$$12$$, $eventManager$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBaseControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($context$$521_proxy$$12$$, $button$$73$$, $panZoomCanvas$$13$$, $eventManager$$24$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $context$$521_proxy$$12$$);
  this.$_zoomToFitButton$ = $button$$73$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$13$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_eventManager$ = $eventManager$$24$$;
  $context$$521_proxy$$12$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMTOFIT"));
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $context$$521_proxy$$12$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$124$$ = new D.$DvtAnimator$$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$124$$);
  $animator$$124$$.play()
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$513$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$6$$, $control$$, $styleMap$$62$$) {
  this.Init($context$$513$$, $panButton$$, $recenterButton$$, $panZoomCanvas$$6$$, $control$$, $styleMap$$62$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBaseControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$514$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$7$$, $control$$1$$, $styleMap$$63$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$514$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$514$$, 50, this.$HandlePanTimer$, this);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $panZoomCanvas$$7$$;
  this.$_panCenter$ = new D.$DvtPoint$$(20, 20);
  this.$_controls$ = $control$$1$$ ? $control$$1$$ : 16777215;
  $panButton$$1$$.$addChild$($recenterButton$$1$$);
  $recenterButton$$1$$ && (this.$_panCenterSprite$ = $recenterButton$$1$$, this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, 
  this.$HandlePanCenterDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanCenterUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanCenterRollOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanCenterRollOut$, D.$JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, 
  this.$HandlePanCenterMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panButton$ = $panButton$$1$$;
  this.$_panButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandlePanMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanMouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanRollOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanRollOut$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandlePanMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$514$$, $styleMap$$63$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$677$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$677$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$678_localPoint$$4_stagePoint$$8$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$678_localPoint$$4_stagePoint$$8$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$678_localPoint$$4_stagePoint$$8$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$678_localPoint$$4_stagePoint$$8$$);
  $event$$678_localPoint$$4_stagePoint$$8$$ = this.$_panButton$.$stageToLocal$($event$$678_localPoint$$4_stagePoint$$8$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$678_localPoint$$4_stagePoint$$8$$.x, $event$$678_localPoint$$4_stagePoint$$8$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$678_localPoint$$4_stagePoint$$8$$.x, $event$$678_localPoint$$4_stagePoint$$8$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$679$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$679$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$679$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$680$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_7838$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_PAN");
  this.$getTooltipManager$().$showTooltip$($event$$680$$.pageX, $event$$680$$.pageY, $tooltip$$inline_7838$$, $event$$680$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$681$$) {
  this.$HandlePanMouseUp$($event$$681$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$682_localPoint$$5_stagePoint$$9$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$682_localPoint$$5_stagePoint$$9$$);
  $event$$682_localPoint$$5_stagePoint$$9$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$682_localPoint$$5_stagePoint$$9$$);
  $event$$682_localPoint$$5_stagePoint$$9$$ = this.$_panButton$.$stageToLocal$($event$$682_localPoint$$5_stagePoint$$9$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$682_localPoint$$5_stagePoint$$9$$.x, $event$$682_localPoint$$5_stagePoint$$9$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$682_localPoint$$5_stagePoint$$9$$.x, $event$$682_localPoint$$5_stagePoint$$9$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$682_localPoint$$5_stagePoint$$9$$.x, $event$$682_localPoint$$5_stagePoint$$9$$.y, 
  this.$_panButton$.$overState$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanTimer$ = function $$JSCompiler_prototypeAlias$$$$HandlePanTimer$$() {
  if(this.$_bPanMouseDown$) {
    var $angleRads$$12_deltaY$$27$$ = window.Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $deltaX$$24$$ = window.Math.cos($angleRads$$12_deltaY$$27$$), $angleRads$$12_deltaY$$27$$ = window.Math.sin($angleRads$$12_deltaY$$27$$), $factor$$6$$ = 15;
    this.$_panTimerCount$++;
    40 < this.$_panTimerCount$ && ($factor$$6$$ *= 3);
    this.$_panZoomCanvas$.$panBy$($factor$$6$$ * $deltaX$$24$$, $factor$$6$$ * $angleRads$$12_deltaY$$27$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$683$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$683$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$684$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$684$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$685$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$685$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$686$$) {
  var $tooltip$$inline_7844$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL_ZOOMANDCENTER");
  this.$getTooltipManager$().$showTooltip$($event$$686$$.pageX, $event$$686$$.pageY, $tooltip$$inline_7844$$, $event$$686$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$686$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$687$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$687$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$688$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$688$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$4$$) {
  $displayObj$$4$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$($subtype$$12$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$12$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtControlPanelEvent");
D.$DvtControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtControlPanel$$ = function $$DvtControlPanel$$$($context$$492$$, $view$$58$$, $state$$75$$) {
  this.Init($context$$492$$, $view$$58$$, $state$$75$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanel$$, D.$DvtContainer$$, "DvtControlPanel");
D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtControlPanel$$.prototype.Init = function $$DvtControlPanel$$$$Init$($context$$493$$, $view$$59$$, $state$$76$$) {
  D.$DvtControlPanel$$.$superclass$.Init.call(this, $context$$493$$);
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $view$$59$$.$_panZoomCanvas$;
  this.$_controls$ = $view$$59$$.$_displayedControls$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$59$$);
  this.$_tooltipManager$ = $context$$493$$.$getTooltipManager$();
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$59$$) {
    this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtControlPanelEventManager$$($context$$493$$, D.$JSCompiler_alias_NULL$$, $view$$59$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  this.$_state$ = $state$$76$$;
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtControlPanel$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$ = function $$JSCompiler_StaticMethods_mouseDragPanningStarted$$$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.backgroundDragAlpha);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.borderDragAlpha)
};
D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$ = function $$JSCompiler_StaticMethods_mouseDragPanningEnded$$$($JSCompiler_StaticMethods_mouseDragPanningEnded$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseOver$ ? $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOver$(D.$JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$DvtControlPanel$$.prototype.$isSingleHorzRow$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtControlPanel$$.prototype.$getViewPanelHeight$ = function $$DvtControlPanel$$$$$getViewPanelHeight$$() {
  var $h$$56$$ = 0, $h$$56$$ = this.$isSingleHorzRow$() ? D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$56$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $context$$494_proxy$$8$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getCtx$(), $contentBar$$ = new D.$DvtContainer$$($context$$494_proxy$$8$$), $hh$$84$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$494_proxy$$8$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$($context$$494_proxy$$8$$, $hh$$84$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($context$$494_proxy$$8$$, $hh$$84$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$494_proxy$$8$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$4$$ ? D.$DvtButtonLAFUtils$$.$DIR_RIGHT$ : D.$DvtButtonLAFUtils$$.$DIR_LEFT$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $context$$494_proxy$$8$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $context$$494_proxy$$8$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$JSCompiler_StaticMethods_RenderExpanded$$ = function $$JSCompiler_StaticMethods_RenderExpanded$$$($JSCompiler_StaticMethods_RenderExpanded$self$$) {
  var $context$$501$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $s$$154$$ = new D.$DvtContainer$$($context$$501$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$ = new D.$DvtContainer$$($context$$501$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$ = new D.$DvtContainer$$($context$$501$$);
  $s$$154$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$);
  $s$$154$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$);
  var $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$501$$), $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = 0, $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$ = new D.$DvtContainer$$($context$$501$$), $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$;
  $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ = 0;
  var $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$();
  0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), 
  $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$), $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$)), $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$++);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$()) ? D.$DvtButtonLAFUtils$$.$DIR_RIGHT$ : 
  D.$DvtButtonLAFUtils$$.$DIR_LEFT$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$HandleCollapseClick$, $JSCompiler_StaticMethods_RenderExpanded$self$$);
  $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderExpanded$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtSubcomponentBundle", "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$);
  $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$());
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$PopulateHorzContentBar$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$);
  0 < $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$++) : $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ = $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $backgroundHeight$$inline_7780_buttonWidth$$inline_7748$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  "buttonWidth", 0), $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
  $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingInner", 0);
  $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ ? ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$(0), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$, 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, ($buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ - $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$.$h$) / 2), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += 
  window.Math.max($dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$.$w$, $backgroundHeight$$inline_7780_buttonWidth$$inline_7748$$)), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$), $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$.$w$), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$) : 
  ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$, 
  $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$, $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$), $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$ + 
  $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$.$w$, $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += 1), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), 0 == $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ && ($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, 
  $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, ($buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ - $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$.$h$) / 2), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$.$w$, 
  $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ = window.Math.max($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ + $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$, $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$)), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ += $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$);
  $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$;
  $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16 || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ ? 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingTop", 0) : 0;
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$() && 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ += D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$() - $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$());
  if(0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) || 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097)) {
    $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ = new D.$DvtContainer$$($context$$501$$), $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$.$setTranslateY$($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateY$() + $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = 
    $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) && ($buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), 
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$, $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$), $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$ = 
    D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ += 
    $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$.$h$, $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ += $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$), $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = 
    $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, 
    "paddingInner", 0), $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$, $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$), 
    $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), 
    $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ += $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$.$h$ + $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ = 
    D.$DvtButtonLAFUtils$$.$createZoomOutButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$, $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$), $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), 
    $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ += $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$.$h$, 
    $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$.$getZoom$(), $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, 
    $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$), $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$), 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$setEnabled$($bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ != $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ && 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ != $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$)), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$)
  }
  var $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$ = $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$ = $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$, 
  $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $buttonWidth$$inline_7776_viewFrame$$inline_7783$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = ($dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? 
  $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ : $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ - $buttonWidth$$inline_7776_viewFrame$$inline_7783$$, $backgroundHeight$$inline_7780_buttonWidth$$inline_7748$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_7781$$ = 0, $backgroundShapeOffsetX$$inline_7782$$ = 0;
  $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ ? $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ && 0 == $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$ && ($backgroundShapeOffsetX$$inline_7782$$ = $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ ? -$buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ : 
  $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$) : ($backgroundFrameOffsetX$$inline_7781$$ = $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ ? $buttonWidth$$inline_7776_viewFrame$$inline_7783$$ : 0, $backgroundShapeOffsetX$$inline_7782$$ = $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ ? $buttonWidth$$inline_7776_viewFrame$$inline_7783$$ : 
  0);
  if(0 < $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$ || $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$) {
    var $r$$inline_7785_viewShape$$inline_7784$$ = $buttonWidth$$inline_7776_viewFrame$$inline_7783$$ = D.$JSCompiler_alias_NULL$$, $r$$inline_7785_viewShape$$inline_7784$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-radius", 0));
    $dim$$inline_7746_panelDrawerStyle$$inline_7778_yy$$inline_7753$$ ? ($bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ = 0 < $buttonPaddingInner$$inline_7752_nHorzContentBarChildren$$inline_7772_paddingSide$$inline_7767$$ && $buttonPaddingSide$$inline_7751_dim$$inline_7760_paddingInner$$inline_7766_paddingSide$$inline_7759_prevZoom$$inline_11216_vertContentBar$$inline_7771$$ != D.$JSCompiler_alias_NULL$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$, 
    $buttonWidth$$inline_7776_viewFrame$$inline_7783$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$, $r$$inline_7785_viewShape$$inline_7784$$, $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, 
    $backgroundHeight$$inline_7780_buttonWidth$$inline_7748$$, $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$, $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$), $r$$inline_7785_viewShape$$inline_7784$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$, 
    $r$$inline_7785_viewShape$$inline_7784$$, $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $backgroundHeight$$inline_7780_buttonWidth$$inline_7748$$, $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$, $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$)) : 
    ($buttonWidth$$inline_7776_viewFrame$$inline_7783$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$, $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
    !$bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $r$$inline_7785_viewShape$$inline_7784$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$, $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), !$bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$));
    $buttonWidth$$inline_7776_viewFrame$$inline_7783$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$));
    $buttonWidth$$inline_7776_viewFrame$$inline_7783$$.$setFill$(D.$JSCompiler_alias_NULL$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buttonWidth$$inline_7776_viewFrame$$inline_7783$$, $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateX$() + $backgroundFrameOffsetX$$inline_7781$$, $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateY$());
    $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$addChildAt$($buttonWidth$$inline_7776_viewFrame$$inline_7783$$, 0);
    $r$$inline_7785_viewShape$$inline_7784$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($r$$inline_7785_viewShape$$inline_7784$$, $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_7782$$, $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateY$());
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($r$$inline_7785_viewShape$$inline_7784$$)
  }
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$);
  $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ = $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$;
  $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$();
  $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = (0,D.$DvtAgent$isRightToLeft$$)($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$);
  $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0);
  !$JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && 0 == ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) ? $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ ? ($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$setTranslateX$(0 - $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateX$()), 
  $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$setTranslateY$(0), $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$), 
  $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$setTranslateX$($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateX$() - $buttonWidth$$inline_7793_dim$$inline_7765_nextZoom$$inline_11215_paddingInner$$inline_7758_panelHeight$$inline_7750_panelWidth$$inline_7777$$), $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$.$setTranslateY$(0))) : $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ ? 
  ($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$, 
  $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateX$() + $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$, $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$getTranslateX$(), 0) : $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ && 
  $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ && ($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, 
  $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$), $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$setTranslateX$(0), $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$.$setTranslateX$($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$.$w$ + 
  $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$.x - $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$));
  $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ = $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$;
  $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ = $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$;
  $context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getCtx$();
  $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$ && ($backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$.$getNumChildren$(), $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ = 
  1 < $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ || 0 < $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ && 
  1 == $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 
  ($bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$ = 0 < $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, 
  $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$), $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ += 4, $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ = $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$ ? 
  $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$ : window.Math.max($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$.$h$, $bBiDi$$inline_7792_barWidth$$inline_7796_context$$inline_7775_currY$$inline_7802_currZoom$$inline_11214_panelWidth$$inline_7749_vertContentBar$$inline_7756_vertContentBar$$inline_7763$$), $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ += 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$($context$$inline_7731_context$$inline_7803_currX$$inline_7744_proxy$$inline_7736_vertContentBar$$5$$, 
  $cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$, $backgroundWidth$$inline_7779_context$$inline_7745_context$$inline_7791_cpWidth$$inline_7794_currX$$17_dimHorizontal$$inline_7795_nVertContentBarChildren$$inline_7804_roundedCorner$$inline_7805$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, $bSingleRow$$inline_7732_collapseButtonWidth$$inline_7747_currY$$20_currY$$inline_7757_currY$$inline_7764_openside$$inline_7806$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$, $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$.$getTranslateX$(), $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$.$getTranslateY$()), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($dim$$inline_7807_horzContentBar$$6_zoomShape$$inline_7809$$), 
  $bBiDi$$5_openSide$$inline_7786_vertContentBar$$inline_7790_vertContentBar$$inline_7800$$.$addChildAt$($cpHeight$$inline_7808_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_7730_nHorzContentBarChildren$$inline_7740_zoomFrame$$inline_7810$$, 0));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$501$$, $s$$154$$);
  return $s$$154$$
};
D.$DvtControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtControlPanel$$$$$HandleExpandClick$$($event$$658$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$658$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtControlPanel$$.prototype.$_doExpand$ = function $$DvtControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $event$$inline_7822_s$$155$$ = (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$addChild$($event$$inline_7822_s$$155$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_7813$$ = this.$getChildAt$(0), $odim$$inline_7815$$ = $oldContent$$inline_7813$$.$getDimensions$(), $openCloseButtonWidth$$inline_7816$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  if($odim$$inline_7815$$ && 0 != $odim$$inline_7815$$.$w$) {
    var $ndim$$inline_7817$$ = $event$$inline_7822_s$$155$$.$getDimensions$(), $animator$$inline_7818$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25);
    $oldContent$$inline_7813$$.$setAlpha$(1);
    $event$$inline_7822_s$$155$$.$setAlpha$(0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7818$$, "typeNumber", $oldContent$$inline_7813$$, $oldContent$$inline_7813$$.$getAlpha$, $oldContent$$inline_7813$$.$setAlpha$, 0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7818$$, "typeNumber", $event$$inline_7822_s$$155$$, $event$$inline_7822_s$$155$$.$getAlpha$, $event$$inline_7822_s$$155$$.$setAlpha$, 1);
    $event$$inline_7822_s$$155$$.$setScaleX$($odim$$inline_7815$$.$w$ / $ndim$$inline_7817$$.$w$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7818$$, "typeNumber", $event$$inline_7822_s$$155$$, $event$$inline_7822_s$$155$$.$getScaleX$, $event$$inline_7822_s$$155$$.$setScaleX$, 1);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$())) {
      $event$$inline_7822_s$$155$$.$setTranslateX$($oldContent$$inline_7813$$.$getTranslateX$());
      var $dimWidth$$inline_7819$$ = $ndim$$inline_7817$$.$w$ + $ndim$$inline_7817$$.x;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7818$$, "typeNumber", $event$$inline_7822_s$$155$$, $event$$inline_7822_s$$155$$.$getTranslateX$, $event$$inline_7822_s$$155$$.$setTranslateX$, $oldContent$$inline_7813$$.$getTranslateX$() + $openCloseButtonWidth$$inline_7816$$ - $dimWidth$$inline_7819$$)
    }
    $event$$inline_7822_s$$155$$.$setScaleY$($odim$$inline_7815$$.$h$ / $ndim$$inline_7817$$.$h$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7818$$, "typeNumber", $event$$inline_7822_s$$155$$, $event$$inline_7822_s$$155$$.$getScaleY$, $event$$inline_7822_s$$155$$.$setScaleY$, 1);
    $animator$$inline_7818$$.$setOnEnd$(function() {
      $oldContent$$inline_7813$$.getParent().removeChild($oldContent$$inline_7813$$);
      this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
      this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
    }, this);
    $animator$$inline_7818$$.play()
  }else {
    $oldContent$$inline_7813$$.getParent().removeChild($oldContent$$inline_7813$$), (0,D.$JSCompiler_StaticMethods_PositionExpanded$$)(this, $event$$inline_7822_s$$155$$)
  }
  this.$_state$ = 2;
  $event$$inline_7822_s$$155$$ = new D.$DvtControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_7822_s$$155$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$3$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$getCtx$().$_stage$ && ($bMouseOver$$3$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$3$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtControlPanel$$$$$HandleCollapseClick$$($event$$659$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$659$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtControlPanel$$.prototype.$_doCollapse$ = function $$DvtControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_7832_s$$156$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_7832_s$$156$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_7825$$ = this.$getChildAt$(0), $animator$$inline_7827$$ = new D.$DvtAnimator$$(this.$getCtx$(), 0.25);
  $oldContent$$inline_7825$$.$setAlpha$(1);
  $event$$inline_7832_s$$156$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7827$$, "typeNumber", $oldContent$$inline_7825$$, $oldContent$$inline_7825$$.$getAlpha$, $oldContent$$inline_7825$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7827$$, "typeNumber", $event$$inline_7832_s$$156$$, $event$$inline_7832_s$$156$$.$getAlpha$, $event$$inline_7832_s$$156$$.$setAlpha$, 1);
  var $ndim$$inline_7828$$ = this.$_collapsedDim$, $odim$$inline_7829$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7827$$, "typeNumber", $oldContent$$inline_7825$$, $oldContent$$inline_7825$$.$getScaleX$, $oldContent$$inline_7825$$.$setScaleX$, $ndim$$inline_7828$$.$w$ / $odim$$inline_7829$$.$w$);
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7827$$, "typeNumber", $oldContent$$inline_7825$$, $oldContent$$inline_7825$$.$getTranslateX$, $oldContent$$inline_7825$$.$setTranslateX$, $event$$inline_7832_s$$156$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_7827$$, "typeNumber", $oldContent$$inline_7825$$, $oldContent$$inline_7825$$.$getScaleY$, $oldContent$$inline_7825$$.$setScaleY$, $ndim$$inline_7828$$.$h$ / $odim$$inline_7829$$.$h$);
  $animator$$inline_7827$$.$setOnEnd$(function() {
    $oldContent$$inline_7825$$.getParent().removeChild($oldContent$$inline_7825$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_7827$$.play();
  this.$_state$ = 1;
  $event$$inline_7832_s$$156$$ = new D.$DvtControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_7832_s$$156$$)
};
D.$JSCompiler_StaticMethods_PositionExpanded$$ = function $$JSCompiler_StaticMethods_PositionExpanded$$$($JSCompiler_StaticMethods_PositionExpanded$self$$, $content$$8$$) {
  var $openCloseButtonWidth$$2_transX$$6$$;
  if((0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_PositionExpanded$self$$.$getCtx$())) {
    $openCloseButtonWidth$$2_transX$$6$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_PositionExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0);
    var $ndim$$1$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods_PositionExpanded$self$$.$getCtx$(), $content$$8$$);
    $openCloseButtonWidth$$2_transX$$6$$ -= window.Math.floor($ndim$$1$$.$w$ + $ndim$$1$$.x)
  }else {
    $openCloseButtonWidth$$2_transX$$6$$ = 0
  }
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($content$$8$$, $openCloseButtonWidth$$2_transX$$6$$, 0)
};
D.$DvtControlPanel$$.prototype.$HandleRollOver$ = function $$DvtControlPanel$$$$$HandleRollOver$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)(this)
};
D.$DvtControlPanel$$.prototype.$HandleRollOut$ = function $$DvtControlPanel$$$$$HandleRollOut$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this)
};
D.$JSCompiler_StaticMethods__applyAlphasRollover$$ = function $$JSCompiler_StaticMethods__applyAlphasRollover$$$($JSCompiler_StaticMethods__applyAlphasRollover$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.borderHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha)
};
D.$JSCompiler_StaticMethods__applyAlphasRollout$$ = function $$JSCompiler_StaticMethods__applyAlphasRollout$$$($JSCompiler_StaticMethods__applyAlphasRollout$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_styleMap$.borderAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$)
};
D.$DvtControlPanel$$.prototype.$getDimensions$ = function $$DvtControlPanel$$$$$getDimensions$$() {
  this.$_dim$ || (this.$_dim$ = D.$DvtControlPanel$$.$superclass$.$getDimensions$.call(this));
  return this.$_dim$
};
D.$DvtControlPanel$$.prototype.$renderComponent$ = function $$DvtControlPanel$$$$$renderComponent$$() {
  var $s$$157$$;
  1 == this.$_state$ ? $s$$157$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this) : ($s$$157$$ = (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this), (0,D.$JSCompiler_StaticMethods_PositionExpanded$$)(this, $s$$157$$));
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($s$$157$$)
};
D.$DvtControlPanel$$.prototype.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$17$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$17$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$18$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$18$$)
};
D.$DvtControlPanelDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelDefaults$$, D.$DvtObj$$, "DvtControlPanelDefaults");
D.$DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:D.$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:D.$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
D.$DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:D.$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
D.$DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($userOptions$$1$$) {
  var $defaults$$5$$ = D.$DvtControlPanelDefaults$$.$_getDefaults$($userOptions$$1$$);
  return $userOptions$$1$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$1$$, $defaults$$5$$) : $defaults$$5$$
};
D.$DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($userOptions$$2$$) {
  var $defaults$$6$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$6$$ = $userOptions$$2$$ && "skyros" === $userOptions$$2$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : $userOptions$$2$$ && "alta" === $userOptions$$2$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_ALTA$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.$clone$(D.$DvtControlPanelDefaults$$.$DEFAULT$)
};
D.$DvtControlPanelEventManager$$ = function $$DvtControlPanelEventManager$$$($context$$502$$, $callback$$130$$, $callbackObj$$84$$) {
  this.Init($context$$502$$, $callback$$130$$, $callbackObj$$84$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventManager$$, D.$DvtEventManager$$, "DvtControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$669$$) {
  var $obj$$315$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$669$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$669$$);
  $obj$$315$$ && ($obj$$315$$.$HandleMouseDown$ && $obj$$315$$.$HandleMouseDown$($event$$669$$), $event$$669$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$670$$) {
  var $obj$$316$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$670$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$670$$);
  $obj$$316$$ && ($obj$$316$$.$HandleMouseUp$ && $obj$$316$$.$HandleMouseUp$($event$$670$$), $event$$670$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$671$$) {
  var $obj$$317$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$671$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$671$$);
  $obj$$317$$ && ($obj$$317$$.$HandleMouseOut$ && $obj$$317$$.$HandleMouseOut$($event$$671$$), $event$$671$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$672$$) {
  var $obj$$318$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$672$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$672$$);
  $obj$$318$$ && ($obj$$318$$.$HandleClick$ && $obj$$318$$.$HandleClick$($event$$672$$), $event$$672$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$673$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$673$$);
  var $obj$$319$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$673$$));
  $obj$$319$$ && $obj$$319$$.$HandleRollOver$ && $obj$$319$$.$HandleRollOver$($event$$673$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$674$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$674$$);
  var $obj$$320$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$674$$));
  $obj$$320$$ && $obj$$320$$.$HandleRollOut$ && $obj$$320$$.$HandleRollOut$($event$$674$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$675$$) {
  var $obj$$321$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$675$$));
  $obj$$321$$ && ($obj$$321$$.$HandleClick$ && $obj$$321$$.$HandleClick$($event$$675$$), $event$$675$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$676$$) {
  $event$$676$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$676$$)
};
D.$DvtControlPanelEventHandlerProxy$$ = function $$DvtControlPanelEventHandlerProxy$$$($callback$$129$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$41$$) {
  this.Init($callback$$129$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$41$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$83$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$42$$) {
  this.$_callbackObj$ = $callbackObj$$83$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$42$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$664$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$664$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$665$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$665$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$666$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$666$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$667$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$667$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$668$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$668$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$DvtControlPanelLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelLAFUtils$$, D.$DvtObj$$, "DvtControlPanelLAFUtils");
D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ = "top";
D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ = "right";
D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ = "left";
D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ = "bottom";
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHalfHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$503$$, $nw$$, $nh$$, $bL2R$$, $r$$67_styleMap$$57$$) {
  $nw$$ || ($nw$$ = 86);
  $nh$$ || ($nh$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  $r$$67_styleMap$$57$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($r$$67_styleMap$$57$$, "border-radius", 0));
  return D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$503$$, $r$$67_styleMap$$57$$, $nw$$ - 2 * $r$$67_styleMap$$57$$, $nh$$ - 2 * $r$$67_styleMap$$57$$, $bL2R$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$504$$, $r$$68$$, $ww$$102$$, $hh$$86$$, $bL2R$$1$$) {
  var $x$$253$$ = $ww$$102$$ + $r$$68$$, $y$$228$$ = $hh$$86$$ + $r$$68$$, $cmds$$23$$ = D.$DvtPathUtils$$.moveTo($x$$253$$ + $r$$68$$, $y$$228$$ + $r$$68$$), $cmds$$23$$ = $cmds$$23$$ + D.$DvtPathUtils$$.lineTo($x$$253$$ - $ww$$102$$, $y$$228$$ + $r$$68$$), $x$$253$$ = $x$$253$$ - $ww$$102$$, $cmds$$23$$ = $cmds$$23$$ + D.$DvtPathUtils$$.lineTo($x$$253$$ - $r$$68$$, $y$$228$$ + $r$$68$$), $cmds$$23$$ = $cmds$$23$$ + D.$DvtPathUtils$$.lineTo($x$$253$$ - $r$$68$$, $y$$228$$ - $hh$$86$$), $y$$228$$ = 
  $y$$228$$ - $hh$$86$$;
  $bL2R$$1$$ ? ($cmds$$23$$ += D.$DvtPathUtils$$.$quadTo$(-$r$$68$$ + $x$$253$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$68$$ + $y$$228$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$68$$ + $x$$253$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$68$$ + $y$$228$$) + D.$DvtPathUtils$$.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$68$$ + $x$$253$$, -$r$$68$$ + $y$$228$$, $x$$253$$, -$r$$68$$ + $y$$228$$) + D.$DvtPathUtils$$.lineTo($x$$253$$, -$r$$68$$ + $y$$228$$), $cmds$$23$$ += 
  D.$DvtPathUtils$$.lineTo($x$$253$$ + $ww$$102$$ + $r$$68$$, -$r$$68$$ + $y$$228$$), $cmds$$23$$ += D.$DvtPathUtils$$.lineTo($x$$253$$ + $ww$$102$$ + $r$$68$$, $y$$228$$ + $hh$$86$$)) : ($cmds$$23$$ += D.$DvtPathUtils$$.lineTo($x$$253$$ - $r$$68$$, -$r$$68$$ + $y$$228$$), $cmds$$23$$ += D.$DvtPathUtils$$.lineTo($x$$253$$ + $ww$$102$$, -$r$$68$$ + $y$$228$$), $x$$253$$ += $ww$$102$$, $cmds$$23$$ += D.$DvtPathUtils$$.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$68$$ + $x$$253$$, -$r$$68$$ + 
  $y$$228$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$68$$ + $x$$253$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$68$$ + $y$$228$$) + D.$DvtPathUtils$$.$quadTo$($r$$68$$ + $x$$253$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$68$$ + $y$$228$$, $r$$68$$ + $x$$253$$, $y$$228$$) + D.$DvtPathUtils$$.lineTo($x$$253$$ + $r$$68$$, $y$$228$$ + $hh$$86$$));
  $cmds$$23$$ += D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$504$$, $cmds$$23$$)
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$505_mc$$1$$, $buttonHeight$$1_nh$$1$$, $styleMap$$58$$, $arPoints$$17_bR2L$$5_color$$80$$) {
  $buttonHeight$$1_nh$$1$$ || ($buttonHeight$$1_nh$$1$$ = 47);
  var $r$$69$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "border-radius", 0)), $buttonWidth$$6$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "openCloseButtonWidth", 0);
  $buttonHeight$$1_nh$$1$$ = window.Math.max($buttonHeight$$1_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "buttonHeight", $buttonHeight$$1_nh$$1$$));
  $arPoints$$17_bR2L$$5_color$$80$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$6$$, $buttonHeight$$1_nh$$1$$, $r$$69$$, $arPoints$$17_bR2L$$5_color$$80$$);
  $arPoints$$17_bR2L$$5_color$$80$$ = $arPoints$$17_bR2L$$5_color$$80$$.concat("Z");
  $context$$505_mc$$1$$ = new D.$DvtPath$$($context$$505_mc$$1$$, $arPoints$$17_bR2L$$5_color$$80$$, "cls_shape");
  ($arPoints$$17_bR2L$$5_color$$80$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints$$17_bR2L$$5_color$$80$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$505_mc$$1$$.$setSolidFill$($arPoints$$17_bR2L$$5_color$$80$$);
  return $context$$505_mc$$1$$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$506_mc$$2$$, $buttonHeight$$2_nh$$2$$, $styleMap$$59$$, $arPoints$$18_bR2L$$6$$) {
  $buttonHeight$$2_nh$$2$$ || ($buttonHeight$$2_nh$$2$$ = 47);
  var $r$$70$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "border-radius", 0)), $buttonWidth$$7$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "openCloseButtonWidth", 0);
  $buttonHeight$$2_nh$$2$$ = window.Math.max($buttonHeight$$2_nh$$2$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "buttonHeight", $buttonHeight$$2_nh$$2$$));
  $arPoints$$18_bR2L$$6$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$7$$, $buttonHeight$$2_nh$$2$$, $r$$70$$, $arPoints$$18_bR2L$$6$$);
  $arPoints$$18_bR2L$$6$$ = $arPoints$$18_bR2L$$6$$.concat("Z");
  $context$$506_mc$$2$$ = new D.$DvtPath$$($context$$506_mc$$2$$, $arPoints$$18_bR2L$$6$$, "cls_shape");
  $context$$506_mc$$2$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$506_mc$$2$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$506_mc$$2$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$507_mc$$3$$, $nh$$3$$, $styleMap$$60$$, $openSide$$1$$, $openSideSize$$) {
  $nh$$3$$ || ($nh$$3$$ = 137);
  var $r$$71$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "tabSize", 0), $ww$$103$$ = $cpWidth$$1$$ - 2 * $r$$71$$, $hh$$87$$ = $nh$$3$$ + 7 - 2 * $r$$71$$;
  $context$$507_mc$$3$$ = $openSide$$1$$ && $openSideSize$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$507_mc$$3$$, $r$$71$$, $cpWidth$$1$$, $nh$$3$$, $openSide$$1$$, $openSideSize$$) : D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$507_mc$$3$$, $r$$71$$, $ww$$103$$, $hh$$87$$);
  $context$$507_mc$$3$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$507_mc$$3$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$508$$, $nh$$4$$, $roundBottomRight$$, $styleMap$$61$$, $openSide$$2$$, $openSideSize$$1$$) {
  $nh$$4$$ || ($nh$$4$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$72$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "border-radius", 0)), $cpWidth$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "tabSize", 0), $ww$$104$$ = $cpWidth$$2$$ - 2 * $r$$72$$, $hh$$88$$ = $nh$$4$$ + 7 - 2 * $r$$72$$, $mc$$4$$ = D.$JSCompiler_alias_NULL$$, $mc$$4$$ = $openSide$$2$$ && $openSideSize$$1$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$508$$, $r$$72$$, $cpWidth$$2$$, $nh$$4$$, $openSide$$2$$, $openSideSize$$1$$) : 
  D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$508$$, $r$$72$$, $ww$$104$$, $hh$$88$$, $roundBottomRight$$);
  $mc$$4$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$4$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$4$$
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$509$$, $r$$73$$, $ww$$105$$, $hh$$89$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$254$$ = $ww$$105$$ + $r$$73$$, $y$$229$$ = $hh$$89$$, $cmds$$24$$ = D.$DvtPathUtils$$.moveTo($x$$254$$ + $r$$73$$, $y$$229$$), $cmds$$24$$ = $roundBottomRight$$1$$ ? $cmds$$24$$ + (D.$DvtPathUtils$$.$quadTo$($r$$73$$ + $x$$254$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$73$$ + $y$$229$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$73$$ + $x$$254$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$73$$ + $y$$229$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * 
  $r$$73$$ + $x$$254$$, $r$$73$$ + $y$$229$$, $x$$254$$, $r$$73$$ + $y$$229$$) + D.$DvtPathUtils$$.lineTo($x$$254$$, $r$$73$$ + $y$$229$$)) : $cmds$$24$$ + D.$DvtPathUtils$$.lineTo($x$$254$$ + $r$$73$$, $y$$229$$ + $r$$73$$), $cmds$$24$$ = $cmds$$24$$ + D.$DvtPathUtils$$.lineTo($x$$254$$ - $ww$$105$$, $r$$73$$ + $y$$229$$), $x$$254$$ = $x$$254$$ - $ww$$105$$, $cmds$$24$$ = $cmds$$24$$ + (D.$DvtPathUtils$$.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$73$$ + $x$$254$$, $r$$73$$ + $y$$229$$, 
  -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$73$$ + $x$$254$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$73$$ + $y$$229$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$73$$ + $x$$254$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$73$$ + $y$$229$$, -$r$$73$$ + $x$$254$$, $y$$229$$) + D.$DvtPathUtils$$.lineTo(-$r$$73$$ + $x$$254$$, $y$$229$$) + D.$DvtPathUtils$$.lineTo(-$r$$73$$ + $x$$254$$, $y$$229$$ - $hh$$89$$)), $y$$229$$ = $y$$229$$ - $hh$$89$$, $cmds$$24$$ = $cmds$$24$$ + (D.$DvtPathUtils$$.lineTo($x$$254$$ + 
  $ww$$105$$ + $r$$73$$, $y$$229$$) + D.$DvtPathUtils$$.lineTo($x$$254$$ + $ww$$105$$ + $r$$73$$, $y$$229$$ + $hh$$89$$) + D.$DvtPathUtils$$.closePath());
  return new D.$DvtPath$$($context$$509$$, $cmds$$24$$)
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$510$$, $arPoints$$19_r$$74$$, $width$$140$$, $height$$128$$, $openSide$$3$$, $openSideSize$$2$$) {
  $arPoints$$19_r$$74$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($context$$510$$, $width$$140$$, $height$$128$$, $arPoints$$19_r$$74$$, $openSide$$3$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$510$$, $arPoints$$19_r$$74$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$511$$, $arPoints$$20_r$$75$$, $width$$141$$, $height$$129$$, $openSide$$4$$, $openSideSize$$3$$) {
  $arPoints$$20_r$$75$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($context$$511$$, $width$$141$$, $height$$129$$, $arPoints$$20_r$$75$$, $openSide$$4$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$511$$, $arPoints$$20_r$$75$$)
};
D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtControlPanelLAFUtils$$$$GetShapePathCommands$$($bidi$$3_context$$512$$, $width$$142$$, $height$$130$$, $r$$76$$, $openSide$$5$$, $openSideSize$$4$$) {
  var $arPoints$$21$$;
  $bidi$$3_context$$512$$ = (0,D.$DvtAgent$isRightToLeft$$)($bidi$$3_context$$512$$);
  $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$3_context$$512$$ && ($arPoints$$21$$ = ["M", $width$$142$$, 0, "L", $width$$142$$, $height$$130$$ - $r$$76$$, "A", $r$$76$$, $r$$76$$, 0, 0, 1, $width$$142$$ - $r$$76$$, $height$$130$$, "L", 0, $height$$130$$, "L", 0, 0]);
  $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$3_context$$512$$ ? $arPoints$$21$$ = ["M", $width$$142$$, 0, "L", $width$$142$$, $height$$130$$, "L", $r$$76$$, $height$$130$$, "A", $r$$76$$, $r$$76$$, 0, 0, 1, 0, $height$$130$$ - $r$$76$$, "L", 0, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$3_context$$512$$ ? $arPoints$$21$$ = ["M", $width$$142$$, $openSideSize$$4$$, "L", $width$$142$$, $height$$130$$ - $r$$76$$, "A", $r$$76$$, $r$$76$$, 0, 0, 
  1, $width$$142$$ - $r$$76$$, $height$$130$$, "L", 0, $height$$130$$, "L", 0, 0, "L", $width$$142$$, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$3_context$$512$$ ? $arPoints$$21$$ = ["M", 0, 0, "L", $width$$142$$, 0, "L", $width$$142$$, $height$$130$$, "L", $r$$76$$, $height$$130$$, "A", $r$$76$$, $r$$76$$, 0, 0, 1, 0, $height$$130$$ - $r$$76$$, "L", 0, $openSideSize$$4$$] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$3_context$$512$$ ? $arPoints$$21$$ = 
  ["M", 0, 0, "L", $width$$142$$ - $r$$76$$, 0, "A", $r$$76$$, $r$$76$$, 0, 0, 1, $width$$142$$, $r$$76$$, "L", $width$$142$$, $height$$130$$ - $r$$76$$, "A", $r$$76$$, $r$$76$$, 0, 0, 1, $width$$142$$ - $r$$76$$, $height$$130$$, "L", 0, $height$$130$$] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$3_context$$512$$ ? $arPoints$$21$$ = ["M", $width$$142$$, $height$$130$$, "L", $r$$76$$, $height$$130$$, "A", $r$$76$$, $r$$76$$, 0, 0, 1, 0, $height$$130$$ - $r$$76$$, "L", 0, 
  $r$$76$$, "A", $r$$76$$, $r$$76$$, 0, 0, 1, $r$$76$$, 0, "L", $width$$142$$, 0] : $openSide$$5$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && !$bidi$$3_context$$512$$ ? $arPoints$$21$$ = ["M", 0, $height$$130$$, "L", 0, 0, "L", $width$$142$$ - $r$$76$$, 0, "A", $r$$76$$, $r$$76$$, 0, 0, 1, $width$$142$$, $r$$76$$, "L", $width$$142$$, $height$$130$$ - $r$$76$$, "A", $r$$76$$, $r$$76$$, 0, 0, 1, $width$$142$$ - $r$$76$$, $height$$130$$, "L", $openSideSize$$4$$, $height$$130$$] : $openSide$$5$$ == 
  D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$3_context$$512$$ && ($arPoints$$21$$ = ["M", $width$$142$$, $height$$130$$, "L", $width$$142$$, 0, "L", $r$$76$$, 0, "A", $r$$76$$, $r$$76$$, 0, 0, 0, 0, $r$$76$$, "L", 0, $height$$130$$ - $r$$76$$, "A", $r$$76$$, $r$$76$$, 0, 0, 0, $r$$76$$, $height$$130$$, "L", $width$$142$$ - $openSideSize$$4$$, $height$$130$$]);
  return $arPoints$$21$$
};
D.$DvtPanZoomComponent$$ = function $$DvtPanZoomComponent$$$($context$$475$$, $callback$$127$$, $callbackObj$$81$$) {
  this.Init($context$$475$$, $callback$$127$$, $callbackObj$$81$$)
};
(0,D.$goog$exportPath_$$)("DvtPanZoomComponent", D.$DvtPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomComponent$$, D.$DvtBaseComponent$$, "DvtPanZoomComponent");
D.$DvtPanZoomComponent$$.LEGEND_DISCLOSED_EVENT_KEY = "isLegendDisclosed";
D.$DvtPanZoomComponent$$.prototype.Init = function $$DvtPanZoomComponent$$$$Init$($context$$476$$, $callback$$128$$, $callbackObj$$82$$) {
  D.$DvtPanZoomComponent$$.$superclass$.Init.call(this, $context$$476$$, $callback$$128$$, $callbackObj$$82$$);
  this.$_controlPanelBehavior$ = "initCollapsed";
  this.$_displayedControls$ = 16777215;
  this.$_bSupportsVectorEffects$ = !(0,D.$DvtAgent$isEnvironmentBatik$$)() && !(0,D.$DvtAgent$isPlatformIE$$)() && !((0,D.$DvtAgent$isPlatformGecko$$)() && 17 >= (0,D.$DvtAgent$getVersion$$)());
  this.$_subcomponentStyles$ = this.$_resourcesMap$ = D.$JSCompiler_alias_NULL$$;
  this.$_skinName$ = ""
};
D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$ = (0,D.$JSCompiler_get$$)("$_panZoomCanvas$");
D.$DvtPanZoomComponent$$.prototype.getPanZoomCanvas = D.$DvtPanZoomComponent$$.prototype.$getPanZoomCanvas$;
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$ ? $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$._resources : {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtPanZoomComponent$$.prototype.$getSubcomponentStyles$ = (0,D.$JSCompiler_get$$)("$_subcomponentStyles$");
D.$JSCompiler_StaticMethods_parseComponentJson$$ = function $$JSCompiler_StaticMethods_parseComponentJson$$$($JSCompiler_StaticMethods_parseComponentJson$self$$, $jsonObj$$68$$) {
  var $cpStyleMap_endGradientColor_styleMap$$inline_7653$$ = (new D.$DvtCSSStyle$$($jsonObj$$68$$.inlineStyle)).$getStyle$("background-color");
  $cpStyleMap_endGradientColor_styleMap$$inline_7653$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_endGradientColor$ = $cpStyleMap_endGradientColor_styleMap$$inline_7653$$);
  var $cpStyleMap_endGradientColor_styleMap$$inline_7653$$ = {}, $skinName$$7$$ = $jsonObj$$68$$.skin;
  $skinName$$7$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_skinName$ = $skinName$$7$$, $cpStyleMap_endGradientColor_styleMap$$inline_7653$$.skin = $skinName$$7$$, "undefined" != typeof D.$DvtPanelDrawer$$ && ((0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7653$$, "background-color", $jsonObj$$68$$.cpBackgroundColor), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7653$$, "border-color", $jsonObj$$68$$.cpBorderColor), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7653$$, 
  "border-radius", $jsonObj$$68$$.cpBorderRadius), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7653$$, "box-shadow", $jsonObj$$68$$.cpBoxShadow), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7653$$, "tab-color-inactive", $jsonObj$$68$$.tabBgColorInactive), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_7653$$, "tab-border-color-inactive", $jsonObj$$68$$.tabBorderColorInactive)), $cpStyleMap_endGradientColor_styleMap$$inline_7653$$ = 
  D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap_endGradientColor_styleMap$$inline_7653$$), $JSCompiler_StaticMethods_parseComponentJson$self$$.$_subcomponentStyles$ = $cpStyleMap_endGradientColor_styleMap$$inline_7653$$)
};
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$66$$) {
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$ = (new D.$DvtCSSStyle$$($xmlNode$$66$$.$getAttr$("inlineStyle"))).$getStyle$("background-color");
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_endGradientColor$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$);
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$ = {}, $skinName$$8$$ = $xmlNode$$66$$.$getAttr$("skin");
  $skinName$$8$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_skinName$ = $skinName$$8$$, $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$.skin = $skinName$$8$$);
  "undefined" != typeof D.$DvtPanelDrawer$$ && ((0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$, "background-color", $xmlNode$$66$$.$getAttr$("cpBackgroundColor")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$, "border-color", $xmlNode$$66$$.$getAttr$("cpBorderColor")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$, "border-radius", $xmlNode$$66$$.$getAttr$("cpBorderRadius")), 
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$, "box-shadow", $xmlNode$$66$$.$getAttr$("cpBoxShadow")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$, "tab-color-inactive", $xmlNode$$66$$.$getAttr$("tabBgColorInactive")), (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$, "tab-border-color-inactive", $xmlNode$$66$$.$getAttr$("tabBorderColorInactive")));
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_subcomponentStyles$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_7662$$
};
D.$DvtPanZoomComponent$$.prototype.$render$ = function $$DvtPanZoomComponent$$$$$render$$($options$$228$$, $width$$137$$, $height$$125$$) {
  this.$Width$ = $width$$137$$;
  this.$Height$ = $height$$125$$;
  this.$_isResize$ = !$options$$228$$;
  if(!this.$_isResize$ || this.$_panZoomCanvas$) {
    this.$PreRender$();
    if(!this.$_isResize$) {
      if("object" == typeof $options$$228$$) {
        this.$SetOptions$($options$$228$$)
      }else {
        if(!($options$$228$$ == D.$JSCompiler_alias_NULL$$ || 0 == $options$$228$$.length)) {
          var $parser$$inline_7666_rootXmlNode$$inline_7667$$ = new D.$DvtXmlParser$$;
          if($parser$$inline_7666_rootXmlNode$$inline_7667$$ && ($parser$$inline_7666_rootXmlNode$$inline_7667$$ = $parser$$inline_7666_rootXmlNode$$inline_7667$$.parse($options$$228$$))) {
            "r" === $parser$$inline_7666_rootXmlNode$$inline_7667$$.getName() && ($parser$$inline_7666_rootXmlNode$$inline_7667$$ = $parser$$inline_7666_rootXmlNode$$inline_7667$$.getFirstChild()), $parser$$inline_7666_rootXmlNode$$inline_7667$$ && this.$GetXmlDomParser$().$loadXmlInitial$($parser$$inline_7666_rootXmlNode$$inline_7667$$)
          }
        }
      }
    }
    this.$Render$($options$$228$$, $width$$137$$, $height$$125$$);
    this.$UpdateAriaAttributes$()
  }
};
D.$DvtPanZoomComponent$$.prototype.render = D.$DvtPanZoomComponent$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetControlPanel$ = function $$JSCompiler_prototypeAlias$$$$GetControlPanel$$() {
  var $cpBehavior$$2$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$2$$ ? new D.$DvtControlPanel$$(this.$getCtx$(), this, "initCollapsed" == $cpBehavior$$2$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$GetControlPanelBehavior$ = (0,D.$JSCompiler_get$$)("$_controlPanelBehavior$");
D.$JSCompiler_prototypeAlias$$.$GetXmlDomParser$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PreRender$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  if(this.$_endGradientColor$ || !this.$_skinName$) {
    this.$_backgroundPane$ || (this.$_backgroundPane$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, 0, 0), this.$addChild$(this.$_backgroundPane$)), this.$_backgroundPane$.$setWidth$(this.getWidth()), this.$_backgroundPane$.$setHeight$(this.getHeight()), this.$_backgroundPane$.$setFill$((0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_endGradientColor$))
  }
  if(this.$_isResize$) {
    this.$_panZoomCanvas$.$setSize$(this.getWidth(), this.getHeight())
  }else {
    this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = D.$JSCompiler_alias_NULL$$);
    this.$_panZoomCanvas$ = new D.$DvtPanZoomCanvas$$(this.$getCtx$(), this.getWidth(), this.getHeight(), this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$addChild$(this.$_panZoomCanvas$);
    var $clipPath$$13_controlPanel$$5$$ = this.$GetControlPanel$();
    $clipPath$$13_controlPanel$$5$$ && ($clipPath$$13_controlPanel$$5$$.$addEvtListener$("dvtPZCPExpand", this.$_handleControlPanelEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_panZoomCanvas$.$_controlPanel$ = $clipPath$$13_controlPanel$$5$$);
    this.$_panZoomCanvas$.$renderComponent$()
  }
  $clipPath$$13_controlPanel$$5$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$13_controlPanel$$5$$, this.$getTranslateX$(), this.$getTranslateY$(), this.getWidth(), this.getHeight());
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $clipPath$$13_controlPanel$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$229$$) {
  this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($options$$229$$) : $options$$229$$
};
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$79$$) {
  var $arColors$$32_newColor$$1_rrRatio$$3$$, $arAlphas$$30_bgAlpha$$ = 1;
  if($color$$79$$ && "#7396C8" != $color$$79$$) {
    $arAlphas$$30_bgAlpha$$ = D.$DvtColorUtils$$.$getAlpha$($color$$79$$);
    $arColors$$32_newColor$$1_rrRatio$$3$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops$$25_bgRgb_ggRatio$$3$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio$$3_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$4$$ = D.$DvtColorUtils$$.$getRed$($color$$79$$), $gg$$4_gx_ww$$99$$ = D.$DvtColorUtils$$.$getGreen$($color$$79$$), $bb$$6_cx$$56$$ = D.$DvtColorUtils$$.$getBlue$($color$$79$$);
    $arColors$$32_newColor$$1_rrRatio$$3$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$4$$ + $arColors$$32_newColor$$1_rrRatio$$3$$ * (255 - $gh_rr$$4$$)), window.Math.round($gg$$4_gx_ww$$99$$ + $arStops$$25_bgRgb_ggRatio$$3$$ * (255 - $gg$$4_gx_ww$$99$$)), window.Math.round($bb$$6_cx$$56$$ + $bbRatio$$3_gw$$ * (255 - $bb$$6_cx$$56$$)));
    $arStops$$25_bgRgb_ggRatio$$3$$ = D.$DvtColorUtils$$.$getRGB$($color$$79$$);
    $arColors$$32_newColor$$1_rrRatio$$3$$ = ["#FFFFFF", "#FFFFFF", $arColors$$32_newColor$$1_rrRatio$$3$$, $arStops$$25_bgRgb_ggRatio$$3$$]
  }else {
    $arColors$$32_newColor$$1_rrRatio$$3$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas$$30_bgAlpha$$ = [$arAlphas$$30_bgAlpha$$, $arAlphas$$30_bgAlpha$$, $arAlphas$$30_bgAlpha$$, $arAlphas$$30_bgAlpha$$], $arStops$$25_bgRgb_ggRatio$$3$$ = [0, 45 / 255, 190 / 255, 1], $gg$$4_gx_ww$$99$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$Width$, $bbRatio$$3_gw$$ = 1.7 * 1.7 * $gg$$4_gx_ww$$99$$, $gh_rr$$4$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$Height$, $gg$$4_gx_ww$$99$$ = 0 + ($gg$$4_gx_ww$$99$$ - $bbRatio$$3_gw$$) / 2, $bb$$6_cx$$56$$ = 
  $gg$$4_gx_ww$$99$$ + $bbRatio$$3_gw$$ / 2, $cy$$57$$ = -35 + $gh_rr$$4$$ / 2, $r$$64$$ = 1.5 * window.Math.min($bbRatio$$3_gw$$ / 2, $gh_rr$$4$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors$$32_newColor$$1_rrRatio$$3$$, $arAlphas$$30_bgAlpha$$, $arStops$$25_bgRgb_ggRatio$$3$$, $bb$$6_cx$$56$$, $cy$$57$$, $r$$64$$, [$gg$$4_gx_ww$$99$$, -35, $bbRatio$$3_gw$$, $gh_rr$$4$$])
};
D.$DvtPanZoomComponent$$.prototype.$_handleControlPanelEvent$ = function $$DvtPanZoomComponent$$$$$_handleControlPanelEvent$$($event$$647$$) {
  var $spEvent$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$, "controlPanelBehavior", "show" == $event$$647$$.$getSubType$() ? "initExpanded" : "initCollapsed");
  this.$__dispatchEvent$($spEvent$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$471$$, $ww$$95$$, $hh$$78$$, $view$$56$$) {
  this.Init($context$$471$$, $ww$$95$$, $hh$$78$$, $view$$56$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$472$$, $ww$$96$$, $hh$$79$$, $view$$57$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$472$$);
  this.$_view$ = $view$$57$$;
  this.$_ww$ = $ww$$96$$;
  this.$_hh$ = $hh$$79$$;
  this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
  this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = D.$JSCompiler_alias_NULL$$;
  this.$_minZoom$ = 0.1;
  this.$_maxZoom$ = 1;
  this.$_panIncrement$ = 15;
  this.$_zoomIncrement$ = 0.05;
  this.$_bTiltPanningEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomToFitPadding$ = 20;
  this.$_controlPanel$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  this.$_backgroundPane$ = new D.$DvtRect$$(this.$getCtx$(), 0, 0, this.$_ww$, this.$_hh$);
  this.$addChild$(this.$_backgroundPane$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$);
  this.$_contentPane$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_contentPane$);
  this.$_contentPane$.$setMatrix$(new D.$DvtMatrix$$);
  this.$_animationDuration$ = 0.5;
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$472$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$96$$, $hh$$79$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$97$$, $hh$$80$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$97$$;
  this.$_hh$ = $hh$$80$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$97$$), this.$_backgroundPane$.$setHeight$($hh$$80$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$97$$, $hh$$80$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_SetClipRect$$ = function $$JSCompiler_StaticMethods_SetClipRect$$$($JSCompiler_StaticMethods_SetClipRect$self$$, $ww$$98$$, $hh$$81$$) {
  var $clipPath$$12$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$12$$, $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateX$(), $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateY$(), $ww$$98$$, $hh$$81$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_SetClipRect$self$$, $clipPath$$12$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$107$$) {
  if($animator$$107$$) {
    var $mat$$46$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$107$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$46$$) {
      return $mat$$46$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$DvtPanZoomCanvas$$.prototype.$getZoom$ = function $$DvtPanZoomCanvas$$$$$getZoom$$($animator$$108$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$108$$).$_a$
};
(0,D.$goog$exportPath_$$)("DvtPanZoomCanvas.prototype.getZoom", D.$DvtPanZoomCanvas$$.prototype.$getZoom$);
D.$JSCompiler_StaticMethods_getPanX$$ = function $$JSCompiler_StaticMethods_getPanX$$$($JSCompiler_StaticMethods_getPanX$self$$, $animator$$109$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_getPanX$self$$, $animator$$109$$).$_tx$
};
D.$JSCompiler_StaticMethods_getPanY$$ = function $$JSCompiler_StaticMethods_getPanY$$$($JSCompiler_StaticMethods_getPanY$self$$, $animator$$110$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_getPanY$self$$, $animator$$110$$).$_ty$
};
D.$DvtPanZoomCanvas$$.prototype.$panBy$ = function $$DvtPanZoomCanvas$$$$$panBy$$($dx$$26_mat$$47$$, $deltaX$$23_dy$$29_fireStartEventFunc$$, $animator$$111$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$5$$ = (0,D.$JSCompiler_StaticMethods_getPanX$$)(this, $animator$$111$$), $oldY$$5$$ = (0,D.$JSCompiler_StaticMethods_getPanY$$)(this, $animator$$111$$), $newX$$9$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$5$$ + $dx$$26_mat$$47$$), $newY$$10$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$5$$ + $deltaX$$23_dy$$29_fireStartEventFunc$$);
    $deltaX$$23_dy$$29_fireStartEventFunc$$ = $newX$$9$$ - $oldX$$5$$;
    var $deltaY$$26_fireEndEventFunc$$ = $newY$$10$$ - $oldY$$5$$;
    $dx$$26_mat$$47$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$111$$ && ($dx$$26_mat$$47$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$111$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$26_mat$$47$$ = $dx$$26_mat$$47$$.$clone$());
    $dx$$26_mat$$47$$ || ($dx$$26_mat$$47$$ = this.$_contentPane$.$getMatrix$().$clone$());
    $dx$$26_mat$$47$$.translate($deltaX$$23_dy$$29_fireStartEventFunc$$, $deltaY$$26_fireEndEventFunc$$);
    var $thisRef$$34$$ = this;
    $deltaX$$23_dy$$29_fireStartEventFunc$$ = function $$deltaX$$23_dy$$29_fireStartEventFunc$$$() {
      var $dx$$26_mat$$47$$ = new D.$DvtPanEvent$$("panning", $newX$$9$$, $newY$$10$$, $oldX$$5$$, $oldY$$5$$, $animator$$111$$);
      $thisRef$$34$$.$FireListener$($dx$$26_mat$$47$$)
    };
    $deltaY$$26_fireEndEventFunc$$ = function $$deltaY$$26_fireEndEventFunc$$$() {
      var $dx$$26_mat$$47$$ = new D.$DvtPanEvent$$("panned", $newX$$9$$, $newY$$10$$, $oldX$$5$$, $oldY$$5$$, $animator$$111$$);
      $thisRef$$34$$.$FireListener$($dx$$26_mat$$47$$)
    };
    $animator$$111$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$111$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$26_mat$$47$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$111$$, $deltaX$$23_dy$$29_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$111$$, $deltaY$$26_fireEndEventFunc$$)) : ($deltaX$$23_dy$$29_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$26_mat$$47$$), $deltaY$$26_fireEndEventFunc$$())
  }
};
D.$JSCompiler_StaticMethods_panTo$$ = function $$JSCompiler_StaticMethods_panTo$$$($JSCompiler_StaticMethods_panTo$self$$, $dx$$27_xx$$40$$, $dy$$30_yy$$40$$, $animator$$112$$) {
  $JSCompiler_StaticMethods_panTo$self$$.$_bPanningEnabled$ && ($dx$$27_xx$$40$$ -= (0,D.$JSCompiler_StaticMethods_getPanX$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$112$$), $dy$$30_yy$$40$$ -= (0,D.$JSCompiler_StaticMethods_getPanY$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$112$$), $JSCompiler_StaticMethods_panTo$self$$.$panBy$($dx$$27_xx$$40$$, $dy$$30_yy$$40$$, $animator$$112$$))
};
D.$DvtPanZoomCanvas$$.prototype.$zoomBy$ = function $$DvtPanZoomCanvas$$$$$zoomBy$$($currZoom$$inline_7577_dz$$6_mat$$48$$, $xx$$41$$, $yy$$41$$, $animator$$113$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$41$$ && 0 !== $xx$$41$$ && ($xx$$41$$ = this.$_ww$ / 2);
    !$yy$$41$$ && 0 !== $yy$$41$$ && ($yy$$41$$ = this.$_hh$ / 2);
    var $oldZoom$$5$$ = this.$getZoom$($animator$$113$$), $newZoom$$3$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$5$$ * $currZoom$$inline_7577_dz$$6_mat$$48$$);
    this.$_controlPanel$ && ($currZoom$$inline_7577_dz$$6_mat$$48$$ = this.$getZoom$(), $newZoom$$3$$ == this.$getMinZoom$() && $newZoom$$3$$ == this.$getMaxZoom$() ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_7577_dz$$6_mat$$48$$ <= $newZoom$$3$$ && $newZoom$$3$$ == this.$getMaxZoom$() ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_7577_dz$$6_mat$$48$$ >= $newZoom$$3$$ && $newZoom$$3$$ == this.$getMinZoom$() ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$5$$) != window.Math.round(1E5 * $newZoom$$3$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$3$$ / $oldZoom$$5$$;
      $currZoom$$inline_7577_dz$$6_mat$$48$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$113$$ && ($currZoom$$inline_7577_dz$$6_mat$$48$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$113$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_7577_dz$$6_mat$$48$$ = $currZoom$$inline_7577_dz$$6_mat$$48$$.$clone$());
      $currZoom$$inline_7577_dz$$6_mat$$48$$ || ($currZoom$$inline_7577_dz$$6_mat$$48$$ = this.$_contentPane$.$getMatrix$().$clone$());
      $currZoom$$inline_7577_dz$$6_mat$$48$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$41$$, $yy$$41$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_7577_dz$$6_mat$$48$$.$_tx$) - $currZoom$$inline_7577_dz$$6_mat$$48$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_7577_dz$$6_mat$$48$$.$_ty$) - $currZoom$$inline_7577_dz$$6_mat$$48$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$3$$, $oldZoom$$5$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$41$$, $yy$$41$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_7577_dz$$6_mat$$48$$.$_tx$) - $currZoom$$inline_7577_dz$$6_mat$$48$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_7577_dz$$6_mat$$48$$.$_ty$) - $currZoom$$inline_7577_dz$$6_mat$$48$$.$_ty$;
      $currZoom$$inline_7577_dz$$6_mat$$48$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$35$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$35$$, "zooming", $newZoom$$3$$, $oldZoom$$5$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$41$$, $yy$$41$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$35$$, "zoomed", $thisRef$$35$$.$getZoom$(), $oldZoom$$5$$, $animator$$113$$, D.$JSCompiler_alias_NULL$$, $xx$$41$$, $yy$$41$$, $xDiff$$, $yDiff$$)
      };
      $animator$$113$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$113$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_7577_dz$$6_mat$$48$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$113$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$113$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_7577_dz$$6_mat$$48$$), 
      $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_StaticMethods_zoomTo$$ = function $$JSCompiler_StaticMethods_zoomTo$$$($JSCompiler_StaticMethods_zoomTo$self$$, $dz$$7_zz$$, $xx$$42$$, $yy$$42$$, $animator$$114$$) {
  $JSCompiler_StaticMethods_zoomTo$self$$.$_bZoomingEnabled$ && ($dz$$7_zz$$ /= $JSCompiler_StaticMethods_zoomTo$self$$.$getZoom$($animator$$114$$), $JSCompiler_StaticMethods_zoomTo$self$$.$zoomBy$($dz$$7_zz$$, $xx$$42$$, $yy$$42$$, $animator$$114$$))
};
D.$DvtPanZoomCanvas$$.prototype.$center$ = function $$DvtPanZoomCanvas$$$$$center$$($animator$$115$$, $fitBounds$$7$$) {
  var $panningEnabled$$4$$ = this.$_bPanningEnabled$;
  this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  var $bounds$$139_cyBounds$$ = $fitBounds$$7$$;
  $bounds$$139_cyBounds$$ || ($bounds$$139_cyBounds$$ = this.$_contentPane$.$getDimensions$());
  var $cxBounds$$ = ($bounds$$139_cyBounds$$.x + $bounds$$139_cyBounds$$.$w$ / 2) * this.$getZoom$(), $bounds$$139_cyBounds$$ = ($bounds$$139_cyBounds$$.y + $bounds$$139_cyBounds$$.$h$ / 2) * this.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this, this.$_ww$ / 2 - $cxBounds$$, this.$_hh$ / 2 - $bounds$$139_cyBounds$$, $animator$$115$$);
  this.$_bPanningEnabled$ = $panningEnabled$$4$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomToFit$ = function $$DvtPanZoomCanvas$$$$$zoomToFit$$($animator$$116$$, $fitBounds$$8$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$5$$ = this.$_bPanningEnabled$, $zoomingEnabled$$3$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$140$$ = $fitBounds$$8$$ ? $fitBounds$$8$$ : this.$_contentPane$.$getDimensions$();
      if($bounds$$140$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$140$$).$_zoomToFitBounds$) {
        var $dz$$8$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$140$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$140$$.$h$), $dz$$8$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$8$$), $dx$$29$$ = this.$_ww$ / 2 - ($bounds$$140$$.x + $bounds$$140$$.$w$ / 2) * $dz$$8$$, $dy$$32$$ = this.$_hh$ / 2 - ($bounds$$140$$.y + $bounds$$140$$.$h$ / 2) * $dz$$8$$, $thisRef$$36$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$36$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$140$$)
        }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$36$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$116$$, $bounds$$140$$)
        };
        $animator$$116$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$116$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
        (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this, $dz$$8$$, 0, 0, $animator$$116$$);
        (0,D.$JSCompiler_StaticMethods_panTo$$)(this, $dx$$29$$, $dy$$32$$, $animator$$116$$);
        $animator$$116$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$116$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
      }
    }finally {
      this.$_bPanningEnabled$ = $panningEnabled$$5$$, this.$_bZoomingEnabled$ = $zoomingEnabled$$3$$
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$getViewport$ = function $$DvtPanZoomCanvas$$$$$getViewport$$() {
  var $topLeftGlobal_topLeftLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0)), $bottomRightGlobal_bottomRightLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(this.$_ww$, this.$_hh$)), $topLeftGlobal_topLeftLocal$$ = this.$_contentPane$.$stageToLocal$($topLeftGlobal_topLeftLocal$$), $bottomRightGlobal_bottomRightLocal$$ = this.$_contentPane$.$stageToLocal$($bottomRightGlobal_bottomRightLocal$$);
  return new D.$DvtRectangle$$($topLeftGlobal_topLeftLocal$$.x, $topLeftGlobal_topLeftLocal$$.y, $bottomRightGlobal_bottomRightLocal$$.x - $topLeftGlobal_topLeftLocal$$.x, $bottomRightGlobal_bottomRightLocal$$.y - $topLeftGlobal_topLeftLocal$$.y)
};
D.$JSCompiler_StaticMethods_SetElasticConstraints$$ = function $$JSCompiler_StaticMethods_SetElasticConstraints$$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $bElastic$$3$$) {
  if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticConstraints$ = $bElastic$$3$$) {
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ && ($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$isRunning$() && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.stop(), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$)
  }else {
    var $currX$$13_panEvent$$inline_7604$$ = (0,D.$JSCompiler_StaticMethods_getPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$), $currY$$13$$ = (0,D.$JSCompiler_StaticMethods_getPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$), $currZoom$$3$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX$$13_panEvent$$inline_7604$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX$$13_panEvent$$inline_7604$$) || $currY$$13$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$13$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$3$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$3$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getCtx$(), 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX$$13_panEvent$$inline_7604$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX$$13_panEvent$$inline_7604$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_7613$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_7613$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$43$$) {
  var $dx$$30_offsetX$$9$$ = $xx$$43$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$30_offsetX$$9$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$30_offsetX$$9$$, $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$30_offsetX$$9$$)) : $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$30_offsetX$$9$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$30_offsetX$$9$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$30_offsetX$$9$$)) : $dx$$30_offsetX$$9$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$30_offsetX$$9$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$43$$) {
  var $dy$$33_offsetY$$6$$ = $yy$$43$$;
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$33_offsetY$$6$$ < $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - $dy$$33_offsetY$$6$$, $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$33_offsetY$$6$$)) : $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$);
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$33_offsetY$$6$$ > $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$33_offsetY$$6$$ -= $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$, $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$33_offsetY$$6$$)) : $dy$$33_offsetY$$6$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$);
  return $dy$$33_offsetY$$6$$
};
D.$JSCompiler_StaticMethods_ConstrainZoom$$ = function $$JSCompiler_StaticMethods_ConstrainZoom$$$($JSCompiler_StaticMethods_ConstrainZoom$self$$, $zz$$1$$) {
  var $dz$$10_newZ$$1$$ = window.Math.max(0, $zz$$1$$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && $dz$$10_newZ$$1$$ < $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - $dz$$10_newZ$$1$$, $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$10_newZ$$1$$)) : $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && $dz$$10_newZ$$1$$ > $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$10_newZ$$1$$ -= $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$, $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ + window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$10_newZ$$1$$)) : $dz$$10_newZ$$1$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$);
  return $dz$$10_newZ$$1$$
};
D.$DvtPanZoomCanvas$$.prototype.$renderComponent$ = function $$DvtPanZoomCanvas$$$$$renderComponent$$() {
  var $controlPanel$$2$$ = this.$_controlPanel$;
  $controlPanel$$2$$ && (this.$addChild$($controlPanel$$2$$), (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), $controlPanel$$2$$.$renderComponent$())
};
D.$JSCompiler_StaticMethods_PositionControlPanel$$ = function $$JSCompiler_StaticMethods_PositionControlPanel$$$($JSCompiler_StaticMethods_PositionControlPanel$self$$) {
  var $openCloseButtonWidth_styleMap$$51$$ = $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_view$.$getSubcomponentStyles$(), $posX$$4_transX$$4$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$51$$, "paddingSide", 0), $posY$$3$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$51$$, "paddingTop", 0), $openCloseButtonWidth_styleMap$$51$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$51$$, "openCloseButtonWidth", 0), $posX$$4_transX$$4$$ = 
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$getCtx$()) ? $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_ww$ - $openCloseButtonWidth_styleMap$$51$$ - $posX$$4_transX$$4$$ : $posX$$4_transX$$4$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_controlPanel$, $posX$$4_transX$$4$$, $posY$$3$$)
};
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$628$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$getCtx$(), $event$$628$$.pageX, $event$$628$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$8_zoomEvent$$, $newZoom$$4$$, $oldZoom$$6$$, $animator$$118$$, $zoomToFitBounds$$1$$, $xx$$44$$, $yy$$44$$, $tx$$26$$, $ty$$27$$) {
  $subType$$8_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$8_zoomEvent$$, $newZoom$$4$$, $oldZoom$$6$$, $animator$$118$$, $zoomToFitBounds$$1$$, new D.$DvtPoint$$($xx$$44$$, $yy$$44$$), $tx$$26$$, $ty$$27$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$8_zoomEvent$$);
  return $subType$$8_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$4$$) {
  var $zoomLevel$$;
  $zoomLevel$$ = $currZoom$$4$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$getMaxZoom$() && ($zoomLevel$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$getMaxZoom$());
  return $zoomLevel$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$5$$) {
  var $zoomLevel$$1$$;
  $zoomLevel$$1$$ = $currZoom$$5$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$1$$ < $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$getMinZoom$() && ($zoomLevel$$1$$ = $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$getMinZoom$());
  return $zoomLevel$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvas$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setMinZoom$ = (0,D.$JSCompiler_set$$)("$_minZoom$");
D.$JSCompiler_prototypeAlias$$.$getMinZoom$ = (0,D.$JSCompiler_get$$)("$_minZoom$");
D.$JSCompiler_prototypeAlias$$.$setMaxZoom$ = function $$JSCompiler_prototypeAlias$$$$setMaxZoom$$($n$$30$$) {
  0 > $n$$30$$ && ($n$$30$$ = 1);
  this.$_maxZoom$ = $n$$30$$
};
D.$JSCompiler_prototypeAlias$$.$getMaxZoom$ = (0,D.$JSCompiler_get$$)("$_maxZoom$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_StaticMethods_resetTouchTargets$$ = function $$JSCompiler_StaticMethods_resetTouchTargets$$$($JSCompiler_StaticMethods_resetTouchTargets$self$$) {
  (0,D.$DvtAgent$isTouchDevice$$)() && ($JSCompiler_StaticMethods_resetTouchTargets$self$$.$_currTargets$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_resetTouchTargets$self$$.$_eventManager$.$TouchManager$.reset())
};
D.$DvtPanZoomCanvas$$.prototype.$setInteractionEnabled$ = function $$DvtPanZoomCanvas$$$$$setInteractionEnabled$$($bEnabled$$6$$) {
  $bEnabled$$6$$ ? this.$_eventManager$.$addListeners$(this) : this.$_eventManager$.$removeListeners$(this)
};
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$473$$, $callback$$125$$, $callbackObj$$79$$) {
  this.Init($context$$473$$, $callback$$125$$, $callbackObj$$79$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$474$$, $callback$$126$$, $callbackObj$$80$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$474$$, $callback$$126$$, $callbackObj$$80$$);
  this.$_pzc$ = $callbackObj$$80$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bDragging$ = this.$_bZooming$ = this.$_bPanned$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$76$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$76$$);
  (0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$76$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$76$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$77$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$77$$);
  (0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$77$$.$removeEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$77$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$629_pos$$67$$) {
  this.$_bPanned$ = this.$_bDragging$ = D.$JSCompiler_alias_FALSE$$;
  2 != $event$$629_pos$$67$$.button && ($event$$629_pos$$67$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$629_pos$$67$$), this.$_mx$ = $event$$629_pos$$67$$.x, this.$_my$ = $event$$629_pos$$67$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_callbackObj$), this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_callbackObj$), 
  this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$630_zz$$2$$) {
  if(this.$_bDown$) {
    this.$_bDragging$ = D.$JSCompiler_alias_TRUE$$;
    var $pos$$68_yy$$45$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$630_zz$$2$$), $xx$$45$$ = $pos$$68_yy$$45$$.x, $pos$$68_yy$$45$$ = $pos$$68_yy$$45$$.y;
    $event$$630_zz$$2$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$630_zz$$2$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$68_yy$$45$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$68_yy$$45$$)), this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$630_zz$$2$$, this.$_px$, this.$_py$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$630_zz$$2$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$45$$, $pos$$68_yy$$45$$);
    this.$_mx$ = $xx$$45$$;
    this.$_my$ = $pos$$68_yy$$45$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$631$$) {
  this.$_bDragging$ = this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this);
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$631$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$632$$) {
  if(this.$_bDragging$ || this.$_bPanned$) {
    this.$_bPanned$ = this.$_bDragging$ = D.$JSCompiler_alias_FALSE$$, (0,D.$DvtEventManager$consumeEvent$$)($event$$632$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$633$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$633$$.relatedTarget || $event$$633$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$633$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$633$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$634$$) {
  if($event$$634$$.wheelDelta && 0 !== $event$$634$$.wheelDelta && this.$_callbackObj$.$_bZoomingEnabled$) {
    var $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$();
    this.$_zoomAnimator$ && ($currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$7_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$($currZoom$$7_oldZoomAnim_zz$$3$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
    this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
    var $delta$$23_pos$$69$$ = $event$$634$$.wheelDelta;
    (0,D.$DvtAgent$isPlatformGecko$$)() && ($delta$$23_pos$$69$$ = -$delta$$23_pos$$69$$);
    $currZoom$$7_oldZoomAnim_zz$$3$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$23_pos$$69$$ / window.Math.abs($delta$$23_pos$$69$$);
    $delta$$23_pos$$69$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$634$$);
    this.$getCtx$().$getDocumentUtils$().$cancelDomEvent$($event$$634$$);
    this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, $delta$$23_pos$$69$$.x, $delta$$23_pos$$69$$.y, this.$_zoomAnimator$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$7_oldZoomAnim_zz$$3$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
    this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
  }
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$34_ratio$$16$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$34_ratio$$16$$ = $dy$$34_ratio$$16$$ * $dy$$34_ratio$$16$$, $interval$$3_newX$$11$$ = this.$_momentumTimer$.$_interval$, $dx$$31$$ = $dy$$34_ratio$$16$$ * this.$_momentumXperMS$ * $interval$$3_newX$$11$$, $dy$$34_ratio$$16$$ = $dy$$34_ratio$$16$$ * this.$_momentumYperMS$ * $interval$$3_newX$$11$$;
  this.$_momentumDx$ += $dx$$31$$;
  this.$_momentumDy$ += $dy$$34_ratio$$16$$;
  var $interval$$3_newX$$11$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$12$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_callbackObj$, $interval$$3_newX$$11$$, $newY$$12$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$14$$ = (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_callbackObj$), $currY$$14$$ = (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_callbackObj$);
    if(window.Math.abs($currX$$14$$ - $interval$$3_newX$$11$$) > window.Math.abs($dx$$31$$) || window.Math.abs($currY$$14$$ - $newY$$12$$) > window.Math.abs($dy$$34_ratio$$16$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$635$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$635$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$635$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$636$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$636$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$636$$, "panTouch");
  (this.$_callbackObj$.$_bZoomingEnabled$ || this.$_callbackObj$.$_bPanningEnabled$) && $event$$636$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$637$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$637$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$637$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$638$$, $touch$$44$$) {
  var $targets$$inline_7616_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_7616_touchIds$$11$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$44$$.identifier, "zoomTouch", "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$44$$.pageX, this.$_my$ = $touch$$44$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_callbackObj$), this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_callbackObj$), 
  this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_7616_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_7616_touchIds$$11$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_7616_touchIds$$11$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_7616_touchIds$$11$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_7631_touchIds$$12$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_7631_touchIds$$12$$.length) {
    var $data$$91_touch1Data$$inline_7620$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$ = this.$TouchManager$;
    if(2 == $targets$$inline_7631_touchIds$$12$$.length) {
      if($data$$91_touch1Data$$inline_7620$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.$_touchMap$[$targets$$inline_7631_touchIds$$12$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.$_touchMap$[$targets$$inline_7631_touchIds$$12$$[1]], $data$$91_touch1Data$$inline_7620$$ == D.$JSCompiler_alias_NULL$$ || 
      $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $data$$91_touch1Data$$inline_7620$$.dx && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.dy) {
        $data$$91_touch1Data$$inline_7620$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp$$8_dist$$inline_7624_dx$$inline_7622$$ = $data$$91_touch1Data$$inline_7620$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.pageX, $dy$$inline_7623_prevdx$$inline_7625$$ = $data$$91_touch1Data$$inline_7620$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.pageY, $cp$$8_dist$$inline_7624_dx$$inline_7622$$ = window.Math.sqrt($cp$$8_dist$$inline_7624_dx$$inline_7622$$ * $cp$$8_dist$$inline_7624_dx$$inline_7622$$ + 
        $dy$$inline_7623_prevdx$$inline_7625$$ * $dy$$inline_7623_prevdx$$inline_7625$$), $dy$$inline_7623_prevdx$$inline_7625$$ = $data$$91_touch1Data$$inline_7620$$.prevPageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.prevPageX, $prevdy$$inline_7626$$ = $data$$91_touch1Data$$inline_7620$$.prevPageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.prevPageY, $cx$$inline_7627$$ = ($data$$91_touch1Data$$inline_7620$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.pageX) / 2, $cy$$inline_7628$$ = ($data$$91_touch1Data$$inline_7620$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.pageY) / 2;
        $data$$91_touch1Data$$inline_7620$$ = {$dz$:$cp$$8_dist$$inline_7624_dx$$inline_7622$$ - window.Math.sqrt($dy$$inline_7623_prevdx$$inline_7625$$ * $dy$$inline_7623_prevdx$$inline_7625$$ + $prevdy$$inline_7626$$ * $prevdy$$inline_7626$$), $cx$:$cx$$inline_7627$$, $cy$:$cy$$inline_7628$$, $dcx$:$cx$$inline_7627$$ - ($data$$91_touch1Data$$inline_7620$$.prevPageX + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.prevPageX) / 2, $dcy$:$cy$$inline_7628$$ - 
        ($data$$91_touch1Data$$inline_7620$$.prevPageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$.prevPageY) / 2, $dist$:$cp$$8_dist$$inline_7624_dx$$inline_7622$$}
      }
    }else {
      $data$$91_touch1Data$$inline_7620$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$91_touch1Data$$inline_7620$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$91_touch1Data$$inline_7620$$.$dist$ - $data$$91_touch1Data$$inline_7620$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$ = this.$_origZoom$ * ($data$$91_touch1Data$$inline_7620$$.$dist$ / this.$_origDist$), $cp$$8_dist$$inline_7624_dx$$inline_7622$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$getCtx$(), $data$$91_touch1Data$$inline_7620$$.$cx$, $data$$91_touch1Data$$inline_7620$$.$cy$), this.$hideTooltip$(), 
    $targets$$inline_7631_touchIds$$12$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_7631_touchIds$$12$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_7631_touchIds$$12$$, (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_7618_touch2Data$$inline_7621_zz$$4$$, $cp$$8_dist$$inline_7624_dx$$inline_7622$$.x, $cp$$8_dist$$inline_7624_dx$$inline_7622$$.y), this.$_callbackObj$.$panBy$($data$$91_touch1Data$$inline_7620$$.$dcx$, 
    $data$$91_touch1Data$$inline_7620$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$13$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_7636$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$13$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_7636$$;
  0 == $touchIds$$13$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$641$$, $touch$$47$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$47$$.identifier, "panTouch", "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$47$$.pageX, this.$_my$ = $touch$$47$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getPanX$$)(this.$_callbackObj$), 
  this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getPanY$$)(this.$_callbackObj$), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$642$$, $touch$$48$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$46$$ = $touch$$48$$.pageX, $yy$$46$$ = $touch$$48$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$46$$, $yy$$46$$);
    this.$_mx$ = $xx$$46$$;
    this.$_my$ = $yy$$46$$
  }
};
D.$JSCompiler_prototypeAlias$$.$PanEndTouch$ = function $$JSCompiler_prototypeAlias$$$$PanEndTouch$$($event$$643$$) {
  !this.$_bZooming$ && this.$_bPanning$ && ((0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this), (0,D.$JSCompiler_StaticMethods_SetEventInfo$$)(this, $event$$643$$, "panned", D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__handleZoomEnd$$ = function $$JSCompiler_StaticMethods__handleZoomEnd$$$($JSCompiler_StaticMethods__handleZoomEnd$self$$) {
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomEnd"));
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_bZooming$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$);
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$47$$, $yy$$47$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  (0,D.$JSCompiler_StaticMethods_panTo$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$47$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
};
D.$JSCompiler_StaticMethods__handlePanEnd$$ = function $$JSCompiler_StaticMethods__handlePanEnd$$$($JSCompiler_StaticMethods__handlePanEnd$self$$) {
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanEnd"));
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanned$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$);
  if($JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.$isRunning$()) {
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.stop();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.reset();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ ? $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.reset() : $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanEnd$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanEnd$self$$.$_handleMomentumTimer$, $JSCompiler_StaticMethods__handlePanEnd$self$$);
    for(var $dt$$1$$ = 0, $dx$$32$$ = 0, $dy$$35$$ = 0, $numMoves$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;0 < $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;) {
      var $objMove$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.pop(), $dt$$1$$ = $dt$$1$$ + $objMove$$.$dt$, $dx$$32$$ = $dx$$32$$ + $objMove$$.$dx$, $dy$$35$$ = $dy$$35$$ + $objMove$$.$dy$
    }
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumXperMS$ = $dx$$32$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumYperMS$ = $dy$$35$$ / $dt$$1$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.setInterval(window.Math.ceil($dt$$1$$ / $numMoves$$));
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumIterCount$ = 1;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDx$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDy$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_bPanningEnabled$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.start()
  }else {
    (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtPanZoomCanvasEventManager$$.prototype.$GetTouchResponse$ = function $$DvtPanZoomCanvasEventManager$$$$$GetTouchResponse$$() {
  return this.$_pzc$.$_bPanningEnabled$ || this.$_pzc$.$_bZoomingEnabled$ ? "touchHold" : "auto"
};
D.$DvtPanZoomCanvasEventManager$$.prototype.$StoreInfoByEventType$ = function $$DvtPanZoomCanvasEventManager$$$$$StoreInfoByEventType$$($key$$126$$) {
  return"panned" == $key$$126$$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtPanZoomCanvasEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $key$$126$$)
};
D.$DvtPanZoomCanvasKeyboardHandler$$ = function $$DvtPanZoomCanvasKeyboardHandler$$$($component$$25$$, $manager$$24$$) {
  this.Init($component$$25$$, $manager$$24$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanZoomCanvasKeyboardHandler");
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.Init = function $$DvtPanZoomCanvasKeyboardHandler$$$$Init$($component$$26$$, $manager$$25$$) {
  D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.Init.call(this, $manager$$25$$);
  this.$_component$ = $component$$26$$
};
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$4_event$$644$$) {
  var $keyCode$$44$$ = $controlPanel$$4_event$$644$$.keyCode, $canvas$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$44$$) {
    $controlPanel$$4_event$$644$$.ctrlKey || $controlPanel$$4_event$$644$$.shiftKey ? $canvas$$.$panBy$($canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, $canvas$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$44$$) {
      $controlPanel$$4_event$$644$$.ctrlKey || $controlPanel$$4_event$$644$$.shiftKey ? $canvas$$.$panBy$(-$canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, -$canvas$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$44$$) {
        ($controlPanel$$4_event$$644$$ = $canvas$$.$_controlPanel$) && $controlPanel$$4_event$$644$$.$toggleExpandCollapse$()
      }else {
        if((0,D.$DvtKeyboardEvent$isEquals$$)($controlPanel$$4_event$$644$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$4_event$$644$$)) {
          (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() + $canvas$$.$_zoomIncrement$)
        }else {
          if((0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$4_event$$644$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($controlPanel$$4_event$$644$$)) {
            (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() - $canvas$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$44$$ || 96 == $keyCode$$44$$) && !$controlPanel$$4_event$$644$$.ctrlKey && !$controlPanel$$4_event$$644$$.shiftKey) {
              $canvas$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$4_event$$644$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$477$$, $maxWidth$$27$$, $maxHeight$$15$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$53$$, $disclosed$$1$$, $isFixed$$) {
  this.Init($context$$477$$, $maxWidth$$27$$, $maxHeight$$15$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$53$$, $disclosed$$1$$, $isFixed$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$478$$, $maxWidth$$28$$, $maxHeight$$16$$, $collapseDir$$1$$, $buttonImages$$5$$, $styleMap$$54$$, $disclosed$$2$$, $isFixed$$1$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$478$$);
  this.$_maxWidth$ = $maxWidth$$28$$;
  this.$_maxHeight$ = $maxHeight$$16$$;
  this.$_collapseDir$ = $collapseDir$$1$$ ? $collapseDir$$1$$ : "col_northeast";
  (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ("col_northeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northwest" : "col_northwest" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northeast" : "col_southeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_southwest" : "col_southwest" == this.$_collapseDir$ && (this.$_collapseDir$ = "col_southeast"));
  this.$_buttonImages$ = $buttonImages$$5$$;
  this.$_isFixed$ = $isFixed$$1$$ ? $isFixed$$1$$ : (0,D.$DvtAgent$isEnvironmentBatik$$)();
  this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = D.$JSCompiler_alias_NULL$$;
  this.$_styleMap$ = $styleMap$$54$$;
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$);
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", D.$JSCompiler_alias_NULL$$));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_collapse$ = $disclosed$$2$$ !== D.$JSCompiler_alias_VOID$$ ? !$disclosed$$2$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_contentContainer$ = new D.$DvtContainer$$($context$$478$$);
  this.$addChild$(this.$_contentContainer$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_contentContainer$, 5, 5);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$DvtCollapsiblePanel$$.prototype.$HandleResize$ = function $$DvtCollapsiblePanel$$$$$HandleResize$$($event$$648_resizeHeight$$) {
  var $resizeWidth$$ = $event$$648_resizeHeight$$.getWidth() + 10;
  $event$$648_resizeHeight$$ = $event$$648_resizeHeight$$.getHeight() + 10;
  this.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)(this, $resizeWidth$$, $event$$648_resizeHeight$$));
  var $west$$2$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_buttonFrame$ && $west$$2$$ && this.$_buttonFrame$.$setTranslateX$($resizeWidth$$);
  this.$FireListener$(new D.$DvtResizeEvent$$($resizeWidth$$, $event$$648_resizeHeight$$, 0, 0))
};
D.$DvtCollapsiblePanel$$.prototype.isCollapsed = (0,D.$JSCompiler_get$$)("$_collapse$");
D.$JSCompiler_StaticMethods_setCollapsed$$ = function $$JSCompiler_StaticMethods_setCollapsed$$$($JSCompiler_StaticMethods_setCollapsed$self$$, $collapse$$1$$) {
  $JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ != $collapse$$1$$ && ($JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ = $collapse$$1$$, (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_setCollapsed$self$$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setCollapsed$self$$.$FireListener$(new D.$DvtCollapsiblePanelEvent$$($collapse$$1$$ ? "hide" : "show")))
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentWidth$ = function $$DvtCollapsiblePanel$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 10
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentHeight$ = function $$DvtCollapsiblePanel$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 10
};
D.$JSCompiler_StaticMethods__getRefPoint$$ = function $$JSCompiler_StaticMethods__getRefPoint$$$($JSCompiler_StaticMethods__getRefPoint$self$$, $point$$44$$, $isScale$$) {
  return!$JSCompiler_StaticMethods__getRefPoint$self$$.isCollapsed() ? $isScale$$ ? new D.$DvtPoint$$(1 / $point$$44$$.x, 1 / $point$$44$$.y) : new D.$DvtPoint$$(-$point$$44$$.x, -$point$$44$$.y) : $point$$44$$
};
D.$JSCompiler_StaticMethods__collapseExpand$$ = function $$JSCompiler_StaticMethods__collapseExpand$$$($JSCompiler_StaticMethods__collapseExpand$self$$, $animate$$1$$) {
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  var $moveAnim_north_translatePoint2$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_northeast" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $west$$3$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $moveAnim2_translatePoint_translateX$$2$$ = $west$$3$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 
  $translateY$$2$$ = $moveAnim_north_translatePoint2$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$, $scaleAnim$$1_scalePoint$$ = new D.$DvtPoint$$(1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$), $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtPoint$$($moveAnim2_translatePoint_translateX$$2$$, $translateY$$2$$), $moveAnim_north_translatePoint2$$ = new D.$DvtPoint$$($west$$3$$ ? -$JSCompiler_StaticMethods__collapseExpand$self$$.$_width$ : 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, $translateY$$2$$ - ($moveAnim_north_translatePoint2$$ ? 0 : 25));
  $animate$$1$$ || ($JSCompiler_StaticMethods__collapseExpand$self$$.$_background$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$ && $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$.$setAlpha$(0));
  $scaleAnim$$1_scalePoint$$ = new D.$DvtAnimScaleBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $scaleAnim$$1_scalePoint$$, D.$JSCompiler_alias_TRUE$$), $animate$$1$$ ? 0.25 : 1E-5);
  $moveAnim_north_translatePoint2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim_north_translatePoint2$$), $animate$$1$$ ? 0.25 : 1E-5);
  $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim2_translatePoint_translateX$$2$$), $animate$$1$$ ? 0.25 : 1E-5);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$(), $scaleAnim$$1_scalePoint$$, $moveAnim_north_translatePoint2$$, $moveAnim2_translatePoint_translateX$$2$$);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$getCtx$().$getTooltipManager$().$hideTooltip$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$)), $JSCompiler_StaticMethods__collapseExpand$self$$.isCollapsed() && $JSCompiler_StaticMethods__collapseExpand$self$$.$_contentContainer$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__collapseExpand$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.play())
};
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$139$$, $height$$127$$) {
  var $r$$65$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$22$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$127$$ && ($height$$127$$ = 25);
  $cmds$$22$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? D.$DvtPathUtils$$.moveTo($r$$65$$, 0) : D.$DvtPathUtils$$.moveTo(0, 0);
  $cmds$$22$$ += D.$DvtPathUtils$$.lineTo($width$$139$$ - $r$$65$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$22$$ += D.$DvtPathUtils$$.lineTo($width$$139$$, 0), $cmds$$22$$ += D.$DvtPathUtils$$.lineTo($width$$139$$, $r$$65$$)) : $cmds$$22$$ += D.$DvtPathUtils$$.$quadTo$($width$$139$$, 0, $width$$139$$, $r$$65$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$127$$ && $west$$4$$ ? $cmds$$22$$ += D.$DvtPathUtils$$.lineTo($width$$139$$, $height$$127$$) : ($cmds$$22$$ += D.$DvtPathUtils$$.lineTo($width$$139$$, $height$$127$$ - $r$$65$$), $cmds$$22$$ += D.$DvtPathUtils$$.$quadTo$($width$$139$$, $height$$127$$, $width$$139$$ - $r$$65$$, $height$$127$$));
  $cmds$$22$$ += D.$DvtPathUtils$$.lineTo($r$$65$$, $height$$127$$);
  $cmds$$22$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$127$$ && !$west$$4$$ ? $cmds$$22$$ + D.$DvtPathUtils$$.lineTo(0, $height$$127$$) : $cmds$$22$$ + D.$DvtPathUtils$$.$quadTo$(0, $height$$127$$, 0, $height$$127$$ - $r$$65$$);
  if($JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$) {
    $cmds$$22$$ += D.$DvtPathUtils$$.lineTo(0, $r$$65$$), $cmds$$22$$ += D.$DvtPathUtils$$.$quadTo$(0, 0, $r$$65$$, 0)
  }
  return $cmds$$22$$ += D.$DvtPathUtils$$.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCollapsiblePanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  var $alpha$$47_stroke$$101_west$$5$$ = this.$_background$.$getStroke$().$clone$();
  $alpha$$47_stroke$$101_west$$5$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($alpha$$47_stroke$$101_west$$5$$);
  var $alpha$$47_stroke$$101_west$$5$$ = this.$_styleMap$[D.$DvtControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$66$$ = this.$_background$.$getFill$().$clone$();
  $fill$$66$$.$setAlpha$($alpha$$47_stroke$$101_west$$5$$);
  this.$_background$.$setFill$($fill$$66$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.isCollapsed() || this.$_contentContainer$.$setAlpha$(1);
  $alpha$$47_stroke$$101_west$$5$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_collapseExpandButton$ && (this.$_collapseExpandButton$ = this.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, 25, this.$_styleMap$, $alpha$$47_stroke$$101_west$$5$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, 25, this.$_styleMap$, $alpha$$47_stroke$$101_west$$5$$ ? D.$DvtButtonLAFUtils$$.$DIR_LEFT$ : D.$DvtButtonLAFUtils$$.$DIR_RIGHT$), 
  this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$OnButtonHoverOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnButtonClick$ = function $$JSCompiler_prototypeAlias$$$$OnButtonClick$$() {
  this.$getCtx$().$getTooltipManager$().$hideTooltip$();
  (0,D.$JSCompiler_StaticMethods_setCollapsed$$)(this, !this.isCollapsed())
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOver$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOver$$($evt$$59$$) {
  var $tooltip$$38$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$38$$ != D.$JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showTooltip$($evt$$59$$.pageX, $evt$$59$$.pageY, $tooltip$$38$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOut$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOut$$() {
  this.$getCtx$().$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$() {
  var $alpha$$48_stroke$$102$$ = this.$_background$.$getStroke$().$clone$();
  $alpha$$48_stroke$$102$$.$setAlpha$(this.$_styleMap$.borderHoverAlpha);
  this.$_background$.$setStroke$($alpha$$48_stroke$$102$$);
  var $alpha$$48_stroke$$102$$ = this.$_styleMap$.backgroundHoverAlpha, $fill$$67$$ = this.$_background$.$getFill$().$clone$();
  $fill$$67$$.$setAlpha$($alpha$$48_stroke$$102$$);
  this.$_background$.$setFill$($fill$$67$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderHoverAlpha)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$() {
  var $fill$$68_stroke$$103$$ = this.$_background$.$getStroke$().$clone$();
  $fill$$68_stroke$$103$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($fill$$68_stroke$$103$$);
  $fill$$68_stroke$$103$$ = this.$_background$.$getFill$().$clone$();
  $fill$$68_stroke$$103$$.$setAlpha$(this.$_bgAlpha$);
  this.$_background$.$setFill$($fill$$68_stroke$$103$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha)
};
D.$DvtCollapsiblePanelEvent$$ = function $$DvtCollapsiblePanelEvent$$$($subtype$$9$$) {
  this.Init("dvtCollapsiblePanelEvent");
  this.$_subtype$ = $subtype$$9$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtCollapsiblePanelEvent");
D.$DvtCollapsiblePanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtImageLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtImageLAFUtils$$, D.$DvtObj$$, "DvtImageLAFUtils");
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$553$$, $uri$$20$$) {
  var $image$$19$$ = new D.$DvtImage$$($context$$553$$, $uri$$20$$);
  $image$$19$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$553$$, $uri$$20$$, function($context$$553$$) {
    $context$$553$$ != D.$JSCompiler_alias_NULL$$ && ($context$$553$$.width && $context$$553$$.height) && ($image$$19$$.$setWidth$($context$$553$$.width), $image$$19$$.$setHeight$($context$$553$$.height))
  });
  return $image$$19$$
};
D.$DvtButtonLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtButtonLAFUtils$$, D.$DvtObj$$, "DvtButtonLAFUtils");
D.$DvtButtonLAFUtils$$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_WIDTH$ = 23;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_HEIGHT$ = 21;
D.$DvtButtonLAFUtils$$.$ZOOM_BUTTON_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtButtonLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtButtonLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtButtonLAFUtils$$.$BORDER_COLOR$ = "#7C8191";
D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$ = "#E0E1E1";
D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$ = "#F0F1F2";
D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$ = 8;
D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$ = "solid";
D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ = "#3474D3";
D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$ = "#BFD8FB";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$ = "zoominUp";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$ = "zoominOver";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$ = "zoominDown";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$ = "zoomoutUp";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$ = "zoomoutOver";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$ = "zoomoutDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
D.$DvtButtonLAFUtils$$.$_PAN_ENA$ = "pandialUp";
D.$DvtButtonLAFUtils$$.$_PAN_OVR$ = "pandialOver";
D.$DvtButtonLAFUtils$$.$_PAN_DWN$ = "pandialDown";
D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$ = "recenterUp";
D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$ = "recenterOver";
D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$ = "recenterDown";
D.$DvtButtonLAFUtils$$.$_RESET_ENA$ = "resetUp";
D.$DvtButtonLAFUtils$$.$_RESET_OVR$ = "resetOver";
D.$DvtButtonLAFUtils$$.$_RESET_DWN$ = "resetDown";
D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$ = "drillupUp";
D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$ = "drillupOver";
D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$ = "drillupDown";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$ = "drilldownUp";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$ = "drilldownOver";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$ = "drilldownDown";
D.$DvtButtonLAFUtils$$.$_MAX_ENA$ = "maxUp";
D.$DvtButtonLAFUtils$$.$_MAX_OVR$ = "maxOver";
D.$DvtButtonLAFUtils$$.$_MAX_DWN$ = "maxDown";
D.$DvtButtonLAFUtils$$.$_RESTORE_ENA$ = "restoreUp";
D.$DvtButtonLAFUtils$$.$_RESTORE_OVR$ = "restoreOver";
D.$DvtButtonLAFUtils$$.$_RESTORE_DWN$ = "restoreDown";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$ = "collapseEna";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$ = "collapseOvr";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$ = "collapseDwn";
D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$ = "expandEna";
D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$ = "expandOvr";
D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$ = "expandDwn";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$ = "quickQueryEna";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
D.$DvtButtonLAFUtils$$.$_UP$ = "Up";
D.$DvtButtonLAFUtils$$.$_OVER$ = "Over";
D.$DvtButtonLAFUtils$$.$_DOWN$ = "Down";
D.$DvtButtonLAFUtils$$.$_SEL$ = "Sel";
D.$DvtButtonLAFUtils$$.$_R2L$ = "_r";
D.$DvtButtonLAFUtils$$.$_SYNC$ = "synchronize";
D.$DvtButtonLAFUtils$$.$DIR_RIGHT$ = "right";
D.$DvtButtonLAFUtils$$.$DIR_LEFT$ = "left";
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$522$$, $panZoomCanvas$$14$$, $controls$$3$$, $imageURIs$$3$$, $styleMap$$64$$) {
  var $panButton$$2_panUpState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$522$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_ENA$], $styleMap$$64$$), $panDownState$$ = new D.$DvtContainer$$($context$$522$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$522$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_DWN$], $styleMap$$64$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$522$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$522$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_PAN_OVR$], $styleMap$$64$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton$$2_panUpState$$ = new D.$DvtButton$$($context$$522$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$3$$ & 16)) {
    var $recenterButton$$2$$ = new D.$DvtButton$$($context$$522$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$522$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$], $styleMap$$64$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$522$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$], $styleMap$$64$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$522$$, $imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$], $styleMap$$64$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$2$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$522$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $panZoomCanvas$$14$$, $controls$$3$$, $styleMap$$64$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$523$$, $mapCallback$$, $panZoomCanvas$$15$$, $dis$$3_imageURIs$$4$$, $eventManager$$25$$, $styleMap$$65$$) {
  var $ena$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$523$$, 0, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$65$$), $ovr$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$523$$, 1, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$], $styleMap$$65$$), $dwn$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$523$$, 2, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$], $styleMap$$65$$);
  $dis$$3_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$523$$, 0, $dis$$3_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$65$$);
  return new D.$DvtMapControlButton$$($context$$523$$, new D.$DvtButton$$($context$$523$$, $ena$$9$$, $ovr$$5$$, $dwn$$5$$, $dis$$3_imageURIs$$4$$), $mapCallback$$, $panZoomCanvas$$15$$, 0, $eventManager$$25$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$524$$, $mapCallback$$1$$, $panZoomCanvas$$16$$, $dis$$4_imageURIs$$5$$, $eventManager$$26$$, $styleMap$$66$$) {
  var $ena$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$524$$, 0, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$66$$), $ovr$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$524$$, 1, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$], $styleMap$$66$$), $dwn$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$524$$, 2, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$], $styleMap$$66$$);
  $dis$$4_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$524$$, 0, $dis$$4_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$66$$);
  return new D.$DvtMapControlButton$$($context$$524$$, new D.$DvtButton$$($context$$524$$, $ena$$10$$, $ovr$$6$$, $dwn$$6$$, $dis$$4_imageURIs$$5$$), $mapCallback$$1$$, $panZoomCanvas$$16$$, 1, $eventManager$$26$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$525$$, $mapCallback$$2$$, $panZoomCanvas$$17$$, $dis$$5_imageURIs$$6$$, $eventManager$$27$$, $styleMap$$67$$) {
  var $ena$$11$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$525$$, 0, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$67$$), $ovr$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$525$$, 1, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_OVR$], $styleMap$$67$$), $dwn$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$525$$, 2, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_DWN$], $styleMap$$67$$);
  $dis$$5_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$525$$, 0, $dis$$5_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$67$$);
  return new D.$DvtMapControlButton$$($context$$525$$, new D.$DvtButton$$($context$$525$$, $ena$$11$$, $ovr$$7$$, $dwn$$7$$, $dis$$5_imageURIs$$6$$), $mapCallback$$2$$, $panZoomCanvas$$17$$, 2, $eventManager$$27$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$526$$, $panZoomCanvas$$18$$, $eventManager$$28$$, $dwn$$8_imageURIs$$7$$, $styleMap$$68$$) {
  var $ena$$12$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$526$$, 0, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$], $styleMap$$68$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$526$$, 1, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$], $styleMap$$68$$);
  $dwn$$8_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$526$$, 2, $dwn$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$], $styleMap$$68$$);
  return new D.$DvtZoomToFitButton$$($context$$526$$, new D.$DvtButton$$($context$$526$$, $ena$$12$$, $ovr$$8$$, $dwn$$8_imageURIs$$7$$), $panZoomCanvas$$18$$, $eventManager$$28$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$527$$, $panZoomCanvas$$19$$, $eventManager$$29$$, $dis$$6_imageURIs$$8$$, $styleMap$$69$$) {
  var $ena$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$527$$, 0, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$], $styleMap$$69$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$527$$, 1, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$], $styleMap$$69$$), $dwn$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$527$$, 2, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$], $styleMap$$69$$);
  $dis$$6_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$527$$, 3, $dis$$6_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$], $styleMap$$69$$);
  return new D.$DvtZoomInButton$$($context$$527$$, new D.$DvtButton$$($context$$527$$, $ena$$13$$, $ovr$$9$$, $dwn$$9$$, $dis$$6_imageURIs$$8$$), $panZoomCanvas$$19$$, $eventManager$$29$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$528$$, $panZoomCanvas$$20$$, $eventManager$$30$$, $dis$$7_imageURIs$$9$$, $styleMap$$70$$) {
  var $ena$$14$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$528$$, 0, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$], $styleMap$$70$$), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$528$$, 1, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$], $styleMap$$70$$), $dwn$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$528$$, 2, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$], $styleMap$$70$$);
  $dis$$7_imageURIs$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$528$$, 3, $dis$$7_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$], $styleMap$$70$$);
  return new D.$DvtZoomOutButton$$($context$$528$$, new D.$DvtButton$$($context$$528$$, $ena$$14$$, $ovr$$10$$, $dwn$$10$$, $dis$$7_imageURIs$$9$$), $panZoomCanvas$$20$$, $eventManager$$30$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$529_image$$14$$, $attrb_bname$$4$$, $state$$77$$, $images$$12$$, $styleMap$$71$$) {
  var $r$$77$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$71$$, "buttonRadius", 0), $w$$61$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$71$$, "buttonWidth", 0), $h$$57$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$71$$, "buttonWidth", 0), $shape$$71$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$529_image$$14$$, $r$$77$$, $w$$61$$, $h$$57$$, $styleMap$$71$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$77$$, $shape$$71$$, $w$$61$$, $h$$57$$ + 2 * $r$$77$$, $styleMap$$71$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$4$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$529_image$$14$$, $state$$77$$, $attrb_bname$$4$$);
  ($context$$529_image$$14$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$529_image$$14$$, $images$$12$$[$attrb_bname$$4$$], $w$$61$$, $h$$57$$)) && $shape$$71$$.$addChild$($context$$529_image$$14$$);
  return $shape$$71$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$530$$, $state$$78$$, $attrb$$1_bname$$5$$, $bSel$$) {
  var $r2l$$ = "";
  0 == $state$$78$$ ? $state$$78$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$78$$ ? $state$$78$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$78$$ && ($state$$78$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$ && ($attrb$$1_bname$$5$$ += D.$DvtButtonLAFUtils$$.$_SEL$, (0,D.$DvtAgent$isRightToLeft$$)($context$$530$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$5$$ + ($state$$78$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$531$$, $state$$79$$, $styleMap$$72$$, $images$$13$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$531$$, $state$$79$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$531$$, $state$$79$$, $images$$13$$[$attrb$$2$$], $styleMap$$72$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$3_context$$532$$, $state$$80$$, $ww$$106$$, $hh$$90$$, $styleMap$$73$$) {
  var $r$$78$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$73$$, "buttonRadius", 0);
  $base$$3_context$$532$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$3_context$$532$$, $r$$78$$, $ww$$106$$, $hh$$90$$, $styleMap$$73$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$80$$, $base$$3_context$$532$$, $ww$$106$$, $hh$$90$$ + 2 * $r$$78$$, $styleMap$$73$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$3_context$$532$$
};
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$533$$, $attrb$$3_bname$$6$$, $state$$81$$, $images$$15$$, $styleMap$$74$$) {
  $attrb$$3_bname$$6$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$533$$, $state$$81$$, $attrb$$3_bname$$6$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$533$$, $state$$81$$, $images$$15$$[$attrb$$3_bname$$6$$], $styleMap$$74$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$534$$, $dwn$$11_imageURIs$$10$$, $h$$58$$, $styleMap$$75$$, $dir$$31_ena$$15$$) {
  var $right$$14$$ = $dir$$31_ena$$15$$ == D.$DvtButtonLAFUtils$$.$DIR_RIGHT$;
  $dir$$31_ena$$15$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$534$$, 0, $h$$58$$, $right$$14$$ ? $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$] : $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$], $styleMap$$75$$, $right$$14$$);
  var $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$534$$, 1, $h$$58$$, $right$$14$$ ? $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$] : $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$], $styleMap$$75$$, $right$$14$$);
  $dwn$$11_imageURIs$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$534$$, 2, $h$$58$$, $right$$14$$ ? $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$] : $dwn$$11_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$], $styleMap$$75$$, $right$$14$$);
  return new D.$DvtButton$$($context$$534$$, $dir$$31_ena$$15$$, $ovr$$11$$, $dwn$$11_imageURIs$$10$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$535$$, $dwn$$12_imageURIs$$11$$, $h$$59$$, $styleMap$$76$$, $dir$$32_ena$$16$$) {
  var $right$$15$$ = $dir$$32_ena$$16$$ == D.$DvtButtonLAFUtils$$.$DIR_RIGHT$;
  $dir$$32_ena$$16$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$535$$, 0, $h$$59$$, $right$$15$$ ? $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$] : $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$], $styleMap$$76$$, $right$$15$$);
  var $ovr$$12$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$535$$, 1, $h$$59$$, $right$$15$$ ? $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$] : $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$], $styleMap$$76$$, $right$$15$$);
  $dwn$$12_imageURIs$$11$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$535$$, 2, $h$$59$$, $right$$15$$ ? $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$] : $dwn$$12_imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$], $styleMap$$76$$, $right$$15$$);
  return new D.$DvtButton$$($context$$535$$, $dir$$32_ena$$16$$, $ovr$$12$$, $dwn$$12_imageURIs$$11$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$536$$, $imageURIs$$12$$) {
  var $ena$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$536$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$]), $ovr$$13$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$536$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$]), $dwn$$13$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$536$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$]);
  return new D.$DvtButton$$($context$$536$$, $ena$$17$$, $ovr$$13$$, $dwn$$13$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$537$$, $imageURIs$$13$$) {
  var $ena$$18$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$537$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$]), $ovr$$14$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$537$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$]), $dwn$$14$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$537$$, $imageURIs$$13$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$]);
  return new D.$DvtButton$$($context$$537$$, $ena$$18$$, $ovr$$14$$, $dwn$$14$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$538_image$$15$$, $base$$4_state$$82$$, $uri$$14$$, $styleMap$$77$$) {
  var $w$$62$$, $h$$60$$, $r$$79$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "buttonRadius", 0);
  if("undefined" === $w$$62$$ || $w$$62$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$62$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$60$$ || $h$$60$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$60$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "buttonWidth", 0)
  }
  $base$$4_state$$82$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$538_image$$15$$, $base$$4_state$$82$$, $r$$79$$, $w$$62$$, $h$$60$$, $styleMap$$77$$);
  ($context$$538_image$$15$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$538_image$$15$$, $uri$$14$$, $w$$62$$, $h$$60$$)) && $base$$4_state$$82$$.$addChild$($context$$538_image$$15$$);
  return $base$$4_state$$82$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$539$$, $uri$$15$$, $buttonWidth$$8$$, $buttonHeight$$3$$) {
  var $image$$16$$ = new D.$DvtImage$$($context$$539$$, $uri$$15$$);
  $image$$16$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$539$$, $uri$$15$$, function($context$$539$$) {
    $context$$539$$ != D.$JSCompiler_alias_NULL$$ && ($context$$539$$.width && $context$$539$$.height) && ($image$$16$$.$setWidth$($context$$539$$.width), $image$$16$$.$setHeight$($context$$539$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$16$$, $buttonWidth$$8$$ / 2 - $context$$539$$.width / 2, $buttonHeight$$3$$ / 2 - $context$$539$$.height / 2))
  });
  return $image$$16$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$540_image$$17$$, $uri$$16$$, $styleMap$$78$$) {
  var $mc$$5$$ = new D.$DvtContainer$$($context$$540_image$$17$$), $hitZone$$ = new D.$DvtCircle$$($context$$540_image$$17$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$5$$.$addChild$($hitZone$$);
  ($context$$540_image$$17$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$540_image$$17$$, $uri$$16$$)) && $mc$$5$$.$addChild$($context$$540_image$$17$$);
  return $mc$$5$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$541_image$$18$$, $uri$$17$$, $styleMap$$79$$) {
  var $shape$$74$$ = new D.$DvtContainer$$($context$$541_image$$18$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$541_image$$18$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$74$$.$addChild$($hitZone$$1$$);
  ($context$$541_image$$18$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$541_image$$18$$, $uri$$17$$)) && $shape$$74$$.$addChild$($context$$541_image$$18$$);
  return $shape$$74$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$542_iconLoader$$, $sprite_state$$83$$, $nh$$5$$, $imageW_uri$$18$$, $styleMap$$80$$, $imageH_right$$16$$) {
  $nh$$5$$ || ($nh$$5$$ = 47);
  $sprite_state$$83$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$542_iconLoader$$, $sprite_state$$83$$, $nh$$5$$, $styleMap$$80$$, $imageH_right$$16$$);
  if($context$$542_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$542_iconLoader$$, $imageW_uri$$18$$)) {
    $imageW_uri$$18$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$80$$, "imageWidth", 0), $imageH_right$$16$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$80$$, "imageHeight", 0), $sprite_state$$83$$.$addChild$($context$$542_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$542_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$80$$, "openCloseButtonWidth", 0) - $imageW_uri$$18$$) / 2, ($nh$$5$$ - $imageH_right$$16$$) / 2)
  }
  return $sprite_state$$83$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$543$$, $uri$$19$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$543$$, $uri$$19$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$544$$, $styleMap$$81$$) {
  var $shape$$75$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$544$$), $bgColor$$12$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$55$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$81$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$75$$.$setSolidStroke$($borderColor$$55$$), $shape$$75$$.$setSolidFill$($bgColor$$12$$)) : ($shape$$75$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$55$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$75$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$12$$, $bgColor$$12$$, "#5A83BE", $bgColor$$12$$], [0.9, 0.1, 0, 0.7], 
  [0, 105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
  return $shape$$75$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$545$$, $styleMap$$82$$) {
  var $shape$$76$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$545$$), $color$$83$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$82$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$76$$.$setSolidStroke$($color$$83$$);
  $shape$$76$$.$setSolidFill$($color$$83$$);
  return $shape$$76$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$546$$) {
  var $cmds$$25$$ = D.$DvtPathUtils$$.moveTo(40, 20) + D.$DvtPathUtils$$.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + D.$DvtPathUtils$$.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + D.$DvtPathUtils$$.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + D.$DvtPathUtils$$.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + D.$DvtPathUtils$$.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$546$$, $cmds$$25$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$77$$, $ww$$108$$, $hh$$92$$, $xx$$56$$, $yy$$56$$) {
  $shape$$77$$.$setSolidStroke$("#FFFFFF");
  $shape$$77$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$xx$$56$$, $yy$$56$$, $ww$$108$$, $hh$$92$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$85$$, $shape$$78$$, $ww$$109$$, $hh$$93$$, $styleMap$$83$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$83$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$85$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$78$$) : (1 == $state$$85$$ || 2 == $state$$85$$) && $shape$$78$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$83$$.skin) {
      switch($state$$85$$) {
        case 1:
          $shape$$78$$.$setFill$(new D.$DvtSolidFill$$("#FFFFFF", 0.7));
          $shape$$78$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$83$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        case 2:
          $shape$$78$$.$setFill$(new D.$DvtSolidFill$$("#B3C6DB"));
          $shape$$78$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$83$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        default:
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$78$$)
      }
    }else {
      var $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$;
      switch($state$$85$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$10$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$10$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$78$$, $ww$$109$$, $hh$$93$$, 0, 0);
          $fill_colors$$10$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$10$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$78$$, $ww$$109$$, $hh$$93$$, 0, 0), $fill_colors$$10$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$10$$ = [0.1, 0.3, 0.6], $fill_ratios$$10$$ = [0, 130 / 255, 1]
      }
      $shape$$78$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$, [0, 0, $ww$$109$$, $hh$$93$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$69_state$$86$$, $shape$$79$$, $bgColor$$13_ww$$110$$, $hh$$94$$, $styleMap$$84$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$79$$)
  }else {
    var $borderColor$$56_stroke$$104$$;
    $borderColor$$56_stroke$$104$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$13_ww$$110$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "background-color", D.$JSCompiler_alias_NULL$$);
      var $bgAlpha$$2$$, $strokeAlpha$$2$$;
      switch($fill$$69_state$$86$$) {
        case 0:
          $bgAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "backgroundAlpha", 1);
          $strokeAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          $bgAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "backgroundHoverAlpha", 1), $strokeAlpha$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$84$$, "borderHoverAlpha", 1)
      }
      $fill$$69_state$$86$$ = new D.$DvtSolidFill$$($bgColor$$13_ww$$110$$, $bgAlpha$$2$$);
      $borderColor$$56_stroke$$104$$ = new D.$DvtSolidStroke$$($borderColor$$56_stroke$$104$$, $strokeAlpha$$2$$)
    }else {
      var $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$;
      switch($fill$$69_state$$86$$) {
        case 0:
          $fill_colors$$11$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
          $fill_alphas$$11$$ = [0, 0.2, 0.3];
          $fill_ratios$$11$$ = [0, 130 / 255, 1];
          break;
        case 1:
          $fill_colors$$11$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
          $fill_alphas$$11$$ = [0.1, 0.2, 0.1, 0.6];
          $fill_ratios$$11$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          $fill_colors$$11$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$11$$ = [0.5, 0.2, 0.4], $fill_ratios$$11$$ = [0, 130 / 255, 1]
      }
      $fill$$69_state$$86$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$, [0, 0, $bgColor$$13_ww$$110$$, $hh$$94$$]);
      $borderColor$$56_stroke$$104$$ = new D.$DvtSolidStroke$$($borderColor$$56_stroke$$104$$, 1, 0.8)
    }
    $shape$$79$$.$setStroke$($borderColor$$56_stroke$$104$$);
    $shape$$79$$.$setFill$($fill$$69_state$$86$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$87$$, $shape$$80$$, $ww$$111$$, $hh$$95$$, $xx$$59$$, $yy$$59$$) {
  var $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$;
  switch($state$$87$$) {
    case 0:
      $shape$$80$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$12$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$80$$, $ww$$111$$, $hh$$95$$, $xx$$59$$, $yy$$59$$);
      $fill_colors$$12$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$12$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$80$$, $ww$$111$$, $hh$$95$$, $xx$$59$$, $yy$$59$$), $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$12$$ = [0.6, 0.5, 0.8], $fill_ratios$$12$$ = [0, 130 / 255, 1]
  }
  $shape$$80$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$, [$xx$$59$$, $yy$$59$$, $ww$$111$$, $hh$$95$$]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$10$$, $buttonHeight$$4$$, $r$$82$$, $right$$17$$) {
  return $right$$17$$ ? ["M", $buttonWidth$$10$$, 0, "L", $r$$82$$, 0, "A", $r$$82$$, $r$$82$$, 0, 0, 0, 0, $r$$82$$, "L", 0, $buttonHeight$$4$$ - $r$$82$$, "A", $r$$82$$, $r$$82$$, 0, 0, 0, $r$$82$$, $buttonHeight$$4$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$] : ["M", 0, 0, "L", $buttonWidth$$10$$ - $r$$82$$, 0, "A", $r$$82$$, $r$$82$$, 0, 0, 1, $buttonWidth$$10$$, $r$$82$$, "L", $buttonWidth$$10$$, $buttonHeight$$4$$ - $r$$82$$, "A", $r$$82$$, $r$$82$$, 0, 0, 1, $buttonWidth$$10$$ - $r$$82$$, 
  $buttonHeight$$4$$, "L", 0, $buttonHeight$$4$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$548_shape$$81$$, $state$$88$$, $buttonHeight$$5_nh$$6$$, $styleMap$$85$$, $right$$18$$) {
  $buttonHeight$$5_nh$$6$$ || ($buttonHeight$$5_nh$$6$$ = 47);
  var $r$$83$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "border-radius", 0)), $buttonWidth$$11$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "openCloseButtonWidth", 0);
  $buttonHeight$$5_nh$$6$$ = window.Math.max($buttonHeight$$5_nh$$6$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$85$$, "buttonHeight", $buttonHeight$$5_nh$$6$$));
  $context$$548_shape$$81$$ = new D.$DvtPath$$($context$$548_shape$$81$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $r$$83$$, $right$$18$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$88$$, $context$$548_shape$$81$$, $buttonWidth$$11$$, $buttonHeight$$5_nh$$6$$, $styleMap$$85$$);
  return $context$$548_shape$$81$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$549_shape$$82$$, $state$$89$$, $r$$84$$, $ww$$112$$, $hh$$96$$, $styleMap$$86$$) {
  $context$$549_shape$$82$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$549_shape$$82$$, $r$$84$$, $ww$$112$$, $hh$$96$$, $styleMap$$86$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$89$$, $context$$549_shape$$82$$, $ww$$112$$, $hh$$96$$ + 2 * $r$$84$$, $styleMap$$86$$);
  return $context$$549_shape$$82$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$550$$, $r$$85$$, $ww$$113$$, $hh$$97$$, $styleMap$$87_x$$256$$) {
  if("skyros" == $styleMap$$87_x$$256$$.skin) {
    return new D.$DvtRect$$($context$$550$$, 0, 0, $ww$$113$$, $hh$$97$$)
  }
  $ww$$113$$ -= 2 * $r$$85$$;
  $hh$$97$$ -= 2 * $r$$85$$;
  $styleMap$$87_x$$256$$ = $ww$$113$$ + $r$$85$$;
  var $y$$231$$ = $hh$$97$$ + $r$$85$$, $cmds$$26$$ = D.$DvtPathUtils$$.moveTo($styleMap$$87_x$$256$$ + $r$$85$$, $y$$231$$) + D.$DvtPathUtils$$.$quadTo$($r$$85$$ + $styleMap$$87_x$$256$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$231$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$87_x$$256$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$231$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$87_x$$256$$, $r$$85$$ + $y$$231$$, $styleMap$$87_x$$256$$, 
  $r$$85$$ + $y$$231$$) + D.$DvtPathUtils$$.lineTo($styleMap$$87_x$$256$$, $y$$231$$ + $r$$85$$) + D.$DvtPathUtils$$.lineTo($styleMap$$87_x$$256$$ - $ww$$113$$, $r$$85$$ + $y$$231$$);
  $styleMap$$87_x$$256$$ -= $ww$$113$$;
  $cmds$$26$$ += D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$87_x$$256$$, $r$$85$$ + $y$$231$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$87_x$$256$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$231$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$85$$ + $styleMap$$87_x$$256$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$231$$, -$r$$85$$ + $styleMap$$87_x$$256$$, $y$$231$$) + D.$DvtPathUtils$$.lineTo($styleMap$$87_x$$256$$ - $r$$85$$, $y$$231$$) + 
  D.$DvtPathUtils$$.lineTo($styleMap$$87_x$$256$$ - $r$$85$$, $y$$231$$ - $hh$$97$$);
  $y$$231$$ -= $hh$$97$$;
  $cmds$$26$$ += D.$DvtPathUtils$$.$quadTo$(-$r$$85$$ + $styleMap$$87_x$$256$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$231$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$87_x$$256$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$231$$) + D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$87_x$$256$$, -$r$$85$$ + $y$$231$$, $styleMap$$87_x$$256$$, -$r$$85$$ + $y$$231$$) + D.$DvtPathUtils$$.lineTo($styleMap$$87_x$$256$$, -$r$$85$$ + 
  $y$$231$$) + D.$DvtPathUtils$$.lineTo($styleMap$$87_x$$256$$ + $ww$$113$$, -$r$$85$$ + $y$$231$$);
  $styleMap$$87_x$$256$$ += $ww$$113$$;
  $cmds$$26$$ += D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $styleMap$$87_x$$256$$, -$r$$85$$ + $y$$231$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $styleMap$$87_x$$256$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$85$$ + $y$$231$$) + D.$DvtPathUtils$$.$quadTo$($r$$85$$ + $styleMap$$87_x$$256$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$85$$ + $y$$231$$, $r$$85$$ + $styleMap$$87_x$$256$$, $y$$231$$) + D.$DvtPathUtils$$.lineTo($styleMap$$87_x$$256$$ + $r$$85$$, $y$$231$$ + 
  $hh$$97$$) + D.$DvtPathUtils$$.closePath();
  return new D.$DvtPath$$($context$$550$$, $cmds$$26$$)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$551$$, $ww$$114$$, $hh$$98$$, $r$$86_styleMap$$88$$) {
  $r$$86_styleMap$$88$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$86_styleMap$$88$$, "radius", 0);
  $ww$$114$$ -= 2 * $r$$86_styleMap$$88$$;
  $hh$$98$$ -= $r$$86_styleMap$$88$$;
  var $x$$257$$ = $ww$$114$$ + $r$$86_styleMap$$88$$, $y$$232$$ = $hh$$98$$, $cmds$$27$$ = D.$DvtPathUtils$$.moveTo($x$$257$$ + $r$$86_styleMap$$88$$, $y$$232$$) + D.$DvtPathUtils$$.$quadTo$($r$$86_styleMap$$88$$ + $x$$257$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$86_styleMap$$88$$ + $y$$232$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$86_styleMap$$88$$ + $x$$257$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$86_styleMap$$88$$ + $y$$232$$) + D.$DvtPathUtils$$.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * 
  $r$$86_styleMap$$88$$ + $x$$257$$, $r$$86_styleMap$$88$$ + $y$$232$$, $x$$257$$, $r$$86_styleMap$$88$$ + $y$$232$$) + D.$DvtPathUtils$$.lineTo($x$$257$$, $r$$86_styleMap$$88$$ + $y$$232$$) + D.$DvtPathUtils$$.lineTo($x$$257$$ - $ww$$114$$, $r$$86_styleMap$$88$$ + $y$$232$$), $x$$257$$ = $x$$257$$ - $ww$$114$$, $cmds$$27$$ = $cmds$$27$$ + (D.$DvtPathUtils$$.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$86_styleMap$$88$$ + $x$$257$$, $r$$86_styleMap$$88$$ + $y$$232$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * 
  $r$$86_styleMap$$88$$ + $x$$257$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$86_styleMap$$88$$ + $y$$232$$) + D.$DvtPathUtils$$.$quadTo$(-$r$$86_styleMap$$88$$ + $x$$257$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$86_styleMap$$88$$ + $y$$232$$, -$r$$86_styleMap$$88$$ + $x$$257$$, $y$$232$$) + D.$DvtPathUtils$$.lineTo(-$r$$86_styleMap$$88$$ + $x$$257$$, $y$$232$$) + D.$DvtPathUtils$$.lineTo(-$r$$86_styleMap$$88$$ + $x$$257$$, $y$$232$$ - $hh$$98$$)), $y$$232$$ = $y$$232$$ - $hh$$98$$, $cmds$$27$$ = 
  $cmds$$27$$ + (D.$DvtPathUtils$$.lineTo($x$$257$$ + $ww$$114$$ + $r$$86_styleMap$$88$$, $y$$232$$) + D.$DvtPathUtils$$.lineTo($x$$257$$ + $ww$$114$$ + $r$$86_styleMap$$88$$, $y$$232$$ + $hh$$98$$) + D.$DvtPathUtils$$.closePath());
  return new D.$DvtPath$$($context$$551$$, $cmds$$27$$)
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$552$$, $obj$$322$$) {
  $obj$$322$$ instanceof D.$DvtButton$$ && ($obj$$322$$ = $obj$$322$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$getDimForced$$)($context$$552$$, $obj$$322$$)
};
D.$DvtButtonLAFUtils$$.$parseStyle$ = function $$DvtButtonLAFUtils$$$$parseStyle$$($dispObj$$33$$, $buttonStyle$$29$$) {
  var $fillType$$12_linearGradient$$4$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$, $borderColor$$57_stroke$$105$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$, $backgroundColor$$24$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, $background$$13$$;
  $buttonStyle$$29$$ && ($buttonStyle$$29$$.$getStyle$("fill-type") && ($fillType$$12_linearGradient$$4$$ = $buttonStyle$$29$$.$getStyle$("fill-type")), $buttonStyle$$29$$.$getStyle$("border-color") && ($borderColor$$57_stroke$$105$$ = $buttonStyle$$29$$.$getStyle$("border-color")), $buttonStyle$$29$$.$getStyle$("background-color") && ($backgroundColor$$24$$ = $buttonStyle$$29$$.$getStyle$("background-color")), $buttonStyle$$29$$.$getStyle$("background") && ($background$$13$$ = $buttonStyle$$29$$.$getStyle$("background")));
  var $borderColor$$57_stroke$$105$$ = new D.$DvtSolidStroke$$($borderColor$$57_stroke$$105$$), $fill$$70_fill_colors$$13_midColor$$11$$;
  if("solid" == $fillType$$12_linearGradient$$4$$) {
    $fill$$70_fill_colors$$13_midColor$$11$$ = new D.$DvtSolidFill$$($backgroundColor$$24$$)
  }else {
    var $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$, $degree$$3$$;
    if($background$$13$$ && 0 <= $background$$13$$.indexOf("linear-gradient")) {
      if($fillType$$12_linearGradient$$4$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($background$$13$$)) {
        $degree$$3$$ = $fillType$$12_linearGradient$$4$$.$getAngle$(), $fill$$70_fill_colors$$13_midColor$$11$$ = $fillType$$12_linearGradient$$4$$.$_arColors$, $endColor$$16_fill_alphas$$13$$ = $fillType$$12_linearGradient$$4$$.$_arAlphas$, $fill_ratios$$13$$ = $fillType$$12_linearGradient$$4$$.$_arRatios$
      }
    }else {
      $fill$$70_fill_colors$$13_midColor$$11$$ = $backgroundColor$$24$$, $endColor$$16_fill_alphas$$13$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$70_fill_colors$$13_midColor$$11$$ != D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ && ($endColor$$16_fill_alphas$$13$$ = D.$DvtColorUtils$$.$inferColor$(D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$70_fill_colors$$13_midColor$$11$$)), $fill$$70_fill_colors$$13_midColor$$11$$ = [$fill$$70_fill_colors$$13_midColor$$11$$, 
      $endColor$$16_fill_alphas$$13$$], $endColor$$16_fill_alphas$$13$$ = [0.6, 0.8], $fill_ratios$$13$$ = [0, 1], $degree$$3$$ = -270
    }
    $fill$$70_fill_colors$$13_midColor$$11$$ = new D.$DvtLinearGradientFill$$($degree$$3$$, $fill$$70_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$)
  }
  $dispObj$$33$$.$setFill$($fill$$70_fill_colors$$13_midColor$$11$$);
  $dispObj$$33$$.$setStroke$($borderColor$$57_stroke$$105$$)
};

  return D;
});