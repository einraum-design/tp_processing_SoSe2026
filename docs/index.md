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


## 27.3.2026 Grundstruktur setup & draw. Systemvariablen
[TP_2](https://einraum-design.github.io/tp_processing_SoSe2026/TP_2/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_2/sketch.js)


### function setup & draw

```
function setup(){

}

function draw(){

}
```
Die beiden Funktionen sind das Grundgerüst jeder Processing Anwendung.
Alles was im Funktionsrumpf der function setup() – zwische den geschweiften Klammern steht – wird zum Programmstart einmal ausgeführt. Hier werden alles Grundeinstellungen für das Programm gesetzt und das Canvas Elemet erstellt.

```
createCanvas(600, 400);

```

Nach Ablauf der function setup() wird der Inhalt der function draw() ausgeführt. 
Alles was in der function draw() steht wird immer wieder auf's Neue ausgeführt – standartmäßig 60 Mal pro Sekunde. 
Die function draw() beginnt meistens mit der background function, die alles aus dem vorherigen Frame übermalt und für jeden neuen Frame eine neue Zeichenfläche bereitstellt.

### Processing Variablen

Processing bietet mehrere Variablen die von Processing vordefiniert sind.
Diese könne einfach als Platzhalter im Skript eingesetzt werden und werden während der Laufzeit 
des Programmes mit den aktuellen Werten ersetzt.

mouseX -> Maus x - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
mouseY -> Maus y - Position innerhalb vom Sketch  Zahlenwert Ganzzahlen (Integer)
width ->  Sketchbreite Zahlenwert Ganzzahlen (Integer)
height -> Sketchhöhe Zahlenwert Ganzzahlen (Integer)


width und height sollten verwendet werden, um Positionen von graphischen Elementen in der Anwendung unabhängig von der Fenstergröße zu berechnen.

frameCount -> Zähler der nach jedem function draw Druchgang hochgezählt wird.  Zahlenwert Ganzzahlen (Integer)


## 10.4.2026 Variablentypen & start if-Bedingungen
- [TP 3](https://einraum-design.github.io/tp_processing_SoSe2026/TP_3/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_3/sketch.js)

***elementaren Variablen***
- Ganzzahlen Integers int --> 1, 3, 34, -23
- Fließkommazahlen FloatingPointNumbers float --> 0.234, 123.234, 1.0, -234.234
- Boolean bool --> true / false
- Character char --> 'a', 'b', ' ', '+', '\'' (escapen von sonderzeichen über \Sonderzeichen)

***Objekte***
- Textkette String --> "Hello World", " ", "8ohasdf"
- p5.image (PImage) Bilder
- p5.font (PFont) Schriften

Variablen Definition in den meisten Programmiersprachen
```
// Typ variablenNamen ( = Wert);
int alter = 18;
```

Variabeln Definition in javascript (also auch p5js)
```
let myXPos = 40.0;
let myYPos = 60;
let xSpeed, ySpeed;
```

if-Bedingungen 
Mit if-Bedinungen lassen sich ein Programm steuern. 
Über Bedingungen lässt sich steuern, welche Programmteile ausgeführt werden.

```
// if-Bedingungen
// if(CONDITION) { wenn CONDITION erfüllt ist, wird alles im Rumpf (zwischen den {}) ausgeführt}
if(mouseX > 300){
    ellipse(mouseX, mouseY, 50, 50);
}
```

## 17.4.2026 if-Bedingungen
- [TP 4](https://einraum-design.github.io/tp_processing_SoSe2026/TP_4/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_4/sketch.js)

Um Bedingungen mit Zahlenwerten zu formulieren gibt es ***Vergleichsoperatoren***
- A > B  --> wenn A größer als B ist
- A < B  --> wenn A kleiner als B ist
- A >= B --> wenn A größer oder gleich B ist
- A <= B --> wenn A kleiner oder gleich B ist
- A == B --> wenn der Wert von A gleich B ist
- A === B --> wenn der Wert von A gleich B ist und der Typ von A und B gleich ist
- A != B --> wenn der Wert von A nicht gleich B ist


Um mehrere Bedingung miteinander zu verbinden gibt es ***Verknüpfungsoperatoren***
- CONDITION_A && CONDITION_B --> Wenn Bedingung A UND Bedingung B erfüllt sind
- CONDITION_A &#124;&#124; CONDITION_B --> Wenn Bedingung A ODER Bedingung B (oder beide) erfüllt sind


## 24.4.2026 if-Bedingungen + Transformationen
- [TP 5](https://einraum-design.github.io/tp_processing_SoSe2026/TP_5/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_5/sketch.js)

### If - else
Jeder if-Bedingung kann ein else Block angehängt werden. 
Ist die Bedingung nicht erfüllt, wird der else-Block ausgeführt.

```
if(mouseIsPressed) {
    // wenn Maus gedrückt ist Füllfarbe rot
    fill(255, 0, 0);
} else {
    // ansonsten Füllfarbe weiß
    fill(255);
}
```

Zusätzlich können noch mehrere "else if" Blöcke an eine if-Bedingung angehängt werden.
Dann werden die Bedingungen der Reihe nach gecheckt, bis eine Bedingung erfüllt ist.
Sobald eine erfüllt ist, werden alle weitern "else if" und die "else" einfach übersprungen.
Es wird also immer nur ein Block ausgeführt.

```

if(CONDITION1) {
    // ist die erste Bedingung erfüllt wird der erste Block ausgeführt und alles weiteren Abfragen werden übersprungen
} else if(CONDITION2) {
    // ist die zweite Bedingung erfüllt wird der zweite Block ausgeführt und alles weiteren Abfragen werden übersprungen
} ...
else {
    // wenn alle Bedingungen nicht erfüllt waren, wird der else Block ausgeführt
}
```

## Event Listener

Soll ein Zähler je Mausklick oder Tastendruck – je Event (zB. Click) um eins hochgezählt werden, muss beachtet werden, dass der Wechsel nicht innerhalb der void draw mehrfach ausgeführt wird.
Deshalb gibt es Event Händler, die auf bestimmte Events hin jeweils einmal ausgeführt werden. Diese stehen außerhalb der function setup() und der function draw().
```
// wird in dem Moment aufgerufen, wenn die Maustaste gedrückt wird.
void mousePressed() {
    // der Inhalt im Funktionsrumpf wird pro Maustraste drücken einmal ausgeführt.
}

void mouseReleased() {
    // der Inhalt im Funktionsrumpf wird pro Maustaste loslassen einmal ausgeführt.
}

void keyPressed() {
    // der Inhalt im Funktionsrumpf wird je Tastendruck einmal ausgeführt.
}
```

Weiter Eventhandler für Maus- und TastaturEvents sind in der Referenz zu finden.

### Die random-Funktion
Die Random Funktion git bei jedem Aufruf eine neue zufällige Zahl zurück.
```
random(400); // gibt eine Zahl zwischen 0 und 400 zurück
random(200, 400); // gibt eine Zahl zwischen 200 und 400 zurück
```

## Transformationen (verschieben / drehen / skalieren)
- [TP 6](https://einraum-design.github.io/tp_processing_SoSe2026/TP_6/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_6/sketch.js)

Um Zeichenelemente im Processing Sketch zu bewegen, gibt es einige Transformations Tools.

Transformationen werden immer vom Nullpunkt des Koordinatensystems ausgeführt.
Zu Beginn der void draw ist das Koordinatensystem immer in der linken oberen Ecke.
Wird ein rotate(float Winkel) Befehl ausgeführt wird also alles um diese Ecke rotiert. 

Um um einen anderen Mittelpunkt rotieren zu können, muss zuerst das Zeichenkoordinatensystem 
an den gewünschten Mittelpunkt verschoben werden.
Die geschieht über den translate(float x, float y) Befehl. Translate kann das Zeichenkoordinatensystem
in x und y Richtung verschieben.

Als drittes Transformationstool gibt es den scale(float x, float y) Befehl. 
Dieser Skaliert das Koordinatensystem. Scale funktioniert mit positiven wie auch negativen Werten. Damit lassen sich Inhalte auch spiegeln. 

Es können beliebig viele Transformationen hintereinander ausgeführt werden. 
Jede Verschiebung und Rotation wird aber auf die vorherigen aufaddiert!
Wenn das Koordinatensystem mit rotate() verdreht wurde und anschließend wieder 
ein translate ausgeführt wird, wird das Koordinatensystem in die rotierte Richtung verschoben.

Bei jedem Neustart der void draw() wird das Koordinatensystem wieder auf das Standart Koordinatensystem zurück gesetzt.

Das Zeichenkoordiantensystem lässt sich innerhalb der void draw wieder auf Standartposition, Rotation und Skalierung zurücksetzen:

```
 resetMatrix();
```

Mit den Funktionen push() und pop() lassen sich (mit push()) Zwischenstände der Transformationsmatrix zwischenspeichern und (mit pop()) wieder auf den Zustand zurücksetzen. 
Wichtig: Jeder Zwischenspeicher mit push() muss wieder mit einem Aufruf von pop() aufgelöst werden. 

## 8.5.2026 Transformationen Erweiterung, map funktion, Objekte
- [TP 7](https://einraum-design.github.io/tp_processing_SoSe2026/TP_7/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_7/sketch.js)
- [TP 8](https://einraum-design.github.io/tp_processing_SoSe2026/TP_8/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_8/sketch.js)

## 15.5.2026 Arrays, while-loop
- [TP 9](https://einraum-design.github.io/tp_processing_SoSe2026/TP_9/index.html) [(--> Code)](https://github.com/einraum-design/tp_processing_SoSe2026/blob/main/docs/TP_9/sketch.js)

### Arrays
Bisher hatten wir Variablen in der Form kennengelernt, dass in jede Variable ein Wert gespeichert wird. 
Um viele Werte unter einem Variablennamen speichern zu können verwendet man Arrays. Bei einem Array können viele Werte wie in einem Regal mit vielen Fächern abgelegt werden. Jeder Wert kann über einen Index (Zahl von 0 - n) als Schlüssel angesprochen werden.
Arrays werden über eckige Klammern gekennzeichnet:

```
 let myArray = [];
```

Arrays mit Werten initialisieren:
```
 let namesArray = ["Andres", "Tina", "Philipp"];
```
Der Zugriff auf die Werte erfolg über die den Index in den eckigen Klammern:
```
 let myArray[0] = "hello"; // wert "hello" an der Stelle 0 im Array
```
Bei Arrays kann man über das Attribut **length** abrufen, wie viele Werte in dem Array aktuell enthalten sind.
Mit der Methode **.push()** lassen sich neue Werte an das Array hinten anhängen.


### Objekte
Objekte sind noch etwas allgemeiner gefasst. Hier sind die Schlüssel, um auf die einzelnen Werte von dem Objekt zugreifen zu können nicht festgelegt auf durchnummerierte Zahlen, sondern können jeder Begriff sein.
Objekt werden über die geschweiften Klammern definiert:

```
 let myObject = {};
```
Schlüssel - Wert - Paare lassen sich einfach über den Punkt-Operator hinzufügen:
```
 let myObject = {}
 myObject.name = "Otto";
 myObject.alter = 43;

 // oder über den Schlüssel als String ("") in eckigen Klammern hinzufügen:
 myObject["sex"] = "male";
```


## Wiederhol-Schleifen
Um Funktionen mehrfach auszuführen, gibt es unterschiedliche Schleifen Konstrukte (while-loop, do-while-loop, for-loop und for-each-loop).

### WHILE-LOOP:
Die while loop ist von der Syntax am einfachsten aufgebaut. 
```
  while (CONDITION) {
    /* do something - Schleifenrumpf */
  }
```
Die Bedingung wird überprüft - wenn die Bedingung true ist, wird der Schleifenrumpf ausgeführt.
Anschließend wird die Bedingung erneut überprüft und der Schleifenrumpf erneut ausgeführt etc.
Ist die Bedingung nicht erfüllt, wird die Wiederholung unterbrochen und das Programm nach der Schleife fortgesetzt.

