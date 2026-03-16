Kursmaterial TP Processing (p5js) Sommersemester 2026 Kursdokumentation TP Processing TH&#124;W–S FB Gestaltung

## 27.3.2026 – Einfache Formen und Farben
- [TP_1](https://einraum-design.github.io/tp_processing_SoSe2026/TP_1/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_1/sketch.js)


### Kommentare  
werden vom Compiler ignoriert:
```
// one line comment
```

``` 
/* block comment 
 long 
 comment 
 to 
 explane
 something  
or to 
ignore 
a longer
part of 
the application */
```


### Sketchgröße

Die Fenstergröße einer Anwendung mit der createCanvas() Funktion definiert.
Der erste Parameter ist die Skechtbreite, der zweite die Höhe. Alle Größen- und Positionsangaben sind Pixelmaße.
```
createCanvas(800, 600);
```
  
Die createCanvas Function wird bin bestimmte Fällen noch mit einem dritten Parameter aufgerufen.
zB. Wenn der Sketch ein PDF erstellt, eine 3D Szene gezeigt oder ein performanterer Renderer genutzt werden soll.



### Shapes

Die Rechtecks Funktion kann mit 
- 4 Parametern: xPosition, yPosition, width, height
- 5 Parametern: xPosition, yPosition, width, height, cornerRadius
- 8 Parametern: xPosition, yPosition, width, height, cornerRadius1, cornerRadius2, cornerRadius3, cornerRadius4
aufgerufen werden.


Standartmäßig wird das Rechteck von der linken oberen Ecke als Referenzpunkt gezeichnet.

Über den rectMode() lässt sich das aber auch auf Zeichnen von der Mitte aus umstellen.

```
rectMode(CENTER); // alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
rectMode(CORNER); // (Processing default)alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Über den ellipseMode() lässt sich das aber auch auf Zeichnen von der linken oberen Ecke aus umstellen.

```
ellipseMode(CENTER); // (Processing default) alle Rechtecke nach dem Aufruf werden von der Rechtecks Mitte aus
ellipseMode(CORNER); // alle Rechtecke nach dem Aufruf werden von der linken oberen Ecke aus gezeichnet
```

Wechsel vom ellipseMode / rectMode wirkt sich immer auf die nach dem Aufruf gezeichneten Formen aus.


Hinweis zu arc():
Die Winkel von Start und Ende vom Bogen werden nicht in Grad sondern in Bogenmaß erwartet. 
Ihr könnt euch mit der Funktion radians(GRADZAHL) eine Gradzahl in Bogenmaß umrechnen lassen.
```
// arc (xPosition, yPosition, breite, höhe, Startwinkel, Endwinkel, Zeichentyp)  
arc(300, 300, 400, 400, radians(45), radians(360-45), PIE);
```


Colors
Standardeinstellung von Processing ist, dass alle Formen mit einer weißen Füllfarbe und schwarzer Kontur mit 1px Strichstärke gezeichnet werden.

Um eigene Farbe für Formen festzulegen gibt es die fill und stroke Funktionen.
Standartmäßig nutzt Processing das RGB Farbsystem und erwartet Zahlen im 8Bit Bereich als Farbwerte: 0 - 255
(Ihr könnt den Zahlenbereich und auch das Farbsystem mit der coloMode() Funktion umstellen.)

fill() und stroke() können mit 
- 1 Parameter aufgerufen werden: Grauwert - schwarz bis weiß - 0 - 255
- 3 Parametern: rotwert, grünwert, blauwert -> je 0 - 255
- 4 Parametern: rotwert, grünwert, blauwert, alpha -> je 0 - 255. Alpha definiert die Transparenz.

fill() und stroke() müssen jeweils bevor eine Form gezeichnet wird festgelegt werden. Nach einem Aufruf werden alle Formen in diesen Farben gezeichnet, bis fill() oder stroke() mit neuen Werten aufgerufen werden.

Mit noFill() und noStroke() kann auch keine Füllfarb oder keine Kontur festgelegt werden.

