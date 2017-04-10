import Ember from 'ember';

export default Ember.Controller.extend({
  pagination: Ember.computed('model.meta', {
    get() {
      let meta = this.get('model.meta');
      let pageCount = parseInt(meta.total / meta.size) + (meta.total % meta.size !== 0 ? 1 : 0);
      let desiredSize = (pageCount < 5 ? pageCount : 5);
      let currentPage = meta.current_page;
      let leftIndex = 0;
      let rightIndex = 0;

      let pagination = [{
        'isActive': true,
        'page': `${currentPage}`,
        'content': `${currentPage}`
      }];

      while (pagination.length < desiredSize) {
        leftIndex--;
        let leftPage = currentPage + leftIndex;
        if (leftPage > 0) {
          pagination.splice(0, 0, {
            'page': `${leftPage}`,
            'content': `${leftPage}`
          });
        }

        rightIndex++;
        let rightPage = currentPage + rightIndex;
        if (rightPage <= pageCount) {
          pagination.push({
            'page': `${rightPage}`,
            'content': `${rightPage}`
          });
        }
      }

      pagination.splice(0, 0, {
        'hasIcon': true,
        'page': '1',
        'content': Ember.String.htmlSafe('<i class="step backward icon"></i>')
      });
      pagination.splice(pagination.length, 0, {
        'hasIcon': true,
        'page': `${pageCount}`,
        'content': Ember.String.htmlSafe('<i class="step forward icon"></i>')
      });

      return pagination;
    }
  }),

  actions: {
    page(pageNumber) {
      this.set('page', pageNumber);
    },
    search() {
      this.transitionToRoute('cards', {
        queryParams: {
          'query': this.get('queryInput'),
          'page': 1,
          'size': this.get('size')
        }
      });
    }
  }
});
