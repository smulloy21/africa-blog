import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['timestamp:asc'],
  photosSorted: Ember.computed.sort('model.photos', 'mostRecent'),
});
