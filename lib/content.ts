export const siteConfig = {
  name: "ZanAir",
  tagline: "Where Roads End, We Begin",
  description:
    "East Africa's most experienced boutique airline. Charter, scenic, and scheduled flights across Tanzania, Zanzibar, Serengeti, and beyond. Flying since 1991.",
  phone: "+255 (0) 242 233768",
  whatsapp: "+255242233768",
  email: "reservations@zanair.com",
  address: "Zanzibar International Airport, Zanzibar, Tanzania",
  founded: "1991",
  founder: "Carl G. Salisbury",
  yearsFlying: "35+",
  destinations: "11",
  sister: "ZanTours",
};

export const navigation = {
  links: [
    { label: "Destinations", href: "/destinations" },
    { label: "Services", href: "/services/scheduled-flights" },
    { label: "Scenic Flights", href: "/scenic-flights", highlight: true },
    { label: "Fleet", href: "/fleet" },
    { label: "About", href: "/about" },
  ],
  cta: { label: "Book a Flight", href: "/contact" },
};

export const homepage = {
  hero: {
    eyebrow: "Est. 1991 · Zanzibar, Tanzania",
    headline: "Where Roads End,\nWe Begin",
    subheadline:
      "35 years connecting East Africa's most extraordinary places — from above. Scheduled flights, private charters, and scenic experiences across Tanzania and the islands.",
    cta_primary: { label: "Book a Flight", href: "/contact" },
    cta_secondary: { label: "Explore Destinations", href: "/destinations" },
  },

  trustBar: [
    { stat: "1991", label: "Founded in Zanzibar" },
    { stat: "35+", label: "Years in the Air" },
    { stat: "11", label: "Destinations" },
    { stat: "4", label: "Ways to Fly" },
    { stat: "ZanTours", label: "Sister Company" },
  ],

  services: {
    eyebrow: "How We Fly",
    headline: "Four ways to experience East Africa from above.",
    items: [
      {
        slug: "scheduled-flights",
        title: "Scheduled Flights",
        tagline: "Your seat is waiting.",
        description:
          "Daily connections between Tanzania's most sought-after destinations. Reliable, punctual, and built for the traveller who has places to be.",
        href: "/services/scheduled-flights",
      },
      {
        slug: "charter-flights",
        title: "Charter Flights",
        tagline: "Your aircraft. Your schedule. Your route.",
        description:
          "When the schedule doesn't fit your journey, we build one that does. Full aircraft charters to any airstrip across East Africa — on your terms.",
        href: "/services/charter-flights",
      },
      {
        slug: "scenic-flights",
        title: "Scenic Flights",
        tagline: "The view that changes everything.",
        description:
          "Zanzibar from above — the spice coast, the reef, the ancient rooftops of Stone Town. 30 minutes that will become one of your life's great memories.",
        href: "/scenic-flights",
        highlight: true,
      },
      {
        slug: "transfers",
        title: "Transfers",
        tagline: "From runway to resort, seamlessly.",
        description:
          "Complimentary terminal transfers in Dar es Salaam. Special rates to your hotel or lodge on Zanzibar through our sister company, ZanTours.",
        href: "/services/transfers",
      },
    ],
  },

  scenicFlightsFeature: {
    eyebrow: "A ZanAir Original Experience",
    headline: "Zanzibar looks different from above.",
    body: "You've walked the spice markets. You've swum off the white sand beaches. You've watched the sun melt into the Indian Ocean. But you have not yet seen Zanzibar the way we see it every day — from the air, where the reef turns from green to turquoise to deep blue, where the carved rooftops of Stone Town form a maze of history, where the whole island unfolds beneath you like a secret finally revealed. This is a 30-minute flight that becomes a story you tell for the rest of your life.",
    cta: { label: "Book a Scenic Flight", href: "/scenic-flights" },
    note: "Departures daily. Limited seats per flight.",
  },

  experience: {
    eyebrow: "The ZanAir Difference",
    headline: "It's not just how you get there.\nIt's the first thing you'll remember.",
    items: [
      {
        number: "01",
        title: "Every seat is a window seat.",
        body: "Our small aircraft put you close to the sky, close to the land, close to the moment. At 3,000 feet, you don't watch East Africa — you're inside it.",
      },
      {
        number: "02",
        title: "30 minutes instead of 8 hours.",
        body: "The road from Arusha to the Serengeti takes most of a day. We'll have you there before your coffee cools. Time is the only luxury that matters.",
      },
      {
        number: "03",
        title: "Pilots who know every airstrip by name.",
        body: "35 years of landings on grass strips, coastal runways, and bush airfields. Our crews have flown these routes thousands of times. Experience isn't claimed here — it's counted.",
      },
      {
        number: "04",
        title: "No crowds. No queues. No drama.",
        body: "Up to 12 passengers. One aircraft. A departure that runs on your safari schedule, not a commercial airline's convenience.",
      },
      {
        number: "05",
        title: "The detour that becomes the story.",
        body: "Sometimes the banking turn reveals a herd of elephants below. Sometimes the light over the crater stops everyone mid-sentence. We don't apologise for those moments.",
      },
    ],
  },

  testimonials: {
    eyebrow: "In Their Own Words",
    headline: "Real passengers. Real routes. Real reactions.",
    items: [
      {
        quote:
          "I've been on six safaris. The flight over the Ngorongoro Crater with ZanAir is the only time I've looked out of an airplane window and felt my breath leave me completely.",
        name: "Sarah M.",
        country: "United Kingdom",
        route: "Arusha → Ngorongoro",
      },
      {
        quote:
          "We almost took the road to the Serengeti. Eight hours versus 45 minutes in the air — once you've flown with ZanAir, you cannot imagine doing it any other way.",
        name: "James & Claire T.",
        country: "Australia",
        route: "Zanzibar → Serengeti",
      },
      {
        quote:
          "The scenic flight over Stone Town was my wife's idea. I thought 30 minutes in a small plane was going to be nothing. I was completely wrong. We booked a second flight the next morning.",
        name: "Marco F.",
        country: "Italy",
        route: "Scenic Flight, Zanzibar",
      },
      {
        quote:
          "As a travel agent who sends clients across East Africa every week, ZanAir is the only small carrier I trust without reservation. Their consistency is extraordinary.",
        name: "Amina K.",
        country: "Kenya",
        route: "Travel Agent, Nairobi",
      },
    ],
  },

  emailCapture: {
    headline: "Plan your East Africa journey.",
    subheadline:
      "Seasonal schedules, new routes, travel guides, and early access — straight to your inbox. No noise. Just the good stuff.",
    placeholder: "Your email address",
    cta: "Get the Guide",
    note: "No spam. Unsubscribe anytime.",
  },
};

