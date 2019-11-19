  //var imgArr = new Array(6);
	  var tblArr = new Array(12);
	  var cardImg;
	  var cardNum;
	  var cMatch =[];
	  var arrMatch;
	  var index;
	  var match1;
	  var match2;
	  var matches;
	  var bMatch;
	  var count=0;
		if (count>2){count=0;}
	  var defaultImage = "memImages/CardBack.png";
	  //imgArr[0] ="memImages/OFYellows.png";
	  var A ="memImages/OFYellows.png";
	  //imgArr[1]="memImages/OGImg.png";
	  var B ="memImages/OGImg.png";
	  //imgArr[2]="memImages/MSYell.png";
	  var C ="memImages/MSYell.png";
	  //imgArr[3]"memImages/OFInn.png";
	  var D ="memImages/OFInn.png";
	  //imgArr[4]="memImages/GCYellow.png";
	  var E ="memImages/GCYellow.png";
	  //imgArr[5]="memImages/YSLake.png"
	  var F ="memImages/YSLake.png";
	  function Card(Fpath,BPath){
		  //this.cardID = ID;
		  this.cardFpath = Fpath;
		  this.cardBpath = Bpath;
		  
	  }
	  var cardA= new Card("memImages/CardBack.png","memImages/OFYellows.png");
	  var cardB = new Card("memImages/CardBack.png","memImages/OGImg.png");
	  var cardC = new Card("memImages/CardBack.png","memImages/MSYell.png");
	  var cardD = new Card("memImages/CardBack.png","memImages/OFInn.png");
	  var cardE = new Card("memImages/CardBack.png","memImages/GCYellow.png");
	  var cardF = new("memImages/CardBack.png","memImages/YSLake.png");
	  
	  var pic=0;
	  var pic=1;
	  var tblArrLen=tblArr.length;
	  //tblArr = [imgArr[0],imgArr[0],imgArr[1],imgArr[1],imgArr[2],imgArr[2],imgArr[3],imgArr[3],imgArr[4],imgArr[4],imgArr[5],imgArr[5]];
	  tblArr = [cardA,cardA,cardB,cardB,cardC,cardC,cardD,cardD,cardE,cardE,cardF,cardF];
	  shuffle(tblArr);
	  var clicked;

  function changeimage(cardNum,cardImg)
  {
   if (pic==0)
     {
       pic=1;
       document.getElementById(cardNum).src=cardImg;
	   if (count>2){
	   count=0;
	   cMatch=[];} 

	   count +=1;

     }
   else
     {
       pic=0;
       document.getElementById(cardNum).src=defaultImage;
     }
  }
  function dragstart_handler(ev) {
 // Add the target element's id to the data transfer object
 ev.dataTransfer.setData("application/my-app", ev.target.id);
 ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();
 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("application/my-app");
 ev.target.appendChild(document.getElementById(data));
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function deClick(clicked) {
				//el_down.innerHTML = "ID = "+clicked;
				 imgID = clicked;
				 return imgID;
				// document.writeln("The id is " +id);
			}
var imIdx= deClick(clicked);

function findMatch(imgID){
   if (imgID=="tblArr0"){
   arrMatch=tblArr[0];
	}
	else if (imgID=="tblArr1"){
	arrMatch=tblArr[1];
	}
	else if (imgID=="tblArr2"){
	arrMatch=tblArr[2];
	}
	else if (imgID=="tblArr3"){
	arrMatch=tblArr[3];
	}
	else if (imgID=="tblArr4"){
	arrMatch=tblArr[4];
	}
	else if (imgID=="tblArr5"){
	arrMatch=tblArr[5];
	}
	else if (imgID=="tblArr6"){
	arrMatch=tblArr[6];
	}
	else if (imgID=="tblArr7"){
	arrMatch=tblArr[7];
	}
	else if (imgID=="tblArr8"){
	arrMatch=tblArr[8];
	}
	else if (imgID=="tblArr9"){
	arrMatch=tblArr[9];
	}
	else if (imgID=="tblArr10"){
	arrMatch=tblArr[10];
	}
	else if (imgID=="tblArr11"){
	arrMatch=tblArr[11];
	}
	else{arrMatch=tblArr[0];
	}
	isMatch(arrMatch,imgID);

	}

	 imIdx=findMatch(imgID);
	/* function matchedArr(){
	 if (count==1){
		cMatch.unshift(arrMatch);
	 }
	 if (count==2){
		cMatch.push(arrMatch);
	 }
	 else {cMatch={};
	 count=0;}
	 return cMatch[];
	 }
	  if (count==1){
	   cMatch.unshift(arrMatch);
	   match1=imgID;
	   }*/




	function isMatch(arrMatch,imgID){

	   if (count===1){
	   cMatch.push(arrMatch);
	   match1=imgID;
	   }

	   else if (count===2){
	   // var index2=deClick(clicked);
	  cMatch.push(arrMatch);
	  match2=imgID;

	   {
	   if (cMatch[0]==cMatch[1]){
	   bMatch = true;
	   //cMatch.shift();
	   //cMatch.shift();
	  //cMatch.length=0;
	  cMatch=[];
	   count=0;
	   match1=0;
	   match2=0;
	   }

	   else
	   {bMatch= false;

	    document.getElementById(match1).src=defaultImage;
	    document.getElementById(match2).src=defaultImage;
		cMatch.shift();
		//cMatch.shift();
		cMatch.length=0;
		cMatch=[];
		count=0;
		match1=0;
		match2=0;
	   }
	   //else{bMatch=false;}}
	 }
	 if(count>2&&(img.scr!=defaultImage)){
		document.getElementById(match1).src=defaultImage;
	    document.getElementById(match2).src=defaultImage;
	  count=0;
	  cMatch=[];
	  match1=0;
	  match2=0;}
	  }
	  else{
		  bMathch=false;
		  cMatch=[];}
	   return bMatch;

	   // count=0;
	  // match=[];


	}
	function start()
			{
				changeimage(cardNum,cardImg);
				dragstart_handler(ev);
				dragover_handler(ev);
				drop_handler(ev);
				shuffle(tblArr);
				deClick(clicked);
				findMatch(imIdx);
				isMatch();
			}

	 window.addEventListener("load",start,false);
