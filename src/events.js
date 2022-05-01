const prefix = `SS`;
export const events = {
    playerUpdated: `${prefix}:PLAYER_UPDATED`,
    newUserCreated: `${prefix}:NEW_USER_CREATED`,
    loaded: `${prefix}:LOADED`,
    playersLoaded: `${prefix}:PLAYERS_LOADED`,
  };
  
  export function dispatchEvent(type) {
    console.log('dispatch event', type)
    window.dispatchEvent(new Event(type, { bubbles: true, cancelable: false }));
  }