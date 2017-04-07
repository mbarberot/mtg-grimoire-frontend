import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  },

  query: '',
  page: null,
  size: null,

  model(params) {
    return this.get('store').query('card', params);
  }
});
