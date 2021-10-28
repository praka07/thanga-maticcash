(function ($) {

  "use strict";

  /* 
     CounterUp
     ========================================================================== */
  $('.counter').counterUp({
    time: 500
  });

  /*
     Sticky Nav
     ========================================================================== */
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('.header-top-area').addClass('menu-bg');
    } else {
      $('.header-top-area').removeClass('menu-bg');
    }
  });

  /* 
     Back Top Link
     ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });

  $('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  /* 
     One Page Navigation & wow js
     ========================================================================== */
  //Initiat WOW JS
  new WOW().init();

  // one page navigation 
  $('.main-navigation').onePageNav({
    currentClass: 'active'
  });

  $(window).on('load', function () {

    $('body').scrollspy({
      target: '.navbar-collapse',
      offset: 195
    });

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.fixed-top').addClass('menu-bg');
      } else {
        $('.fixed-top').removeClass('menu-bg');
      }
    });

  });
  /*
   Page Loader
   ========================================================================== */
  $(window).on('load', function () {
    "use strict";
    $('#loader').fadeOut();
  });

  $('.timeline').timeline({
    forceVerticalMode: 800,
    mode: 'horizontal',
    visibleItems: 5
  });

  /*
	
	
   Page Loader
   ========================================================================== */

  const data1 = {
    labels: [
      "Product Development",
      "IDO & Private Sale",
      "Bounty And Loyalty Program",
      "Marketing And Partnerships",
      "Team And Advisor"
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [22, 25, 21, 15, 17],
      backgroundColor: [
        '#FF6384',
        '#FF9F40',
        '#FFCD56',
        '#4BC0C0',
        '#36A2EB'

      ],
      hoverOffset: 4
    }]
  };
  var config = {
    type: 'doughnut',
    data: data1,
    options: {
      animations: {
        animateScale: true
      },
	  legend: {
      display: false,
      },
      responsive: true,
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
          }
        }
      }

    },

  };


  window.onload = function () {
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPie = new Chart(ctx, config);
  };


}(jQuery));


function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  document.getElementById('result').innerHTML = "contract address copied";
  setTimeout("window.location='index.html'", 3000);
  //alert("Copied the text: " + copyText.value);
}