const url =
  "https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-PT-WEB-FT/players";

export async function fetchAllPlayers() {
  const response = await fetch(url);
  const result = await response.json();
  return result.data.players;
}
