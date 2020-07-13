import faker from "faker";

export default function(server) {
  server.loadFixtures();
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
    artistIds: ["alex-camilleri", "jonas-tarm"],
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
    artistIds: ["kira-nova", "poland-two"],
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
    artistIds: ["terttu-uibopuu", "ada-van-hoorebeke"],
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
    artistIds: ["justyna-gorowska", "luisa-muhr"],
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
    artistIds: ["saddie-choua", "malta-two"],
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
    artistIds: ["nicola-ginzel", "ieva-mediodia"],
    clips: [
      server.create("clip", clip1),
      server.create("clip", clip2),
      server.create("clip", clip3),
    ]
  });
}
