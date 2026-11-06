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
    // CLASS 6: Store dialogue lines in an array; DialogueCard reads them in order.
    dialogue: [
      "This expansion means forty new jobs for this district.",
      "Why should we be held back for a canal that's going to change anyway?",
      // CLASS 6: Three teaching lines extend the original dialogue above.
      "Those jobs could help local families build a future here. That matters to this district too.",
      "Cleaner equipment costs money. If you ask us to upgrade, we need time to plan how to pay for it.",
      "I understand that people are worried about the water. Give us clear rules and a realistic timeline, so we can protect jobs while making improvements.",
    ],
  },

  // Data for the local resident's interview.
  lin: {
    name: "Auntie Lin",
    role: "Local Resident · Lifelong canal-side fisher",
    image: "/images/chapter1/auntie-lin.webp",
    imageAlt: "Portrait of Auntie Lin, a lifelong canal-side fisher",
    perspective: "Water quality · Community trust",
    // CLASS 6: The same DialogueCard can read another character's dialogue array.
    dialogue: [
      "My family has fished this water for three generations.",
      "It's not the same water it was ten years ago.",
      // CLASS 6: Three teaching lines extend the original dialogue above.
      "We bring home fewer fish now. When the catch gets smaller, families like mine feel the difference at the dinner table.",
      "I know the factory provides jobs. But fishing is work too, and our work depends on clean water.",
      "Before you approve more growth, tell us how the canal will be protected and how we will know the water is getting better. We need more than a promise.",
    ],
  },
};

// StatusMeters maps over this array and creates one meter for each object.
// CLASS 7: These starting values also reset the chapter for a new playthrough.
export const startingMeters = [
  // Each object has a label and a percentage value.
  { name: "Environment", value: 62 },
  { name: "Economy", value: 55 },
  { name: "Heritage", value: 58 },
  { name: "Public", value: 48 },
];

// CLASS 6: Teaching choices store content as data; each id identifies one policy.
export const policyChoices = [
  {
    id: "approve",
    // CLASS 7: Teaching values describe each policy's trade-offs; Heritage stays unchanged.
    effects: { environment: -15, economy: 20, public: -5 },
    // CLASS 7: Result content belongs to the policy data.
    result: {
      headline: "Factory expansion moves forward",
      summary: "The council approves expansion under current requirements. New jobs boost the economy, while unresolved runoff concerns weaken environmental health and public confidence.",
    },
    image: "/images/chapter1/mr-feng.webp",
    priority: "Jobs & growth",
    title: "Approve the expansion",
    description: "Allow the factory to expand under the current requirements.",
    tradeoff: "Prioritizes the proposed jobs, but leaves residents' water concerns unresolved.",
  },
  {
    id: "conditional",
    // CLASS 7: Teaching values describe each policy's trade-offs; Heritage stays unchanged.
    effects: { environment: 10, economy: 5, public: 5 },
    // CLASS 7: Result content belongs to the policy data.
    result: {
      headline: "Cleaner growth receives council approval",
      summary: "Expansion can proceed with cleaner equipment and water monitoring. Safeguards improve confidence and environmental health, while upgrade costs limit immediate economic gains.",
    },
    image: "/images/chapter1/shantang-canal.webp",
    priority: "Growth & safeguards",
    title: "Approve with environmental conditions",
    description: "Require cleaner equipment and a water-monitoring plan before expansion begins.",
    tradeoff: "Supports growth with safeguards, but adds costs and may delay hiring.",
  },
  {
    id: "pause",
    // CLASS 7: Teaching values describe each policy's trade-offs; Heritage stays unchanged.
    effects: { environment: 15, economy: -10, public: 5 },
    // CLASS 7: Result content belongs to the policy data.
    result: {
      headline: "Canal investigation comes first",
      summary: "The council pauses expansion to investigate water quality. Reduced pressure on the canal and attention to residents improve the outlook, but delayed jobs weigh on the economy.",
    },
    image: "/images/chapter1/auntie-lin.webp",
    priority: "Water investigation",
    title: "Pause the expansion",
    description: "Delay approval while the city investigates canal water quality.",
    tradeoff: "Prioritizes investigation, but postpones the proposed jobs and creates uncertainty for the factory.",
  },
];
