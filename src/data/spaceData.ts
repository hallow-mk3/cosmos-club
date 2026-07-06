export interface SpaceMission {
  id: string;
  name: string;
  agency: 'NASA' | 'ISRO' | 'SpaceX' | 'ESA' | 'JAXA';
  launchDate: string; // ISO string or date
  description: string;
  payload: string;
  orbit: string;
  site: string;
  status: 'Scheduled' | 'Delayed' | 'Active';
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  type: 'celestial' | 'mission' | 'lecture';
  description: string;
  location?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Nebula' | 'Galaxy' | 'Planet' | 'Deep Space' | 'Telescope';
  photographer: string;
  date: string;
}

export const spaceMissions: SpaceMission[] = [
  {
    id: 'm1',
    name: 'Nancy Grace Roman Space Telescope',
    agency: 'NASA',
    launchDate: '2026-08-30T16:00:00Z',
    description: 'A major NASA observatory designed to settle essential questions in dark energy and exoplanet research, launching on a SpaceX Falcon Heavy.',
    payload: 'Roman Space Telescope & Coronagraph',
    orbit: 'Sun-Earth L2 Orbit',
    site: 'Launch Complex 39A, Kennedy Space Center, Florida',
    status: 'Scheduled'
  },
  {
    id: 'm2',
    name: 'Gaganyaan-1 Test Flight',
    agency: 'ISRO',
    launchDate: '2026-09-20T05:00:00Z',
    description: 'The first uncrewed orbital test flight for India\'s human spaceflight program, validating the crew module safety systems and entry mechanics.',
    payload: 'Uncrewed Gaganyaan Crew Module',
    orbit: 'Low Earth Orbit (LEO)',
    site: 'Second Launch Pad, Satish Dhawan Space Centre, Sriharikota',
    status: 'Scheduled'
  },
  {
    id: 'm3',
    name: 'Intuitive Machines IM-3',
    agency: 'NASA',
    launchDate: '2026-10-25T11:00:00Z',
    description: 'A robotic Commercial Lunar Payload Services (CLPS) mission landing on the Moon to deploy scientific experiments and lunar data relays.',
    payload: 'Nova-C Lander & Payloads',
    orbit: 'Lunar Surface',
    site: 'Launch Complex 39A, Kennedy Space Center, Florida',
    status: 'Scheduled'
  },
  {
    id: 'm4',
    name: 'PLATO Space Telescope',
    agency: 'ESA',
    launchDate: '2026-12-15T09:00:00Z',
    description: 'PLAnetary Transits and Oscillations of stars (PLATO) is an ESA space telescope designed to discover and characterize Earth-sized exoplanets.',
    payload: 'PLATO Observatory Probe',
    orbit: 'Sun-Earth L2 Orbit',
    site: 'Guiana Space Centre, Kourou, French Guiana',
    status: 'Scheduled'
  }
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: 'c1',
    title: 'Perseids Meteor Shower Peak',
    date: '2026-08-12',
    type: 'celestial',
    description: 'One of the best meteor showers to observe, producing up to 100 meteors per hour. Best viewed from midnight to dawn in areas with dark skies.',
    location: 'Global (Northern Hemisphere preferred)'
  },
  {
    id: 'c2',
    title: 'Gaganyaan-1 Test Flight',
    date: '2026-09-20',
    type: 'mission',
    description: 'ISRO orbital test flight launch of the uncrewed crew module from SDSC Sriharikota.'
  },
  {
    id: 'c2-roman',
    title: 'Nancy Grace Roman Launch',
    date: '2026-08-30',
    type: 'mission',
    description: 'NASA\'s Nancy Grace Roman Space Telescope scheduled launch aboard a SpaceX Falcon Heavy.'
  },
  {
    id: 'c3',
    title: 'Astrophysics Colloquium: Dark Matter Mapping',
    date: '2026-08-05',
    type: 'lecture',
    description: 'Guest lecture by Dr. Sarah Jenkins from MIT on the latest gravitational lensing maps from the Euclid Telescope.',
    location: 'Cosmos Hall & Live Stream'
  },
  {
    id: 'c4',
    title: 'Annular Solar Eclipse',
    date: '2026-08-17',
    type: 'celestial',
    description: 'The "Ring of Fire" solar eclipse path will cross Antarctica and the southern Indian Ocean, visible as partial eclipse in parts of Australia.',
    location: 'Southern Hemisphere'
  },
  {
    id: 'c5',
    title: 'Supermoon (Sturgeon Moon)',
    date: '2026-08-28',
    type: 'celestial',
    description: 'The full moon will be near its closest point to Earth (perigee), appearing slightly larger and brighter than a normal full moon.',
    location: 'Global'
  },
  {
    id: 'c6',
    title: 'NASA Artemis III Flight Briefing',
    date: '2026-09-02',
    type: 'lecture',
    description: 'Deep dive into the landing coordinates, traverse maps, and scientific objectives of the Artemis III astronauts.',
    location: 'Online Webinar'
  },
  {
    id: 'c7',
    title: 'Orionids Meteor Shower',
    date: '2026-10-21',
    type: 'celestial',
    description: 'A medium-strength meteor shower producing about 20 meteors per hour, originating from debris left behind by Halley\'s Comet.',
    location: 'Global'
  }
];

