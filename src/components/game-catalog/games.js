/**
 * Verified sample game data for the GameCatalog / GameCard components.
 *
 * Sources (frozen 2026-10-28):
 *  - https://api.start.ng/games  (names, creators, covers, play counts, leaderboards)
 *  - https://start.ng homepage SSR capture (.impeccable/research/home-ssr.html — A-to-Z titles/credits verified 188/188)
 *  - Live URL checks: featured covers return 200; The Hangout plays at start.ng/hangout (hangout.start.ng is a 404).
 * No invented games, creators, covers or claims. Update by re-pulling the API when the build goes live upstream.
 */

// Featured lineup: The Hangout (start.ng's own multiplayer hub, pinned first) + the
// seven most-played community games, exactly the real site's featured picks.
export const featuredGames = [
  {
    "slug": "hangout",
    "title": "The Hangout",
    "by": "start.ng",
    "href": "https://start.ng/hangout",
    "address": "start.ng/hangout",
    "coverUrl": "https://start.ng/hangout-cover.jpg",
    "alt": "A screenshot of the Hangout, start.ng's own multiplayer game",
    "leaderboard": false,
    "plays": 57
  },
  {
    "slug": "lagos-bike-rush",
    "title": "Lagos Bike Rush",
    "by": "OBA",
    "href": "https://lagos-bike-rush.start.ng",
    "address": "lagos-bike-rush.start.ng",
    "coverUrl": "https://lagos-bike-rush.start.ng/cover.png?v=1792309258",
    "leaderboard": true,
    "plays": 40
  },
  {
    "slug": "boju-boju",
    "title": "Boju Boju",
    "by": "99PlusOne",
    "href": "https://boju-boju.start.ng",
    "address": "boju-boju.start.ng",
    "coverUrl": "https://boju-boju.start.ng/cover.png?v=1792338368",
    "leaderboard": true,
    "plays": 22
  },
  {
    "slug": "jemi-game-arcade",
    "title": "Jemi Game Arcade",
    "by": "Jemi",
    "href": "https://jemi-game-arcade.start.ng",
    "address": "jemi-game-arcade.start.ng",
    "coverUrl": "https://jemi-game-arcade.start.ng/cover.png?v=1792287546",
    "leaderboard": true,
    "plays": 21
  },
  {
    "slug": "job-hunt",
    "title": "Job Hunt",
    "by": "Raji",
    "href": "https://job-hunt.start.ng",
    "address": "job-hunt.start.ng",
    "coverUrl": "https://job-hunt.start.ng/startng-cover.webp?v=1792208405",
    "leaderboard": true,
    "plays": 19
  },
  {
    "slug": "tesla-skyrun",
    "title": "Tesla Skyrun",
    "by": "Favour",
    "href": "https://tesla-skyrun.start.ng",
    "address": "tesla-skyrun.start.ng",
    "coverUrl": "https://tesla-skyrun.start.ng/cover.png?v=1792500744",
    "leaderboard": true,
    "plays": 17
  },
  {
    "slug": "danfo-make-way",
    "title": "Danfo Make Way",
    "by": "Okeke",
    "href": "https://danfo-make-way.start.ng",
    "address": "danfo-make-way.start.ng",
    "coverUrl": "https://danfo-make-way.start.ng/cover.jpg?v=1792447533",
    "leaderboard": true,
    "plays": 15
  },
  {
    "slug": "inkbreak",
    "title": "Inkbreak",
    "by": "henryuks",
    "href": "https://inkbreak.start.ng",
    "address": "inkbreak.start.ng",
    "coverUrl": "https://inkbreak.start.ng/cover.png?v=1793088584",
    "leaderboard": true,
    "plays": 13,
    "description": "Inkbreak is an original ink arena shooter with Turf Clash and Squad Assault across four arenas."
  }
];

