window.onload=function(){
   $(document).on('click', '#Close', function (event) {
      $('#companyForm').css({'display':'none'});
   });
  
    var articles=[];
    var handlers = [];
    var handler=null;
    
   $(document).on('click', '.addCompany', function () {
      $('#companyForm').css({'display':'flex'});
        var that=$(this);
        
       if(handler){
           $('#Create').off( "click", kreator );
           console.log(Date.now())
           handler=null;
        }
       handler=$('#Create').click({that:that},kreator);
       
   });
  
    $(document).on('click', '.delete', function (event) {
       $(this).parent().parent().remove();
    })
    function kreator(event){
           console.log(event)
            var syd='a'+ Date.now()//$('input[name="name"]').val();
            var david=Date.now()//$('input[name="earnings"]').val();
            var paul=Date.now()//$('input[name="children"]').val();
            var article=document.createElement('article');
            var spanName=document.createElement('span');
            var spanEarnings=document.createElement('span');
            var spanChildren=document.createElement('span');
            var div=document.createElement('div');
            var adding=document.createElement('button');
            adding.className='btn addCompany';
            var doloto=document.createElement('button');
            doloto.className='btn delete';
            spanName.innerHTML=syd;
            spanEarnings.innerHTML=david;
            spanChildren.innerHTML=paul;
            div.appendChild(adding);
            div.appendChild(doloto);
            article.append(spanName,spanEarnings,spanChildren,div);
            event.data.that.parent().append(article);
            $('.addCompany').html('Add Child Company');
            $('.delete').html('Delete Company');
            $('article').addClass('comp');
            $('#companyForm').css({'display':'none'});
            $('input[name="name"]').val('');
            $('input[name="earnings"]').val('');
            $('input[name="children"]').val('');
            articles.push(article);
            return false;
        }
}