export const destinations = [
  {
    slug: "serengeti",
    name: "The Serengeti",
    tagline: "The endless plains that move.",
    heroHeadline: "The Serengeti doesn't end.\nIt just begins again.",
    badge: "Safari · Wildlife · Migration",
    latitude: "-2.3333",
    longitude: "34.8333",
    airstrips: ["Seronera", "Ndutu", "Kogatende", "Lobo", "Grumeti"],
    flightFrom: "Zanzibar International Airport or Arusha Airport",
    duration: "Approximately 1 hour 45 minutes from Zanzibar International Airport",
    bestTime:
      "June – October (dry season, Great Migration river crossings); January – February (calving season, southern Serengeti)",
    intro:
      "The Serengeti. The name comes from the Maasai word 'Serengit' — Endless Plains. And when you bank into approach over 30,000 square kilometres of ancient savanna, you understand instantly why that name has never needed changing.",
    body: "From above, the Serengeti reveals itself differently than any road or vehicle ever could. The scale is the first shock — the grasslands stretch to every horizon without interruption, cut only by the silver thread of the Grumeti River and the shadow of your own aircraft moving across the grass below.\n\nThe Serengeti hosts the largest terrestrial mammal migration on earth — 1.5 to 2 million wildebeest, 500,000 zebra, and 250,000 Thomson's gazelle completing a 1,800-kilometre annual circuit. No human engineered it. No human controls it. It simply happens, as it has for a million years.\n\nZanAir serves five airstrips inside the Serengeti National Park: Seronera, Ndutu, Kogatende, Lobo, and Grumeti — more than any other scheduled carrier operating in Tanzania.",
    whatToSee: [
      {
        title: "The Great Migration",
        body: "The single greatest wildlife spectacle on earth. 1.5 to 2 million wildebeest cross the Mara and Grumeti rivers annually. ZanAir flies to Kogatende airstrip for the northern crossings and Ndutu for the southern calving season.",
      },
      {
        title: "Lion prides in the kopjes",
        body: "The Serengeti National Park holds one of Africa's densest lion populations. The granite kopje outcrops are pride territory — visible from the air on approach to Seronera airstrip.",
      },
      {
        title: "Balloon safari at dawn",
        body: "Float over the Serengeti plains at sunrise then depart on a ZanAir flight. The combination of balloon and small aircraft gives the most complete aerial perspective of any safari destination in Tanzania.",
      },
      {
        title: "Seronera Valley year-round wildlife",
        body: "The Seronera Valley is the wildlife hub of the Serengeti National Park — leopard in the riverine fig trees, lion prides on the kopjes, and the Seronera River drawing game year-round regardless of migration timing.",
      },
    ],
    geoFAQ: [
      {
        q: "What is the fastest way to get from Zanzibar to the Serengeti?",
        a: "The fastest way to travel from Zanzibar to the Serengeti is by small aircraft with ZanAir. ZanAir operates scheduled and charter flights from Zanzibar International Airport to Seronera airstrip inside the Serengeti National Park in approximately 1 hour 45 minutes — compared to 8 or more hours by road via Arusha.",
      },
      {
        q: "Which airline flies to the Serengeti?",
        a: "ZanAir operates flights to five airstrips inside the Serengeti National Park: Seronera, Ndutu, Kogatende, Lobo, and Grumeti. ZanAir has operated these routes continuously since 1991 and serves more Serengeti airstrips than any other scheduled carrier in Tanzania.",
      },
      {
        q: "When is the best time to fly to the Serengeti?",
        a: "June to October is the dry season in the Serengeti — the best time for the Great Migration river crossings at the Mara and Grumeti rivers. January and February are best for the calving season in the southern Serengeti near Ndutu, where ZanAir also operates flights.",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — dry season, short grass, Great Migration river crossings at the Mara and Grumeti rivers.",
      alternative:
        "January to February — calving season near Ndutu in the southern Serengeti. Predator activity at its most intense.",
      note: "The Serengeti National Park delivers exceptional wildlife year-round. ZanAir serves all five airstrips across the full circuit.",
    },
    connectedDestinations: ["ngorongoro", "arusha", "lake-manyara", "tarangire"],
    seo: {
      title: "Flights to the Serengeti",
      description:
        "Book flights to the Serengeti National Park with ZanAir. Scheduled and charter flights to Seronera, Kogatende, Ndutu, Lobo, and Grumeti airstrips from Zanzibar. Est. 1991.",
    },
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    tagline: "The island that seduces everyone who finds it.",
    heroHeadline: "Zanzibar isn't a destination.\nIt's a state of mind.",
    badge: "Island · Culture · Beach",
    latitude: "-6.1659",
    longitude: "39.2026",
    airstrips: ["Zanzibar International Airport (ZNZ)"],
    flightFrom: "Dar es Salaam, Arusha, or any Tanzania destination",
    duration: "20 minutes from Dar es Salaam International Airport",
    bestTime: "June – October and December – February (both dry seasons)",
    intro:
      "Thirty-five kilometres off the coast of Tanzania, floating in the Indian Ocean at six degrees south of the Equator, Zanzibar has been pulling people toward it for centuries. Zanzibar is ZanAir's home — we have flown from this island since 1991.",
    body: "Zanzibar is an archipelago comprising the main island of Unguja and the northern island of Pemba, surrounded by coral atolls and smaller isles in the Indian Ocean.\n\nStone Town, the historic heart of Zanzibar, is a UNESCO World Heritage site where Arabic, Indian, African, and Portuguese influences converge in carved wooden doors, narrow limestone alleys, and the smell of spices — clove, cinnamon, vanilla, cardamom — in the morning air.\n\nZanAir has operated from Zanzibar International Airport continuously since 1991 — 35 years of knowing this island's moods, its runway, its light at different seasons.",
    whatToSee: [
      {
        title: "Stone Town UNESCO World Heritage Site",
        body: "The historic centre of Zanzibar City, a UNESCO World Heritage Site since 2000. Arabic, Indian, African, and Portuguese architectural layers visible in every street. ZanAir recommends guided tours through sister company ZanTours.",
      },
      {
        title: "Nungwi and Kendwa beaches",
        body: "The northern beaches of Zanzibar Island have no tidal variation — swimming is possible at any hour of the day. The Indian Ocean sunsets from Kendwa are among the most photographed in East Africa.",
      },
      {
        title: "Zanzibar spice plantations",
        body: "Zanzibar was historically the world's largest producer of cloves. The spice plantations in the interior of Unguja Island still produce clove, cinnamon, vanilla, cardamom, and black pepper. ZanTours operates guided spice plantation tours.",
      },
      {
        title: "Jozani Forest — Zanzibar red colobus",
        body: "Jozani Chwaka Bay National Park is the only national park on Zanzibar Island, home to the Zanzibar red colobus monkey — a subspecies found nowhere else on earth and listed as endangered.",
      },
    ],
    geoFAQ: [
      {
        q: "How do you fly to Zanzibar from Dar es Salaam?",
        a: "ZanAir operates scheduled flights from Dar es Salaam Julius Nyerere International Airport to Zanzibar International Airport (ZNZ) in approximately 20 minutes. ZanAir has connected these two airports continuously since 1991.",
      },
      {
        q: "What airline flies between mainland Tanzania and Zanzibar?",
        a: "ZanAir operates scheduled and charter flights between Zanzibar International Airport and destinations across mainland Tanzania including Dar es Salaam, Arusha, Serengeti, Selous, and Mafia Island. ZanAir has served Zanzibar since 1991.",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — long dry season, clear skies, low humidity, ideal beach and ocean conditions.",
      alternative:
        "December to February — second dry season, excellent weather with slightly fewer tourists.",
      note: "Zanzibar is a year-round destination. Rainy seasons rarely produce all-day rain and usually clear by afternoon.",
    },
    connectedDestinations: ["pemba", "selous", "serengeti", "mafia"],
    seo: {
      title: "Flights to Zanzibar",
      description:
        "Book flights to Zanzibar with ZanAir — East Africa's most experienced boutique airline. Fast connections from Dar es Salaam, Arusha, and across Tanzania. Est. 1991.",
    },
  },
  {
    slug: "ngorongoro",
    name: "Ngorongoro",
    tagline: "The world's greatest natural amphitheatre.",
    heroHeadline: "A crater the size of a city.\nWildlife dense enough to stop your breath.",
    badge: "Safari · UNESCO · Crater",
    latitude: "-3.2333",
    longitude: "35.5000",
    airstrips: ["Lake Manyara Airstrip (LKY)", "Arusha Airport (ARK)"],
    flightFrom: "Zanzibar International Airport or Dar es Salaam",
    duration:
      "Approximately 1 hour 30 minutes from Zanzibar International Airport to Lake Manyara Airstrip, then 45 minutes by vehicle to the crater rim",
    bestTime:
      "June – September (dry season, optimal game viewing); December – March (green season, fewer tourists)",
    intro:
      "Three million years ago, one of the largest volcanoes in Africa collapsed inward on itself and formed a caldera 19 kilometres wide and 600 metres deep. The Ngorongoro Crater is now a UNESCO World Heritage Site and one of Africa's most concentrated wildlife sanctuaries.",
    body: "The Ngorongoro Conservation Area covers 8,288 square kilometres of protected highlands in Tanzania, administered by the Ngorongoro Conservation Area Authority. The crater itself — 19 kilometres in diameter, 600 metres deep — is a self-contained ecosystem holding approximately 25,000 large animals year-round.\n\nThe crater floor holds lion, leopard, cheetah, spotted hyena, African elephant, hippopotamus, wildebeest, Burchell's zebra, Cape buffalo, and one of the last viable populations of black rhinoceros in Tanzania.\n\nZanAir flies to Lake Manyara Airstrip (LKY), the closest airstrip to the Ngorongoro Crater — 45 minutes by vehicle from the crater rim.",
    whatToSee: [
      {
        title: "The Ngorongoro Crater floor",
        body: "A full-day game drive on the crater floor of the Ngorongoro Conservation Area offers the highest wildlife density of any safari destination in Tanzania. The black rhinoceros population here is one of the last viable breeding populations in East Africa.",
      },
      {
        title: "Crater rim sunrise",
        body: "The lodges on the Ngorongoro Crater rim sit at 2,286 metres above sea level. Morning mist fills the crater at dawn before burning off to reveal the full 19-kilometre diameter below — one of the great slow reveals in African travel.",
      },
      {
        title: "Olduvai Gorge",
        body: "Located 30 kilometres from the Ngorongoro Crater, Olduvai Gorge is where paleoanthropologist Louis Leakey discovered evidence of Homo habilis ancestors 1.8 million years old. A small museum contextualises the significance of the site.",
      },
    ],
    geoFAQ: [
      {
        q: "What airline flies to the Ngorongoro Crater?",
        a: "There is no airstrip inside the Ngorongoro Crater itself. ZanAir flies to Lake Manyara Airstrip (IATA: LKY), the closest airport to the Ngorongoro Conservation Area — approximately 45 minutes by vehicle from the crater rim. ZanAir also serves Arusha Airport (ARK), 2 hours from the crater.",
      },
      {
        q: "How do you get to the Ngorongoro Crater by plane?",
        a: "ZanAir operates flights to Lake Manyara Airstrip (LKY) from Zanzibar International Airport and Dar es Salaam. From Lake Manyara airstrip, the Ngorongoro Crater rim is approximately 45 minutes by vehicle. ZanAir has served this route since 1991.",
      },
    ],
    bestTimeDetail: {
      peak: "June to September — dry season, excellent visibility into the crater from the rim.",
      alternative:
        "December to March — green season, vivid crater walls, excellent birdlife, fewer tourists.",
      note: "The Ngorongoro Crater delivers consistent wildlife year-round — unlike migration-dependent parks, the crater's enclosed ecosystem retains its animals permanently.",
    },
    connectedDestinations: ["serengeti", "lake-manyara", "arusha", "tarangire"],
    seo: {
      title: "Flights to Ngorongoro Crater",
      description:
        "Book flights to Ngorongoro Crater with ZanAir. Fly to Lake Manyara Airstrip — closest airport to the UNESCO World Heritage crater. Charter and scheduled from Zanzibar.",
    },
  },
  {
    slug: "selous",
    name: "Selous",
    tagline: "Africa's largest game reserve. Almost no one goes.",
    heroHeadline: "50,000 square kilometres.\nYou'll have most of it to yourself.",
    badge: "Safari · Wilderness · Boat Safari",
    latitude: "-9.0000",
    longitude: "37.5000",
    airstrips: ["Mtembere Airstrip"],
    flightFrom: "Zanzibar International Airport or Dar es Salaam",
    duration: "45 minutes from Zanzibar International Airport",
    bestTime: "June – October (dry season, Rufiji River at lowest, best boat safaris)",
    intro:
      "The Selous Game Reserve — now officially Nyerere National Park — is the largest protected wildlife area in Africa, covering 50,000 square kilometres of southern Tanzania. Larger than Switzerland. ZanAir flies there in 45 minutes from Zanzibar.",
    body: "The Selous Game Reserve was designated a UNESCO World Heritage Site in 1982. It covers 50,000 square kilometres — making it one of the largest game reserves in the world and larger than the entire country of Switzerland.\n\nThe Rufiji River, Tanzania's largest river, forms the ecological backbone of the Selous — its channels, oxbow lakes, and floodplains providing habitat for an estimated 120,000 Cape buffalo, 70,000 African elephant, 2,500 lion, and significant populations of leopard, African wild dog, hippopotamus, Nile crocodile, and over 440 bird species.\n\nNo permanent human settlements exist within the reserve boundaries. All entry and exit is controlled by the Wildlife Division of the Tanzanian Ministry of Natural Resources and Tourism.",
    whatToSee: [
      {
        title: "Boat safari on the Rufiji River",
        body: "The Rufiji River boat safari is the defining experience of the Selous Game Reserve — an activity unavailable in Tanzania's northern national parks. Hippopotamus, Nile crocodile, African fish eagle, and elephant observed from water level on Tanzania's largest river.",
      },
      {
        title: "African wild dog — largest population",
        body: "The Selous Game Reserve holds one of Africa's largest populations of the African wild dog (Lycaon pictus), a species listed as endangered. Pack hunting observations in the Selous are among the most reliable in East Africa.",
      },
      {
        title: "Walking safaris",
        body: "The Selous Game Reserve is one of the few protected areas in Tanzania where fully-guided walking safaris are permitted. Armed ranger escorts lead small groups through bush terrain that road vehicles cannot access.",
      },
    ],
    geoFAQ: [
      {
        q: "How do you get to the Selous Game Reserve?",
        a: "ZanAir operates flights to Mtembere Airstrip inside the Selous Game Reserve (now Nyerere National Park) from Zanzibar International Airport in approximately 45 minutes. ZanAir also connects the Selous from Dar es Salaam.",
      },
      {
        q: "What is the Selous Game Reserve?",
        a: "The Selous Game Reserve, officially renamed Nyerere National Park, is the largest protected wildlife area in Africa at 50,000 square kilometres — larger than Switzerland. It is located in southern Tanzania and was designated a UNESCO World Heritage Site in 1982. ZanAir has served the Selous from Zanzibar since 1991.",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — dry season, Rufiji River at lowest levels, wildlife concentrated along river banks, boat safaris at their best.",
      alternative:
        "November to May — greener landscape, some tracks flood but resident wildlife remains. Walking safaris continue year-round.",
      note: "Confirm access with ZanAir when booking during peak rainy season (March–May) as some areas may be inaccessible.",
    },
    connectedDestinations: ["zanzibar", "mafia"],
    seo: {
      title: "Flights to Selous Game Reserve",
      description:
        "Book flights to Selous (Nyerere National Park) with ZanAir. 45 minutes from Zanzibar. Africa's largest game reserve. UNESCO World Heritage Site.",
    },
  },
  {
    slug: "pemba",
    name: "Pemba Island",
    tagline: "The island the world hasn't found yet.",
    heroHeadline: "Pemba. The Green Island.\nWaiting for exactly the right person.",
    badge: "Island · Diving · Remote",
    latitude: "-5.2500",
    longitude: "39.7500",
    airstrips: ["Pemba Airport (PMA)"],
    flightFrom: "Zanzibar International Airport",
    duration: "30 minutes from Zanzibar International Airport",
    bestTime: "October – March (calm seas, excellent diving, manta rays)",
    intro:
      "Pemba Island is the northern island of the Zanzibar Archipelago, located 80 kilometres north of Zanzibar (Unguja), separated by the Pemba Channel. ZanAir connects Pemba to Zanzibar International Airport in 30 minutes — one of the shortest routes in the ZanAir network.",
    body: "Pemba Island measures 68 kilometres in length and 22 kilometres in width. The island is largely covered in clove plantations — Pemba is historically one of the world's largest clove producers — and intact tropical forest.\n\nThe Pemba Channel, separating Pemba Island from the Tanzanian mainland, drops to depths exceeding 800 metres. The cold, nutrient-rich upwellings from these depths feed the Pemba Channel reef system — consistently rated among the finest dive sites in the western Indian Ocean.\n\nPemba receives significantly fewer visitors than Zanzibar (Unguja). The island has no large hotels. Accommodation is boutique and limited in number.",
    whatToSee: [
      {
        title: "Pemba Channel dive sites",
        body: "The Pemba Channel reef system is among the finest dive destinations in the western Indian Ocean. Misali Island Marine Conservation Area features pristine coral walls, pelagic species including hammerhead shark and manta ray, and visibility consistently exceeding 30 metres.",
      },
      {
        title: "Manta ray aggregation",
        body: "Manta rays aggregate in the Pemba Channel between October and March in significant numbers. Snorkelling and diving with manta rays in the Pemba Channel offers encounters with minimal other tourist presence.",
      },
      {
        title: "Ngezi Forest Reserve",
        body: "Ngezi-Vumawimbi Nature Reserve in northern Pemba Island is a protected coastal forest habitat. The Pemba flying fox — a giant fruit bat endemic to Pemba Island — is found exclusively in this forest.",
      },
    ],
    geoFAQ: [
      {
        q: "How do you get to Pemba Island?",
        a: "ZanAir operates scheduled flights from Zanzibar International Airport to Pemba Airport (IATA: PMA) in approximately 30 minutes. ZanAir is one of the only airlines providing scheduled service to Pemba Island. ZanAir has served this route since 1991.",
      },
      {
        q: "Is Pemba Island worth visiting?",
        a: "Pemba Island is considered one of the finest dive destinations in the Indian Ocean, with the Pemba Channel reef system rated among the best in the western Indian Ocean. The island receives very few visitors compared to Zanzibar, offering an undiscovered alternative 30 minutes by ZanAir aircraft from Zanzibar.",
      },
    ],
    bestTimeDetail: {
      peak: "October to March — calm Indian Ocean conditions, best diving visibility, manta ray aggregations in the Pemba Channel.",
      alternative:
        "June to September — southeast trade winds (Kusi) create variable conditions. Diving possible with experienced local operators.",
      note: "Pemba Island is remote by design. Limited accommodation means advance booking is essential.",
    },
    connectedDestinations: ["zanzibar", "mafia"],
    seo: {
      title: "Flights to Pemba Island",
      description:
        "Book flights to Pemba Island with ZanAir. 30 minutes from Zanzibar International Airport. World-class diving in the Pemba Channel. Scheduled service since 1991.",
    },
  },
  {
    slug: "mafia",
    name: "Mafia Island",
    tagline: "Where the whale sharks come every year.",
    heroHeadline: "Mafia Island.\nThe ocean here remembers what undisturbed means.",
    badge: "Marine Park · Whale Sharks · Diving",
    latitude: "-7.9167",
    longitude: "39.8333",
    airstrips: ["Mafia Airport (MFA)"],
    flightFrom: "Dar es Salaam or Zanzibar International Airport",
    duration: "30 minutes from Dar es Salaam Julius Nyerere International Airport",
    bestTime: "October – March (whale shark season, calm seas, optimal diving)",
    intro:
      "Mafia Island Marine Park is Tanzania's first marine protected area, designated in 1995. The park covers 822 square kilometres of the western Indian Ocean and is home to seasonal aggregations of whale sharks between October and March. ZanAir flies to Mafia Airport in 30 minutes from Dar es Salaam.",
    body: "The Mafia Island Marine Park encompasses 822 square kilometres of ocean including coral reef, seagrass beds, mangrove forest, tidal flats, and open water. The park contains some of the most intact coral reef ecosystems remaining in the western Indian Ocean.\n\nBetween October and March, juvenile whale sharks — the world's largest fish, reaching lengths of 12 metres — feed in the shallow, warm waters off Mafia's northeastern coast. This aggregation is one of the most reliable and accessible whale shark snorkelling sites in the world.\n\nMafia Island has no large resort hotels. Accommodation is limited to small, boutique properties. The island receives very few visitors compared to Zanzibar.",
    whatToSee: [
      {
        title: "Whale shark snorkelling",
        body: "Between October and March, juvenile whale sharks feed in the waters off Mafia Island's northeastern coast. Local fishermen locate the animals and boat-based snorkelling encounters are coordinated by licensed operators within the Mafia Island Marine Park guidelines. The Mafia Island whale shark aggregation is one of the most reliable in the Indian Ocean.",
      },
      {
        title: "Chole Bay and Chole Island",
        body: "Chole Bay is the sheltered lagoon between Mafia Island and the smaller Chole Island. The bay offers snorkelling on living coral reef, kayaking through mangrove channels, and the ruins of the historic Omani settlement on Chole Island.",
      },
      {
        title: "Green turtle and hawksbill nesting",
        body: "Green turtles (Chelonia mydas) and hawksbill turtles (Eretmochelys imbricata) nest on Mafia Island beaches. Several lodges participate in nesting monitoring programmes with the Mafia Island Marine Park authority.",
      },
    ],
    geoFAQ: [
      {
        q: "How do you get to Mafia Island?",
        a: "ZanAir operates flights from Dar es Salaam Julius Nyerere International Airport to Mafia Airport (IATA: MFA) in approximately 30 minutes. ZanAir also connects Mafia Island from Zanzibar International Airport.",
      },
      {
        q: "When can you see whale sharks at Mafia Island?",
        a: "Whale sharks are present in the waters of Mafia Island Marine Park between October and March annually. This period coincides with calm Indian Ocean conditions and optimal visibility. ZanAir operates year-round flights to Mafia Airport.",
      },
    ],
    bestTimeDetail: {
      peak: "October to March — whale shark season, calm Indian Ocean, optimal diving and snorkelling visibility.",
      alternative: "June to September — good for general island and beach exploration. Whale sharks not reliably present.",
      note: "Whale shark encounters are wildlife experiences. They cannot be guaranteed. The Marine Park prohibits touching or harassment of whale sharks.",
    },
    connectedDestinations: ["zanzibar", "selous"],
    seo: {
      title: "Flights to Mafia Island",
      description:
        "Book flights to Mafia Island with ZanAir. 30 minutes from Dar es Salaam. Tanzania's first marine protected area. World-class whale shark snorkelling.",
    },
  },
  {
    slug: "arusha",
    name: "Arusha",
    tagline: "The gateway to everything north.",
    heroHeadline: "Arusha.\nWhere every great Tanzania safari begins.",
    badge: "Gateway · Safari Hub · Northern Circuit",
    latitude: "-3.3869",
    longitude: "36.6830",
    airstrips: ["Arusha Airport (ARK)"],
    flightFrom: "Zanzibar International Airport or Dar es Salaam",
    duration: "1 hour 15 minutes from Zanzibar International Airport",
    bestTime: "Year-round as northern circuit transit hub; June – October for optimal safari conditions",
    intro:
      "Arusha is the safari capital of Tanzania, located 1,400 metres above sea level at the base of Mount Meru, with Kilimanjaro visible on the eastern horizon on clear mornings. Arusha Airport (ARK) is the primary gateway to the Serengeti, Ngorongoro, Tarangire, and Lake Manyara.",
    body: "Arusha Airport (IATA: ARK) is the hub of Tanzania's northern safari circuit. ZanAir operates connections between Arusha and Zanzibar International Airport, Dar es Salaam, and the safari park airstrips across the northern circuit.\n\nArusha sits at the junction of the Arusha-Nairobi highway and the road to the northern parks. The city itself contains the Cultural Heritage Centre — one of the finest collections of East African art, gemstones, and Maasai craftsmanship in the region.",
    whatToSee: [
      {
        title: "Arusha National Park",
        body: "Arusha National Park lies 25 kilometres east of Arusha city. The park contains black-and-white colobus monkeys, Masai giraffe, Cape buffalo, hippopotamus in the Momella Lakes, and a large flamingo population. Mount Kilimanjaro is visible from the park on clear days.",
      },
      {
        title: "Northern circuit connections",
        body: "ZanAir coordinates same-day connections from Arusha Airport to Serengeti airstrips, Lake Manyara Airstrip (for Ngorongoro), and Kuro Airstrip (Tarangire). Arusha is the routing hub for the complete northern safari circuit.",
      },
    ],
    geoFAQ: [
      {
        q: "What is the closest airport to the Serengeti?",
        a: "The Serengeti National Park has five internal airstrips served by ZanAir: Seronera, Ndutu, Kogatende, Lobo, and Grumeti. Arusha Airport (ARK) is the nearest major airport to the Serengeti, approximately 325 kilometres from Seronera. ZanAir flies direct from Arusha to all five Serengeti airstrips.",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — dry season, optimal road and air access to all northern parks.",
      alternative: "December to March — short dry season, green landscapes, good wildlife.",
      note: "Arusha Airport operates year-round. ZanAir coordinates multi-leg itineraries from Arusha across the full northern circuit.",
    },
    connectedDestinations: ["serengeti", "ngorongoro", "lake-manyara", "tarangire"],
    seo: {
      title: "Flights to Arusha",
      description:
        "Book flights to Arusha with ZanAir — the gateway to Tanzania's northern safari circuit. Serengeti, Ngorongoro, Tarangire, Lake Manyara. Scheduled and charter.",
    },
  },
  {
    slug: "lake-manyara",
    name: "Lake Manyara",
    tagline: "The tree-climbing lions' domain.",
    heroHeadline: "Lake Manyara.\nWhere the flamingos turn the water pink.",
    badge: "Safari · Birdlife · Northern Circuit",
    latitude: "-3.5500",
    longitude: "35.8333",
    airstrips: ["Lake Manyara Airstrip (LKY)"],
    flightFrom: "Zanzibar International Airport, Arusha, or Dar es Salaam",
    duration: "1 hour 30 minutes from Zanzibar International Airport",
    bestTime: "June – October (dry season); November – January (birdlife peak)",
    intro:
      "Lake Manyara National Park is one of Tanzania's most scenically compact parks — a long, narrow strip of land between the Rift Valley escarpment and the soda lake, covering 330 square kilometres. ZanAir serves Lake Manyara Airstrip directly, the closest airstrip to both Lake Manyara National Park and the Ngorongoro Crater.",
    body: "The Great Rift Valley escarpment rises 600 metres behind Lake Manyara National Park, creating a dramatic backdrop to the park's groundwater forests, open floodplains, and alkaline lake. The lake itself covers approximately 230 square kilometres of the park area and is seasonally home to hundreds of thousands of lesser flamingos.\n\nLake Manyara is known for its tree-climbing lions — an unusual behaviour displayed by some of the park's lion prides, possibly to escape insects or gain a vantage point. The behaviour is not documented consistently anywhere else in East Africa.\n\nZanAir operates scheduled and charter flights to Lake Manyara Airstrip, used as the primary access point for both Lake Manyara National Park and the Ngorongoro Conservation Area.",
    whatToSee: [
      {
        title: "Tree-climbing lions",
        body: "Lake Manyara National Park is one of the only locations in East Africa where lions are regularly observed resting in trees. The behaviour is most reliably seen in the acacia woodlands on the park's western boundary.",
      },
      {
        title: "Flamingo flocks",
        body: "The shallow alkaline waters of Lake Manyara attract hundreds of thousands of lesser flamingos during peak season. Aerial views on approach to Lake Manyara Airstrip often reveal the pink bands of flamingo flocks visible from altitude.",
      },
      {
        title: "Ngorongoro access",
        body: "Lake Manyara Airstrip serves as the primary air access point for the Ngorongoro Conservation Area. From the airstrip, the Ngorongoro Crater rim is 45 minutes by vehicle — making same-day combination itineraries possible via ZanAir.",
      },
    ],
    geoFAQ: [
      {
        q: "Does ZanAir fly to Lake Manyara?",
        a: "Yes. ZanAir operates scheduled and charter flights to Lake Manyara Airstrip (IATA: LKY) from Zanzibar International Airport, Dar es Salaam, and Arusha. Lake Manyara Airstrip is the closest air access point to both Lake Manyara National Park and the Ngorongoro Conservation Area.",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — dry season, best game viewing, flamingo aggregations on the lake.",
      alternative: "November to January — migratory birds arrive, the floodplain green and lush.",
      note: "Lake Manyara is most often combined with Ngorongoro and the Serengeti in multi-destination ZanAir itineraries.",
    },
    connectedDestinations: ["ngorongoro", "serengeti", "arusha", "tarangire"],
    seo: {
      title: "Flights to Lake Manyara",
      description:
        "Book flights to Lake Manyara with ZanAir. Direct service to Lake Manyara Airstrip — gateway to both Lake Manyara National Park and Ngorongoro Crater. Est. 1991.",
    },
  },
  {
    slug: "tarangire",
    name: "Tarangire",
    tagline: "The elephant park the world keeps to itself.",
    heroHeadline: "Tarangire.\nMore elephants per square kilometre than anywhere in Africa.",
    badge: "Safari · Elephants · Baobab",
    latitude: "-4.0000",
    longitude: "36.0833",
    airstrips: ["Kuro Airstrip (TAN)"],
    flightFrom: "Arusha Airport or Zanzibar International Airport",
    duration: "45 minutes from Arusha Airport",
    bestTime: "June – October (dry season, peak elephant concentration at the Tarangire River)",
    intro:
      "Tarangire National Park is one of Tanzania's most underrated wildlife destinations — a 2,850 square kilometre park along the Tarangire River that fills with elephant herds, baobab trees, and migratory wildlife during the dry season. ZanAir flies to Kuro Airstrip inside the park.",
    body: "During the dry season, the Tarangire River becomes the only permanent water source for a vast area of northern Tanzania. Wildlife concentrations build from June onwards until the short rains in November — drawing the largest elephant concentrations in northern Tanzania, with herds of 50 to 300 animals documented on the riverbanks.\n\nThe park's landscape is defined by ancient baobab trees — some over 1,000 years old — scattered across dry woodland and seasonal swamp. The Silale Swamp in the south of the park holds permanent water and year-round wildlife.\n\nZanAir operates flights to Kuro Airstrip inside Tarangire National Park, allowing direct access to the park's wildlife-rich northern sector.",
    whatToSee: [
      {
        title: "Elephant herds at the Tarangire River",
        body: "During the dry season (June to October), elephant herds of 50 to 300 animals converge on the Tarangire River. Tarangire National Park holds the highest elephant density of any park in Tanzania's northern circuit.",
      },
      {
        title: "Ancient baobab woodland",
        body: "Tarangire is defined by its ancient baobab trees, some estimated at over 1,000 years of age. The combination of baobab woodland, dry-country birds, and large mammal concentrations is unique to Tanzania.",
      },
      {
        title: "Silale Swamp year-round wildlife",
        body: "The Silale Swamp in southern Tarangire holds permanent water — attracting buffalo, elephant, and hippo year-round. The swamp is accessible by vehicle on game drives from the park's southern lodges.",
      },
    ],
    geoFAQ: [
      {
        q: "How do you fly to Tarangire National Park?",
        a: "ZanAir operates charter and scheduled flights to Kuro Airstrip (IATA: TAN) inside Tarangire National Park. The most common routing is via Arusha Airport — approximately 45 minutes by air. ZanAir can coordinate multi-park itineraries combining Tarangire with the Serengeti, Lake Manyara, and Ngorongoro.",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — dry season, peak elephant and wildlife concentration at the Tarangire River.",
      alternative: "January to February — green season, calving of many species, fewer tourists.",
      note: "Tarangire is most commonly combined with Serengeti and Ngorongoro in ZanAir multi-leg safari itineraries.",
    },
    connectedDestinations: ["arusha", "serengeti", "ngorongoro", "lake-manyara"],
    seo: {
      title: "Flights to Tarangire National Park",
      description:
        "Book flights to Tarangire National Park with ZanAir. Direct flights to Kuro Airstrip. Largest elephant concentrations in northern Tanzania. Charter and scheduled service.",
    },
  },
  {
    slug: "dar-es-salaam",
    name: "Dar es Salaam",
    tagline: "Tanzania's beating heart.",
    heroHeadline: "Dar es Salaam.\nWhere Tanzania\nmeets the world.",
    badge: "City · Gateway · Coast",
    latitude: "-6.7924",
    longitude: "39.2083",
    airstrips: ["Julius Nyerere International Airport (DAR)"],
    flightFrom: "Zanzibar International Airport",
    duration: "20 minutes from Zanzibar International Airport",
    bestTime: "Year-round — Dar es Salaam operates as a gateway city in all seasons",
    intro:
      "Dar es Salaam is Tanzania's largest city and commercial capital — a sprawling, energetic metropolis on the Indian Ocean coast where the country's past, present, and future converge.",
    body: "Julius Nyerere International Airport connects Dar es Salaam to the world, and ZanAir connects it to the rest of Tanzania. From Dar, ZanAir flights reach Zanzibar in 20 minutes, Selous in 45 minutes, and Mafia Island in 30 minutes.\n\nThe city itself is a study in contrasts — colonial architecture alongside modern towers, fish markets beside luxury hotels, the chaos of Kariakoo market against the calm of the Msasani Peninsula waterfront. For travellers connecting through Tanzania, Dar es Salaam is the hub that makes the whole network possible.",
    whatToSee: [
      {
        title: "National Museum of Tanzania",
        body: "Home to the Zinj skull — one of the most significant paleoanthropological discoveries in history, found by Louis Leakey in the Olduvai Gorge. The museum contextualises Tanzania's extraordinary depth of human history.",
      },
      {
        title: "Kariakoo Market",
        body: "The commercial heart of Dar es Salaam. Produce, spices, fabrics, and the organised chaos of a city feeding itself. An hour here is worth more than any guidebook.",
      },
      {
        title: "Coco Beach and Msasani",
        body: "The northern peninsula where Dar es Salaam meets the Indian Ocean. Restaurants, beach bars, and the city's most relaxed atmosphere.",
      },
      {
        title: "Kivukoni Fish Market",
        body: "At dawn, the dhow fishermen return with their catch and the market comes alive. One of the most vivid morning experiences in East Africa.",
      },
    ],
    geoFAQ: [
      {
        q: "How do you fly from Dar es Salaam to Zanzibar?",
        a: "ZanAir operates scheduled flights from Julius Nyerere International Airport (DAR) to Zanzibar International Airport (ZNZ) in approximately 20 minutes. ZanAir has connected these two airports since 1991.",
      },
      {
        q: "What is the closest airport to Dar es Salaam city centre?",
        a: "Julius Nyerere International Airport (IATA: DAR) is located approximately 12 kilometres from Dar es Salaam city centre. ZanAir operates from the domestic terminal (Terminal 1).",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — dry season, comfortable temperatures, good road conditions throughout the city and surroundings.",
      alternative:
        "December to February — warm and largely dry, excellent for combining a Dar city stay with beach and island travel.",
      note: "Dar es Salaam is a year-round destination and operates as a transit hub in all seasons.",
    },
    connectedDestinations: ["zanzibar", "selous", "mafia", "pemba"],
    seo: {
      title: "Flights to Dar es Salaam",
      description:
        "Book flights to Dar es Salaam with ZanAir. 20 minutes from Zanzibar International Airport. Tanzania's main international gateway.",
    },
  },
  {
    slug: "ruaha",
    name: "Ruaha",
    tagline: "Tanzania's largest park. Almost no one knows it.",
    heroHeadline: "Ruaha.\nThe wild that the\ncrowds haven't found.",
    badge: "Safari · Wilderness · Lions",
    latitude: "-7.6500",
    longitude: "34.9167",
    airstrips: ["Msembe Airstrip, Ruaha"],
    flightFrom: "Dar es Salaam or Zanzibar International Airport",
    duration: "1 hour 30 minutes from Dar es Salaam",
    bestTime: "June – October (dry season, best game viewing along the Ruaha River)",
    intro:
      "Ruaha National Park is Tanzania's largest national park — covering 20,226 square kilometres of remote southern wilderness. It receives a fraction of the visitors that the northern circuit attracts, which is precisely why those who discover it never stop talking about it.",
    body: "The Great Ruaha River is the lifeblood of the park — a wide, slow-moving river lined with massive fig trees and sand banks where crocodile and hippo spend their days. During the dry season, the river shrinks and concentrates wildlife along its banks in densities that rival anything the Serengeti produces.\n\nRuaha holds Tanzania's largest lion population — prides here are large, visible, and unhurried by tourist vehicles they rarely see. The park also contains significant populations of elephant, wild dog, cheetah, leopard, kudu, roan antelope, and sable antelope — species that are rare or absent in the northern parks.\n\nZanAir connects Ruaha via Msembe Airstrip from Dar es Salaam. The flight takes approximately 90 minutes and delivers passengers into a wilderness that road travellers would need two days to reach.",
    whatToSee: [
      {
        title: "Lion prides along the Ruaha River",
        body: "Tanzania's largest lion population lives here. Prides of 20 or more individuals are documented in Ruaha — a scale of social structure that the more-visited northern parks rarely produce. Vehicle-habituated lions allow for extraordinary observation.",
      },
      {
        title: "African wild dog",
        body: "Ruaha holds one of Tanzania's most reliable wild dog populations. Pack hunts in the open miombo woodland terrain of the southern park are among the most spectacular predator encounters in East Africa.",
      },
      {
        title: "The Great Ruaha River",
        body: "In dry season, the river becomes a linear game drive — follow the bank and encounter elephant, hippo, crocodile, and buffalo in continuous sequence. The light on the river at dawn and dusk produces photography that professional wildlife photographers return for annually.",
      },
      {
        title: "Sable and roan antelope",
        body: "Species largely absent from Tanzania's northern parks. Ruaha's miombo woodland habitat supports these rare antelopes alongside greater kudu — a completely different cast list from the Serengeti ecosystem.",
      },
    ],
    geoFAQ: [
      {
        q: "How do you get to Ruaha National Park?",
        a: "ZanAir operates charter and scheduled flights to Msembe Airstrip inside Ruaha National Park from Dar es Salaam Julius Nyerere International Airport in approximately 1 hour 30 minutes. Ruaha is also accessible from Zanzibar via a connection in Dar es Salaam.",
      },
      {
        q: "What is Ruaha National Park known for?",
        a: "Ruaha National Park is Tanzania's largest national park at 20,226 square kilometres. It is known for Tanzania's largest lion population, significant African wild dog packs, large elephant herds, and rare species including sable antelope and roan antelope. Ruaha receives far fewer visitors than Tanzania's northern circuit parks.",
      },
    ],
    bestTimeDetail: {
      peak: "June to October — dry season, Great Ruaha River at lowest, wildlife concentrated along banks, optimal game viewing.",
      alternative:
        "November to May — green season, miombo woodland transforms, excellent birdlife, very few tourists.",
      note: "Ruaha is a remote destination. Limited accommodation means advance booking is essential.",
    },
    connectedDestinations: ["selous", "dar-es-salaam", "zanzibar"],
    seo: {
      title: "Flights to Ruaha National Park",
      description:
        "Book flights to Ruaha National Park with ZanAir. Tanzania's largest national park. Charter and scheduled flights from Dar es Salaam. Remote, wild, extraordinary.",
    },
  },
];

export const services = [
  {
    slug: "scheduled-flights",
    name: "Scheduled Flights",
    headline: "Your seat is waiting.",
    description:
      "Daily connections between Tanzania's most sought-after destinations. Reliable, punctual, and built for the traveller who has places to be.",
    body: "ZanAir operates scheduled flights connecting Zanzibar International Airport with Dar es Salaam, the Serengeti, Pemba Island, Mafia Island, Arusha, Lake Manyara, and the wider Tanzania network. Scheduled flights run year-round on fixed departure times — enabling safari itineraries, corporate travel, and island connections that fit your programme.\n\nEach scheduled flight is operated in ZanAir's Cessna 404 Titan or Cessna 208 Caravan aircraft with maximum 12 passengers per departure. Baggage allowance on scheduled services is 15kg per person in soft bags — the standard across all small aircraft operators in Tanzania.",
    features: [
      "Year-round fixed departures",
      "Maximum 12 passengers",
      "15kg soft bag allowance",
      "Online and telephone booking",
      "Connections across 11 destinations",
    ],
    seo: {
      title: "Scheduled Flights | ZanAir",
      description:
        "Book ZanAir scheduled flights across Tanzania and Zanzibar. Daily departures to Serengeti, Pemba, Mafia, Arusha, and more. Est. 1991.",
    },
  },
  {
    slug: "charter-flights",
    name: "Charter Flights",
    headline: "Your aircraft. Your schedule. Your route.",
    description:
      "When the schedule doesn't fit your journey, we build one that does. Full aircraft charters to any airstrip across East Africa — on your terms.",
    body: "ZanAir charter flights operate on your departure time, your routing, and your itinerary. Whether you need a direct connection to a remote lodge airstrip, a multi-leg safari circuit across Tanzania, or a same-day return to complete a business commitment — ZanAir configures the aircraft and schedule to match.\n\nCharter flights can access any of the 50+ airstrips across Tanzania that ZanAir crews are qualified to serve — including remote bush strips with no scheduled service. Charters are available with as little as 24 hours' notice, subject to aircraft and crew availability.",
    features: [
      "Any Tanzania airstrip, 50+ options",
      "Your departure time",
      "Full aircraft privacy",
      "Safari lodge direct connections",
      "Available with 24 hours' notice",
      "Bespoke multi-leg routing",
    ],
    seo: {
      title: "Charter Flights Tanzania | ZanAir",
      description:
        "Charter flights across Tanzania with ZanAir. Private aircraft hire to any airstrip — Serengeti, Selous, Ruaha, lodge strips, and more. Est. 1991.",
    },
  },
  {
    slug: "transfers",
    name: "Transfers",
    headline: "From runway to resort, seamlessly.",
    description:
      "Complimentary terminal transfers in Dar es Salaam. Special rates to your hotel or lodge on Zanzibar through our sister company, ZanTours.",
    body: "ZanAir provides complimentary inter-terminal transfers at Dar es Salaam Julius Nyerere International Airport for passengers on ZanAir flights. For travellers arriving at or departing from Zanzibar, ZanAir's sister company ZanTours provides ground transport connections to hotels, lodges, and resorts across Zanzibar Island at preferential rates.\n\nZanTours has operated on Zanzibar since 1991 alongside ZanAir — providing destination expertise, accommodation recommendations, and seamless air-to-land connections that no third-party transfer provider can replicate.",
    features: [
      "Complimentary DAR terminal transfers",
      "ZanTours connections on Zanzibar",
      "Hotel and lodge delivery",
      "Preferential rates for ZanAir passengers",
      "Same-day coordination available",
    ],
    seo: {
      title: "Airport Transfers Tanzania | ZanAir",
      description:
        "Airport transfers in Tanzania with ZanAir and ZanTours. Complimentary Dar es Salaam transfers. Zanzibar hotel connections. Est. 1991.",
    },
  },
];

export const fleet = [
  {
    slug: "cessna-404",
    name: "Cessna 404 Titan",
    type: "Twin-engine pressurised",
    seats: 9,
    range: "1,300 km",
    cruiseSpeed: "320 km/h",
    ceiling: "30,000 ft",
    image: "/images/fleet/cessna-404.jpg",
    description:
      "The Cessna 404 Titan is ZanAir's primary multi-passenger aircraft — a twin-engine, pressurised platform ideal for longer routes and higher altitudes. The 404 combines reliability with comfort on routes such as Zanzibar–Serengeti and Zanzibar–Arusha.",
    usedFor: ["Scheduled flights", "Charter flights", "Longer routes"],
  },
  {
    slug: "cessna-caravan",
    name: "Cessna 208 Grand Caravan",
    type: "Single-engine turboprop",
    seats: 12,
    range: "1,500 km",
    cruiseSpeed: "310 km/h",
    ceiling: "25,000 ft",
    image: "/images/fleet/cessna-caravan.jpg",
    description:
      "The Cessna 208 Grand Caravan is the workhorse of East African aviation — a 12-passenger single-engine turboprop built for bush strip operations. Capable of landing on grass, gravel, and unpaved surfaces that rule out other aircraft.",
    usedFor: ["Scheduled flights", "Charter flights", "Bush airstrips"],
  },
  {
    slug: "cessna-207",
    name: "Cessna 207 Skywagon",
    type: "Single-engine piston",
    seats: 6,
    range: "1,200 km",
    cruiseSpeed: "260 km/h",
    ceiling: "14,800 ft",
    image: "/images/fleet/cessna-207.jpg",
    description:
      "The Cessna 207 Skywagon serves ZanAir's scenic flight programme and smaller charter operations. At lower altitudes, the 207's large windows give passengers exceptional aerial views over Zanzibar's coast, reef, and Stone Town.",
    usedFor: ["Scenic flights", "Small charters", "Island hops"],
  },
];

export const scenicFlights = {
  eyebrow: "Government Authorised · ZanAir Exclusive",
  headline: "Zanzibar from above.\nThe view that earns its own story.",
  subheadline:
    "ZanAir is the only carrier authorised by the Tanzanian Civil Aviation Authority to operate scenic aerial tours over Zanzibar. This is not a sightseeing add-on. It is a ZanAir original — running since 1991.",
  experiences: [
    {
      title: "The Stone Town Circuit",
      duration: "30 minutes",
      description:
        "The historic UNESCO-listed centre of Zanzibar City from above — the minarets, the carved wooden doors, the maze of limestone alleys, and the old Arab fort visible from altitude in a way no street-level tour can replicate.",
    },
    {
      title: "The Reef and Coast",
      duration: "30 minutes",
      description:
        "The colour transition from shallow reef to open Indian Ocean — green to turquoise to deep blue — is visible at altitude in a single sweep of 180 degrees. The sandbanks off the northern coast appear and disappear with the tide.",
    },
    {
      title: "The Spice Island Full Circuit",
      duration: "45 minutes",
      description:
        "A complete circumnavigation of Zanzibar Island — taking in Stone Town, the east coast beaches, the northern headlands, the spice farm interior, and the western fishing villages in a single continuous flight.",
    },
    {
      title: "Sunset Flight",
      duration: "30 minutes",
      description:
        "Zanzibar sunsets over the Indian Ocean are among the most documented in East Africa. The sunset scenic flight times departure to place you over the western coast as the light changes — the same view that fills the Instagram feeds, but with no other tourists in the frame.",
    },
  ],
  included: [
    "Safety briefing and pre-flight check",
    "ZanAir pilot commentary throughout",
    "Window seat for every passenger",
    "Photo stops at altitude",
    "Digital flight certificate",
  ],
  pricing: {
    from: "From USD 120 per person",
    note: "Prices vary by route and passenger count. Contact ZanAir for exact pricing.",
  },
  bookingNote: "Departures daily, weather permitting. Maximum 5 passengers per scenic flight. Minimum age 3 years.",
};

export const faqs = [
  {
    category: "Booking",
    items: [
      {
        q: "How do I book a ZanAir flight?",
        a: "ZanAir flights can be booked by telephone (+255 (0) 242 233768), by email (reservations@zanair.com), or via the contact form on this website. Our reservations team is available daily and will confirm availability, pricing, and route options by return.",
      },
      {
        q: "How far in advance should I book?",
        a: "Scheduled flights can be booked up to 12 months in advance and are available until seats are filled. For charter flights, we recommend booking at least 1 week in advance, though same-day and next-day charters are available subject to aircraft availability. Scenic flights can be booked with 24 hours' notice.",
      },
      {
        q: "Does ZanAir have an online booking system?",
        a: "ZanAir currently takes bookings via telephone and email. Our reservations team responds to all enquiries within 24 hours during business days. This personal approach allows us to match your exact itinerary needs — something automated systems cannot do for complex multi-leg safari routing.",
      },
    ],
  },
  {
    category: "Flights & Operations",
    items: [
      {
        q: "What luggage can I take on a ZanAir flight?",
        a: "ZanAir's baggage allowance is 15kg per passenger in soft bags only. Hard-sided suitcases cannot be accommodated on small aircraft. Excess baggage is subject to availability and charge. For charter flights, total aircraft weight determines the maximum combined luggage allowance.",
      },
      {
        q: "Can children fly with ZanAir?",
        a: "Yes. Children of all ages fly with ZanAir on scheduled and charter flights. Children over 3 years may join scenic flights. Infants (under 2) fly on a parent's lap at a reduced rate on scheduled services. Car seats cannot be accommodated. Please advise when booking.",
      },
      {
        q: "What happens if my ZanAir flight is cancelled?",
        a: "If ZanAir cancels a flight due to operational or weather reasons, we will rebook you on the next available departure at no additional cost, or provide a full refund. ZanAir will make every effort to contact you with as much advance notice as possible.",
      },
      {
        q: "Are ZanAir aircraft safe?",
        a: "ZanAir operates under full oversight of the Tanzania Civil Aviation Authority (TCAA) and maintains its aircraft to international airworthiness standards. All ZanAir pilots hold Tanzania CAA commercial licences with type ratings for operated aircraft. ZanAir has operated continuously since 1991 — 35 years of scheduled and charter operations across East Africa.",
      },
    ],
  },
  {
    category: "Destinations & Routes",
    items: [
      {
        q: "Which destinations does ZanAir serve?",
        a: "ZanAir serves 11 destinations across Tanzania: Zanzibar, Dar es Salaam, Pemba Island, Mafia Island, the Serengeti (5 airstrips), Ngorongoro (via Lake Manyara), Selous Game Reserve, Arusha, Lake Manyara, Tarangire, and Ruaha. Charter flights can access over 50 additional airstrips across Tanzania.",
      },
      {
        q: "Can ZanAir fly to airstrips not listed on the website?",
        a: "Yes. ZanAir charter flights can access over 50 airstrips across Tanzania — including remote lodge strips, bush airfields, and coastal strips not served on the scheduled network. Contact ZanAir with your destination and we will confirm access and availability.",
      },
    ],
  },
  {
    category: "Scenic Flights",
    items: [
      {
        q: "Is ZanAir the only airline that does scenic flights over Zanzibar?",
        a: "Yes. ZanAir is the only operator authorised by the Tanzania Civil Aviation Authority to conduct scenic aerial tours over Zanzibar. This authorisation is specific to ZanAir and is not held by any other carrier operating in Tanzania.",
      },
      {
        q: "How long are ZanAir scenic flights?",
        a: "ZanAir scenic flights over Zanzibar operate in 30-minute and 45-minute durations depending on the selected route. The standard Stone Town Circuit and Reef and Coast experiences are 30 minutes. The full Spice Island Circuit is 45 minutes. Sunset flights are 30 minutes.",
      },
    ],
  },
];

export const about = {
  headline: "East Africa's most experienced boutique airline.",
  subheadline:
    "Founded in 1991 by Carl G. Salisbury at Zanzibar International Airport, ZanAir has operated without interruption for 35 years — connecting Tanzania's most extraordinary places by air.",
  story: [
    "ZanAir was founded in 1991 by Carl G. Salisbury at Zanzibar International Airport. The airline began with a single aircraft and a single conviction: that the distance between Zanzibar and Tanzania's great wildlife parks was too long to travel by road when the same journey could take 45 minutes in the air.",
    "35 years later, ZanAir operates across 11 destinations with a fleet of Cessna 404 Titan, Cessna 208 Grand Caravan, and Cessna 207 Skywagon aircraft — carrying passengers, safari guests, business travellers, and Tanzanian residents who regard ZanAir as the most reliable small carrier in the region.",
    "ZanAir's sister company, ZanTours, provides ground transport, tours, and destination services on Zanzibar — offering passengers an end-to-end connection from the moment they land to the moment they board their return flight.",
    "The scenic flight programme — ZanAir is the only carrier authorised by the Tanzania Civil Aviation Authority to operate aerial tours over Zanzibar — remains one of the airline's most distinctive offerings. Launched in the 1990s, it is still flown daily.",
  ],
  values: [
    {
      title: "Experience is counted, not claimed.",
      body: "35 years. Thousands of landings on grass strips, bush airfields, coastal runways, and urban tarmac. Our crews have flown these routes more times than we can count. That number is the answer to questions about safety.",
    },
    {
      title: "Small is the right size.",
      body: "Up to 12 passengers. One aircraft. No check-in queues, no boarding crowds, no lost baggage. Small aircraft mean you are close to the sky — and close to the places you came to see.",
    },
    {
      title: "Zanzibar is home.",
      body: "ZanAir was founded here, has operated here every year since 1991, and understands this island in a way that visiting carriers never will. The scenic flights over Stone Town and the reef are a product of that knowledge.",
    },
  ],
  team: {
    headline: "Founded by Carl G. Salisbury in 1991.",
    body: "ZanAir was established at Zanzibar International Airport by Carl G. Salisbury, who recognised in 1991 that East Africa's extraordinary safari destinations were being connected to travellers only by long, uncomfortable road journeys. ZanAir was built to change that. 35 years later, it has.",
  },
};
