import Ember from 'ember';

export default Ember.Component.extend({
  mostRecent: ['date:asc'],
  daysSorted: Ember.computed.sort('model', 'mostRecent'),
});
