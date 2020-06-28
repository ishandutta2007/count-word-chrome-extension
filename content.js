chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	const re = new RegExp(request.toLowerCase());//, 'gi')
	const matches = document.documentElement.innerHTML.toLowerCase().match(re) || 0
	// chrome.runtime.sendMessage({
	//   url: window.location.href,
	//   count: matches.length
	// });
	sendResponse(matches.length);
});