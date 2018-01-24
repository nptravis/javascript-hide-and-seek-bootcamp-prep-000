function getFirstSelector(selector){
  return document.querySelector(`${selector}`);
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  var el = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i in el){
    el[i].innerHTML = parseInt(el[i].innerHTML) + n;
  }

}

function deepestChild(){
  var el = document.getElementById('grand-node').querySelectorAll('div');
  console.log(el[el.length-1].innerHTML);
}