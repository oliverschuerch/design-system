import { loadTranslations } from '@angular/localize';

const I18N_VALUES = {
  de: {
    'ngb.alert.close': 'Schließen',
    'ngb.carousel.slide-number': ' Folie {$INTERPOLATION} von {$INTERPOLATION_1} ',
    'ngb.carousel.previous': 'Vorherige',
    'ngb.carousel.next': 'Nächste',
    'ngb.datepicker.select-year': 'Jahr auswählen',
    'ngb.datepicker.select-month': 'Monat auswählen',
    'ngb.datepicker.previous-month': 'Vorheriger Monat',
    'ngb.datepicker.next-month': 'Nächster Monat',
    'ngb.pagination.first-aria': 'Erster',
    'ngb.pagination.previous-aria': 'Vorheriger',
    'ngb.pagination.next-aria': 'Nächster',
    'ngb.pagination.last-aria': 'Letzter',
    'ngb.timepicker.hours': 'Stunden',
    'ngb.timepicker.increment-hours': 'Stunden erhöhen',
    'ngb.timepicker.decrement-hours': 'Stunden verringern',
    'ngb.timepicker.minutes': 'Minuten',
    'ngb.timepicker.increment-minutes': 'Minuten erhöhen',
    'ngb.timepicker.decrement-minutes': 'Minuten verringern',
    'ngb.timepicker.seconds': 'Sekunden',
    'ngb.timepicker.increment-seconds': 'Sekunden erhöhen',
    'ngb.timepicker.decrement-seconds': 'Sekunden verringern',
  },
  fr: {
    'ngb.alert.close': 'Fermer',
    'ngb.carousel.slide-number': 'Diapositive {$INTERPOLATION} sur {$INTERPOLATION_1}',
    'ngb.carousel.previous': 'Précédente',
    'ngb.carousel.next': 'Suivante',
    'ngb.datepicker.select-year': "Sélectionner l'année",
    'ngb.datepicker.select-month': 'Sélectionner le mois',
    'ngb.datepicker.previous-month': 'Mois précédent',
    'ngb.datepicker.next-month': 'Mois suivant',
    'ngb.pagination.first-aria': 'Premier',
    'ngb.pagination.previous-aria': 'Précédent',
    'ngb.pagination.next-aria': 'Suivant',
    'ngb.pagination.last-aria': 'Dernier',
    'ngb.timepicker.hours': 'Heures',
    'ngb.timepicker.increment-hours': 'Augmenter les heures',
    'ngb.timepicker.decrement-hours': 'Diminuer les heures',
    'ngb.timepicker.minutes': 'Minutes',
    'ngb.timepicker.increment-minutes': 'Augmenter les minutes',
    'ngb.timepicker.decrement-minutes': 'Diminuer les minutes',
    'ngb.timepicker.seconds': 'Secondes',
    'ngb.timepicker.increment-seconds': 'Augmenter les secondes',
    'ngb.timepicker.decrement-seconds': 'Diminuer les secondes',
  },
  it: {
    'ngb.alert.close': 'Chiudi',
    'ngb.carousel.slide-number': 'Diapositiva {$INTERPOLATION} di {$INTERPOLATION_1}',
    'ngb.carousel.previous': 'Precedente',
    'ngb.carousel.next': 'Successiva',
    'ngb.datepicker.select-year': "Seleziona l'anno",
    'ngb.datepicker.select-month': 'Seleziona il mese',
    'ngb.datepicker.previous-month': 'Mese precedente',
    'ngb.datepicker.next-month': 'Mese successivo',
    'ngb.pagination.first-aria': 'Primo',
    'ngb.pagination.previous-aria': 'Precedente',
    'ngb.pagination.next-aria': 'Successivo',
    'ngb.pagination.last-aria': 'Ultimo',
    'ngb.timepicker.hours': 'Ore',
    'ngb.timepicker.increment-hours': 'Aumenta le ore',
    'ngb.timepicker.decrement-hours': 'Diminuisci le ore',
    'ngb.timepicker.minutes': 'Minuti',
    'ngb.timepicker.increment-minutes': 'Aumenta i minuti',
    'ngb.timepicker.decrement-minutes': 'Diminuisci i minuti',
    'ngb.timepicker.seconds': 'Secondi',
    'ngb.timepicker.increment-seconds': 'Aumenta i secondi',
    'ngb.timepicker.decrement-seconds': 'Diminuisci i secondi',
  },
  en: {
    'ngb.alert.close': 'Close',
    'ngb.carousel.slide-number': 'Slide {$INTERPOLATION} of {$INTERPOLATION_1}',
    'ngb.carousel.previous': 'Previous',
    'ngb.carousel.next': 'Next',
    'ngb.datepicker.select-year': 'Select Year',
    'ngb.datepicker.select-month': 'Select Month',
    'ngb.datepicker.previous-month': 'Previous Month',
    'ngb.datepicker.next-month': 'Next Month',
    'ngb.pagination.first-aria': 'First',
    'ngb.pagination.previous-aria': 'Previous',
    'ngb.pagination.next-aria': 'Next',
    'ngb.pagination.last-aria': 'Last',
    'ngb.timepicker.hours': 'Hours',
    'ngb.timepicker.increment-hours': 'Increment Hours',
    'ngb.timepicker.decrement-hours': 'Decrement Hours',
    'ngb.timepicker.minutes': 'Minutes',
    'ngb.timepicker.increment-minutes': 'Increment Minutes',
    'ngb.timepicker.decrement-minutes': 'Decrement Minutes',
    'ngb.timepicker.seconds': 'Seconds',
    'ngb.timepicker.increment-seconds': 'Increment Seconds',
    'ngb.timepicker.decrement-seconds': 'Decrement Seconds',
  },
};

// use this function where your application's locale is initialized
loadTranslations(I18N_VALUES[localeId]);
