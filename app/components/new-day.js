import Ember from 'ember';

export default Ember.Component.extend({
  newDayForm: false,
  actions: {
    showNewDayForm() {
      this.set('newDayForm', true);
    },
    hideNewDayForm() {
      this.set('newDayForm', false);
    },
    saveDay() {
      var date = parseInt(this.get('date'));
      var month = (parseInt(this.get('month'))-1);
      var year = parseInt(this.get('year'));
      var params = {
        id: this.get('model').get('length'),
        date: new Date(year, month, date),
        title: this.get('title'),
        description: this.get('description'),
        location: this.get('location'),
        photos: [],
        comments: [],
      };
      this.set('date', '');
      this.set('month', '');
      this.set('year', '');
      this.set('title', '');
      this.set('description', '');
      this.set('location', '');
      this.set('newDayForm', false);
      this.sendAction('saveDay', params);
    }
  }
});
