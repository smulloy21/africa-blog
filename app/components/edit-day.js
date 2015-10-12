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
      this.set('form', false);
      this.sendAction('delete', day);
    },
    update() {
      var day = this.get('model');
      var date = parseInt(this.get('date'));
      var month = (parseInt(this.get('month'))-1);
      var year = parseInt(this.get('year'));
      var params = {
        date: new Date(year, month, date),
        title: this.get('title'),
        description: this.get('description'),
        location: this.get('location'),
      };
      this.set('date', '');
      this.set('month', '');
      this.set('year', '');
      this.set('title', '');
      this.set('description', '');
      this.set('location', '');
      this.set('form', false);
      this.sendAction('update', params, day);
    },
  }
});
