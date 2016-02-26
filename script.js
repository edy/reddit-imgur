var titles = document.querySelectorAll('a.title');

for (var i = 0; i < titles.length; i++) {
	var id = getId(titles[i].href);

	if (id && isVideo(titles[i].href)) {
		titles[i].parentElement.innerHTML = titles[i].parentElement.innerHTML + '<p><video autoplay loop><source src="https://i.imgur.com/'+id+'.webm" type="video/webm"><source src="https://i.imgur.com/'+id+'.mp4" type="video/mp4"></video></p>';
	} else if (id) {
		titles[i].parentElement.innerHTML = titles[i].parentElement.innerHTML + '<p><img src="https://i.imgur.com/'+id+'l.jpg" class="imgurImage"></p>';
	}
}

function isVideo (uri) {
	if (uri) {
		var match = uri.match(/.gifv$/);
		if (match !== null) {
			return true;
		}
	}

	return false;
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
