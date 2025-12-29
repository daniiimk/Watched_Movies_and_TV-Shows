//! ==============================
//! DATA
//! ==============================

// MOVIE GENRES (manual = low maintenance)
const movieGenres = {
  action: [
    "Blackhat",
    "John Wick",
    "Top Gun",
    "Top Gun: Maverick",
    "Black Adam",
    "Suicide Squad",
    "The Suicide Squad",
    "Uncharted",
    "Wrath of Man",
    "Transformers",
    "Transformers: Revenge of the Fallen",
    "Transformers: Dark of the Moon",
    "Transformers: Age of Extinction",
    "Transformers: The Last Knight",
    { title: "The Fast and the Furious", year: 2001 },
    "2 Fast 2 Furious",
    "The Fast and the Furious: Tokyo Drift",
    "Fast & Furious",
    "Fast Five",
    "Fast & Furious 6",
    "Furious 7",
    "The Fate of the Furious",
    "F9",
    "Fast X",
    { title: "Rampage", year: 2018 },
    "Red Notice",
    "Hitmans Bodyguard",
    "Hitman's Wife's Bodyguard",
    "Operation Fortune",
    "The Meg",
    "Meg 2: The Trench",
    "Extraction",
    "Extraction 2",
    "Blue Beetle",
    "Deadpool",
    "Deadpool 2",
    "Deadpool & Wolverine",
    "Day Shift",
    "Aquaman",
    "Aquaman and the Lost Kingdom",
    "The Man From Toronto",
    "Gray Man",
    "Man of Steel",
    "Love and Monsters",
    "Batman v Superman: Dawn of Justice",
    "Bad Boys",
    "Bad Boys II",
    "Bad Boys: For Life",
    "Bad Boys: Ride or Die",
    "Baby Driver",
    "Central Intelligence",
    "The Gentlemen",
    "Rush Hour",
    "Rush Hour 2",
    "Rush Hour 3",
    "Jack Reacher",
    "Jack Reacher: Never Go Back",
    "The Expendables",
    "The Expendables 2",
    "The Expendables 3",
    "The Expendables 4",
    "Edge of Tomorrow",
    { title: "X-Men", year: 2000 },
    "X2",
    "X-Men: The Last Stand",
    "X-Men Origins: Wolverine",
    "X-Men: First Class",
    "The Wolverine",
    "X-Men: Days of Future Past",
    "X-Men: Apocalypse",
    "Logan",
    "San Andreas",
    "The Mechanic",
    "Mechanic: Resurrection",
    "Need for Speed",
    "Mr. & Mrs. Smith",
    "Bloodshot",
    "I Am Legend",
    { title: "Mission: Impossible", year: 1996 },
    { title: "Mission: Impossible 2", year: 2000 },
    "Mission: Impossible III",
    "Mission: Impossible – Ghost Protocol",
    "Mission: Impossible – Rogue Nation",
    "Mission: Impossible – Fallout",
    "Mission: Impossible – Dead Reckoning Part One",
    "Mission: Impossible – Dead Reckoning Part Two",
    "6 Underground",
    "War Dogs",
    "Homefront",
    "Ride Along",
    "Ride Along 2",
    "Green Lantern",
    "The Transporter",
    "Transporter 2",
    "Transporter 3",
    "Die Hard",
    "Die Hard 2",
    "Die Hard with a Vengeance",
    "Live Free or Die Hard",
    "A Good Day to Die Hard",
    "Death Race",
    "Kick-Ass",
    "Kick-Ass 2",
    "Gemini Man",
    "Independence Day",
    "The Magnificent Seven",
    "The Terminator",
    "Terminator 2: Judgment Day",
    "Terminator 3: Rise of the Machines",
    "Terminator Salvation",
    "Terminator Genisys",
    "Terminator: Dark Fate",
    "Escape Plan",
    "Escape Plan 2: Hades",
    "Escape Plan: The Extractors",
    "Countdown",
    "Journey 2: The Mysterious Island",
    "Halloween",
    "Halloween II",
    "Halloween III: Season of the Witch",
    "Halloween 4: The Return of Michael Myers",
    "Halloween 5: The Revenge of Michael Myers",
    "Halloween: The Curse of Michael Myers",
    "Halloween H20: 20 Years Later",
    "Halloween: Resurrection",
    "Halloween (2018)",
    "Halloween Kills",
    "Halloween Ends",
    "American Assassin",
    "White House Down",
    "Project Power",
    "Speed",
    "Die Hart",
    "Faster",
    "12 Strong",
    "The Huntsman: Winter’s War",
    "Twister",
    "Drive",
    "The Magnificent Seven",
    "2 Guns",
    "Triple Frontier",
    "Ambulance",
    { title: "Guy Ritchies The Covenant", year: 2023 },
    "Parker",
  ],
  scifi: [
    "Inception",
    "Code 8",
    "Code 8: Part II",
    "Fantastic Four",
    "Maze Runner",
    "Maze Runner: The Scorch Trials",
    "Maze Runner: The Death Cure",
    "Iron Man",
    "Iron Man 2",
    "Thor",
    "Captain America: The First Avenger",
    "Avengers",
    "Avengers: Age of Ultron",
    "Avengers: Infinity War",
    "Avengers: Endgame",
    "Venom",
    "Jurassic Park",
    "The Lost World: Jurassic Park",
    "Jurassic Park III",
    { title: "Jurassic World", year: 2015 },
    "Jurassic World: Fallen Kingdom",
    "Jurassic World: Dominion",
    "Jurassic World: Rebirth",
    "Free Guy",
    "Eternals",
    "The Matrix",
    "The Matrix Reloaded",
    "The Matrix Revolutions",
    "The Matrix Resurrections",
    "The Tomorrow War",
    "Interstellar",
    "The Adam Project",
    "Ready Player One",
    "The New Mutants",
    "Knights of the Zodiac",
    "Rise of the Planet of the Apes",
    "Dawn of the Planet of the Apes",
    "War for the Planet of the Apes",
    "San Andreas",
    "I Am Legend",
    { title: "Passengers", year: 2016 },
    "Pixels",
    "Arrival",
    "Back to the Future",
    "Back to the Future Part II",
    "Back to the Future Part III",
    "The Day After Tomorrow",
    "NOAH",
    "Tenet",
  ],
  drama: [
    "Into the Blue",
    "Nightcrawler",
    "Pain Hustlers",
    "Pleasantville",
    "Creed",
    "Creed II",
    "Creed III",
    "The Wolf Of Wall Street",
    "Ghosted",
    "Oppenheimer",
    "Fight Club",
    "Sound of Freedom",
    "Joker",
    "The Godfather",
    "The Godfather: Part II",
    "The Godfather: Part III",
    "Knives Out",
    "Glass Onion: A Knives Out Mystery",
    "Inception",
    "Shutter Island",
    "Fatherhood",
    "Pulp Fiction",
    "Don’t Look Up",
    "Straight Outta Compton",
    "Prisoners",
    "Scarface",
    "Goodfellas",
    "Focus",
    "Once Upon A Time in Hollywood",
    "The Green Mile",
    "The Social Network",
    "Zodiac",
    "What is a Woman",
    "The Great Gatsby",
    "Southpaw",
    "8 Mile",
    "Donnie Darko",
    "Freedom Writers",
    "The Irishman",
    "The Guest",
    "Uncut Gems",
    "Ghosts of War",
    "Above the Shadows",
    "Shawshank Redemption",
    "The Beekeeper",
    "Lift",
  ],
  comedy: [
    "Psych: The Movie",
    "Psych 2",
    "Psych 3",
    "Tag",
    "Psych: The Movie",
    "Psych 2",
    "Psych 3",
    "No Hard Feelings",
    "Teen Wolf: The Movie",
    "Jumanji: Welcome to the Jungle",
    "Jumanji: The Next Level",
    "Friday",
    "21 Jump Street",
    "22 Jump Street",
    "The Truman Show",
    "Ted",
    "Ted 2",
    "White Chicks",
    "Scary Movie",
    "Scary Movie 2",
    "Scary Movie 3",
    "Scary Movie 4",
    "Scary Movie 5",
    "Charm City Kings",
    "Murder Mystery",
    "Murder Mystery 2",
    "Grown Ups",
    "Grown Ups 2",
    "Troll",
    "Now You See Me",
    "Now You See Me 2",
    "Now You See Me: Now You Dont",
    "Friends With Benefits",
    "The Proposal",
    "Baywatch",
    "Me Time",
    "Good Boys",
    "Were the Millers",
    { title: "Project X", year: 2012 },
    "The Hangover",
    "The Hangover Part II",
    "The Hangover Part III",
    "17 Again",
    "The Voyeurs",
    "Get Hard",
    "Wild Card",
    "Blue Story",
    "Boyz n the Hood",
    "The Mask",
    "American Pie",
    "American Pie 2",
    "American Wedding",
    "American Reunion",
    "The Out-Laws",
    "Vacation Friends",
    "Not Another Teen Movie",
    "Get Rich or Die Tryin’",
    "Hancock",
    "Night School",
    { title: "Nerve", year: 2016 },
    "50 First Dates",
    "How High",
    "How High 2",
    "Pain & Gain",
    "The 40-Year-Old Virgin",
    "Dirty Grandpa",
    "Daddy’s Home",
    "Daddy’s Home 2",
    "The Longest Yard",
    "Fist Fight",
    "Think Like A Man",
    "Click",
    "Ace Ventura: Pet Detective",
    "The Babysitter",
    "The Babysitter: Killer Queen",
    "Hitch",
    "Bad Neighbors",
    "Blockers",
    "21",
    "Meet the Parents",
    "Meet the Fockers",
    "Little Fockers",
    "Hubie Halloween",
    "Spring Breakers",
    "Wild Things",
    "Bright",
    "The Greatest Lie Ever Sold",
    "Forgetting Sarah Marshall",
    "Blue Mountain State: Thadland",
    "Anyone but You",
    "Crazy, Stupid, Love",
  ],
};

