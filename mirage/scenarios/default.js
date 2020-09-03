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
    consultantId: "john-baldacchino",
    clipIds: [
      "i-01",
      "i-02",
      "i-03",
      "i-04",
      "i-05",
      "i-06",
    ]
  });
  const teamT = server.create("team", {
    name: "Team T",
    id: "team-t",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-t.png",
    artistIds: ["saddie-choua", "anna-bera"],
    startingDate: "Thursday, 08/06",
    consultantId: "john-baldacchino",
    clipIds: [
      "t-01",
      "t-02",
      "t-03",
      "t-04",
      "t-05",
      "t-06",
    ]
  });
  const teamS = server.create("team", {
    name: "Team S",
    id: "team-s",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-s.png",
    artistIds: ["luisa-muhr", "ada-van-hoorebeke"],
    startingDate: "Friday, 08/07",
    consultantId: "carolina-rubio-macwright",
    clipIds: [
      "s-01",
      "s-02",
      "s-03",
      "s-04",
      "s-05",
      "s-06",
    ]
  });
  const teamZ = server.create("team", {
    name: "Team Z",
    id: "team-z",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-z.png",
    artistIds: ["justyna-gorowska", "ieva-mediodia"],
    consultantId: "sozita-goudouna",
    startingDate: "Saturday, 08/08",
    clipIds: [
      "z-01",
      "z-02",
      "z-03",
      "z-04",
      "z-05",
      "z-06",
      "z-07",
    ]
  });
  const teamL = server.create("team", {
    name: "Team L",
    id: "team-l",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-l.png",
    artistIds: ["nicola-ginzel", "mariella-cassar-cordina"],
    startingDate: "Saturday, 08/08",
    consultantId: "sozita-goudouna",
    clipIds: [
      "l-01",
      "l-02",
      "l-03",
      "l-04",
      "l-05",
      "l-06",
    ]
  });
  const teamJ = server.create("team", {
    name: "Team J",
    id: "team-j",
    projectTitle: "Untitled Collaborative Project",
    tetrominoUrl: "/assets/png/team-j.png",
    artistIds: ["terttu-uibopuu", "alex-camilleri"],
    consultantId: "carolina-rubio-macwright",
    startingDate: "Friday, 08/07",
    clipIds: [
      "j-01",
      "j-02",
      "j-03",
      "j-04",
      "j-05",
      "j-06",
    ]
  });
}
