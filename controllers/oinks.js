Oinker.OinksController = Ember.ArrayController.extend({
  actions: {
    sortByDate: function() {
      this.set('sortProperties', ['date']);
    },
    sortByHandle: function() {
      this.set('sortProperties', ['handle']);
    }
  }
});
