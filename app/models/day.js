import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  photos: DS.hasMany('photo', {async: true}),
  comments: DS.hasMany('comment', {async: true})
});
