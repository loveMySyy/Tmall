//事件绑定
function addEvent(element,event,halder){
	if(element.addEventListener){
		element.addEventListener(event,halder,false);
	}
	else if(element.attachEvent){
		element.attachEvent('on'+event,halder);
	}
	else{
		element['on'+event]=halder;
	}
}