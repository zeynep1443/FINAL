merhaba();
saat();

function merhaba() {
  if (!localStorage.getItem("merhaba")) {
    let isim = prompt("Merhaba, isminiz nedir?");
    alert("Hoşgeldin" + isim);
  }
  localStorage.setItem("merhaba", true);
}

function saat() {
  setInterval(() => {
    var time = new Date();
    var hour = time.getHours();
    var dakika = time.getMinutes();
    var saniye = time.getSeconds();
    var div = document.createElement("div");
    div.style.textAlign = "center";
    div.innerHTML = hour + " : " + dakika + " : " + saniye;
    document.body.append(div);
  }, 1000);
}
