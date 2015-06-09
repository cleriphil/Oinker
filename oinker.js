Ember.Handlebars.helper('oinksHelper', function(filterId) {
  return oinks.filterBy('filterId')
});

Oinker = Ember.Application.create({
  LOG_TRANSITIONS: true
});
