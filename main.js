$(document).ready(function () {
    /*const resize = () => {
     console.log('resize')
    }
    window.addEventListener('resize', resize);*/

    //variables
    var song;
    var playhead = $('#playhead');
    
    
    // initialize playhead
    playhead.slider({
        range: 'min',
        min: 0, 
        max: 100,
        step: 0.001,
        start: function(event,ui) {},
        slide: function(event, ui) {
            
            song.currentTime = ui.value;
        },
        stop: function(event,ui) {}
    });
    
    
    //functions
    function initAudio(elem) {
        var url = elem.attr('audiourl');
        var title = elem.text();

        $('.CRY_player .title').text(title);

        song = new Audio('data/' + url);
        
        song.addEventListener('timeupdate',function (){
            
            var curtime = song.currentTime;        
            playhead.slider('option', 'value', curtime);
        });
        
       
        $('.playlist li').removeClass('active');
        elem.addClass('active');
    }
    
    function playAudio() {
        song.play();
        
        playhead.slider("option", "max", song.duration);
        
        $('.play').addClass('hidden');
        $('.pause').addClass('visible');
        
        autoPlaylist();
    }
    
    function autoPlaylist(){
        //automatically play next song
        song.addEventListener('ended',function(){
            stopAudio();
            var next = $('.playlist li.active').next();
            if (next.length == 0) {
                next = $('.playlist li:first-child');
            }
            playhead.slider('option', 'value',0);
            initAudio(next);
            setTimeout(function() {
                playAudio();
            }, 200);
            
        });
    }
    
    function stopAudio() {
        song.pause();

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

    // click forward
    $('.fwd').click(function (e) {
        e.preventDefault();

        stopAudio();

        var next = $('.playlist li.active').next();
        if (next.length == 0) {
            next = $('.playlist li:first-child');
        }
        initAudio(next);
         setTimeout(function() {
                playAudio();
            }, 200);
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
         setTimeout(function() {
                playAudio();
            }, 200);
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
        playAudio()
    });

    // initialization - first element in playlist
    initAudio($('.playlist li:first-child'));

    
});
