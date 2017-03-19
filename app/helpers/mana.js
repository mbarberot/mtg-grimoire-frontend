import Ember from 'ember';

export function mana([manaString, size]) {
  return (manaString ? convertManaCost(manaString, size) : "");
}

function convertManaCost(manaString, size) {
  let regex = new RegExp(/([0-9wrbgupc\/]+)/, 'ig');
  let symbols = manaString.match(regex) || [];

  return Ember.String.htmlSafe(
    symbols
    .map(symbolString => {
      return convertToMana(symbolString, size);
    })
    .join('')
  );
}

function convertToMana(symbolString, sizeString) {
  var symbol = symbolString.toLowerCase();
  var size = parseInt(sizeString);
  var classes = '';

  classes += 'ms ms-' + symbol.replace('/', '');

  if (isHybrid(symbol)) {
    classes += ' ms-split';
  }

  classes += ' ms-cost';

  if (size > 1 && size < 6) {
    classes += ' ms-' + size + 'x';
  }

  return '<i class="' + classes + '"></i>';
}

function isHybrid(symbol) {
  return symbol.includes("/") && !symbol.includes("p");
}

export default Ember.Helper.helper(mana);
