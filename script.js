$(document).ready(function () {

    var audio = $("audio")[0];
  
    var countTime = 25;
    var breakTime = 5;
    var pause = false;
    var seconds = 0;
    var minutes = 25;
    var counting;
  
    $('.timer').html(minutes + ":00");
  
    function countdown() {
  
  
      if (minutes === 0 && seconds === 1) {
        audio.play();
      }
  
      if (minutes === 0 && seconds === 0) {
        if ($('.title').text() === 'Session') {
          $('.title').text('Break');
          minutes = breakTime;
          $('.timer').html(minutes + ":0" + seconds);
        } else
  
        if ($('.title').text() === 'Break') {
          $('.title').text('Session');
          minutes = countTime;
          $('.timer').html(minutes + ":0" + seconds);
        }
      } else
      {
        if (seconds === 0) {seconds = 60;minutes--;}
        seconds--;
        if (seconds < 10) {$('.timer').html(minutes + ":0" + seconds);} else
        {
          $('.timer').html(minutes + ":" + seconds);
        }
      }
    }
  
    $('#minusBreak').click(function () {
      if (pause === false) {
        if (breakTime > 1) {breakTime--;$("#break").html(breakTime);$('.title').text('Session');$(".timer").html(countTime + ":00");
          seconds = 0;
          minutes = countTime;}
      }
    });
    $('#plusBreak').click(function () {
      if (pause === false) {
        breakTime++;$("#break").html(breakTime);
        $('.title').text('Session');
        $(".timer").html(countTime + ":00");
        seconds = 0;
        minutes = countTime;
      }
    });
    $('#minusCount').click(function () {
      if (pause === false) {
        if (countTime > 1) {countTime--;$("#count").html(countTime);$(".timer").html(countTime + ":00");$('.title').text('Session');
        }
        seconds = 0;
        minutes = countTime;
      }
    });
    $('#plusCount').click(function () {
      if (pause === false) {
        countTime++;$("#count").html(countTime);
        $(".timer").html(countTime + ":00");
        $('.title').text('Session');
  
        seconds = 0;
        minutes = countTime;
      }
    });
  
    $('.clock').click(function () {
  
      if (pause === false) {
        counting = setInterval(countdown, 1000);
        pause = true;
      } else
      if (pause === true) {
        clearInterval(counting);
        pause = false;
      }
    });
  });