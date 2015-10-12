import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('day', params.day_id);
  },
  actions: {
    addPhoto(params) {
      var newPhoto = this.store.createRecord('photo', params);
      var day = params.day;
      newPhoto.save().then(function(){
        return day.save();
      });
      this.transitionTo('edit', day.id);
    },
    update(params, day) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          day.set(key, params[key]);
        }
      });
      day.save();
      this.transitionTo('edit', day.id);
    },
    delete(day) {
      console.log(day);
      var post_deletions = day.get('photos').map(function(post) {
        return post.destroyRecord();
      });
      var comment_deletions = day.get('comments').map(function(comment) {
        return comment.destroyRecord();
      });
      Ember.RSVP.all(post_deletions).then(function(){
        return Ember.RSVP.all(comment_deletions).then(function(){
          return day.destroyRecord();
        });
      });
      this.transitionTo('index');
    },
    updatePost(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          post.set(key, params[key]);
        }
      });
      var day = params.day;
      post.save().then(function(){
        return day.save();
      });
      this.transitionTo('edit', day.id);
    },
    deletePost(post) {
      var day = post.day;
      post.destroyRecord().then(function() {
        return day.save();
      });
      this.transitionTo('edit', day.id);
    },
    deleteComment(comment) {
      var day = comment.day;
      comment.destroyRecord().then(function() {
        return day.save();
      });
      this.transitionTo('edit', day.id);
    }
  }
});
