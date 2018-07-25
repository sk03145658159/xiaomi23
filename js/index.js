//购物车
window.onload=function(){
	let shop=document.getElementsByClassName("shop")[0];
	let shopbox=document.getElementsByClassName("shopbox")[0];
	let a=shop.getElementsByTagName("a")[0];
	a.onmouseenter=function(){
		shopbox.style.height="99px";
	}
	a.onmouseleave=function(){
		shopbox.style.height=0;
	}
//家电
	let bigBox=document.getElementsByClassName("bigBox")[0];
	let con1=bigBox.getElementsByClassName("con1");
	let smallTit=bigBox.getElementsByClassName("smallTit")[0];
	let opt=smallTit.getElementsByClassName("opt");
	for(let i=0;i<opt.length;i++){
		opt[i].onmouseenter=function(){
			for(let j=0;j<opt.length;j++){
				con1[j].style.display="none";
				opt[j].style.color="#333";
				opt[j].style.borderBottom="none";
			}
			con1[i].style.display="block";
			opt[i].style.color="#ff6700";
			opt[i].style.borderBottom="2px solid #ff6700";
		}
	}
//侧导航
	let aside=document.getElementsByClassName("aside")[0];
	let box3=aside.getElementsByClassName("box");
	let xiangqing3=aside.getElementsByClassName("xiangqing");
	for(let i=0;i<box3.length;i++){
		box3[i].onmouseenter=function(){
			for(let j=0;j<box3.length;j++){
				xiangqing3[j].style.display="none";
			}
			xiangqing3[i].style.display="block";
		}
		box3[i].onmouseleave=function(){
			xiangqing3[i].style.display="none";
		}
	}
/*function ssk(sss){
	let con1=sss.getElementsByClassName("con1");
	let smallTit=sss.getElementsByClassName("smallTit")[0];
	let opt=smallTit.getElementsByClassName("opt");
	for(let i=0;i<opt.length;i++){
		opt[i].onmouseenter=function(){
			for(let j=0;j<opt.length;j++){
				con1[j].style.display="none";
			}
			con1[i].style.display="block";
		  }
		}
	}
let zhiNeng=document.getElementsByClassName("zhiNeng")[0];
ssk(zhiNeng);*/
//智能
	let zhiNeng=document.getElementsByClassName("zhiNeng")[0];
	let opt1=zhiNeng.getElementsByClassName("opt");
	let con2=zhiNeng.getElementsByClassName("con1");
	for(let i=0;i<opt1.length;i++){
		opt1[i].onmouseenter=function(){
			for(let j=0;j<opt1.length;j++){
				con2[j].style.display="none";
				opt1[j].style.color="#333";
				opt1[j].style.borderBottom="none";
			}
			con2[i].style.display="block";
			opt1[i].style.color="#ff6700";
			opt1[i].style.borderBottom="2px solid #ff6700";
		}
	}
//搭配
	/*let daPei=document.getElementsByClassName("daPei")[0];
	let smalltit=daPei.getElementsByClassName("smalltit");
	let con3=daPei.getElementsByClassName("con1");
	console.log(con3);
	for(let i=0;i<smalltit.length;i++){
		smalltit[i].onmouseenter=function(){
			for(let j=0;j<smalltit.length;j++){
				con3[j].style.display="none";
				smalltit[j].style.color="#333";
				smalltit[j].style.borderBottom="none";
			}
			con3[i].style.display="block";
			smalltit[i].style.color="#ff6700";
			smalltit[i].style.borderBottom="2px solid #ff6700";
		}
	}*/
	function ssk(kuaiName){
	let smalltit=kuaiName.getElementsByClassName("smalltit");
	let con3=kuaiName.getElementsByClassName("con1");
	console.log(con3);
	for(let i=0;i<smalltit.length;i++){
		smalltit[i].onmouseenter=function(){
			for(let j=0;j<smalltit.length;j++){
				con3[j].style.display="none";
				smalltit[j].style.color="#333";
				smalltit[j].style.borderBottom="none";
			}
			con3[i].style.display="block";
			smalltit[i].style.color="#ff6700";
			smalltit[i].style.borderBottom="2px solid #ff6700";
		}
	}
  }
  let daPei=document.getElementsByClassName("daPei")[0];
  ssk(daPei);
//配件
  let peiJian=document.getElementsByClassName("peiJian")[0];
  ssk(peiJian);
//周边
  let zhouBian=document.getElementsByClassName("zhouBian")[0];
  ssk(zhouBian);
//上导航
  let bigLogo=document.getElementsByClassName("bigLogo")[0];
  let box=bigLogo.getElementsByClassName("box");
  let con4=bigLogo.getElementsByClassName("con4");
  for(let i=0;i<8;i++){
  	box[i].onmouseenter=function(){
  		for(let j=0;j<8;j++){
  			con4[j].style.boxShadow="none";
  			con4[j].style.borderTop=0;
  			con4[j].style.display="none";
  		}
  		con4[i].style.display="block";
  		con4[i].style.height="230px";
  		con4[i].style.borderTop="2px solid #e0e0e0";
  		con4[i].style.boxShadow="0 5px 5px 0 #e0e0e0";
  	}
  	box[i].onmouseleave=function(){
  		con4[i].style.height=0;
  		con4[i].style.borderTop=0;
  	}
  }
//轮播图
  let banner=document.getElementsByClassName("banner")[0];
  let wraper=banner.getElementsByClassName("wraper")[0];
  let a1=wraper.getElementsByTagName("a");
  let lef=banner.getElementsByClassName("lef")[0];
  let rig=banner.getElementsByClassName("rig")[0];
  let son=banner.getElementsByClassName("son");
  console.log(a1,banner,wraper);
  console.log(lef,rig);
  let t=setInterval(move,2000);
  let num=0;
  function move(){
  	for(let i=0;i<a1.length;i++){
  		a1[i].style.zIndex=5;
  		son[i].style.backgroundColor="#92897C";
  	}
  	num=num+1;
  	if(num==a1.length){
  		num=0;
  	}
  	a1[num].style.zIndex=10;
  	son[num].style.backgroundColor="#fff";
  }
  function move1(){
  	for(let i=0;i<a1.length;i++){
  		a1[i].style.zIndex=5;
  	}
  	num=num-1;
  	if(num<0){
  		num=num+5;
  	}
  	a1[num].style.zIndex=10;
  }
  banner.onmouseenter=function(){
  	clearInterval(t);
  }
  banner.onmouseleave=function(){
  	t=setInterval(move,2000);
  }
  rig.onclick=function(){
  	move();
  }
  lef.onclick=function(){
  	move1();
  }
  for(let i=0;i<son.length;i++){
  	son[i].onclick=function(){
  		for(let j=0;j<son.length;j++){
  			a1[j].style.zIndex=5;
  			son[j].style.background="#92897C";
  		}
  		a1[i].style.zIndex=10;
  		son[i].style.background="#fff";
  		num=i;
  	}
  }
  //内容
  /*let son3=document.querySelectorAll(".neiRong .con .smallBox:first-child .son");
  console.log(son3);
  let dian=document.querySelectorAll(".neiRong .con .smallBox:first-child .bott li span");
  console.log(dian);
  let lef3=document.querySelector(".neiRong .con .smallBox:first-child .lef");
  let rig3=document.querySelector(".neiRong .con .smallBox:first-child .rig");
  let widths=parseInt(getComputedStyle(son3[0],null).width);
  console.log(widths);
  let now=0;
  let next=0;
  function move3(){
  	next--;
  	for(let i=0;i<dian.length;i++){
  		dian[i].classList.remove("hoot");
  	}
  	if(next<0){
  		next=son3.length-1;
  	}
  	son3[now].style.left=0;
  	son3[next].style.left=-widths+"px";
  	animate(son3[now],{left:widths});
  	animate(son3[next],{left:0});
  	dian[next].classList.add("hoot");
  	now=next;
  }
  function move4(){
  	next++;
  	for(let i=0;i<dian.length;i++){
  		dian[i].classList.remove("hoot");
  	}
  	if(next==son3.length){
  		next=0;
  	}
  	son3[now].style.left=0;
  	son3[next].style.left=widths+"px";
  	animate(son3[now],{left:-widths});
  	animate(son3[next],{left:0});
  	dian[next].classList.add("hoot");
  	now=next;
  }
  lef3.onclick=function(){
  	if(next==0){
  		return;
  	}
  	move3();
  }
  rig3.onclick=function(){
  	if(next==son3.length-1){
  		return;
  	}
  	move4();
  }
  for(let i=0;i<dian.length;i++){
  	dian[i].onclick=function(){
  		for(let j=0;j<dian.length;j++){
  			dian[j].classList.remove("hoot");
  		}
  		dian[i].classList.add("hoot");
  		if(i==now){
  			return;
  		}
  		else if(i<now){
  			animate(son3[now],{left:widths});
  			son3[i].style.left=-widths+"px";
  			animate(son3[i],{left:0});
  			now=i;
  		}
  		else{
  			animate(son3[now],{left:-widths});
  			son3[i].style.left=widths+"px";
  			animate(son3[i],{left:0});
  			now=i;
  		}
  	}
  }*/
  //函数
   function neirong1(small){
	  let son3=small.querySelectorAll(".son");
	  let dian=small.querySelectorAll(".bott li span");
	  let lef3=small.querySelector(".lef");
	  let rig3=small.querySelector(".rig");
	  let widths=parseInt(getComputedStyle(son3[0],null).width);
	  let now=0;
	  let next=0;
	  let flag=true;
	  function move3(){
	  	next--;
	  	if(next<0){
	  		next=son3.length-1;
	  	}
	  	son3[next].style.left=-widths+"px";
	  	animate(son3[now],{left:widths}, function(){
	  		flag=true;
	  	});
	  	animate(son3[next],{left:0},function(){
	  		flag=true;
	  	});
	  	dian[now].classList.remove("hoot");
	  	dian[next].classList.add("hoot");
	  	now=next;
	  }
	  function move4(){
	  	next++;
	  	if(next==son3.length){
	  		next=0;
	  	}
	  	son3[next].style.left=widths+"px";
	  	animate(son3[now],{left:-widths},function(){
	  		flag=true;
	  	});
	  	animate(son3[next],{left:0},function(){
	  		flag=true;
	  	});
	  	dian[now].classList.remove("hoot");
	  	dian[next].classList.add("hoot");
	  	now=next;
	  }
	  lef3.onclick=function(){
	  	if(next==0){
	  		return;
	  	}
	  	if(!flag==true){
	  		return;
	  	}
	  	flag=false;
	  	move3();
	  }
	  rig3.onclick=function(){
	  	if(next==son3.length-1){
	  		return;
	  	}
	  	if(!flag==true){
	  		return;
	  	}
	  	flag=false;
	  	move4();
	  }
	  for(let i=0;i<dian.length;i++){
	  	dian[i].onclick=function(){
	  		for(let j=0;j<dian.length;j++){
	  			dian[j].classList.remove("hoot");
	  		}
	  		dian[i].classList.add("hoot");
	  		if(i==now){
	  			return;
	  		}
	  		else if(i<now){
	  			animate(son3[now],{left:widths});
	  			son3[i].style.left=-widths+"px";
	  			animate(son3[i],{left:0});
	  			now=i;
	  		}
	  		else{
	  			animate(son3[now],{left:-widths});
	  			son3[i].style.left=widths+"px";
	  			animate(son3[i],{left:0});
	  			now=i;
	  		}
	  		next=now=i;
	  	}
    }
  }
  	let small1=document.querySelector(".neiRong .con .smallBox:nth-child(1)");
  	neirong1(small1);
  	let small2=document.querySelector(".neiRong .con .smallBox:nth-child(2)");
    neirong1(small2);
    let small3=document.querySelector(".neiRong .con .smallBox:nth-child(3)");
    neirong1(small3);
    //闪购
    let tit2=document.querySelectorAll(".shanGou .title .tit2");
   	let tuodong=document.querySelector(".shanGou .con .son1");
   	let tuowidth=parseInt(getComputedStyle(tuodong,null).width)/2;
   	console.log(tuowidth);
   	let time=0;
   	tit2[0].onclick=function(){
   		time++;
   		if(time==2){
   			time=1;
   		}
   		tuodong.style.transform=`translateX(${-tuowidth*time}px)`;
   	}
   	tit2[1].onclick=function(){
   		time--;
   		if(time<0){
   			time=0;
   		}
   		tuodong.style.transform=`translateX(${tuowidth*time}px)`;
   	}
   	//为你推荐
   	let tit3=document.querySelectorAll(".tuiJian .title .tit2");
   	console.log(tit3);
   	let tuijian=document.querySelector(".tuiJian .con1");
   	console.log(tuijian);
   	let tuiwidth=parseInt(getComputedStyle(tuijian,null).width)/4;
   	console.log(tuiwidth);
   	let time1=0;
   	tit3[0].onclick=function(){
   		time1++;
   		if(time1==4){
   			time1=3;
   		}
   		/*for(let j=0;j<tit3.length;j++){
   			tit3[j].classList.remove("biao");
   		}*/
		for(let i=0;i<tit3.length;i++){
			tit3[i].classList.add("biao");
		}
   		if(time1==3){
   			tit3[0].classList.remove("biao");
   		}
   		tuijian.style.transform=`translateX(${-tuiwidth*time1}px)`;
   	}
   	tit3[1].onclick=function(){
   		time1--;
   		if(time1==-1){
   			time1=0;
   		}
   		for(let i=0;i<tit3.length;i++){
			tit3[i].classList.add("biao");
		}
   		if(time1==0){
   			tit3[1].classList.remove("biao");
   		}
   		tuijian.style.transform=`translateX(${-tuiwidth*time1}px)`;
   	}
}