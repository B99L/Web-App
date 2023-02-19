# Web-App
Diese Readme Datei beinhaltet Informationen zum Projekt im Kurs "DS: Software Projects 3" im Hs 2022.
Autoren des Projektes und dieser Datei sind Bader Eddin Loukil und Nevio Roccia. 

### Zip Ordner Struktur:

Der Zip Ordner besteht aus einem "server" und einem "Daten" Ordner. Im Daten Ordner, finden sie einerseits
die Rohdaten, welche wir von OpenStreetMap heruntergeladen haben, andererseits das Jupyter Notebook File
wo die Prozessierung der Daten gemacht wurde. 
Im server Ordner gibt es zwei Unterordner. Im "templates" Ordner ist das template für die Website drin,
sprich das Html File. Der static Ordner hat einerseits das css file und Bilder für die Website drin, 
andererseits einen weiteren Ordner "javascript", in dem alle Javascript Dateien drin sind. 

### Projektziele

Ziel dieses Projektes war das Erstellen einer Website, die Statistiken zu Daten von "OSM" aka 
"OpenStreetMap", eines open source Kartenanbieters, darzustellen. In einem ersten Schritt schrieben 
wir eine User-Story, also ein framework, das uns vorgab in welche Richtung wir gehen möchten mit unserer
Website. Unsere User Story lautete folgendermassen: "Als Kunde möchte ich ein Tool besitzen um mir 
Informationen zu Restaurants aus der Schweiz, anzeigen zu lassen. Zusätzlich möchte ich über verschieden 
Grafiken neues Wissen aus diesen Informationen schöpfen, wie zum Beispiel welcher Kanton die meisten 
Restaurants besitzt etc. Der Inhalt und die Anzahl an Visualisierungen sind den Entwicklern überlassen. 
Die Website soll als einfach zu gebrauchendes Werkzeug für Besucher der Firma aus dem Ausland fungieren."
Diese User Story mussten wir während dem Bearbeiten des Projektes jedoch anpassen auf unseren momentanen 
Stand und unsere Fähigkeiten. Die erste Änderung, die wir vornahmen, war das Ergänzen der Datenbank mit Cafés,
Bars, Fast Food Läden und BBQ Lokalen. Die zweite Änderung war, dass wir uns als zweite Visualisierung für 
ein Review System entschieden haben, was unserer Meinung nach besser zu einem reellen Use Case passt. 
Die erste Funktionalität, die wir implementierten, ist ein Graph, welcher nach Eingabe einer Postleitzahl 
angibt, wie viele verschiedene Lokale zu einem gegebenen Lokaltyp an dieser Postleitzahl vertreten sind.
Also wie viele Cafés, Restaurants, Bars, Fastfood oder BBQ Läden. Verknüpft damit gibt die Website eine 
tabellarische Übersicht zu Bewertungen dieser Lokale. Zusätzlich können User aus dieser Tabelle Lokale wählen 
und eine eigene Bewertung hinterlassen, welche in die Datenbank aufgenommen wird. 

### Code Übersicht

Der Code besteht aus 6 verschiedenen Scripts. Folgend werden diese aufgelistet und beschrieben:

#### Flask.py

Das erste Script ist das "Flask.py" Script. Es dient zum Handling der Datenbank-Funktionalitäten und stellt 
die Kommunikationsschnittstelle zwischen front end und back end dar.

#### index.html

Das Html script beinhaltet, alle html spezifischen Codes. Die Javascript-Teile haben wir in separate 
Javascript Files gepackt, damit es übersichtlich bleibt. Darin findet man den Code zum Erstellen der Buttons und 
statischem Text/Bilder auf der Website.

#### b.css

Das css File beinhaltet code zur Gestaltung der Elemente auf der Website. Darin befindet sich code zur Textformatierung,
Farben verschiedener Elemente etc.

#### index.js/review.js/reviewTable.js

Die 3 Javascript Teile handeln die Generierung der Visualisierungen. Im index.js File wird der erste Graph erstellt.
Im review.js File werden die Bewertungen der users aus der Bewertungsbox geholt und in die Datenbank geschrieben.
Im reviewTable.js File wird die Tabelle für die Bewertungen generiert.


### Daten
Die genutzten Daten wurden wie bereits erwähnt von OpenStreetMap heruntergeladen und anschliessend prozessiert mit
Jupyter Notebook. Die Rohdaten finden Sie in der zip Datei im Ordner "Daten" unter osm-output.json. 

### Bibliotheken

Die Bibliotheken, mit dene wir gearbeitet haben sind "json", "flask" und "pymongo".
Json ist eine Pythonbibliothek für das Arbeiten mit json Files.
Flask ist eine Bibliothek fürs Erstellen von Web apps.
Pymongo ist eine Bibliothek für das Arbeiten mit der MongoDB-Datenbank. 

### UI
Hier ein paar Screenshots des UI der Website:
![img.png](img.png)
![img_1.png](img_1.png)
![img_2.png](img_2.png)
![img_3.png](img_3.png)

