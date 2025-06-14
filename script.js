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