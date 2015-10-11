import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('about');
  this.route('day', {path: '/:day_id'});
  this.route('edit', {path: '/:day_id/edit'});
});

export default Router;
