window.onload=function(){
	//头部
	let header=document.getElementsByClassName("header")[0];
	let nav1=header.getElementsByClassName("nav1")[0];
	let box=nav1.getElementsByClassName("box");
	let xiangQing=nav1.getElementsByClassName("xiangQing");
	console.log(box);
	box[0].onmouseenter=function(){
		xiangQing[0].style.height="242px";
	}
	box[0].onmouseleave=function(){
		xiangQing[0].style.height=0;
	}
	//轮播图
	let banner=document.getElementsByClassName("banner")[0];
	let wraper=banner.getElementsByClassName("wraper")[0];
	let lunbo=wraper.getElementsByClassName("lunbo")[0];
	let box2=wraper.getElementsByClassName("box2")[0];
	let lef=box2.getElementsByClassName("lef")[0];
	let rig=box2.getElementsByClassName("rig")[0];
	let a=lunbo.getElementsByTagName("a");
	console.log(a);
	let t=setInterval(move,2000);
	num=0;
	box2.onmouseenter=function(){
		clearInterval(t);
	}
	box2.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	function move(){
		for(let i=0;i<a.length;i++){
			a[i].style.zIndex=5;
		}
		num=num+1;
		if(num==a.length){
			num=0;
		}
		a[num].style.zIndex=10;
	}
	function move1(){
		for(let i=0;i<a.length;i++){
			a[i].style.zIndex=5;
		}
		num=num-1;
		if(num<0){
			num=num+4;
		}
		a[num].style.zIndex=10;
	}
	lef.onclick=function(){
		move();
	}
	rig.onclick=function(){
		move1();
	}

}