// One source of truth for the 8 service pages — same structure as Pathfinder's
// service pages, with StoreStride's own services and numbers.
export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  hero: string;
  points: string[];
  stats: { metric: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'amazon-ppc-management', icon: 'target', title: 'Amazon PPC Management',
    short: 'Sponsored Products, Brands and Display campaigns built around profit.',
    hero: 'Our most popular service. A dedicated PPC specialist runs your Amazon ads across every format, built around your goal: more revenue, a lower ACoS or higher profit.',
    points: ['Full campaign build — one product per campaign, match types separated', 'Weekly optimisation, daily account checks', 'TACOS-led bids — judged on profit, not clicks', 'Negative keyword pruning every week', 'Transparent monthly reporting, no vanity metrics'],
    stats: [{ metric: '$1.5M', label: 'Supplement brand sales in 12 months' }, { metric: '4%', label: 'Baby brand TACOS — was 25%' }, { metric: '+£40K/mo', label: 'Extra revenue, £0 extra spend' }],
    faqs: [{ q: 'How quickly will PPC improve?', a: 'Most brands see measurable ACOS improvement within 30 days.' }, { q: 'Do you manage Sponsored Brands and Display too?', a: 'Yes — Products, Brands, Display and DSP, all under one roof.' }],
  },
  {
    slug: 'amazon-dsp', icon: 'tv', title: 'Amazon DSP',
    short: 'Display and video ads on and off Amazon that retarget and reach new buyers.',
    hero: 'Re-engage high-intent shoppers on and off Amazon using Sponsored Display and Amazon DSP, with Amazon Marketing Cloud insight.',
    points: ['Retargeting of product viewers and cart abandoners', 'Audience layering with Amazon shopper data', 'Upper-funnel reach where it is most profitable', 'DSP + Sponsored Products working together, not apart'],
    stats: [{ metric: '$1.2M', label: 'Pet brand annual revenue, 6× from $200K' }, { metric: '1.80x', label: 'DSP ROAS on a 10-month retargeting programme' }, { metric: '13M+', label: 'Impressions in a DSP brand-awareness push' }],
    faqs: [{ q: 'Is DSP only for big brands?', a: 'No — even smaller brands win with DSP when retargeting is done right.' }, { q: 'Does DSP work with PPC?', a: 'Yes. DSP fills the funnel; Sponsored Products closes it.' }],
  },
  {
    slug: 'google-ads-for-amazon', icon: 'search', title: 'Google Ads for Amazon',
    short: 'Send high-intent Google traffic straight to your Amazon listings.',
    hero: 'Google Ads that send buyers with intent straight to your Amazon listings — more external traffic, better organic rank, more sales.',
    points: ['Search campaigns built around your converting keywords', 'External traffic that lifts organic rank on Amazon', 'Full tracking from click to Amazon sale', 'Budget controlled daily, scaled only when profitable'],
    stats: [{ metric: '3×', label: 'Beauty brand ROAS, page 1 in 6 months' }, { metric: '+$100K', label: 'New launch sales in first 60 days' }, { metric: '88%', label: 'Of attributed orders new-to-brand on a launch push' }],
    faqs: [{ q: 'Why send Google traffic to Amazon?', a: 'External traffic converts well and signals to Amazon that your product is in demand, which lifts organic rank.' }, { q: 'Do I need a website?', a: 'No — traffic goes straight to your Amazon listing.' }],
  },
  {
    slug: 'listing-optimization', icon: 'doc', title: 'Listing Optimization',
    short: 'Titles, bullets, images and A+ Content written to rank and convert.',
    hero: 'Keyword-rich titles, persuasive bullets, compelling descriptions and A+ Content that rank higher organically and turn browsers into buyers.',
    points: ['Keyword research from real buyer searches', 'Titles + bullets written to convert, not just rank', 'A+ Content and Brand Store design', 'Backend keywords and image optimisation'],
    stats: [{ metric: '+71%', label: 'Blanket brand revenue in 2 months' }, { metric: '3×', label: 'Beauty brand ROAS after listing rebuild' }, { metric: 'Page 1', label: 'Rankings in 6 months for a brand-new product' }],
    faqs: [{ q: 'Will optimisation alone grow sales?', a: 'It lifts conversion and organic rank — combined with PPC, the effect compounds.' }, { q: 'Do you write the copy?', a: 'Yes — titles, bullets, descriptions and A+ Content, all in-house.' }],
  },
  {
    slug: 'storefront-design', icon: 'store', title: 'Storefront Design',
    short: 'A Brand Store that looks like your brand and sells like your best listing.',
    hero: 'Your Amazon Brand Store, designed to feel like your own website — shoppable, on-brand, and built to turn ad traffic into sales.',
    points: ['Full Brand Store build — homepage, category and product pages', 'Design that matches your brand, not a template', 'Shoppable layouts that guide buyers to your best sellers', 'Store Spotlight ads to drive traffic straight to it'],
    stats: [{ metric: '$1.5M', label: 'Supplement brand sales in 12 months' }, { metric: '40%', label: 'Net margin on a full-funnel account' }, { metric: '5.0★', label: 'Client rated' }],
    faqs: [{ q: 'Do I need Brand Registry?', a: 'Yes — a Brand Store needs an enrolled brand. We help with that too.' }, { q: 'How long does a store take?', a: 'A typical build takes 1–2 weeks, including Amazon approval.' }],
  },
  {
    slug: 'full-account-management', icon: 'folder', title: 'Full Account Management',
    short: 'Your whole Amazon account, run end to end by one dedicated team.',
    hero: 'End-to-end Seller Central management: PPC, listings, inventory health, account compliance and monthly strategy reviews — all under one roof.',
    points: ['One dedicated team: manager, PPC specialist, designer, copywriter', 'PPC + listings + inventory + compliance, together', 'Weekly updates, monthly strategy reviews', 'Account health monitored daily'],
    stats: [{ metric: '$10M+', label: 'Ad spend managed across 50+ brands' }, { metric: '50+', label: 'Brands scaled' }, { metric: '5+', label: 'Years of Amazon expertise' }],
    faqs: [{ q: 'Is full management month to month?', a: 'Yes — no long-term lock-in.' }, { q: 'Who do I talk to?', a: 'Your dedicated team, directly. No junior handoff, no scripts.' }],
  },
  {
    slug: 'ad-account-audit', icon: 'audit', title: 'A–Z Ad Account Audit',
    short: 'A deep review of your ads, listings and account health — free to start.',
    hero: 'We start with a free audit to pinpoint exactly what is costing you sales — wasted spend, broken structure, missed keywords — and how to fix it.',
    points: ['Full account audit within 24 hours', 'Wasted spend, structure and keyword gaps, listed plainly', 'A written plan: what to fix first, targets, timeline', 'Free — no commitment, no sales pressure'],
    stats: [{ metric: '24 hrs', label: 'Your personalised audit, delivered' }, { metric: '84%', label: 'TACOS cut found in one audit' }, { metric: '+£40K/mo', label: 'Found by fixing structure, £0 extra spend' }],
    faqs: [{ q: 'What does the audit cost?', a: 'Nothing — the first audit is free.' }, { q: 'What do I get?', a: 'A written list of what is costing you sales and how to fix it.' }],
  },
  {
    slug: 'sponsored-brand-video', icon: 'video', title: 'Sponsored Brand Video',
    short: 'High-converting auto-play video ads in search results.',
    hero: 'High-converting auto-play video ads in search results — one of Amazon’s highest click-through formats. We manage targeting, creative and bid optimisation.',
    points: ['Video creative that stops the scroll', 'Search placement on your converting keywords', 'CTR and bid optimisation every week', 'Works with Sponsored Brands for full coverage'],
    stats: [{ metric: '3×', label: 'Beauty brand ROAS with Brand Video' }, { metric: 'Page 1', label: 'Rankings in 6 months' }, { metric: '+$100K', label: 'Launch sales in first 60 days' }],
    faqs: [{ q: 'Do I need my own video?', a: 'No — we handle the creative with you.' }, { q: 'Where do video ads show?', a: 'In Amazon search results, auto-playing as shoppers browse.' }],
  },
];
