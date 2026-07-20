// Single source of truth for site-wide content.
// Items marked TODO are placeholders pending confirmation from the client (see brief Section 11).

export const site = {
  name: 'Blossom Young',
  title: 'Cllr Blossom Young',
  role: 'Your local councillor for Beckton',
  council: 'Newham Council',
  ward: 'Beckton',
  party: 'Labour',

  // TODO: confirm exact ward boundary/area description
  wardDescription:
    'Beckton is a Newham Council ward covering the Beckton area of east London, including the Gallions Reach and Beckton District Centre neighbourhoods.',

  email: 'blossom.young@example.com', // TODO: confirm real contact email
  phone: '', // TODO: confirm phone number, leave blank to hide if none
  officeAddress: '', // TODO: confirm office/surgery address

  surgery: {
    // TODO: confirm real surgery day/time/location
    schedule: 'First Saturday of the month, 10am–12pm',
    location: 'Beckton Globe Library, 1 Kingsford Way, London E6 5JF',
    note: 'No appointment needed — just drop in, or email ahead to book a slot.',
  },

  councilProfileUrl: '', // TODO: link to council.newham.gov.uk profile if one exists

  imprint:
    'Promoted by [TODO: promoter name] on behalf of Blossom Young, both of [TODO: address], for Newham Labour Party.', // TODO: confirm exact imprint wording word-for-word — do not guess

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Find Help', href: '/find-help/' },
    { label: 'News', href: '/news/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],

  socialLinks: [
    // TODO: confirm exact registered handles/URLs — do not assume, verify each resolves correctly
    // { platform: 'facebook', label: 'Facebook', url: 'https://facebook.com/TODO' },
    // { platform: 'instagram', label: 'Instagram', url: 'https://instagram.com/TODO' },
    // { platform: 'x-twitter', label: 'X', url: 'https://x.com/TODO' },
  ] as { platform: string; label: string; url: string }[],

  helpCategories: [
    {
      slug: 'housing',
      title: 'Housing',
      description:
        'Repairs, disrepair, overcrowding, homelessness support, and social housing applications.',
    },
    {
      slug: 'council-tax-benefits',
      title: 'Council Tax & Benefits',
      description:
        'Council tax queries, discounts and exemptions, and help accessing benefits you may be entitled to.',
    },
    {
      slug: 'planning-development',
      title: 'Planning & Development',
      description:
        'Questions or objections about local planning applications and development in the ward.',
    },
    {
      slug: 'streets-bins-recycling',
      title: 'Streets, Bins & Recycling',
      description:
        'Missed bin collections, fly-tipping, potholes, street cleaning, and recycling queries.',
    },
    {
      slug: 'anti-social-behaviour',
      title: 'Anti-Social Behaviour',
      description:
        'Reporting and following up on anti-social behaviour, noise, and neighbourhood disputes.',
    },
    {
      slug: 'anything-else',
      title: 'Anything Else',
      description:
        "Not sure who to ask? Get in touch and I'll point you in the right direction or take it on myself.",
    },
  ],

  formspree: {
    // TODO: client to sign up at formspree.io and create one form per endpoint (free tier: 50/month)
    contact: '',
    newsletter: '',
    casework: '',
  },
};

export type HelpCategory = (typeof site.helpCategories)[number];
