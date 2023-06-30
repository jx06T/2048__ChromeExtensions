let contextID = 0;
console.log("jx00");

chrome.input.ime.onActivate.addListener(() => {
  console.log("onActivate");
});

chrome.input.ime.onDeactivated.addListener(() => {
  console.log("onDeactivated");
});

chrome.input.ime.onFocus.addListener((context) => {
  console.log("onFocus");
  contextID = context.contextID;
});

chrome.input.ime.onBlur.addListener(() => {
  console.log("onBlur");
  contextID = 0;
})

chrome.input.ime.onKeyEvent.addListener((engineID, keyData) =>{
  const handled = false;

  if (keyData.type == "keyup") return handled;
  
  console.log("alt=" + keyData.altKey + ",ctrl=" + keyData.ctrlKey + ",shift=" + keyData.shiftKey);
  console.log("code=" + keyData.code + ",key=[" + keyData.key + "]");

  return handled;
});

chrome.action.onClicked.addListener((tab) => {
  const keyData = {
    ctrlKey: true,
    code: "KeyV",
    key: "V",
    type: "keydown"
  };

  chrome.input.ime.sendKeyEvents({
    contextID : contextID,
    keyData :[keyData]
  });
});