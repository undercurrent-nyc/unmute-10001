import faker from "faker";

export default function(server) {
  // create countries
  const mt = server.create("country", {
    id: "malta",
    countryName: "Malta",
    orgName: "Maltese Cultural Org",
    locale: "mt-mt",
    flagUrl: "https://www.countryflags.io/mt/flat/64.png",
  });
  const at = server.create("country", {
    id: "austria",
    countryName: "Austria",
    orgName: "Austrian Cultural Org",
    locale: "de-at",
    flagUrl: "https://www.countryflags.io/at/flat/64.png",
  });
  const lt = server.create("country", {
    id: "lithuania",
    countryName: "Lithuania",
    orgName: "Lithuanian Cultural Org",
    logoSvgName: "lithuania-logo",
    locale: "lt-lt",
    flagUrl: "https://www.countryflags.io/lt/flat/64.png",
  });
  const ee = server.create("country", {
    id: "estonia",
    countryName: "Estonia",
    orgName: "Estonian Cultural Org",
    logoSvgName: "estonia-logo",
    locale: "et-ee",
    flagUrl: "https://www.countryflags.io/ee/flat/64.png",
  });
  const pl = server.create("country", {
    id: "poland",
    countryName: "Poland",
    orgName: "Polish Cultural Org",
    locale: "pl-pl",
    flagUrl: "https://www.countryflags.io/pl/flat/64.png",
  });
  const vl = server.create("country", {
    id: "flanders",
    countryName: "Flanders",
    orgName: "Flanders Government Delegation in the USA",
    locale: "nl-be",
    logoSvgName: "flanders-logo",
    logoUrl: "https://i.imgur.com/1K49rs6.jpg",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_Flanders.svg/320px-Flag_of_Flanders.svg.png",
  });
  const wl = server.create("country", {
    id: "wallonia",
    countryName: "Wallonia",
    orgName: "Walloon Cultural Org",
    locale: "fr-be",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Wallonia.svg/320px-Flag_of_Wallonia.svg.png",
  });
  // create artists
  const mtA = server.create("artist", { country: mt });
  const mtB = server.create("artist", { country: mt });
  const ltA = server.create("artist", { country: lt,
    firstName: "Jonė", lastName: "Petrė",
  });
  const ltB = server.create("artist", { country: lt,
    firstName: "Petras", lastName: "Jonaitis",
  });
  const eeA = server.create("artist", { country: ee });
  const eeB = server.create("artist", { country: ee });
  const fiA = server.create("artist", { country: pl, 
    firstName: "Janina", lastName: "Kowalska",
  });
  const fiB = server.create("artist", { country: pl, 
    firstName: "Jan", lastName: "Nowak",
  });
  faker.locale = "nl";
  const vlA = server.create("artist", { country: vl });
  const vlB = server.create("artist", { country: vl });
  faker.locale = "de_AT";
  const atA = server.create("artist", { country: at });
  const atB = server.create("artist", { country: at });
  faker.locale = "fr";
  const wlA = server.create("artist", { country: wl });
  const wlB = server.create("artist", { country: wl });
  faker.locale = "en_US";
  // create teams
  const teamI = server.create("team", {
    name: "Team I",
    id: "team-i",
    tetrominoUrl: "/assets/png/team-i.png",
    artists: [mtA, eeB],
    clips: server.createList("clip", 3),
  });
  const teamO = server.create("team", {
    name: "Team O",
    id: "team-o",
    tetrominoUrl: "/assets/png/team-o.png",
    artists: [ltA, fiB],
    clips: server.createList("clip", 3),
  });
  const teamS = server.create("team", {
    name: "Team S",
    id: "team-s",
    tetrominoUrl: "/assets/png/team-s.png",
    artists: [eeA, vlB],
    clips: server.createList("clip", 3),
  });
  const teamZ = server.create("team", {
    name: "Team Z",
    id: "team-z",
    tetrominoUrl: "/assets/png/team-z.png",
    artists: [fiA, atB],
    clips: server.createList("clip", 3),
  });
  const teamL = server.create("team", {
    name: "Team L",
    id: "team-l",
    tetrominoUrl: "/assets/png/team-l.png",
    artists: [vlA, mtB],
    clips: server.createList("clip", 3),
  });
  const teamJ = server.create("team", {
    name: "Team J",
    id: "team-j",
    tetrominoUrl: "/assets/png/team-j.png",
    artists: [atA, wlB],
    clips: server.createList("clip", 3),
  });
  const teamT = server.create("team", {
    name: "Team T",
    id: "team-t",
    tetrominoUrl: "/assets/png/team-t.png",
    artists: [wlA, ltB],
    clips: server.createList("clip", 3),
  });
  
}
