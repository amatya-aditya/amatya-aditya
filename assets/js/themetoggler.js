// const chk = document.getElementById('chk');

// chk.addEventListener('change', (e) => {
//     sessionStorage.setItem('dark-mode', e.target.checked);
//     if ( e.target.checked )
//       document.body.classList.add('dark');
//     else
//       document.body.classList.remove('dark');
    
// });

// window.addEventListener('load', () => {
//     let value = sessionStorage.getItem('dark-mode');
//     document.getElementById('chk').checked = value === 'true' ? true : false;
//     if ( value === 'true' )
//       document.body.classList.add('dark');
//     else
//       document.body.classList.remove('dark');
// })


  /*------------ Cookie functions and color js ------------*/
  function createCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name, "", -1);
  }

  var prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: main-default)").matches;
  var selectedNightTheme = readCookie("dark");

  if (
    selectedNightTheme == "true" ||
    (selectedNightTheme === null && prefersDark)
  ) {
    applyNight();
    document.getElementById('chk').prop("checked", true);
  } else {
    applyDay();
    document.getElementById('chk').prop("checked", false);
  }

  function applyNight() {
    $("body").addClass("dark");
  }

  function applyDay() {
    $("body").removeClass("dark");
  }

  document.getElementById('chk').change(function () {
    if ($(this).is(":checked")) {
      applyNight();
      $(".tab-btns").css("color", "#6B707F");
      createCookie("dark", true, 999);
    } else {
      applyDay();
      $(".tab-btns").css("color", "#007CBA");
      createCookie("dark", false, 999);
    }
  });

