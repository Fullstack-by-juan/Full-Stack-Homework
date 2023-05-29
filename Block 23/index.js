
const containerElement = document.getElementById('pokemon-container');
const addPokemonButton = document.getElementById('add-pokemon');

// Fetch and display multiple Pokemon
const fetchAndDisplayPokemon = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await response.json();
    const pokemonList = data.results;

    // Iterate over the list of Pokemon
    for (const pokemon of pokemonList) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('pokemon-card');
      cardElement.id = pokemon.url;

      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();

      const nameElement = document.createElement('h2'); 
      nameElement.textContent = pokemonData.name;
      nameElement.id = `name-${pokemon.url}`;

      const imageElement = document.createElement('img');
      imageElement.src = pokemonData.sprites.front_default;
      imageElement.alt = pokemonData.name;
      imageElement.id = `image-${pokemon.url}`;

      const detailsButton = document.createElement('button');
      detailsButton.classList.add('details-button');
      detailsButton.textContent = 'See details';
      detailsButton.id = `details-button-${pokemon.url}`;

      detailsButton.addEventListener('click', async () => {
        await fetchSinglePlayer(pokemon.url);
      });

       // Append the elements to the card and container
      cardElement.appendChild(nameElement);
      cardElement.appendChild(imageElement);
      cardElement.appendChild(detailsButton);
      containerElement.appendChild(cardElement);
    }

      // Function to add a random Pokémon
    const addPlayer = async () => {
      const randomPokemonId = Math.floor(Math.random() * 898) + 1;
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;
      await fetchSinglePlayer(pokemonUrl);
    };

    // Add event listener to the "Add Pokémon" button
    addPokemonButton.addEventListener('click', addPlayer);
  } catch (error) {
    console.error('Main Fetch Error:', error);
  }
};

// Call the fetchAndDisplayPokemon function
fetchAndDisplayPokemon();

// Function to fetch details for a single player
const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(playerId);
    const data = await response.json();

    // Process the retrieved player data
    console.log(data);
    displayPlayerDetails(data, playerId);
  } catch (err) {
    console.error(`Oh no, trouble fetching player #${playerId}!`, err);
  }
};

// Function to display the player details in a popup
const displayPlayerDetails = (playerData, playerId) => {
  const popupElement = document.createElement('div');
  popupElement.classList.add('popup');
  popupElement.id = `popup-${playerId}`;

  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.textContent = '×';

  const nameElement = document.createElement('h2');
  nameElement.textContent = playerData.name;
  nameElement.id = `name-${playerId}`;

  const typeElement = document.createElement('p');
  typeElement.textContent = `Type: ${playerData.types[0].type.name}`;
  typeElement.id = `type-${playerId}`;

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    removePlayer(playerId);
    popupElement.remove();
  });

  closeButton.addEventListener('click', () => {
    popupElement.remove();
  });

  // Append elements to the popup
  popupElement.appendChild(closeButton);
  popupElement.appendChild(nameElement);
  popupElement.appendChild(typeElement);
  popupElement.appendChild(removeButton);

  document.body.appendChild(popupElement);
};

// Function to remove a player from the container
const removePlayer = (playerId) => {
  const playerElement = document.getElementById(playerId);
  if (playerElement) {
    playerElement.remove();
  }
};

  
