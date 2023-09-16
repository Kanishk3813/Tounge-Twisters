const tongueTwisters = [
    {
      twister: "She sells seashells by the seashore, and the shells she sells are surely seashells.",
      difficulty: "Moderate"
    },
    {
      twister: "How can a clam cram in a clean cream can?",
      difficulty: "Moderate"
    },
    {
      twister: "Fuzzy Wuzzy was a bear, Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn’t very fuzzy, was he?",
      difficulty: "Easy"
    },
    {
      twister: "I saw Susie sitting in a shoeshine shop. Where she sits she shines, and where she shines she sits.",
      difficulty: "Moderate"
    },
    {
      twister: "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?",
      difficulty: "Difficult"
    },
    {
      twister: "Six slippery snails, slid silently seaward.",
      difficulty: "Easy"
    },
    {
      twister: "A proper copper coffee pot.",
      difficulty: "Easy"
    },
    {
      twister: "Sally sells seashells by the seashore. But if Sally sells seashells by the seashore, then where are the seashells Sally sells?",
      difficulty: "Moderate"
    },
    {
      twister: "Black bug bleeds black blood. What color blood does a blue bug bleed?",
      difficulty: "Difficult"
    },
    {
      twister: "Red lorry, yellow lorry, red lorry, yellow lorry.",
      difficulty: "Easy"
    }
  ];
  
  
  let activeIndex = 0;
    const text = document.getElementById("twistertext");
    const prevbtn = document.getElementById("prevbtn");
    const nextbtn = document.getElementById("nextbtn");
  
    function displayTwister(index) {
      text.textContent = tongueTwisters[index].twister;
    }
  
    prevbtn.addEventListener("click", () => {
    if (activeIndex > 0) {
      activeIndex--;
    } else {
      activeIndex = tongueTwisters.length - 1;
    }
    displayTwister(activeIndex);
  });
  
  nextbtn.addEventListener("click", () => {
    if (activeIndex < tongueTwisters.length - 1) {
      activeIndex++;
    } else {
      activeIndex = 0;
    }
    displayTwister(activeIndex);
  });
  
  displayTwister(activeIndex);