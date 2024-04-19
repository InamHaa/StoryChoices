// Object that holds game states or "screens"
const gameStates = {
  start: {
    title: "MAKING YOUR DEBUT!",
    content:
      "Adnan, a talented youngster from the youth academy, makes his debut for a \
      Wrexham FC. The season starts off with a series of strong performances, Scoring 10 \
      goals. The media take notice and soon, after a thrilling match, they're eager \
      for a word. They ask, 'Adnan, how do you feel about your role in today's victory?'",
    image: "/Stories/JavaScript/debut.jpeg",
    choices: [
      { text: "Postive Media Interaction", next: "PostiveMediaInteraction" },
      { text: "Negative Media Interaction", next: "NegativeMediaInteraction" },
    ],
  },
  PostiveMediaInteraction: {
    title: "MEDIA",
    content:
      "Adnan smiles and answers with grace, 'I'm just here to do my best for \
    the team and our amazing fans'. He wins over the reporters and fans and the start,\
    chanting his name 'ADNAN' 'ADNAN!!'",
    image: "/Stories/JavaScript/media.jpeg", // Path relative to your HTML file
    choices: [
      { text: "Go Home", next: "Home" },
      { text: "Go Out To Party", next: "Party" },
    ],
  },

  // POSITVE SIDE
  Home: {
    title: "ARRIVED HOME",
    content:
      "Adnan, Arrived at home, Rested off and watch TV. The next day waking up \
    Adnan had a notfication on the phone, that he had training.",
    image: "/Stories/JavaScript/Home.jpeg", // Path relative to your HTML file
    choices: [{ text: "GO TO TRAINING", next: "Training" }],
  },
  Party: {
    title: "PARTY WITH FRIENDS",
    content:
      "Adnan went out to party with friends and he was there till 3 AM, \
    Adnan had forgot he had a match soon.",
    image: "/Stories/JavaScript/party.jpeg", // Path relative to your HTML file
    choices: [
      { text: "PLAY NEXT MATCH", next: "Match" },
      { text: "REST FROM NEXT MATCH", next: "Rest" },
    ],
  },

  //POSITVIE SIDE
  Training: {
    title: "ARRIVED AT TRAINING",
    content:
      "Adnan, Arrived at home, Rested off and watch TV. The next day waking up \
    Adnan had a notfication on the phone, that he had training.",
    image: "/Stories/JavaScript/Training.jpeg", // Path relative to your HTML file
    choices: [{ text: "PLAY FIRST ROUND OF FA CUP", next: "FACUPFIRSTMATCH" }],
  },

  //NEGATIVE SIDE
  NegativeMediaInteraction: {
    title: "MEDIA",
    content:
      "Adnan responds with a Selfish comment, 'I'm the best on the pitch, \
    it's that simple.' The remark comes off as arrogant, sparking a bit of \
    controversy. Adnan gets a whisper in the ear saying 'manger wants to see you'",
    image: "/Stories/JavaScript/media.jpeg", // Path relative to your HTML file
    choices: [
      { text: "GO TO MANAGERS OFFICE", next: "Office" },
      { text: "IGNORE AND GO HOME", next: "HomeTime" },
    ],
  },
  Office: {
    title: "MANAGER UNHAPPY WITH ADNAN RESPONSE TO MEDIA",
    content:
      "Adnan has been called into the managers office due to the talk he \
        had with the media. The manager says 'Look son...'",
    image: "/Stories/JavaScript/manageroffice.jpeg", // Path relative to your HTML file
    choices: [
      { text: "SAY SORRY", next: "sorry" },
      { text: "ARGUE BACK", next: "argument" },
    ],
  },
  argument: {
    title: "MANAGER ANGRY AT ADNAN, FIGHT STARTED!",
    content:
      "ADNAN ARGUED WITH THE MANAGER ABOUT WHAT HE SAID TO THE MEDIA \
      THE MANAGER DID NOT LIKE WHAT ADNAN SAID AND THEREFOR SAID HE WILL \
      NOT PLAY HIM IN THE NEXT MATCH OR BE WITH THE TEAM IN TRAINING, THIS LEAD TO \
      ADNAN GRABBING THE MANAGER! THE MANAGER WANTED ADNAN OUT THE CLUB ASAP! WHAT SHOULD ADNAN DO?",
    image: "/Stories/JavaScript/AngryManager.webp", // Path relative to your HTML file
    choices: [
      { text: "TALK TO THE CEO", next: "CEO" },
      { text: "LEAVE CLUB", next: "LEAVECLUB" },
    ],
  },

  CEO: {
    title: "MEETING WITH CEO!",
    content:
      "ADNAN EXPLAINED WHAT HAPPENED, BUT THE CEO HAD ALREADY SIDED WITH THE MANAGER AND WANTED ADNAN OUT THE CLUB. \
      ADNAN HAS HAD ENOUGH AND WANTED TO LEAVE THE TOXIC CLUB.",
    image: "/Stories/JavaScript/meeting.jpeg", // Path relative to your HTML file
    choices: [{ text: "LEAVE CLUB", next: "LEAVECLUB" }],
  },

  LEAVECLUB: {
    title: "MEETING WITH AGENT!",
    content:
      "ADNAN ON THE FINAL DAY OF THE SEASON HAS LEFT WREXHAM FC DUE TO FALLING OUT WITH THE MANAGER!",
    image: "/Stories/JavaScript/meeting.jpeg", // Path relative to your HTML file
    choices: [{ text: "WHAT NEXT!", next: "Whatsnext" }],
  },

  HomeTime: {
    title: "ADNAN IGNORED THE MANAGER",
    content:
      "Adnan arrvied home, with alot of missed calls and messages from his \
        teammates, saying 'THE MANGER IS GOING TO DROP YOU IF YOU DON'T SEE HIM!'\
        This angered Adnan and he ignored it.",
    image: "/Stories/JavaScript/missedcalls.jpeg", // Path relative to your HTML file
    choices: [{ text: "GO TO SLEEP", next: "sleep" }],
  },
  HomeTime: {
    title: "TRAINING",
    content:
      "Adnan arrvied at training the next day, he was not allowed to be on the pitch \
      the manager said, he will only be allowed on the training and football pitch if \
      he applogies said the manager'",
    image: "/Stories/JavaScript/missedcalls.jpeg", // Path relative to your HTML file
    choices: [{ text: "SAY SORRY", next: "sorry" }],
  },
  sorry: {
    title: "MATCHDAY THE SEMI FINALS OF THE FA CUP",
    content:
      "Although Adnan has been the best in the team as a striker, the manager \
      and Adnan were not on good terms, the team really needed Adnan but the manager \
      wanted to teach him a lesson. The Manager picked Adnan in the line up to play.",
    image: "/Stories/JavaScript/facup.jpeg", // Path relative to your HTML file
    choices: [{ text: "PLAY MATCH", next: "Matchtime" }],
  },
  Matchtime: {
    title: "WREXHAM FC VS WOLVES SEMI FINALS OF THE FA CUP",
    content:
      "THE MATACH STARTS, ADNAN GETS THE BALL AND DRIBBLES WITH IT UP THE FIELD, \
      CROSSES THE BALL TO INAM, INAM SCORES WITH ONE OF THE MOST OUTRAGES BICYLE KICKS EVER! \
      THE CROWD GO WILD WITH WREXHAM FC UP 1-0 AGAINST WOLVES. INAM PASSES THE BALL TO \
      ADNAN, WHAT DOES ADNAN DO WITH 2 PLAYERS AROUND HIM?",
    image: "/Stories/JavaScript/bicyclekick.jpeg", // Path relative to your HTML file
    choices: [
      { text: "SKILL MOVES AROUND THEM", next: "SKILLS" },
      { text: "PASS TO JAMAL", next: "Passtojamal" },
    ],
  },
  Matchtime: {
    title: "68TH MIN INJURY",
    content:
      "ADNAN ATTEMPTED TO DO A SKILL MOVE AROUND 2 PLAYERS AND NOW HAS GOT INJURED \
        SHOULD ADNAN CONTINUE TO PLAY?",
    image: "/Stories/JavaScript/injured.jpeg", // Path relative to your HTML file
    choices: [
      { text: "GET UP PLAY ON", next: "Playon" },
      { text: "Sub off the pitch", next: "suboff" },
    ],
  },
  Passtojamal: {
    title: "68TH MIN INJURY",
    content:
      "ADNAN WITH A BEAUTIFUL BALL TO JAMAL BUT THE OPPOSITION PLAYER HAS CAME IN FLYING \
      WITH STUDS AND ADNAN IS NOW INJURED, SHOULD HE GO OFF OR STAY ON THE PITCH?",
    image: "/Stories/JavaScript/injured.jpeg", // Path relative to your HTML file
    choices: [
      { text: "GET UP PLAY ON", next: "Playon" },
      { text: "Sub off the pitch", next: "suboff" },
    ],
  },
  Playon: {
    title: "ADNAN FELL TO THE GROUND",
    content:
      "ADNAN TRIED TO PLAY ON BUT FELL TO THE GROUND HOLDING HIS LEG, SHOULD HE GO OFF?",
    image: "/Stories/JavaScript/injured.jpeg", // Path relative to your HTML file
    choices: [{ text: "Sub off the pitch", next: "suboff" }],
  },
  suboff: {
    title: "ADNAN WAS SUBBED OFF AND RECEIVED BAD NEWS!",
    content:
      "ADNAN WENT STRAIGHT TO THE MEDICAL ROOM TO GET TREATED, \
      THE CLUB DOCTORE SAID THAT 'ADNAN WON'T BE ABLE TO PLAY FOOTBALL AGAIN!' SHOULD ADNAN RETIRE?",
    image: "/Stories/JavaScript/careerendinginjury.jpeg", // Path relative to your HTML file
    choices: [{ text: "Retire", next: "Retire" }],
  },
  Retire: {
    title: "YOUNG FOOTBALLER RETIRES DUE TO CAREER ENDING INJURY",
    content: "Thank You For Playing!",
    image: "/Stories/JavaScript/careerendinginjury.jpeg", // Path relative to your HTML file
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },

  Whatsnext: {
    title: "ADNAN LEAVES WREXHAM FC",
    content: "Thank You For Playing!",
    image: "/Stories/JavaScript/leaveclub.jpeg", // Path relative to your HTML file
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },
  // Add more states as needed
};

// Function to display the game state on the screen
function showGameState(stateKey) {
  const state = gameStates[stateKey]; // Get the current state using the key

  function redirectToGames() {
    window.location.href = "/SubMenu/Sports.html"; // Update with your actual path to the games HTML file
  }

  // Update the game title
  document.getElementById("gameTitle").textContent = state.title;

  // Update the main content
  document.getElementById("storyContent").textContent = state.content;

  // Update the image source
  document.getElementById("Game-images").src = state.image;

  // Clear previous choices
  const choicesContainer = document.getElementById("readerChoices");
  choicesContainer.innerHTML = "";

  // Create buttons for new choices
  state.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showGameState(choice.next);
    choicesContainer.appendChild(button);
  });
}

// Start the game by showing the start state
showGameState("start");
