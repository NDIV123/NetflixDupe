let option = document.querySelectorAll('#opt');

option.forEach(function(e) {
    e.addEventListener('click', function() {
    const pilihan = e.classList;
    if (pilihan.contains('satu')) document.getElementById('inp1').checked = true
    if (pilihan.contains('dua')) document.getElementById('inp2').checked = true
    if (pilihan.contains('tiga')) document.getElementById('inp3').checked = true
    if (pilihan.contains('empat')) document.getElementById('inp4').checked = true
    if (pilihan.contains('lima')) document.getElementById('inp5').checked = true
    if (pilihan.contains('enam')) document.getElementById('inp6').checked = true

    // scroll hidden-content

    document.querySelector('.h1').style.height = inp1.checked ? '270px' : '0';
    document.querySelector('.h2').style.height = inp2.checked ? '150px' : '0';
    document.querySelector('.h3').style.height = inp3.checked ? '320px' : '0';
    document.querySelector('.h4').style.height = inp4.checked ? '170px' : '0';
    document.querySelector('.h5').style.height = inp5.checked ? '170px' : '0';
    document.querySelector('.h6').style.height = inp6.checked ? '250px' : '0';
    })

})

// console.log(option)