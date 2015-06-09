Oinker.CreateoinkController = Ember.Controller.extend({
  isEditing: false,
  actions: {
    create: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var text = this.get("text");
      var handle = this.get("handle");
      var hashtags = this.get("hashtags").split(',');

      if (text.length < 141) {
        this.set('isEditing', false);
        var newOink = new Oink(text, handle, 0);
        newOink.hashtags = hashtags;
        oinks.addObject(newOink);
        console.log(newOink);
      }
      else {
        alert("Your oink is too long! Please keep your oink short.")
      }
    }
  }

});
