import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        search() {
            let params = this.getProperties('query');
            let cards = this.get('store').query('card', params);    
            this.set('model', cards);
        }
    }
});
