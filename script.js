'use strict'

let produkt = prompt('Bitte wählen Sie ein Produkt:');

switch (produkt) {
    case "Bohrmaschine":
      alert("Preis: 35€");
      break;
    case "Schraubendreher":
      alert("Preis: 6€");
      break;
    case "Stichsäge":
      alert("Preis: 60€");
      break;
    default:
      alert("Das Produkt ist nicht im Sortiment vorhanden!");
      break;
}