export const basePhotos: GalleryPhoto[] = [
  {
    id: 'gp1',
    title: 'Pillars of Creation',
    description: 'Captured in near-infrared light by the James Webb Space Telescope, revealing new details about stars forming inside these dense columns of gas and dust.',
    url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=1200&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'NASA / ESA / JWST',
    date: '2022-10-19'
  },
  {
    id: 'gp2',
    title: 'Andromeda Galaxy (M31)',
    description: 'Our nearest major galactic neighbor, located approximately 2.5 million light-years from Earth. It spans about 220,000 light-years across.',
    url: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop',
    category: 'Galaxy',
    photographer: 'Astrophotographer Club Member',
    date: '2024-03-12'
  },
  {
    id: 'gp3',
    title: 'The Carina Nebula',
    description: 'A massive, bright nebula that houses several open clusters of stars, including the extremely unstable supergiant Eta Carinae.',
    url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'NASA / Hubble Space Telescope',
    date: '2020-04-24'
  },
  {
    id: 'gp4',
    title: 'Jovian Storms & Cyclones',
    description: 'Stunning close-up of Jupiter\'s turbulent atmosphere and the Great Red Spot, processed from raw JunoCam data.',
    url: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    category: 'Planet',
    photographer: 'NASA / JPL-Caltech / SwRI / MSSS',
    date: '2023-07-04'
  },
  {
    id: 'gp5',
    title: 'The Ring Nebula (M57)',
    description: 'A planetary nebula in the northern constellation of Lyra. It is formed by a shell of ionized gas expelled into the surrounding interstellar medium by a red giant star in its last stage of evolution.',
    url: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'James Webb Space Telescope',
    date: '2023-08-21'
  },
  {
    id: 'gp6',
    title: 'Whirlpool Galaxy (M51)',
    description: 'A classic spiral galaxy located in the constellation Canes Venatici. Its dramatic spiral arms are triggered by its interaction with a smaller companion galaxy.',
    url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=1200&auto=format&fit=crop',
    category: 'Galaxy',
    photographer: 'Hubble Heritage Team',
    date: '2019-11-15'
  }
];

