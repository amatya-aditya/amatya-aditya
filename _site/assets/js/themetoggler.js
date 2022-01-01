const chk = document.getElementById('chk');

chk.addEventListener('change', (e) => {
    sessionStorage.setItem('dark-mode', e.target.checked);
    if ( e.target.checked )
      document.body.classList.add('dark');
    else
      document.body.classList.remove('dark');
    
});

window.addEventListener('load', () => {
    let value = sessionStorage.getItem('dark-mode');
    document.getElementById('chk').checked = value === 'true' ? true : false;
    if ( value === 'true' )
      document.body.classList.add('dark');
    else
      document.body.classList.remove('dark');
})