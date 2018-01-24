function getFirstSelector(selector){
  return document.querySelector('selector');
}

function nestedTarget(){
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n){
  var el = document.getElementsByClassName('ranked-list');
  console.log(el);
}
