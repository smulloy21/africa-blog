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
    addPhoto() {
      var hour = this.get('hour');
      var min = this.get('min');
      var day = new Date(this.get('model').get('date'));
      var params = {
        image: this.get('image'),
        text: this.get('text'),
        timestamp: new Date(day.getYear(), day.getMonth(), day.getDate(), hour, min),
        day: this.get('model'),
      };
      this.set('hour', '');
      this.set('min', '');
      this.set('image', '');
      this.set('text', '');
      this.set('form', false);
      this.sendAction('addPhoto', params);
    }
  }
});
