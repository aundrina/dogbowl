import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllPlayers() {
      const players = await fetchAllPlayers();
      setPlayers(players);
    }
    getAllPlayers();
  }, []);
  console.log(players);

  return (
    <div>
      <h4>players:</h4>

      {players.map((player) => {
        return (
          <div>
            <img
              style={{
                height: "200px",
              }}
              src={player.imgUrl}
            />
            <h4>{player.name}</h4>
            <button
              onClick={() => {
                navigate("/players/${player.id}");
              }}
            >
              See Details
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default AllPlayers;
