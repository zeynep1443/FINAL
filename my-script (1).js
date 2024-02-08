merhaba();
saat();

function merhaba() {
  if (!localStorage.getItem("merhaba")) {
    let isim = prompt("Merhaba, isminiz nedir?");
    alert("Hoşgeldin " + isim);
  }
  localStorage.setItem("merhaba", true);
}

function saat() {
  var div = document.createElement("div");
  div.style.textAlign = "center";
  setInterval(() => {
    var time = new Date();
    var hour = time.getHours();
    var dakika = time.getMinutes();
    var saniye = time.getSeconds();
    div.innerHTML = hour + " : " + dakika + " : " + saniye;
  }, 1000);
  document.body.append(div);
}
