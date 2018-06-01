var templates = [{
    name: "Goodwork",
    value: "Good work, # !!!"
}, {
    name: "Allright",
    value: "Todo correcto, # !!"
}, ]
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem("plantillas")) {
        localStorage.setItem("plantillas", JSON.stringify(templates));
    } else {
        var temp = localStorage.getItem("plantillas")
        templates = JSON.parse(temp);
    }
    populateSelect(templates);
    document.getElementById("plantilla").value = templates[0].value;
if (localStorage.getItem("sel_index")) {
      $("#select").prop('selectedIndex',Number(localStorage.getItem("sel_index")));
        setTimeout(function() {
                   document.getElementById("plantilla").value = templates[$("#select").prop('selectedIndex')].value;
                   }, 15);
    } 
    $("#plantilla").keypress(function() {
        $("body").addClass("edit");
        $(".edit #save").on("click", function() {
            templates[$("#select").prop('selectedIndex')].value = document.getElementById("plantilla").value;
            localStorage.setItem("plantillas", JSON.stringify(templates));
            $("body").removeClass()
        });
    })

   $("#select").change(function() {
    localStorage.setItem("sel_index", $("#select").prop('selectedIndex'));
        if ($("#select").prop('selectedIndex') == ($('#select > option').length - 1)) {
            document.getElementById("plantilla").value = "";
            $("body").addClass("new");
            $(".new #save").on("click", function() {
                templates.push({
                    name: document.getElementById("name").value,
                    value: document.getElementById("plantilla").value
                });
                setTimeout(function() { populateSelect(templates)}, 10);
                setTimeout(function() { document.getElementById("select").options.selectedIndex = $('#select > option').length - 2 }, 14);
                $("body").removeClass();
                setTimeout(function() {
                   document.getElementById("plantilla").value = templates[$("#select").prop('selectedIndex')].value;
                   }, 15);
            });
            return
        };
        $("body").removeClass();
        document.getElementById("plantilla").value = templates[$("#select").prop('selectedIndex')].value;
    })
 $("#close").on("click", function() {
     window.close();
 })

    $("#remove").on("click", function() {
        templates.splice($("#select").prop('selectedIndex'), 1);
        setTimeout(function() {
            populateSelect(templates)
        }, 10);
        $("body").addClass("remove");
        $(".remove #save").on("click", function() {
            localStorage.setItem("plantillas", JSON.stringify(templates));
            $("body").removeClass();
        });
    })

$("#fill").on("click", function() {
        var plantilla = document.getElementById("plantilla").value;
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                "texto": plantilla
            }, function(response) {
             window.close();
            });
        });
    });
});


function populateSelect(optionsData) {
    var arr = [];
    for (var i in optionsData) {
        arr.push(optionsData[i].name);
    }
    arr.push("Nueva");
    select = document.getElementById('select');
    var add = "";
    var options = select.options,
        o, selected;
    options.length = 0;
    for (var i = 0, len = arr.length; i < len; ++i) {
        add = ""
        o = arr[i];
        selected = !!o.selected;
        options[i] = new Option(o + add, o, selected, selected);
    }
    document.getElementById("plantilla").value = templates[0].value;
}

