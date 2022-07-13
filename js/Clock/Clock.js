// #!/usr/bin/env node

"use strict";

function printFunction() {
    if (typeof document === "undefined") {
        if (typeof print === "function") { return (aString) => { print(aString); }; } 
        else { return (aString) => { console.log(aString); }; }
    } else {
        return (aString) => {
            document.FormOfClock.FieldOfClock.value = aString;
            let ticktack = 1000 - ((new Date()).getTime() % 1000);
            window.setTimeout("clock()", ticktack);
        };
    }
}

function clock() 
{
    let aDate = new Date();
    let aString = "YYYY/MM/DD hh:mm:ss";

    let yearString = (aDate.getFullYear()).toString();
    let monthString = ("0" + (aDate.getMonth() + 1).toString()).slice(-2);
    let dateString = ("0" + (aDate.getDate()).toString()).slice(-2);

    aString = aString.replace(/YYYY/, yearString);
    aString = aString.replace(/MM/, monthString);
    aString = aString.replace(/DD/, dateString);

    let hourString = ("0" + (aDate.getHours()).toString()).slice(-2);
    let minuteString = ("0" + (aDate.getMinutes()).toString()).slice(-2);
    let secondString = ("0" + (aDate.getSeconds()).toString()).slice(-2);

    aString = aString.replace(/hh/, hourString);
    aString = aString.replace(/mm/, minuteString);
    aString = aString.replace(/ss/, secondString);

    printFunction()(aString);

    return null;

}

if (typeof document === "undefined") {
    clock();
}