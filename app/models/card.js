import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  manaCost: DS.attr('string'),
  set: DS.attr('string'),
  text: DS.attr('string'),
  power: DS.attr('string'),
  toughness: DS.attr('string'),
  type: DS.attr('string'),
  tags: DS.attr()
});
