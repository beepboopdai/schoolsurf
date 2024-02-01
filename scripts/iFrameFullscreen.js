const iframe = document.getElementById('ultraviolet');

  // Function to toggle fullscreen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch(err => {
        alert(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }