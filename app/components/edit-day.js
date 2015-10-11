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
    delete() {
      var day = this.get('model');
      this.sendAction('delete', day);
    },
    update() {
      var params = {

      }
      this.sendAction('update', params);
    },
  }
});
