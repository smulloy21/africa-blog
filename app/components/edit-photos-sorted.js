import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['timestamp:asc'],
  photosSorted: Ember.computed.sort('model.photos', 'mostRecent'),
  actions: {
    deletePost(post) {
      this.sendAction('deletePost', post);
    },
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    },
  }
});
