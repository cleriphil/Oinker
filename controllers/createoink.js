Oinker.CreateoinkController = Ember.Controller.extend({
  isEditing: false,
  actions: {
    create: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);

      // alert(this.get("text"));
      // alert(this.get("handle"));

      var text = this.get("text");
      var handle = this.get("handle");
      var newOink = new Oink(text, handle);
      console.log(newOink);
      oinks.addObject(newOink);
      console.log(oinks);
    }
  }

});
