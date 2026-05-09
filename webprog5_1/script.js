
let answers = [];
let step = 0;


function next(ans){
  answers.push(ans);

  document.getElementById("q" + step).classList.remove("active");
  step++;

  let progress = (step / 4) * 100;
  document.getElementById("bar").style.width = progress + "%";

  if(step < 4){
    document.getElementById("q" + step).classList.add("active");
    restoreSelection();
  } else {
    showResult();
  }
}

function showResult(){ 
  document.getElementById("result").style.display = "block";
  const q1 = answers[0];
  const q2 = answers[1];
  const q3 = answers[2];
  const q4 = answers[3];

  let key = "";

  // weird系を優先
  if(q3 === "weird"){

    if(q2 === "groove"){
      key = "group4"; // 混沌派
    }else if(q1 === "heavy" && q4 === "night"){
      key = "group7";
    }else if(q1 === "heavy" && q4 === "day"){
      key = "group1";
    }else{
      key = "group8"; // 奇妙界隈
    }

  }else{

    // heavy系
    if(q1 === "heavy"){

      if(q2 === "still"){
        key = "group5"; // 思考潜水
      }
      else if(q2 === "still" && q4 === "night"){
        key = "group1"; // 湿度高
      }
      else if(q2 === "groove" && q4 === "night"){
        key = "group7"; // MIDNIGHT
      }
      else{
        key = "group6";
      }

    }

    // light系
    else{

      if(q2 === "groove" && q4 === "day"){
        key = "group3"; // 揺れ族
      }
      else if(q4 === "night"){
        key = "group2"; // しゅうまつ族
      }
      else{
        key = "group6"; // フィルム肌
      }

    }
  }

     displayResult(key); }

const data = {
group1:{title:"湿度高型:ESMI",desc:"だいぶしっとりしていますから、椎名林檎で一旦落ち着きましょう。",
  songs:[{name:"椎名林檎: 浴室",id:"14G_t5Z6k-s",url:"https://open.spotify.com/track/5Mg6yx8m3SrFP5yzFP7RQd"},
    {name:"東京事変: 修羅場",id:"TlgDgNDSZYE",url:"https://open.spotify.com/track/5cidiFqDnDm8vloobKYR7B"},
    {name:"Thundercat Them Changes",id:"GNCd_ERZvZM",url:"https://open.spotify.com/track/5OW9VplZD0nYxhyMelDpQQ"},
    ],
    comment:"ついつい考え事しちゃうよね"},
group2:{title:"しゅうまつ族型:ESPA",desc:"さっぱり派です。",
  songs:[{name:"キタニタツヤ: すてきなしゅうまつを！",id:"By7IfhoAyqA",url:"https://open.spotify.com/track/4Ntdp3aRtZPlteJjz0PBQb"},
  {name:"m-flo: Summer time love",id:"vsPWV1O5F1s",url:"https://open.spotify.com/track/6tMDcQdonE9l0CP2YmxzH6"},
  {name:"Two Door Cinema Club: Undercover Martyn",id:"LLK4oaXUuLg",url:"https://open.spotify.com/track/6GQLX6Z28fYwDNCrhaKzYF"},
  {name:"Michael Jackson: PYT(Pretty Young Thing)",id:"1ZZQuj6htF4",url:"https://open.spotify.com/track/1CgmY8fVN7kstVDZmsdM5k"}],
    comment:""},
group3:{title:"揺れ族型:EPMA",desc:"ノリノリパーティーピーポーということです。",
  songs:[{name:"Balming Tiger: Buriburi",id:"B_gKTJTIcYw",url:"https://open.spotify.com/track/67jY28XGWZzr5YaOju8AIL"},
  {name:"Lakim: A Pimp Named Slickback",id:"VB8lIwhOsP4",url:"https://open.spotify.com/track/4hQz37Z88go8H8hrK7ncVz"},
  {name:"Michael Gray: The Weekend",id:"N3kkNfH4yco",url:"https://open.spotify.com/track/5iZti37mVPkYQHI3NAz1ZY"}],
  comment:"もしかして：踊り子"},
group4:{title:"混沌派型:EPXA",desc:"変拍子とかも好きそうですね。",
  songs:[{name:"King Gnu: 千両役者",id:"YOYeJn4mz8M",url:"https://open.spotify.com/track/3kk5I0NtYAUesPqlzDFkKd"},
  {name:"luv: Motrr",id:"C2J4HYBV8L8",url:"https://open.spotify.com/track/2pqwErADUsGCd4DnJwSOp3"},
  {name:"星野源: Cube",id:"sen_L0IRN_w",url:"https://open.spotify.com/track/6zyo1q1mrt3cnpduIHoLSq"}],
  comment:""},
group5:{title:"思考潜水型:CSMI",desc:"疲れているときはちゃんと休んでください",
  songs:[{name:"椎名もた: Human",id:"-GgFVsHdgRo",url:"https://open.spotify.com/track/4JWaK7BQLSN1XenJfz5s8s"},
  {name:"やくしまるえつこ: ヴィーナスとジーザス",id:"CnPtuwiswIs",url:"https://open.spotify.com/track/5DvpbuHnDKCOL7MInN7cln"},
  {name:"r－906: 削いで、",id:"5fMzamHEjyGNZjyvUPMsd5",url:"https://open.spotify.com/track/5fMzamHEjyGNZjyvUPMsd5"}],
  comment:""},
group6:{title:"フィルム肌型:CPMI",desc:"湿っぽい夏は嫌いですか？",
  songs:[{name:"Ginger Root: Loretta",id:"u-WTfP3WJc4",url:"https://open.spotify.com/track/4v3icU8NQfjM8uwIz9Ug1h"},
 {name: "相対性理論: 夏の黄金比",id:"wGtX3nYpBkE",url:"https://open.spotify.com/track/69ddGZa9yqw1cB9u6BrfuU"},
 {name: "初星学園: サンフェーデッド",id:"XLwmEuM0dIw",url:"https://open.spotify.com/track/5w4MocA1VIaahP49TlJ3w6"},
 {name:"キリンジ: 時間がない",id:"ZsJnR8-qsCk",url:"https://open.spotify.com/track/4X6jKZPHkKLbrcEZu13VXK"}],
  comment:""},
group7:{title:"MIDNIGHT型:CSPI",desc:"あなたがいればどんな場所でも都会になるね",
  songs:[{name:"電気グルーヴ: shangri-la",id:"auh-v9R64r0",url:"https://open.spotify.com/track/5Q18D00FTTQ1LEPMFrtgyc"},
  {name:"The Wombats: Greek Tragedy Oliver Nelson Remix",id:"BtAQfFWYrig",url:"https://open.spotify.com/track/64rqvMhAPLLEag310IG3z9"},
  {name:"サカナクション: 表参道26時",id:"T0DJWAj_d0A",url:"https://open.spotify.com/track/1R2BCFaowdclhTLJPYVZvb"},
  {name:"Daft Punk: Face to Face",id:"UKYWWfR_GKA",url:"https://open.spotify.com/track/7v9Q0dAb9t7h8gJOkcJHay"}],
  comment:""},
group8:{title:"奇妙界隈型:CPMA",desc:"おお！6.25%の確率です！おめでとう！",
  songs:[{name:"Perfume: Polygon Wave",id:"Q5_2VK_Hj2s",url:"https://open.spotify.com/track/6Ujff0V1HPkvD6QxLHctff"},
  {name:"ダンスマン: 二中のファンタジー 体育を休む女の子編",id:"sSe20Hf0sNQ",url:"https://open.spotify.com/track/0ubPdgWG29EvVLf6LZ11D4"}],
  comment:""}
};

