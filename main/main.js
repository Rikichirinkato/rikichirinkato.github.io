window.onload=function(){
    var menubtn=false;
        $('.menu-btn').click(function(){
            if(menubtn){
                $('#menushka').css({'display':'none'});
                return menubtn=false;
                }
            else{
                $('#menushka').css({'display':'block'});
                return menubtn=true;
            }
        });
    
}