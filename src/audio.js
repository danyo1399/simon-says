import { Howl } from 'howler';
import { audio1Src, audio2Src, audio3Src, audio4Src, gameOverSrc } from './audioFiles';
import { browserInfo } from './browser';

const {iOS}= browserInfo;
let sounds;
// shouldnt initialise sounds until after first user interaction.
// Chrome warning
export function initAudio() {
    if(sounds) return;
    const gameOverSound = new Howl({
        src: [gameOverSrc],
        html5: iOS,
        format: "mp3",
      });
      
      let sound1 = new Howl({
        src: [audio1Src],
        html5: iOS,
        format: "mp3",
      });
      
      let sound2 = new Howl({
        src: [audio2Src],
        html5: iOS,
        format: "mp3",
      });
      
      let sound3 = new Howl({
        src: [audio3Src],
        html5: iOS,
        format: "mp3",
      });
      
      let sound4 = new Howl({
        src: [audio4Src],
        html5: iOS,
        format: "mp3",
      });      
      sounds = {sound1, sound2, sound3, sound4, gameOverSound};
}

export function playGameOverSound() {
    sounds.gameOverSound.play()
}
  
  function playAsync(sound) {
    const p = new Promise((resolve) => {
      sound.once("end", resolve);
      sound.play();
    });
  
    return p;
  }
  
  export function playAudioAsync(position) {
    switch (position) {
      case 1: {
        return playAsync(sounds.sound1);
      }
      case 2: {
        return playAsync(sounds.sound2);
      }
      case 3: {
        return playAsync(sounds.sound3);
      }
      case 4: {
        return playAsync(sounds.sound4);
      }
    }
  }