// TV SHOW GENRES
const showGenres = {
  scifi: [
    "Supernatural",
    "Agents of S.H.I.E.L.D.",
    "Arrow",
    "Daredevil",
    "Cloak & Dagger",
    "Legacies",
    "Legends of Tomorrow",
    "Lost",
    "Lucifer",
    "Luke Cage",
    "MacGyver",
    "Moon Knight",
    "Stranger Things",
    "The Boys",
    "The Tomorrow People",
    "The Flash",
    "The Gifted",
    "Superman & Lois",
    "Titans",
    "Travelers",
    "Under The Dome",
    "Wolf Pack",
    "Gen V",
    "The Witcher",
    "Upload",
    "Siren",
    "Knight Rider",
  ],

  crime: [
    "Ballers",
    "Blacklist",
    "Chicago Fire",
    "Chicago Med",
    "Chicago P.D.",
    "Criminal Minds",
    "The Mentalist",
    "Power",
    "Prison Break",
    "Marvel's The Punisher",
    "Sons of Anarchy",
    "Suits",
    "S.W.A.T.",
    "The Originals",
    "Vikings",
    "Walker",
    "The Walking Dead",
    "Bosch",
    "Castle",
    "Tom Clancy's Jack Ryan",
    "Tulsa King",
    "Yellowstone",
  ],
  sitcom: [
    "90210",
    "Blue Mountain State",
    "Brooklyn Nine-Nine",
    "Cougar Town",
    "How I Met Your Mother",
    "Key & Peele",
    "King of Queens",
    "Modern Family",
    "Superstore",
    "The O.C.",
    "Whose Line Is It Anyway?",
    "Silicon Valley",
    "Psych",
  ],
  drama: [
    "Dawson’s Creek",
    "Deadly Class",
    { title: "The Defenders", year: 2017 },
    "Fate: The Winx Saga",
    "The Fresh Prince of Bel-Air",
    "Friends",
    "Power Book II: Ghost",
    "Ginny & Georgia",
    "The Good Doctor",
    "Hawaii Five-0",
    "Hijack",
    "Husbands of Hollywood",
    "MacGyver",
    { title: "MacGyver", year: 2016 },
    ,
    "Mad Men",
    "Manifest",
    "New Amsterdam",
    "One of Us Is Lying",
    "Ragnarok",
    "Reacher",
    "Riverdale",
    "Shadowhunters",
    "Smallville",
    "The Society",
    "Timeless",
    "The Recruit",
    "Vampire Diaries",
    "Wednesday",
    "The White Lotus",
    "Exit",
    "You",
    "Countdown",
    "Motorheads",
    "Runarounds",
    "This Is Us",
    "Half Bad: The Bastard Son & The Devil Himself",
    "The Pretender",
    "Tracker",
  ],
};

