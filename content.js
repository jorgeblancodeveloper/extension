
var el, del, selection, elChild, mel;
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
            console.log("recibo");
fill(request.texto);
    }
);

function fill(plant){
             selection = $("[aria-label='Message Body']").text();
             $("[aria-label='Message Body']").text("");
             var res = plant.replace(/#/g, selection);  
             $("[aria-label='Message Body']").text(res);
}
