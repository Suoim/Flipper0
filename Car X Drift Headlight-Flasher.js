let badusb = require("badusb");

// Konfiguration für das HID-Device (USB Keyboard) einrichten
badusb.setup({
    vid: 0xAAAA,                     // Vendor ID
    pid: 0xBBBB,                     // Product ID
    mfr_name: "Flipper",             // Herstellername
    prod_name: "Zero",               // Produktname
    layout: "/ext/badusb/assets/layouts/de-DE.kl" // Layout-Pfad (Auf Flipper)
});

while (true) {
    badusb.hold("n");                // "N"-Taste gedrückt halten
    delay(350);                      // für x,x Milli/Sekunden
    badusb.release("n");             // "N"-Taste loslassen
    delay(20);                     // x Milli/Sekunden warten
}

// Am Ende aufräumen, falls die Schleife jemals verlassen wird
badusb.quit();                        // USB-Port zurücksetzen
