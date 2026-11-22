// CLASS 8: Chapter 2 uses exactly the same shape as chapter1.js.
// Follows the Part B plan: visit a resident's home, review a renovation proposal,
// talk to a heritage officer and a longtime resident.
// DRAFT CONTENT: replace the story, characters, policies and images with your own.
const chapter2 = {
  id: 2,
  title: "Old Town & Heritage",

  report: {
    title: "Renovation Proposal",
    summary:
      "A developer has proposed modernizing forty courtyard homes in the old town with new plumbing, wiring and insulation. Residents want safer homes, but the proposal would also remove carved beams, stone thresholds and shared courtyards.",
    findings: [
      { label: "One in four", text: "courtyard homes now vacant or unsafe to live in" },
      { label: "Forty homes", text: "included in the proposed renovation" },
      { label: "Two years", text: "of rising rents on renovated shopfronts" },
    ],
    note:
      "The old town is where Suzhou's past is still visible. Visit a resident's home and hear from the people involved before deciding how it should change.",
  },

  scene: {
    title: "Shen Family Courtyard",
    location: "Old town · Resident's home",
    image: "/images/chapter2/resident-home.webp",
    imageAlt: "A courtyard home in Suzhou's old town with carved wooden windows and a tiled roof",
    observation:
      "The courtyard has carved window screens and a stone well, but the kitchen wall is damp and the wiring is bare. A space heater sits next to a hundred-year-old beam. The family wants a warmer house, and they want to keep the courtyard.",
  },

  characters: [
    {
      name: "Ms. Zhou",
      role: "Heritage Officer",
      image: "/images/chapter2/ms-zhou.webp",
      imageAlt: "Portrait of Ms. Zhou, a heritage officer",
      perspective: "Preservation · Protected features",
      dialogue: [
        "Every house in this lane has features that cannot be replaced once they are gone.",
        "That carved beam took a craftsman months. A contractor could remove it in an afternoon.",
        "I understand that families want modern comforts. I want that for them too.",
        "But full modernization often means gutting a house and keeping only the outside wall.",
        "Let us repair with care, and keep the parts that make this place Suzhou.",
      ],
    },
    {
      name: "Grandpa Shen",
      role: "Longtime Resident · Retired woodcarver",
      image: "/images/chapter2/grandpa-shen.webp",
      imageAlt: "Portrait of Grandpa Shen, a retired woodcarver",
      perspective: "Daily life · Neighborhood memory",
      dialogue: [
        "I carved window screens for half the houses on this lane.",
        "I love these houses, but my knees hurt every winter because the walls are so cold.",
        "My neighbors move away because living here is hard, not because they stopped loving it.",
        "Fix the pipes and the wiring. But please do not take out the beams and the courtyard.",
        "A street can look old and still be empty. I want it to stay lived in.",
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
      effects: { economy: 10, heritage: -20, public: 5 },
      result: {
        headline: "The old town is fully modernized",
        summary:
          "Homes are rebuilt with modern plumbing and wiring, and investment arrives. Living conditions improve, but carved beams and courtyards are lost and the lane starts to look like every other street.",
      },
      image: "/images/chapter2/resident-home.webp",
      priority: "Full modernization",
      title: "Approve full modernization",
      description: "Allow the developer to rebuild all forty homes to modern standards.",
      tradeoff: "Brings comfort and investment, but erases much of the original character.",
    },
    {
      id: "preservation",
      effects: { economy: -5, heritage: 10, public: 5 },
      result: {
        headline: "Preservation-first plan approved",
        summary:
          "Homes get new pipes and wiring, but beams, facades and courtyards must be kept. Heritage and resident trust improve, while slower work and higher costs hold back the district's economy.",
      },
      image: "/images/chapter2/ms-zhou.webp",
      priority: "Preservation-first",
      title: "Approve a preservation-first plan",
      description:
        "Allow upgrades to plumbing and wiring while protecting beams, facades and courtyards.",
      tradeoff: "Protects character and improves homes, but costs more and moves slowly.",
    },
    {
      id: "reject",
      effects: { economy: -5, heritage: 20, public: -10 },
      result: {
        headline: "The renovation is rejected",
        summary:
          "The council rejects the proposal and keeps every home as it is. Heritage is protected, but families keep living in damp, cold houses and many residents feel ignored.",
      },
      image: "/images/chapter2/grandpa-shen.webp",
      priority: "No renovation",
      title: "Reject the renovation",
      description: "Turn down the proposal and leave all forty homes unchanged.",
      tradeoff: "Protects heritage the most, but leaves living conditions unsolved.",
    },
  ],
};

export default chapter2;
