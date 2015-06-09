Oinker.RepliesRoute = Ember.Route.extend({
  model: function(params){
    return oinks.filterBy('replyTo', params.reply_to);
  }
});
