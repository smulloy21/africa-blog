import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('day', params.day_id);
  },
  actions: {
    addPhoto(params) {
      var newPhoto = this.store.createRecord('photo', params);
      var day = params.day;
      newPhoto.save().then(function(){
        return day.save();
      });
      this.transitionTo('edit', day.id);
    },
  }
});
