Oinker.OinkController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    create: function() {
      this.set('isEditing', true);
    },
    save: function(params) {
      var text = this.get("inputtext");
      var handle = this.get("inputhandle");
      var replyTo = this.get("id");


      if (text.length < 141) {
        this.set('isEditing', false);
        var newOink = new Oink(text, handle, replyTo);
        console.log(replyTo);
        console.log(newOink);

        oinks.addObject(newOink);
      }
      else {
        alert("Your oink is too long! Please keep your oink short.")
      }
    }
  }

});
