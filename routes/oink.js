Oinker.OinkRoute = Ember.Route.extend({
  model: function(params) {
    return oinks.findBy('id', params.oink_id);
  }
});
