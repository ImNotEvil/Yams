function change(l,n){var e=document.getElementsByClassName(`L${l}J${n}`),a=e[0].value;""==a&&(a=0),toggle(e[0]),toggle(e[1]),e[1].innerHTML=a,total(n)}function total(l){for(var n=0,e=1;e<17;e++){var a,s=document.querySelector(`input.L${e}J${l}`);if(7==e&&(document.getElementById(`L0J${l}`).innerHTML=n,n>62?(a="50",n+=50):a="0",document.getElementById(`L7J${l}`).innerHTML=a),null!=s){var c=s.value;""==c&&(c="0"),n+=parseInt(c)}}document.getElementById(`L17J${l}`).innerHTML=n}function toggle(l){"none"===l.style.display?l.style.display="block":l.style.display="none"}var nb_player=1;function add_player(){nb_player++,document.getElementsByClassName("breadcrumb")[0].innerHTML+='<li><a data-toggle="tab" href="#?">?</a></li>'.replaceAll("?",nb_player.toString()),document.getElementsByClassName("tab-content")[0].innerHTML+='<div id="?" class="tab-pane"><h4 style="text-align:center"><label contenteditable="true">Joueur_?</label></h4><div class="row"><div class="col-xs-5"><label>Somme des 1</label></div><div class="col-xs-6"><input class="form-control L1J?" onchange="change(1,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L1J?" onclick="change(1,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Somme des 2</label></div><div class="col-xs-6"><input class="form-control L2J?" onchange="change(2,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L2J?" onclick="change(2,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Somme des 3</label></div><div class="col-xs-6"><input class="form-control L3J?" onchange="change(3,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L3J?" onclick="change(3,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Somme des 4</label></div><div class="col-xs-6"><input class="form-control L4J?" onchange="change(4,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L4J?" onclick="change(4,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Somme des 5</label></div><div class="col-xs-6"><input class="form-control L5J?" onchange="change(5,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L5J?" onclick="change(5,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Somme des 6</label></div><div class="col-xs-6"><input class="form-control L6J?" onchange="change(6,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L6J?" onclick="change(6,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Total partie haute</label></div><div class="col-xs-6"><button class="btn btn-warning btn-block" id="L0J?">0</button></div></div><div class="row"><div class="col-xs-5"><label>Bonus</label></div><div class="col-xs-6"><button class="btn btn-warning btn-block L7J?" id="L7J?">0</button></div></div><div class="row"><div class="col-xs-5"><label>Une paire</label></div><div class="col-xs-6"><input class="form-control L8J?" onchange="change(8,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L8J?" onclick="change(8,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Deux paires</label></div><div class="col-xs-6"><input class="form-control L9J?" onchange="change(9,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L9J?" onclick="change(9,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Brelan</label></div><div class="col-xs-6"><input class="form-control L10J?" onchange="change(10,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L10J?" onclick="change(10,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Carré</label></div><div class="col-xs-6"><input class="form-control L11J?" onchange="change(11,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L11J?" onclick="change(11,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Full</label></div><div class="col-xs-6"><input class="form-control L12J?" onchange="change(12,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L12J?" onclick="change(12,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Petite suite</label></div><div class="col-xs-6"><input class="form-control L13J?" onchange="change(13,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L13J?" onclick="change(13,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Grande suite</label></div><div class="col-xs-6"><input class="form-control L14J?" onchange="change(14,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L14J?" onclick="change(14,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>Chance</label></div><div class="col-xs-6"><input class="form-control L15J?" onchange="change(15,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L15J?" onclick="change(15,?)" style="display:none">0</button></div></div><div class="row"><div class="col-xs-5"><label>YAMS</label></div><div class="col-xs-6"><input class="form-control L16J?" onchange="change(16,?)" type="number" min="0" placeholder="0"><button class="btn btn-warning btn-block L16J?" onclick="change(16,?)" style="display:none">0</button></div></div><hr><div class="row"><div class="col-xs-5"><label>TOTAL</label></div><div class="col-xs-6"><button class="btn btn-warning btn-block" id="L17J?">0</button></div></div><hr></div>'.replaceAll("?",nb_player.toString())}add_player();window.onbeforeunload=function(){return "If you leave this page, you will lose any unsaved changes.";}
