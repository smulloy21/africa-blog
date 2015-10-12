import Ember from 'ember';

export default Ember.Component.extend({
  gotPassword: false,
  password: "botswana",
  failedAttempt: false,
  actions: {
    checkPassword(attempt) {
      if (attempt === this.get('password')) {
        this.set('gotPassword', true);
      } else {
        this.set('failedAttempt', true);
      }
    },
    saveDay(params) {
      this.sendAction('saveDay', params);
    }
  }
});
