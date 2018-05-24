document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem("plantilla")) {
        localStorage.setItem("plantilla", document.getElementById("plantilla").value);
    } else {
        document.getElementById("plantilla").value = localStorage.getItem("plantilla");
    }
    console.log("listo");
    $("#bot").on("click", function() {
        console.log("pincho");
        var plantilla = document.getElementById("plantilla").value;
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
             console.log("pincho2");
            chrome.tabs.sendMessage(tabs[0].id, {
                "texto": plantilla
            }, function(response) {
                console.log(response);
                window.close();
            });
        });

    });
             $("#save").on("click", function() {
            console.log("guardo");
            localStorage.setItem("plantilla", document.getElementById("plantilla").value);
        });
});