// Every community game on start.ng, alphabetically (the A-to-Z list on the homepage).
// The Hangout is not part of the A-to-Z list on the real site (it is pinned to the featured grid instead).
export const communityGames = [
  {
    "slug": "3d-coin-collector",
    "title": "3d Coin Collector",
    "by": "Pleasure"
  },
  {
    "slug": "agege-rush",
    "title": "Agege Rush",
    "by": "Mustapha"
  },
  {
    "slug": "agent-protocol",
    "title": "Agent Protocol",
    "by": "Fabbenco"
  },
  {
    "slug": "alley-velocity",
    "title": "Alley Velocity",
    "by": "Monarch"
  },
  {
    "slug": "along",
    "title": "Along",
    "by": "Yolanda"
  },
  {
    "slug": "arcade-hub",
    "title": "Arcade Hub",
    "by": "HB"
  },
  {
    "slug": "archery-master",
    "title": "Archery Master",
    "by": "David"
  },
  {
    "slug": "arrow-escape",
    "title": "Arrow Escape",
    "by": "Irfat"
  },
  {
    "slug": "ayo",
    "title": "Ayo",
    "by": "Hamzat",
    "description": "Ayo, the Yoruba seed game for two: sow your seeds round the board and capture pits of two or three. Play a friend with a link, find a match, or play the bot. The server keeps the seeds and checks every move."
  },
  {
    "slug": "ayo-arena",
    "title": "Ayo Arena",
    "by": "mar"
  },
  {
    "slug": "balloon-funride",
    "title": "Balloon Funride",
    "by": "Agada"
  },
  {
    "slug": "bingo",
    "title": "Bingo",
    "by": "Hamzat",
    "description": "Host a bingo for up to 100 people, with the classic numbers or your own words. Everyone gets a private card, start.ng draws, and every claim is checked."
  },
  {
    "slug": "bloom-circuit",
    "title": "Bloom Circuit",
    "by": "Felix"
  },
  {
    "slug": "boju-boju",
    "title": "Boju Boju",
    "by": "99PlusOne"
  },
  {
    "slug": "bounce-game",
    "title": "Bounce Game",
    "by": "Emmanuel"
  },
  {
    "slug": "budget-panic",
    "title": "Budget Panic",
    "by": "Envy_Boop",
    "description": "A fast, funny market-survival game for start.ng. You have a recipe to cook, a small budget, and prices that keep moving. Haggle with traders, dodge pickpockets, survive market chaos, and buy the whole list before you go broke."
  },
  {
    "slug": "bug-escape",
    "title": "Bug Escape",
    "by": "Timothy"
  },
  {
    "slug": "buggy-bash-3d",
    "title": "Buggy Bash 3d",
    "by": "Omojuwa"
  },
  {
    "slug": "bullseye-archery",
    "title": "Bullseye Archery",
    "by": "Spider"
  },
  {
    "slug": "circuit-racer",
    "title": "Circuit Racer",
    "by": "Bolu"
  },
  {
    "slug": "city-hustle-lagos",
    "title": "City Hustle Lagos",
    "by": "Daniel"
  },
  {
    "slug": "cloud-courier",
    "title": "Cloud Courier",
    "by": "wisdom"
  },
  {
    "slug": "coconut-dodge",
    "title": "Coconut Dodge",
    "by": "Fawazbky",
    "description": "The palms are dropping coconuts. Dodge them as your own start.ng character, chain coins for x2 and x3, and survive as long as you can."
  },
  {
    "slug": "coin-catcher",
    "title": "Coin Catcher",
    "by": "Cynthy"
  },
  {
    "slug": "coin-dash",
    "title": "Coin Dash",
    "by": "Chinenye"
  },
  {
    "slug": "coin-dash-arena",
    "title": "Coin Dash Arena",
    "by": "snow"
  },
  {
    "slug": "coin-dash-game",
    "title": "Coin Dash Game",
    "by": "Olubunmi"
  },
  {
    "slug": "coin-dash-runner",
    "title": "Coin Dash Runner",
    "by": "Ejike"
  },
  {
    "slug": "coin-quest",
    "title": "Coin Quest",
    "by": "Evangeli"
  },
  {
    "slug": "coin-rush",
    "title": "Coin Rush",
    "by": "Daniel"
  },
  {
    "slug": "coin-rush-3d",
    "title": "Coin Rush 3d",
    "by": "Pearl"
  },
  {
    "slug": "connect-4",
    "title": "Connect 4",
    "by": "Hamzat",
    "description": "Connect 4 on start.ng: drop discs to get four in a row. Play a friend with a link, find a match, or play the bot. The server checks every move."
  },
  {
    "slug": "cork-fc",
    "title": "Cork Fc",
    "by": "prinuel"
  },
  {
    "slug": "cosmic-dash",
    "title": "Cosmic Dash",
    "by": "Sabhayor"
  },
  {
    "slug": "cosmic-surge",
    "title": "Cosmic Surge",
    "by": "Uriel"
  },
  {
    "slug": "crowd-control",
    "title": "Crowd Control",
    "by": "Dave"
  },
  {
    "slug": "cyber-slash",
    "title": "Cyber Slash",
    "by": "Goodness"
  },
  {
    "slug": "cyberpulse",
    "title": "Cyberpulse",
    "by": "Bilkis"
  },
  {
    "slug": "cybertron-runner",
    "title": "Cybertron Runner",
    "by": "Nnachi"
  },
  {
    "slug": "danfo",
    "title": "Danfo",
    "by": "Khalif"
  },
  {
    "slug": "danfo-defense",
    "title": "Danfo Defense",
    "by": "emmyanz"
  },
  {
    "slug": "danfo-make-way",
    "title": "Danfo Make Way",
    "by": "Okeke"
  },
  {
    "slug": "dead-signal",
    "title": "Dead Signal",
    "by": "Benjamin"
  },
  {
    "slug": "dont-spill-the-soup",
    "title": "Dont Spill The Soup",
    "by": "Umar"
  },
  {
    "slug": "downshaft",
    "title": "Downshaft",
    "by": "Prince"
  },
  {
    "slug": "draughts",
    "title": "Draughts",
    "by": "Hamzat",
    "description": "Draughts (English draughts, or checkers) on start.ng: captures are compulsory and kings move both ways. Play a friend with a link, find a match, or play the bot. The server checks every move."
  },
  {
    "slug": "dreamy-lass",
    "title": "Dreamy Lass",
    "by": "Her"
  },
  {
    "slug": "dusk-stack",
    "title": "Dusk Stack",
    "by": "Eddy"
  },
  {
    "slug": "echo-grid-dan",
    "title": "Echo Grid Dan",
    "by": "Daniel"
  },
  {
    "slug": "echo-world-game",
    "title": "Echo World Game",
    "by": "Ummi"
  },
  {
    "slug": "ember-dash",
    "title": "Ember Dash",
    "by": "Soludo",
    "description": "Ember Dash is an endless lava-runner on start.ng. Flee the eruption, leap the gaps, slide under the arches and grab every crystal with your own start.ng character."
  },
  {
    "slug": "finding-mama",
    "title": "Finding Mama",
    "by": "Harrylever"
  },
  {
    "slug": "flappy-run",
    "title": "Flappy Run",
    "by": "Jesse"
  },
  {
    "slug": "flood-rise",
    "title": "Flood Rise",
    "by": "Josh"
  },
  {
    "slug": "flying-human",
    "title": "Flying Human",
    "by": "Lagat"
  },
  {
    "slug": "follow-follow",
    "title": "Follow Follow",
    "by": "kim"
  },
  {
    "slug": "forest-hunter",
    "title": "Forest Hunter",
    "by": "Tbrainyz",
    "description": "Scope the forest, identify the animals, and bag the mission target before time or ammo runs out. Spare the protected wolves."
  },
  {
    "slug": "gem-dash",
    "title": "Gem Dash",
    "by": "Francis"
  },
  {
    "slug": "gem-isle",
    "title": "Gem Isle",
    "by": "Song"
  },
  {
    "slug": "gem-rush",
    "title": "Gem Rush",
    "by": "Temitope"
  },
  {
    "slug": "ghost-on-the-loose",
    "title": "Ghost On The Loose",
    "by": "Denise"
  },
  {
    "slug": "ghost-shift",
    "title": "Ghost Shift",
    "by": "Testing"
  },
  {
    "slug": "gidi-hop",
    "title": "Gidi Hop",
    "by": "Oluwayoyinsola"
  },
  {
    "slug": "git-quest",
    "title": "Git Quest",
    "by": "Belemote"
  },
  {
    "slug": "glam-dash",
    "title": "Glam Dash",
    "by": "Mercy"
  },
  {
    "slug": "glide",
    "title": "Glide",
    "by": "dev_elixir"
  },
  {
    "slug": "glitter-rain",
    "title": "Glitter Rain",
    "by": "Mercy"
  },
  {
    "slug": "go-slow-danfo",
    "title": "Go Slow Danfo",
    "by": "Oyetoke"
  },
  {
    "slug": "harrington-mystery",
    "title": "Harrington Mystery",
    "by": "faith"
  },
  {
    "slug": "horsebound-endless-derby",
    "title": "Horsebound Endless Derby",
    "by": "Emmanuel"
  },
  {
    "slug": "ile-ere",
    "title": "Ile Ere",
    "by": "Josh"
  },
  {
    "slug": "inkbreak",
    "title": "Inkbreak",
    "by": "henryuks",
    "description": "Inkbreak is an original ink arena shooter with Turf Clash and Squad Assault across four arenas."
  },
  {
    "slug": "iso-scrap",
    "title": "Iso Scrap",
    "by": "Abdulmuiz"
  },
  {
    "slug": "jackpot",
    "title": "Jackpot",
    "by": "Alexin"
  },
  {
    "slug": "jemi-game-arcade",
    "title": "Jemi Game Arcade",
    "by": "Jemi"
  },
  {
    "slug": "job-hunt",
    "title": "Job Hunt",
    "by": "Raji"
  },
  {
    "slug": "jollof-catch",
    "title": "Jollof Catch",
    "by": "Akintomiwa"
  },
  {
    "slug": "jollof-rush",
    "title": "Jollof Rush",
    "by": "Y_Aisha"
  },
  {
    "slug": "jollof-rush-3d",
    "title": "Jollof Rush 3d",
    "by": "Rebecca"
  },
  {
    "slug": "junction-spirit",
    "title": "Junction Spirit",
    "by": "Nurudeen"
  },
  {
    "slug": "kingpin-arena",
    "title": "Kingpin Arena",
    "by": "Ayo"
  },
  {
    "slug": "lagos-apocalypto",
    "title": "Lagos Apocalypto",
    "by": "Aghogho",
    "description": "A zombie survival game set in Lagos. It begins at 8:11 a.m. Fiction. Play it on start.ng."
  },
  {
    "slug": "lagos-bike-rush",
    "title": "Lagos Bike Rush",
    "by": "OBA"
  },
  {
    "slug": "lagos-crossing",
    "title": "Lagos Crossing",
    "by": "Senior"
  },
  {
    "slug": "lagos-hustle",
    "title": "Lagos Hustle",
    "by": "Kelvo"
  },
  {
    "slug": "lagos-legends-street-quest",
    "title": "Lagos Legends Street Quest",
    "by": "Triple",
    "description": "Explore the streets, find your style, and make your mark in Lagos Legends."
  },
  {
    "slug": "lagos-market-run",
    "title": "Lagos Market Run",
    "by": "Michelle"
  },
  {
    "slug": "lagos-run",
    "title": "Lagos Run",
    "by": "Enaye"
  },
  {
    "slug": "lanedash",
    "title": "Lanedash",
    "by": "Hamzat"
  },
  {
    "slug": "lantern-isles",
    "title": "Lantern Isles",
    "by": "Elisha"
  },
  {
    "slug": "ludo",
    "title": "Ludo",
    "by": "Hamzat",
    "description": "Ludo for 2 to 4 players: roll a six to start, race your four tokens round the board, send rivals home. Play friends with a code or play bots; the server rolls the die and checks every move."
  },
  {
    "slug": "mama-put-rush",
    "title": "Mama Put Rush",
    "by": "Stephen"
  },
  {
    "slug": "mami",
    "title": "Mami",
    "by": "Jubril"
  },
  {
    "slug": "mango-rush",
    "title": "Mango Rush",
    "by": "Bonnke",
    "description": "Mango Rush: ride the mango barge down the Lagos lagoon. Catch mangoes, dodge coconuts, last until midnight. A start.ng game."
  },
  {
    "slug": "mango-rush-beta",
    "title": "Mango Rush Beta",
    "by": "Bonnke",
    "description": "Mango Rush: ride the mango barge down the Lagos lagoon. Catch mangoes, dodge coconuts, last until midnight. A start.ng game."
  },
  {
    "slug": "market-dash",
    "title": "Market Dash",
    "by": "Michael Churchill"
  },
  {
    "slug": "market-rush-neon",
    "title": "Market Rush Neon",
    "by": "Naya"
  },
  {
    "slug": "maths-escape",
    "title": "Maths Escape",
    "by": "Sadiq"
  },
  {
    "slug": "murewa-gem-rush",
    "title": "Murewa Gem Rush",
    "by": "Meza"
  },
  {
    "slug": "naija-drafts",
    "title": "Naija Drafts",
    "by": "Aniyikaye"
  },
  {
    "slug": "naija-market-hustle",
    "title": "Naija Market Hustle",
    "by": "MiKEY"
  },
  {
    "slug": "naija-penalty",
    "title": "Naija Penalty",
    "by": "Obi"
  },
  {
    "slug": "naija-quickfire",
    "title": "Naija Quickfire",
    "by": "Adele"
  },
  {
    "slug": "naija-relic-hunter",
    "title": "Naija Relic Hunter",
    "by": "Solomon"
  },
  {
    "slug": "naija-roots",
    "title": "Naija Roots",
    "by": "Collins"
  },
  {
    "slug": "naira-run",
    "title": "Naira Run",
    "by": "Oluwalayomi"
  },
  {
    "slug": "nebula-dash",
    "title": "Nebula Dash",
    "by": "Oby"
  },
  {
    "slug": "neon-brick-break",
    "title": "Neon Brick Break",
    "by": "Jamal"
  },
  {
    "slug": "neon-drift",
    "title": "Neon Drift",
    "by": "Miracle"
  },
  {
    "slug": "neon-drift-arcade",
    "title": "Neon Drift Arcade",
    "by": "Covenant"
  },
  {
    "slug": "neon-orchard",
    "title": "Neon Orchard",
    "by": "chinaza"
  },
  {
    "slug": "neondrift",
    "title": "Neondrift",
    "by": "Ezekiel"
  },
  {
    "slug": "neondrift-arcade",
    "title": "Neondrift Arcade",
    "by": "Garuba"
  },
  {
    "slug": "nepa-light-up-lagos",
    "title": "Nepa Light Up Lagos",
    "by": "Oluwasanmi"
  },
  {
    "slug": "nightfall-arena",
    "title": "Nightfall Arena",
    "by": "Joshua"
  },
  {
    "slug": "noir-detective",
    "title": "Noir Detective",
    "by": "Divine"
  },
  {
    "slug": "okada-dodge",
    "title": "Okada Dodge",
    "by": "Abdul-Baaqi"
  },
  {
    "slug": "onithsa-market-run",
    "title": "Onithsa Market Run",
    "by": "Nwabueze Jeremiah Nwite"
  },
  {
    "slug": "orb-frenzy",
    "title": "Orb Frenzy",
    "by": "Rabiah"
  },
  {
    "slug": "orb-rush",
    "title": "Orb Rush",
    "by": "Muhammed"
  },
  {
    "slug": "orb-rush-mando",
    "title": "Orb Rush Mando",
    "by": "Michael"
  },
  {
    "slug": "orb-temple",
    "title": "Orb Temple",
    "by": "aphoe"
  },
  {
    "slug": "orbit-orchard",
    "title": "Orbit Orchard",
    "by": "khay"
  },
  {
    "slug": "orbit-run",
    "title": "Orbit Run",
    "by": "Nike"
  },
  {
    "slug": "orbital-run",
    "title": "Orbital Run",
    "by": "Precious"
  },
  {
    "slug": "oven-rush",
    "title": "Oven Rush",
    "by": "Hassanat"
  },
  {
    "slug": "owambe",
    "title": "Owambe",
    "by": "Victor"
  },
  {
    "slug": "penalty-kings-3d",
    "title": "Penalty Kings 3d",
    "by": "BabaD"
  },
  {
    "slug": "perihelion",
    "title": "Perihelion",
    "by": "Bishop"
  },
  {
    "slug": "pick-me",
    "title": "Pick Me",
    "by": "AI"
  },
  {
    "slug": "platformer-hopper",
    "title": "Platformer Hopper",
    "by": "Dhozie"
  },
  {
    "slug": "portal-pals",
    "title": "Portal Pals",
    "by": "Maryam"
  },
  {
    "slug": "puff-puff-catch",
    "title": "Puff Puff Catch",
    "by": "Cee"
  },
  {
    "slug": "pulse-runner",
    "title": "Pulse Runner",
    "by": "Pulse Analytics"
  },
  {
    "slug": "quantum-breaker",
    "title": "Quantum Breaker",
    "by": "HB"
  },
  {
    "slug": "quiz",
    "title": "Quiz",
    "by": "Hamzat",
    "description": "Make a quiz and play it live with up to 100 people: share the code, answer on your own screen, and faster right answers score more. The server keeps score."
  },
  {
    "slug": "rain-bucket",
    "title": "Rain Bucket",
    "by": "Cheerful"
  },
  {
    "slug": "relic-hunter",
    "title": "Relic Hunter",
    "by": "Chloe"
  },
  {
    "slug": "relic-rush",
    "title": "Relic Rush",
    "by": "Daniel"
  },
  {
    "slug": "relic-rush-3d",
    "title": "Relic Rush 3d",
    "by": "Noble"
  },
  {
    "slug": "riftsync",
    "title": "Riftsync",
    "by": "YUSUF"
  },
  {
    "slug": "robot-dodge",
    "title": "Robot Dodge",
    "by": "kenneth"
  },
  {
    "slug": "rooftop-rush",
    "title": "Rooftop Rush",
    "by": "Oluwafemi"
  },
  {
    "slug": "salone-run",
    "title": "Salone Run",
    "by": "CMN"
  },
  {
    "slug": "shard-survival",
    "title": "Shard Survival",
    "by": "Peter"
  },
  {
    "slug": "sharp-sharp",
    "title": "Sharp Sharp",
    "by": "Eddy"
  },
  {
    "slug": "showball",
    "title": "Showball",
    "by": "Trust Emmanuel"
  },
  {
    "slug": "sky-courier",
    "title": "Sky Courier",
    "by": "Cypher"
  },
  {
    "slug": "sky-hopper",
    "title": "Sky Hopper",
    "by": "Joshua"
  },
  {
    "slug": "sky-patrol",
    "title": "Sky Patrol",
    "by": "Joyboy"
  },
  {
    "slug": "skybund",
    "title": "Skybund",
    "by": "Tega"
  },
  {
    "slug": "sneaky-squad",
    "title": "Sneaky Squad",
    "by": "Nae"
  },
  {
    "slug": "space-rescue",
    "title": "Space Rescue",
    "by": "Chizoba"
  },
  {
    "slug": "splash-course",
    "title": "Splash Course",
    "by": "Pauline"
  },
  {
    "slug": "star-catcher",
    "title": "Star Catcher",
    "by": "Harshita"
  },
  {
    "slug": "star-dash",
    "title": "Star Dash",
    "by": "Ajibade"
  },
  {
    "slug": "star-dash-3d",
    "title": "Star Dash 3d",
    "by": "Nie"
  },
  {
    "slug": "star-dodge-by-jeffersdoherty",
    "title": "Star Dodge By Jeffersdoherty",
    "by": "Jeffers"
  },
  {
    "slug": "star-runner-3d",
    "title": "Star Runner 3d",
    "by": "mayowa"
  },
  {
    "slug": "star-sprint",
    "title": "Star Sprint",
    "by": "satar"
  },
  {
    "slug": "starfall-neon-survival",
    "title": "Starfall Neon Survival",
    "by": "Donald"
  },
  {
    "slug": "startng-city-dash",
    "title": "Startng City Dash",
    "by": "Zee"
  },
  {
    "slug": "startverse-neon-rush",
    "title": "Startverse Neon Rush",
    "by": "Divine"
  },
  {
    "slug": "streetpk-naija",
    "title": "Streetpk Naija",
    "by": "Salako"
  },
  {
    "slug": "style-sprint",
    "title": "Style Sprint",
    "by": "Sophia AI"
  },
  {
    "slug": "sumo-bump",
    "title": "Sumo Bump",
    "by": "Mo-Zoe"
  },
  {
    "slug": "sunshade-dodger",
    "title": "Sunshade Dodger",
    "by": "daniel"
  },
  {
    "slug": "suomi-sniper",
    "title": "Suomi Sniper",
    "by": "Salako"
  },
  {
    "slug": "suwe",
    "title": "Suwe",
    "by": "The Product Girlie"
  },
  {
    "slug": "suya-catcher",
    "title": "Suya Catcher",
    "by": "Vivian"
  },
  {
    "slug": "temple-runner",
    "title": "Temple Runner",
    "by": "Elsie"
  },
  {
    "slug": "tesla-skyrun",
    "title": "Tesla Skyrun",
    "by": "Favour"
  },
  {
    "slug": "testing-player-pick-me",
    "title": "Testing Player Pick Me",
    "by": "AI"
  },
  {
    "slug": "the-hooded-swordsman",
    "title": "The Hooded Swordsman",
    "by": "Dave"
  },
  {
    "slug": "the-lost-library",
    "title": "The Lost Library",
    "by": "Gracie"
  },
  {
    "slug": "tic-tac-toe",
    "title": "Tic Tac Toe",
    "by": "Hamzat",
    "description": "Tic-tac-toe on start.ng: play a friend with a link, find a match, or play the bot. The server runs the rules, so nobody can cheat."
  },
  {
    "slug": "tower-stack",
    "title": "Tower Stack",
    "by": "David"
  },
  {
    "slug": "tower-tapper",
    "title": "Tower Tapper",
    "by": "David"
  },
  {
    "slug": "treasure-isle",
    "title": "Treasure Isle",
    "by": "Irfat"
  },
  {
    "slug": "turbo-race",
    "title": "Turbo Race",
    "by": "Paul"
  },
  {
    "slug": "vault-of-yankari",
    "title": "Vault Of Yankari",
    "by": "Lanfear"
  },
  {
    "slug": "volcano",
    "title": "Volcano",
    "by": "Jose"
  },
  {
    "slug": "wheelie-wahala",
    "title": "Wheelie Wahala",
    "by": "bobbysam",
    "description": "A 3D stunt bike racer for start.ng. Flip, loop and race across the desert as your own start.ng character."
  },
  {
    "slug": "whimsy-wick",
    "title": "Whimsy Wick",
    "by": "Kanyinsola",
    "description": "Whimsy Wick, a cozy magical platformer set in a sleeping kitchen. Guide Ghee, gather coins and gems, and light every wick."
  },
  {
    "slug": "whot",
    "title": "Whot",
    "by": "Hamzat",
    "description": "Whot, the Nigerian card game, for 2 to 4 players. Play friends with a code, or play bots; the server deals, shuffles and checks every card, so nobody can peek or cheat."
  },
  {
    "slug": "word-market",
    "title": "Word Market",
    "by": "Arnold"
  },
  {
    "slug": "zedu-dash",
    "title": "Zedu Dash",
    "by": "Ife"
  },
  {
    "slug": "zobo-sort",
    "title": "Zobo Sort",
    "by": "Aishajoda"
  }
];

// Site-wide count used for the see-all link and the A-to-Z summary.
export const communityCount = communityGames.length;

// Title-cases a game slug exactly the way start.ng renders game names:
// first letter of each hyphen-word up, the rest lowercase.
// "cork-fc" -> "Cork Fc", "buggy-bash-3d" -> "Buggy Bash 3d" (verified against
// the live site's A-to-Z list render).
export function titleCaseFromSlug(slug) {
  if (!slug) return ''
  return slug
    .split('-')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word))
    .join(' ')
}
