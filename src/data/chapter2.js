// CLASS 8: Chapter 2 uses exactly the same shape as chapter1.js.
// DRAFT CONTENT: replace the story, characters, policies and images with your own.
const chapter2 = {
  id: 2,
  title: "Old Town & Heritage",

  report: {
    title: "Historic District Survey",
    summary:
      "The lanes of Pingjiang old town still hold hundreds of courtyard homes, but many are damp, crowded or empty, and the cost of repairing them keeps rising.",
    findings: [
      { label: "One in four", text: "courtyard homes now vacant or unsafe to live in" },
      { label: "Two years", text: "of rising rents on renovated shopfronts" },
      { label: "Six workshops", text: "of traditional craftspeople closed since last spring" },
    ],
    note:
      "Pingjiang's lanes are where Suzhou's past is still visible. Walk the old town and listen to the people who live there before deciding how it should change.",
  },

  scene: {
    title: "Pingjiang Lane",
    location: "Old town · Field observation",
    image: "/images/chapter2/pingjiang-lane.webp",
    imageAlt: "A narrow stone lane in Pingjiang old town with whitewashed walls and dark tiled roofs",
    observation:
      "Fresh glass storefronts sit beside cracked plaster walls. Some doorways hold lanterns and laundry lines, others are boarded up. A neon sign is the brightest thing on the lane, and most of the old signboards are gone.",
  },

  characters: [
    {
      name: "Ms. Zhou",
      role: "Renovation Developer",
      image: "/images/chapter2/ms-zhou.webp",
      imageAlt: "Portrait of Ms. Zhou, a renovation developer",
      perspective: "Modernization · Safer homes",
      dialogue: [
        "Many of these houses have no proper plumbing and a roof that leaks every spring.",
        "People deserve a safe home, even if it is a hundred years old.",
        "Modern wiring and insulation cost money. Shops and cafes are what pay for that.",
        "If the old town stays frozen, it becomes a museum with nobody living in it.",
        "Let us renovate with a clear plan. Safe homes and a lively street can go together.",
      ],
    },
    {
      name: "Grandpa Shen",
      role: "Retired Woodcarver · Lifelong lane resident",
      image: "/images/chapter2/grandpa-shen.webp",
      imageAlt: "Portrait of Grandpa Shen, a retired woodcarver",
      perspective: "Heritage · Neighborhood memory",
      dialogue: [
        "I carved window screens for half of the houses on this lane.",
        "When a carved beam is torn out, it does not come back.",
        "My neighbors move away because rents rise, not because they stopped loving this place.",
        "Repair the houses, yes. But keep the beams, the courtyards and the people.",
        "A street can look old and still be dead. I want it to stay alive and still be ours.",
      ],
    },
  ],

  decision: {
    eyebrow: "Suzhou · Council chamber",
    heading: "The old town's next chapter",
    intro: "Three proposals. Compare the cards, then sign your decree.",
    glyph: "古",
  },

  policies: [
    {
      id: "modernize",
      effects: { economy: 15, heritage: -20, public: -5 },
      result: {
        headline: "The old town is rebuilt for visitors",
        summary:
          "Homes are fully modernized and shopfronts open quickly. Investment arrives, but original carvings and courtyards are lost and long-time residents feel pushed out.",
      },
      image: "/images/chapter2/ms-zhou.webp",
      priority: "Modernization",
      title: "Approve full modernization",
      description: "Allow developers to rebuild old-town homes to modern standards.",
      tradeoff: "Brings investment and safer homes, but erases much of the original character.",
    },
    {
      id: "guidelines",
      effects: { economy: 5, heritage: 10, public: 5 },
      result: {
        headline: "Renovation follows heritage rules",
        summary:
          "Developers may renovate only if they keep facades, beams and courtyards. Heritage and trust improve, while stricter rules slow projects and raise costs.",
      },
      image: "/images/chapter2/pingjiang-lane.webp",
      priority: "Balanced renewal",
      title: "Renovate with heritage guidelines",
      description:
        "Require developers to preserve key features and hire local craftspeople.",
      tradeoff: "Protects character and local jobs, but adds cost and slows the pace of repair.",
    },
    {
      id: "restore",
      effects: { economy: -10, heritage: 20, public: 5 },
      result: {
        headline: "The old town is restored by hand",
        summary:
          "The city funds traditional restoration and pauses new commercial building. Heritage is protected, but repairs are slow and the district earns less.",
      },
      image: "/images/chapter2/grandpa-shen.webp",
      priority: "Preservation",
      title: "Pause building and restore traditionally",
      description: "Fund hand restoration of the old homes and freeze new commercial projects.",
      tradeoff: "Protects heritage the most, but costs public money and delays safer housing.",
    },
  ],
};

export default chapter2;
