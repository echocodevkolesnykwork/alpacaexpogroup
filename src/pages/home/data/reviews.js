// Placeholder SVG used for all cards until real logos arrive from WP admin.
// WP/Toolset will provide either SVG icons of the same style or PNG with transparent bg.
const placeholderLogo = {
  type: 'html',
  html: `<svg height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <polygon points="18,2 34,32 2,32" fill="none" stroke="#00D4FF" stroke-width="2.5"></polygon>
  <line x1="18" y1="2" x2="18" y2="32" stroke="#00D4FF" stroke-width="1.4" opacity=".5"></line>
  <circle cx="18" cy="22" r="3" fill="#00D4FF" opacity=".4"></circle>
</svg>`,
};

export const homeReviews = [
  // ── Chunk 1 (initial bento) ───────────────────────────────────────────────
  {
    id: 'reference-review-spribe',
    company: 'Spribe',
    logo: placeholderLogo,
    text: 'Communication and problem solving are on a very good level. The stand exceeded all expectations — quality, timing, execution.',
    authorName: 'Ievgeniia Goldobina',
    authorPosition: 'Head of Marketing',
  },
  {
    id: 'reference-review-atlaslive',
    company: 'AtlasLive',
    logo: placeholderLogo,
    text: "Turn your visions into reality — that's exactly what Alpaca delivered. Flawless booth design and logistics from concept to teardown.",
    authorName: 'Michael Kovalenko',
    authorPosition: 'CEO',
  },
  {
    id: 'reference-review-uspex',
    company: 'Uspex',
    logo: placeholderLogo,
    text: 'Working with Alpaca for the third year in a row. Every time the result surprises us. Real professionals who understand the gaming world.',
    authorName: 'Anna Voloshyn',
    authorPosition: 'Marketing Director',
  },
  {
    id: 'reference-review-evoplay',
    company: 'Evoplay',
    logo: placeholderLogo,
    text: 'The stand became a real landmark at the expo. Visitors kept coming back. On time, on budget — no stress whatsoever.',
    authorName: 'Daria Savchenko',
    authorPosition: 'Brand Manager',
  },

  // ── Chunk 2 (hidden, revealed on "VIEW MORE REVIEWS") ────────────────────
  {
    id: 'reference-review-spribe-2',
    company: 'Spribe',
    logo: placeholderLogo,
    text: 'Alpaca set the bar at ICE. The LED cube integration was technically flawless and the activation drew non-stop traffic to our stand.',
    authorName: 'Ievgeniia Goldobina',
    authorPosition: 'Head of Marketing',
  },
  {
    id: 'reference-review-atlaslive-2',
    company: 'AtlasLive',
    logo: placeholderLogo,
    text: 'We have partnered with Alpaca across three continents. Each delivery is consistent, premium, and always on brief — rare in this industry.',
    authorName: 'Michael Kovalenko',
    authorPosition: 'CEO',
  },
  {
    id: 'reference-review-uspex-2',
    company: 'Uspex',
    logo: placeholderLogo,
    text: 'The team handled a last-minute design change 48 hours before build. Not a single compromise on quality. That level of trust is irreplaceable.',
    authorName: 'Anna Voloshyn',
    authorPosition: 'Marketing Director',
  },
  {
    id: 'reference-review-evoplay-2',
    company: 'Evoplay',
    logo: placeholderLogo,
    text: 'SBC Lisbon was our best stand yet. Every structural and visual element reflected our brand identity. Competitors were asking for our contractor.',
    authorName: 'Daria Savchenko',
    authorPosition: 'Brand Manager',
  },
];
