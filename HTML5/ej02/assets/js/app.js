window.onload = function(){
	var canplay = false,
		player = document.getElementById('player'),
		volume = document.getElementById('volume'),
		play   = document.getElementById('play'),
		pause  = document.getElementById('pause'),
		stop   = document.getElementById('stop');

	player.addEventListener('canplay', function(e){
		volume.value = player.volume * 100;
		progress.value = 0;
		canplay = true;
	});

	player.addEventListener('timeupdate', function(e){
		progress.value = player.currentTime/player.duration;
	});

	player.addEventListener('click', function(e){
		if (canplay && player.paused) {
			player.play();
		} else {
			player.pause();
		}
	});

	play.addEventListener('click', function(){
		if (canplay && player.pause) {
			player.play();
		}
	});
	
	pause.addEventListener('click', function(){
		if (canplay) {
			player.pause();
		}
	});

	stop.addEventListener('click', function(){
		if (canplay) {sessio
			player.pause();
			player.currentTime = 0;
		}
	});
};