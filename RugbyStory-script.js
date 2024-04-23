const gameStates = {
  start: {
    title: "ACADEMY BEGINNINGS",
    content:
      "Meet Harris, a young book lover who joins a rugby academy by mistake \
      during a school mix-up. Surprisingly, he discovers he has a interest for \
      the game. As he starts his training, Harris learns the basics of rugby, \
      slowly turning his initial confusion into a passion for the sport.",
    image: "acadmey.png",
    choices: [
      { text: "Embrace rugby training", next: "firstMatch" },
      { text: "Quit and go back to books", next: "quitAcademy" },
    ],
  },

  firstMatch: {
    title: "FIRST BIG GAME",
    content:
      "Harris plays his first match after weeks of training. He's nervous but \
      manages to score a try, surprising everyone, including himself. His team \
      cheers, and he feels a rush of excitement. This is the moment Harris truly \
      falls in love with rugby.",
    image: "firstbiggame.png",
    choices: [
      { text: "Continue in the academy", next: "academyYears" },
      { text: "Feel overwhelmed and reconsider", next: "reconsider" },
    ],
  },

  quitAcademy: {
    title: "BACK TO BOOKS",
    content:
      "Harris decides that rugby isn't for him and returns to his books. However, \
      the thrill of the game sticks with him. After a few days, he misses the \
      excitement and decides to give rugby one more shot.",
    image: "options.png",
    choices: [
      { text: "Return to rugby", next: "firstMatch" },
      { text: "Stay with books", next: "stayWithBooks" },
    ],
  },

  reconsider: {
    title: "SECOND THOUGHTS",
    content:
      "Feeling overwhelmed by the physical demands and pace of rugby, Harris \
      considers quitting. He talks to his coach, who encourages him to stick \
      with it and see how far he can go.",
    image: "reconsider.png",
    choices: [
      { text: "Decide to continue", next: "academyYears" },
      { text: "Quit for good", next: "quitForGood" },
    ],
  },

  stayWithBooks: {
    title: "HARRIS RETURNS TO LIBRARY",
    content: "It was all a dream, The End!.",
    image: "books.png",
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },

  academyYears: {
    title: "GROWING PAINS AND GAINS",
    content:
      "Over the next few years, Harris grows stronger and more skilled. He \
      becomes a key player in the academy, leading his team to several junior \
      championships. His reputation as a hardworking player spreads.",
    image: "acadmey.png",
    choices: [
      { text: "Graduate to professional league", next: "professionalStart" },
      { text: "Stay to coach at the academy", next: "coachAcademy" },
    ],
  },

  coachAcademy: {
    title: "ACADMEY COACHING THE ENDING",
    content:
      "Harris trains the under 17s, also hoping to get his professional training certficate - The End!.",
    image: "acadmey.png",
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },

  professionalStart: {
    title: "PROFESSIONAL DEBUT",
    content:
      "Harris joins a professional rugby team. The competition is tougher, \
      and the games are more intense. But Harris uses his intellect and \
      unique perspective to devise new strategies, helping his team win crucial \
      matches.",
    image: "debut.png",
    choices: [
      { text: "Aim for the national team", next: "nationalTeam" },
      { text: "Enjoy the club level", next: "enjoyClub" },
    ],
  },

  nationalTeam: {
    title: "PLAYING FOR SCOTLAND",
    content:
      "Harris's dream comes true when he's selected for the national team. He \
      plays his heart out, helping Scotland reach the Rugby World Cup finals. \
      It's a tough journey, but Harris is ready.",
    image: "scotland.png",
    choices: [
      { text: "Worldcup", next: "worldCupWin" },
      { text: "Worldcup", next: "worldCupLoss" },
    ],
  },

  worldCupWin: {
    title: "WORLD CUP CHAMPIONS",
    content:
      "In a dramatic final, Harris scores the winning try. He becomes a \
       national hero, inspiring countless young Scots. Harris proves that \
       even the most unexpected people can achieve greatness.",
    image: "worldcup.png",
    choices: [
      { text: "Celebrate the victory", next: "celebrateVictory" },
      { text: "Retire at the top", next: "retireAtTop" },
    ],
  },

  worldCupLoss: {
    title: "HONORABLE DEFEAT",
    content:
      "Despite a heroic effort, Scotland falls just short in the World Cup \
      finals. Harris is proud of his team's achievement and looks forward \
      to the next challenge.",
    image: "lost.png",
    choices: [{ text: "Try again next season", next: "nationalTeam" }],
  },

  retireAtTop: {
    title: "HONORABLE DEFEAT",
    content:
      "Despite a heroic effort, Scotland falls just short in the World Cup \
      finals. Harris is proud of his team's achievement and looks forward \
      to the next challenge - Thank you for playing!.",
    image: "lost.png",
    choices: [{ text: "Return to Games Menu", action: "redirectToGames" }],
  },
};

// function to display the gamestate on screen
function showGameState(stateKey) {
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

//(DONT MOVE starts the gamestate )
showGameState("start");

// refrences :
// JS Functions document.getElementById - Used at the bottom functions to locate the id game title etc and update the title, content and image on each options clicked by user
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById -

//button onclick JS - used for the buttons choices
//https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
