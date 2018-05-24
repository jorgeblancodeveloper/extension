

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  
});


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.message == "hello")
      sendResponse({"farewell": "goodbye"});
  });