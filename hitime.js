var hitimer;
function getHiTime(){
  var days= ['Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  h, m, mod, now= new Date();
  now.setUTCHours(now.getUTCHours()-10);

  h= now.getUTCHours();
  mod= h<12? " am":" pm";
  if(h>12) h -= 12;
  else if(h== 0) h= 12;

  m=now.getUTCMinutes()+'';
  while(m.length<2)m+='0';
  return days[now.getUTCDay()]+ ' '+ h+ ':'+ m+ mod;
}

function showHiTime(){
  var who= document.getElementById('HiTime'),
  say= who.firstChild.data,
  when= getHiTime();

  if(say!= when) who.firstChild.data= when;
}
window.onload=function(){
  showHiTime();
  hiTimer= setInterval(showHiTime, 5000);
}