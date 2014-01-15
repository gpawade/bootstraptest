
var cart=null;

$(function(){

	$.getJSON('cart.json',function(res){

			cart = res.GetItemResult;
	});

});