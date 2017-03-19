
import { mana } from 'mtg-grimoire-frontend/helpers/mana';
import { module, test } from 'qunit';

module('Unit | Helper | mana');

test('null mana cost', function(assert) {
  let result = mana([null]);
  assert.equal(result, "");
});

test('no mana cost', function(assert) {
  let result = mana([""]);
  assert.equal(result, "");
});

test('numeric mana cost', function(assert) {
  let result = mana(["{1}"]);
  assert.equal(result, '<i class="ms ms-1 ms-cost"></i>');
});

test('symbol mana cost', function(assert) {
  let result = mana(["{U}"]);
  assert.equal(result, '<i class="ms ms-u ms-cost"></i>');
});

test('hybrid mana cost', function(assert) {
  let result = mana(["{U/B}"]);
  assert.equal(result, '<i class="ms ms-ub ms-split ms-cost"></i>');
});

test('phyrexian mana cost', function(assert) {
  let result = mana(["{U/P}"]);
  assert.equal(result, '<i class="ms ms-up ms-cost"></i>');
});

test('colorless mana cost', function(assert) {
  let result = mana(["{C}"]);
  assert.equal(result, '<i class="ms ms-c ms-cost"></i>');
});

test('resized mana cost', function(assert) {
  let result = mana(["{1}", "5"]);
  assert.equal(result, '<i class="ms ms-1 ms-cost ms-5x"></i>');
});

test('multiple mana cost', function(assert) {
  let result = mana(["{1}{U}{W}"]);
  assert.equal(result.toHTML(), '<i class="ms ms-1 ms-cost"></i><i class="ms ms-u ms-cost"></i><i class="ms ms-w ms-cost"></i>');
});