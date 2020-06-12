# Probearbeit-Frontend-SevDesk
Saskia Schlingensief, 12.06.2020

Die Single-Page-Applikation wurde mit einer Bootstrap Vorlage erstellt.
Gefunden wurde sie unter folgender Seite: https://startbootstrap.com/themes/sb-admin-2/
		
Aktueller Stand der Applikation:
- Die Applikation zeigt den Verkaufs- bzw. Einkaufspreis von Bitcoins in verschiedenen Währungen an (USD, EUR, AUD, RUB).
- Bitcoin Details sind zu sehen zu folgenden Daten: Marktkapitalisierung, Anzahl aller Bitcoins im Umlauf, Anzahl Transaktionen (letzte 24h), Anzahl gesendeter Bitcoins (letzte 24h), Aktuelle Hashrate und Aktueller Schwierigkeitsgrad
- Eine Umrechnung in Bitcoins wird durchgeführt und angezeigt für folgende Beträge in EUR: 25, 100, 2000, 50000
- Ein Bitcoin Diagramm wird angezeigt zu den Transaktionen pro Sekunde.
		
Von mir erstellter / bearbeiteter Code:
- index.html (erweiterte Bootstrap Vorlage)
- js/myScript.js (Requests an blockchain.com)
- js/chart.js (Code zur Anzeige des Diagramms)
- blockchain_data.py (Request an blockchain.com, um die Daten für das Diagramm zu erhalten)
		

Anmerkungen:
Die Daten für das Diagramm werden in einem externen Python-Programm per Request angefordert und extrahiert (blockchain_data.py).
Dieses Programm ist nicht mit der eigentlichen Anwendung verbunden, sondern speichert die Daten (x/y) lediglich in zwei Dateien innerhalb einer JavaScript-Variablen ab. Diese wurden aus den Dateien nach chart.js kopiert, damit das Diagramm angezeigt werden. Zur möglichen Einbindung in das Programm siehe unten ("Mögliche Erweiterungen", 2.).
		

Mögliche Erweiterungen:

1. Bitcoin-Umrechnung: Eine Drop-Down-Liste erlaubt es dem Nutzer selbstständig eine Währung für die Umrechnung auszuwählen. In einem Textfeld kann der Nutzer einen eigenen Betrag eingeben, der dann nach dem Klick auf einen Submit-Button in Bitcoins umgerechnet und angezeigt wird.
		
2. Das Python-Programm wird so eingebunden, sodass beim Laden der Seite immer aktuelle Daten im Diagramm zu sehen sind. (beim Laden der Seite wird ein Request abgeschickt und die anzuzeigenden Daten empfangen)
		
3. Eine neue View "Meine Bitcoin" erlaubt es dem Nutzer seinen Bitcoin-Bestand einzupflegen (mittels HTML-Formular). Die Daten werden in einer Datenbank gespeichert und immer korrekt abgerufen und dargestellt.
