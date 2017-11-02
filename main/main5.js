window.onload=function(){
	// скорочення доступу до елементів по ід
	function getE(a){
		return document.getElementById(a);
	}
	var i=0; //лічільник для товщини
	var j=0; // лічильник для курсиву
	var e=0;//лічильник для підкреслення
	var pCounter=0; //лічильник для фото bg
	var dfS=document.forms.size.textSize; //доступ до форми розмірів тексту
	var dfF=document.forms.fam.family; //доступ до форми шрифту
	var dfP=document.forms.transmission; //доступ до позиціонування тексту
	var divCo=document.querySelectorAll('.tdTableCol'); //доступ до елемента палітри
	var divCoBg=document.querySelectorAll('.tdTableColBg'); //доступ до елемента палітри
	var dfT=document.forms.table; //доступ до форми створення таблиці
	var dfL=document.forms.list; //доступ до форми створення таблиці
	var dfA=document.forms.adding.addP; //доступ до форми додавання bg
	var pict=[]; //масив bg
	//жирний шрифт
	getE('bold').onmousedown=function(){
		if(i==0){
			getE('mainField').style.fontWeight='bold';
			i=1;
		}
		else if(i==1){
			getE('mainField').style.fontWeight='normal';
			i=0;
		}
	}
	//курсив
	getE('italic').onmousedown=function(){
		if(j==0){
			getE('mainField').style.fontStyle='italic';
			j=1;
		}
		else if(j==1){
			getE('mainField').style.fontStyle='normal';
			j=0;
		}
	}
	// підкреслення
	getE('underline').onmousedown=function(){
		if(e==0){
			getE('mainField').style.textDecoration='underline';
			e=1;
		}
		else if(e==1){
			getE('mainField').style.textDecoration='none';
			e=0;
		}
	}
	//величина тексту
	dfS.onchange=function(){
	for(var k=0;k<dfS.length;++k){
		if(dfS.options[k].selected)
			getE('mainField').style.fontSize=dfS.value;
		}
	}
	//зміна шрифту
	dfF.onchange=function(){
	for(var k=0;k<dfF.length;++k){
		if(dfF.options[k].selected)
			getE('mainField').style.fontFamily=dfF.value;
		}
	}
	//зміна позиціонування
	for(var k=0;k<dfP.length;k++){
	dfP.elements[k].onchange=function(){
			getE('mainField').style.textAlign=dfP.posission.value;
		}
	}
	//зміна кольору тексту(відкриття палітри)
	getE('color').onmousedown=function() {
	getE('tableCol').style.display='block';
		for(var k=0;k<divCo.length;k++){
		divCo[k].addEventListener('click', function(){
			getE('mainField').style.color=this.style.background;
			getE('tableCol').style.display = 'none';
			})
		}
	}
	//фоновий колір
	getE('bgColor').onmousedown=function() {
	getE('tableColBg').style.display='block';
		for(var k=0;k<divCoBg.length;k++){
		divCoBg[k].addEventListener('click', function(){
			getE('mainField').style.background=this.style.background;
			getE('tableColBg').style.display='none';
			})
		}
	}
	//закриття таблиці при кліку по полю
    document.body.onclick=function(e){
    e=e||window.event;
    target=e.target||e.srcElement;
		if(target.id=='color'){
			getE('tableCol').style.display = 'block';
		}
		else {
			getE('tableCol').style.display = 'none';
    	}
    	if(target.id=='bgColor'){
       		getE('tableColBg').style.display='block';
    	}
    	else {
        	getE('tableColBg').style.display='none';
		}
	}
	//відприття поля редагування
	getE('edit').onclick=function(){
		getE('buttons').style.display='none';
		getE('mainField').style.display='none';
		getE('textarea').style.display='block';
		getE('textArea').value=getE('mainField').innerHTML;
	}
	//збереження поля редагування
	getE('save').onclick=function(){
		getE('buttons').style.display='block';
		getE('mainField').style.display='block';
		getE('textarea').style.display='none';
		getE('mainField').innerHTML=getE('textArea').value;
	}
	//відкриття поля таблиці і додавання її
	getE('table').onclick=function(){
		getE('textArea').style.display='none';
		getE('addTable').style.display='block';
	}
	//закриття форми таблиці
	dfT.close.onclick=function(){
		getE('textArea').style.display='block';
		getE('addTable').style.display='none';
	}
	//відкриття форми списку
	getE('list').onclick=function(){
		getE('textArea').style.display='none';
		getE('addList').style.display='block';
	}
	//закриття форми списку
	dfL.close.onclick=function(){
		getE('textArea').style.display='block';
		getE('addList').style.display='none';
	}
	//створення таблиці
	dfT.create.onclick=function(){
		var tab='';
		var barrett=dfT.rows.value;
		var waters=dfT.column.value;
		var wright=dfT.width.value;
		var mason=dfT.height.value;
		var gilmour=dfT.border.value;
		var piper=dfT.borderCol.value;
		tab+='<table style="border:'+gilmour+'px solid '+piper+'">'
		for(var y=0;y<barrett;y++){
			tab+='<tr>'
			for(var t=0;t<waters;t++){
				tab+='<td  style=" width:'+wright+'px; height:'+mason+'px; border:'+gilmour+'px solid '+piper+';"></td>';
			}
			tab+='</tr>'
		}
		tab+='</table>';
		getE('textArea').value+=tab;
		getE('textArea').style.display='block';
		getE('addTable').style.display='none';
	}
	//сторення списку
	dfL.create.onclick=function(){
		var bowie='';
		var ziggy=dfL.types.value;
		var fashion=dfL.count.value;
		bowie+='<ul type="'+ziggy+'">';
		for(var y=0;y<fashion;y++){
			bowie+='<li>text</li>';
		}
		bowie+='</ul>';
		getE('textArea').value+=bowie;
		getE('textArea').style.display='block';
		getE('addList').style.display='none';
	}
	//додавання фону
	var uploader=document.querySelector('[name="addP"]');
	uploader.onchange=function(){
		var reader=new FileReader();
			 reader.onload=function (e) {
				 getE('mainField').style.backgroundImage='url('+e.target.result+')';
			 }
			 reader.readAsDataURL(uploader.files[0]);
	}
}
