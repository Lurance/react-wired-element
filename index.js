import * as React from "react";
import 'wired-elements';
var wiredComponentCreator = function (element) { return function (props) { return React.createElement(element, props, props.children); }; };
export var WiredCard = wiredComponentCreator('wired-card');
export var WiredCombo = wiredComponentCreator('wired-combo');
export var WiredItem = wiredComponentCreator('wired-item');
export var WiredInput = wiredComponentCreator('wired-input');
export var WiredButton = wiredComponentCreator('wired-button');
export var WiredCheckbox = wiredComponentCreator('wired-checkbox');
export var WiredIconButton = wiredComponentCreator('wired-icon-button');
export var WiredListbox = wiredComponentCreator('wired-listbox');
export var WiredProgress = wiredComponentCreator('wired-progress');
export var WiredRadio = wiredComponentCreator('wired-radio');
export var WiredRadioGroup = wiredComponentCreator('wired-radio-group');
export var WiredSlider = wiredComponentCreator('wired-slider');
export var WiredTextarea = wiredComponentCreator('wired-textarea');
export var WiredToggle = wiredComponentCreator('wired-toggle');
export var WiredTooltip = wiredComponentCreator('wired-tooltip');
//# sourceMappingURL=index.js.map