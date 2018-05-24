
var el, del, selection, elChild, mel;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
dale(request.texto);
    }
);

function dale(plant){
            selection =  window.getSelection().toString() ;
            console.log(selection)
             var res = plant.replace(/#/g, selection);  
            deselectAll();
            el = document.querySelector(".ams.bkH");
            el.click();
            setTimeout(function() {
                del = document.querySelector('.Am.aO9.Al.editable.LW-avf');
                elChild = document.createElement('div');
                elChild.innerHTML = res + '!!!';
                del.appendChild(elChild);
            }, 600);
            setTimeout(function() {
                mel = document.querySelector(".T-I.J-J5-Ji.aoO.T-I-atl.L3");
                mel.click();
            }, 800);
}

function deselectAll() {
    var element = document.activeElement;
    if (element && /INPUT|TEXTAREA/i.test(element.tagName)) {
        if ('selectionStart' in element) {
            element.selectionEnd = element.selectionStart;
        }
        element.blur();
    }
    if (window.getSelection) { // All browsers, except IE <=8
        window.getSelection().removeAllRanges();
    } else if (document.selection) { // IE <=8
        document.selection.empty();
    }
}