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