//! ==============================
//! TMDB CONFIG
//! ==============================

const API_KEY = "74862a1a79562dbc6d4606ab1040966d";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

//! ==============================
//! FETCH POSTER
//! ==============================

async function fetchPoster(item, type = "movie") {
  let url;

  if (typeof item === "string") {
    url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(
      item
    )}`;
  } else if (typeof item === "object") {
    url = `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(
      item.title
    )}&year=${item.year}`;
  }

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results?.[0]?.poster_path || null;
  } catch (err) {
    console.error("Error fetching poster for", item, err);
    return null;
  }
}

//! ==============================
//! CREATE ITEM ELEMENT
//! ==============================

function createItemElement(title, posterPath) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");

  const thumbnail = document.createElement("div");
  thumbnail.classList.add("item-thumbnail");

  if (posterPath) {
    thumbnail.style.backgroundImage = `url(${IMAGE_BASE_URL + posterPath})`;
  } else {
    thumbnail.style.backgroundColor = "#2a2a2a";
  }

  // Overlay title
  const titleEl = document.createElement("div");
  titleEl.classList.add("item-title");
  titleEl.textContent = typeof title === "string" ? title : title.title;

  // Append
  itemDiv.appendChild(thumbnail);
  itemDiv.appendChild(titleEl);

  return itemDiv;
}

//! ==============================
//! POPULATE GENRES
//! ==============================

async function populateGenres(parentSelector, genreMap, type) {
  const parent = document.querySelector(parentSelector);

  for (const [genre, titles] of Object.entries(genreMap)) {
    const grid = parent.querySelector(
      `.genre[data-genre="${genre}"] .genre-grid`
    );

    if (!grid) continue;

    for (const title of titles) {
      const posterPath = await fetchPoster(title, type);
      const itemEl = createItemElement(title, posterPath);
      grid.appendChild(itemEl);

      // Throttle to avoid TMDB rate limits
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
  }
}

//! ==============================
//! INIT
//! ==============================

document.addEventListener("DOMContentLoaded", () => {
  populateGenres(".category-items.movies", movieGenres, "movie");
  populateGenres(".category-items.shows", showGenres, "tv");
});
