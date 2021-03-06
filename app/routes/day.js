import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('day', params.day_id);
  },
  actions: {
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var day = params.day;
      newComment.save().then(function(){
        return day.save();
      });
      this.transitionTo('day', day.id);
    },
  }
});
