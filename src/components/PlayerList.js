import { css } from "goober";
import { h } from "preact";

export function PlayerList({ players, showAll, onShowAllClick }) {
  const styles = css`
    width: 80%;
    min-height: 10rem;
    .min-height {
      min-height: 30rem;
    }
    .me {
      background-color: rgba(0, 0, 0, 0.075);
      font-weight: 700;
    }
    .my-rank {
      font-weight: 600;
      display: flex;
      font-size: 1rem;
      justify-content: center;
      text-transform: uppercase;
    }
    .show-all {
      float:right;
    }
  `;

  if (!players || players.length === 0)
    return (
      <div class={styles}>
        <p class="placeholder-glow min-height">
          <span class="placeholder col-12 min-height" />
        </p>
      </div>
    );
  return (
    <div class={styles}>
      <div>
    <div class="form-check form-switch form-check-reverse">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckReverse" checked={showAll} onClick={onShowAllClick} />
      <label class="form-check-label" for="flexSwitchCheckReverse">Show all</label>
    </div>
    </div>
      <table class="table">
        <thead class="table-dark ">
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col" style={{ maxWidth: "4rem" }}>
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr class={`${player.me ? "me" : ""}`} key={player.name}>
              <th scope="row">{player.rank}</th>
              <td>{player.name}</td>
              <td>{player.highScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
