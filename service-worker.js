chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      console.log("Extension button clicked!");
      alert("Hello from your Chrome Extension!");
    }
  });
});