# react-wired-element

## How to Use

```bash
npm i react-wired-element
```
And in your JavaScript or TypeScript file:

```javascript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {WiredCard, WiredCombo, WiredInput,
    WiredItem, WiredButton, WiredCheckbox,
    WiredIconButton, WiredListbox, WiredProgress,
    WiredRadio, WiredRadioGroup, WiredSlider,
    WiredTextarea, WiredToggle} from "react-wired-element";

ReactDOM.render(
    <section>
        <WiredCard elevation={5}>
            <h1>Test</h1>
            <br /><br />
            <WiredCombo selected="A">
                <WiredItem text="A" value="A" />
                <WiredItem text="B" value="B" />
            </WiredCombo>
            <br /><br />
            <WiredInput placeholder="input" />
            <br /><br />
            <WiredButton>
                WiredButton
            </WiredButton>
            <br /><br />
            <WiredCheckbox text="checkbox one"/>
            <WiredCheckbox text="checkbox two" checked={true}/>
            <br /><br />
            <WiredIconButton>home</WiredIconButton>
            <br /><br />
            <WiredListbox>
                <WiredItem text="A" value="A" />
                <WiredItem text="B" value="B" />
            </WiredListbox>
            <br /><br />
            <WiredProgress value={10} min={5} max={15}/>
            <br /><br />
            <WiredRadioGroup selected="three">
                <WiredRadio text="Radio One" name="one" />
                <WiredRadio text="Radio disabled" disabled={true} name="two"/>
                <WiredRadio text="Radio Three" name="three"/>
            </WiredRadioGroup>
            <br /><br />
            <WiredSlider knobradius={15} value={10} min={5} max={15} />
            <br /><br />
            <WiredTextarea placeholder="Enter text" rows={4} />
            <br /><br />
            ZH&nbsp;&nbsp;<WiredToggle />&nbsp;&nbsp;EN
            <br /><br />
            <WiredButton>Hi</WiredButton>
        </WiredCard>
    </section>
, document.getElementById('root'));
```

## Notice

> * This package support TypeScript by Itself. You didn't need to install type define. So as you can see, this package is very good for TypeScript support.


> * This package is based on wired-element, and support React. Any question or issue you may have to visit wired-element.

## Demo

![demo1](https://raw.githubusercontent.com/Lurance/Sammy/master/demo/demo1.png)

