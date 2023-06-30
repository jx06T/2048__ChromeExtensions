let intervalId;

chrome.runtime.onInstalled.addListener(() => {
  startSimulatingKeys();
});

function startSimulatingKeys() {
  intervalId = setInterval(simulateKeys, 500);
}

function stopSimulatingKeys() {
  clearInterval(intervalId);
}

function simulateKeys() {
  // 模擬按下上鍵
  chrome.input.ime.sendKeyEvents({
    contextID: 0,
    keyData: [{ code: "ArrowUp", type: "keydown" }]
  }, () => {});

 
}