rpg.chooseCharacter = function() {
  $('#startScreen').hide();
  $('#chooseCharacter').show();
}
rpg.startGame = function(gender) {
    createCookie('character', gender)
  
    $('#startScreen').hide();
    $('#chooseCharacter').hide();
    $('#gameScreen').fadeIn();
    if(gender === 'boy') {
        $("#gameScreen .boy").show();
    } else {
        $("#gameScreen .girl").show();
    }

  var dayOfWeek =   parseInt(readCookie('dayOfWeek'))   || 0;
  var daySection =  parseInt(readCookie('daySection'))  || 1;
  var daysWorked =  parseInt(readCookie('daysWorked'))  || 0;
  var money =       parseInt(readCookie('money'))       || 200;
  var wages =       parseInt(readCookie('wages'))       || 100;
  
  var daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
  var timesOfTheDay = ['7:00am','1:00pm','7:00pm']
  
  tick();
  
  $('.option').live('click',function(){
    value = parseInt($(this).data().value);
    money += value;
    $('#choice').fadeOut();
    $('#ok').fadeIn();
    if(value >= 0) {
        $('#feedback .success').fadeIn();
    } else {
        $('#feedback .error').fadeIn();
    }
  });

  $('#ok').live('click',function(){
    nextPartOfDay();
  });
  
  $('#end').click(function(){
    eraseCookies()
    $('#startScreen').show();
    $('#chooseCharacter').hide();
    $('#gameScreen').hide();
  });

  function work(){
    daysWorked += 1;
    money += wages;
    nextPartOfDay()
  }
  
  function randomChoice(){
    c = rpg.choices[Math.floor(Math.random()*rpg.choices.length)];
console.log(c);
    return c
  }
  
  function nextPartOfDay(){
    daySection += 1;
    tick();
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
    $('#feedback .success, #feedback .error, #ok').fadeOut();
    $('#total').text(money)
    $('#weekday').text(daysOfTheWeek[dayOfWeek])
    $('#day, #choice').hide()
    $('.action').show()
    $('#time').text(timesOfTheDay[daySection -1])
    $('#choice').fadeIn();
    $('#day').hide();
    choice = randomChoice()
    $('#choice .desc').text(choice.title)
    $.each(choice.options, function(i,option){
      html = "<div class='row'><div class='twelve columns'><a class='option white radius nice button' id='option"+i+"' data-value='"+option.value+"'>"+option.title+"</a></div></div>";
      $('#choice .desc').after(html);
        if(option.value >= 0) {
            $('#feedback .success').html(option.feedback);
        } else {
            $('#feedback .error').html(option.feedback);
        }
    })

    eraseCookies()

    createCookie('dayOfWeek',   dayOfWeek) 
    createCookie('daySection',  daySection)
    createCookie('daysWorked',  daysWorked)
    createCookie('money',       money)     
    createCookie('wages',       wages)     

  }
  
  function eraseCookies(){
    eraseCookie('dayOfWeek')
    eraseCookie('daySection')
    eraseCookie('daysWorked')
    eraseCookie('money')
    eraseCookie('wages')
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

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}


var character = readCookie('character')
console.log(character)
if(character){
  rpg.startGame(character);
}

$("#startScreen a.button").show();
