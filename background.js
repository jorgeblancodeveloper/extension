chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message == "hello")
      sendResponse({"farewell": "goodbye"});
  });