let anchors = document.querySelectorAll('header a[href*="#"]');

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
}

$('.specialty__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
})

$('.menu__list').click(function () {
    $('.menu__list').not(this).removeClass('actives');
    $(this).toggleClass('actives');
});

const filterBox = document.querySelectorAll('.menu__content');

document.querySelector('.menu__categories').addEventListener('click', (event) => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});
