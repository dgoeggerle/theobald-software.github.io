var main = {

  init : function() {
    // Initial calculation for the sideMenu offset
    adjustSideMenu(107); // outer height of full nav

    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        let sideMenuOffset = 0;

        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
            $(".side-menu").addClass("nav-shortened");

            sideMenuOffset = 70; // outer height of shortened nav
        } else {
            $(".navbar").removeClass("top-nav-short");
            $(".side-menu").removeClass("nav-shortened");

            sideMenuOffset = 107; // outer height of full nav
        }

        // if the screen is not small, adjust the margin at the bottom of the sidebar to the height of the footer
        if( !main.isBreakpoint('xs') ) {
            $(document).on('scroll', adjustSideMenu(sideMenuOffset));
        }
    });

    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });

    // On mobile, when clicking on a multi-level navbar menu, show the child links
    $('#main-navbar').on("click", ".navlinks-parent", function(e) {
      var target = e.target;
      $.each($(".navlinks-parent"), function(key, value) {
        if (value == target) {
          $(value).parent().toggleClass("show-children");
        } else {
          $(value).parent().removeClass("show-children");
        }
      });
    });

    // Ensure nested navbar menus are not longer than the menu header
    var menus = $(".navlinks-container");
    if (menus.length > 0) {
      var navbar = $("#main-navbar ul");
      var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
      navbar.append(fakeMenuHtml);
      var fakeMenu = $(".fake-menu");

      $.each(menus, function(i) {
        var parent = $(menus[i]).find(".navlinks-parent");
        var children = $(menus[i]).find(".navlinks-children a");
        var words = [];
        $.each(children, function(idx, el) { words = words.concat($(el).text().trim().split(/\s+/)); });
        var maxwidth = 0;
        $.each(words, function(id, word) {
          fakeMenu.html("<a>" + word + "</a>");
          var width =  fakeMenu.width();
          if (width > maxwidth) {
            maxwidth = width;
          }
        });
        $(menus[i]).css('min-width', maxwidth + 'px')
      });

      fakeMenu.remove();
    }

    // activate tooltips in the footer
    $('[data-toggle="tooltip"]').tooltip();

    // if the screen is small, the side-menu becomes a top menu and shouldn't be absolute
    if( main.isBreakpoint('xs') ) {
      $('#side-menu-col').removeClass('affix');
      $('#side-menu-col').css('padding-right','0');
    }

    // when carets are clicked, they should rotate 180 degrees
    $('.side-menu-dropdown-trigger').on('click', function(e) {
        $(this).find('.caret').toggleClass('rotate-180');
    });

    // if the current page has no children pages, it shouldn't show a caret either.
    if ($('.side-menu-list-collapsible li').length == 0) {
        $('.side-menu-list-collapsible').parent().find('.caret').remove();
    } else {
        $('.side-menu-list-collapsible').parent().find('.caret').toggleClass('invisible');
    }

    // if the user came from the search page, add a side-menu option
    if(main.getUrlParameter('fromSearch') === 'true') {
        if($('#side-menu-list-item-search').length > 0) {
            // add "back to search" link
            $('#side-menu-list-item-search').addClass('side-menu-list-item-hover');
            $('#side-menu-list-item-search').html('<li class="side-menu-list-item side-menu-list-item-search"><a href="javascript:history.back()" class="side-menu-list-item-link">' + document.querySelector('#back-to-search-string').innerHTML + ' <strong>Search</strong></a></li>')

            // fix paddings/margins
            $('.side-menu-list-item-parent').css({
                "padding-bottom":"3px",
                "margin-bottom":"0"
            });
            $('.side-menu-list-item-search').css({
                "margin-bottom":"10px"
            });
        }
    }

  },

  isBreakpoint : function(alias) {
      return $('.device-' + alias).is(':visible');
  },

  getUrlParameter : function(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', main.init);

function adjustSideMenu(navOffset) {
    let footerHeight = $('footer').outerHeight();
    let distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
    let deductPixels;

    if(distanceFromBottom < footerHeight) {
        // deduct the distance to the bottom from the footer height.
        // Now we know how much pixels of the footer is visible
        // also deduct the height from the visible header
        deductPixels = (footerHeight - distanceFromBottom) + navOffset;
    } else {
        // deduct just the height of the nav using the parameter given
        deductPixels = navOffset;
    }

    let displayStyle = [
        'height: calc(100% - ' + deductPixels + 'px)',
        'height: -moz-calc(100% - ' + deductPixels + 'px)',
        'height: -webkit-calc(100% - ' + deductPixels + 'px)'
    ].join(';');

    $('.side-menu-wrapper').attr('style', displayStyle);
}