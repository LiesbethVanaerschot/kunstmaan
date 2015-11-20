# Kunstmaan
## Kunstmaan test: Foto gallerij op basis van API.

## Gebruikte Gulp modules

1. gulp-sass
2. gulp-autoprefixer
3. browser-sync
4. gulp-minify-css
5. gulp-concat
6. gulp-uglify

Eerst alles uitgedokterd en dan met aparte gulp taken geminified/uglified.

## Gebruikte Bower components

1. normalize-css

Standaard browser CSS overschrijven.

## API & CORS

Ik had nog nooit gehoord van CORS, Cross-origin resource sharing en dat het er ging voor zorgen dat ik niet zomaar de data van de API kon binnenhalen.
Hoe ik het begrepen heb, lag het probleem bij de server waar de API vandaan kwam. Deze had niet de juiste headers ingesteld waardoor de data niet binnengehaald kon worden.

**Error** : XMLHttpRequest cannot load http://www.gahetna.nl/beeldbank-api/opensearch/?q=2.24.09. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'localhost:3000' is therefore not allowed access.

Ik heb vanalles geprobeerd om dit op te lossen:

1. config toegevoegd aan de Angular app
2. headers module geactiveerd in WAMP + headers daar ook toegevoegd 
3. .htaccess toegevoegd met headers
4. De opdracht op mijn domein gezet om te zien of dit lag aan het feit dat ik werkte op een WAMP-server
5.  Chrome add-on 'Allow-Control-Allow-Origin: *' toegevoegd aan chrome.

**Het laatste deed alles werken.** Maar het werkte wel enkel in Chrome...
Ik was dit nog nooit tegen gekomen en ik weet nog steeds niet hoe dit proper opgelost kan worden.

## Angular app

**1. Factory**
Basic Angular Factory die de API binnenhaalt.

**2. Controller**
Controller die de data omzet in JSON en in de photo scope steekt.
In de controller zitten ook twee functies die met ng-click getriggerd worden.

**3. ngAnimate**
Heb een kleine animatie gemaakt met ngAnimate om de overlay te tonen en laten verdwijnen.

**4. Masonry grid**
Angular masonry directive gebruikt voor de foto's mooi in een grid te tonen en te laten animeren wanneer browser window vergroot of verkleind.

##Sass
Sass gebruikt om alles te stijlen. Geen framework gebruikt deze keer.
Wel enkele variabelen, functies en mixins er ingestoken.

##Responsive + browsercompatibiliteit
Ik heb de responsiveness wel niet echt kunnen testen net zoals browsercompatibiliteit aangezien ik het enkel kan 
bekijken in chrome met de add-on geactiveerd. Had hiervoor wel een xip.io ingesteld om het op alle toestellen hier op mijn thuisnetwerk te kunnen testen.

**Alsjeblieft!**