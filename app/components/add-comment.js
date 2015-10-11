import Ember from 'ember';

export default Ember.Component.extend({
  form: false,
  actions: {
    showForm() {
      this.set('form', true);
    },
    hideForm() {
      this.set('form', false);
    },
    addComment() {
      var params = {
        username: this.get('name'),
        text: this.get('text'),
        timestamp: new Date(),
        day: this.get('model'),
      };
      this.set('form', false);
      this.sendAction('addComment', params)
    }
  }
});
