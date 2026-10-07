"use strict";

/* =========================
   BUSINESS RESCUE GAME DATA
   ========================= */
const levels = [
{
 id:1, name:"Training Academy", icon:"🏫", difficulty:2, budget:20000,
 problem:"Sales are falling. The CEO wants to know whether this is a temporary fluctuation or a business-wide decline.",
 statement:"Our sales are falling. Find out why.",
 rootCause:"Declining Trainer Performance",
 evidence:[["Trainer KPI","-25%"],["Student Satisfaction","-30%"],["Student Retention","-18%"],["Sales","-35%"]],
 investigations:[
  {id:"category",title:"Category-wise Sales",type:"bar",desc:"Compare sales across training categories.",correct:false,
   data:[["Python",12.5],["Data Analytics",13.1],["Web Development",11.8],["Cloud",10.9]],unit:"₹L"},
  {id:"monthly",title:"Monthly Sales",type:"line",desc:"Compare the sales trend across years.",correct:true},
  {id:"region",title:"Region-wise Sales",type:"bar",desc:"Compare sales across operating regions.",correct:false,
   data:[["Mumbai",13.0],["Pune",12.1],["Nashik",10.9],["Thane",12.6],["Nagpur",11.7]],unit:"₹L"},
  {id:"trainer",title:"Trainer-wise Sales",type:"horizontal",desc:"Inspect sales contribution by trainer.",correct:false,
   data:[["A. Sharma",11.4],["P. Shah",12.2],["R. Khan",11.8],["S. Patil",12.0]],unit:"₹L"}
 ],
 second:[
  {id:"marketing",title:"Marketing Spend",type:"bar",desc:"See whether lower marketing investment explains the decline.",correct:false,data:[["2025",7.5],["2026",7.0]],unit:"₹L"},
  {id:"trainerPerf",title:"Trainer Performance",type:"kpi",desc:"Compare trainer effectiveness and student satisfaction.",correct:true},
  {id:"rent",title:"Office Rent",type:"comparison",desc:"Check whether rent has changed materially.",correct:false,data:[["2025",2.2],["2026",2.3]],unit:"₹L"},
  {id:"computers",title:"Number of Computers",type:"bar",desc:"Check operational capacity.",correct:false,data:[["2025",118],["2026",121]],unit:""}
 ],
 solutions:[
  {id:"workshop",name:"Trainer Skill Workshop",cost:8000,impact:"Trainer KPI +15%",score:24},
  {id:"feedback",name:"Customer Feedback Program",cost:4000,impact:"Satisfaction +10%",score:13},
  {id:"incentive",name:"Trainer Incentive Program",cost:7000,impact:"Trainer Performance +12%",score:18},
  {id:"marketing",name:"Marketing Campaign",cost:10000,impact:"New Leads +20%",score:4},
  {id:"equipment",name:"New Training Equipment",cost:12000,impact:"Operational efficiency +8%",score:2},
  {id:"hire",name:"Hire New Trainers",cost:15000,impact:"Capacity +20%",score:5}
 ]
},
{
 id:2,name:"Restaurant",icon:"🍔",difficulty:2,budget:18000,
 problem:"Revenue and customer ratings are falling. The owner believes more advertising may solve it.",
 statement:"Revenue is down and customers are unhappy. Find the real problem.",
 rootCause:"Customer Feedback / Service Quality",
 evidence:[["Monthly Revenue","-22%"],["Rating","-1.1★"],["Repeat Visits","-19%"],["Complaints","+37%"]],
 investigations:[
  {id:"monthlyRevenue",title:"Monthly Revenue",type:"line",desc:"Inspect revenue over time.",correct:true},
  {id:"menu",title:"Menu Item Sales",type:"bar",desc:"See which menu categories drive revenue.",correct:false,data:[["Burgers",82],["Pizza",75],["Drinks",41],["Desserts",29]],unit:"k"},
  {id:"location",title:"Location Sales",type:"bar",desc:"Compare branches.",correct:false,data:[["Vasai",91],["Nalasopara",87],["Naigaon",89]],unit:"k"},
  {id:"staff",title:"Staff-wise Sales",type:"horizontal",desc:"Compare sales contribution by staff.",correct:false,data:[["A",46],["B",51],["C",48],["D",44]],unit:"k"}
 ],
 second:[
  {id:"feedback",title:"Customer Feedback",type:"bar",desc:"Complaints and satisfaction reveal the service problem.",correct:true,data:[["Food",18],["Service",47],["Cleanliness",12],["Price",14]],unit:"%"},
  {id:"marketing",title:"Marketing Spend",type:"comparison",desc:"Marketing is broadly stable.",correct:false,data:[["2025",3.4],["2026",3.6]],unit:"₹L"},
  {id:"rent",title:"Rent Cost",type:"comparison",desc:"Rent is not the driver.",correct:false,data:[["2025",2.1],["2026",2.2]],unit:"₹L"},
  {id:"inventory",title:"Inventory Cost",type:"bar",desc:"Inventory costs have not changed enough.",correct:false,data:[["2025",19],["2026",20]],unit:"k"}
 ],
 solutions:[
  {id:"staffTraining",name:"Staff Training",cost:6000,impact:"Service quality +18%",score:25},
  {id:"kitchen",name:"Kitchen Process Improvement",cost:7000,impact:"Order consistency +15%",score:20},
  {id:"feedbackSystem",name:"Customer Feedback System",cost:4000,impact:"Complaint response +25%",score:15},
  {id:"marketing",name:"Marketing Campaign",cost:9000,impact:"New visitors +20%",score:3},
  {id:"menu",name:"Menu Redesign",cost:5000,impact:"Menu appeal +10%",score:9}
 ]
},
{
 id:3,name:"E-Commerce Store",icon:"🛒",difficulty:3,budget:25000,
 problem:"Revenue is stable, but profit is collapsing. Management wants the hidden cost driver.",
 statement:"Customers are still buying. So why are we making less money?",
 rootCause:"High Product Returns",
 evidence:[["Revenue","≈ stable"],["Gross Margin","-14%"],["Return Rate","+61%"],["Profit","-38%"]],
 investigations:[
  {id:"profit",title:"Product / Category Profitability",type:"bar",desc:"Find where margin is disappearing.",correct:true,data:[["Electronics",18],["Fashion",7],["Home",14],["Beauty",16]],unit:"%"},
  {id:"discount",title:"Discount Analysis",type:"bar",desc:"Inspect average discounts.",correct:false,data:[["Electronics",8],["Fashion",21],["Home",11],["Beauty",9]],unit:"%"},
  {id:"returns",title:"Return Rate",type:"bar",desc:"Compare product returns.",correct:false,data:[["Electronics",9],["Fashion",28],["Home",12],["Beauty",8]],unit:"%"},
  {id:"shipping",title:"Shipping Cost",type:"comparison",desc:"Check shipping cost movement.",correct:false,data:[["2025",4.1],["2026",4.5]],unit:"₹L"}
 ],
 second:[
  {id:"returnsRoot",title:"High Product Returns",type:"bar",desc:"Fashion has an abnormal return rate.",correct:true,data:[["Electronics",9],["Fashion",28],["Home",12],["Beauty",8]],unit:"%"},
  {id:"discount",title:"Discount Analysis",type:"bar",desc:"Discounts are a contributor, not the root cause.",correct:false,data:[["Electronics",8],["Fashion",21],["Home",11],["Beauty",9]],unit:"%"},
  {id:"shipping",title:"Shipping Cost",type:"comparison",desc:"Shipping increased only modestly.",correct:false,data:[["2025",4.1],["2026",4.5]],unit:"₹L"},
  {id:"margin",title:"Product Margin",type:"bar",desc:"Margin confirms the effect.",correct:false,data:[["Electronics",18],["Fashion",7],["Home",14],["Beauty",16]],unit:"%"}
 ],
 solutions:[
  {id:"discounts",name:"Reduce Excessive Discounts",cost:6000,impact:"Margin +8%",score:14},
  {id:"descriptions",name:"Improve Product Descriptions",cost:5000,impact:"Expectation mismatch -20%",score:16},
  {id:"packaging",name:"Improve Packaging",cost:7000,impact:"Damage returns -30%",score:20},
  {id:"returnsFix",name:"Fix High-Return Products",cost:10000,impact:"Return rate -45%",score:32},
  {id:"shipping",name:"Optimize Shipping",cost:8000,impact:"Shipping cost -12%",score:10}
 ]
},
{
 id:4,name:"Manufacturing Plant",icon:"🏭",difficulty:4,budget:30000,
 problem:"Product defects and customer returns are increasing. Production volume looks healthy, so where is quality breaking?",
 statement:"Defects are rising. Find the production signal.",
 rootCause:"Quality Control",
 evidence:[["Defect Rate","+42%"],["Returns","+31%"],["Machine Downtime","+12%"],["Supplier Issues","+8%"]],
 investigations:[
  {id:"defect",title:"Defect Rate by Product",type:"bar",desc:"Compare defect rates by product.",correct:true,data:[["A",4],["B",5],["C",17],["D",6]],unit:"%"},
  {id:"downtime",title:"Machine Downtime",type:"bar",desc:"Inspect downtime.",correct:false,data:[["M1",6],["M2",8],["M3",7],["M4",5]],unit:"%"},
  {id:"batch",title:"Production Batch Quality",type:"heatmap",desc:"Inspect quality across recent batches.",correct:false},
  {id:"supplier",title:"Supplier Quality",type:"bar",desc:"Compare supplier defect contribution.",correct:false,data:[["S1",5],["S2",7],["S3",6],["S4",8]],unit:"%"}
 ],
 second:[
  {id:"qc",title:"Quality Control",type:"comparison",desc:"Inspection gaps align with the defect spike.",correct:true,data:[["Inspection coverage",2025,88,2026,59]],unit:"%"},
  {id:"machine",title:"Machine Downtime",type:"bar",desc:"Downtime is not large enough to explain the spike.",correct:false,data:[["M1",6],["M2",8],["M3",7],["M4",5]],unit:"%"},
  {id:"supplier",title:"Supplier Quality",type:"bar",desc:"Supplier quality is relatively stable.",correct:false,data:[["S1",5],["S2",7],["S3",6],["S4",8]],unit:"%"},
  {id:"training",title:"Employee Training",type:"comparison",desc:"Training is unchanged.",correct:false,data:[["2025",74],["2026",75]],unit:"%"}
 ],
 solutions:[
  {id:"maintenance",name:"Machine Maintenance",cost:9000,impact:"Downtime -25%",score:13},
  {id:"inspection",name:"Quality Inspection",cost:10000,impact:"Defects -40%",score:30},
  {id:"audit",name:"Supplier Audit",cost:7000,impact:"Supplier defects -20%",score:9},
  {id:"training",name:"Employee Training",cost:8000,impact:"Process adherence +15%",score:16},
  {id:"equipment",name:"Equipment Replacement",cost:15000,impact:"Reliability +30%",score:10}
 ]
},
{
 id:5,name:"Delivery Company",icon:"🚚",difficulty:4,budget:22000,
 problem:"Late deliveries are increasing and customers are leaving. Overall delivery volume is strong.",
 statement:"Customers are waiting too long. Find the bottleneck.",
 rootCause:"Regional Delivery Bottleneck",
 evidence:[["Late Deliveries","+34%"],["Avg. Delivery Time","+2.1 days"],["Driver Workload","+18%"],["Churn","+21%"]],
 investigations:[
  {id:"region",title:"Region-wise On-Time Delivery",type:"bar",desc:"Compare on-time performance across regions.",correct:true,data:[["Mumbai",91],["Pune",88],["Nashik",69],["Thane",93],["Nagpur",86]],unit:"%"},
  {id:"time",title:"Average Delivery Time",type:"bar",desc:"Compare average delivery time.",correct:false,data:[["Mumbai",1.6],["Pune",1.8],["Nashik",3.4],["Thane",1.5],["Nagpur",2.0]],unit:"days"},
  {id:"driver",title:"Driver Workload",type:"bar",desc:"Inspect workload.",correct:false,data:[["Mumbai",78],["Pune",81],["Nashik",96],["Thane",72],["Nagpur",83]],unit:"%"},
  {id:"churn",title:"Customer Churn",type:"line",desc:"Inspect churn trend.",correct:false}
 ],
 second:[
  {id:"bottleneck",title:"Regional Delivery Bottleneck",type:"bar",desc:"Nashik has the clearest operational bottleneck.",correct:true,data:[["Mumbai",91],["Pune",88],["Nashik",69],["Thane",93],["Nagpur",86]],unit:"%"},
  {id:"driver",title:"Driver Workload",type:"bar",desc:"Workload supports the finding but is not the core diagnosis.",correct:false,data:[["Mumbai",78],["Pune",81],["Nashik",96],["Thane",72],["Nagpur",83]],unit:"%"},
  {id:"churn",title:"Customer Churn",type:"line",desc:"Churn is an outcome, not the root cause.",correct:false},
  {id:"time",title:"Average Delivery Time",type:"bar",desc:"Time confirms the bottleneck.",correct:false,data:[["Mumbai",1.6],["Pune",1.8],["Nashik",3.4],["Thane",1.5],["Nagpur",2.0]],unit:"days"}
 ],
 solutions:[
  {id:"staff",name:"Add Delivery Staff",cost:7000,impact:"Capacity +20%",score:18},
  {id:"routes",name:"Optimize Routes",cost:6000,impact:"Delivery time -18%",score:27},
  {id:"warehouse",name:"Regional Warehouse",cost:12000,impact:"Nashik time -35%",score:31},
  {id:"incentive",name:"Driver Incentive",cost:5000,impact:"On-time rate +8%",score:15},
  {id:"communication",name:"Customer Communication System",cost:4000,impact:"Churn -10%",score:8}
 ]
},
{
 id:6,name:"Hotel",icon:"🏨",difficulty:4,budget:20000,
 problem:"Demand is strong, but visitors are not completing bookings. Management needs to find the conversion leak.",
 statement:"People want rooms. Why aren't they booking?",
 rootCause:"Booking Process / Conversion Problem",
 evidence:[["Website Visits","+18%"],["Room Views","+15%"],["Booking Starts","+4%"],["Conversion","-41%"]],
 investigations:[
  {id:"funnel",title:"Booking Conversion Funnel",type:"funnel",desc:"Follow customers from visit to completed booking.",correct:true},
  {id:"rooms",title:"Room Demand",type:"bar",desc:"Demand by room type remains strong.",correct:false,data:[["Standard",74],["Deluxe",81],["Suite",67],["Family",76]],unit:"%"},
  {id:"source",title:"Traffic Source",type:"doughnut",desc:"Traffic sources are healthy.",correct:false,data:[["Search",42],["Social",23],["Direct",20],["Referral",15]],unit:"%"},
  {id:"season",title:"Seasonal Demand",type:"line",desc:"Demand trend remains strong.",correct:false}
 ],
 second:[
  {id:"process",title:"Booking Process / Conversion Problem",type:"funnel",desc:"The biggest drop occurs between booking page and completion.",correct:true},
  {id:"pricing",title:"Pricing",type:"bar",desc:"Pricing is competitive.",correct:false,data:[["Our Hotel",100],["Competitor A",104],["Competitor B",98],["Competitor C",107]],unit:"index"},
  {id:"photography",title:"Room Photography",type:"comparison",desc:"Photography affects appeal but is not the largest leak.",correct:false,data:[["Before",64],["Current",67]],unit:"quality"},
  {id:"support",title:"Customer Support",type:"bar",desc:"Support response is adequate.",correct:false,data:[["<1h",78],[ "1–3h",16],[">3h",6]],unit:"%"}
 ],
 solutions:[
  {id:"website",name:"Website Redesign",cost:9000,impact:"Conversion +18%",score:28},
  {id:"simplify",name:"Simplify Booking Process",cost:6000,impact:"Completion +25%",score:34},
  {id:"offer",name:"Promotional Offer",cost:5000,impact:"Conversion +8%",score:8},
  {id:"support",name:"Customer Support",cost:5000,impact:"Drop-off -7%",score:11},
  {id:"photos",name:"Better Room Photography",cost:4000,impact:"Room-page engagement +12%",score:9}
 ]
}
];

