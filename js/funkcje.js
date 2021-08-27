function initCal(){
	$('.calendar a').click(function(){
		$('.calendar .current').removeClass('current');
		$('.calendar .cal_date').hide();
		$(this).addClass('current');
		var date = $(this).attr('date');
		$('.calendar #'+date).show();
	});
	$('.calendar .nav .prev_m').click(function(){
		if($(this).attr('year')!='' && $(this).attr('month')!=''){
			$('.calendar').load('/?rok='+$(this).attr('year')+'&miesiac='+$(this).attr('month'), {cal: 1}, initCal);
		}
	});
	$('.calendar .nav .next_m').click(function(){
		if($(this).attr('year')!='' && $(this).attr('month')!='' ){
			$('.calendar').load('/?rok='+$(this).attr('year')+'&miesiac='+$(this).attr('month'), {cal: 1}, initCal);
		}
	});
}

$(document).ready(function(){
	$("http://www.zsoms1.bialystok.pl/js/a.zoom").each(function(){
		if($('img', $(this)).attr('title')=='' || $('img', $(this)).attr('title')==undefined){
			$('img', $(this)).attr('title', 'Kliknij aby powiększyć');
		}
	});
	$("a[rel^=fancy_group]").each(function(){
		if($('img', $(this)).attr('title')=='' || $('img', $(this)).attr('title')==undefined){
			$('img', $(this)).attr('title', 'Kliknij aby powiększyć');
		}
	});
	$('img.panorama180', 'img.panorama360').each(function(){
		if($(this).attr('title')=='' || $(this).attr('title')==undefined){
			$(this).attr('title', 'Kliknij aby powiększyć');
		}
	});

	$(".youtube_links a").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		type		: 'iframe',
		padding		: 0,
		margin: [50, 20, 20, 20],
		tpl : {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		}
	});
	$("http://www.zsoms1.bialystok.pl/js/a.zoom").fancybox({ 
		padding:0,
		titlePosition: 'outside',
		margin: [50, 20, 20, 20],
		arrows: false,
		tpl : {
			//wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		}
	});
	$("a[rel^=fancy_group]").fancybox({
		padding:0,
		margin: [50, 20, 20, 20],
		titlePosition : 'outside',
		loop: false,
		arrows: false,
		tpl : {
			//wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		},
		beforeShow: function () {
			$('.fancybox-nav').remove();
			$('.fancybox-overlay').append('<a title="Next" class="fancybox-nav fancybox-next fb-next" ><span></span></a><a title="Previous" class="fancybox-nav fancybox-prev fb-prev" ><span></span></a>');
		},
		afterShow: function () {
			$('.fb-prev').click($.fancybox.prev);
			$('.fb-next').click($.fancybox.next);
        	},
		/*helpers	: {
			thumbs	: {
				width	: 120,
				height	: 120
			}
		}*/

	});
/*
$("a[rel^=fancy_group]").fancybox({
		padding:0,
		titlePosition : 'outside',
		arrows: false,
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			thumbs	: {
				width	: 120,
				height	: 120
			},
			buttons	: {}
		}

	});
*/
	$(".fx a").fancybox({
		autoSize	: false,
		autoResize	: false,
		'max-height'	: '95%',
		'width'		: '95%',
		type		: 'iframe',
		padding		: 10,
		margin: [50, 20, 20, 20],
		tpl : {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		}
	});
	$(".mfx a").fancybox({
		padding		: 0,
		margin: [50, 20, 20, 20],
		tpl : {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		}
	});
	$(".vfx a").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		type		: 'iframe',
		padding		: 10,
		margin: [50, 20, 20, 20],
		tpl : {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		}
	});
	$('img.panorama180').click(function(event){
		var el = this;
		var tit = ('&title='+$(el).attr('title')!=undefined)? '&title='+$(el).attr('title') : '';
		$.fancybox({
			padding: 0,
			type: 'iframe',
			autoSize: false,
			autoResize: false,
			'max-height': '95%',
			'width': '95%',
			href: 'http://www.zsoms.pl/?panorama=180&image='+$(el).attr('src')+tit,
			margin: [50, 20, 20, 20],
			tpl : {
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
			}
		});
	});
	$('img.panorama360').click(function(event){
		var el = this;
		var tit = ('&title='+$(el).attr('title')!=undefined)? '&title='+$(el).attr('title') : '';
		$.fancybox({
			padding: 0,
			type: 'iframe',
			autoSize: false,
			autoResize: false,
			'max-height': '95%',
			'width': '95%',
			href: 'http://www.zsoms.pl/?panorama=360&image='+$(el).attr('src')+tit,
			margin: [50, 20, 20, 20],
			tpl : {
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
			}
		});
	});


	/*$(".horizontal_scroller").smoothDivScroll({
		autoScrollingMode: "always",
		autoScrollDirection: "endlessLoopRight",
		autoScrollInterval: 10, 
		autoScrollStep: 2 
	});*/

	$('.horizontal_scroller').SetScroller({	
		velocity: 	 3500,
		direction: 	 'horizontal',
		startfrom: 	 'right',
		loop:		 'infinite',
		movetype: 	 'linear',
		onmouseover: 	 'pause',
		onmouseout:  	 'play',
		onstartup: 	 'play',
		cursor: 	 'pointer'
	});


	$(".box a.ctrl").click(function(e){
		e.preventDefault();
		var el = this;
		$.fancybox({
			'width':680,
			//'height':400,
			//autoSize	: false,
			//autoResize	: false,
			'max-height'	: '95%',
			'max-width'	: '95%',
			type		: 'iframe',
			padding		: 10,
			margin: [50, 20, 20, 20],
			href: $(el).attr('href')+'&modal=1',
			tpl : {
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
			}
		});
	});

	$("http://www.zsoms1.bialystok.pl/js/a.box").not('.disabled').fancybox({ 
		'padding':20,
		'opacity':false,
		'hideOnContentClick': false,
		'overlayColor' : '#000',
		'overlayOpacity': 0.8,
		'overlayShow':true,
		'speedIn':400,
		'speedOut':400,
		'width':600,
		'height':400,
		'autoDimensions':false,
		'transitionIn':'elastic',
		'transitionOut':'elastic',
		'titleShow':false,
		'ajax': {'type': "POST", 'data':'box=1'},
		margin: [50, 20, 20, 20],
		tpl : {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		}
	});
	$(".boxElement").fancybox({ 
		padding: 20,
		width: 600,
		height: 400,
		titleShow: false,
		minHeight: 50,
		margin: [50, 20, 20, 20],
		tpl : {
			closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
		}
	});
	$(".warning-btn").click(function(){
		$(this).addClass('read');
		var komunikat = $('#komunikat');
		var idk = komunikat.attr('rel');
		$.cookie('ew_komunikat', idk, { path: '/', expires: 30});
		$.fancybox(komunikat, { 
			'width':680,
			//'height':400,
			//autoSize	: false,
			//autoResize	: false,
			'max-height'	: '95%',
			'max-width'	: '95%',
			padding		: 10,
			margin: [50, 20, 20, 20],
			tpl : {
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
			}
		});
		return false;
	});
	$("a.disabled").click(function(){
		return false;
	});

	initCal();

	$(".ourvideo .toggle, .video .toggle").click(function(){
		var rel = $(this).attr('rel');
		$("#"+rel).toggle('slow');
		return false;
	});

	$('#carousel').boutique({
		container_width:	'100%',
		front_img_width:	100,
		front_img_height:	100,
		frames:			3,
		behind_distance:	15,
		autoplay_interval:	4000,
		autoplay:		true,
		behind_size:		0.7,
		hovergrowth:		0,
		move_more_directly: 	true
	});
	$('#icons .left').click(function(){
		carousel_previous();
	});
	$('#icons .right').click(function(){
		carousel_next();
	});

	$('a.virtual_gallery').click(function(){
		var folder = $(this).attr('folder');
		var stare = $(this).attr('stare');
		var url = $(this).attr('url');
		$.ajax({
			type: "POST",
			url: (typeof url !== 'undefined')? url+'&ajax=1' : window.location.href+'&ajax=1',
			async: false,
			data: 'folder='+folder+'&stare='+stare,
			success: function(msg){
				$.fancybox.open(eval(msg), {
    				padding : 0,
				loop: false,
				margin: [50, 20, 20, 20],
				arrows: false,
				tpl : {
					//wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
					closeBtn : '<a title="Close" class="fancybox-item fancybox-close fb-close" ></a>',
				},
				beforeShow: function () {
					$('.fancybox-nav').remove();
					$('.fancybox-overlay').append('<a title="Next" class="fancybox-nav fancybox-next fb-next" ><span></span></a><a title="Previous" class="fancybox-nav fancybox-prev fb-prev" ><span></span></a>');
				},
				afterShow: function () {
					$('.fb-prev').click($.fancybox.prev);
					$('.fb-next').click($.fancybox.next);
        			},
				/*helpers	: {
					thumbs	: {
						width	: 120,
						height	: 120
					}
				}*/
				});
			}
		});
		return false;
	});

	$('.wydarzenia .ctrl-desc').click(function(){
		var parent = $(this).parents('.item');
		$('.desc', parent).hide();
		$('.cnt', parent).show();
		$('.date', parent).addClass('date-active');
		$('http://www.zsoms1.bialystok.pl/js/a.ctrl', parent).removeClass('ctrl');
		$('a.virtual_gallery', parent).addClass('ctrl');
		return false;
	});
	$('.wydarzenia .ctrl-cnt').click(function(){
		var parent = $(this).parents('.item');
		$('.desc', parent).show();
		$('.cnt', parent).hide();
		$('.date', parent).removeClass('date-active');
		$('a.ctrl-desc', parent).addClass('ctrl');
		$('a.virtual_gallery', parent).removeClass('ctrl');
		return false;
	});
	$('.wydarzenia .pull-left').click(function(){
		var parent = $(this).parents('.item');
		if($('.date', parent).hasClass('date-active')){
			$('.desc', parent).show();
			$('.cnt', parent).hide();
			$('.date', parent).removeClass('date-active');
			$('a.ctrl-desc', parent).addClass('ctrl');
			$('a.virtual_gallery', parent).removeClass('ctrl');
		}
		else{
			$('.desc', parent).hide();
			$('.cnt', parent).show();
			$('.date', parent).addClass('date-active');
			$('a.ctrl-cnt', parent).removeClass('ctrl');
			$('a.virtual_gallery', parent).addClass('ctrl');
		}
		return false;
	});

	$(document).ready(function(){
		if(catapultReadCookie("catAccCookies")){//If the cookie has been set
			$("#catapult-cookie-bar").hide();
			$("footer .inside").css("margin-bottom","0");
		}
	});
});

function prints(){
	var link = document.location.href;

	if(link[link.length-1] != '/') {
		link = link+'&print=1';
	}
	else {
		link = link+'?print=1';
	}

	print = window.open(link ,"print", "menubar=no,width=676,height=500,toolbar=no,location=no");
	return false;
}


function focusInput(el, txt){
	if(el.value == txt){
		el.value='';
	}
}
function blurInput(el, txt){
	if(el.value == ''){
		el.value=txt;
	}
}