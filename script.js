var titles = document.querySelectorAll('a.title');

for (var i = 0; i < titles.length; i++) {
	var id = getId(titles[i].href);
	if (id) {
		titles[i].parentElement.innerHTML = titles[i].parentElement.innerHTML + '<p><img src="https://i.imgur.com/'+id+'.jpg" class="imgurImage"></p>';
	}
}

function getId (uri) {
	if (uri) {
		var match = uri.match(/https?:\/\/(?:i\.imgur\.com\/(\S*?)\.(?:\S+)|imgur\.com\/(\S+\/)?(\S*))/);
		if (match !== null) {
			if (match[1]) {
				return match[1];
			} else if (!match[2] && match[3]) {
				return match[3];
			}
		}
	}
	
	return null;
}
