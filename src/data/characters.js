module.exports = [
  {
    id: "alex",
    fullName: "Alex",
    shortName: "Alex",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "russ-golding", relationship: "partner" },
      { character: "toby", relationship: "daughter" },
    ],
  },
  {
    id: "basil-noone",
    fullName: "Basil Noone",
    shortName: "Basil",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [],
  },
  {
    id: "benji-wilkinson",
    fullName: "Benji Wilkinson",
    shortName: "Benji",
    pronouns: ["he", "him"],
    death: null,
    knownAges: [],
    relationships: [
      { character: "deborah-wilkinson", relationship: "sister" },
      { character: "hilla-wilkinson", relationship: "mother" },
      { character: "jerry-wilkinson", relationship: "father" },
      { character: "myra-wilkinson", relationship: "sister" },
      {
        character: "oswald-newt-nightingale",
        relationship: "great-granduncle",
      },
      { character: "vanessa-wilkinson", relationship: "grandmother" },
      { character: "walter-wilkinson", relationship: "grandfather" },
    ],
  },
  {
    id: "cliff-golding",
    fullName: "Cliff Golding",
    shortName: "Cliff",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "deborah-wilkinson", relationship: "partner" },
      { character: "russ-golding", relationship: "son" },
      { character: "toby", relationship: "granddaughter" },
    ],
  },
  {
    id: "deborah-wilkinson",
    fullName: "Deborah Wilkinson",
    shortName: "Deborah",
    pronouns: ["she", "her"],
    death: null,
    knownAges: [{ episode: 2, scene: 7, age: 18 }],
    relationships: [
      { character: "benji-wilkinson", relationship: "brother" },
      { character: "cliff-golding", relationship: "partner" },
      { character: "hilla-wilkinson", relationship: "mother" },
      { character: "jerry-wilkinson", relationship: "father" },
      { character: "myra-wilkinson", relationship: "sister" },
      {
        character: "oswald-newt-nightingale",
        relationship: "great-granduncle",
      },
      { character: "russ-golding", relationship: "son" },
      { character: "toby", relationship: "granddaughter" },
      { character: "vanessa-wilkinson", relationship: "grandmother" },
      { character: "walter-wilkinson", relationship: "grandfather" },
    ],
  },
  {
    id: "gally-nightingale",
    fullName: "Gally Nightingale",
    shortName: "Gally",
    pronouns: ["she", "her"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "lettie-nightingale", relationship: "mother" },
      { character: "oswald-newt-nightingale", relationship: "brother" },
      { character: "patrick-nightingale", relationship: "father" },
      { character: "susanna-noone", relationship: "partner" },
      { character: "vanessa-wilkinson", relationship: "daughter" },
    ],
  },
  {
    id: "hilla-wilkinson",
    fullName: "Hilla Wilkinson",
    shortName: "Hilla",
    pronouns: ["she", "her"],
    death: null,
    knownAges: [],
    relationships: [
      { character: "benji-wilkinson", relationship: "son" },
      { character: "deborah-wilkinson", relationship: "daughter" },
      { character: "jerry-wilkinson", relationship: "partner" },
      { character: "myra-wilkinson", relationship: "daughter" },
      { character: "russ-golding", relationship: "grandson" },
    ],
  },
  {
    id: "jerry-wilkinson",
    fullName: "Jerry Wilkinson",
    shortName: "Jerry",
    pronouns: ["he", "him"],
    knownAges: [
      { episode: 3, scene: 1, age: 86 },
      { episode: 3, scene: 4, age: 50 },
      { episode: 3, scene: 11, age: 8 },
      { episode: 3, scene: 12, age: 7 },
      { episode: 6, scene: 8, age: 60 },
    ],
    death: null,
    relationships: [
      { character: "benji-wilkinson", relationship: "son" },
      { character: "deborah-wilkinson", relationship: "daughter" },
      { character: "hilla-wilkinson", relationship: "partner" },
      { character: "myra-wilkinson", relationship: "daughter" },
      { character: "oswald-newt-nightingale", relationship: "granduncle" },
      { character: "russ-golding", relationship: "grandson" },
      { character: "toby", relationship: "great-granddaughter" },
      { character: "vanessa-wilkinson", relationship: "mother" },
      { character: "walter-wilkinson", relationship: "father" },
    ],
  },
  {
    id: "lettie-nightingale",
    fullName: "Lettie Nightingale",
    shortName: "Lettie",
    pronouns: ["she", "her"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "gally-nightingale", relationship: "daughter" },
      { character: "patrick-nightingale", relationship: "partner" },
      { character: "oswald-newt-nightingale", relationship: "son" },
    ],
  },
  {
    id: "montgomery-james",
    fullName: "Montgomery James",
    shortName: "Montgomery",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [],
  },
  {
    id: "myra-wilkinson",
    fullName: "Myra Wilkinson",
    shortName: "Myra",
    pronouns: ["she", "her"],
    death: null,
    knownAges: [],
    relationships: [
      { character: "benji-wilkinson", relationship: "brother" },
      { character: "deborah-wilkinson", relationship: "sister" },
      { character: "hilla-wilkinson", relationship: "mother" },
      { character: "jerry-wilkinson", relationship: "father" },
      {
        character: "oswald-newt-nightingale",
        relationship: "great-granduncle",
      },
      { character: "russ-golding", relationship: "nephew" },
      { character: "vanessa-wilkinson", relationship: "grandmother" },
      { character: "walter-wilkinson", relationship: "grandfather" },
    ],
  },
  {
    id: "oswald-newt-nightingale",
    fullName: "Oswald ‘Newt’ Nightingale",
    shortName: "Newt",
    pronouns: ["he", "him"],
    knownAges: [{ episode: 3, scene: 3, age: 99 }],
    death: { year: 1991, inYearSortIndex: 0 },
    relationships: [
      { character: "benji-wilkinson", relationship: "great-grandnephew" },
      { character: "deborah-wilkinson", relationship: "great-grandniece" },
      { character: "gally-nightingale", relationship: "sister" },
      { character: "jerry-wilkinson", relationship: "grandnephew" },
      { character: "lettie-nightingale", relationship: "mother" },
      { character: "myra-wilkinson", relationship: "great-grandniece" },
      { character: "patrick-nightingale", relationship: "father" },
      { character: "russ-golding", relationship: "great-great-grandnephew" },
      { character: "vanessa-wilkinson", relationship: "niece" },
    ],
  },
  {
    id: "patrick-nightingale",
    fullName: "Patrick Nightingale",
    shortName: "Patrick",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "gally-nightingale", relationship: "daughter" },
      { character: "lettie-nightingale", relationship: "partner" },
      { character: "oswald-newt-nightingale", relationship: "son" },
    ],
  },
  {
    id: "queenie",
    fullName: "Queenie",
    shortName: "Queenie",
    pronouns: ["she", "her"],
    knownAges: [],
    death: null,
    relationships: [],
  },
  {
    id: "russ-golding",
    fullName: "Russ Golding",
    shortName: "Russ",
    pronouns: ["he", "him"],
    knownAges: [
      { episode: 1, scene: 6, age: 19 },
      { episode: 1, scene: 9, age: 5 },
    ],
    death: null,
    relationships: [
      { character: "alex", relationship: "partner" },
      { character: "benji-wilkinson", relationship: "uncle" },
      { character: "deborah-wilkinson", relationship: "mother" },
      { character: "hilla-wilkinson", relationship: "grandmother" },
      { character: "jerry-wilkinson", relationship: "grandfather" },
      { character: "myra-wilkinson", relationship: "aunt" },
      {
        character: "oswald-newt-nightingale",
        relationship: "great-great-granduncle",
      },
      { character: "toby", relationship: "daughter" },
      { character: "vanessa-wilkinson", relationship: "great-grandmother" },
    ],
  },
  {
    id: "solomon-goldfarb",
    fullName: "Solomon Goldfarb",
    shortName: "Solomon",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [{ character: "hilla-wilkinson", relationship: "daughter" }],
  },
  {
    id: "spencer",
    fullName: "Spencer",
    shortName: "Spencer",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [],
  },
  {
    id: "susanna-noone",
    fullName: "Susanna Noone",
    shortName: "Susanna",
    pronouns: ["she", "her"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "gally-nightingale", relationship: "partner" },
      { character: "vanessa-wilkinson", relationship: "daughter" },
    ],
  },
  {
    id: "toby",
    fullName: "Toby",
    shortName: "Toby",
    pronouns: ["she", "her"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "alex", relationship: "father" },
      { character: "cliff-golding", relationship: "grandfather" },
      { character: "deborah-wilkinson", relationship: "grandmother" },
      { character: "jerry-wilkinson", relationship: "great-grandfather" },
      { character: "russ-golding", relationship: "father" },
    ],
  },
  {
    id: "vanessa-wilkinson",
    fullName: "Vanessa Wilkinson",
    shortName: "Vanessa",
    pronouns: ["she", "her"],
    knownAges: [{ episode: 6, scene: 10, age: -1 }],
    death: { year: 1990, inYearSortIndex: 1 },
    relationships: [
      { character: "benji-wilkinson", relationship: "grandson" },
      { character: "deborah-wilkinson", relationship: "granddaughter" },
      { character: "gally-nightingale", relationship: "mother" },
      { character: "jerry-wilkinson", relationship: "son" },
      { character: "myra-wilkinson", relationship: "granddaughter" },
      { character: "oswald-newt-nightingale", relationship: "uncle" },
      { character: "russ-golding", relationship: "great-grandson" },
      { character: "susanna-noone", relationship: "mother" },
      { character: "walter-wilkinson", relationship: "partner" },
    ],
  },
  {
    id: "walter-wilkinson",
    fullName: "Walter Wilkinson",
    shortName: "Walter",
    pronouns: ["he", "him"],
    knownAges: [],
    death: null,
    relationships: [
      { character: "benji-wilkinson", relationship: "grandson" },
      { character: "deborah-wilkinson", relationship: "granddaughter" },
      { character: "jerry-wilkinson", relationship: "son" },
      { character: "myra-wilkinson", relationship: "granddaughter" },
      { character: "vanessa-wilkinson", relationship: "partner" },
    ],
  },
];
