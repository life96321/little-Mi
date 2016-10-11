var meng = document.querySelectorAll(".meng");
var blue = document.querySelectorAll(".blue");
var jianjie = document.querySelectorAll(".jianjie");
var tus = document.querySelectorAll(".zyPart3-2 a");
for(var i = 0; i < meng.length; i++) {
	meng[i].onmouseover = function() {
		for(var j = 0; j < meng.length; j++) {
			if(this == meng[j]) {
				meng[j].style.display = "none";
			} else {
				meng[j].style.display = "";
			}
		}
	}
}
for(var b = 0; b < tus.length; b++) {
	tus[b].onclick = function() {
		for(var a = 0; a < tus.length; a++) {
			console.log(1);
			if(this == tus[a]) {

				blue[a].style.display = "block";
				jianjie[a].style.display = "block";
			} else {
				blue[a].style.display = "";
				jianjie[a].style.display = "";
			}
		}
	}
}
