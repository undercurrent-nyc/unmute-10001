import faker from "faker";

export default function(server) {
  // create countries
  const mt = server.create("country", {
    slug: "malta",
    countryName: "Malta",
    orgName: "Maltese Cultural Org",
    locale: "mt-mt",
    flagUrl: "https://www.countryflags.io/mt/flag/64.png",
  });
  const at = server.create("country", {
    slug: "austria",
    countryName: "Austria",
    orgName: "Austrian Cultural Org",
    locale: "de-at",
    flagUrl: "https://www.countryflags.io/at/flag/64.png",
  });
  const lt = server.create("country", {
    slug: "lithuania",
    countryName: "Lithuania",
    orgName: "Lithuanian Cultural Org",
    locale: "lt-lt",
    flagUrl: "https://www.countryflags.io/lt/flag/64.png",
  });
  const ee = server.create("country", {
    slug: "estonia",
    countryName: "Estonia",
    orgName: "Estonian Cultural Org",
    locale: "et-ee",
    flagUrl: "https://www.countryflags.io/ee/flag/64.png",
  });
  const fi = server.create("country", {
    slug: "finland",
    countryName: "Finland",
    orgName: "Finnish Cultural Org",
    locale: "fi-fi",
    flagUrl: "https://www.countryflags.io/fi/flag/64.png",
  });
  const vl = server.create("country", {
    slug: "flanders",
    countryName: "Flanders",
    orgName: "Flanders Government Delegation in the USA",
    locale: "nl-be",
    logoUrl: "https://i.imgur.com/1K49rs6.jpg",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_Flanders.svg/320px-Flag_of_Flanders.svg.png",
  });
  const wl = server.create("country", {
    slug: "wallonia",
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
  const fiA = server.create("artist", { country: fi, 
    firstName: "Totti", lastName: "Teikäläinen",
  });
  const fiB = server.create("artist", { country: fi, 
    firstName: "Maija", lastName: "Meikäläinen",
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
    slug: "team-i",
    tetrominoUrl: "/assets/png/team-i.png",
    artists: [mtA, eeB],
    clips: server.createList("clip", 3),
  });
  const teamO = server.create("team", {
    name: "Team O",
    slug: "team-o",
    tetrominoUrl: "/assets/png/team-o.png",
    artists: [ltA, fiB],
    clips: server.createList("clip", 3),
  });
  const teamS = server.create("team", {
    name: "Team S",
    slug: "team-s",
    tetrominoUrl: "/assets/png/team-s.png",
    artists: [eeA, vlB],
    clips: server.createList("clip", 3),
  });
  const teamZ = server.create("team", {
    name: "Team Z",
    slug: "team-z",
    tetrominoUrl: "/assets/png/team-z.png",
    artists: [fiA, atB],
    clips: server.createList("clip", 3),
  });
  const teamL = server.create("team", {
    name: "Team L",
    slug: "team-l",
    tetrominoUrl: "/assets/png/team-l.png",
    artists: [vlA, mtB],
    clips: server.createList("clip", 3),
  });
  const teamJ = server.create("team", {
    name: "Team J",
    slug: "team-j",
    tetrominoUrl: "/assets/png/team-j.png",
    artists: [atA, wlB],
    clips: server.createList("clip", 3),
  });
  const teamT = server.create("team", {
    name: "Team T",
    slug: "team-t",
    tetrominoUrl: "/assets/png/team-t.png",
    artists: [wlA, ltB],
    clips: server.createList("clip", 3),
  });
  
}