export const weeklyUpdatePhotos: GalleryPhoto[] = [
  {
    id: 'w1',
    title: 'The Horsehead Nebula',
    description: 'A dark nebula in the constellation Orion. The nebula is located just to the south of Alnitak, the easternmost star of Orion\'s Belt.',
    url: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'Mount Palomar Observatory',
    date: '2026-07-20'
  },
  {
    id: 'w2',
    title: 'Pleiades Star Cluster',
    description: 'Also known as the Seven Sisters, this open star cluster contains middle-aged, hot B-type stars located in the constellation Taurus.',
    url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop',
    category: 'Deep Space',
    photographer: 'Mauna Kea Observatory',
    date: '2026-07-20'
  },
  {
    id: 'w3',
    title: 'The Orion Nebula',
    description: 'A diffuse nebula situated in the Milky Way, south of Orion\'s Belt in the constellation of Orion.',
    url: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'JWST NIRCam',
    date: '2026-07-20'
  },
  {
    id: 'w4',
    title: 'Sombrero Galaxy (M104)',
    description: 'A peculiar galaxy of unclear classification in the constellation borders of Virgo and Corvus, possessing a bright nucleus.',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    category: 'Galaxy',
    photographer: 'Hubble Space Telescope',
    date: '2026-07-20'
  },
  {
    id: 'w5',
    title: 'Saturn\'s Rings',
    description: 'Close-up of Saturn\'s magnificent ring system, composed of billions of ice particles, rocky debris, and dust.',
    url: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=800&auto=format&fit=crop',
    category: 'Planet',
    photographer: 'Cassini Spacecraft',
    date: '2026-07-20'
  },
  {
    id: 'w6',
    title: 'Vela Supernova Remnant',
    description: 'Expanding cloud of interstellar gas ejected during the death of a massive star about 11,000 years ago.',
    url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=800&auto=format&fit=crop',
    category: 'Deep Space',
    photographer: 'ESO VLT',
    date: '2026-07-20'
  },
  {
    id: 'w7',
    title: 'Milky Way Core over Atacama',
    description: 'The dense galactic center of the Milky Way galaxy seen from the dark skies of the Atacama Desert.',
    url: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800&auto=format&fit=crop',
    category: 'Deep Space',
    photographer: 'Chili Astro-Camp',
    date: '2026-07-20'
  },
  {
    id: 'w8',
    title: 'Crab Nebula (M1)',
    description: 'A supernova remnant and pulsar wind nebula in the constellation of Taurus, observed by Chinese astronomers in 1054 AD.',
    url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'NASA Chandra X-Ray',
    date: '2026-07-20'
  },
  {
    id: 'w9',
    title: 'Mars\' Valles Marineris',
    description: 'The grand canyon of Mars, stretching over 4,000 km long and reaching depths of up to 7 km.',
    url: 'https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?q=80&w=800&auto=format&fit=crop',
    category: 'Planet',
    photographer: 'Viking 1 Orbiter',
    date: '2026-07-20'
  },
  {
    id: 'w10',
    title: 'Helix Nebula (NGC 7293)',
    description: 'A large planetary nebula located in the constellation Aquarius, often referred to as the "Eye of God".',
    url: 'https://images.unsplash.com/photo-1504333631150-c8ab2da93b03?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'La Silla Observatory',
    date: '2026-07-20'
  },
  {
    id: 'w11',
    title: 'The Lagoon Nebula (M8)',
    description: 'A giant interstellar cloud in the constellation Sagittarius, classified as an emission nebula and a star-forming region.',
    url: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'Hubble Space Telescope',
    date: '2026-07-20'
  },
  {
    id: 'w12',
    title: 'Triangulum Galaxy (M33)',
    description: 'The third-largest member of the Local Group of galaxies, containing vast star-forming H II regions.',
    url: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=800&auto=format&fit=crop',
    category: 'Galaxy',
    photographer: 'Subaru Telescope',
    date: '2026-07-20'
  },
  {
    id: 'w13',
    title: 'Eagle Nebula Spire',
    description: 'A cold gas tower in the Eagle Nebula, stretching 9.5 light-years tall, harboring young stars.',
    url: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'Hubble WFC3',
    date: '2026-07-20'
  },
  {
    id: 'w14',
    title: 'Hubble Deep Field East',
    description: 'An image of a small region in the constellation Ursa Major, constructed from 342 separate exposures.',
    url: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=800&auto=format&fit=crop',
    category: 'Deep Space',
    photographer: 'NASA Hubble Team',
    date: '2026-07-20'
  },
  {
    id: 'w15',
    title: 'Neptune & Triton',
    description: 'Voyager 2\'s view of Neptune\'s deep blue atmosphere and its largest, geologically active moon Triton.',
    url: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=800&auto=format&fit=crop',
    category: 'Planet',
    photographer: 'NASA Voyager Project',
    date: '2026-07-20'
  },
  {
    id: 'w16',
    title: 'Rosette Nebula (NGC 2237)',
    description: 'A large, spherical emission nebula located near one end of a giant molecular cloud in the Monoceros region.',
    url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'Kitt Peak National Observatory',
    date: '2026-07-20'
  },
  {
    id: 'w17',
    title: 'Stephan\'s Quintet',
    description: 'A visual grouping of five galaxies, four of which form the first compact galaxy group ever discovered.',
    url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop',
    category: 'Galaxy',
    photographer: 'James Webb MIRI/NIRCam',
    date: '2026-07-20'
  },
  {
    id: 'w18',
    title: 'Very Large Telescope Array',
    description: 'The four Unit Telescopes of the VLT array shining lasers into the night sky to create artificial guide stars.',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    category: 'Telescope',
    photographer: 'ESO Astronomical Director',
    date: '2026-07-20'
  },
  {
    id: 'w19',
    title: 'Heart and Soul Nebulae',
    description: 'A complex star-forming region located in the Perseus arm of our galaxy, emitting bright red hydrogen light.',
    url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'WISE Space Telescope',
    date: '2026-07-20'
  },
  {
    id: 'w20',
    title: 'James Webb Space Telescope Orbit',
    description: 'Illustration of the JWST orbiting the Second Lagrange Point (L2) 1.5 million kilometers from Earth.',
    url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=800&auto=format&fit=crop',
    category: 'Telescope',
    photographer: 'NASA Aerospace Artist',
    date: '2026-07-20'
  },
  {
    id: 'w21',
    title: 'The Butterfly Nebula (NGC 6302)',
    description: 'A bipolar planetary nebula in the constellation Scorpius. It has one of the most complex structures seen in planetary nebulae.',
    url: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=800&auto=format&fit=crop',
    category: 'Nebula',
    photographer: 'Hubble Wide Field Camera 3',
    date: '2026-07-20'
  }
];
