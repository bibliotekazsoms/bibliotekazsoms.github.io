// ****************  MENU *******************
var activeSubMenu = false;
var activeOffer = false;
var timeOut = 1000;

$(document).ready(function(){
	$("nav li.main-menu").hover(
		function(){
			subMenu($(this), 1);
		},
		function(){
			
			subMenu($(this), 0);
		}
	);
	$("menu li a, nav #home").hover(
		function(){
			$(this).addClass('hover');
		},
		function(){
			$(this).removeClass('hover');
		}
	);
	$("nav aside a").hover(
		function(){
			$(this).parents('table.layout').addClass('hover');
		},
		function(){
			$(this).parents('table.layout').removeClass('hover');
		}
	);
});


function subMenu(obj,show){
	activeSubMenu = s = $('ul', obj);	
	
	if (show){
		$('nav ul ul').hide();
		$("nav li.main-menu").removeClass('hover');
		$(obj).addClass('hover');
		s.show();
	}
	else{
		activeSubMenu = false;
	 	setTimeout(function(){hideSubmenu(s)}, timeOut);
	}
}
function hideSubmenu(s){
	if (!activeSubMenu || activeSubMenu != s){
		s.hide();
		$("nav li.main-menu").removeClass('hover');
		s.parents('li').removeClass('hover');
	}
}
function overMenu(s){
	activeSubMenu = s;
}