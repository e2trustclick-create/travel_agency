import { Destination } from "@/types";
import { img } from "@/lib/images";

export const destinations: Destination[] = [
  {
    slug: "theth",
    name: { en: "Theth", sq: "Theth" },
    region: { en: "Albanian Alps", sq: "Alpet Shqiptare" },
    image: img.thethLake,
    gallery: [img.thethLake, img.thethPeaks, img.thethTrail, img.blueEye],
    description: {
      en: "A remote alpine village guarded by jagged peaks.",
      sq: "Një fshat alpin i largët, i ruajtur nga majat shkëmbore.",
    },
    longDescription: {
      en: "Tucked inside a national park in the Albanian Alps, Theth was cut off from the rest of the country for most of the 20th century. Today it's reachable by a dramatic mountain road and rewards visitors with waterfalls, stone kulla towers and some of the best hiking in the Balkans.",
      sq: "I fshehur brenda një parku kombëtar në Alpet Shqiptare, Thethi ishte i shkëputur nga pjesa tjetër e vendit për pjesën më të madhe të shekullit të 20-të. Sot arrihet nga një rrugë malore spektakolare dhe shpërblen vizitorët me ujëvara, kulla guri dhe disa nga shtigjet më të mira për ecje në Ballkan.",
    },
    tourCount: 9,
    priceFrom: 39,
    coordinates: { x: 32, y: 18 },
    weather: {
      bestMonths: { en: "May – October", sq: "Maj – Tetor" },
      avgTempSummer: "24°C",
      avgTempWinter: "2°C",
    },
    highlights: {
      en: ["Grunas Waterfall", "Blue Eye of Theth", "Lock-in Tower", "Alpine hiking trails"],
      sq: ["Ujëvara e Grunasit", "Syri i Kaltër i Thethit", "Kulla e Ngujimit", "Shtigje alpine për ecje"],
    },
  },
  {
    slug: "shkodra",
    name: { en: "Shkodër", sq: "Shkodër" },
    region: { en: "Northern Albania", sq: "Shqipëria e Veriut" },
    image: img.shkodraLake,
    gallery: [img.shkodraLake, img.mountainMist],
    description: {
      en: "A lakeside city and gateway to the Alps.",
      sq: "Një qytet buzë liqenit dhe porta drejt Alpeve.",
    },
    longDescription: {
      en: "Albania's cultural heart in the north, Shkodër sits beside the Balkans' largest lake. Cobbled streets, Rozafa Castle and a legendary cycling culture make it a perfect base before heading into the mountains.",
      sq: "Zemra kulturore e Shqipërisë në veri, Shkodra ndodhet pranë liqenit më të madh të Ballkanit. Rrugët me kalldrëm, Kalaja e Rozafës dhe kultura legjendare e biçikletave e bëjnë një bazë të përkryer para se të nisesh drejt maleve.",
    },
    tourCount: 6,
    priceFrom: 25,
    coordinates: { x: 28, y: 12 },
    weather: {
      bestMonths: { en: "April – November", sq: "Prill – Nëntor" },
      avgTempSummer: "29°C",
      avgTempWinter: "8°C",
    },
    highlights: {
      en: ["Rozafa Castle", "Lake Shkodra", "Old Bazaar", "Cycling routes"],
      sq: ["Kalaja e Rozafës", "Liqeni i Shkodrës", "Pazari i Vjetër", "Rrugë për biçikletë"],
    },
  },
  {
    slug: "koman-lake",
    name: { en: "Koman Lake", sq: "Liqeni i Komanit" },
    region: { en: "Northern Albania", sq: "Shqipëria e Veriut" },
    image: img.komanLake,
    gallery: [img.komanLake, img.komanFerry, img.mountainDock],
    description: {
      en: "A fjord-like ferry ride through the mountains.",
      sq: "Një udhëtim me traget mes maleve, si në fjordet skandinave.",
    },
    longDescription: {
      en: "Often called Europe's most beautiful ferry ride, the Koman Lake crossing winds through steep emerald canyons carved by the Drin River — a three-hour journey that feels like Norway relocated to the Balkans.",
      sq: "Shpesh quajtur udhëtimi më i bukur me traget në Evropë, kalimi i Liqenit të Komanit përshkon kanione të thella smerald të gdhendura nga lumi Drin — një udhëtim tre-orësh që të duket si Norvegjia e zhvendosur në Ballkan.",
    },
    tourCount: 5,
    priceFrom: 35,
    coordinates: { x: 34, y: 22 },
    weather: {
      bestMonths: { en: "May – September", sq: "Maj – Shtator" },
      avgTempSummer: "27°C",
      avgTempWinter: "6°C",
    },
    highlights: {
      en: ["Koman Ferry", "Drin River canyons", "Riverside villages"],
      sq: ["Tragetii i Komanit", "Kanionet e lumit Drin", "Fshatra buzë lumit"],
    },
  },
  {
    slug: "shala-river",
    name: { en: "Shala River", sq: "Lumi i Shalës" },
    region: { en: "Northern Albania", sq: "Shqipëria e Veriut" },
    image: img.shalaRiver,
    gallery: [img.shalaRiver, img.shalaValley, img.shalaForest],
    description: {
      en: "Glacial turquoise water inside a limestone canyon.",
      sq: "Ujë tirkiz akullnajor brenda një kanioni gëlqeror.",
    },
    longDescription: {
      en: "The Shala River carves through the Albanian Alps in ribbons of impossibly clear turquoise water. Wooden boats drift between limestone cliffs and pebble beaches — one of the most photographed spots in the country.",
      sq: "Lumi i Shalës përshkon Alpet Shqiptare në rripa uji tirkiz të pastër. Varka prej druri lundrojnë mes shkëmbinjve gëlqerorë dhe plazheve me kalldrëm — një nga vendet më të fotografuara në vend.",
    },
    tourCount: 12,
    priceFrom: 35,
    coordinates: { x: 36, y: 20 },
    weather: {
      bestMonths: { en: "June – September", sq: "Qershor – Shtator" },
      avgTempSummer: "28°C",
      avgTempWinter: "5°C",
    },
    highlights: {
      en: ["Boat rides", "River swimming", "Limestone canyons", "Riverside picnics"],
      sq: ["Shëtitje me varkë", "Not në lumë", "Kanione gëlqerore", "Picnic buzë lumit"],
    },
  },
  {
    slug: "berat",
    name: { en: "Berat", sq: "Berat" },
    region: { en: "Central Albania", sq: "Shqipëria Qendrore" },
    image: img.beratStone,
    gallery: [img.beratStone, img.beratAlley],
    description: {
      en: "The 'City of a Thousand Windows'.",
      sq: "'Qyteti i Njëmijë Dritareve'.",
    },
    longDescription: {
      en: "A UNESCO World Heritage town where Ottoman-era houses climb the hillside in tiers of white and terracotta. A hilltop castle, working churches and mosques, and riverside cafés make Berat one of Albania's most photogenic towns.",
      sq: "Një qytet Trashëgimi Bote e UNESCO-s ku shtëpitë e periudhës otomane ngjiten kodrën në shtresa të bardha dhe të kuqe tulle. Një kala mbi kodër, kisha dhe xhami aktive, dhe kafene buzë lumit e bëjnë Beratin një nga qytetet më fotogjenikë të Shqipërisë.",
    },
    tourCount: 8,
    priceFrom: 29,
    coordinates: { x: 40, y: 52 },
    weather: {
      bestMonths: { en: "April – October", sq: "Prill – Tetor" },
      avgTempSummer: "31°C",
      avgTempWinter: "9°C",
    },
    highlights: {
      en: ["Berat Castle", "Mangalem Quarter", "Onufri Museum", "Osumi Canyons day trip"],
      sq: ["Kalaja e Beratit", "Lagja Mangalem", "Muzeu Onufri", "Ekskursion në Kanionet e Osumit"],
    },
  },
  {
    slug: "gjirokaster",
    name: { en: "Gjirokastër", sq: "Gjirokastër" },
    region: { en: "Southern Albania", sq: "Shqipëria e Jugut" },
    image: img.gjirokastraRoofs,
    gallery: [img.gjirokastraRoofs, img.gjirokastraStreet],
    description: {
      en: "A stone-built hill town above the Drino valley.",
      sq: "Një qytet guri mbi kodër, sipër luginës së Drinos.",
    },
    longDescription: {
      en: "Grey stone roofs, Ottoman mansions and a hilltop fortress define this UNESCO-listed town, birthplace of writer Ismail Kadare. It's also the gateway to the Blue Eye spring and the Albanian Riviera.",
      sq: "Çatitë e gurit të hirtë, shtëpitë otomane dhe kalaja mbi kodër e karakterizojnë këtë qytet të listuar nga UNESCO, vendlindja e shkrimtarit Ismail Kadare. Është gjithashtu porta drejt burimit të Syrit të Kaltër dhe Rivierës Shqiptare.",
    },
    tourCount: 7,
    priceFrom: 27,
    coordinates: { x: 46, y: 74 },
    weather: {
      bestMonths: { en: "April – October", sq: "Prill – Tetor" },
      avgTempSummer: "32°C",
      avgTempWinter: "6°C",
    },
    highlights: {
      en: ["Gjirokastër Castle", "Old Bazaar", "Blue Eye Spring", "Zekate House"],
      sq: ["Kalaja e Gjirokastrës", "Pazari i Vjetër", "Burimi i Syrit të Kaltër", "Shtëpia Zekate"],
    },
  },
  {
    slug: "ksamil",
    name: { en: "Ksamil", sq: "Ksamil" },
    region: { en: "Albanian Riviera", sq: "Riviera Shqiptare" },
    image: img.ksamilBeach,
    gallery: [img.ksamilBeach, img.ksamilAerial],
    description: {
      en: "Caribbean-blue water and pine-covered islets.",
      sq: "Ujë blu si në Karaibe dhe ishuj të vegjël të mbuluar me pisha.",
    },
    longDescription: {
      en: "Four small islands sit just offshore from Ksamil's white-sand coves. It's the closest Albania comes to the Caribbean — and only a short hop from the Butrint archaeological park.",
      sq: "Katër ishuj të vegjël qëndrojnë pranë gjive me rërë të bardhë të Ksamilit. Është më afër që Shqipëria mund të vijë me Karaibet — dhe vetëm pak minuta larg parkut arkeologjik të Butrintit.",
    },
    tourCount: 10,
    priceFrom: 30,
    coordinates: { x: 44, y: 92 },
    weather: {
      bestMonths: { en: "May – September", sq: "Maj – Shtator" },
      avgTempSummer: "30°C",
      avgTempWinter: "12°C",
    },
    highlights: {
      en: ["Ksamil Islands", "Butrint National Park", "Snorkelling", "Beach clubs"],
      sq: ["Ishujt e Ksamilit", "Parku Kombëtar i Butrintit", "Snorkeling", "Beach club-e"],
    },
  },
  {
    slug: "himare",
    name: { en: "Himarë", sq: "Himarë" },
    region: { en: "Albanian Riviera", sq: "Riviera Shqiptare" },
    image: img.himareCliffs,
    gallery: [img.himareCliffs, img.himareCoast],
    description: {
      en: "Dramatic cliffs above the Ionian Sea.",
      sq: "Shkëmbinj dramatikë sipër Detit Jon.",
    },
    longDescription: {
      en: "Where the Ceraunian Mountains drop straight into the Ionian Sea. Hidden coves, a hilltop old town and some of the Riviera's clearest water make Himarë a favourite for slow coastal days.",
      sq: "Aty ku Malet e Ceraunikës bien direkt në Detin Jon. Gji të fshehura, një qytet i vjetër mbi kodër dhe disa nga ujërat më të pastra të Rivierës e bëjnë Himarën një vend të preferuar për ditë të ngadalta buzë detit.",
    },
    tourCount: 6,
    priceFrom: 32,
    coordinates: { x: 40, y: 84 },
    weather: {
      bestMonths: { en: "May – October", sq: "Maj – Tetor" },
      avgTempSummer: "29°C",
      avgTempWinter: "13°C",
    },
    highlights: {
      en: ["Gjipe Beach", "Old Himarë", "Llogara Pass", "Coastal hiking"],
      sq: ["Plazhi i Gjipesë", "Himara e Vjetër", "Qafa e Llogarasë", "Ecje bregdetare"],
    },
  },
  {
    slug: "vlore",
    name: { en: "Vlorë", sq: "Vlorë" },
    region: { en: "Albanian Riviera", sq: "Riviera Shqiptare" },
    image: img.vloreTown,
    gallery: [img.vloreTown, img.vloreCoast],
    description: {
      en: "Where the Adriatic meets the Ionian.",
      sq: "Aty ku Adriatiku takon Jonin.",
    },
    longDescription: {
      en: "A laid-back port city marking the meeting point of two seas. Vlorë is the launchpad for the Riviera road south, with independence-era history and a lively seafront promenade.",
      sq: "Një qytet portual i qetë që shënon pikën e takimit të dy deteve. Vlora është nisja e rrugës së Rivierës drejt jugut, me histori nga periudha e pavarësisë dhe një shëtitore të gjallë buzë detit.",
    },
    tourCount: 5,
    priceFrom: 28,
    coordinates: { x: 32, y: 66 },
    weather: {
      bestMonths: { en: "May – October", sq: "Maj – Tetor" },
      avgTempSummer: "30°C",
      avgTempWinter: "11°C",
    },
    highlights: {
      en: ["Independence Monument", "Zvernec Island", "Karaburun Peninsula boat trips"],
      sq: ["Monumenti i Pavarësisë", "Ishulli i Zvërnecit", "Udhëtime me varkë në Gadishullin e Karaburunit"],
    },
  },
  {
    slug: "tirana",
    name: { en: "Tirana", sq: "Tiranë" },
    region: { en: "Central Albania", sq: "Shqipëria Qendrore" },
    image: img.tiranaSkyline,
    gallery: [img.tiranaSkyline, img.tiranaStreet],
    description: {
      en: "A colourful capital in fast motion.",
      sq: "Një kryeqytet plot ngjyra në lëvizje të shpejtë.",
    },
    longDescription: {
      en: "Albania's capital blends communist-era landmarks with a booming café culture, street art and a fast-changing skyline. It's the natural starting point for most journeys across the country.",
      sq: "Kryeqyteti i Shqipërisë përzien monumente të periudhës komuniste me një kulturë kafenesh në zhvillim, art rrugor dhe një siluetë qyteti që ndryshon me shpejtësi. Është pika natyrale e nisjes për shumicën e udhëtimeve në vend.",
    },
    tourCount: 11,
    priceFrom: 20,
    coordinates: { x: 38, y: 44 },
    weather: {
      bestMonths: { en: "April – November", sq: "Prill – Nëntor" },
      avgTempSummer: "31°C",
      avgTempWinter: "9°C",
    },
    highlights: {
      en: ["Skanderbeg Square", "Bunk'Art", "Blloku district", "Dajti Mountain cable car"],
      sq: ["Sheshi Skënderbej", "Bunk'Art", "Zona e Bllokut", "Teleferiku i Malit të Dajtit"],
    },
  },
  {
    slug: "korca",
    name: { en: "Korçë", sq: "Korçë" },
    region: { en: "Southeastern Albania", sq: "Juglindja e Shqipërisë" },
    image: img.korcaTown,
    gallery: [img.korcaTown, img.korcaWine],
    description: {
      en: "Highland culture, beer and old bazaars.",
      sq: "Kulturë malore, birrë dhe pazare të vjetra.",
    },
    longDescription: {
      en: "A highland city known for its Old Bazaar, French-built cathedral and Albania's oldest brewery. Nearby vineyards and cool mountain air make it a favourite for food and wine lovers.",
      sq: "Një qytet malor i njohur për Pazarin e Vjetër, katedralen e ndërtuar nga francezët dhe fabrikën më të vjetër të birrës në Shqipëri. Vreshtat pranë dhe ajri i freskët malor e bëjnë të preferuar për dashamirët e ushqimit dhe verës.",
    },
    tourCount: 4,
    priceFrom: 26,
    coordinates: { x: 56, y: 60 },
    weather: {
      bestMonths: { en: "May – September", sq: "Maj – Shtator" },
      avgTempSummer: "27°C",
      avgTempWinter: "0°C",
    },
    highlights: {
      en: ["Old Bazaar", "Resurrection Cathedral", "Local wineries", "Museum of Medieval Art"],
      sq: ["Pazari i Vjetër", "Katedralja e Ngjalljes", "Verishte lokale", "Muzeu i Artit Mesjetar"],
    },
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
