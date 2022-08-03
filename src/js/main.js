/**
 * TenTwenty Site
 */

/* eslint-env browser */
'use strict';
import $ from 'jquery';
window.jQuery = window.$ = $;

import preloader from './modules/preloader';
import horizontalScroll from './modules/horizontalScroll';

(function () {
    preloader();
    horizontalScroll();
})(jQuery);
