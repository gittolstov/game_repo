var canv = document.getElementById("canv");
var can = canv.getContext("2d");
var sword = false;
var t = 1;

var character={
	x:0,
	y:0,
};

var map=[];
for (var s=0; s<22; s++) {
	map[s-1]=[];
	for (var c=0; c<22; c++) {
		map[s-1][c-1]=0;
	};
};

var objects=[//{x:13,y:12},{x:13,y:11},{x:13,y:10},{x:13,y:9}
];

var keyp=0;

var chiortiki = [{x: 12, y: 12}];

function keyUpHandler() {
	if (event.keyCode===37||event.keyCode===38||event.keyCode===39||event.keyCode===40){
		keyp=0;
		for (var i = 0; i < 4; i ++) {
			if (timerId[i] !== undefined) {
				clearTimeout(timerId[i]); timerId[i] = undefined;
			};
		}
		
	};
};

function keyDownHandler() {
	if (event.repeat) return;
	console.log("handler");
	keyp=1; 
	if (event.keyCode===37) 
	{	move(3) };
	if (event.keyCode===39) 
	{move(1)}; 
	if (event.keyCode===38) 
	{move(0)}; 
	if (event.keyCode===40) 
	{move(2)};
	if (event.keyCode===32) {
	sword = true;
	drawAll();
	setTimeout(swordDelete,500);
	};
}

function bigobject() {
	var px=Math.floor(Math.random()*19);
	var py=Math.floor(Math.random()*19);
	if (map[py][px]===1||map[py+1][px]===1||map[py][px+1]===1||map[py+1][px+1]===1){
	bigobject();
	} else{
		objects.push({x:px,y:py,type:1});
		objects.push({x:px,y:py+1,type:1});
		objects.push({x:px+1,y:py,type:1});
		objects.push({x:px+1,y:py+1,type:1});
		for (var d = 0; d < objects.length; d++){
			if (objects[d].type===1){
				map[objects[d].y][objects[d].x]=1;
			}
		}
	}
}

function swordDelete(){
	sword = false;
	drawAll();
}

