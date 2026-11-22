// CLASS 8: Every chapter file exports one chapter object with the same shape.
// ChapterScreen reads this object through props instead of hard-coding story text.
const chapter1 = {
  id: 1,
  title: "Water & Environment",

  // ReportCard reads these values.
  report: {
    title: "Water Quality Report",
    summary:
      "The canal running through the Shantang district is still swimmable in most sections, but water clarity has dropped noticeably over the past three years.",
    findings: [
      { label: "Three years", text: "of noticeably declining water clarity" },
      { label: "Three quarters", text: "of increased industrial runoff" },
      { label: "Nine months", text: "of rising runoff-related chemical markers" },
    ],
    note:
      "Suzhou's canals are central to the city's identity and economy. Visit Shantang Canal and hear from the people who live and work there before any decision is made.",
  },

  // CanalScene reads these values.
  scene: {
    title: "Shantang Canal",
    location: "Industrial edge · Field observation",
    image: "/images/chapter1/shantang-canal.webp",
    imageAlt:
      "Shantang Canal lined with traditional white houses, with an industrial skyline in the distance",
    observation:
      "Near the factory outflow points, sediment buildup has left the water a duller green, and a faint chemical smell is sometimes detectable. Local fishing families also report smaller and less frequent catches than five years ago.",
  },

  // CLASS 8: characters is an array. Index 0 is the first interview, index 1 the second.
  characters: [
    {
      name: "Mr. Feng",
      role: "Factory Owner",
      image: "/images/chapter1/mr-feng.webp",
      imageAlt: "Portrait of Mr. Feng, the factory owner",
      perspective: "Industrial growth · Forty proposed jobs",
      dialogue: [
        "This expansion means forty new jobs for this district.",
        "Why should we be held back for a canal that's going to change anyway?",
        "Those jobs could help local families build a future here. That matters to this district too.",
        "Cleaner equipment costs money. If you ask us to upgrade, we need time to plan how to pay for it.",
        "I understand that people are worried about the water. Give us clear rules and a realistic timeline, so we can protect jobs while making improvements.",
      ],
    },
    {
      name: "Auntie Lin",
      role: "Local Resident · Lifelong canal-side fisher",
      image: "/images/chapter1/auntie-lin.webp",
      imageAlt: "Portrait of Auntie Lin, a lifelong canal-side fisher",
      perspective: "Water quality · Community trust",
      dialogue: [
        "My family has fished this water for three generations.",
        "It's not the same water it was ten years ago.",
        "We bring home fewer fish now. When the catch gets smaller, families like mine feel the difference at the dinner table.",
        "I know the factory provides jobs. But fishing is work too, and our work depends on clean water.",
        "Before you approve more growth, tell us how the canal will be protected and how we will know the water is getting better. We need more than a promise.",
      ],
    },
  ],

  // CLASS 8: Text that used to be hard-coded in PolicyDecision now lives in data.
  decision: {
    eyebrow: "Suzhou · Council chamber",
    heading: "The canal's next chapter",
    intro: "Three proposals. Compare the cards, then sign your decree.",
    glyph: "水",
  },

  policies: [
    {
      id: "approve",
      effects: { environment: -15, economy: 20, public: -5 },
      result: {
        headline: "Factory expansion moves forward",
        summary:
          "The council approves expansion under current requirements. New jobs boost the economy, while unresolved runoff concerns weaken environmental health and public confidence.",
      },
      image: "/images/chapter1/mr-feng.webp",
      priority: "Jobs & growth",
      title: "Approve the expansion",
      description: "Allow the factory to expand under the current requirements.",
      tradeoff:
        "Prioritizes the proposed jobs, but leaves residents' water concerns unresolved.",
    },
    {
      id: "conditional",
      effects: { environment: 10, economy: 5, public: 5 },
      result: {
        headline: "Cleaner growth receives council approval",
        summary:
          "Expansion can proceed with cleaner equipment and water monitoring. Safeguards improve confidence and environmental health, while upgrade costs limit immediate economic gains.",
      },
      image: "/images/chapter1/shantang-canal.webp",
      priority: "Growth & safeguards",
      title: "Approve with environmental conditions",
      description:
        "Require cleaner equipment and a water-monitoring plan before expansion begins.",
      tradeoff: "Supports growth with safeguards, but adds costs and may delay hiring.",
    },
    {
      id: "pause",
      effects: { environment: 15, economy: -10, public: 5 },
      result: {
        headline: "Canal investigation comes first",
        summary:
          "The council pauses expansion to investigate water quality. Reduced pressure on the canal and attention to residents improve the outlook, but delayed jobs weigh on the economy.",
      },
      image: "/images/chapter1/auntie-lin.webp",
      priority: "Water investigation",
      title: "Pause the expansion",
      description: "Delay approval while the city investigates canal water quality.",
      tradeoff:
        "Prioritizes investigation, but postpones the proposed jobs and creates uncertainty for the factory.",
    },
  ],
};

export default chapter1;
