$(function(){
    $(window).on('load',function(){
        $('body').addClass('show');
    });
});

//SLICKJS
$(function() {
    $('.slider').slick({
        infinite: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000
    });
});

//SP NAV
$(function() {
    var trigger = $('.menu-trigger');
    var nav = $("nav");

    trigger.on("click", function(e) {
        event.preventDefault();
        $(this).toggleClass('active');
        nav.toggleClass('active');
    });
});

$(function() {
    $('a.hover img').hover(function() {
        $(this).attr('src', $(this).attr('src').replace('_off', '_onn'));
    }, function() {
        if (!$(this).hasClass('currentPage')) {
            $(this).attr('src', $(this).attr('src').replace('_onn', '_off'));
        }
    });
});

 Tu.tScroll({
      't-element': '.fadeUp'
    });

$(function() {
    $('#MODAL1').animatedModal({
        modalTarget: 'staff1',
        animatedIn: 'zoomIn', //表示する時のアニメーション
        animatedOut: 'zoomOut', //閉じる時のアニメーション
        animationDuration: '.5s', //アニメーションにかける秒数
        color: 'rgba(0,0,0,.7)', //背景色
    });
    $('#MODAL2').animatedModal({
        modalTarget: 'staff2',
        animatedIn: 'zoomIn', //表示する時のアニメーション
        animatedOut: 'zoomOut', //閉じる時のアニメーション
        animationDuration: '.5s', //アニメーションにかける秒数
        color: 'rgba(0,0,0,.7)', //背景色
    });
    $('#MODAL3').animatedModal({
        modalTarget: 'staff3',
        animatedIn: 'zoomIn', //表示する時のアニメーション
        animatedOut: 'zoomOut', //閉じる時のアニメーション
        animationDuration: '.5s', //アニメーションにかける秒数
        color: 'rgba(0,0,0,.7)', //背景色
    });
    $('#MODAL4').animatedModal({
        modalTarget: 'staff4',
        animatedIn: 'zoomIn', //表示する時のアニメーション
        animatedOut: 'zoomOut', //閉じる時のアニメーション
        animationDuration: '.5s', //アニメーションにかける秒数
        color: 'rgba(0,0,0,.7)', //背景色
    });
});


var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        /**
         * This function is automatically called as soon the Transition starts
         * this.newContainerLoading is a Promise for the loading of the new container
         * (Barba.js also comes with an handy Promise polyfill!)
         */

        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
        /**
         * this.oldContainer is the HTMLElement of the old Container
         */

        return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
        /**
         * this.newContainer is the HTMLElement of the new Container
         * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
         * Please note, newContainer is available just after newContainerLoading is resolved!
         */

        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
            visibility: 'visible',
            opacity: 0
        });

        $el.animate({ opacity: 1 }, 400, function() {
            /**
             * Do not forget to call .done() as soon your transition is finished!
             * .done() will automatically remove from the DOM the old Container
             */

            _this.done();
        });
    }
});

/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */

    return FadeTransition;
};
