window.onload = function(){
    var slider_val = document.getElementById("slider").value;
    console.log(slider_val);
};

//List CSS controls
function listToSquare(){
    document.getElementById("list").style.listStyleType = "square";
    listDisplayStyle("square");
    
}

function listToCircle(){
    document.getElementById("list").style.listStyleType = "circle";
    listDisplayStyle("circle");
}

function listToDisc(){
    document.getElementById("list").style.listStyleType = "disc";
    listDisplayStyle("disc");
}

function listDisplayStyle(newStyle){
    document.getElementById("list-style").innerHTML = "list-style-type:" + newStyle + ";";
}


//Border CSS controls
var slider_val;
function getSliderVal(){
    slider_val = document.getElementById("slider").value;
    console.log("Test");
    return slider_val;
}

var current_style = "solid";
function changeCurrentStyle(newType){
    current_style = newType;
}

function getCurrentStyle(){
    return current_style;
}


function updateBorder(){
    var slider_val = getSliderVal();
    document.getElementById("border-test").style.border = slider_val + "px " + getCurrentStyle() + " black";
    document.getElementById("slider-val").innerHTML = slider_val + "px";
    changeBorderCode();
}

function borderToSolid(){
    changeCurrentStyle("solid");
    document.getElementById("border-test").style.border = getSliderVal() + "px " + getCurrentStyle() + " black";
    changeBorderCode();
}

function borderToDotted(){
    changeCurrentStyle("dotted");
    document.getElementById("border-test").style.border = getSliderVal() + "px " + getCurrentStyle() + " black";
    changeBorderCode();
}

function borderToDashed(){
    changeCurrentStyle("dashed");
    document.getElementById("border-test").style.border = getSliderVal() + "px " + getCurrentStyle() + " black";
    changeBorderCode();
}

function borderToDouble(){
    changeCurrentStyle("double");
    document.getElementById("border-test").style.border = getSliderVal() + "px " + getCurrentStyle() + " black";
    changeBorderCode();
}

function changeBorderCode(){
    document.getElementById("border-code").innerHTML = "border: " + getSliderVal() + "px " + getCurrentStyle() + " black;";
}

var margin_val;
function getMarginValue(){
    margin_val = document.getElementById("m-slider").value;
    
    return margin_val;
}

var padding_val;
function getPaddingValue(){
    padding_val = document.getElementById("p-slider").value;
    
    return padding_val;
}

var unit = "px";
function unitToPercent(){
    unit = "%";
    changeMargin();
    changePadding();
}

function unitToPx(){
    unit = "px";
    changeMargin();
    changePadding();
}

function unitToEm(){
    unit = "em";
    changeMargin();
    changePadding();
}

function changeMarginVal(){
    document.getElementById("margin-val").innerHTML = " " + getMarginValue() + unit;
    changeMPText();
}

function changePaddingVal(){
    document.getElementById("padding-val").innerHTML = " " +getPaddingValue() + unit;
    changeMPText();
}

function changeMargin(){
    document.getElementById("mp-test").style.margin = getMarginValue() + unit;
    changeMarginVal();
}

function changePadding(){
    document.getElementById("mp-test").style.padding = getPaddingValue() + unit;
    changePaddingVal();
}

function copy_text(){
    var textValue = document.getElementById("list-style").innerHTML;

    navigator.clipboard.writeText(textValue).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });

    console.log(textValue);
}

function clickFunction(){
    console.log("test!");
}

function changeMPText(){
    document.getElementById("mp-code").innerHTML = "margin:" + getMarginValue() + unit + ";" + " padding:" + getPaddingValue() + unit + ";";
}

var currentAlignment;
function textAlignLeft(){
    currentAlignment = "left";
    updateAlignText();
    document.getElementById("text-align-para").style.textAlign = currentAlignment;
}

function textAlignRight(){
    currentAlignment = "right";
    updateAlignText();
    document.getElementById("text-align-para").style.textAlign = "right";
}

function textAlignCenter(){
    currentAlignment = "center";
    updateAlignText();
    document.getElementById("text-align-para").style.textAlign = "center";
}

function updateAlignText(){
    document.getElementById("text-align-code").innerHTML = "text-align:" + currentAlignment + ";";
}

var currentColor;

function getColorValue(){
    return document.getElementById("color-box").value;
}
function adjustColor(){
    var color = getColorValue();
    document.getElementById("color-tester").style.color = color;

    syncColorPicker(color);
}

function getBGColorValue(){
    return document.getElementById("BG-color-box").value;
}

function adjustBGColor(){
    var color = getBGColorValue();
    document.getElementById("color-tester").style.backgroundColor = color;

    syncBGColorPicker(color);
}

function getColorPickerVal(){
    return document.getElementById("favcolor").value;
}

function getColorPickerBGVal(){
    return document.getElementById("favcolorBG").value;
}

function adjustText(){
    document.getElementById("color-box").value = getColorPickerVal();
    adjustColor();
}

function adjustBGText(){
    document.getElementById("BG-color-box").value = getColorPickerBGVal();
    adjustBGColor();
}

function syncColorPicker(color){
    document.getElementById("favcolor").value = color;
}

function syncBGColorPicker(color){
    document.getElementById("favcolorBG").value = color;
}






