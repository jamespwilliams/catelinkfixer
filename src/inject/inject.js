chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		
		var disablerFunction = function () {
		    clickpage = function clickpage(msg) {};
		};
		
		var disablerCode = "(" + disablerFunction.toString() + ")();";
		var disablerScriptElement = document.createElement('script');
		disablerScriptElement.textContent = disablerCode;

		document.documentElement.appendChild(disablerScriptElement);
		disablerScriptElement.parentNode.removeChild(disablerScriptElement);
				
		elems = document.getElementsByTagName('a');
		
		for (elem of elems) {
			if (elem.title != "") {
				elem.href = elem.title;
			}
		}
	}
	}, 10);
});