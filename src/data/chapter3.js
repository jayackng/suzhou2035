// CLASS 8: Chapter 3 copies the chapter2.js structure and replaces the content.
// Follows the Part B plan: read an investment pitch, tour the proposed site,
// talk to a small business owner and a foreign investor.
// DRAFT CONTENT: replace the story, characters, policies and images with your own.
const chapter3 = {
  id: 3,
  title: "Industry & Innovation",

  report: {
    title: "Investment Pitch",
    summary:
      "A foreign robotics company wants to rezone a block near the industrial park for a research campus. It promises high-skill jobs, but the block is home to small family businesses that have operated there for decades.",
    findings: [
      { label: "Two hundred", text: "high-skill jobs promised within three years" },
      { label: "Twelve", text: "small local businesses on the proposed site" },
      { label: "Twelve months", text: "of rising land prices around the park" },
    ],
    note:
      "Suzhou's future depends on new industries, but also on the businesses that built its reputation. Tour the proposed site and hear from both sides before choosing a policy.",
  },

  scene: {
    title: "Proposed Site",
    location: "Industrial park edge · Site tour",
    image: "/images/chapter3/proposed-site.webp",
    imageAlt: "A block of small brick workshops beside a modern glass research building",
    observation:
      "On one side, glass offices and delivery robots. On the other, a loom workshop keeps its doors open for the light, and a noodle shop is serving lunch. The two sides are a few meters apart, and the rezoning line would run between them.",
  },

  characters: [
    {
      name: "Mr. Gu",
      role: "Small Business Owner · Family textile workshop",
      image: "/images/chapter3/mr-gu.webp",
      imageAlt: "Portrait of Mr. Gu, a family textile workshop owner",
      perspective: "Local business · Craft skills",
      dialogue: [
        "My father started this workshop, and my daughter learned the looms here.",
        "If the block is rezoned, our rent will double, and we cannot afford that.",
        "Our customers want hand-finished fabric. That cannot be done by a robot.",
        "I am not against new companies. I just do not want to be the price we pay for them.",
        "Give us time and support to upgrade, and the old and the new can grow together.",
      ],
    },
    {
      name: "Mr. Andersen",
      role: "Foreign Investor",
      image: "/images/chapter3/mr-andersen.webp",
      imageAlt: "Portrait of Mr. Andersen, a foreign investor",
      perspective: "Investment · High-skill jobs",
      dialogue: [
        "We chose Suzhou because the suppliers, engineers and factories are all close together.",
        "In three years we could hire two hundred people here.",
        "A research campus needs a large, connected site. We cannot build it in small pieces.",
        "If this falls through, we will look at other cities. That is the honest truth.",
        "We are open to a smaller version if it still gives us enough room to start.",
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
      id: "rezone",
      effects: { environment: -5, economy: 20, heritage: -5, public: -10 },
      result: {
        headline: "The full rezoning is approved",
        summary:
          "The whole block is cleared for the research campus. Investment and high-skill jobs surge, but the small businesses lose their space and many residents feel left behind.",
      },
      image: "/images/chapter3/mr-andersen.webp",
      priority: "Full rezoning",
      title: "Approve the rezoning",
      description: "Rezone the whole block for the foreign research campus.",
      tradeoff: "Maximizes growth, but displaces the local businesses on the site.",
    },
    {
      id: "scaled",
      effects: { economy: 10, public: 5 },
      result: {
        headline: "A scaled-down campus is approved",
        summary:
          "Half of the block is rezoned and the workshops keep protected leases. Growth is steady, but smaller than the investor wanted.",
      },
      image: "/images/chapter3/proposed-site.webp",
      priority: "Shared growth",
      title: "Approve a scaled-down version",
      description: "Rezone half the block and protect leases for existing businesses.",
      tradeoff: "Keeps local business alive, but risks the investor walking away.",
    },
    {
      id: "reject",
      effects: { economy: -15, heritage: 5, public: 5 },
      result: {
        headline: "The investment is rejected",
        summary:
          "The council turns the proposal down to protect existing businesses. Residents feel heard, but the high-skill jobs go to another city and the economy slows.",
      },
      image: "/images/chapter3/mr-gu.webp",
      priority: "Local first",
      title: "Reject the investment",
      description: "Decline the rezoning and leave the block as it is.",
      tradeoff: "Protects local businesses, but loses the jobs and the investment.",
    },
  ],
};

export default chapter3;
