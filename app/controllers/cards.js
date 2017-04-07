import Ember from 'ember';

export default Ember.Controller.extend({
  meta: Ember.computed('meta', {
    get() {
      console.log(this.get('model.meta'));
      return this.get('model.meta');
    }
  }),

  actions: {
    search() {
      this.model(this.getProperties('query', 'page', 'size'));
    }
  }
});
