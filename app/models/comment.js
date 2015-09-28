import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  text: DS.attr(),
  timestamp: DS.attr(),
  day: DS.belongsTo('day', {async: true})
});
