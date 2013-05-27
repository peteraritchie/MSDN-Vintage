var items = document.querySelectorAll('#curversion');
if(items.length > 0){
  var item = items[0];
  if(!(item.innerText.indexOf(".NET Framework") == 0)) {
    return;
  }
  if(!(item.innerText == ".NET Framework 4.5")) {
    var topicDivs = document.querySelectorAll('.topic');
    if(topicDivs.length > 0){
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
}
