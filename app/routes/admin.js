import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('day');
  },
  actions: {
    saveDay(params) {
      var newDay = this.store.createRecord('day', params);
      newDay.save();
      this.transitionTo('admin');
    },
    delete(day) {
      day.destroyRecord();
      this.transitionTo('admin');
    },
    update(day, params) {
      console.log('made it to admin route handler');
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          day.set(key, params[key]);
        }
      });
      day.save();
      this.transitionTo('admin');
    }
  }
});
