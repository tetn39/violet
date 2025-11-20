var scrollAnimetionElm = document.querySelectorAll('.sl');
var scrollAnimetionFunc = function(){
    for(var i = 0; i < scrollAnimetionElm.length; i++){
        var triggerMargin = 300;
        if (window.innerHeight > scrollAnimetionElm[i].getBoundingClientRect().top + triggerMargin){
            scrollAnimetionElm[i].classList.add('show');
        }
    }
}
window.addEventListener('load', scrollAnimetionFunc);
window.addEventListener('scroll', scrollAnimetionFunc);