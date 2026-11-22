// CLASS 8: Chapter 3 copies the chapter2.js structure and replaces the content.
// DRAFT CONTENT: replace the story, characters, policies and images with your own.
const chapter3 = {
  id: 3,
  title: "Industry & Innovation",

  report: {
    title: "Innovation District Briefing",
    summary:
      "Suzhou's industrial park is attracting robotics and software companies, but the small family workshops nearby say they cannot compete for land, workers or contracts.",
    findings: [
      { label: "Forty new firms", text: "opened in the tech district this year" },
      { label: "One in three", text: "family workshops has lost a long-term client" },
      { label: "Twelve months", text: "of rising land prices around the park" },
    ],
    note:
      "Suzhou's future depends on new industries, but also on the businesses that built its reputation. Visit the district and hear from both sides before choosing a policy.",
  },

  scene: {
    title: "Innovation Park",
    location: "Industrial park · Field observation",
    image: "/images/chapter3/innovation-park.webp",
    imageAlt: "A glass robotics campus beside a row of small brick family workshops",
    observation:
      "Glass offices and delivery robots line one side of the street. On the other, a loom workshop keeps its doors open to catch the light. The two buildings are only a few meters apart, but the signs on the doors are in different worlds.",
  },

  characters: [
    {
      name: "Dr. Lu",
      role: "Robotics Startup Founder",
      image: "/images/chapter3/dr-lu.webp",
      imageAlt: "Portrait of Dr. Lu, a robotics startup founder",
      perspective: "Innovation · High-skill jobs",
      dialogue: [
        "We chose Suzhou because the suppliers, engineers and factories are all within an hour.",
        "In two years we could hire two hundred people here.",
        "Companies like ours go where land is ready and approvals are fast.",
        "If Suzhou slows down, we will build the next factory in another city.",
        "Back us with land and clear permits, and we will train local workers, not only import them.",
      ],
    },
    {
      name: "Mr. Gu",
      role: "Family Textile Workshop Owner",
      image: "/images/chapter3/mr-gu.webp",
      imageAlt: "Portrait of Mr. Gu, a family textile workshop owner",
      perspective: "Local business · Craft skills",
      dialogue: [
        "My father started this workshop, and my daughter learned the looms here.",
        "Since the park opened, my landlord has raised the rent twice.",
        "Our customers want hand-finished fabric. That cannot be done by a robot.",
        "I am not against new companies. I just do not want to be the price we pay for them.",
        "Help us upgrade our equipment, and the old and the new can grow in the same street.",
      ],
    },
  ],

  decision: {
    eyebrow: "Suzhou · Council chamber",
    heading: "The innovation district's next chapter",
    intro: "Three proposals. Compare the cards, then sign your decree.",
    glyph: "工",
  },

  policies: [
    {
      id: "campus",
      effects: { environment: -5, economy: 20, heritage: -5, public: -10 },
      result: {
        headline: "The tech campus expands fast",
        summary:
          "Land and permits go to the new campus. Investment and high-skill jobs surge, but workshop rents rise and many small businesses lose their space.",
      },
      image: "/images/chapter3/dr-lu.webp",
      priority: "Tech growth",
      title: "Subsidize the tech campus",
      description: "Offer land and fast approvals to large technology companies.",
      tradeoff: "Maximizes growth, but pushes local workshops out.",
    },
    {
      id: "mixed",
      effects: { economy: 10, heritage: 0, public: 5 },
      result: {
        headline: "A shared district is approved",
        summary:
          "New and old businesses share the district, with rent protection for existing workshops. Growth is steady, but slower than a campus-only plan.",
      },
      image: "/images/chapter3/innovation-park.webp",
      priority: "Shared growth",
      title: "Create a mixed-use innovation zone",
      description: "Reserve space and capped rents for existing local businesses.",
      tradeoff: "Keeps local business alive, but slows the arrival of big companies.",
    },
    {
      id: "upgrade",
      effects: { environment: 5, economy: -5, heritage: 5, public: 15 },
      result: {
        headline: "Local workshops upgrade first",
        summary:
          "The city funds new equipment and training for existing workshops. Residents feel supported and craft skills are kept, but outside investment waits.",
      },
      image: "/images/chapter3/mr-gu.webp",
      priority: "Local first",
      title: "Upgrade local workshops first",
      description: "Fund equipment and digital training before approving new campuses.",
      tradeoff: "Supports residents and craft skills, but delays outside investment.",
    },
  ],
};

export default chapter3;