function displayResult(key){

document.body.classList.remove(
  "group1","group2","group3","group4","group5","group6","group7","group8"
);
document.body.classList.add(key);

  document.getElementById("title").innerText = data[key].title;
  document.getElementById("desc").innerText = data[key].desc;
  document.getElementById("comment").innerText=data[key].comment;

  const songsDiv = document.getElementById("songs");
  songsDiv.innerHTML = "";

  data[key].songs.forEach(song => {
    let div = document.createElement("div");
    div.className = "song-card";

    let p = document.createElement("p");
    p.innerText = song.name;

    let img = document.createElement("img");
    img.src = "https://img.youtube.com/vi/" + song.id + "/hqdefault.jpg";
    img.style.width = "300px";
    img.style.borderRadius = "10px";
    img.style.cursor = "pointer";

 

    img.onclick = () => {
      window.open(song.url, "_blank");
    };

    div.appendChild(p);
    div.appendChild(img);

    songsDiv.appendChild(div);
  });
}
function back(){
  if(step <= 0) return;

  document.getElementById("q" + step).classList.remove("active");

  step--;

  answers.pop();

  let progress = (step / 4) * 100;
  document.getElementById("bar").style.width = progress + "%";

  document.getElementById("q" + step).classList.add("active");

  restoreSelection(); 
}

function restoreSelection(){
  const buttons = document.querySelectorAll("#q" + step + " button");

  buttons.forEach(btn => {
    btn.classList.remove("selected");

    if(btn.getAttribute("onclick")?.includes(selected[step])){
      btn.classList.add("selected");
    }
  });
}
function restart(){

  answers = [];
  step = 0;

  // 結果を閉じる
  document.getElementById("result").style.display = "none";

  // 全質問を非表示
  for(let i = 0; i < 4; i++){
    document.getElementById("q" + i).classList.remove("active");
  }

  // 最初の質問を表示
  document.getElementById("q0").classList.add("active");

  // プログレスバー戻す
  document.getElementById("bar").style.width = "0%";

  // bodyクラス削除
  document.body.classList.remove(
    "group1","group2","group3","group4",
    "group5","group6","group7","group8"
  );

  // ボタン選択状態リセット
  document.querySelectorAll("button").forEach(btn => {
    btn.classList.remove("selected");
  });
}

``

