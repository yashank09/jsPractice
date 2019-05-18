window.addEventListener("keydown", function(e) {
  const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
});
