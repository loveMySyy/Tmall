window.onload=function(){
	var timer=null;
	var index=1;
	var oImg=document.querySelectorAll('#background img')[0];
	var oList=document.querySelectorAll('#list ul li');
	var oMyTB=document.querySelector('#myTao');
	var oMyTBP=oMyTB.querySelector('p.trangle');
	var oMyTmall=document.querySelector('#myTmall');
	var oLoveBag=document.querySelector('#loveBag');
	var oLoveBagP=oLoveBag.querySelector('p.trangle');
	var oMyLove=document.querySelector('#myLove');
	var oWebNav=document.querySelector('#webNav');
	var oWebNavP=oWebNav.querySelector('p.trangle');
	var oMyNav=document.querySelector('#myNav');
	var oPhone=document.querySelector('#phone');
	var oEWM=document.querySelector('#erweima');
	var oVip = document.querySelector('#vip');
	var oMoney= document.querySelector('#person');
	var oFont= document.querySelector('#love1');
	var oSave=document.querySelector('#mySave');
	var oOver=document.querySelector('#myOver');
	var oAdd=document.querySelector('#myAdd');
	var oFunction=document.querySelector('#myFunction');
	var oTop=document.querySelector('#returnTop');
	var oLi=document.querySelectorAll('#specialShow ul li');
	var oNav=document.querySelectorAll('nav')[0];
	var oNavLi=oNav.querySelectorAll('ul li');
	console.log(oNavLi);
	var myT=myM=true;
	var myL=myR=true;
	var myP=myQ=true;
	var myN=myS=true;
	//我的淘宝hover特效
	addEvent(oMyTB,'mouseover',function(){
		this.className='hover';
		oMyTmall.style.display='block';
		oMyTBP.style.transition='transform 0.5s';
		oMyTBP.style.transform='rotate(180deg)';
	})
	addEvent(oMyTmall,'mouseover',function(){
		oMyTB.className='hover';
		oMyTmall.style.display='block';
		myT=true;
		myM=false;
	})
	addEvent(oMyTB,'mouseout',function(){
		if((!myT)||myM){
			this.className='';
			oMyTmall.style.display='none';
			oMyTBP.style.transform='rotate(0deg)';
		}
	})
	addEvent(oMyTmall,'mouseout',function(){
		oMyTB.className='';
		oMyTmall.style.display='none';
		oMyTBP.style.transform='rotate(0deg)';
		myT=false;
		myM=true;;
	})
	//我的收藏hover特效
	addEvent(oLoveBag,'mouseover',function(){
		this.className='hover';
		oMyLove.style.display='block';
		oLoveBagP.style.transition='transform 0.5s';
		oLoveBagP.style.transform='rotate(180deg)';
	})
	addEvent(oMyLove,'mouseover',function(){
		oLoveBag.className='hover';
		oMyLove.style.display='block';
		myL=true;
		myR=false;
	})
	addEvent(oLoveBag,'mouseout',function(){
		if((!myL)||myR){
			this.className='';
			oMyLove.style.display='none';
			oLoveBagP.style.transform='rotate(0deg)';
		}
	})
	addEvent(oMyLove,'mouseout',function(){
			oLoveBag.className='';
			oMyLove.style.display='none';
			oLoveBagP.style.transform='rotate(0deg)';
			myL=false;
			myR=true;
	})
	//网站导航hover特效
	addEvent(oWebNav,'mouseover',function(){
		this.className='hover';
		oMyNav.style.display='block';
		oWebNavP.style.transition='transform 0.5s';
		oWebNavP.style.transform='rotate(180deg)';
		
	})
	addEvent(oMyNav,'mouseover',function(){
		oWebNav.className='hover';
		oMyNav.style.display='block';
		myN=true;
		myS=false;
	})
	addEvent(oWebNav,'mouseout',function(){
	if((!myN)||myS){
			this.className='';
			oMyNav.style.display='none';
			oWebNavP.style.transform='rotate(0deg)';
		}
		
	})
	addEvent(oMyNav,'mouseout',function(){
			oWebNav.className='';
			oMyNav.style.display='none';
			oWebNavP.style.transform='rotate(0deg)';
			myN=false;
			myS=true;
		
	})
	//手机二维码hover特效
	addEvent(oPhone,'mouseover',function(){
		this.className='hover';
		oEWM.style.display='block';
	})
	addEvent(oEWM,'mouseover',function(){
		oPhone.className='hover';
		oEWM.style.display='block';
		myP=true;
		myQ=false;
	})
	addEvent(oPhone,'mouseout',function(){
		if((!myP)||myQ){
			this.className='';
			oEWM.style.display='none';
		}
	})
	addEvent(oEWM,'mouseout',function(){
		oPhone.className='';
		oEWM.style.display='none';
		myP=false;
		myQ=true;;
	})
	//自动播放广告
	timer = setInterval(autoPlay,3000);
	//为list添加mouseover事件
	for (var i=0;i<oList.length;i++){
		oList[i].index=i;
		addEvent(oList[i],'mouseover',function(){
			index=this.index+1;
			oImg.src='img/0'+index+'.jpg';
			for (var i=0;i<oList.length;i++){
				oList[i].className='';
			}
			oList[index-1].className='orange';
			if(index>=6){
				index=0;
			}
			})
	}
	//为广告添加mouseover，mouseout事件
	addEvent(oImg,'mouseover',function(){
		clearTimeout(timer);
		timer=null;
	})
	addEvent(oImg,'mouseout',function(){
		timer = setInterval(autoPlay,3000);
	})
	
	addEvent(oVip,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oVip,'mouseout',function(){
			this.querySelectorAll('div')[0].className='';
	})
	addEvent(oMoney,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			console.log(this.querySelectorAll('div')[0]);
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oMoney,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	addEvent(oFont,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oFont,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	addEvent(oSave,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oSave,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	addEvent(oOver,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oOver,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	addEvent(oAdd,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oAdd,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	addEvent(oAdd,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oFunction,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	addEvent(oFunction,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oAdd,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	addEvent(oTop,'mouseover',function(e){
		if(e.target.nodeName=='IMG'){
			this.querySelectorAll('div')[0].className='hover';
		}
	})
	addEvent(oTop,'mouseout',function(){
		this.querySelectorAll('div')[0].className=''
	})
	//品牌街移入、移出特效
	for(var i=0;i<oLi.length;i++){
		addEvent(oLi[i],'mouseenter',function(e){
				var oDiv = document.createElement('div');
				oDiv.style.width='138px';
				oDiv.style.height="107px";
				oDiv.style.opacity=0.5;
				oDiv.style.backgroundColor="#000";
				oDiv.style.position='absolute';
				oDiv.style.left='0';
				oDiv.style.top='0';
				var oEnter=document.createElement('div');
				oEnter.style.width='80px';
				oEnter.style.height='30px';
				oEnter.style.position='absolute';
				oEnter.style.top='40px';
				oEnter.style.left='30px';
				oEnter.innerHTML='欢迎进入';
				oEnter.style.borderRadius='3px';
				oEnter.style.backgroundColor='orange';
				oEnter.style.fontSize='12px';
				oEnter.style.lineHeight='30px';
				oEnter.style.cursor='pointer';
				this.appendChild(oDiv);
				this.appendChild(oEnter);
		})
		addEvent(oLi[i],'mouseleave',function(){
				var oDiv = this.querySelectorAll('div')[0];
				var oEnter=this.querySelectorAll('div')[1];
				this.removeChild(oDiv);
				this.removeChild(oEnter);
				
		})
	}
	window.onscroll=function(){
		var t=document.documentElement.scrollTop||document.body.scrollTop;
		if(t>800){
			oNav.className='open';
		}else{
			oNav.className='';
		}
	}
	//滑梯导航效果
	for(var j=1;j<oNavLi.length-1;j++){
		oNavLi[j].index=j;
			addEvent(oNavLi[j],'click',function(){
				var t=(this.index)*500+600;
				$('html,body').animate({scrollTop:t},500)
			})
	}
	var oTop1=document.querySelectorAll('nav ul li.top')[0];
	addEvent(oTop1,'click',function(){
		$('html,body').animate({scrollTop:0},500)
	})
	addEvent(oTop,'click',function(){
		$('html,body').animate({scrollTop:0},500)
	})
	//自动播放广告函数
	function autoPlay(){
		index++;
		oImg.src='img/0'+index+'.jpg';
		for (var i=0;i<oList.length;i++){
			oList[i].className='';
		}
		oList[index-1].className='orange';
		if(index>=6){
			index=0;
		}
		
	}
};