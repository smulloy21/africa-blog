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
    deletePost(post) {
      this.set('form', false);
      this.sendAction('deletePost', post);
    },
    updatePost(post) {
      var hour, min;
      if (this.get('hour') !== '' && this.get('hour') !== undefined) {
        hour = this.get('hour');
      } else {
        hour = new Date(post.timestamp).getHours();
      }
      if (this.get('min') !== '' && this.get('min') !== undefined) {
        min = this.get('min');
      } else {
        min = new Date(post.timestamp).getMinutes();
      }
      var day = new Date(this.get('photo').get('day').get('date'));
      var params = {
        image: this.get('image'),
        text: this.get('text'),
        timestamp: new Date(day.getYear(), day.getMonth(), day.getDate(), hour, min),
        day: this.get('photo').get('day'),
      };
      this.set('hour', '');
      this.set('min', '');
      this.set('image', '');
      this.set('text', '');
      this.set('form', false);
      this.sendAction('updatePost', post, params);
    },
  }
});
