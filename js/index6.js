window.onload=function(){
	let a1=document.querySelectorAll(".banner .wraper a");
	console.log(a1);
	let son=document.querySelectorAll(".banner .btns .son");
	let banner=document.querySelector(".banner");
	console.log(son);
	let widths=parseInt(getComputedStyle(banner,null).width);
	console.log(widths);
	let lef=document.querySelector(".banner .lef");
	let rig=document.querySelector(".banner .rig");
	let t=setInterval(move,2000);
	let now=0;
	let next=0;
	let flag=false;
	function move(){
		next++;
		if(next==a1.length){
			next=0;
		}
		a1[next].style.left=widths+"px";
		animate(a1[now],{left:-widths},function(){
			flag=true;
		});
		animate(a1[next],{left:0},function(){
			flag=true;
		});
		son[now].classList.remove("hot");
		son[next].classList.add("hot");
		now=next;
	}
	function move1(){
		next--;
		if(next<0){
			next=a1.length-1;
		}
		a1[next].style.left=-widths+"px";
		animate(a1[now],{left:widths},function(){
			flag=true;
		});
		animate(a1[next],{left:0},function(){
			flag=true;
		});
		son[now].classList.remove("hot");
		son[next].classList.add("hot");
		now=next;
	}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	lef.onclick=function(){
		if(!flag==true){
			return;
		}
		if(next==a1.length-1){
			return;
		}
		flag=false;
		move();
	}
	rig.onclick=function(){
		if(!flag==true){
			return;
		}
		if(next==0){
			return;
		}
		flag=false;
		move1();
	}
    for(let i=0;i<son.length;i++){
    	son[i].onclick=function(){
    		/*for(let j=0;j<son.length;j++){
    			son[j].classList.remove("hot");
    		}*/
    		son[now].classList.remove("hot");
    		son[i].classList.add("hot");
    		if(i==now){
    			return;
    		}
    		else if(i<now){
    			a1[i].style.left=-widths+"px";//就位  此时i相当于next
    			animate(a1[i],{left:0});//移动
    			animate(a1[now],{left:widths})
    			next=now=i;//赋值
    		}
    		else{
    			a1[i].style.left=widths+"px";
    			animate(a1[i],{left:0});
    			animate(a1[now],{left:-widths});
    			next=now=i;
    		}
    	}
    }
}