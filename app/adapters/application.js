import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: "https://mtg-grimoire-api.herokuapp.com/api"

});
