import * as React from "react";

import 'wired-elements';

import {ClassAttributes} from "react";

import {ReactNode} from "react";

type WIRED_ELEMENT_LIST =
    'wired-button' |
    'wired-card' |
    'wired-checkbox' |
    'wired-combo' |
    'wired-icon-button' |
    'wired-input' |
    'wired-item' |
    'wired-listbox' |
    'wired-progress' |
    'wired-radio' |
    'wired-radio-group' |
    'wired-slider' |
    'wired-textarea' |
    'wired-toggle' |
    'wired-tooltip'
    ;


const wiredComponentCreator = <P>(element: WIRED_ELEMENT_LIST) => (props: P & { children?: ReactNode } & { [key: string]: any }) => React.createElement<ClassAttributes<P>>(
    element,
    props,
    props.children
);

export const WiredCard = wiredComponentCreator<{ elevation?: number }>('wired-card');

export const WiredCombo = wiredComponentCreator<{ value?: object, selected?: string, disabled?: boolean }>('wired-combo');

export const WiredItem = wiredComponentCreator<{ text: string, value: string }>('wired-item');

export const WiredInput = wiredComponentCreator<{
    placeholder?: string,
    name?: string,
    disabled?: boolean,
    type?: string,
    required?: boolean,
    autocomplete?: string,
    autofocus?: boolean,
    minlength?: number,
    maxlength?: number,
    min?: string,
    max?: string,
    step?: string,
    readonly?: boolean,
    size?: number,
    autocapitalize?: string,
    autocorrect?: string,
    value?: string
}>('wired-input');

export const WiredButton = wiredComponentCreator<{ elevation?: number, disabled?: boolean }>('wired-button');

export const WiredCheckbox = wiredComponentCreator<{ checked?: boolean, text?: string, disabled?: boolean }>('wired-checkbox');

export const WiredIconButton = wiredComponentCreator<{ disabled?: boolean }>('wired-icon-button');

export const WiredListbox = wiredComponentCreator<{ value?: object, selected?: boolean, horizontal?: boolean }>('wired-listbox');

export const WiredProgress = wiredComponentCreator<{ value?: number, min?: number, max?: number, percentage?: boolean }>('wired-progress');

export const WiredRadio = wiredComponentCreator<{ checked?: boolean, name?: string, text?: string, iconsize?: number, disabled?: boolean }>('wired-radio');

export const WiredRadioGroup = wiredComponentCreator<{ selected?: string }>('wired-radio-group');

export const WiredSlider = wiredComponentCreator<{ value?: number, min?: number, max?: number, knobradius?: number, disabled?: boolean }>('wired-slider');

export const WiredTextarea = wiredComponentCreator<{
    rows?: number,
    maxrows?: number,
    autocomplete?: string,
    autofocus?: boolean,
    inputmode?: string,
    placeholder?: string,
    readonly?: boolean,
    required?: boolean,
    minlength?: number,
    maxlength?: number,
    disabled?: boolean
}>('wired-textarea');

export const WiredToggle = wiredComponentCreator<{ checked?: boolean, disabled?: boolean }>('wired-toggle');

export const WiredTooltip = wiredComponentCreator<{for?: string, position?: string, text?: string, offset?: number}>('wired-tooltip');
