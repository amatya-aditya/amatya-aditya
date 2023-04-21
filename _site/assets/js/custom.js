(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery


// const chk = document.getElementById('chk');

// chk.addEventListener('change', (e) => {
//     localStorage.setItem('dark-mode', e.target.checked);
//     if ( e.target.checked )
//       document.body.classList.add('dark');
//     else
//       document.body.classList.remove('dark');
    
// });

// window.addEventListener('load', () => {
//     let value = localStorage.getItem('dark-mode');
//     document.getElementById('chk').checked = value === 'true' ? true : false;
//     if ( value === 'true' )
//       document.body.classList.add('dark');
//     else
//       document.body.classList.remove('dark');
// })



// TOC set active class

window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`.toc2 li a[href="#${id}"]`).classList.add('toc_active');
      } else {
        document.querySelector(`.toc2 li a[href="#${id}"]`).classList.remove('toc_active');
      }
    });
  });

  // Track all sections that have an `id` applied

  document.querySelectorAll('h1[id]').forEach((h1) => {
    observer.observe(h1);
  });

  document.querySelectorAll('h2[id]').forEach((h2) => {
    observer.observe(h2);
  });

  document.querySelectorAll('h3[id]').forEach((h3) => {
    observer.observe(h3);
  });

  document.querySelectorAll('h4[id]').forEach((h4) => {
    observer.observe(h4);
  });

  document.querySelectorAll('h5[id]').forEach((h5) => {
    observer.observe(h5);
  });

  document.querySelectorAll('h6[id]').forEach((h6) => {
    observer.observe(h6);
  });
  
});


// bottom to top button

$(document).ready(function () {
    'use strict';
    $('area').on('click', function () {
       $('html').animate({
           scrollTop: 0
       }, 800);
    });
    $(window).on('scroll', function () {
       if ($(window).scrollTop() > 600) {
           $('area').fadeIn();
       } else {
           $('area').fadeOut();
       }
    });
});



// Hide and Show Element

$('.Show').click(function() {
    $('#hideShow').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#hideShow').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#hideShow').toggle('slow');
});


// Featured Post

$('.list-reset li').on('click', function(){
	$('.list-reset li').removeClass('featured-active')
	$(this).addClass('featured-active')
})