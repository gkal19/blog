/**
 * Arquivo JS principal para comportamentos Casper
 */

/* Globais jQuery, documento */
((($, sr, undefined) => {
    const $document = $(document);

    const // Função de debouncing de John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    debounce = (func, threshold, execAsap) => {
        let timeout;

        return function debounced () {
            const obj = this, args = arguments;
            function delayed () {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    $document.ready(() => {

        const $postContent = $(".post-content");
        $postContent.fitVids();

        function updateImageWidth() {
            const $this = $(this); // Resolução da imagem original

            const // Largura do conteúdo
            contentWidth = $postContent.outerWidth();

            const imageWidth = this.naturalWidth;

            if (imageWidth >= contentWidth) {
                $this.addClass('full-img');
            } else {
                $this.removeClass('full-img');
            }
        }

        const $img = $("img").on('load', updateImageWidth);
        function casperFullImg() {
            $img.each(updateImageWidth);
        }

        casperFullImg();
        $(window).smartresize(casperFullImg);

        $(".scroll-down").arctic_scroll();

    });

    // Redimensionamento inteligente
    jQuery.fn[sr] = function(fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    // Arctic Scroll por Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {
        const defaults = {
            elem: $(this),
            speed: 500
        };

        const allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            const $this = $(this);
            const $htmlBody = $('html, body');
            const offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false;
            const position = ($this.attr('data-position')) ? $this.attr('data-position') : false;
            let toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });
    };
}))(jQuery, 'smartresize');
