async function sayHello() {
    let [tab] = await chrome.tabs.query({ active: true});
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: () => alert('Hello from the Chrome extension!')
    });
}
document.getElementById('myButton').addEventListener('click', sayHello);