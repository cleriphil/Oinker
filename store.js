id = 4;

function Oink(text, handle, replyTo) {
  this.text = text;
  this.handle = handle;
  this.oinkDate = new Date();
  this.id = id++;
  this.replyTo = replyTo;
  this.hashtags = [];
}

var oinks = [
  {
    id: "1",
    handle: "porky",
    text: "First Sed ut perspiciatis unde omnis iste natus",
    replyTo: 0,
    date: new Date(),
    hashtags: ["latin", "pigs"]
  },
  {
    id: "2",
    handle: "babe",
    text: "Second Sed ut perspiciatis unde omnis iste natus",
    replyTo: 1,
    date: new Date(),
    hashtags: ["latin", "pigs"]

  },
  {
    id: "3",
    handle: "wilbur",
    text: "Third Sed ut perspiciatis unde omnis iste natus",
    replyTo: 2,
    date: new Date(),
    hashtags: ["pigs"]

  },
  {
    id: "4",
    handle: "threepigs",
    text: "Fourth Sed ut perspiciatis unde omnis iste natus",
    replyTo: 3,
    date: new Date(),
    hashtags: ["pigs"]
  },
  {
    id: "5",
    handle: "wilbur",
    text: "Fifth Sed ut perspiciatis unde omnis iste natus",
    replyTo: 3,
    date: new Date(),
    hashtags: ["dogs"]

  },
  {
    id: "6",
    handle: "babe",
    text: "Sixth Sed ut perspiciatis unde omnis iste natus",
    replyTo: 2,
    date: new Date(),
    hashtags: ["dogs"]

  }
];
