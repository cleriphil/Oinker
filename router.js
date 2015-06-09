Oinker.Router.map(function() {
  this.resource('oinks', {path: '/'});
  this.resource('oink', {path: 'oinks/:oink_id'});
  this.resource('handle', {path: 'handle/:handle'})
});
