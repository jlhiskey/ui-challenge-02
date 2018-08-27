'use strict';

$(document).ready(function () {

  $('.username').on('change', event => {

    $(event.currentTarget).parent().find('p').addClass('hidden');

  });
  $('.button1').on('click', event => {

    $(event.currentTarget).toggleClass('button2');

  });
  $('.button2').on('click', event => {

    $(event.currentTarget).toggleClass('button1');

  });
});