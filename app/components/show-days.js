import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['timestamp:desc'],
  daysSorted: Ember.computed.sort('model', 'mostRecent'),
});