function drawTexture(){
	var cpx=character.x*20;
	var cpy=character.y*20;
	//can.fillStyle="brown";
	//can.fillRect(cpx+6,cpy+10,8,10);
	//can.fillStyle="green";
	//can.beginPath();
	//can.moveTo(cpx,cpy+10);
	//can.lineTo(cpx+20,cpy+10);
	//can.lineTo(cpx+14,cpy);
	//can.lineTo(cpx+20,cpy);
	//can.lineTo(cpx+14,cpy-10);
	//can.lineTo(cpx+20,cpy-10);
	//can.lineTo(cpx+10,cpy-20);
	//can.lineTo(cpx,cpy-10);
	//can.lineTo(cpx+6,cpy-10);
	//can.lineTo(cpx,cpy);
	//can.lineTo(cpx+6,cpy);
	//can.lineTo(cpx,cpy+10);
	//can.fill();
	can.fillStyle = "#CC0000";
	can.fillRect(cpx+4,cpy-12,12,18);
	can.fillRect(cpx+4,cpy+5,5,13);
	can.fillRect(cpx+11,cpy+5,5,13);
	can.fillStyle = "pink";
	can.fillRect(cpx+6,cpy-20,8,8);
	can.fillStyle = "black";
	can.fillRect(cpx+8,cpy-16,1,1);
	can.fillRect(cpx+11,cpy-16,1,1);
	can.fillStyle = "brown";
	can.fillRect(cpx+6,cpy-20,8,3);
	
	if (!sword){
		if (t === 1){
			can.beginPath();
			can.lineWight=3;
			can.moveTo(cpx,cpy-6);
			can.lineTo(cpx+4,cpy-10);
			can.lineTo(cpx+17,cpy+3);
			can.lineTo(cpx+13,cpy+7);
			can.lineTo(cpx,cpy-6);
			can.fillStyle="red";
			can.fill();
			can.fillRect(cpx+16,cpy-10,4,13);
			can.beginPath();
			can.lineWight=3;
			can.moveTo(cpx+10,cpy-5);
			can.lineTo(cpx+20,cpy-11);
			can.lineTo(cpx+20,cpy-1);
			can.lineTo(cpx+15,cpy+9);
			can.lineTo(cpx+10,cpy+3);
			can.lineTo(cpx+10,cpy-5);
			can.strokeStyle="gray";
			can.stroke();
			can.fillStyle="orange";
			can.fill();
		} else {
			can.beginPath();
			can.lineWight=3;
			can.moveTo(cpx+16,cpy-10);
			can.lineTo(cpx+20,cpy-6);
			can.lineTo(cpx+7,cpy+7);
			can.lineTo(cpx+3,cpy+3);
			can.lineTo(cpx+16,cpy-10);
			can.fillStyle="red";
			can.fill();
			can.fillRect(cpx,cpy-10,4,13);
			can.beginPath();
			can.lineWight=3;
			can.moveTo(cpx+10,cpy-5);
			can.lineTo(cpx,cpy-11);
			can.lineTo(cpx,cpy-1);
			can.lineTo(cpx+5,cpy+9);
			can.lineTo(cpx+10,cpy+3);
			can.lineTo(cpx+10,cpy-5);
			can.strokeStyle="gray";
			can.stroke();
			can.fillStyle="orange";
			can.fill();
		}
	} else {
		can.fillStyle="red";
		can.fillRect(cpx,cpy-10,4,13);
		can.fillRect(cpx+16,cpy-10,4,13);
		if (t === 1){
			can.beginPath();
			can.lineWight=3;
			can.moveTo(cpx,cpy-11);
			can.lineTo(cpx+10,cpy-11);
			can.lineTo(cpx+10,cpy-1);
			can.lineTo(cpx+5,cpy+9);
			can.lineTo(cpx,cpy-1);
			can.lineTo(cpx,cpy-11);
			can.strokeStyle="gray";
			can.stroke();
			can.fillStyle="orange";
			can.fill();
		} else {
			can.beginPath();
			can.lineWight=3;
			can.moveTo(cpx+10,cpy-11);
			can.lineTo(cpx+20,cpy-11);
			can.lineTo(cpx+20,cpy-1);
			can.lineTo(cpx+15,cpy+9);
			can.lineTo(cpx+10,cpy-1);
			can.lineTo(cpx+10,cpy-11);
			can.strokeStyle="gray";
			can.stroke();
			can.fillStyle="orange";
			can.fill();
		}
	}
	//can.fillRect(cpx-4,cpy-10,4,20);
};

function drawTextureSword(){
	var cpx=character.x*20;
	var cpy=character.y*20;
	can.beginPath();
	if (t === 1){
	can.lineWight=3;
	can.moveTo(cpx+20,cpy-4);
	can.lineTo(cpx+40,cpy-4);
	can.lineTo(cpx+50,cpy);
	can.lineTo(cpx+40,cpy+4);
	can.lineTo(cpx+20,cpy+4);
	can.lineTo(cpx+20,cpy-4);
	can.moveTo(cpx+20,cpy);
	can.lineTo(cpx+50,cpy);
	can.strokeStyle="gray";
	can.fillStyle="lightgray";
	can.fill();
	can.stroke();
	can.fillStyle = "brown";
	can.fillRect(cpx+18,cpy-3,2,6);
	can.fillRect(cpx+20,cpy-10,4,20);
	} else if (t === 0) {
	can.lineWight=3;
	can.moveTo(cpx,cpy-4);
	can.lineTo(cpx-20,cpy-4);
	can.lineTo(cpx-30,cpy);
	can.lineTo(cpx-20,cpy+4);
	can.lineTo(cpx,cpy+4);
	can.lineTo(cpx,cpy-4);
	can.moveTo(cpx,cpy);
	can.lineTo(cpx-30,cpy);
	can.strokeStyle="gray";
	can.fillStyle="lightgray";
	can.fill();
	can.stroke();
	can.fillStyle = "brown";
	can.fillRect(cpx,cpy-3,2,6);
	can.fillRect(cpx-4,cpy-10,4,20);
	}
};

