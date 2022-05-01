import { events } from "../events";

import { css } from "goober";
import { useEffect, useState, useRef } from "preact/hooks";
import { updatePlayerNameAsync, changePlayerIdAsync } from "../data";
import { usePlayer } from "../hooks";
import { h } from "preact";

export function UpdatePlayerModal() {
  const eleRef = useRef();
  const bsModalRef = useRef();
  const usernameRef = useRef();
  const [playerName, setPlayerName] = useState("");

  const [newUserId, setNewUserId] = useState("");
  const [saving, setSaving] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [saveError, setSaveError] = useState();
  const [isChangingId, setChangeId] = useState(false);
  const player = usePlayer();
  const nameTooLong = playerName.length > 15;
  const nameMissing = !playerName.trim();
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const ele = eleRef.current;
    bsModalRef.current = window.bootstrap.Modal.getOrCreateInstance(
      eleRef.current
    );
    const hide = () => {
      setPlayerName("");
    };
    const show = () => {
      setPlayerName(player.name);
      setShowErrors(false);
      setNewUserId("");
      setChangeId(false);
      setSaving(false);
      setTimeout(() => usernameRef?.current?.select(), 500);
    };

    ele.addEventListener("hidden.bs.modal", hide);
    ele.addEventListener("show.bs.modal", show);
    return () => {
      ele.removeEventListener("hidden.bs.modal", hide);
      ele.removeEventListener("show.bs.modal", show);
    };
  }, [player.name]);

  async function changePlayerNameAsync(name) {
    try {
      setSaveError(null);
      await updatePlayerNameAsync(name);
    } catch (err) {
      setSaveError(err);
      throw err;
    }
  }

  async function saveAsync(e) {
    e.preventDefault();
    setShowErrors(true);
    await setSaving(true);
    try {
      if (isChangingId) {
        await changePlayerIdAsync(newUserId);
      } else {
        if (nameTooLong || nameMissing) return;

        await changePlayerNameAsync(playerName);
      }

      bsModalRef.current.hide();
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  }

  const styles = css`
    .validation-error {
      color: red;
    }
    .user-id {
      margin-bottom: 1rem;
      font-style: italic;
      button {
        color: blue;
      }
    }
  `;
  return (
    <div
      ref={eleRef}
      class={`modal fade ${styles}`}
      id="change-player-name-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="change-player-name-label"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <form onSubmit={saveAsync}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="change-player-name-label">
                {isChangingId ? "Import a user id" : "Change Your Username"}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div class="modal-body">
              {!isChangingId && (
                <div class="form-group user-id">
                  <div>User Id: {player.id}</div>
                  <button type="button" onClick={() => setChangeId(true)}>
                    change
                  </button>
                </div>
              )}
              {isChangingId ? (
                <div class="form-group">
                  <label for="input-user-id">User Id To Import</label>
                  <input
                    type="text"
                    class="form-control"
                    id="input-user-id"
                    value={newUserId}
                    onChange={(x) => setNewUserId(x.target.value)}
                    placeholder="Enter new user id"
                  />
                </div>
              ) : (
                <div class="form-group">
                  <label for="input-username">Username</label>
                  <input
                    ref={usernameRef}
                    type="text"
                    class="form-control"
                    id="input-username"
                    value={playerName}
                    onBlur={() => setShowErrors(true)}
                    onChange={(x) =>
                      setPlayerName(x.target.value) || setSaveError(null)
                    }
                    placeholder="Enter username"
                  />
                  {showErrors && (
                    <div>
                      {nameTooLong && (
                        <small class="validation-error">
                          name be 15 chars or less
                        </small>
                      )}
                      {saveError?.status === 409 && (
                        <small class="validation-error">Username Taken</small>
                      )}
                      {nameMissing && (
                        <small class="validation-error">name is required</small>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                disabled={saving}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" disabled={saving} class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
