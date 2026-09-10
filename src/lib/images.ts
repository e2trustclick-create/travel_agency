/**
 * Curated Unsplash photo IDs standing in for licensed Albania photography.
 * Centralised so broken/replacement IDs only need updating in one place.
 */
export function unsplash(id: string, w = 1600, h = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

export const img = {
  heroTheth: unsplash("photo-1506905925346-21bda4d32df4", 2400, 1600),
  heroRiviera: unsplash("photo-1533105079780-92b9be482077", 2400, 1600),
  heroValley: unsplash("photo-1490077476659-095159692ab5", 2400, 1600),
  heroCanyon: unsplash("photo-1528127269322-539801943592", 2400, 1600),

  thethLake: unsplash("photo-1506905925346-21bda4d32df4"),
  thethPeaks: unsplash("photo-1519681393784-d120267933ba"),
  thethTrail: unsplash("photo-1464822759023-fed622ff2c3b"),
  blueEye: unsplash("photo-1501594907352-04cda38ebc29"),

  komanLake: unsplash("photo-1500534623283-312aade485b7"),
  komanFerry: unsplash("photo-1508739773434-c26b3d09e071"),

  shalaRiver: unsplash("photo-1552733407-5d5c46c3bb3b"),
  shalaValley: unsplash("photo-1470114716159-e389f8712fda"),
  shalaForest: unsplash("photo-1518495973542-4542c06a5843"),

  beratStone: unsplash("photo-1528360983277-13d401cdc186"),
  beratAlley: unsplash("photo-1467269204594-9661b134dd2b"),

  gjirokastraRoofs: unsplash("photo-1518391846015-55a9cc003b25"),
  gjirokastraStreet: unsplash("photo-1444723121867-7a241cacace9"),

  ksamilBeach: unsplash("photo-1507525428034-b723cf961d3e"),
  ksamilAerial: unsplash("photo-1571003123894-1f0594d2b5d9"),

  himareCliffs: unsplash("photo-1473116763249-2faaef81ccda"),
  himareCoast: unsplash("photo-1519046904884-53103b34b206"),

  vloreTown: unsplash("photo-1544551763-46a013bb70d5"),
  vloreCoast: unsplash("photo-1439066615861-d1af74d74000"),

  tiranaSkyline: unsplash("photo-1477959858617-67f85cf4f1df"),
  tiranaStreet: unsplash("photo-1596386461350-326ccb383e9f"),

  korcaTown: unsplash("photo-1533106418989-88406c7cc8ca"),
  korcaWine: unsplash("photo-1414235077428-338989a2e8c0"),

  shkodraLake: unsplash("photo-1502786129293-79981df4e689"),

  mountainMist: unsplash("photo-1470770841072-f978cf4d019e"),
  mountainSunrise: unsplash("photo-1476514525535-07fb3b4ae5f1"),
  mountainDock: unsplash("photo-1500534623283-312aade485b7"),
  mountainPeakClouds: unsplash("photo-1500530855697-b586d89ba3ee"),
  greenValley: unsplash("photo-1490077476659-095159692ab5"),

  hikers: unsplash("photo-1551632811-561732d1e306"),
  hikerView: unsplash("photo-1551632436-cbf8dd35adfa"),

  foodSpread: unsplash("photo-1517248135467-4c7edcad34c4"),
  wineGlasses: unsplash("photo-1414235077428-338989a2e8c0"),

  avatar1: unsplash("photo-1494790108377-be9c29b29330", 200, 200),
  avatar2: unsplash("photo-1517841905240-472988babdf9", 200, 200),
  avatar3: unsplash("photo-1544005313-94ddf0286df2", 200, 200),
  avatar4: unsplash("photo-1500648767791-00dcc994a43e", 200, 200),
  avatar5: unsplash("photo-1522075469751-3a6694fb2f61", 200, 200),
  avatar6: unsplash("photo-1531123897727-8f129e1688ce", 200, 200),
};