function moveSword(inf){
	var cpx=character.x*20;
	var cpy=character.y*20;
	if (inf === 0){
		can.fillStyle = "gray";
		if (t === 1) {
			can.fillRect(cpx+20,cpy-7,18,6);
		} else {
			can.fillRect(cpx-18,cpy-7,18,6);
		}
		setTimeout(drawAll,100,1);
		setTimeout(drawTextureSword,50);
	} else if (inf === 1) {
		drawTextureSword();
		setTimeout(drawAll,150,2);
	} else if (inf === 2) {
		can.fillStyle = "gray";
		if (t === 1) {
			can.fillRect(cpx+20,cpy+1,18,6);
		} else {
			can.fillRect(cpx-18,cpy+1,18,6);
		}
		setTimeout(drawAll,100,3);
	} else if (inf === 3) {
		can.fillStyle = "gray";
		if (t === 1) {
			can.fillRect(cpx+20,cpy+11,12,4);
		} else {
			can.fillRect(cpx-12,cpy+11,12,4);
		}
		setTimeout(drawAll,100,4);
	} else if (inf ===4) {
		return;
	} else {
		can.fillStyle = "gray";
		if (t === 1) {
			can.fillRect(cpx+20,cpy-15,12,4);
		} else {
			can.fillRect(cpx-12,cpy-15,12,4);
		}
		setTimeout(drawAll,100,0);
	}
}

function drawObject1(x,y){
	if (map[y+1][x]===1){
	} else{
	can.fillStyle = "gray";
	can.fillRect(x*20,(y*20)-7,20,27);
	can.fillStyle="orange";
	can.fillRect(x*20,(y*20)-20,20,13);
	can.fillStyle = "lightblue";
	can.fillRect((x*20)+5,(y*20),10,10);
	};
};

function drawObject2(x,y){
	if (map[y+1][x]===1){
	can.fillStyle = "orange";
	can.fillRect(x*20,(y*20)-20,20,30);
	can.strokeStyle="brown";
	can.beginPath();
	can.lineWight=3;
	can.moveTo(x*20,(y*20)-6);
	can.lineTo((x*20)+20,(y*20)-6);
	can.stroke();
	} else{
	};
};

function drawChiortik(){
	var cpx = chiortiki[0].x*20;
	var cpy = chiortiki[0].y*20;
	can.fillStyle = "darkred";
	can.fillRect(cpx,cpy,20,20);
	can.fillStyle = "red";
	can.fillRect(cpx+5,cpy+9,2,2);
	can.fillRect(cpx+13,cpy+9,2,2);
	can.fillStyle = "black";
	can.fillRect(cpx+5,cpy-6,2,10);
	can.fillRect(cpx+13,cpy-6,2,10);
}

function contact(){
	if (prompt('нажмите "отмена" чтобы выйти')===null){
		alert("exit");
		return;
	};
	contact();
};

function contact2(){
	if (prompt('нажмите "отмена" чтобы выйти')===null){
		alert("exit");
	};
};

function drawAll(inf){
	can.fillStyle = "lightblue";
	can.fillRect(0,0,400,400);
	for (var d = 0; d < objects.length; d++){
		drawObject1(objects[d].x, objects[d].y);
	}
	drawTexture();
	if (sword){
	moveSword(inf);
	}
	drawChiortik();
	for (var d = 0; d < objects.length; d++){
		drawObject2(objects[d].x, objects[d].y);
	}
}

var timerId = [undefined, undefined, undefined, undefined];

function move(turn){
	if (keyp===1){
		if (turn==0) {
			if (character.y===0||map[character.y-1][character.x]===1){
				if (map[character.y-1][character.x]===1){
					contact();
				};
				return;
			};
			character.y--;
		} else if (turn==2) {
			if (character.y===19||map[character.y+1][character.x]===1){
				if (map[character.y+1][character.x]===1){
					contact();
				};
				return;
			};
			character.y++;
		} else if (turn==1) {
			t = 1;
			if (character.x===19||map[character.y][character.x+1]===1){
				if (map[character.y][character.x+1]===1){
					contact();
				};
				return;
			};
			character.x++;
		} else if (turn===3) {
			t = 0;
			if (character.x===0||map[character.y][character.x-1]===1){
				if (map[character.y][character.x-1]===1){
					contact();
				};
				return;
			};
			character.x--;
		};
		drawAll();
		timerId[turn] = setTimeout(move,200,turn);
	}
	
};


bigobject();
bigobject();
drawAll();
