export interface Project {
  slug: string;
  index: string;
  title: string;
  category: string;
  year: string;
  accent: string;
  tag: string;
  description: string;
  role: string;
  timeline: string;
  overview: string;
  challenge: string;
  process: string[];
  solution: string;
  result: string;
  disclaimer: string;
}

export const projects: Project[] = [
  {
    slug: "form-and-function",
    index: "01",
    title: "Form & Function",
    category: "Brand identity / Art direction",
    year: "2026",
    accent: "#cfc1af",
    tag: "Identity",
    description:
      "A distinctive visual identity for a conceptual architecture practice that bridges restraint and expression.",
    role: "Brand strategy, visual identity, art direction, guidelines",
    timeline: "8 weeks",
    overview:
      "Form & Function is a fictional architecture practice founded on the belief that buildings should feel as considered as the lives lived inside them. The studio needed an identity that communicated precision without coldness — something that felt both engineered and deeply human.",
    challenge:
      "Architecture branding often falls into two traps: cold minimalism that says nothing, or overwrought ornamentation that says too much. The challenge was finding visual language that conveyed structural thinking and warmth simultaneously — an identity that architects would respect and clients would trust.",
    process: [
      "Explored typographic systems rooted in architectural proportions — modular grids, golden ratios, and construction geometry applied to letterforms.",
      "Developed a restrained colour palette drawn from raw building materials: warm concrete, oxidised steel, and unfinished timber.",
      "Created a flexible mark system that references both blueprint notation and fine-art print traditions.",
      "Designed a comprehensive guidelines document covering stationery, digital applications, signage, and environmental graphics.",
    ],
    solution:
      "The final identity pairs a custom geometric wordmark with a secondary serif for editorial warmth. The system uses a strict three-column grid inspired by architectural drawing conventions, with generous whitespace that lets each element breathe. The colour palette — warm stone, muted charcoal, and a single terracotta accent — bridges professional authority with approachable craft.",
    result:
      "This is a concept project. No real client outcomes or metrics are claimed. The work demonstrates brand identity thinking, visual systems design, and the translation of abstract values into cohesive design language.",
    disclaimer:
      "Form & Function is entirely fictional. The practice, its projects, and all associated imagery are conceptual and created to demonstrate design methodology.",
  },
  {
    slug: "object-studies",
    index: "02",
    title: "Object Studies",
    category: "Digital experience / Editorial",
    year: "2026",
    accent: "#bbb9b0",
    tag: "Digital",
    description:
      "An editorial-first digital flagship for a fictional design publication exploring the relationship between objects and meaning.",
    role: "UX direction, editorial design, front-end development, motion design",
    timeline: "12 weeks",
    overview:
      "Object Studies is an imagined quarterly publication that examines everyday objects through the lens of design history, material culture, and personal narrative. The digital platform needed to feel like holding a beautifully printed magazine — unhurried, intentional, and rich with typographic detail.",
    challenge:
      "Editorial websites often sacrifice reading experience for engagement metrics, burying content under aggressive navigation, autoplay video, and interstitial advertisements. The challenge was designing a digital reading environment that prioritised the writing itself while still feeling contemporary and interactive where it mattered.",
    process: [
      "Studied long-form editorial platforms and print magazines to identify what makes reading feel luxurious versus extractive.",
      "Developed a typographic system with three weights: a display serif for headlines, a humanist sans for navigation and metadata, and a text serif optimised for extended reading at small sizes.",
      "Prototyped scroll-driven transitions that reveal content progressively, giving each piece a sense of unfolding narrative.",
      "Built a flexible content grid that adapts to photography-heavy features, text-only essays, and mixed-media profiles equally well.",
    ],
    solution:
      "The platform leads with full-bleed imagery and restrained typography, using generous line-height and a reading-width column that never exceeds 680px. Navigation is minimal — a quiet header that recedes on scroll and a curated selection of related reading at each article's end. Motion is used sparingly: soft parallax on hero images and a subtle fade-up as content enters the viewport.",
    result:
      "This is a concept project. No real publication metrics, subscriber counts, or engagement data are claimed. The work demonstrates editorial UX thinking, typographic craft, and scroll-driven interaction design.",
    disclaimer:
      "Object Studies is entirely fictional. The publication, its articles, and all associated imagery are conceptual and created to demonstrate editorial digital design.",
  },
  {
    slug: "still-life",
    index: "03",
    title: "Still Life",
    category: "Campaign / Creative direction",
    year: "2026",
    accent: "#e6d4bf",
    tag: "Campaign",
    description:
      "An imagined studio campaign celebrating material, restraint, and the quiet beauty of everyday composition.",
    role: "Creative direction, art direction, campaign strategy, visual design",
    timeline: "6 weeks",
    overview:
      "Still Life is a conceptual campaign for an imagined homeware brand that believes the most interesting moments happen in the margins of daily life. The campaign needed to feel collected rather than curated — like discovering a perfectly arranged scene rather than being sold one.",
    challenge:
      "Lifestyle campaigns tend toward two extremes: aspirational perfection that feels unattainable, or forced casualness that reads as inauthentic. The brief demanded a visual tone that was neither — something that felt genuinely observed, materially honest, and quietly arresting.",
    process: [
      "Developed a moodboard language around Dutch still-life painting, Shaker furniture traditions, and Japanese mono no aware — the beauty of impermanence.",
      "Established lighting principles: natural north-facing light, long shadows, warm mid-tones with cool accents from material surfaces.",
      "Designed a composition framework based on classical still-life arrangements — objects in dialogue with negative space, every element earning its position.",
      "Created campaign typography that borrows from vintage specimen sheets — oversized, tightly tracked, and unapologetically typographic.",
    ],
    solution:
      "The final campaign system pairs large-format still-life compositions with restrained typographic overlays. Each image follows a strict compositional grid while appearing effortless. The colour direction — warm linen, raw clay, aged brass, and deep shadow — creates a palette that feels both timeless and specific. Campaign copy is minimal: short, declarative statements that name the feeling rather than describe the product.",
    result:
      "This is a concept project. No real campaign performance, reach, or conversion data are claimed. The work demonstrates creative direction, visual storytelling, and the development of a cohesive campaign system.",
    disclaimer:
      "Still Life is entirely fictional. The brand, campaign, and all associated imagery are conceptual and created to demonstrate campaign and art direction methodology.",
  },
];
