import faker from "faker";

export default function(server) {
  server.loadFixtures();
  // create clip options
  const clip = { 
    dummy: true,
    title: "Stay Tuned for Team Videos",
  }
  // create teams
  const teamI = server.create("team", {
    name: "Team I",
    id: "team-i",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-i.png",
    artistIds: ["kira-nova", "jonas-tarm"],
    startingDate: "Thursday, 08/06",
    clipIds: [
      "i-01",
    ]
  });
  const teamT = server.create("team", {
    name: "Team T",
    id: "team-t",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-t.png",
    artistIds: ["saddie-choua", "anna-bera"],
    startingDate: "Thursday, 08/06",
    clipIds: [
      "t-01",
    ]
  });
  const teamS = server.create("team", {
    name: "Team S",
    id: "team-s",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-s.png",
    artistIds: ["luisa-muhr", "ada-van-hoorebeke"],
    startingDate: "Friday, 08/07",
    clips: [
      server.create("clip", clip),
      server.create("clip", clip),
      server.create("clip", clip),
    ]
  });
  const teamZ = server.create("team", {
    name: "Team Z",
    id: "team-z",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-z.png",
    artistIds: ["justyna-gorowska", "ieva-mediodia"],
    startingDate: "Saturday, 08/08",
    clips: [
      server.create("clip", clip),
      server.create("clip", clip),
      server.create("clip", clip),
    ]
  });
  const teamL = server.create("team", {
    name: "Team L",
    id: "team-l",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-l.png",
    artistIds: ["nicola-ginzel", "mariella-cassar-cordina"],
    startingDate: "Saturday, 08/08",
    clips: [
      server.create("clip", clip),
      server.create("clip", clip),
      server.create("clip", clip),
    ]
  });
  const teamJ = server.create("team", {
    name: "Team J",
    id: "team-j",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-j.png",
    artistIds: ["terttu-uibopuu", "alex-camilleri"],
    startingDate: "Friday, 08/07",
    clips: [
      server.create("clip", clip),
      server.create("clip", clip),
      server.create("clip", clip),
    ]
  });
}
