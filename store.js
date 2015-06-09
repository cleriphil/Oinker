id = 4;

function Oink(text, handle) {
  this.text = text;
  this.handle = handle;
  this.oinkDate = new Date();
  this.id = id++;
}

var oinks = [
  {
    id: "1",
    handle: "porky",
    text: "First Sed ut perspiciatis unde omnis iste natus",
    date: new Date()
  },
  {
    id: "2",
    handle: "babe",
    text: "Second Sed ut perspiciatis unde omnis iste natus",
    date: new Date()
  },
  {
    id: "3",
    handle: "wilbur",
    text: "Third Sed ut perspiciatis unde omnis iste natus",
    date: new Date()
  },
  {
    id: "4",
    handle: "threepigs",
    text: "Fourth Sed ut perspiciatis unde omnis iste natus",
    date: new Date()
  },
  {
    id: "5",
    handle: "wilbur",
    text: "Fifth Sed ut perspiciatis unde omnis iste natus",
    date: new Date()
  },
  {
    id: "6",
    handle: "babe",
    text: "Sixth Sed ut perspiciatis unde omnis iste natus",
    date: new Date()
  }
];
