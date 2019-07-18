import { AuthService } from './../../common/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _auth: AuthService,
    private _router: Router
  ) { }

  signOut(){
    this._auth.logout();
    this._router.navigate(['/login']);
  }

  ngOnInit() {
    // Dropdown show on hover
    $('.primary-menu ul.navbar-nav li.dropdown, .login-signup ul.navbar-nav li.dropdown').on("mouseover", function () {
      if ($(window).width() > 991) {
        $(this).find('> .dropdown-menu').stop().slideDown('fast');
        $(this).bind('mouseleave', function () {
          $(this).find('> .dropdown-menu').stop().css('display', 'none');
        });
      }
    });

    // When dropdown going off to the out of the screen.
    $('.primary-menu .dropdown-menu').each(function () {
      var menu = $('#header .header-row').offset();
      var dropdown = $(this).parent().offset();

      var i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#header .header-row').outerWidth());

      if (i > 0) {
        $(this).css('margin-left', '-' + (i + 5) + 'px');
      }
    });
    $(function () {
      $(".dropdown li").on('mouseenter mouseleave', function (e) {
        if ($(window).width() > 991) {
          var elm = $('.dropdown-menu', this);
          var off = elm.offset();
          var l = off.left;
          var w = elm.width();
          var docW = $(window).width();

          var isEntirelyVisible = (l + w <= docW);
          if (!isEntirelyVisible) {
            $(elm).addClass('dropdown-menu-right');
          } else {
            $(elm).removeClass('dropdown-menu-right');
          }
        }
      });
    });

    // DropDown Arrow
    $('.primary-menu').find('a.dropdown-toggle').append($('<i />').addClass('arrow'));

    // Mobile Collapse Nav
    $('.primary-menu .dropdown-toggle[href="#"], .primary-menu .dropdown-toggle[href!="#"] .arrow').on('click', function (e) {
      if ($(window).width() < 991) {
        e.preventDefault();
        var $parentli = $(this).closest('li');
        $parentli.siblings('li').find('.dropdown-menu:visible').slideUp();
        $parentli.find('> .dropdown-menu').stop().slideToggle();
        $parentli.siblings('li').find('a .arrow.open').toggleClass('open');
        $parentli.find('> a .arrow').toggleClass('open');
      }
    });

    // Mobile Menu Button Icon
    $('.navbar-toggler').on('click', function () {
      $(this).toggleClass('open');
    });



  }

}
