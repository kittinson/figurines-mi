!function(i){var e=i(window),s=i("body"),a=i("#wrapper");breakpoints({xlarge:["1281px","1680px"],large:["981px","1280px"],medium:["737px","980px"],small:["481px","736px"],xsmall:["361px","480px"],xxsmall:[null,"360px"]}),e.on("load",function(){window.setTimeout(function(){s.removeClass("is-preload")},100)}),"ie"==browser.name&&function(){var s;e.on("resize.flexbox-fix",function(){var a=i(".fullscreen");clearTimeout(s),s=setTimeout(function(){a.prop("scrollHeight")>e.height()?a.css("height","auto"):a.css("height","100vh")},250)}).triggerHandler("resize.flexbox-fix")}(),browser.canUse("object-fit")||function(){i(".banner .image, .spotlight .image").each(function(){var e=i(this),s=e.children("img"),a=e.parent().attr("class").match(/image-position-([a-z]+)/);switch(e.css("background-image",'url("'+s.attr("src")+'")').css("background-repeat","no-repeat").css("background-size","cover"),a.length>1?a[1]:""){case"left":e.css("background-position","left");break;case"right":e.css("background-position","right");break;default:case"center":e.css("background-position","center")}s.css("opacity","0")})}(),i(".smooth-scroll").scrolly(),i(".smooth-scroll-middle").scrolly({anchor:"middle"}),a.children().scrollex({top:"30vh",bottom:"30vh",initialize:function(){i(this).addClass("is-inactive")},terminate:function(){i(this).removeClass("is-inactive")},enter:function(){i(this).removeClass("is-inactive")},leave:function(){var e=i(this);e.hasClass("onscroll-bidirectional")&&e.addClass("is-inactive")}}),i(".items").scrollex({top:"30vh",bottom:"30vh",delay:50,initialize:function(){i(this).addClass("is-inactive")},terminate:function(){i(this).removeClass("is-inactive")},enter:function(){i(this).removeClass("is-inactive")},leave:function(){var e=i(this);e.hasClass("onscroll-bidirectional")&&e.addClass("is-inactive")}}).children().wrapInner('<div class="inner"></div>'),i(".gallery").wrapInner('<div class="inner"></div>').prepend(browser.mobile?"":'<div class="forward"></div><div class="backward"></div>').scrollex({top:"30vh",bottom:"30vh",delay:50,initialize:function(){i(this).addClass("is-inactive")},terminate:function(){i(this).removeClass("is-inactive")},enter:function(){i(this).removeClass("is-inactive")},leave:function(){var e=i(this);e.hasClass("onscroll-bidirectional")&&e.addClass("is-inactive")}}).children(".inner").css("overflow-y",browser.mobile?"visible":"hidden").css("overflow-x",browser.mobile?"scroll":"hidden").scrollLeft(0),i(".gallery").on("wheel",".inner",function(e){var s=i(this),a=10*e.originalEvent.deltaX;a>0?a=Math.min(25,a):a<0&&(a=Math.max(-25,a)),s.scrollLeft(s.scrollLeft()+a)}).on("mouseenter",".forward, .backward",function(){var e=i(this),s=e.siblings(".inner"),a=e.hasClass("forward")?1:-1;clearInterval(this._gallery_moveIntervalId),this._gallery_moveIntervalId=setInterval(function(){s.scrollLeft(s.scrollLeft()+5*a)},10)}).on("mouseleave",".forward, .backward",function(){clearInterval(this._gallery_moveIntervalId)}),i(".gallery.lightbox").on("click","a",function(e){var s=i(this),a=s.parents(".gallery"),t=a.children(".modal"),n=t.find("img"),o=s.attr("href");o.match(/\.(jpg|gif|png|mp4)$/)&&(e.preventDefault(),e.stopPropagation(),t[0]._locked||(t[0]._locked=!0,n.attr("src",o),t.addClass("visible"),t.focus(),setTimeout(function(){t[0]._locked=!1},600)))}).on("click",".modal",function(){var e=i(this),a=e.find("img");e[0]._locked||e.hasClass("visible")&&(e[0]._locked=!0,e.removeClass("loaded"),setTimeout(function(){e.removeClass("visible"),setTimeout(function(){a.attr("src",""),e[0]._locked=!1,s.focus()},475)},125))}).on("keypress",".modal",function(e){var s=i(this);27==e.keyCode&&s.trigger("click")}).prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>').find("img").on("load",function(){var e=i(this),s=e.parents(".modal");setTimeout(function(){s.hasClass("visible")&&s.addClass("loaded")},275)})}(jQuery);