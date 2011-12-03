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
  var dayOfWeek = 0;
  var daySection = 1;
  var daysWorked = 0;
  var money = 200;
  var wages = 100;
  
  var daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  var timesOfTheDay = ['7:00am','1:00pm','7:00pm']
  
  tick();
  
  $('.option').live('click',function(){
    value = parseInt($(this).data().value)
    money += value
    nextPartOfDay();
  });
  
  function choose(){
  }
  
  function work(){
    daysWorked += 1;
    money += wages;
    nextPartOfDay()
  }
  
  function randomChoice(){
    c = rpg.choices[Math.floor(Math.random()*rpg.choices.length)]
    return c
  }
  
  function nextPartOfDay(){
    daySection += 1;
    tick()
    switch(daySection){
      case 1:
        console.log('morning')
        // tick()
        break;
      case 2:
        console.log('daytime')
        // tick()
        break;
      case 3:
        console.log('evening')

        break;
      default:
        nextDay();
        break;
    }
  }
  
  function tick(){
    $('.option').remove();
    $('#total').text(money)
    $('#weekday').text(daysOfTheWeek[dayOfWeek])
    $('#day, #choice').hide()
    $('.action').show()
    $('#time').text(timesOfTheDay[daySection -1])
    $('#choice').show();
    $('#day').hide();
    choice = randomChoice()
    $('#choice .desc').text(choice.title)
    $.each(choice.options, function(i,option){
      $('#choice .desc').after("<a href='#' class='option' data-value='"+option.value+"'>"+option.title+ '('+option.value+")</a>")
    })
  }
  
  function nextDay(){
    dayOfWeek += 1;
    if(dayOfWeek === 7){
      dayOfWeek = 1
      daysWorked = 0
      $('.work').show();
    } 
    if(daysWorked > 4){
      $('.work').hide();
    }
    daySection = 1;
    tick();
  }
};
