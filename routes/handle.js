Oinker.HandleRoute = Ember.Route.extend({
  model: function(params){
    return oinks.filterBy('handle', params.handle);
  }
});
