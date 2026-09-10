import { Tour } from "@/types";
import { img } from "@/lib/images";
import { generateAvailability } from "@/data/availability";

export const tours: Tour[] = [
  {
    slug: "theth-blue-eye-adventure",
    name: { en: "Theth & Blue Eye Adventure", sq: "Aventura e Thethit & Syrit të Kaltër" },
    tagline: {
      en: "Alpine peaks, a hidden spring and a village frozen in time.",
      sq: "Maja alpine, një burim i fshehur dhe një fshat i ndaluar në kohë.",
    },
    destinationSlug: "theth",
    location: { en: "Theth, Albanian Alps", sq: "Theth, Alpet Shqiptare" },
    categories: ["adventure", "mountains", "hidden-gems"],
    images: [img.thethLake, img.thethPeaks, img.thethTrail, img.blueEye],
    priceFrom: 45,
    currency: "EUR",
    durationLabel: { en: "1 Day", sq: "1 Ditë" },
    durationDays: 1,
    difficulty: "Moderate",
    groupSize: 8,
    type: "Group",
    rating: 4.9,
    reviewCount: 128,
    description: {
      en: "Cross the Albanian Alps to Theth, a village so remote it had no road access until 2000. Hike to the Grunas Waterfall, cool off in the Blue Eye spring, and share a home-cooked lunch with a local family before heading back to the coast.",
      sq: "Kaloni Alpet Shqiptare drejt Thethit, një fshat kaq i largët sa nuk pati akses rrugor deri në vitin 2000. Ecni deri te Ujëvara e Grunasit, freskohuni në burimin e Syrit të Kaltër, dhe ndani një drekë shtëpiake me një familje lokale para se të ktheheni në bregdet.",
    },
    highlights: {
      en: [
        "Scenic drive over the Thethi Pass",
        "Grunas Waterfall hike",
        "Blue Eye natural spring",
        "Traditional lunch with a local family",
        "Visit to the historic Lock-in Tower",
      ],
      sq: [
        "Udhëtim panoramik nëpër Qafën e Thethit",
        "Ecje deri te Ujëvara e Grunasit",
        "Burimi natyror i Syrit të Kaltër",
        "Drekë tradicionale me një familje lokale",
        "Vizitë te Kulla historike e Ngujimit",
      ],
    },
    included: {
      en: ["Transport", "English-speaking guide", "Lunch", "Entrance fees"],
      sq: ["Transporti", "Guidë në gjuhën angleze", "Dreka", "Tarifat e hyrjes"],
    },
    excluded: {
      en: ["Personal expenses", "Travel insurance", "Gratuities"],
      sq: ["Shpenzime personale", "Sigurimi i udhëtimit", "Bakshishe"],
    },
    pickupOptions: {
      en: ["Tirana city center", "Shkodër hotel pickup"],
      sq: ["Qendra e Tiranës", "Marrja nga hoteli në Shkodër"],
    },
    featured: true,
    popular: true,
    itinerary: [
      {
        day: 1,
        title: { en: "Departure to Theth", sq: "Nisja për në Theth" },
        stops: [
          {
            time: "07:00",
            title: { en: "Pickup in Tirana", sq: "Marrja në Tiranë" },
            description: {
              en: "Meet your guide and small group for the scenic drive north.",
              sq: "Takohuni me guidën dhe grupin e vogël për udhëtimin panoramik drejt veriut.",
            },
            image: img.tiranaSkyline,
          },
          {
            time: "10:30",
            title: { en: "Arrival in Theth", sq: "Mbërritja në Theth" },
            description: {
              en: "Cross the mountain pass into the national park and settle in.",
              sq: "Kaloni qafën malore drejt parkut kombëtar dhe vendosuni.",
            },
            image: img.thethPeaks,
          },
          {
            time: "11:00",
            title: { en: "Waterfall hike", sq: "Ecje deri te ujëvara" },
            description: {
              en: "A gentle 40-minute walk to the Grunas Waterfall.",
              sq: "Një shëtitje e lehtë 40-minutëshe deri te Ujëvara e Grunasit.",
            },
            image: img.thethTrail,
          },
          {
            time: "12:30",
            title: { en: "Local lunch", sq: "Drekë lokale" },
            description: {
              en: "Home-cooked Albanian dishes with a mountain family.",
              sq: "Gatime shtëpiake shqiptare me një familje malore.",
            },
            image: img.blueEye,
          },
          {
            time: "14:00",
            title: { en: "Blue Eye of Theth", sq: "Syri i Kaltër i Thethit" },
            description: {
              en: "Swim or wade in the icy natural spring.",
              sq: "Notoni ose futuni në burimin natyror të ftohtë.",
            },
            image: img.blueEye,
          },
          {
            time: "16:30",
            title: { en: "Return journey", sq: "Udhëtimi i kthimit" },
            description: {
              en: "Drive back over the pass as the light turns golden.",
              sq: "Udhëtim kthimi mbi qafën malore ndërsa drita bëhet e artë.",
            },
            image: img.mountainSunrise,
          },
          {
            time: "19:30",
            title: { en: "Drop-off in Tirana", sq: "Zbritja në Tiranë" },
            description: {
              en: "Arrival back at your accommodation.",
              sq: "Mbërritja e kthimit tek akomodimi juaj.",
            },
            image: img.tiranaStreet,
          },
        ],
      },
    ],
    availability: generateAvailability(1),
  },
  {
    slug: "shala-river-boat-tour",
    name: { en: "Shala River Boat Tour", sq: "Turne me Varkë në Lumin e Shalës" },
    tagline: {
      en: "Wooden boats gliding through turquoise limestone canyons.",
      sq: "Varka prej druri që lundrojnë nëpër kanione tirkize gëlqerore.",
    },
    destinationSlug: "shala-river",
    location: { en: "Shala River, Northern Albania", sq: "Lumi i Shalës, Shqipëria e Veriut" },
    categories: ["nature", "hidden-gems", "adventure"],
    images: [img.shalaRiver, img.shalaValley, img.shalaForest],
    priceFrom: 35,
    currency: "EUR",
    durationLabel: { en: "1 Day", sq: "1 Ditë" },
    durationDays: 1,
    difficulty: "Easy",
    groupSize: 12,
    type: "Both",
    rating: 4.8,
    reviewCount: 214,
    description: {
      en: "Sail through one of the most striking landscapes in the Balkans. The Shala River winds between vertical limestone walls, its glacial water shifting between emerald and turquoise depending on the light.",
      sq: "Lundroni në një nga peizazhet më mahnitëse të Ballkanit. Lumi i Shalës dredhon mes mureve vertikale gëlqerore, uji i tij akullnajor ndryshon nga smerald në tirkiz sipas dritës.",
    },
    highlights: {
      en: [
        "Private wooden boat ride",
        "Swimming stop in the canyon",
        "Riverside picnic lunch",
        "Photo stops at the best viewpoints",
      ],
      sq: [
        "Shëtitje private me varkë prej druri",
        "Ndalesë not në kanion",
        "Drekë piknik buzë lumit",
        "Ndalesa fotografike në pikat më të mira panoramike",
      ],
    },
    included: {
      en: ["Transport", "Boat ride", "Guide", "Lunch"],
      sq: ["Transporti", "Shëtitja me varkë", "Guidë", "Dreka"],
    },
    excluded: {
      en: ["Personal expenses", "Gratuities"],
      sq: ["Shpenzime personale", "Bakshishe"],
    },
    pickupOptions: {
      en: ["Shkodër hotel pickup", "Koman ferry terminal"],
      sq: ["Marrja nga hoteli në Shkodër", "Terminali i tragetit të Komanit"],
    },
    featured: true,
    popular: true,
    itinerary: [
      {
        day: 1,
        title: { en: "River Day", sq: "Dita e Lumit" },
        stops: [
          {
            time: "08:00",
            title: { en: "Pickup in Shkodër", sq: "Marrja në Shkodër" },
            description: { en: "Early departure to beat the crowds.", sq: "Nisje e hershme për t'i shpejtuar turmat." },
            image: img.shkodraLake,
          },
          {
            time: "09:30",
            title: { en: "Boat launch", sq: "Nisja me varkë" },
            description: { en: "Board the traditional wooden boat.", sq: "Hipni në varkën tradicionale prej druri." },
            image: img.shalaRiver,
          },
          {
            time: "11:00",
            title: { en: "Canyon swimming stop", sq: "Ndalesë not në kanion" },
            description: { en: "Jump into the cool glacial water.", sq: "Hidhuni në ujin e ftohtë akullnajor." },
            image: img.shalaForest,
          },
          {
            time: "13:00",
            title: { en: "Riverside picnic", sq: "Piknik buzë lumit" },
            description: { en: "Lunch on a pebble beach.", sq: "Drekë në një plazh me kalldrëm." },
            image: img.shalaValley,
          },
          {
            time: "16:00",
            title: { en: "Return to Shkodër", sq: "Kthimi në Shkodër" },
            description: { en: "Relaxed drive back with mountain views.", sq: "Udhëtim i qetë kthimi me pamje malore." },
            image: img.mountainMist,
          },
        ],
      },
    ],
    availability: generateAvailability(2),
  },
  {
    slug: "koman-lake-ferry-crossing",
    name: { en: "Koman Lake Ferry Crossing", sq: "Kalimi me Traget në Liqenin e Komanit" },
    tagline: {
      en: "Europe's most scenic ferry ride through emerald fjords.",
      sq: "Udhëtimi me traget më panoramik i Evropës nëpër fjorde smeralde.",
    },
    destinationSlug: "koman-lake",
    location: { en: "Koman Lake, Northern Albania", sq: "Liqeni i Komanit, Shqipëria e Veriut" },
    categories: ["nature", "adventure", "hidden-gems"],
    images: [img.komanLake, img.komanFerry, img.mountainDock],
    priceFrom: 39,
    currency: "EUR",
    durationLabel: { en: "1 Day", sq: "1 Ditë" },
    durationDays: 1,
    difficulty: "Easy",
    groupSize: 20,
    type: "Group",
    rating: 4.9,
    reviewCount: 176,
    description: {
      en: "A three-hour ferry gliding through steep canyons carved by the Drin River — often compared to a Norwegian fjord, but with Mediterranean light.",
      sq: "Një traget tre-orësh që lundron nëpër kanione të thella të gdhendura nga lumi Drin — shpesh krahasuar me një fjord norvegjez, por me dritë mesdhetare.",
    },
    highlights: {
      en: ["Panoramic ferry deck", "Canyon photography stops", "Riverside village views"],
      sq: ["Kuvertë panoramike e tragetit", "Ndalesa fotografike në kanion", "Pamje të fshatrave buzë lumit"],
    },
    included: { en: ["Transport", "Ferry ticket", "Guide"], sq: ["Transporti", "Bileta e tragetit", "Guidë"] },
    excluded: { en: ["Meals", "Personal expenses"], sq: ["Vaktet", "Shpenzime personale"] },
    pickupOptions: { en: ["Shkodër hotel pickup"], sq: ["Marrja nga hoteli në Shkodër"] },
    popular: true,
    itinerary: [
      {
        day: 1,
        title: { en: "Ferry Day", sq: "Dita e Tragetit" },
        stops: [
          {
            time: "07:30",
            title: { en: "Pickup in Shkodër", sq: "Marrja në Shkodër" },
            description: { en: "Drive to the Koman ferry terminal.", sq: "Udhëtim drejt terminalit të tragetit të Komanit." },
            image: img.shkodraLake,
          },
          {
            time: "09:00",
            title: { en: "Ferry departure", sq: "Nisja e tragetit" },
            description: { en: "Board the public ferry across the lake.", sq: "Hipni në tragetin publik përtej liqenit." },
            image: img.komanFerry,
          },
          {
            time: "12:00",
            title: { en: "Arrival in Fierzë", sq: "Mbërritja në Fierzë" },
            description: { en: "Disembark and explore the lakeside village.", sq: "Zbrisni dhe eksploroni fshatin buzë liqenit." },
            image: img.mountainDock,
          },
          {
            time: "13:30",
            title: { en: "Return crossing", sq: "Kalimi i kthimit" },
            description: { en: "Sail back through the canyons.", sq: "Lundroni mbrapsht nëpër kanione." },
            image: img.komanLake,
          },
          {
            time: "17:00",
            title: { en: "Drop-off in Shkodër", sq: "Zbritja në Shkodër" },
            description: { en: "Return to your accommodation.", sq: "Kthimi tek akomodimi juaj." },
            image: img.shkodraLake,
          },
        ],
      },
    ],
    availability: generateAvailability(3),
  },
  {
    slug: "berat-heritage-walk",
    name: { en: "Berat Heritage Walking Tour", sq: "Turne në Këmbë në Trashëgiminë e Beratit" },
    tagline: {
      en: "A thousand windows, one unforgettable afternoon.",
      sq: "Njëmijë dritare, një pasdite e paharrueshme.",
    },
    destinationSlug: "berat",
    location: { en: "Berat, Central Albania", sq: "Berat, Shqipëria Qendrore" },
    categories: ["culture", "food-wine"],
    images: [img.beratStone, img.beratAlley],
    priceFrom: 29,
    currency: "EUR",
    durationLabel: { en: "Half Day", sq: "Gjysmë Dite" },
    durationDays: 1,
    halfDay: true,
    difficulty: "Easy",
    groupSize: 10,
    type: "Both",
    rating: 4.8,
    reviewCount: 96,
    description: {
      en: "Wander through Berat's UNESCO-listed quarters, climb to the hilltop castle and taste local wine as the sun sets over the Osumi River.",
      sq: "Shëtitni nëpër lagjet e Beratit të listuara nga UNESCO, ngjituni te kalaja mbi kodër dhe shijoni verë lokale ndërsa dielli perëndon mbi lumin Osum.",
    },
    highlights: {
      en: ["Berat Castle", "Mangalem & Gorica quarters", "Wine tasting", "Onufri Museum"],
      sq: ["Kalaja e Beratit", "Lagjet Mangalem & Gorica", "Shijim vere", "Muzeu Onufri"],
    },
    included: {
      en: ["Local guide", "Wine tasting", "Castle entrance fee"],
      sq: ["Guidë lokale", "Shijim vere", "Tarifa e hyrjes në kala"],
    },
    excluded: { en: ["Transport to Berat", "Lunch"], sq: ["Transporti drejt Beratit", "Dreka"] },
    pickupOptions: { en: ["Meet at Berat Castle gate"], sq: ["Takim te porta e Kalasë së Beratit"] },
    itinerary: [
      {
        day: 1,
        title: { en: "Berat Afternoon", sq: "Pasdite në Berat" },
        stops: [
          {
            time: "14:00",
            title: { en: "Meet at the castle gate", sq: "Takim te porta e kalasë" },
            description: { en: "Introduction to Berat's history.", sq: "Hyrje mbi historinë e Beratit." },
            image: img.beratStone,
          },
          {
            time: "14:30",
            title: { en: "Castle walk", sq: "Shëtitje në kala" },
            description: { en: "Explore churches and ruins inside the citadel.", sq: "Eksploroni kishat dhe rrënojat brenda citadelës." },
            image: img.beratAlley,
          },
          {
            time: "16:00",
            title: { en: "Mangalem Quarter", sq: "Lagjja Mangalem" },
            description: { en: "Stroll past the famous 'thousand windows'.", sq: "Shëtitje pranë 'njëmijë dritareve' të famshme." },
            image: img.beratStone,
          },
          {
            time: "17:30",
            title: { en: "Wine tasting", sq: "Shijim vere" },
            description: { en: "Sample local wine with river views.", sq: "Shijoni verë lokale me pamje nga lumi." },
            image: img.wineGlasses,
          },
        ],
      },
    ],
    availability: generateAvailability(4),
  },
  {
    slug: "gjirokastra-blue-eye-day-trip",
    name: { en: "Gjirokastër & Blue Eye Day Trip", sq: "Ekskursion Ditor në Gjirokastër & Syrin e Kaltër" },
    tagline: {
      en: "Stone rooftops and a spring so clear it looks painted.",
      sq: "Çati guri dhe një burim kaq i pastër sa duket i pikturuar.",
    },
    destinationSlug: "gjirokaster",
    location: { en: "Gjirokastër, Southern Albania", sq: "Gjirokastër, Shqipëria e Jugut" },
    categories: ["culture", "nature"],
    images: [img.gjirokastraRoofs, img.gjirokastraStreet, img.blueEye],
    priceFrom: 42,
    currency: "EUR",
    durationLabel: { en: "1 Day", sq: "1 Ditë" },
    durationDays: 1,
    difficulty: "Easy",
    groupSize: 10,
    type: "Both",
    rating: 4.7,
    reviewCount: 87,
    description: {
      en: "Explore the stone-built old town of Gjirokastër, birthplace of Ismail Kadare, before continuing to the impossibly clear Blue Eye spring.",
      sq: "Eksploroni qytetin e vjetër prej guri të Gjirokastrës, vendlindja e Ismail Kadaresë, para se të vazhdoni drejt burimit të pastër të Syrit të Kaltër.",
    },
    highlights: {
      en: ["Gjirokastër Castle", "Ottoman-era houses", "Blue Eye Spring", "Old Bazaar"],
      sq: ["Kalaja e Gjirokastrës", "Shtëpi të periudhës otomane", "Burimi i Syrit të Kaltër", "Pazari i Vjetër"],
    },
    included: { en: ["Transport", "Guide", "Castle entrance"], sq: ["Transporti", "Guidë", "Hyrja në kala"] },
    excluded: { en: ["Lunch", "Personal expenses"], sq: ["Dreka", "Shpenzime personale"] },
    pickupOptions: {
      en: ["Saranda hotel pickup", "Gjirokastër hotel pickup"],
      sq: ["Marrja nga hoteli në Sarandë", "Marrja nga hoteli në Gjirokastër"],
    },
    itinerary: [
      {
        day: 1,
        title: { en: "Stone Town & Spring", sq: "Qyteti i Gurit & Burimi" },
        stops: [
          {
            time: "08:30",
            title: { en: "Pickup in Saranda", sq: "Marrja në Sarandë" },
            description: { en: "Drive inland toward Gjirokastër.", sq: "Udhëtim drejt brendësisë, nga Gjirokastra." },
            image: img.himareCoast,
          },
          {
            time: "10:00",
            title: { en: "Gjirokastër Castle", sq: "Kalaja e Gjirokastrës" },
            description: { en: "Explore the fortress and its Cold War tunnels.", sq: "Eksploroni kalanë dhe tunelet e Luftës së Ftohtë." },
            image: img.gjirokastraRoofs,
          },
          {
            time: "12:00",
            title: { en: "Old Bazaar lunch break", sq: "Pushim dreke në Pazarin e Vjetër" },
            description: { en: "Free time to eat and shop.", sq: "Kohë e lirë për të ngrënë dhe blerë." },
            image: img.gjirokastraStreet,
          },
          {
            time: "14:00",
            title: { en: "Blue Eye Spring", sq: "Burimi i Syrit të Kaltër" },
            description: { en: "Walk to the spring's edge and swim nearby.", sq: "Ecje deri te buza e burimit dhe not pranë tij." },
            image: img.blueEye,
          },
          {
            time: "17:00",
            title: { en: "Return to Saranda", sq: "Kthimi në Sarandë" },
            description: { en: "Coastal drive back.", sq: "Udhëtim kthimi buzë detit." },
            image: img.himareCliffs,
          },
        ],
      },
    ],
    availability: generateAvailability(5),
  },
  {
    slug: "ksamil-islands-boat-trip",
    name: { en: "Ksamil Islands & Butrint Boat Trip", sq: "Udhëtim me Varkë në Ishujt e Ksamilit & Butrint" },
    tagline: {
      en: "Caribbean-blue coves and a sunken ancient city.",
      sq: "Gji blu si në Karaibe dhe një qytet i lashtë i fshehur.",
    },
    destinationSlug: "ksamil",
    location: { en: "Ksamil, Albanian Riviera", sq: "Ksamil, Riviera Shqiptare" },
    categories: ["beach", "culture"],
    images: [img.ksamilBeach, img.ksamilAerial],
    priceFrom: 30,
    currency: "EUR",
    durationLabel: { en: "1 Day", sq: "1 Ditë" },
    durationDays: 1,
    difficulty: "Easy",
    groupSize: 14,
    type: "Both",
    rating: 4.9,
    reviewCount: 251,
    description: {
      en: "Hop between the pine-covered Ksamil islands by boat, snorkel over clear water, then explore the ancient ruins of Butrint National Park.",
      sq: "Kaloni mes ishujve të Ksamilit të mbuluar me pisha me varkë, bëni snorkeling në ujë të pastër, pastaj eksploroni rrënojat e lashta të Parkut Kombëtar të Butrintit.",
    },
    highlights: {
      en: ["Island hopping by boat", "Snorkelling stop", "Butrint ruins", "Free beach time"],
      sq: ["Kalim mes ishujve me varkë", "Ndalesë snorkeling", "Rrënojat e Butrintit", "Kohë e lirë në plazh"],
    },
    included: { en: ["Boat trip", "Snorkelling gear", "Guide"], sq: ["Udhëtim me varkë", "Pajisje snorkeling", "Guidë"] },
    excluded: { en: ["Butrint entrance ticket", "Lunch"], sq: ["Bileta e hyrjes në Butrint", "Dreka"] },
    pickupOptions: {
      en: ["Ksamil beach meeting point", "Saranda hotel pickup"],
      sq: ["Pikë takimi në plazhin e Ksamilit", "Marrja nga hoteli në Sarandë"],
    },
    popular: true,
    itinerary: [
      {
        day: 1,
        title: { en: "Islands & Ruins", sq: "Ishuj & Rrënoja" },
        stops: [
          {
            time: "09:00",
            title: { en: "Meet at Ksamil beach", sq: "Takim në plazhin e Ksamilit" },
            description: { en: "Board the boat for island hopping.", sq: "Hipni në varkë për të kaluar mes ishujve." },
            image: img.ksamilBeach,
          },
          {
            time: "10:00",
            title: { en: "Island swimming stops", sq: "Ndalesa not tek ishujt" },
            description: { en: "Snorkel around all four islets.", sq: "Bëni snorkeling rreth të katër ishujve." },
            image: img.ksamilAerial,
          },
          {
            time: "12:30",
            title: { en: "Free beach time", sq: "Kohë e lirë në plazh" },
            description: { en: "Relax on the mainland coves.", sq: "Relaksohuni në gjive e tokës kryesore." },
            image: img.ksamilBeach,
          },
          {
            time: "14:30",
            title: { en: "Butrint National Park", sq: "Parku Kombëtar i Butrintit" },
            description: { en: "Guided walk through the ancient ruins.", sq: "Shëtitje e udhëhequr nëpër rrënojat e lashta." },
            image: img.vloreCoast,
          },
        ],
      },
    ],
    availability: generateAvailability(6),
  },
  {
    slug: "himare-riviera-hike",
    name: { en: "Himarë Coastal Hike", sq: "Ecje Bregdetare në Himarë" },
    tagline: {
      en: "Clifftop trails above the bluest water on the coast.",
      sq: "Shtigje mbi shkëmbinj sipër ujit më blu të bregdetit.",
    },
    destinationSlug: "himare",
    location: { en: "Himarë, Albanian Riviera", sq: "Himarë, Riviera Shqiptare" },
    categories: ["adventure", "beach", "hidden-gems"],
    images: [img.himareCliffs, img.himareCoast],
    priceFrom: 38,
    currency: "EUR",
    durationLabel: { en: "1 Day", sq: "1 Ditë" },
    durationDays: 1,
    difficulty: "Challenging",
    groupSize: 8,
    type: "Group",
    rating: 4.8,
    reviewCount: 63,
    description: {
      en: "A coastal hike from Old Himarë to the hidden Gjipe Beach, following goat trails above cliffs that drop straight into the Ionian Sea.",
      sq: "Një ecje bregdetare nga Himara e Vjetër drejt plazhit të fshehur të Gjipesë, duke ndjekur shtigje mbi shkëmbinj që bien direkt në Detin Jon.",
    },
    highlights: {
      en: ["Old Himarë ruins", "Clifftop viewpoints", "Gjipe Beach", "Swimming stop"],
      sq: ["Rrënojat e Himarës së Vjetër", "Pika panoramike mbi shkëmbinj", "Plazhi i Gjipesë", "Ndalesë not"],
    },
    included: {
      en: ["Guide", "Water & snacks", "Transport to trailhead"],
      sq: ["Guidë", "Ujë & ushqime të lehta", "Transport deri te nisja e shtegut"],
    },
    excluded: { en: ["Lunch", "Personal gear"], sq: ["Dreka", "Pajisje personale"] },
    pickupOptions: { en: ["Himarë hotel pickup"], sq: ["Marrja nga hoteli në Himarë"] },
    itinerary: [
      {
        day: 1,
        title: { en: "Cliffs to Cove", sq: "Nga Shkëmbinjtë te Gjiri" },
        stops: [
          {
            time: "08:00",
            title: { en: "Meet in Old Himarë", sq: "Takim në Himarën e Vjetër" },
            description: { en: "Brief and gear check.", sq: "Informim dhe kontroll i pajisjeve." },
            image: img.himareCliffs,
          },
          {
            time: "08:30",
            title: { en: "Coastal trail", sq: "Shtegu bregdetar" },
            description: { en: "Hike along the clifftop path.", sq: "Ecje përgjatë shtegut mbi shkëmbinj." },
            image: img.himareCoast,
          },
          {
            time: "11:30",
            title: { en: "Gjipe Beach", sq: "Plazhi i Gjipesë" },
            description: { en: "Descend into the hidden canyon beach.", sq: "Zbritje drejt plazhit të fshehur në kanion." },
            image: img.himareCliffs,
          },
          {
            time: "13:00",
            title: { en: "Swim & rest", sq: "Not & pushim" },
            description: { en: "Free time to swim and eat.", sq: "Kohë e lirë për not dhe ushqim." },
            image: img.himareCoast,
          },
          {
            time: "16:00",
            title: { en: "Return hike", sq: "Ecja e kthimit" },
            description: { en: "Walk back and transfer to hotel.", sq: "Ecje kthimi dhe transferim në hotel." },
            image: img.himareCliffs,
          },
        ],
      },
    ],
    availability: generateAvailability(7),
  },
  {
    slug: "tirana-city-highlights",
    name: { en: "Tirana City Highlights", sq: "Pikat Kryesore të Tiranës" },
    tagline: {
      en: "Communist history meets espresso culture.",
      sq: "Historia komuniste takon kulturën e kafesë.",
    },
    destinationSlug: "tirana",
    location: { en: "Tirana, Central Albania", sq: "Tiranë, Shqipëria Qendrore" },
    categories: ["culture", "food-wine"],
    images: [img.tiranaSkyline, img.tiranaStreet],
    priceFrom: 20,
    currency: "EUR",
    durationLabel: { en: "Half Day", sq: "Gjysmë Dite" },
    durationDays: 1,
    halfDay: true,
    difficulty: "Easy",
    groupSize: 15,
    type: "Both",
    rating: 4.6,
    reviewCount: 142,
    description: {
      en: "Walk through Skanderbeg Square, descend into a Cold War bunker turned museum, and finish with coffee in the trendy Blloku district.",
      sq: "Shëtitni në Sheshin Skënderbej, zbrisni në një bunker të Luftës së Ftohtë të kthyer në muze, dhe përfundoni me kafe në zonën trendi të Bllokut.",
    },
    highlights: {
      en: ["Skanderbeg Square", "Bunk'Art 2", "Blloku district", "Dajti cable car (optional)"],
      sq: ["Sheshi Skënderbej", "Bunk'Art 2", "Zona e Bllokut", "Teleferiku i Dajtit (opsionale)"],
    },
    included: { en: ["Local guide", "Bunk'Art entrance"], sq: ["Guidë lokale", "Hyrja në Bunk'Art"] },
    excluded: { en: ["Cable car ticket", "Food & drinks"], sq: ["Bileta e teleferikut", "Ushqim & pije"] },
    pickupOptions: { en: ["Meet at Skanderbeg Square"], sq: ["Takim në Sheshin Skënderbej"] },
    itinerary: [
      {
        day: 1,
        title: { en: "City Walk", sq: "Shëtitje në Qytet" },
        stops: [
          {
            time: "09:30",
            title: { en: "Skanderbeg Square", sq: "Sheshi Skënderbej" },
            description: { en: "Orientation and history briefing.", sq: "Orientim dhe informim historik." },
            image: img.tiranaSkyline,
          },
          {
            time: "10:15",
            title: { en: "Bunk'Art 2", sq: "Bunk'Art 2" },
            description: { en: "Explore the underground museum.", sq: "Eksploroni muzeun nëntokësor." },
            image: img.tiranaStreet,
          },
          {
            time: "12:00",
            title: { en: "Blloku district", sq: "Zona e Bllokut" },
            description: { en: "Coffee break in Tirana's trendiest neighbourhood.", sq: "Pushim kafeje në lagjen më trendi të Tiranës." },
            image: img.tiranaStreet,
          },
        ],
      },
    ],
    availability: generateAvailability(8),
  },
  {
    slug: "korca-wine-and-bazaar",
    name: { en: "Korçë Wine & Old Bazaar Tour", sq: "Turne Vere & Pazari i Vjetër në Korçë" },
    tagline: {
      en: "Highland vineyards and Albania's oldest brewery.",
      sq: "Vreshta malore dhe fabrika më e vjetër e birrës në Shqipëri.",
    },
    destinationSlug: "korca",
    location: { en: "Korçë, Southeastern Albania", sq: "Korçë, Juglindja e Shqipërisë" },
    categories: ["food-wine", "culture"],
    images: [img.korcaTown, img.korcaWine],
    priceFrom: 33,
    currency: "EUR",
    durationLabel: { en: "1 Day", sq: "1 Ditë" },
    durationDays: 1,
    difficulty: "Easy",
    groupSize: 10,
    type: "Both",
    rating: 4.7,
    reviewCount: 54,
    description: {
      en: "Taste your way through Korçë — from a family-run vineyard to the historic Old Bazaar and Albania's first brewery.",
      sq: "Shijoni Korçën hap pas hapi — nga një vresht familjar te Pazari i Vjetër historik dhe fabrika e parë e birrës në Shqipëri.",
    },
    highlights: {
      en: ["Vineyard tasting", "Old Bazaar", "Resurrection Cathedral", "Brewery visit"],
      sq: ["Shijim në vresht", "Pazari i Vjetër", "Katedralja e Ngjalljes", "Vizitë në fabrikën e birrës"],
    },
    included: { en: ["Transport", "Wine tasting", "Guide"], sq: ["Transporti", "Shijim vere", "Guidë"] },
    excluded: { en: ["Lunch", "Personal expenses"], sq: ["Dreka", "Shpenzime personale"] },
    pickupOptions: { en: ["Korçë hotel pickup"], sq: ["Marrja nga hoteli në Korçë"] },
    itinerary: [
      {
        day: 1,
        title: { en: "Highland Flavours", sq: "Shije Malore" },
        stops: [
          {
            time: "10:00",
            title: { en: "Vineyard visit", sq: "Vizitë në vresht" },
            description: { en: "Tour and tasting at a family winery.", sq: "Turne dhe shijim në një kantinë familjare." },
            image: img.korcaWine,
          },
          {
            time: "12:30",
            title: { en: "Old Bazaar", sq: "Pazari i Vjetër" },
            description: { en: "Walk through the historic market streets.", sq: "Shëtitje nëpër rrugët historike të tregut." },
            image: img.korcaTown,
          },
          {
            time: "14:30",
            title: { en: "Brewery stop", sq: "Ndalesë në fabrikën e birrës" },
            description: { en: "Visit Albania's oldest brewery.", sq: "Vizitoni fabrikën më të vjetër të birrës në Shqipëri." },
            image: img.korcaTown,
          },
        ],
      },
    ],
    availability: generateAvailability(9),
  },
  {
    slug: "accursed-mountains-3-day-trek",
    name: { en: "Accursed Mountains 3-Day Trek", sq: "Ekspeditë 3-Ditore në Bjeshkët e Namuna" },
    tagline: {
      en: "Valbonë to Theth on foot, hut to hut.",
      sq: "Nga Valbona në Theth në këmbë, nga bujtina në bujtinë.",
    },
    destinationSlug: "theth",
    location: { en: "Valbonë & Theth, Albanian Alps", sq: "Valbonë & Theth, Alpet Shqiptare" },
    categories: ["adventure", "mountains", "multi-day"],
    images: [img.thethPeaks, img.mountainPeakClouds, img.hikers, img.thethTrail],
    priceFrom: 189,
    currency: "EUR",
    durationLabel: { en: "3 Days", sq: "3 Ditë" },
    durationDays: 3,
    difficulty: "Challenging",
    groupSize: 8,
    type: "Group",
    rating: 4.9,
    reviewCount: 71,
    description: {
      en: "The classic Balkans trek: cross from Valbonë to Theth over a 1,800m pass, sleeping in mountain guesthouses and eating home-cooked meals along the way.",
      sq: "Ekspedita klasike e Ballkanit: kaloni nga Valbona në Theth mbi një qafë 1,800m, duke fjetur në bujtina malore dhe duke ngrënë vakte shtëpiake gjatë rrugës.",
    },
    highlights: {
      en: ["Valbonë Pass crossing", "Guesthouse stays", "Home-cooked meals", "Grunas Waterfall"],
      sq: ["Kalimi i Qafës së Valbonës", "Qëndrime në bujtina", "Vakte shtëpiake", "Ujëvara e Grunasit"],
    },
    included: {
      en: ["Guide", "2 nights guesthouse", "All meals", "Transport"],
      sq: ["Guidë", "2 net në bujtinë", "Të gjitha vaktet", "Transporti"],
    },
    excluded: {
      en: ["Travel insurance", "Personal gear", "Gratuities"],
      sq: ["Sigurimi i udhëtimit", "Pajisje personale", "Bakshishe"],
    },
    pickupOptions: { en: ["Shkodër hotel pickup"], sq: ["Marrja nga hoteli në Shkodër"] },
    featured: true,
    itinerary: [
      {
        day: 1,
        title: { en: "Shkodër to Valbonë", sq: "Nga Shkodra në Valbonë" },
        stops: [
          {
            time: "08:00",
            title: { en: "Pickup in Shkodër", sq: "Marrja në Shkodër" },
            description: { en: "Drive north into the mountains.", sq: "Udhëtim drejt veriut, në male." },
            image: img.shkodraLake,
          },
          {
            time: "12:00",
            title: { en: "Arrival in Valbonë", sq: "Mbërritja në Valbonë" },
            description: { en: "Settle into the guesthouse.", sq: "Vendosuni në bujtinë." },
            image: img.mountainPeakClouds,
          },
          {
            time: "14:00",
            title: { en: "Acclimatisation walk", sq: "Ecje akomodimi" },
            description: { en: "Short valley walk before dinner.", sq: "Ecje e shkurtër në luginë para darkës." },
            image: img.hikers,
          },
        ],
      },
      {
        day: 2,
        title: { en: "The Pass Crossing", sq: "Kalimi i Qafës" },
        stops: [
          {
            time: "06:30",
            title: { en: "Early breakfast", sq: "Mëngjes i hershëm" },
            description: { en: "Fuel up before the big climb.", sq: "Furnizohuni para ngjitjes së madhe." },
            image: img.mountainSunrise,
          },
          {
            time: "07:30",
            title: { en: "Ascent to the pass", sq: "Ngjitja drejt qafës" },
            description: { en: "Climb to 1,800m with panoramic views.", sq: "Ngjituni në 1,800m me pamje panoramike." },
            image: img.mountainPeakClouds,
          },
          {
            time: "13:00",
            title: { en: "Descent to Theth", sq: "Zbritja drejt Thethit" },
            description: { en: "Long descent into the Theth valley.", sq: "Zbritje e gjatë drejt luginës së Thethit." },
            image: img.thethTrail,
          },
          {
            time: "17:00",
            title: { en: "Guesthouse dinner", sq: "Darkë në bujtinë" },
            description: { en: "Rest and traditional dinner.", sq: "Pushim dhe darkë tradicionale." },
            image: img.thethLake,
          },
        ],
      },
      {
        day: 3,
        title: { en: "Theth to Shkodër", sq: "Nga Theth në Shkodër" },
        stops: [
          {
            time: "09:00",
            title: { en: "Grunas Waterfall", sq: "Ujëvara e Grunasit" },
            description: { en: "Morning walk to the waterfall.", sq: "Ecje mëngjesi deri te ujëvara." },
            image: img.thethTrail,
          },
          {
            time: "11:00",
            title: { en: "Blue Eye visit", sq: "Vizitë te Syri i Kaltër" },
            description: { en: "Final swim before departure.", sq: "Not i fundit para nisjes." },
            image: img.blueEye,
          },
          {
            time: "13:00",
            title: { en: "Drive to Shkodër", sq: "Udhëtim drejt Shkodrës" },
            description: { en: "Over the pass and back to the city.", sq: "Mbi qafën malore dhe drejt qytetit." },
            image: img.mountainMist,
          },
        ],
      },
    ],
    availability: generateAvailability(10),
  },
  {
    slug: "riviera-multi-day-escape",
    name: { en: "Albanian Riviera 4-Day Escape", sq: "Ikje 4-Ditore në Rivierën Shqiptare" },
    tagline: {
      en: "Ksamil, Himarë and Vlorë — slow travel down the coast.",
      sq: "Ksamil, Himarë dhe Vlorë — udhëtim i qetë përgjatë bregdetit.",
    },
    destinationSlug: "himare",
    location: { en: "Albanian Riviera", sq: "Riviera Shqiptare" },
    categories: ["beach", "multi-day", "private-tours"],
    images: [img.himareCoast, img.ksamilBeach, img.vloreCoast, img.himareCliffs],
    priceFrom: 349,
    currency: "EUR",
    durationLabel: { en: "4 Days", sq: "4 Ditë" },
    durationDays: 4,
    difficulty: "Easy",
    groupSize: 6,
    type: "Private",
    rating: 5.0,
    reviewCount: 38,
    description: {
      en: "A private, slow-paced journey down the Riviera — boutique stays, hidden beaches, and a private driver-guide the entire way.",
      sq: "Një udhëtim privat, në ritëm të qetë përgjatë Rivierës — akomodime butik, plazhe të fshehura, dhe një shofer-guidë privat gjatë gjithë rrugës.",
    },
    highlights: {
      en: ["Private driver-guide", "Boutique accommodation", "Hidden beach access", "Flexible pace"],
      sq: ["Shofer-guidë privat", "Akomodim butik", "Akses në plazhe të fshehura", "Ritëm fleksibël"],
    },
    included: {
      en: ["Private transport", "3 nights accommodation", "Breakfast daily", "Guide"],
      sq: ["Transport privat", "3 net akomodim", "Mëngjes çdo ditë", "Guidë"],
    },
    excluded: {
      en: ["Flights", "Lunch & dinner", "Travel insurance"],
      sq: ["Fluturime", "Drekë & darkë", "Sigurimi i udhëtimit"],
    },
    pickupOptions: {
      en: ["Tirana International Airport", "Vlorë hotel pickup"],
      sq: ["Aeroporti Ndërkombëtar i Tiranës", "Marrja nga hoteli në Vlorë"],
    },
    featured: true,
    itinerary: [
      {
        day: 1,
        title: { en: "Tirana to Vlorë", sq: "Nga Tirana në Vlorë" },
        stops: [
          {
            time: "09:00",
            title: { en: "Airport pickup", sq: "Marrja nga aeroporti" },
            description: { en: "Meet your private driver-guide.", sq: "Takohuni me shofer-guidën tuaj privat." },
            image: img.tiranaSkyline,
          },
          {
            time: "13:00",
            title: { en: "Vlorë seafront", sq: "Buzë deti në Vlorë" },
            description: { en: "Check-in and coastal walk.", sq: "Regjistrimi dhe shëtitje buzë detit." },
            image: img.vloreTown,
          },
        ],
      },
      {
        day: 2,
        title: { en: "Llogara & Himarë", sq: "Llogara & Himarë" },
        stops: [
          {
            time: "10:00",
            title: { en: "Llogara Pass", sq: "Qafa e Llogarasë" },
            description: { en: "Stop at the dramatic mountain viewpoint.", sq: "Ndalesë te pika dramatike panoramike malore." },
            image: img.mountainPeakClouds,
          },
          {
            time: "13:00",
            title: { en: "Old Himarë", sq: "Himara e Vjetër" },
            description: { en: "Explore and swim nearby.", sq: "Eksploroni dhe notoni pranë." },
            image: img.himareCliffs,
          },
        ],
      },
      {
        day: 3,
        title: { en: "Gjipe & Ksamil", sq: "Gjipe & Ksamil" },
        stops: [
          {
            time: "09:00",
            title: { en: "Gjipe Beach", sq: "Plazhi i Gjipesë" },
            description: { en: "Hike to the hidden cove.", sq: "Ecje drejt gjirit të fshehur." },
            image: img.himareCoast,
          },
          {
            time: "15:00",
            title: { en: "Ksamil islands", sq: "Ishujt e Ksamilit" },
            description: { en: "Boat trip between the islets.", sq: "Udhëtim me varkë mes ishujve." },
            image: img.ksamilBeach,
          },
        ],
      },
      {
        day: 4,
        title: { en: "Butrint & Departure", sq: "Butrint & Nisja" },
        stops: [
          {
            time: "10:00",
            title: { en: "Butrint ruins", sq: "Rrënojat e Butrintit" },
            description: { en: "Guided walk through the ancient site.", sq: "Shëtitje e udhëhequr nëpër vendin e lashtë." },
            image: img.vloreCoast,
          },
          {
            time: "14:00",
            title: { en: "Transfer onward", sq: "Transferim i mëtejshëm" },
            description: { en: "Drop-off at Saranda or Corfu ferry.", sq: "Zbritje në Sarandë ose te tragetii i Korfuzit." },
            image: img.ksamilAerial,
          },
        ],
      },
    ],
    availability: generateAvailability(11),
  },
];

export function getTour(slug: string) {
  return tours.find((t) => t.slug === slug);
}

export function getToursByDestination(destinationSlug: string) {
  return tours.filter((t) => t.destinationSlug === destinationSlug);
}

export function getToursByCategory(categorySlug: string) {
  return tours.filter((t) => t.categories.includes(categorySlug));
}

export function getRelatedTours(tour: Tour, limit = 3) {
  return tours
    .filter((t) => t.slug !== tour.slug && t.categories.some((c) => tour.categories.includes(c)))
    .slice(0, limit);
}
