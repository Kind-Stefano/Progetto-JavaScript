"# Counter Project" 

Un semplice contatore web che permette di incrementare e decrementare un numero visualizzato.

## Struttura del Progetto

- `index.html`: Contiene il markup HTML per la struttura della pagina.
- `assets/css/index.css`: Contiene gli stili CSS per la pagina (personalizzabili).
- `assets/script/index.js`: Contiene il codice JavaScript che gestisce il conteggio.

## Funzionalità

- **Aumenta**: Premendo il pulsante `+`, il contatore aumenta di 1.
- **Diminuisci**: Premendo il pulsante `-`, il contatore diminuisce di 1.

## Utilizzo

1. Apri il file `index.html` in un browser.
2. Clicca sui pulsanti `+` e `-` per vedere il numero cambiare.

## Requisiti

- Un browser moderno con supporto per JavaScript.

## Esempio di codice

### HTML

```html
<h2>Contiamo!</h2>
<div>
  <button id="aumenta">+</button>
  <button id="riduci">-</button>
</div>
<h2 id="counterDisplay">0</h2>