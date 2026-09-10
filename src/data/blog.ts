import { BlogPost } from "@/types";
import { img } from "@/lib/images";

export const blogPosts: BlogPost[] = [
  {
    slug: "10-places-you-cant-miss-in-albania",
    title: {
      en: "10 Places You Can't Miss in Albania",
      sq: "10 Vende që Nuk Duhet t'i Humbisni në Shqipëri",
    },
    excerpt: {
      en: "From alpine villages to Caribbean-blue coves — our essential Albania list.",
      sq: "Nga fshatra alpine te gji blu si në Karaibe — lista jonë thelbësore për Shqipërinë.",
    },
    image: img.thethLake,
    category: { en: "Guides", sq: "Udhëzues" },
    readTime: { en: "8 min read", sq: "8 min lexim" },
    date: { en: "March 2026", sq: "Mars 2026" },
    featured: true,
    relatedDestinationSlug: "theth",
    content: {
      en: [
        "Albania packs an unreasonable amount of scenery into a small country. In a single week you can go from glacial lakes in the north to Caribbean-blue coves in the south, with Ottoman hill towns and canyon rivers in between.",
        "Start in the Albanian Alps: Theth and the Shala River are the two places nearly every traveler mentions first, and for good reason — the water color alone is worth the drive. From there, the Koman Lake ferry is the most relaxing way to cross into the mountains, cutting through canyons that feel Norwegian.",
        "Further south, Berat and Gjirokastër carry the country's Ottoman history in stone — tiered hillside houses, working castles, and old bazaars that still function as daily markets rather than tourist sets.",
        "Finish on the coast. Ksamil's islands are the postcard shot, but Himarë and the road down to Vlorë hide the quieter coves. Whichever order you go in, build in slack — the best stops here are rarely the ones you planned.",
      ],
      sq: [
        "Shqipëria mbledh një sasi të pabesueshme peizazhesh në një vend të vogël. Në një javë të vetme mund të shkoni nga liqene akullnajore në veri te gji blu si në Karaibe në jug, me qytete kodrinore otomane dhe lumenj kanionesh në mes.",
        "Nisni nga Alpet Shqiptare: Thethi dhe Lumi i Shalës janë dy vendet që përmenden të parat nga çdo udhëtar, dhe me arsye — vetëm ngjyra e ujit ia vlen udhëtimin. Nga aty, tragetii i Liqenit të Komanit është mënyra më e qetë për të kaluar në male, duke përshkuar kanione që të ndjehen si norvegjeze.",
        "Më në jug, Berati dhe Gjirokastra mbajnë historinë otomane të vendit në gur — shtëpi të shkallëzuara nëpër kodra, kala aktive, dhe pazare të vjetra që ende funksionojnë si tregje të përditshme, jo vetëm për turistë.",
        "Përfundoni në bregdet. Ishujt e Ksamilit janë pamja e kartolinës, por Himara dhe rruga drejt Vlorës fshehin gji më të qeta. Cilindo rend që ndiqni, lini kohë të lirë — ndalesat më të mira këtu rrallë janë ato që keni planifikuar.",
      ],
    },
  },
  {
    slug: "best-time-to-visit-theth",
    title: { en: "Best Time to Visit Theth", sq: "Koha më e Mirë për të Vizituar Thethin" },
    excerpt: {
      en: "When the passes open, when the crowds arrive, and when to go instead.",
      sq: "Kur hapen qafat malore, kur mbërrijnë turmat, dhe kur duhet të shkoni në vend të tyre.",
    },
    image: img.thethPeaks,
    category: { en: "Planning", sq: "Planifikim" },
    readTime: { en: "5 min read", sq: "5 min lexim" },
    date: { en: "February 2026", sq: "Shkurt 2026" },
    relatedDestinationSlug: "theth",
    content: {
      en: [
        "Theth's mountain road typically opens in mid-to-late May and closes again by early November, which sets the real boundaries of the travel season regardless of what a calendar says.",
        "June and early July give you the fullest waterfalls and the greenest valley, but also the coach groups. Late August into September is the sweet spot: water levels are still good for swimming at the Blue Eye, trails are quieter, and evenings are cool enough for a fire.",
        "If you're trekking through to Valbonë, aim for September — the crossing over the pass is easier underfoot and the light in the late afternoon is hard to beat.",
      ],
      sq: [
        "Rruga malore e Thethit zakonisht hapet nga mesi i majit deri në fund të tij dhe mbyllet përsëri në fillim të nëntorit, çka përcakton kufijtë e vërtetë të sezonit turistik pavarësisht se çfarë thotë kalendari.",
        "Qershori dhe fillimi i korrikut ju japin ujëvarat më të plota dhe luginën më të gjelbër, por gjithashtu grupet me autobus. Fundi i gushtit deri në shtator është momenti ideal: nivelet e ujit janë ende të mira për not te Syri i Kaltër, shtigjet janë më të qeta, dhe mbrëmjet janë mjaft të freskëta për zjarr.",
        "Nëse po bëni ekspeditën deri në Valbonë, synoni shtatorin — kalimi mbi qafën malore është më i lehtë dhe drita e pasdites së vonë është e vështirë ta kapërcesh.",
      ],
    },
  },
  {
    slug: "albanias-hidden-beaches",
    title: { en: "Albania's Hidden Beaches", sq: "Plazhet e Fshehura të Shqipërisë" },
    excerpt: {
      en: "Skip Ksamil's crowds — these coves are just as blue and far quieter.",
      sq: "Shpëtoni nga turmat e Ksamilit — këto gji janë po aq blu por shumë më të qeta.",
    },
    image: img.himareCoast,
    category: { en: "Beaches", sq: "Plazhe" },
    readTime: { en: "6 min read", sq: "6 min lexim" },
    date: { en: "January 2026", sq: "Janar 2026" },
    relatedDestinationSlug: "himare",
    content: {
      en: [
        "Ksamil gets the attention, but most of the Riviera's best water is a short hike or boat ride away from the main road, not on it.",
        "Gjipe Beach, reached by a short canyon walk above Himarë, is the one locals actually go to on weekends — no sunbeds, just a river mouth meeting the sea between two cliffs.",
        "Further south, the coves around Qeparo and the road toward Borsh stay quiet even in August. Bring water and shade; there's little of either once you're off the main strip.",
      ],
      sq: [
        "Ksamili merr vëmendjen, por shumica e ujit më të mirë të Rivierës është një ecje ose udhëtim i shkurtër me varkë larg rrugës kryesore, jo mbi të.",
        "Plazhi i Gjipesë, i arritshëm nga një ecje e shkurtër në kanion sipër Himarës, është ai ku shkojnë vërtet lokalët në fundjavë — pa shezlonge, thjesht një grykëderdhje lumi që takon detin mes dy shkëmbinjve.",
        "Më në jug, gjitë rreth Qeparoit dhe rruga drejt Borshit mbeten të qeta edhe në gusht. Merrni me vete ujë dhe hije; ka pak nga këto pasi largoheni nga rruga kryesore.",
      ],
    },
  },
  {
    slug: "complete-guide-to-shala-river",
    title: { en: "Complete Guide to Shala River", sq: "Udhëzuesi i Plotë për Lumin e Shalës" },
    excerpt: {
      en: "Boats, prices, best time of day, and how to avoid the tour buses.",
      sq: "Varka, çmime, koha më e mirë e ditës, dhe si t'i shpëtoni autobusëve turistikë.",
    },
    image: img.shalaRiver,
    category: { en: "Guides", sq: "Udhëzues" },
    readTime: { en: "7 min read", sq: "7 min lexim" },
    date: { en: "April 2026", sq: "Prill 2026" },
    relatedDestinationSlug: "shala-river",
    content: {
      en: [
        "The Shala River's turquoise color is real, not filtered — glacial runoff and limestone give it that impossible clarity, especially from June through September.",
        "Most visitors arrive by boat from the Koman ferry route or by road via Theth. Boats leave through the morning; arriving before 10am gets you calmer water and far fewer people in your photos.",
        "Bring water shoes — the swimming spots are pebble, not sand — and cash for the small riverside restaurants, most of which don't take cards.",
      ],
      sq: [
        "Ngjyra tirkize e Lumit të Shalës është reale, jo e filtruar — shkrirja akullnajore dhe gëlqerja i japin atë pastërti të pabesueshme, sidomos nga qershori deri në shtator.",
        "Shumica e vizitorëve mbërrijnë me varkë nga rruga e tragetit të Komanit ose me makinë nëpër Theth. Varkat nisen gjatë mëngjesit; mbërritja para orës 10:00 ju siguron ujë më të qetë dhe shumë më pak njerëz në fotot tuaja.",
        "Merrni me vete këpucë uji — vendet e notit janë me kalldrëm, jo rërë — dhe para në dorë për restorantet e vogla buzë lumit, shumica e të cilave nuk pranojnë karta.",
      ],
    },
  },
  {
    slug: "hiking-the-accursed-mountains",
    title: { en: "Hiking the Accursed Mountains", sq: "Ecje në Bjeshkët e Namuna" },
    excerpt: {
      en: "Everything you need to know before tackling the Valbonë–Theth trek.",
      sq: "Gjithçka që duhet të dini para se të ndërmerrni ekspeditën Valbonë–Theth.",
    },
    image: img.mountainPeakClouds,
    category: { en: "Adventure", sq: "Aventurë" },
    readTime: { en: "9 min read", sq: "9 min lexim" },
    date: { en: "May 2026", sq: "Maj 2026" },
    relatedDestinationSlug: "theth",
    content: {
      en: [
        "The Valbonë–Theth crossing is the most popular multi-day hike in the Balkans, and it earns the reputation — a full day of climbing to roughly 1,800m followed by a long descent into a completely different valley.",
        "You don't need to be an expert hiker, but you do need a full day of fitness and proper boots; the trail is well marked but rocky in sections. Most guesthouses along the route can arrange packed lunches.",
        "Going with a guide isn't required but makes the logistics — transport, guesthouse bookings, timing around weather — considerably easier, especially outside peak season.",
      ],
      sq: [
        "Kalimi Valbonë–Theth është ekspedita shumëditore më e njohur në Ballkan, dhe e meriton reputacionin — një ditë e plotë ngjitjeje deri në rreth 1,800m e ndjekur nga një zbritje e gjatë në një luginë krejt të ndryshme.",
        "Nuk keni nevojë të jeni ecës ekspert, por keni nevojë për një ditë të plotë kushtesh fizike dhe këpucë të përshtatshme; shtegu është i shënuar mirë por shkëmbor në disa pjesë. Shumica e bujtinave përgjatë rrugës mund të organizojnë dreka të paketuara.",
        "Të shkosh me guidë nuk është e detyrueshme, por i bën logjistikën — transportin, rezervimin e bujtinave, kohën në raport me motin — shumë më të lehtë, sidomos jashtë sezonit të lartë.",
      ],
    },
  },
  {
    slug: "a-food-lovers-weekend-in-korca",
    title: { en: "A Food Lover's Weekend in Korçë", sq: "Një Fundjavë për Dashamirët e Ushqimit në Korçë" },
    excerpt: {
      en: "Wine, beer and highland cooking in Albania's understated food capital.",
      sq: "Verë, birrë dhe kuzhinë malore në kryeqytetin e heshtur të ushqimit të Shqipërisë.",
    },
    image: img.korcaWine,
    category: { en: "Food & Wine", sq: "Ushqim & Verë" },
    readTime: { en: "6 min read", sq: "6 min lexim" },
    date: { en: "June 2026", sq: "Qershor 2026" },
    relatedDestinationSlug: "korca",
    content: {
      en: [
        "Korçë sits at altitude, which means cooler summers, better grapes, and a food culture built around hearty highland cooking rather than coastal seafood.",
        "Start at the Old Bazaar for byrek and coffee, then visit one of the family vineyards just outside town — most offer tastings if you call ahead. Albania's oldest brewery is also here, still running since 1928.",
        "Two days is enough to see the town properly; add a third if you want to combine it with the Museum of Medieval Art or a day trip into the surrounding hills.",
      ],
      sq: [
        "Korça ndodhet në lartësi, çka do të thotë vera më të freskëta, rrush më i mirë, dhe një kulturë ushqimore e ndërtuar rreth kuzhinës së bollshme malore më shumë se ushqimit të detit.",
        "Nisni nga Pazari i Vjetër për byrek dhe kafe, pastaj vizitoni një nga vreshtat familjare pak jashtë qytetit — shumica ofrojnë shijime nëse telefononi më parë. Fabrika më e vjetër e birrës në Shqipëri ndodhet gjithashtu këtu, në funksion prej vitit 1928.",
        "Dy ditë mjaftojnë për ta parë qytetin mirë; shtoni një të tretë nëse doni ta kombinoni me Muzeun e Artit Mesjetar ose një ekskursion ditor në kodrat përreth.",
      ],
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}
