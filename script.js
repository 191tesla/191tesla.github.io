
var output = $('.output');
var input = $('textarea.input');
var toOutput;


input.keypress(function(e) {
	if (e.which == 13) {
		var inputVal = $.trim(input.val());
		

		if (inputVal == "kırbaç" || inputVal == "Kırbaç" || inputVal == "KIRBAÇ" ) {
			seperator();
			kirbac();
			seperator();
			input.val('');
		}else if (inputVal == "oyunlar" || inputVal == "Oyunlar" || inputVal == "OYUNLAR" ) {
			oyunlar();
			input.val('');
		}  
		else if (inputVal == "ping") {
			pong();
			input.val('');
		} 
		else if (inputVal == "tetris") {
			tetris();
			input.val('');
		}
		else if (inputVal == "platform") {
			platform();
			input.val('');
		}else if (inputVal == "hakkımda"||inputVal == "Hakkımda"||inputVal == "HAKKIMDA") {
			hakkımda();
			input.val('');
		} else if (inputVal == "iletişim"||inputVal == "İletişim" ||inputVal == "İLETİŞİM" ) {
			iletisim();
			input.val('');
		} else if (inputVal == "temizle"||inputVal == "Temizle"||inputVal == "TEMİZLE") {
			temizle();
			input.val('');
		} else if (inputVal.startsWith("konuş") ||inputVal.startsWith("Konuş") || inputVal.startsWith("KONUŞ") === true) {
			konus(inputVal);
			input.val('');
		} else if (inputVal == "tarih"||inputVal == "Tarih"||inputVal == "TARİH") {
			tarih();
			input.val('');
		}else if (inputVal == "Çıkış" ||inputVal == "çıkış" || inputVal == "ÇIKIŞ" === true) {
			Output('<span class="blue">Güle güle, İyi hacklendin kendine iyi bak bye.</span></br><h1 class="anim">MUTLU YAŞLAR SULTAN</h1>');
			data1 = "Mutlu yıllar sultan kalp"
			text = encodeURIComponent(data1);
			//console.log(text);
			var url = "https://translate.google.com.vn/translate_tts?ie=UTF-8&q="+text+"&tl=tr&client=tw-ob";
          //  $('audio').attr('src', url).get(0).play();
			var audio =new Audio(url);
			audio.play();
			setTimeout(function() {
				window.open('https://www.youtube.com/watch?v=MwpMEbgC7DA');
				
			}, 3000);
			clear();
			
			
			
		} 
		else if (inputVal=="köle" ||inputVal == "Köle" || inputVal=="KÖLE" === true) {
			data2 = "Emredin efendim. Sizin emirleriniz benim için bir şereftir. Emirlerinizi bekliyorum"
			text = encodeURIComponent(data2);
			//console.log(text);
			var url = "https://translate.google.com.vn/translate_tts?ie=UTF-8&q="+text+"&tl=tr&client=tw-ob";
          //  $('audio').attr('src', url).get(0).play();
			var audio =new Audio(url);
			audio.play();
			clear();
		}else {
			Output('<span>Bu kodu unutmuşum :D </span></br>');
			input.val('');
		}
	}
});

// fonksiyonlar 
// =======================================

// seperatör 
function clear()
   {  
   document.getElementById('yazi').value = "";
   }
function seperator() {
	Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

//Ekranı temizle
function temizle() {
	output.html("");
	Output('<div class="console"><div class="output"><br/><span class="green">Welcome to the Pro^s Home. </br> Ping:1.000.525 | Sakin ol Sultan bilgisayarında ok! </br> </span><br/><span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br><pre contenteditable="false"></br>______________               ________ ________ _______ </br>___  __/___  /_ _____        ___  __ \___  __ \__  __ \</br>__  /   __  __ \_  _ \       __  /_/ /__  /_/ /_  / / /</br>_  /    _  / / //  __/       _  ____/ _  _, _/ / /_/ / </br>/_/     /_/ /_/ \___/        /_/      /_/ |_|  \____/  </br></pre></br><span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}

// kullanılabilir komutlar
function kirbac() {
	var commandsArray = ['Hele şunlara bi bak:', '>Kırbaç', '>Hakkımda', '>İletişim', '>Ping','>Oyunlar', '>Tarih', '>Temizle','>Köle', '>Konuş:kullanım şekli: Pro > Konuş Örnek yazı','>Çıkış'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span>' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
	
}
function oyunlar() {
	var commandsArray = ['Oyunlar > ', '>Tetris', '>Platform'];
	for (var i = 0; i < commandsArray.length; i++) {
		var out = '<span class="green">' + commandsArray[i] + '</span><br/>'
		Output(out);
	}
	
}
// Ping pong klasik :D asşldkşal
function pong() {
	Output('<span>pong</span></br><span class="pong"><b class="left">|</b><b class="right">|</b></span></br>');
}
// Tetris belki başka oyunlar da olabilir.
function platform() {
	seperator(); 
	Output('<span class="blue">İyi eğlenceler.</span></br>');
	seperator();

			setTimeout(function() {
				window.open('platform/index.html');
				
			}, 3000);
}
function tetris() {
	Output('<canvas width="300" height="600"></canvas><button style="width:300px"  id="playbutton" onclick="playButtonClicked();">Kırbaçla</button><script src="js/tetris.js"></script><script src="js/controller.js"></script><script src="js/render.js"></script>');
}
// Haydi söyle :D
function konus(data) {
	
	data = data.substr(data.indexOf(' ') + 1);
	console.log(data);
	Output('<span class="green">[Haydi söyle]:</span><span>' + data + '</span></br> ');
	
	text = encodeURIComponent(data);
	console.log(text);
	var url = "https://translate.google.com.vn/translate_tts?ie=UTF-8&q="+text+"&tl=tr&client=tw-ob";
          //  $('audio').attr('src', url).get(0).play();
	var audio =new Audio(url);
	audio.play();
}



function tarih() {
	Output('<span>Şuan dünya zamanıyla <span class="red">1 milyon 525</span> yılındayız :P :D  </span></br>');
}

function hakkımda() {
	var aboutMeArray = ['>:', 'Selam!', 'Ben Sultan, profesyonel hackerlık, teknoloji , kırbaç , 7 Days ve  Dijital çizim ustalığı yapmaktayım. Daha tanışmadık mı? Merak etme ben seni zaten tanıyorumdur. Hacklenmekten kaçamazsınız!','Bu arada ben senin yerine hesaplarından kendimi takip ettim ama farketmezsen şurda bak linkler var!','<span class="red">Youtube:<a href="https://www.youtube.com/c/Sultanca"style="color:white" target="_blank">Sultanca</a></span> ','<span style="color:darkorchid">İnstagram:<a href="https://www.instagram.com/sultaanca/"style="color:white" target="_blank">Sultanca</a></span> ','<span style="color:blue">Twitch:<a href="https://www.twitch.tv/sultanca/"style="color:white" target="_blank">Sultanca</a></span> '];
	seperator();
	for (var i = 0; i < aboutMeArray.length; i++) {
		var out = '<span>' + aboutMeArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

function iletisim() {
	var contactArray = ['>:', 'Siz bana ulaşamazsınız gerekirse ben sizi bulurum ;) '];
	seperator();
	for (var i = 0; i < contactArray.length; i++) {
		var out = '<span>' + contactArray[i] + '</span><br/>'
		Output(out);
	}
	seperator();
}

// Poutput klasına yaz
function Output(data) {
	$(data).appendTo(output);
}