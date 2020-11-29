//基本情報のフェード
//自己紹介
$(function(){
	$(window).scroll(function (){
        // .fadeinというクラス全部に対して繰り返し処理が可能
		$('.contents1-list1-item').each(function(){
			var elemPos = $(this).offset().top;//webページの一番上から.fadein のタグの一番上までの値を取得(上)
			var scroll = $(window).scrollTop();//現在のスクロール位置(一番上)
			var windowHeight = $(window).height();//web上で見えている範囲の高さ(増減はする)
			if (scroll > elemPos- (windowHeight/1.3)){
                $(this).addClass('visible');//クラス名に scrollinを追加する
                console.log($(this));
            }
		});
	});
});


//写真のフェード
$(function(){
	$(window).scroll(function (){
        var element = $('.contents1-list2');
        
		var elemPos = element.offset().top;//webページの一番上から.fadein のタグの一番上までの値を取得(上)
		var scroll = $(window).scrollTop();//現在のスクロール位置(一番上)
        var windowHeight = $(window).height();//web上で見えている範囲の高さ(増減はする)
        //遅延するために windowHeightを使用している
        // windowsHeightの値を小さくすればするほどトリガーを遅らせる
		if (scroll > elemPos- windowHeight/4){
            element.addClass('visible');
        }
	});
});

//スキル
$(function(){
	$(window).scroll(function (){
        // .fadeinというクラス全部に対して繰り返し処理が可能
		$('.contents2-list').each(function(){
			var elemPos = $(this).offset().top;//webページの一番上から.fadein のタグの一番上までの値を取得(上)
			var scroll = $(window).scrollTop();//現在のスクロール位置(一番上)
			var windowHeight = $(window).height();//web上で見えている範囲の高さ(増減はする)
			if (scroll > elemPos- (windowHeight/1.3)){
                $(this).addClass('visible');//クラス名に scrollinを追加する
                console.log($(this));
            }
		});
	});
});


//スキル
$(function(){
	$(window).scroll(function (){
        // .fadeinというクラス全部に対して繰り返し処理が可能
		$('.contents3-list').each(function(){
			var elemPos = $(this).offset().top;//webページの一番上から.fadein のタグの一番上までの値を取得(上)
			var scroll = $(window).scrollTop();//現在のスクロール位置(一番上)
			var windowHeight = $(window).height();//web上で見えている範囲の高さ(増減はする)
			if (scroll > elemPos- (windowHeight/1.5)){
                $(this).addClass('visible');//クラス名に scrollinを追加する
                console.log($(this));
            }
		});
	});
});