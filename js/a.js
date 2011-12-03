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
  var money = 0;
  var wages = 100;
  
  var daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  var timesOfTheDay = ['7:00am','1:00pm','7:00pm']
  
  var choices = [
    {'title': "You're phone is broken and you need to buy a new one, which will you choose?",
      'options': [{
        'title': 'Used Nokia',
        'value': -20},
        {'title': 'iPhone 4S',
          'value': -400}
      ]
    },
    {'title': "School holidays are coming up, where will you take your kids",
      'options': [{
        'title': 'Butlins',
        'value': -100
      },{
          'title': 'Disneyland',
          'value': -1000
      }
      ]
    }
  ]
  
  tick()
  
  $('.action').click(function(){
    $('.action').hide()
    $('#day').show()
  });
  
  $('.work').click(function(){
    work()
  });
  
  $('.choice').click(function(){
    choose()
  });
  
  $('.option').live('click',function(){
    value = parseInt($(this).data().value)
    money += value
    nextPartOfDay()
  });
  
  function choose(){
    $('#choice').show();
    $('#day').hide();
    choice = randomChoice()
    $('#choice .desc').text(choice.title)
    $.each(choice.options, function(i,option){
      $('#choice .desc').after("<a href='#' class='option' data-value='"+option.value+"'>"+option.title+ '('+option.value+")</a>")
    })
  }
  
  function work(){
    daysWorked += 1;
    money += wages;
    nextPartOfDay()
  }
  
  function randomChoice(){
    c = choices[Math.floor(Math.random()*choices.length)]
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
