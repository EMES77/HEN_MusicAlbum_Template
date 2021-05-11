/*
Hic et Nunc HTML Audio Player HTML Template by ©cryptemes

Version 2.02

Version 1 was programmed for ©stereohopper and released on hicetnunc.xyz as OBJKT#15472 on March 28, 2021
hicetnunc.xyz/objkt/15472

The audio-files in this template are made by ©stereohopper - twitter.com/stereohopper


Copyright March 2021 - twitter.com/cryptemes

We appreciate you getting in touch with us if you use this template for your own project. 
But you don't have to. 
However, please leave this Note untouched.
*/
$(document).ready(function () {
  //variables
  var song;
  var playhead = $('#playhead');
  var playing = true;

  // initialize playhead
  playhead.slider({
    range: 'min',
    min: 0,
    max: 100,
    step: 0.001,
    start: function () {},
    slide: function (event, ui) {
      song.currentTime = ui.value;
    },
    stop: function () {}
  });


  //functions
  function initAudio(elem) {
    var url = elem.attr('audiourl');
    //video variables
    var curvideo = $('#video').attr('src');
    var videourl = elem.attr('videourl');


    var title = elem.text();

    // display title
    $('.CRY_player .title').text(title);

    //if there is a videourl-tag in the track information, show that video. If not show Cover-Video
    if (videourl) {
      //prevent Cover image from flashing by setting the BG of CRY_player to black
      $('.CRY_player').addClass('black');
      $('#video').attr('src', videourl);
    } else if (curvideo != 'Cover.mp4') {
      $('.CRY_player').removeClass('black');
      $('#video').attr('src', "Cover.mp4");
    }

    song = new Audio(url);

    song.addEventListener('timeupdate', function () {

      var curtime = song.currentTime;
      playhead.slider('option', 'value', curtime);
    });


    //automatically play next song
    song.addEventListener('ended', function () {

      stopAudio();
      var next = $('.playlist li.active').next();
      if (next.length == 0) {
        next = $('.playlist li:first-child');
      }
      playhead.slider('option', 'value', 0);
      initAudio(next);
      song.oncanplay = function () {
        playAudio();
      }

    });


    $('.playlist li').removeClass('active');
    elem.addClass('active');

    return true;
  }

  function playAudio() {

    song.play();
    playing = true;
    playhead.slider("option", "max", song.duration);

    $('.play').addClass('hidden');
    $('.pause').addClass('visible');

  }


  function stopAudio() {
    song.pause();
    playing = false;
    $('.play').removeClass('hidden');
    $('.pause').removeClass('visible');
  }

  // click play
  $('.play').click(function (e) {
    e.preventDefault();

    playAudio();
  });

  // click pause
  $('.pause').click(function (e) {
    e.preventDefault();

    stopAudio();
  });


  //register keypress 
  $('body').keyup(function (e) {
    // spacebar: play/stop
    if (e.keyCode == 32) {
      if (playing == true) {
        stopAudio();
      } else if (playing == false) {
        playAudio();
      }
    }
    //right arrow: next
    if (e.keyCode == 39) {
      stopAudio();

      var next = $('.playlist li.active').next();
      if (next.length == 0) {
        next = $('.playlist li:first-child');
      }
      initAudio(next);
      song.oncanplaythrough = function () {
        playAudio();
      }

    }
    //left arrow: previous
    if (e.keyCode == 37) {
      stopAudio();

      var prev = $('.playlist li.active').prev();
      if (prev.length == 0) {
        prev = $('.playlist li:last-child');
      }
      initAudio(prev);
      song.oncanplaythrough = function () {
        playAudio();
      }

    }
  });


  // click forward
  $('.fwd').click(function (e) {
    e.preventDefault();

    stopAudio();

    var next = $('.playlist li.active').next();
    if (next.length == 0) {
      next = $('.playlist li:first-child');
    }
    initAudio(next);
    song.oncanplaythrough = function () {
      playAudio();
    }

  });

  // click rewind
  $('.rew').click(function (e) {
    e.preventDefault();

    stopAudio();

    var prev = $('.playlist li.active').prev();
    if (prev.length == 0) {
      prev = $('.playlist li:last-child');
    }
    initAudio(prev);
    song.oncanplaythrough = function () {
      playAudio();
    }

  });

  // show playlist
  $('.pl').click(function (e) {
    e.preventDefault();

    $('.playlist').addClass('showpl');
  });

  // hide playlist
  $('.plc').click(function (e) {
    e.preventDefault();

    $('.playlist').removeClass('showpl');
  });

  // playlist elements - click
  $('.playlist li').click(function () {
    stopAudio();
    initAudio($(this));
    song.oncanplaythrough = function () {
      playAudio();
    }

  });

  // initialization - first element in playlist
  initAudio($('.playlist li:first-child'));


  // idle timer - hide UI, except progress bar after 5 seconds of inactivity
  var interval = 1;

  setInterval(function () {
    if (interval == 5) {
      /* if intervall reaches 5 the user is inactive hide element/s */
      $('.CRY_controls').addClass('hide_controls');
      $('.pl').addClass('hide_pl'); 
      $('.playlist').removeClass('showpl');
      interval = 1;
    }
    interval = interval + 1;
    console.log(interval);
  }, 1000);

  $(document).bind('mousemove keypress', function () {
    /* on mousemove or keypressed show the hidden input (user active) */
    $('.CRY_controls').removeClass('hide_controls');
    $('.pl').removeClass('hide_pl'); 
    interval = 1;
  });
});