/* =========================
   CENTRAL GAME STATE
   ========================= */
const gameState = {
 level:1, score:0, budget:0, spent:0, timeRemaining:1200,
 currentInvestigation:0, phase:"first", selectedSolutions:[], gameStatus:"playing",
 selectedAnalysis:null, muted:false, timerId:null
};

const $ = id => document.getElementById(id);
const fmt = n => "₹" + Number(n).toLocaleString("en-IN");
const currentLevel = () => levels.find(l => l.id === gameState.level);

function showScreen(id){
 document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
 $(id).classList.add("active");
}
function toast(msg){
 const el=$("toast"); el.textContent=msg; el.classList.add("show");
 clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove("show"),2600);
}
function safe(fn,fallback){
 try{return fn()}catch(err){console.error(err); if(fallback)fallback(err); return null}
}
function playTone(type){
 if(gameState.muted || !window.AudioContext) return;
 safe(()=>{
  const ctx=playTone.ctx||(playTone.ctx=new AudioContext());
  const o=ctx.createOscillator(), g=ctx.createGain();
  o.connect(g);g.connect(ctx.destination);
  const map={correct:[660,.12],wrong:[170,.18],win:[880,.18],click:[300,.05]};
  const [freq,dur]=map[type]||map.click;
  o.frequency.value=freq;o.type="sine";g.gain.setValueAtTime(.045,ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+dur);
  o.start();o.stop(ctx.currentTime+dur);
 });
}
$("muteBtn").onclick=()=>{gameState.muted=!gameState.muted;$("muteBtn").textContent=gameState.muted?"🔇":"🔊";};

