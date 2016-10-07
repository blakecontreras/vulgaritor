let adjectives = [
  { id: 0,
    text: "pustulent",
    selected: false
  },
  { id: 1,
    text: "cantankerous",
    selected: false
  },
  { id: 2,
    text: "poxy",
    selected: false
  },
  { id: 3,
    text: "indolent",
    selected: false
  },
  { id: 4,
    text: "shiftless",
    selected: false
  },
  { id: 5,
    text: "typescripty",
    selected: false
  },
  { id: 6,
    text: "boorish",
    selected: false
  },
];

let nouns = [
  { id: 0,
    text: "dairy farmer",
    selected: false
  },
  { id: 1,
    text: "cow",
    selected: false
  },
  { id: 2,
    text: "pirate",
    selected: false
  },
  { id: 3,
    text: "pig",
    selected: false
  },
  { id: 4,
    text: "jockey",
    selected: false
  },
  { id: 5,
    text: "weasel",
    selected: false
  },
  { id: 6,
    text: "submariner",
    selected: false
  },
];

module.exports = {
  words: [
    adjectives,
    nouns
  ],
  addWord(data) {
    console.log(data);
    Promise.resolve(this.words);
  }
}
