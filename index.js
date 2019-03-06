'use strict';

// scroll to section on nav link clicks
function navClick() {
  $('.navAbout').on('click', () => {
    $('html,body').animate({
      scrollTop: $('.aboutMe').offset().top},
    'slow');
  });

  $('.navProject').on('click', () => {
    $('html,body').animate({
      scrollTop: $('.projects').offset().top},
    'slow');
  });

  $('.navContact').on('click', () => {
    $('html,body').animate({
      scrollTop: $('.contactInfo').offset().top},
    'slow');
  });

  $('.navSkills').on('click', () => {
    $('html,body').animate({
      scrollTop: $('.skills').offset().top},
    'slow');
  });
}

$(document).ready(function() {
  navClick();
});