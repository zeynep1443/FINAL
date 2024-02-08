merhaba();
saat();

function merhaba() {
    let isim = prompt("Merhaba, isminiz nedir?");
    alert("Hoşgeldin " + isim);
}

function saat() {
  var div = document.createElement("div");
  div.style.textAlign = "center";
  div.style.padding = "20px";
  div.style.whiteSpace = "nowrap"
  div.style.background = "black";
  div.style.color = "rgb(16,245,0)";
  div.style.position = "fixed";
  div.style.bottom = "0";
  div.style.right = "0";
  setInterval(() => {
    var time = new Date();
    var hour = time.getHours();
    if(hour < 10){hour = "0" + hour}
    var dakika = time.getMinutes();
    if(dakika < 10){dakika = "0" + dakika}
    var saniye = time.getSeconds();
    if(saniye < 10){saniye = "0" + saniye}
    var icerik = hour + " : " + dakika + " : " + saniye
    div.innerHTML = icerik;
  }, 1000);
  document.body.append(div);
}


function arkaplan(){
  document.body.style.background = "rgb(" + Math.round((Math.random()*175)) + ", " + Math.round((Math.random()*175)) + ", " + Math.round((Math.random()*175)) + ")";
}