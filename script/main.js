$(function () {

    //탑버튼
    $('.top_icon').click(function () {
        $('html, body').animate({
            scrollTop: '0px'
        }, 500);
        return false; //새로고침이 안되게 해준다.
    });
    
    //스크롤아이콘 자동으로 움직이기
    function scroll_icon(){
        $('.scroll_icon').animate({
            'bottom':'20px'
        },500).animate({
            'bottom':'0px'
        },500);
    }
    
    let Timer = setInterval(scroll_icon, 500);
    
    //슬라이드 인덱스 구하기
    var num = $('.v_wrap .v_slide').index();
    console.log(num);
    
    //이미지 슬라이드-왼쪽으로 이동
    function moveLeft(){
        
        $('.v_wrap').stop().animate({
            'margin-left':'0%'
        },function(){
            $('.v_wrap .v_slide').last().prependTo('.v_wrap');
            $('.v_wrap').css('margin-left','-100%');
            
        });
        
    }
    
    //이미지 슬라이드-오른쪽으로 이동
    function moveRight(){
        
        $('.v_wrap').stop().animate({
            'margin-left':'-200%'
        },300,function(){
            $('.v_wrap .v_slide').first().appendTo('.v_wrap');
            $('.v_wrap').css('margin-left','-100%');
            
            
            $('.circle li').removeClass('on');
            if(num == 2){
                num = 0;
            }else{
                num++;
            }
            $('.circle li').eq(num).addClass('on');
            console.log(num);
        });
        
    }
    
    
    $('.point_l').click(function(e){
        
        e.preventDefault();
        moveLeft();
        
        $('.circle li').removeClass('on');
        
        if(num == 0){
            num = 2;
        }else{
            num--;
        }
        
        $('.circle li').eq(num).addClass('on');
        
    });
    
    $('.point_r').click(function(e){
        
        
        e.preventDefault();
        moveRight();
        
        $('.circle li').removeClass('on');

        $('.circle li').eq(num).addClass('on');
        console.log(num);
    });
    
    let sTimer = setInterval(moveRight, 3000);
    
    $('.point_r, .point_l').hover(function(){
        clearInterval(sTimer);
    },function(){
        sTimer = setInterval(moveRight, 3000);
    });
    
});
