$("startBtn").onclick=()=>{playTone("click");renderLevels();showScreen("levelsScreen")};

function renderLevels(){
 $("levelGrid").innerHTML=levels.map(l=>`
  <article class="level-card glass" data-level="${l.id}">
   <div><div class="level-icon">${l.icon}</div><div class="level-num">LEVEL ${l.id}</div>
   <h3 style="margin-top:7px">${l.name}</h3><p>${l.problem}</p></div>
   <div><div class="difficulty">${[1,2,3,4,5].map(i=>`<i class="dot ${i<=l.difficulty?"on":""}"></i>`).join("")}</div>
   <button class="btn" style="width:100%;margin-top:14px">START INVESTIGATION →</button></div>
  </article>`).join("");
 document.querySelectorAll(".level-card").forEach(card=>card.onclick=()=>startLevel(Number(card.dataset.level)));
}
function startLevel(id){
 const l=levels.find(x=>x.id===id); if(!l)return;
 Object.assign(gameState,{level:id,score:0,budget:l.budget,spent:0,timeRemaining:1200,currentInvestigation:0,phase:"first",selectedSolutions:[],evidenceSeen:[],gameStatus:"playing",selectedAnalysis:null});
 clearInterval(gameState.timerId); gameState.timerId=setInterval(tick,1000);
 updateHUD(); renderInvestigation();
 showScreen("gameScreen"); playTone("click");
}
function tick(){
 if(gameState.gameStatus!=="playing")return;
 gameState.timeRemaining=Math.max(0,gameState.timeRemaining-1); updateHUD();
 if(gameState.timeRemaining===0) failure("TIME OUT","The clock reached zero before the business could be rescued.");
}
function updateHUD(){
 const l=currentLevel(); if(!l)return;
 $("hudBusiness").textContent=l.icon+" "+l.name;
 $("hudLevel").textContent=l.id;
 $("hudScore").textContent=gameState.score;
 $("hudBudget").textContent=fmt(Math.max(0,l.budget-gameState.spent));
 const m=Math.floor(gameState.timeRemaining/60),s=gameState.timeRemaining%60;
 $("hudTime").textContent=`${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
 const progress=gameState.phase==="first"?0.15:gameState.phase==="second"?0.4:gameState.phase==="solutions"?0.68:1;
 $("hudProgress").style.width=(progress*100)+"%";
}

function renderInvestigation(){
 const l=currentLevel();
 const arr=gameState.phase==="first"?l.investigations:l.second;
 const title=gameState.phase==="first"?"Which data clue should you inspect first?":"You have a signal. Which additional clue helps explain it?";
 $("gameMain").innerHTML=`
  <div class="kicker">INVESTIGATION ${gameState.phase==="first"?1:2}</div>
  <h2>${title}</h2>
  <div class="problem"><strong>CEO BRIEF:</strong> ${l.statement}</div>
  <p>Click an analytical option to inspect its evidence. <b>Don't guess. Investigate.</b></p>
  <div class="grid analysis-grid">${arr.map((a,i)=>`
    <article class="analysis-card glass" data-a="${i}">
      <div class="tag">Analysis ${i+1} · ${a.type}</div><h3>${a.title}</h3><p>${a.desc}</p>
    </article>`).join("")}</div>
  <div id="vizArea" class="chart-wrap"><div class="chart-fallback">Select an analysis above to inspect the data.</div></div>
  <div class="choice-footer"><div class="status" id="choiceStatus">Inspect the visualization as a hint. Explore at least two clues before continuing.</div>
  <button class="btn" id="chooseBtn" disabled>I HAVE ENOUGH EVIDENCE →</button></div>`;
 $("chooseBtn").addEventListener("click",commitAnalysis);
 $("sidePanel").innerHTML=`
  <div class="kicker">MISSION</div><h3>${l.icon} ${l.name}</h3>
  <p>${l.problem}</p><hr><div class="small">Current objective</div>
  <strong>${gameState.phase==="first"?"Find the strongest signal.":"Connect the symptom to its operational cause."}</strong>
  <hr><div class="small">Rule</div><p style="font-size:13px">Every visualization is evidence. There is no penalty for exploring. Find the pattern before deciding.</p>`;
 document.querySelectorAll(".analysis-card").forEach(card=>card.onclick=()=>selectAnalysis(Number(card.dataset.a)));
 updateHUD();
}

function selectAnalysis(index){
 const l=currentLevel(), arr=gameState.phase==="first"?l.investigations:l.second, a=arr[index];
 if(!a)return;
 gameState.selectedAnalysis=a;
 if(!gameState.evidenceSeen)gameState.evidenceSeen=[];
 const key=(gameState.phase==="first"?"F":"S")+a.id;
 if(!gameState.evidenceSeen.includes(key))gameState.evidenceSeen.push(key);
 document.querySelectorAll(".analysis-card").forEach((c,i)=>c.classList.toggle("selected-preview",i===index));
 $("choiceStatus").textContent=`Evidence collected: ${gameState.evidenceSeen.length}. This visualization is a clue — inspect other clues before deciding.`;
 $("chooseBtn").disabled=false;
 safe(()=>renderVisualization(a,$("vizArea")),()=>showVizFallback($("vizArea")));
 playTone("click");
}

function showVizFallback(container){
 container.innerHTML=`<div class="chart-fallback"><div><b>Visualization temporarily unavailable.</b><br><span class="small">Please try again.</span><br><button class="btn secondary" onclick="renderInvestigation()">TRY AGAIN</button></div></div>`;
}
function renderVisualization(a,container){
 if(!container||!a)throw new Error("Missing visualization container or data");
 container.innerHTML=`<div class="chart-head"><div><b>${a.title}</b><div class="small">${a.desc}</div></div>${a.id==="monthly"||a.id==="monthlyRevenue"?`<select id="yearFilter"><option value="all">All Years</option><option value="2025">2025</option><option value="2026">2026</option></select>`:""}</div><canvas id="mainCanvas"></canvas>`;
 const canvas=$("mainCanvas"); if(!canvas)throw new Error("Canvas missing");
 const draw=()=>safe(()=>drawChart(canvas,a),()=>showVizFallback(container));
 if(a.id==="monthly"||a.id==="monthlyRevenue"||a.id==="churn"||a.id==="season"){
   const f=$("yearFilter"); if(f)f.onchange=draw;
 }
 draw(); window.setTimeout(draw,20);
}

function prepCanvas(canvas){
 if(!canvas||!canvas.getContext)throw new Error("Invalid canvas");
 const rect=canvas.getBoundingClientRect(), w=Math.max(320,Math.floor(rect.width)),h=300,dpr=Math.min(2,window.devicePixelRatio||1);
 canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.height=h+"px";
 const ctx=canvas.getContext("2d");ctx.setTransform(dpr,0,0,dpr,0,0);return {ctx,w,h};
}
function chartBase(ctx,w,h){
 ctx.clearRect(0,0,w,h);ctx.font="12px Inter, Arial";ctx.fillStyle="#667785";
}
function drawAxes(ctx,w,h,left=52,bottom=38){
 ctx.strokeStyle="rgba(18,59,93,.15)";ctx.lineWidth=1;
 ctx.beginPath();ctx.moveTo(left,12);ctx.lineTo(left,h-bottom);ctx.lineTo(w-12,h-bottom);ctx.stroke();
}
function drawBarChart(canvas,data,unit="",horizontal=false){
 if(!Array.isArray(data)||!data.length)throw new Error("Invalid bar data");
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);drawAxes(ctx,w,h);
 const left=horizontal?110:52, bottom=38, max=Math.max(...data.map(x=>Number(x[1])||0),1);
 if(horizontal){
  const row=(h-bottom-25)/data.length;
  data.forEach((d,i)=>{const y=25+i*row, val=Number(d[1])||0, bw=(w-left-25)*val/max;
   ctx.fillStyle="#36d7ff";ctx.fillRect(left,y,bw,Math.max(22,row-8));
   ctx.fillStyle="#123b5d";ctx.fillText(String(d[0]),8,y+16);ctx.fillText(val+unit,left+bw+6,y+16);
  });
 }else{
  const bw=(w-left-22)/data.length*.62, gap=(w-left-22)/data.length;
  data.forEach((d,i)=>{const val=Number(d[1])||0,bh=(h-bottom-25)*val/max,x=left+i*gap+gap*.19,y=h-bottom-bh;
   ctx.fillStyle=i%2?"#5d8cff":"#36d7ff";ctx.fillRect(x,y,bw,bh);
   ctx.fillStyle="#123b5d";ctx.textAlign="center";ctx.fillText(String(d[0]),x+bw/2,h-17);ctx.fillText(val+unit,x+bw/2,Math.max(14,y-6));
  });ctx.textAlign="left";
 }
}
function lineSeries(a){
 if(a.id==="monthly")return {labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[{name:"2025",vals:[10,11,12,13,14,15]},{name:"2026",vals:[14,13,12,10,8,6]}]};
 if(a.id==="monthlyRevenue")return {labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[{name:"2025",vals:[91,94,97,99,96,94]},{name:"2026",vals:[95,92,88,82,77,71]}]};
 if(a.id==="churn")return {labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[{name:"Churn",vals:[8,9,10,12,14,17]}]};
 return {labels:["Jan","Feb","Mar","Apr","May","Jun"],series:[{name:"Demand",vals:[78,81,83,84,86,88]}]};
}
function drawLineChart(canvas,a){
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);drawAxes(ctx,w,h);
 const s=lineSeries(a), f=$("yearFilter")?.value||"all", series=s.series.filter(x=>f==="all"||x.name===f);
 const max=Math.max(...series.flatMap(x=>x.vals),1), left=52,bottom=38,plotW=w-left-22,plotH=h-bottom-24;
 series.forEach((ser,si)=>{ctx.strokeStyle=si?"#5d8cff":"#36d7ff";ctx.lineWidth=4;ctx.beginPath();
  ser.vals.forEach((v,i)=>{const x=left+i*(plotW/(s.labels.length-1)),y=h-bottom-(v/max)*plotH;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});
  ctx.stroke();ctx.fillStyle=ctx.strokeStyle;ser.vals.forEach((v,i)=>{const x=left+i*(plotW/(s.labels.length-1)),y=h-bottom-(v/max)*plotH;ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fill()});
 });
 ctx.fillStyle="#123b5d";ctx.textAlign="center";s.labels.forEach((lab,i)=>ctx.fillText(lab,left+i*(plotW/(s.labels.length-1)),h-15));ctx.textAlign="left";
 series.forEach((ser,i)=>{ctx.fillStyle=i?"#5d8cff":"#36d7ff";ctx.fillRect(w-115+i*62,12,10,10);ctx.fillStyle="#123b5d";ctx.fillText(ser.name,w-100+i*62,21)});
}
function drawDoughnut(canvas,data){
 if(!Array.isArray(data)||!data.length)throw new Error("Invalid doughnut data");
 const {ctx,w,h}=prepCanvas(canvas),total=data.reduce((s,d)=>s+(Number(d[1])||0),0),cx=w*.36,cy=h*.5,r=Math.min(105,h*.34);
 let start=-Math.PI/2;
 data.forEach((d,i)=>{const val=(Number(d[1])||0)/total,ang=val*Math.PI*2;ctx.beginPath();ctx.moveTo(cx,cy);ctx.arc(cx,cy,r,start,start+ang);ctx.closePath();ctx.fillStyle=["#36d7ff","#5d8cff","#39e6a5","#ffd166","#ff637d"][i%5];ctx.fill();start+=ang});
 ctx.fillStyle="#07111f";ctx.beginPath();ctx.arc(cx,cy,r*.57,0,Math.PI*2);ctx.fill();
 data.forEach((d,i)=>{ctx.fillStyle=["#36d7ff","#5d8cff","#39e6a5","#ffd166","#ff637d"][i%5];ctx.fillRect(w*.62,45+i*38,12,12);ctx.fillStyle="#123b5d";ctx.fillText(`${d[0]} — ${d[1]}%`,w*.62+20,56+i*38)});
}
function drawHeatmap(canvas){
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);const vals=[72,88,91,64,79,84,67,95,61,83,90,77,58,86,71,93,81,69,87,63];
 const cols=5,cellW=(w-35)/cols,cellH=42;
 vals.forEach((v,i)=>{const x=15+(i%cols)*cellW,y=18+Math.floor(i/cols)*cellH;ctx.fillStyle=`rgba(54,215,255,${.12+v/120})`;ctx.fillRect(x,y,cellW-6,cellH-6);ctx.fillStyle="#123b5d";ctx.textAlign="center";ctx.fillText(v+"%",x+(cellW-6)/2,y+22)});ctx.textAlign="left";
}
function drawComparison(canvas,a){
 const d=a.data?.[0];if(!d)throw new Error("Invalid comparison");
 const data=[[String(d[0]),Number(d[1])],[String(d[2]),Number(d[3])]];drawBarChart(canvas,data,a.unit||"");
}
function drawKPI(canvas){
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);
 const cards=[["Trainer KPI","91%","68%"],["Satisfaction","4.6 / 5","3.2 / 5"]];
 cards.forEach((c,i)=>{const x=25+i*(w-50)/2, cw=(w-75)/2;ctx.fillStyle="#ffffff08";ctx.strokeStyle="#ffffff16";ctx.roundRect(x,35,cw,205,18);ctx.fill();ctx.stroke();ctx.fillStyle="#667785";ctx.font="14px Inter";ctx.fillText(c[0],x+20,65);ctx.fillStyle="#39e6a5";ctx.font="bold 34px Inter";ctx.fillText(c[1],x+20,125);ctx.fillStyle="#ff637d";ctx.fillText(c[2],x+20,180);ctx.font="12px Inter";ctx.fillStyle="#667785";ctx.fillText("2025",x+20,210);ctx.fillText("2026",x+cw-55,210)});
}
function drawFunnel(canvas){
 const {ctx,w,h}=prepCanvas(canvas);chartBase(ctx,w,h);
 const steps=[["Website Visits",100],["Room Views",82],["Booking Page",51],["Completed Booking",30]];
 steps.forEach((s,i)=>{const width=(w*.82)*(s[1]/100),x=(w-width)/2,y=18+i*65;ctx.fillStyle=["#36d7ff","#5d8cff","#39e6a5","#ffd166"][i];ctx.globalAlpha=.72;ctx.fillRect(x,y,width,45);ctx.globalAlpha=1;ctx.fillStyle="#07111f";ctx.textAlign="center";ctx.font="bold 14px Inter";ctx.fillText(`${s[0]} · ${s[1]}%`,w/2,y+28)});ctx.textAlign="left";
}
function drawChart(canvas,a){
 if(!canvas||!a)throw new Error("Chart input missing");
 if(a.type==="bar")drawBarChart(canvas,a.data,a.unit||"",false);
 else if(a.type==="horizontal")drawBarChart(canvas,a.data,a.unit||"",true);
 else if(a.type==="line")drawLineChart(canvas,a);
 else if(a.type==="doughnut")drawDoughnut(canvas,a.data);
 else if(a.type==="comparison")drawComparison(canvas,a);
 else if(a.type==="kpi")drawKPI(canvas);
 else if(a.type==="funnel")drawFunnel(canvas);
 else if(a.type==="heatmap")drawHeatmap(canvas);
 else throw new Error("Unsupported chart type");
}

function commitAnalysis(){
 if(!gameState.selectedAnalysis){toast("Inspect a visualization first.");return;}
 if(!gameState.evidenceSeen)gameState.evidenceSeen=[];
 if(gameState.evidenceSeen.length<2){toast("Inspect at least two visualizations. Use them as clues.");return;}
 playTone("correct");gameState.score+=50;
 if(gameState.phase==="first"){gameState.phase="second";gameState.currentInvestigation=1;gameState.selectedAnalysis=null;renderInvestigation()}
 else {gameState.phase="solutions";gameState.selectedAnalysis=null;renderRootCause()}
}
function renderRootCause(){
 const l=currentLevel();
 $("gameMain").innerHTML=`
  <div class="kicker">ROOT CAUSE FOUND</div><h2>${l.rootCause}</h2>
  <p>You connected the signal to the business impact. Now prove it with the evidence.</p>
  <div class="evidence-grid grid">${l.evidence.map(e=>`<div class="evidence glass"><span class="small">${e[0]}</span><strong class="${String(e[1]).startsWith("+")?"down":"down"}">${e[1]}</strong></div>`).join("")}</div>
  <div class="root-cause">
   <div class="glass" style="padding:24px"><h3>🧠 Analyst Conclusion</h3><p>${rootExplanation(l)}</p>
   <p><b>Don't treat the symptom. Find the root cause using data.</b></p></div>
   <div class="glass" style="padding:24px"><h3>Evidence chain</h3><p>Signal → operational cause → customer impact → financial impact</p>
   <div class="progress" style="height:13px;margin-top:20px"><i style="width:100%"></i></div></div>
  </div>
  <div class="choice-footer"><div class="status">Score +150 · Root cause confirmed</div><button class="btn success" id="toSolutions">BUILD RESCUE STRATEGY →</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">CEO UPDATE</div><h3>We found the signal.</h3><p>${l.rootCause} is the issue management must fix first.</p><hr><div class="small">Approved budget</div><h2>${fmt(l.budget)}</h2><p>Spend carefully. The strongest strategy fixes the cause, not just the symptom.</p>`;
 $("toSolutions").onclick=()=>{gameState.phase="solutions";renderSolutions()};
 updateHUD();
}
function rootExplanation(l){
 const text={
  1:"Trainer effectiveness fell sharply while student satisfaction and retention also declined. Marketing or office capacity cannot explain the full pattern.",
  2:"Revenue decline follows worsening customer feedback and service quality. More promotion could bring customers into the same poor experience.",
  3:"Revenue is stable, but returns are destroying margin. The return spike explains why sales volume is not translating into profit.",
  4:"A product-level defect spike points to quality control. Inspection coverage is the operational lever that best addresses the defect mechanism.",
  5:"One region has a clear on-time delivery gap, which creates longer delivery times and eventually churn. The bottleneck is regional, not company-wide.",
  6:"Traffic and room interest are healthy, but customers fall away sharply at booking completion. The leak is inside the booking process."
 };
 return text[l.id];
}
function renderSolutions(){
 const l=currentLevel();gameState.phase="solutions";
 $("gameMain").innerHTML=`
  <div class="kicker">BUSINESS SOLUTION STAGE</div><h2>Choose how to rescue the business.</h2>
  <div class="problem"><strong>BUDGET APPROVED:</strong> ${fmt(l.budget)} · Drag solutions into the Selected Strategy zone, or tap a solution to add/remove it.</div>
  <div class="grid solutions">${l.solutions.map(s=>`
   <article class="solution glass" draggable="true" data-s="${s.id}">
    <div class="small">STRATEGY</div><h3>${s.name}</h3><div class="cost">${fmt(s.cost)}</div><div class="impact">${s.impact}</div>
   </article>`).join("")}</div>
  <div class="strategy-zone" id="dropZone"><b>SELECTED STRATEGY</b><div class="small">Drop solutions here</div><div class="selected-list" id="selectedList"></div></div>
  <div class="budget-row"><b>Budget</b><b id="budgetText">${fmt(l.budget)}</b></div><div class="budget-bar"><i id="budgetBar"></i></div>
  <div class="choice-footer"><div class="status" id="strategyStatus">Choose a combination that attacks the root cause.</div><button class="btn success" id="executeBtn">EXECUTE STRATEGY →</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">ROOT CAUSE</div><h3>${l.rootCause}</h3><p>Best strategies directly improve the cause you discovered.</p><hr><div class="small">Remaining</div><h2 id="sideRemaining">${fmt(l.budget)}</h2><div class="small">Selected actions</div><div id="sideCount">0</div>`;
 document.querySelectorAll(".solution").forEach(el=>{
  el.onclick=()=>toggleSolution(el.dataset.s);
  el.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",el.dataset.s));
 });
 const zone=$("dropZone");
 zone.addEventListener("dragover",e=>{e.preventDefault();zone.classList.add("over")});
 zone.addEventListener("dragleave",()=>zone.classList.remove("over"));
 zone.addEventListener("drop",e=>{e.preventDefault();zone.classList.remove("over");toggleSolution(e.dataTransfer.getData("text/plain"))});
 $("executeBtn").onclick=executeStrategy;
 updateSolutionsUI();
 updateHUD();
}
function toggleSolution(id){
 const l=currentLevel(),s=l.solutions.find(x=>x.id===id);if(!s)return;
 const exists=gameState.selectedSolutions.includes(id);
 if(exists){gameState.selectedSolutions=gameState.selectedSolutions.filter(x=>x!==id);playTone("click")}
 else if(gameState.spent+s.cost<=l.budget){gameState.selectedSolutions.push(id);playTone("correct")}
 else {playTone("wrong");toast("BUDGET EXCEEDED — Choose a lower-cost strategy.");$("gameMain").classList.add("shake");setTimeout(()=>$("gameMain").classList.remove("shake"),450);return}
 updateSolutionsUI();
}
function updateSolutionsUI(){
 const l=currentLevel(),selected=l.solutions.filter(s=>gameState.selectedSolutions.includes(s.id));
 gameState.spent=selected.reduce((sum,s)=>sum+s.cost,0);
 document.querySelectorAll(".solution").forEach(el=>el.classList.toggle("selected",gameState.selectedSolutions.includes(el.dataset.s)));
 $("selectedList").innerHTML=selected.length?selected.map(s=>`<span class="selected-chip">${s.name} · ${fmt(s.cost)} ✕</span>`).join(""):"<span class='small'>No strategies selected yet.</span>";
 $("budgetText").textContent=fmt(Math.max(0,l.budget-gameState.spent));
 $("sideRemaining").textContent=fmt(Math.max(0,l.budget-gameState.spent));
 $("sideCount").textContent=selected.length;
 $("budgetBar").style.width=Math.min(100,(gameState.spent/l.budget)*100)+"%";
 $("strategyStatus").textContent=selected.length?`${selected.length} action${selected.length>1?"s":""} selected · ${fmt(gameState.spent)} committed`:"Choose a combination that attacks the root cause.";
 updateHUD();
}
function executeStrategy(){
 if(!gameState.selectedSolutions.length){toast("Select at least one business action.");return;}
 const l=currentLevel(), selected=l.solutions.filter(s=>gameState.selectedSolutions.includes(s.id));
 const directMap={1:["workshop","feedback","incentive"],2:["staffTraining","kitchen","feedbackSystem"],3:["returnsFix","descriptions","packaging"],4:["inspection","training"],5:["routes","warehouse","staff"],6:["simplify","website"]};
 const directIds=directMap[l.id]||[];
 const direct=selected.filter(s=>directIds.includes(s.id));
 const impact=selected.reduce((sum,s)=>sum+s.score,0);
 const directImpact=direct.reduce((sum,s)=>sum+s.score,0);
 const rootCoverage=Math.round((directImpact/Math.max(1,impact))*100);
 const budgetEfficiency=Math.round((impact/Math.max(1,gameState.spent))*100);
 const decisionScore=Math.round(directImpact*5+impact*2+Math.min(30,budgetEfficiency/5));
 const threshold={1:115,2:105,3:120,4:110,5:108,6:110}[l.id]||110;
 const rescued=decisionScore>=threshold && rootCoverage>=45;
 gameState.score+=decisionScore;
 if(rescued) victory(selected,decisionScore,rootCoverage); else badStrategy(selected,decisionScore,rootCoverage);
}
function outcomeValues(l,rescued,selected){
 const base={
  1:["+24%","+13%","+15%","+21%","+17%"],2:["+19%","+17%","+13%","+18%","+14%"],
  3:["-45%","+8%","+17%","+22%","+19%"],4:["-40%","-18%","+15%","+26%","+21%"],
  5:["-18%","+16%","+22%","+19%","+18%"],6:["+18%","+25%","+14%","+22%","+16%"]
 }[l.id];
 if(rescued)return base;
 return l.id===1?["+20%","-4%","-8%","+2%","+1%"]:["+2%","-6%","-4%","+3%","0%"];
}
function victory(selected){
 gameState.gameStatus="won";clearInterval(gameState.timerId);playTone("win");confetti();
 const l=currentLevel(), vals=outcomeValues(l,true,selected);
 $("gameMain").innerHTML=`
  <div style="text-align:center;padding:10px 0"><div class="kicker">STRATEGY EXECUTED</div><h2>🎉 BUSINESS RESCUED</h2>
  <p>Your strategy attacked the root cause and produced a simulated recovery.</p></div>
  <div class="grid outcome-grid">${["Root Cause KPI","Customer Impact","Retention / Operations","Sales / Conversion","Profit / Efficiency"].map((x,i)=>`<div class="outcome glass"><span class="small">${x}</span><strong>${vals[i]}</strong></div>`).join("")}</div>
  <div class="glass" style="padding:24px;margin-top:18px"><h3>CEO MESSAGE</h3><p>Excellent investigation. You followed evidence, identified the cause, and allocated resources instead of treating the symptom.</p></div>
  <div class="choice-footer"><div><b>Final Score: ${gameState.score}</b><div class="small">${fmt(l.budget-gameState.spent)} budget remained</div></div><button class="btn" id="restartBtn">RESTART LEVEL</button><button class="btn secondary" id="levelsBtn">CHOOSE ANOTHER LEVEL</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">MISSION COMPLETE</div><h3>🏆 Analyst Grade</h3><h2>RESCUED</h2><p>Root cause: <b>${l.rootCause}</b></p><hr><div class="small">Final score</div><h2>${gameState.score}</h2>`;
 bindEnd();
 updateHUD();
}
function badStrategy(selected){
 gameState.gameStatus="lost";clearInterval(gameState.timerId);playTone("wrong");
 const l=currentLevel();
 $("gameMain").innerHTML=`
  <div class="failure"><div style="font-size:48px">❌</div><div class="kicker">SIMULATION RESULT</div><h2>BUSINESS NOT RESCUED</h2>
  <p>Your strategy did not address <b>${l.rootCause}</b> strongly enough, or used the budget inefficiently.</p>
  <div class="glass" style="padding:20px;text-align:left;margin-top:18px"><h3>What happened?</h3><p>${badExplanation(l)}</p></div>
  <p><b>You treated the symptom instead of solving the root cause.</b></p>
  <div class="choice-footer" style="justify-content:center"><button class="btn" id="retryStrategy">TRY AGAIN</button><button class="btn secondary" id="retryLevel">RESTART LEVEL</button></div></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">POST-MORTEM</div><h3>Strategy failed</h3><p>Review the evidence and choose actions that directly influence the root cause.</p><hr><div class="small">Root cause</div><strong>${l.rootCause}</strong>`;
 $("retryStrategy").onclick=()=>{gameState.gameStatus="playing";gameState.selectedSolutions=[];gameState.spent=0;renderSolutions()};
 $("retryLevel").onclick=()=>startLevel(l.id);
}
function badExplanation(l){
 if(l.id===1)return "Marketing can increase leads, but poor trainer performance still causes low satisfaction and retention.";
 if(l.id===2)return "More promotion may increase traffic, but service quality remains poor, so customers continue to leave.";
 if(l.id===3)return "Small discount or shipping improvements cannot offset the unusually high product return rate.";
 if(l.id===4)return "Maintenance and supplier actions may help, but the defect spike is primarily tied to inadequate quality control.";
 if(l.id===5)return "Communication can reduce frustration, but the regional delivery bottleneck still delays orders.";
 return "Offers or photography can attract interest, but customers are still dropping during the booking process.";
}
function bindEnd(){
 $("restartBtn").onclick=()=>startLevel(gameState.level);
 $("levelsBtn").onclick=()=>{clearInterval(gameState.timerId);renderLevels();showScreen("levelsScreen")};
}
function failure(title,msg){
 gameState.gameStatus="lost";clearInterval(gameState.timerId);
 $("gameMain").innerHTML=`<div class="failure"><div style="font-size:50px">❌</div><div class="kicker">MISSION FAILED</div><h2>${title}</h2><p>${msg}</p><button class="btn danger" id="restartFailure">RESTART GAME</button></div>`;
 $("sidePanel").innerHTML=`<div class="kicker">POST-MORTEM</div><h3>Investigation ended.</h3><p>Correct analytical choices are required to move forward.</p>`;
 $("restartFailure").onclick=()=>startLevel(gameState.level);
 $("gameMain").classList.add("shake");setTimeout(()=>$("gameMain").classList.remove("shake"),450);
}
function confetti(){
 const c=$("confetti");c.innerHTML="";
 for(let i=0;i<90;i++){const e=document.createElement("i");e.style.left=Math.random()*100+"%";e.style.top=(-10-Math.random()*30)+"%";e.style.background=["#36d7ff","#39e6a5","#ffd166","#5d8cff","#ff637d"][i%5];e.style.transform=`rotate(${Math.random()*360}deg)`;e.style.animationDelay=Math.random()*.7+"s";c.appendChild(e)}
 setTimeout(()=>c.innerHTML="",4000);
}

document.addEventListener("click", (event) => {
 const target = event.target.closest("#chooseBtn");
 if (!target || target.disabled) return;
 if (typeof commitAnalysis === "function") commitAnalysis();
});

window.addEventListener("resize",()=>{const c=$("mainCanvas");if(c&&gameState.selectedAnalysis)safe(()=>drawChart(c,gameState.selectedAnalysis),()=>{})});
renderLevels();