$(document).ready(function() {
  var dayOfWeek = 0;
  var daysWorked = 0;
  var money = 0;
  var wages = 100;
  
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
  
  $('#day, #choice').hide()
  $('#wage').html('(+ &pound;'+wages+')')
  
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
    nextDay()
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
    nextDay()
  }
  
  function randomChoice(){
    c = choices[Math.floor(Math.random()*choices.length)]
    return c
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
    $('.option').remove();
    $('#total').text(money)
    $('#weekday').text(dayOfWeek)
    $('#day, #choice').hide()
    $('.action').show()
  }
});