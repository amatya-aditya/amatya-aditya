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