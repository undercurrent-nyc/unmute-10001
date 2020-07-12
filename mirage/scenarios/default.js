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
    orgName: "Austrian Cultural Forum NYC",
    website: "https://www.acfny.org/",
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
    orgName: "Republic of Estonia Minstry of Culture",
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
    website: "https://flandersintheusa.org/",
    locale: "nl-be",
    logoSvgName: "flanders-logo",
    logoUrl: "https://i.imgur.com/1K49rs6.jpg",
    flagUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Flag_of_Flanders.svg/320px-Flag_of_Flanders.svg.png",
  });
  // create artists
  const mtA = server.create("artist", { country: mt });
  const mtB = server.create("artist", { country: mt });
  const ltA = server.create("artist", { country: lt,
    firstName: "Kira", lastName: "Nova",
    websiteUrl: "",
  });
  const ltB = server.create("artist", { country: lt,
    firstName: "Ieva", lastName: "Mediodia",
    websiteUrl: "",
    avatarUrl: "/assets/jpg/mediodia-1.jpg",
  });
  const eeA = server.create("artist", { country: ee,
    firstName: "Terttu", lastName: "Uibopuu",
    websiteUrl: "http://www.terttuphoto.com/Ese",
    avatarUrl: "/assets/jpg/uibopuu-1.jpg",
  });
  const eeB = server.create("artist", { country: ee,
    firstName: "Jonas", lastName: "Tarm",
    websiteUrl: "http://jonastarm.com/list-of-works",
  });
  faker.locale = "nl";
  const vlA = server.create("artist", { country: vl,
    firstName: "Saddie", lastName: "Choua",
    websiteUrl: "",
  });
  const vlB = server.create("artist", { country: vl,
    firstName: "Ada", lastName: "Van Hoorebeke",
    websiteUrl: "",
    avatarUrl: "/assets/jpg/van-hoorebeke-1.jpg",
  });
  faker.locale = "de_AT";
  const atA = server.create("artist", { country: at,
    firstName: "Nicola", lastName: "Ginzel",
    websiteUrl: "",
  });
  const atB = server.create("artist", { country: at,
    firstName: "Luisa", lastName: "Muhr",
    websiteUrl: "",
    avatarUrl: "/assets/jpg/muhr-1.jpg",
  });
  faker.locale = "en_US";
  const plA = server.create("artist", { country: pl,
    firstName: "Justyna", lastName: "Górowska",
    websiteUrl: "http://justynagorowska.com/",
  });
  const plB = server.create("artist", { country: pl,
    firstName: "Michał", lastName: "Korta",
    websiteUrl: "",
    avatarUrl: "/assets/jpg/korta.jpg",
  });
  // create clip options
  const clip1 = { 
    vimeoCode: 11387248, 
    thumbnailUrl: "https://i.imgur.com/UdM9jFt.png",
  }
  const clip2 = {
    vimeoCode: 3346705, 
    thumbnailUrl: "https://i.imgur.com/7muBvb0.png",
  }
  const clip3 = {
    vimeoCode: 4556333,
    thumbnailUrl: "https://i.imgur.com/X12fPSU.png",
  }
  // create teams
  const teamI = server.create("team", {
    name: "Team I",
    id: "team-i",
    tetrominoUrl: "/assets/png/team-i.png",
    artists: [mtA, eeB],
    clips: [
      server.create("clip", clip1),
      server.create("clip", clip2),
      server.create("clip", clip3),
    ]
  });
  const teamT = server.create("team", {
    name: "Team T",
    id: "team-t",
    tetrominoUrl: "/assets/png/team-t.png",
    artists: [ltA, plB],
    clips: [
      server.create("clip", clip1),
      server.create("clip", clip2),
      server.create("clip", clip3),
    ]
  });
  const teamS = server.create("team", {
    name: "Team S",
    id: "team-s",
    tetrominoUrl: "/assets/png/team-s.png",
    artists: [eeA, vlB],
    clips: [
      server.create("clip", clip1),
      server.create("clip", clip2),
      server.create("clip", clip3),
    ]
  });
  const teamZ = server.create("team", {
    name: "Team Z",
    id: "team-z",
    tetrominoUrl: "/assets/png/team-z.png",
    artists: [plA, atB],
    clips: [
      server.create("clip", clip1),
      server.create("clip", clip2),
      server.create("clip", clip3),
    ]
  });
  const teamL = server.create("team", {
    name: "Team L",
    id: "team-l",
    tetrominoUrl: "/assets/png/team-l.png",
    artists: [vlA, mtB],
    clips: [
      server.create("clip", clip1),
      server.create("clip", clip2),
      server.create("clip", clip3),
    ]
  });
  const teamJ = server.create("team", {
    name: "Team J",
    id: "team-j",
    tetrominoUrl: "/assets/png/team-j.png",
    artists: [atA, ltB],
    clips: [
      server.create("clip", clip1),
      server.create("clip", clip2),
      server.create("clip", clip3),
    ]
  });
}
