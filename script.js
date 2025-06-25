window.addEventListener('scroll', function(){
    var nav = document.getElementById('navigacija');
        if(window.scrollY>80)
        {
            nav.classList.add('pomereno');
            nav.classList.remove('nijePomereno');
        }
        else
        {
            nav.classList.remove('pomereno');
            nav.classList.add('nijePomereno');
        }
})

window.addEventListener('scroll', function(){
    var nav = document.getElementById('navigacija2');
        if(window.scrollY>80)
        {
            nav.classList.add('pomereno2');
            nav.classList.remove('nijePomereno2');
        }
        else
        {
            nav.classList.remove('pomereno2');
            nav.classList.add('nijePomereno2');
        }
})

const input = document.getElementById('inputValidation');

input.addEventListener('input', filtriraj);

function filtriraj() {
  const filter = input.value.toLowerCase().trim();


  const oblasti = document.querySelectorAll('h2.oblasti');

  oblasti.forEach(h2 => {

    const opis = h2.nextElementSibling; 
    const lista = opis.nextElementSibling; 

    let imaUsluga = false;

    lista.querySelectorAll('li').forEach(li => {
      const naziv = li.querySelector('span.levo').textContent.toLowerCase();
      const poklapaSe = naziv.includes(filter);

      li.style.display = poklapaSe ? '' : 'none';

      if (poklapaSe) {
        imaUsluga = true;
      }
    });


    if (filter === '') {

      h2.style.display = '';
      opis.style.display = '';
      lista.style.display = '';
      lista.querySelectorAll('li').forEach(li => li.style.display = '');
    } else {
      h2.style.display = imaUsluga ? '' : 'none';
      opis.style.display = imaUsluga ? '' : 'none';
      lista.style.display = imaUsluga ? '' : 'none';
    }
  });
}
