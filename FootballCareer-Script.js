// Object that holds game states or "screens"
const gameStates = {
  start: {
    title: "MAKING YOUR DEBUT!",
    content:
      "Adnan, a talented youngster from the youth academy, makes his debut for a \
      Wrexham FC. The season starts off with a series of strong performances, Scoring 10 \
      goals. The media take notice and soon, after a thrilling match, they're eager \
      for a word. They ask, 'Adnan, how do you feel about your role in today's victory?'",
    image: "debut.jpeg",
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
    image: "media.jpeg",
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
    image: "Home.jpeg",
    choices: [{ text: "GO TO TRAINING", next: "Training" }],
  },
  Party: {
    title: "PARTY WITH FRIENDS",
    content:
      "Adnan went out to party with friends and he was there till 3 AM, \
    Adnan had forgot he had Training soon.",
    image: "party.jpeg",
    choices: [{ text: "GO TO TRAINING", next: "Training" }],
  },

  //POSITVIE SIDE
  Training: {
    title: "ARRIVED AT TRAINING",
    content:
      "Adnan, Arrived at to training, In training its an 11 vs 11 \
    During the training match Adnan got a penalty, Where should he shoot?",
    image: "Training.jpeg",
    choices: [
      { text: "Top Right", next: "Topright" },
      { text: "Top Left", next: "Topleft" },
    ],
  },

  //POSITVIE SIDE
  Topleft: {
    title: "ADNAN SHOT TOP LEFT",
    content:
      "ADNAN MISSED THE PENALTY! The players picked him up and said 'it's okay we go again! \
      Training finishes, adnan goes home and rests for the FA CUP FINAL Match'",
    image: "topleft.png",
    choices: [{ text: "Go to Stadium", next: "FACUPFIRSTMATCH" }],
  },

  //POSITVIE SIDE
  Topright: {
    title: "ADNAN SCORES!!!",
    content:
      "ADNAN SCORES THE WINNING GOAL OF THE MATCH! MATCH ENDS 1-0 The manager comes up to Adnan, \
      and says 'You are going to start the FA Cup Final tomorrow!",
    image: "topright.png",
    choices: [{ text: "PLAY FA CUP MATCH", next: "FACUPFIRSTMATCH" }],
  },

  //POSITVIE SIDE
  FACUPFIRSTMATCH: {
    title: "FA CUP FINAL",
    content:
      "WREXHAM FC VS MANCHESTER UNITED! Adnan, Arrived to wembley stadium, he was ready and so was the team. \
      LETS PLAY THE MATCH! ",
    image: "manutdvswrexham.png",
    choices: [{ text: "KICK OFF", next: "kickoff" }],
  },

  //POSITVIE SIDE
  kickoff: {
    title: "FA CUP FINAL",
    content:
      "The Match starts, The ball is played to Adnan, Adnan goes down the wing with the ball using all his pace, he crosses the ball into \
      the box and JAMES comes lying in with a WONDERFUL HEADER AND SCORES FOR WREXHAM! (SCORE 1-0 WREXHAM) \
      The Manchester United players take the kick off quickly and all of suddon they are on the attack, Marcus Rashford \
      goes down the middle, passing the ball to Garnacho, Garnacho is through 1-1 with the keeper but Harrison can only get to him \
      if he fouls him, WHAT SHOULD HARRISON LET HIM SCORE OR TACKLE HIM?",
    image: "goaltowrexham.png",
    choices: [
      { text: "TACKLE GARNACHO", next: "redcard" },
      { text: "LET GARNACHO SCORE", next: "GOAL" },
    ],
  },

  //POSITVIE SIDE
  redcard: {
    title:
      "HARRISON TACKLES GARNACHO AND RECEIVES A RED CARD - PENALTY GIVEN TO MANCHESTER UNITED!",
    content:
      "Harrison has been sent off as he has fouled Garnacho on a clear goal scoring chance, PENALTY TO MANCHESTER UNITED. \
      Marcus Rashford steps up to take the penalty which way will the keeper dive to save it?",
    image: "penalty.png",
    choices: [
      { text: "BOTTOM RIGHT", next: "bottomright" },
      { text: "BOTTOM LEFT", next: "bottomleft" },
    ],
  },

  //POSITVIE SIDE
  GOAL: {
    title: "GARNACHO SCORES GIVES THE LEAD TO MANCHESTER UNITED! 2-1",
    content:
      "Garnacho leads manchester united by 1 goal in the FA Cup Final. Wrexham Kick off once again, the ball is played to Adnan \
        but he fails to keep it and gets tackled, James wins the ball back off the united players and passes it back to Adnan where he \
        is through on goal LAST CHANCE, CAN HE SCORE IF HE MISSES WREXHAM LOSE?",
    image: "goalgarnacho.png",
    choices: [{ text: "SHOOT TOP RIGHT", next: "matchends" }],
  },

  //POSITVIE SIDE
  GOAL: {
    title: "MANCHESTER UNITED HAVE WON THE FA CUP FINAL!",
    content:
      "Adnan missed the shot and the game ends FINAL RESULT 2-1 TO MANCHESTER UNITED ",
    content: "Thank you for playing",
    image: "manutdwin.png",
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },

  //POSITVIE SIDE
  bottomright: {
    title: "MARCUS RASFORD GIVES THE LEAD TO MANCHESTER UNITED SCORE 2-1!",
    content:
      "Marcus Rashford leads manchester united by 1 goal in the FA Cup Final. Wrexham Kick off once again, the ball is played to Adnan \
      but he fails to keep it and gets tackled, James wins the ball back off the united players and passes it back to Adnan where he \
      is through on goal, CAN HE SCORE?",
    image: "goalrashford.png",
    choices: [
      { text: "SHOOT TOP RIGHT", next: "Shoottopright" },
      { text: "SHOOT BOTTOM LEFT", next: "shootbottomleft" },
    ],
  },

  //POSITVIE SIDE
  Shoottopright: {
    title: "ADNAN SCORES ITS LEVEL 2-2!",
    content:
      "ADNAN Scores with a wonderful shot into the top right, its 2-2 and Wrexham are on the last attack Adnan has the ball \
      He passes to Harrison, Harrison goes for the header, Where does he shoot?",
    image: "wrexhamgoal.png",
    choices: [{ text: "HEADER LEFT", next: "FINALGOAL" }],
  },

  //POSITVIE SIDE
  FINALGOAL: {
    title: "WREXHAM WIN THE FA CUP FINAL!",
    content:
      "Adnan with the assist and a goal by harrison a perfet maatch, WELL DONE WREXHAM!",
    image: "winners.png",
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },

  //NEGATIVE SIDE
  NegativeMediaInteraction: {
    title: "MEDIA",
    content:
      "Adnan responds with a Selfish comment, 'I'm the best on the pitch, \
    it's that simple.' The remark comes off as arrogant, sparking a bit of \
    controversy. Adnan gets a whisper in the ear saying 'manger wants to see you'",
    image: "media.jpeg",
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
    image: "manageroffice.jpeg",
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
    image: "AngryManager.webp",
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
    image: "meeting.jpeg",
    choices: [{ text: "LEAVE CLUB", next: "LEAVECLUB" }],
  },

  LEAVECLUB: {
    title: "MEETING WITH AGENT!",
    content:
      "ADNAN ON THE FINAL DAY OF THE SEASON HAS LEFT WREXHAM FC DUE TO FALLING OUT WITH THE MANAGER!",
    image: "meeting.jpeg",
    choices: [{ text: "WHAT NEXT!", next: "Whatsnext" }],
  },

  HomeTime: {
    title: "ADNAN IGNORED THE MANAGER",
    content:
      "Adnan arrvied home, with alot of missed calls and messages from his \
        teammates, saying 'THE MANGER IS GOING TO DROP YOU IF YOU DON'T SEE HIM!'\
        This angered Adnan and he ignored it.",
    image: "missedcalls.jpeg",
    choices: [{ text: "GO TO SLEEP", next: "sleep" }],
  },
  HomeTime: {
    title: "TRAINING",
    content:
      "Adnan arrvied at training the next day, he was not allowed to be on the pitch \
      the manager said, he will only be allowed on the training and football pitch if \
      he applogies said the manager'",
    image: "missedcalls.jpeg",
    choices: [{ text: "SAY SORRY", next: "sorry" }],
  },
  sorry: {
    title: "MATCHDAY THE SEMI FINALS OF THE FA CUP",
    content:
      "Although Adnan has been the best in the team as a striker, the manager \
      and Adnan were not on good terms, the team really needed Adnan but the manager \
      wanted to teach him a lesson. The Manager picked Adnan in the line up to play.",
    image: "facup.jpeg",
    choices: [{ text: "PLAY MATCH", next: "Matchtime" }],
  },
  Matchtime: {
    title: "WREXHAM FC VS WOLVES SEMI FINALS OF THE FA CUP",
    content:
      "THE MATACH STARTS, ADNAN GETS THE BALL AND DRIBBLES WITH IT UP THE FIELD, \
      CROSSES THE BALL TO INAM, INAM SCORES WITH ONE OF THE MOST OUTRAGES BICYLE KICKS EVER! \
      THE CROWD GO WILD WITH WREXHAM FC UP 1-0 AGAINST WOLVES. INAM PASSES THE BALL TO \
      ADNAN, WHAT DOES ADNAN DO WITH 2 PLAYERS AROUND HIM?",
    image: "bicyclekick.jpeg",
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
    image: "injured.jpeg",
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
    image: "injured.jpeg",
    choices: [
      { text: "GET UP PLAY ON", next: "Playon" },
      { text: "Sub off the pitch", next: "suboff" },
    ],
  },
  Playon: {
    title: "ADNAN FELL TO THE GROUND",
    content:
      "ADNAN TRIED TO PLAY ON BUT FELL TO THE GROUND HOLDING HIS LEG, SHOULD HE GO OFF?",
    image: "injured.jpeg",
    choices: [{ text: "Sub off the pitch", next: "suboff" }],
  },
  suboff: {
    title: "ADNAN WAS SUBBED OFF AND RECEIVED BAD NEWS!",
    content:
      "ADNAN WENT STRAIGHT TO THE MEDICAL ROOM TO GET TREATED, \
      THE CLUB DOCTORE SAID THAT 'ADNAN WON'T BE ABLE TO PLAY FOOTBALL AGAIN!' SHOULD ADNAN RETIRE?",
    image: "careerendinginjury.jpeg",
    choices: [{ text: "Retire", next: "Retire" }],
  },
  Retire: {
    title: "YOUNG FOOTBALLER RETIRES DUE TO CAREER ENDING INJURY",
    content: "Thank You For Playing!",
    image: "careerendinginjury.jpeg",
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },

  Whatsnext: {
    title: "ADNAN LEAVES WREXHAM FC",
    content: "Thank You For Playing!",
    image: "leaveclub.jpeg",
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },
};

// Function to display the game state on the screen
function showGameState(stateKey) {
  const state = gameStates[stateKey]; // Get the current state using the key
  document.getElementById("gameTitle").textContent = state.title; // updating the game title
  document.getElementById("storyContent").textContent = state.content; // updating the main content of story
  document.getElementById("Game-images").src = state.image; // updating the images each time

  const choicesContainer = document.getElementById("readerChoices"); //clearing the previous choices
  choicesContainer.innerHTML = "";

  state.choices.forEach((choice) => {
    // buttons for new choices
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.onclick = () => showGameState(choice.next);
    choicesContainer.appendChild(button);
  });
}

// starting the game by start state
showGameState("start");
