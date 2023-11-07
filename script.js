$(function () {
    const soundMap = {
      q: "heater1",
      w: "heater2",
      e: "heater3",
      a: "heater4",
      s: "clap",
      d: "open-hh",
      z: "kick-n-hat",
      x: "kick",
      c: "closed-hh"
    };
  
    $(".drum").click(function () {
      const soundKey = $(this).data("sound"); //get sound attribute
      playSound(soundKey);
      flashElement($(this));
    });
  
    $(document).on("keydown", function (event) {
      const soundKey = soundMap[event.key];
      if (soundKey) {
        playSound(soundKey);
        flashElement($(`[data-sound="${soundKey}"]`));
      }
    });
  
    function playSound(soundKey) {
      const audioElement = document.getElementById(soundKey);
      if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
        updateDisplay(soundKey);
      }
    }
  
    function flashElement($element) {
      $element.addClass("default-color");
      setTimeout(function () {
        $element.removeClass("default-color");
      }, 200);
    }
    function updateDisplay(soundKey) {
      $("#display").text(soundKey);
    }
  });
  