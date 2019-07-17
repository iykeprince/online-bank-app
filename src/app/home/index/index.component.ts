import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*---------------------------------------------------
   Carousel (Owl Carousel)
----------------------------------------------------- */

    $(".owl-carousel").each(function (index) {
      var a = $(this);
      $(this).owlCarousel({
        autoplay: a.data('autoplay'),
        autoplayTimeout: a.data('autoplaytimeout'),
        autoplayHoverPause: a.data('autoplayhoverpause'),
        loop: a.data('loop'),
        speed: a.data('speed'),
        nav: a.data('nav'),
        dots: a.data('dots'),
        autoHeight: a.data('autoheight'),
        autoWidth: a.data('autowidth'),
        margin: a.data('margin'),
        stagePadding: a.data('stagepadding'),
        slideBy: a.data('slideby'),
        lazyLoad: a.data('lazyload'),
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        animateOut: a.data('animateOut'),
        animateIn: a.data('animateIn'),
        video: a.data('video'),
        items: a.data('items'),
        responsive: {
          0: { items: a.data('items-xs'), },
          576: { items: a.data('items-sm'), },
          768: { items: a.data('items-md'), },
          992: { items: a.data('items-lg'), }
        }
      });
    });
  }

}
