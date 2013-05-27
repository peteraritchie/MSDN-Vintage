var showWatermark = false;
var items = document.querySelectorAll('#curversion');

if(items.length > 0) {
  var item = items[0];
  if((item.innerText.indexOf(".NET Framework ") == 0)) {
    var curVerNum = parseFloat(item.innerText.substring(15));
    items = document.querySelectorAll('#vsPanel > li > a');
    var verNum = parseFloat(items[0].innerText.substring(15));
    showWatermark = curVerNum < verNum;
  }
  if((item.innerText.indexOf("SQL Server ") == 0)) {
    var curVerNum = parseFloat(item.innerText.substring(11));
    items = document.querySelectorAll('#vsPanel > li > a');
    var verNum = 0.0;
    for(var i = 0; i < items.length; ++i) {
      var tempNum = parseFloat(items[i].innerText.substring(11, 15));
      if(items[i].innerText.substring(11).length > 4) {
        tempNum = tempNum + 0.1;
      }
      if(tempNum > verNum) verNum = tempNum;
    }

    showWatermark = curVerNum < verNum;
  }
}

if(curVerNum < verNum) {
  var topicDivs = document.querySelectorAll('.topic');
  if(topicDivs.length > 0) {
    var topicDiv = topicDivs[0];
    var newdiv = document.createElement('div');
    newdiv.innerHTML = "Vintage";
    newdiv.style.fontSize = '200pt';
    newdiv.style.color ='#d0d0d0';
    newdiv.style.position = 'fixed';
    newdiv.style.width='100%';
    newdiv.style.height='100%';
    newdiv.style.margin='0';
    newdiv.style.zIndex=-1;
    newdiv.style.left=newdiv.left;
    newdiv.style.top='0';
    topicDiv.appendChild(newdiv);
  }
}
