import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    admin() {
      var password = prompt('what is the password?');
    }
  }
});
