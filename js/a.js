rpg.chooseCharacter = function() {
    $('#startScreen').fadeOut();
    $('#chooseCharacter').fadeIn();
}

rpg.startGame = function(gender) {
    $('#chooseCharacter').fadeOut();
    $('#gameScreen').fadeIn();
    if(gender === 'boy') {
        $("#gameScreen .boy").show();
    } else {
        $("#gameScreen .girl").show();
    }
}

