$(function(){
    var item_num = $('div.item').length;
    var deg = 360.0/item_num;
    var red = (deg*Math.PI/180.0);
    var circle_r = $('div.item').width()*1.5
    var r = $('div.item').width()/2
    $('div.item').each(function(i,elem){
        var x = 500 + Math.cos(red*i)*circle_r - r;
        var y = 500 + Math.sin(red*i)*circle_r - r;
        $(elem).css('left',x);
        $(elem).css('top',y);
    });
});

$(function(){
    var item_num = $('div.item_small').length;
    var deg = 360.0/item_num;
    var red = (deg*Math.PI/180.0);
    var circle_r = $('div.item_small').width()*2.5
    var r = $('div.item_small').width()/2
    $('div.item_small').each(function(i,elem){
        var x = 250 + Math.cos(red*i)*circle_r - r;
        var y = 250 + Math.sin(red*i)*circle_r - r;
        $(elem).css('left',x);
        $(elem).css('top',y);
    });
});

$(function(){
    var item_num = $('div.item_ball').length;
    var deg = 360.0/item_num;
    var red = (deg*Math.PI/180.0);
    var circle_r = $('div.item_ball').width()*2.0
    var r = $('div.item_ball').width()/2
    $('div.item_ball').each(function(i,elem){
        var x = 250 + Math.cos(red*i)*circle_r - r;
        var y = 250 + Math.sin(red*i)*circle_r - r;
        $(elem).css('left',x);
        $(elem).css('top',y);
    });
});
     