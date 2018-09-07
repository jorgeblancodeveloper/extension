chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        fill(request.texto);
    }
);

function fill(plant) {

    var mitext = window.getSelection()
    var res = plant.replace(/#/g, mitext);
    var sel, range;
    sel = window.getSelection();
    if (document.activeElement.tagName == "TEXTAREA") {
        $(document.activeElement).val(res);
    } else {
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(res));
        }
    }
}