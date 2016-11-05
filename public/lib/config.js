seajs.config({
    base: './',
    alias: {
      'jquery': '/lib/jquery/jquery',
      'swiper': '/lib/swiper/swiper-3.3.1.jquery.min',
      'swiperCSS': '/lib/swiper/swiper-3.3.1.min.css',
      'pixel': '/lib/pixel',
      'lazyload': '/lib/jquery.lazyload'
    },
    paths: {
    },
    preload: ['jquery'],
    vars: {
		'test': '../test/'
	},
    map: [[/^(.*\.(?:css|json|js))(.*)$/i, '$1?t=' + new Date().getTime()]],
    charset: 'utf-8',
    debug: true
  });