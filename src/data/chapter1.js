// This file stores Chapter 1 content as JavaScript data.
// Components read this data through props instead of hard-coding story text.

// chapter1Report contains everything displayed by ReportCard.
export const chapter1Report = {
  // The main report heading.
  title: "Water Quality Report",
  // A short introduction to the water-quality problem.
  summary:
    "The canal running through the Shantang district is still swimmable in most sections, but water clarity has dropped noticeably over the past three years.",

  // ReportCard uses map() to display each object in this array.
  findings: [
    {
      // The large or bold part of the first finding.
      label: "Three years",
      // The supporting explanation for the first finding.
      text: "of noticeably declining water clarity",
    },
    {
      label: "Three quarters",
      text: "of increased industrial runoff",
    },
    {
      label: "Nine months",
      text: "of rising runoff-related chemical markers",
    },
  ],

  // The advisor note explains why the player should visit the canal.
  note:
    "Suzhou's canals are central to the city's identity and economy. Visit Shantang Canal and hear from the people who live and work there before any decision is made.",
};

// canalScene contains everything displayed by CanalScene.
export const canalScene = {
  // The heading shown on the field-visit screen.
  title: "Shantang Canal",
  location: "Industrial edge · Field observation",
  image: "/images/chapter1/shantang-canal.webp",
  imageAlt:
    "Shantang Canal lined with traditional white houses, with an industrial skyline in the distance",
  observation:
    "Near the factory outflow points, sediment buildup has left the water a duller green, and a faint chemical smell is sometimes detectable. Local fishing families also report smaller and less frequent catches than five years ago.",
};

// Store both interview characters in one object.
// ChapterOne selects a character with characters.feng or characters.lin.
export const characters = {
  // Data for the factory owner's interview.
  feng: {
    // The name displayed as the DialogueCard heading.
    name: "Mr. Feng",
    // The character's job or relationship to the issue.
    role: "Factory Owner",
    // The portrait file used by DialogueCard.
    image: "/images/chapter1/mr-feng.webp",
    // An accessible description of Mr. Feng's portrait.
    imageAlt: "Portrait of Mr. Feng, the factory owner",
    // A short summary of the concern he represents.
    perspective: "Industrial growth · Forty proposed jobs",
    // Class 5 displays one representative line instead of a dialogue array.
    dialogue:
      "This expansion means forty new jobs for this district. Why should we be held back for a canal that's going to change anyway?",
  },

  // Data for the local resident's interview.
  lin: {
    name: "Auntie Lin",
    role: "Local Resident · Lifelong canal-side fisher",
    image: "/images/chapter1/auntie-lin.webp",
    imageAlt: "Portrait of Auntie Lin, a lifelong canal-side fisher",
    perspective: "Water quality · Community trust",
    dialogue:
      "My family has fished this water for three generations. It's not the same water it was ten years ago.",
  },
};

// StatusMeters maps over this array and creates one meter for each object.
// These values are display-only in Class 5, so no update logic exists yet.
export const startingMeters = [
  // Each object has a label and a percentage value.
  { name: "Environment", value: 62 },
  { name: "Economy", value: 55 },
  { name: "Heritage", value: 58 },
  { name: "Public", value: 48 },
];
