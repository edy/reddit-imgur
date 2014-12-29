CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
FILES = icon.png manifest.json script.js style.css
DEST = build

all: crx zip
	
zip: *
	-mkdir -p $(DEST)
	-cp $(FILES) $(DEST)
	zip -r $(DEST).zip $(DEST)

crx: *
	-mkdir -p $(DEST)
	-cp $(FILES) $(DEST)
	$(CHROME) --pack-extension=$(DEST) --pack-extension-key=reddit-imgur.pem --no-message-box

clean:
	-rm -rf $(DEST) $(DEST).*

.PHONY: clean
