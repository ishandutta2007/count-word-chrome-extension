document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false);
  let word = "Ishan";
  function onclick () {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, word, displayCount);
    })
  }
  function displayCount(res) {
  	const div = document.createElement('div');
  	div.textContent = `${word} : ${res}`;
  	document.body.appendChild(div);
  }
}, false)
