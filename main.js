// Example game data (you can fetch this from an API or a server)
const games = [
    {
        name: "Nut Game",
        url: "https://nutsimulator.github.io/",
        image: "https://github.com/ethantheDeveloper220/nutgame-cookie-copy/blob/master/images/icon.png?raw=true"
    },
    {
        name: "RocketBot Royale",
        url: "https://rocketbotroyale-5.onrender.com/",
        image: "https://static.wixstatic.com/media/d0c5be_340d3a8d80104f39b07a297380a979a0~mv2.png/v1/fill/w_560,h_314,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/rbr-logo.png"
    }
    {
        name: "retro bowl",
        url: "https://asgfasgasgags.github.io/files/RetroBowl/",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bf/Retro_Bowl_cover.png"
    },
];

// Function to create game card elements dynamically
function createGameCard(game) {
    const gameCard = document.createElement("a");
    gameCard.href = "javascript:void(0)";
    gameCard.classList.add("game-card");
    gameCard.onclick = () => showGame(game.url);

    const gameImage = document.createElement("img");
    gameImage.src = game.image;
    gameImage.alt = game.name;

    const gameTitle = document.createElement("h3");
    gameTitle.innerText = game.name;

    gameCard.appendChild(gameImage);
    gameCard.appendChild(gameTitle);

    return gameCard;
}

// Function to display games in the DOM
function displayGames() {
    const gameList = document.getElementById("gameList");

    // Clear existing game list (if any)
    gameList.innerHTML = "";

    // Loop through the games array and create the game cards
    games.forEach(game => {
        const gameCard = createGameCard(game);
        gameList.appendChild(gameCard);
    });
}

// Call the displayGames function when the page loads
window.onload = displayGames;

// Placeholder for showGame function to handle game launch (can be customized)
function showGame(url) {
    window.open(url, "_blank");
}
