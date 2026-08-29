
// ReturnWise — GitHub Pages / client-only mode.
// No Python backend is required. The same six explainable intelligence components
// are calculated in-browser for the hackathon demo.

let records = [{"return_id": "R10001", "month": "2026-04", "customer_id": "C101", "product_id": "P1003", "item_price": "1599", "return_reason": "Size issue", "customer_returns_90d": "5", "customer_orders_90d": "7", "prior_abuse_flags": "0", "product_defect_rate": "0.209", "days_since_delivery": "8", "damaged_claim": "0", "resale_value": "1349.37"}, {"return_id": "R10002", "month": "2026-01", "customer_id": "C118", "product_id": "P1001", "item_price": "2499", "return_reason": "Size issue", "customer_returns_90d": "0", "customer_orders_90d": "7", "prior_abuse_flags": "0", "product_defect_rate": "0.147", "days_since_delivery": "5", "damaged_claim": "0", "resale_value": "2146.59"}, {"return_id": "R10003", "month": "2026-05", "customer_id": "C117", "product_id": "P1005", "item_price": "2499", "return_reason": "Not as described", "customer_returns_90d": "0", "customer_orders_90d": "1", "prior_abuse_flags": "0", "product_defect_rate": "0.217", "days_since_delivery": "20", "damaged_claim": "0", "resale_value": "1317.27"}, {"return_id": "R10004", "month": "2026-07", "customer_id": "C110", "product_id": "P1002", "item_price": "1299", "return_reason": "Not as described", "customer_returns_90d": "4", "customer_orders_90d": "10", "prior_abuse_flags": "0", "product_defect_rate": "0.106", "days_since_delivery": "6", "damaged_claim": "0", "resale_value": "730.54"}, {"return_id": "R10005", "month": "2026-06", "customer_id": "C114", "product_id": "P1004", "item_price": "3499", "return_reason": "Defective item", "customer_returns_90d": "2", "customer_orders_90d": "8", "prior_abuse_flags": "0", "product_defect_rate": "0.203", "days_since_delivery": "17", "damaged_claim": "1", "resale_value": "2414.59"}, {"return_id": "R10006", "month": "2026-02", "customer_id": "C117", "product_id": "P1003", "item_price": "3499", "return_reason": "Wrong item received", "customer_returns_90d": "0", "customer_orders_90d": "2", "prior_abuse_flags": "0", "product_defect_rate": "0.058", "days_since_delivery": "23", "damaged_claim": "0", "resale_value": "2269.73"}, {"return_id": "R10007", "month": "2026-08", "customer_id": "C102", "product_id": "P1005", "item_price": "6999", "return_reason": "Size issue", "customer_returns_90d": "2", "customer_orders_90d": "6", "prior_abuse_flags": "1", "product_defect_rate": "0.157", "days_since_delivery": "31", "damaged_claim": "1", "resale_value": "6004.25"}, {"return_id": "R10008", "month": "2026-06", "customer_id": "C100", "product_id": "P1001", "item_price": "4999", "return_reason": "Wrong item received", "customer_returns_90d": "2", "customer_orders_90d": "12", "prior_abuse_flags": "0", "product_defect_rate": "0.248", "days_since_delivery": "30", "damaged_claim": "0", "resale_value": "4173.25"}, {"return_id": "R10009", "month": "2026-08", "customer_id": "C102", "product_id": "P1004", "item_price": "2199", "return_reason": "Changed mind", "customer_returns_90d": "0", "customer_orders_90d": "3", "prior_abuse_flags": "0", "product_defect_rate": "0.07", "days_since_delivery": "20", "damaged_claim": "1", "resale_value": "1405.51"}, {"return_id": "R10010", "month": "2026-06", "customer_id": "C112", "product_id": "P1002", "item_price": "2499", "return_reason": "Defective item", "customer_returns_90d": "4", "customer_orders_90d": "7", "prior_abuse_flags": "0", "product_defect_rate": "0.051", "days_since_delivery": "29", "damaged_claim": "0", "resale_value": "1905.63"}, {"return_id": "R10011", "month": "2026-05", "customer_id": "C100", "product_id": "P1002", "item_price": "1599", "return_reason": "Not as described", "customer_returns_90d": "0", "customer_orders_90d": "2", "prior_abuse_flags": "0", "product_defect_rate": "0.171", "days_since_delivery": "2", "damaged_claim": "0", "resale_value": "884.15"}, {"return_id": "R10012", "month": "2026-01", "customer_id": "C114", "product_id": "P1002", "item_price": "2499", "return_reason": "Not as described", "customer_returns_90d": "2", "customer_orders_90d": "9", "prior_abuse_flags": "0", "product_defect_rate": "0.093", "days_since_delivery": "10", "damaged_claim": "0", "resale_value": "2149.36"}, {"return_id": "R10013", "month": "2026-08", "customer_id": "C105", "product_id": "P1005", "item_price": "2499", "return_reason": "Size issue", "customer_returns_90d": "3", "customer_orders_90d": "7", "prior_abuse_flags": "0", "product_defect_rate": "0.131", "days_since_delivery": "27", "damaged_claim": "1", "resale_value": "2183.79"}, {"return_id": "R10014", "month": "2026-02", "customer_id": "C106", "product_id": "P1001", "item_price": "2199", "return_reason": "Defective item", "customer_returns_90d": "0", "customer_orders_90d": "10", "prior_abuse_flags": "0", "product_defect_rate": "0.15", "days_since_delivery": "36", "damaged_claim": "1", "resale_value": "1595.36"}, {"return_id": "R10015", "month": "2026-08", "customer_id": "C115", "product_id": "P1005", "item_price": "2499", "return_reason": "Wrong item received", "customer_returns_90d": "2", "customer_orders_90d": "3", "prior_abuse_flags": "3", "product_defect_rate": "0.159", "days_since_delivery": "32", "damaged_claim": "1", "resale_value": "2192.23"}, {"return_id": "R10016", "month": "2026-04", "customer_id": "C116", "product_id": "P1004", "item_price": "2199", "return_reason": "Changed mind", "customer_returns_90d": "0", "customer_orders_90d": "2", "prior_abuse_flags": "0", "product_defect_rate": "0.099", "days_since_delivery": "18", "damaged_claim": "0", "resale_value": "1509.69"}, {"return_id": "R10017", "month": "2026-05", "customer_id": "C116", "product_id": "P1003", "item_price": "1599", "return_reason": "Size issue", "customer_returns_90d": "4", "customer_orders_90d": "12", "prior_abuse_flags": "2", "product_defect_rate": "0.194", "days_since_delivery": "21", "damaged_claim": "0", "resale_value": "1212.81"}, {"return_id": "R10018", "month": "2026-04", "customer_id": "C107", "product_id": "P1003", "item_price": "1599", "return_reason": "Not as described", "customer_returns_90d": "1", "customer_orders_90d": "6", "prior_abuse_flags": "0", "product_defect_rate": "0.199", "days_since_delivery": "23", "damaged_claim": "0", "resale_value": "1286.56"}, {"return_id": "R10019", "month": "2026-04", "customer_id": "C111", "product_id": "P1004", "item_price": "4999", "return_reason": "Defective item", "customer_returns_90d": "1", "customer_orders_90d": "4", "prior_abuse_flags": "0", "product_defect_rate": "0.102", "days_since_delivery": "3", "damaged_claim": "0", "resale_value": "3343.81"}, {"return_id": "R10020", "month": "2026-04", "customer_id": "C115", "product_id": "P1004", "item_price": "6999", "return_reason": "Wrong item received", "customer_returns_90d": "2", "customer_orders_90d": "12", "prior_abuse_flags": "3", "product_defect_rate": "0.104", "days_since_delivery": "16", "damaged_claim": "1", "resale_value": "3910.22"}, {"return_id": "R10021", "month": "2026-04", "customer_id": "C115", "product_id": "P1005", "item_price": "3499", "return_reason": "Size issue", "customer_returns_90d": "1", "customer_orders_90d": "1", "prior_abuse_flags": "2", "product_defect_rate": "0.099", "days_since_delivery": "7", "damaged_claim": "0", "resale_value": "2952.84"}, {"return_id": "R10022", "month": "2026-03", "customer_id": "C104", "product_id": "P1002", "item_price": "2499", "return_reason": "Size issue", "customer_returns_90d": "2", "customer_orders_90d": "11", "prior_abuse_flags": "0", "product_defect_rate": "0.238", "days_since_delivery": "27", "damaged_claim": "0", "resale_value": "1924.03"}, {"return_id": "R10023", "month": "2026-03", "customer_id": "C100", "product_id": "P1001", "item_price": "1599", "return_reason": "Defective item", "customer_returns_90d": "3", "customer_orders_90d": "10", "prior_abuse_flags": "1", "product_defect_rate": "0.054", "days_since_delivery": "32", "damaged_claim": "0", "resale_value": "867.24"}, {"return_id": "R10024", "month": "2026-04", "customer_id": "C100", "product_id": "P1001", "item_price": "6999", "return_reason": "Changed mind", "customer_returns_90d": "5", "customer_orders_90d": "12", "prior_abuse_flags": "0", "product_defect_rate": "0.192", "days_since_delivery": "10", "damaged_claim": "0", "resale_value": "5672.42"}, {"return_id": "R10025", "month": "2026-06", "customer_id": "C114", "product_id": "P1003", "item_price": "1599", "return_reason": "Changed mind", "customer_returns_90d": "4", "customer_orders_90d": "5", "prior_abuse_flags": "0", "product_defect_rate": "0.155", "days_since_delivery": "18", "damaged_claim": "0", "resale_value": "806.47"}, {"return_id": "R10026", "month": "2026-08", "customer_id": "C105", "product_id": "P1005", "item_price": "6999", "return_reason": "Not as described", "customer_returns_90d": "3", "customer_orders_90d": "9", "prior_abuse_flags": "1", "product_defect_rate": "0.222", "days_since_delivery": "10", "damaged_claim": "0", "resale_value": "4788.85"}, {"return_id": "R10027", "month": "2026-08", "customer_id": "C103", "product_id": "P1005", "item_price": "1299", "return_reason": "Defective item", "customer_returns_90d": "1", "customer_orders_90d": "3", "prior_abuse_flags": "0", "product_defect_rate": "0.162", "days_since_delivery": "9", "damaged_claim": "0", "resale_value": "978.06"}, {"return_id": "R10028", "month": "2026-02", "customer_id": "C114", "product_id": "P1005", "item_price": "1299", "return_reason": "Size issue", "customer_returns_90d": "1", "customer_orders_90d": "4", "prior_abuse_flags": "0", "product_defect_rate": "0.198", "days_since_delivery": "34", "damaged_claim": "0", "resale_value": "1018.41"}, {"return_id": "R10029", "month": "2026-04", "customer_id": "C116", "product_id": "P1003", "item_price": "3499", "return_reason": "Wrong item received", "customer_returns_90d": "4", "customer_orders_90d": "9", "prior_abuse_flags": "0", "product_defect_rate": "0.179", "days_since_delivery": "30", "damaged_claim": "0", "resale_value": "2390.17"}, {"return_id": "R10030", "month": "2026-04", "customer_id": "C109", "product_id": "P1003", "item_price": "3499", "return_reason": "Changed mind", "customer_returns_90d": "3", "customer_orders_90d": "4", "prior_abuse_flags": "0", "product_defect_rate": "0.048", "days_since_delivery": "30", "damaged_claim": "0", "resale_value": "2279.02"}, {"return_id": "R10031", "month": "2026-08", "customer_id": "C105", "product_id": "P1001", "item_price": "6999", "return_reason": "Size issue", "customer_returns_90d": "2", "customer_orders_90d": "3", "prior_abuse_flags": "0", "product_defect_rate": "0.223", "days_since_delivery": "31", "damaged_claim": "0", "resale_value": "4474.48"}, {"return_id": "R10032", "month": "2026-06", "customer_id": "C100", "product_id": "P1002", "item_price": "1599", "return_reason": "Defective item", "customer_returns_90d": "3", "customer_orders_90d": "12", "prior_abuse_flags": "4", "product_defect_rate": "0.113", "days_since_delivery": "28", "damaged_claim": "0", "resale_value": "826.49"}, {"return_id": "R10033", "month": "2026-02", "customer_id": "C107", "product_id": "P1003", "item_price": "3499", "return_reason": "Not as described", "customer_returns_90d": "3", "customer_orders_90d": "8", "prior_abuse_flags": "1", "product_defect_rate": "0.108", "days_since_delivery": "35", "damaged_claim": "0", "resale_value": "3024.22"}, {"return_id": "R10034", "month": "2026-05", "customer_id": "C112", "product_id": "P1001", "item_price": "1299", "return_reason": "Wrong item received", "customer_returns_90d": "2", "customer_orders_90d": "5", "prior_abuse_flags": "0", "product_defect_rate": "0.199", "days_since_delivery": "19", "damaged_claim": "0", "resale_value": "1064.97"}, {"return_id": "R10035", "month": "2026-02", "customer_id": "C108", "product_id": "P1002", "item_price": "3499", "return_reason": "Changed mind", "customer_returns_90d": "4", "customer_orders_90d": "9", "prior_abuse_flags": "0", "product_defect_rate": "0.095", "days_since_delivery": "19", "damaged_claim": "1", "resale_value": "2274.79"}, {"return_id": "R10036", "month": "2026-06", "customer_id": "C117", "product_id": "P1001", "item_price": "4999", "return_reason": "Size issue", "customer_returns_90d": "1", "customer_orders_90d": "2", "prior_abuse_flags": "0", "product_defect_rate": "0.217", "days_since_delivery": "6", "damaged_claim": "0", "resale_value": "3306.89"}, {"return_id": "R10037", "month": "2026-04", "customer_id": "C109", "product_id": "P1004", "item_price": "2199", "return_reason": "Defective item", "customer_returns_90d": "1", "customer_orders_90d": "10", "prior_abuse_flags": "0", "product_defect_rate": "0.183", "days_since_delivery": "9", "damaged_claim": "0", "resale_value": "1099.83"}, {"return_id": "R10038", "month": "2026-01", "customer_id": "C100", "product_id": "P1003", "item_price": "3499", "return_reason": "Size issue", "customer_returns_90d": "2", "customer_orders_90d": "4", "prior_abuse_flags": "0", "product_defect_rate": "0.175", "days_since_delivery": "19", "damaged_claim": "0", "resale_value": "3071.42"}, {"return_id": "R10039", "month": "2026-07", "customer_id": "C115", "product_id": "P1001", "item_price": "4999", "return_reason": "Size issue", "customer_returns_90d": "4", "customer_orders_90d": "9", "prior_abuse_flags": "3", "product_defect_rate": "0.138", "days_since_delivery": "17", "damaged_claim": "0", "resale_value": "3715.9"}, {"return_id": "R10040", "month": "2026-06", "customer_id": "C101", "product_id": "P1005", "item_price": "6999", "return_reason": "Changed mind", "customer_returns_90d": "4", "customer_orders_90d": "7", "prior_abuse_flags": "0", "product_defect_rate": "0.069", "days_since_delivery": "16", "damaged_claim": "0", "resale_value": "4492.51"}, {"return_id": "R10041", "month": "2026-05", "customer_id": "C107", "product_id": "P1002", "item_price": "1299", "return_reason": "Wrong item received", "customer_returns_90d": "2", "customer_orders_90d": "2", "prior_abuse_flags": "1", "product_defect_rate": "0.079", "days_since_delivery": "12", "damaged_claim": "1", "resale_value": "1075.85"}, {"return_id": "R10042", "month": "2026-06", "customer_id": "C107", "product_id": "P1003", "item_price": "1299", "return_reason": "Defective item", "customer_returns_90d": "1", "customer_orders_90d": "8", "prior_abuse_flags": "0", "product_defect_rate": "0.123", "days_since_delivery": "18", "damaged_claim": "0", "resale_value": "1128.89"}, {"return_id": "R10043", "month": "2026-04", "customer_id": "C116", "product_id": "P1001", "item_price": "2199", "return_reason": "Not as described", "customer_returns_90d": "2", "customer_orders_90d": "4", "prior_abuse_flags": "0", "product_defect_rate": "0.097", "days_since_delivery": "7", "damaged_claim": "0", "resale_value": "1632.55"}, {"return_id": "R10044", "month": "2026-02", "customer_id": "C118", "product_id": "P1001", "item_price": "1299", "return_reason": "Defective item", "customer_returns_90d": "0", "customer_orders_90d": "5", "prior_abuse_flags": "0", "product_defect_rate": "0.155", "days_since_delivery": "27", "damaged_claim": "1", "resale_value": "950.7"}, {"return_id": "R10045", "month": "2026-01", "customer_id": "C116", "product_id": "P1005", "item_price": "6999", "return_reason": "Not as described", "customer_returns_90d": "3", "customer_orders_90d": "3", "prior_abuse_flags": "1", "product_defect_rate": "0.186", "days_since_delivery": "33", "damaged_claim": "0", "resale_value": "5160.28"}, {"return_id": "R10046", "month": "2026-04", "customer_id": "C102", "product_id": "P1004", "item_price": "4999", "return_reason": "Size issue", "customer_returns_90d": "4", "customer_orders_90d": "12", "prior_abuse_flags": "0", "product_defect_rate": "0.14", "days_since_delivery": "34", "damaged_claim": "0", "resale_value": "4052.01"}, {"return_id": "R10047", "month": "2026-04", "customer_id": "C115", "product_id": "P1001", "item_price": "1299", "return_reason": "Size issue", "customer_returns_90d": "2", "customer_orders_90d": "3", "prior_abuse_flags": "3", "product_defect_rate": "0.107", "days_since_delivery": "30", "damaged_claim": "0", "resale_value": "948.91"}, {"return_id": "R10048", "month": "2026-08", "customer_id": "C108", "product_id": "P1003", "item_price": "1299", "return_reason": "Not as described", "customer_returns_90d": "0", "customer_orders_90d": "8", "prior_abuse_flags": "1", "product_defect_rate": "0.136", "days_since_delivery": "36", "damaged_claim": "1", "resale_value": "657.84"}];
let dashboardData = null;
let trendChart = null;
let actionChart = null;
let lastInvestigation = null;
const actionOrder = ["approve","inspect","exchange","restrict","escalate"];

function money(v){ return "₹" + Number(v).toLocaleString("en-IN",{maximumFractionDigits:0}); }
function riskClass(v){ return v >= 70 ? "high" : v >= 40 ? "mid" : "low"; }
function sigmoid(x){ return 1/(1+Math.exp(-x)); }

function scoreRequest(row){
  const customerReturns = Number(row.customer_returns_90d||0);
  const customerOrders = Math.max(Number(row.customer_orders_90d||1),1);
  const customerReturnRate = customerReturns/customerOrders;
  const priorAbuseFlags = Number(row.prior_abuse_flags||0);
  const itemPrice = Number(row.item_price||0);
  const productDefectRate = Number(row.product_defect_rate||0);
  const daysSinceDelivery = Number(row.days_since_delivery||0);
  const damaged = Number(row.damaged_claim||0);
  const reason = String(row.return_reason||"").toLowerCase();
  const resaleValue = Number(row.resale_value || itemPrice*0.70);

  let reasonSignal=0;
  if(reason.includes("wrong") || reason.includes("defect")) reasonSignal += .15;
  if(reason.includes("changed mind")) reasonSignal -= .03;
  if(reason.includes("not as described")) reasonSignal += .08;
  if(reason.includes("size")) reasonSignal -= .02;

  const customerScore=Math.min(1, customerReturnRate*1.6+priorAbuseFlags*.10);
  const productScore=Math.min(1, productDefectRate*1.8);
  const policyScore=daysSinceDelivery<=30?.18:.55;
  const damageScore=damaged?.25:0;

  const abuseScore=Math.min(1,
      .40*customerScore + .35*priorAbuseFlags/5 +
      .25*Math.max(0,.5-productScore) + reasonSignal);

  const returnRisk=Math.max(.02,Math.min(.98,
      .28*customerScore + .20*productScore + .28*abuseScore +
      .12*policyScore + .12*damageScore));

  const reverseLogistics=Math.min(itemPrice*.18,45);
  const inspectCost=Math.min(itemPrice*.08,20);
  const restockLoss=Math.max(0,itemPrice-resaleValue);
  const customerExperiencePenalty=returnRisk>.75?8:3;

  const actions={
    approve:reverseLogistics+restockLoss,
    inspect:reverseLogistics+inspectCost+Math.max(0,itemPrice-resaleValue*.85),
    exchange:reverseLogistics+inspectCost+5,
    restrict:4+customerExperiencePenalty,
    escalate:15+customerExperiencePenalty
  };

  if(returnRisk<.35){actions.approve-=7;actions.exchange-=4;}
  if(productScore>.55){actions.inspect-=10;actions.exchange-=6;}
  if(abuseScore>.65){actions.restrict-=2;actions.escalate-=2;}
  const bestAction=actionOrder.reduce((a,b)=>actions[a]<actions[b]?a:b);

  const factors=[
    ["Frequent returns",customerScore],
    ["Product defect pattern",productScore],
    ["Abuse pattern",abuseScore],
    ["Policy timing",policyScore],
    ["Damage claim",damageScore],
    ["Return reason",Math.max(0,Math.min(1,.5+reasonSignal))]
  ].sort((a,b)=>b[1]-a[1]);

  return {
    ...row,
    return_risk_score:+(returnRisk*100).toFixed(1),
    customer_risk:+(customerScore*100).toFixed(1),
    product_risk:+(productScore*100).toFixed(1),
    abuse_risk:+(abuseScore*100).toFixed(1),
    resale_value:+resaleValue.toFixed(2),
    recommended_action:bestAction,
    estimated_financial_impact:+Math.max(0,actions[bestAction]).toFixed(2),
    action_costs:Object.fromEntries(actionOrder.map(k=>[k,+Math.max(0,actions[k]).toFixed(2)])),
    top_risk_factors:factors.slice(0,4).map(([name,v])=>({name,score:+(v*100).toFixed(1)}))
  };
}

function buildDashboard(){
  const scored=records.map(scoreRequest);
  const grouped={};
  let prevented=0,totalValue=0;
  const action_counts={};
  scored.forEach(x=>{
    const m=x.month;
    grouped[m]??={count:0,value:0};
    grouped[m].count++;
    grouped[m].value+=Number(x.item_price);
    totalValue+=Number(x.item_price);
    action_counts[x.recommended_action]=(action_counts[x.recommended_action]||0)+1;
    prevented += Math.max(0,x.action_costs.approve-x.action_costs[x.recommended_action]);
  });
  const trend=Object.entries(grouped).sort(([a],[b])=>a.localeCompare(b)).map(([month,v])=>({month,...v}));
  return {
    kpis:{
      total_returns:scored.length,
      avg_return_risk:+(scored.reduce((s,x)=>s+x.return_risk_score,0)/Math.max(1,scored.length)).toFixed(1),
      estimated_financial_impact:+scored.reduce((s,x)=>s+x.estimated_financial_impact,0).toFixed(2),
      prevented_loss_estimate:+prevented.toFixed(2),
      at_risk_value:+totalValue.toFixed(2)
    },
    action_counts,trend,latest:scored[scored.length-1]||null,records:scored
  };
}

function renderTrend(rows){
  const ctx=document.getElementById("trendChart");
  if(trendChart)trendChart.destroy();
  trendChart=new Chart(ctx,{
    type:"line",
    data:{labels:rows.map(x=>x.month),datasets:[
      {label:"Requests",data:rows.map(x=>x.count),tension:.35,borderWidth:2},
      {label:"Return value (₹)",data:rows.map(x=>x.value),tension:.35,borderWidth:2,yAxisID:"y1"}
    ]},
    options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:"#95a3bf",font:{size:10}}}},
      scales:{x:{ticks:{color:"#71809d"},grid:{color:"#202a42"}},y:{ticks:{color:"#71809d"},grid:{color:"#202a42"}},y1:{position:"right",ticks:{color:"#71809d"},grid:{drawOnChartArea:false}}}}
  });
}

function renderActions(counts){
  const ctx=document.getElementById("actionChart");
  if(actionChart)actionChart.destroy();
  actionChart=new Chart(ctx,{type:"doughnut",data:{
    labels:actionOrder.map(x=>x[0].toUpperCase()+x.slice(1)),
    datasets:[{data:actionOrder.map(x=>counts[x]||0),borderWidth:0}]
  },options:{responsive:true,maintainAspectRatio:false,cutout:"62%",plugins:{legend:{position:"bottom",labels:{color:"#95a3bf",font:{size:10},padding:12}}}}});
}

function renderEvidence(x){
  const el=document.getElementById("evidenceList");
  el.innerHTML=(x?.top_risk_factors||[]).map(i=>`<div class="evidence-item"><div><span>${i.name}</span><div class="bar"><i style="width:${Math.min(100,i.score)}%"></i></div></div><b>${i.score}%</b></div>`).join("");
}

function renderLatest(x){
  const el=document.getElementById("latestDecision");
  if(!x){el.textContent="No data";return;}
  el.classList.remove("muted");
  el.innerHTML=`<div><div class="meta">${x.return_id} • ${x.customer_id} • ${x.product_id}</div>
  <div class="big">${x.return_risk_score}% risk</div>
  <div class="meta">Estimated impact ${money(x.estimated_financial_impact)} • resale ${money(x.resale_value)}</div></div>
  <span class="decision-badge">${x.recommended_action}</span>`;
  renderEvidence(x);
}

function renderRiskTable(rows){
  document.getElementById("riskTable").innerHTML=rows.map(x=>`<tr><td>${x.return_id}</td><td>${x.customer_id}</td><td>${x.product_id}</td>
  <td class="risk ${riskClass(x.return_risk_score)}">${x.return_risk_score}%</td><td>${x.top_risk_factors?.[0]?.name||"—"}</td>
  <td><span class="action">${x.recommended_action}</span></td><td>${money(x.estimated_financial_impact)}</td></tr>`).join("");
}

function renderHistory(rows){
  document.getElementById("historyTable").innerHTML=rows.map(x=>`<tr><td>${x.return_id}</td><td>${x.customer_id}</td><td>${x.product_id}</td><td>${x.customer_orders_90d}</td>
  <td>${x.customer_returns_90d}</td><td>${(Number(x.product_defect_rate)*100).toFixed(1)}%</td><td>${x.return_reason}</td>
  <td class="risk ${riskClass(x.return_risk_score)}">${x.return_risk_score}%</td><td><span class="action">${x.recommended_action}</span></td></tr>`).join("");
}

function renderDashboard(){
  dashboardData=buildDashboard();
  const d=dashboardData;
  document.getElementById("avgRisk").textContent=d.kpis.avg_return_risk+"%";
  document.getElementById("impact").textContent=money(d.kpis.estimated_financial_impact);
  document.getElementById("prevented").textContent=money(d.kpis.prevented_loss_estimate);
  document.getElementById("totalReturns").textContent=d.kpis.total_returns;
  renderTrend(d.trend);renderActions(d.action_counts);renderLatest(d.latest);
  renderRiskTable(d.records.slice().reverse().slice(0,10));renderHistory(d.records);
  if(lastInvestigation)renderSimulation(lastInvestigation);
}

function readForm(){
  return {
    customer_id:document.getElementById("customer_id").value,
    product_id:document.getElementById("product_id").value,
    item_price:Number(document.getElementById("item_price").value),
    return_reason:document.getElementById("return_reason").value,
    customer_returns_90d:Number(document.getElementById("customer_returns_90d").value),
    customer_orders_90d:Number(document.getElementById("customer_orders_90d").value),
    prior_abuse_flags:Number(document.getElementById("prior_abuse_flags").value),
    product_defect_rate:Number(document.getElementById("product_defect_rate").value),
    days_since_delivery:Number(document.getElementById("days_since_delivery").value),
    damaged_claim:document.getElementById("damaged_claim").checked?1:0,
    resale_value:Number(document.getElementById("resale_value").value)
  };
}

function investigate(e){
  e.preventDefault();
  lastInvestigation=scoreRequest(readForm());
  renderInvestigation(lastInvestigation);renderSimulation(lastInvestigation);
}
function renderInvestigation(x){
  const el=document.getElementById("investigationResult");el.className="investigation-result";
  el.innerHTML=`<div class="result-top"><div><div class="meta">AUTONOMOUS DECISION</div><div class="score-ring">${x.return_risk_score}% risk</div></div>
  <span class="decision-badge">${x.recommended_action}</span></div><div class="result-grid">
  <div class="metric-box"><small>Customer risk</small><b>${x.customer_risk}%</b></div>
  <div class="metric-box"><small>Product risk</small><b>${x.product_risk}%</b></div>
  <div class="metric-box"><small>Abuse risk</small><b>${x.abuse_risk}%</b></div>
  <div class="metric-box"><small>Estimated impact</small><b>${money(x.estimated_financial_impact)}</b></div>
  <div class="metric-box"><small>Resale value</small><b>${money(x.resale_value)}</b></div>
  <div class="metric-box"><small>Best action</small><b style="text-transform:capitalize">${x.recommended_action}</b></div>
  </div><div style="margin-top:13px"><div class="section-title">Decision evidence</div>
  ${x.top_risk_factors.map(i=>`<div class="evidence-item" style="margin-bottom:7px"><span>${i.name}</span><b>${i.score}%</b></div>`).join("")}</div>`;
}
function renderSimulation(x){
  if(!x)return;
  document.getElementById("simCards").innerHTML=actionOrder.map(a=>`<div class="sim-card ${a===x.recommended_action?"active":""}">
  <h4>${a}</h4><div class="money">${money(x.action_costs[a])}</div><small>${a===x.recommended_action?"Agent recommendation":"Alternative operational path"}</small></div>`).join("");
}

function switchView(view){
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.getElementById(view+"-view").classList.add("active");
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===view));
  document.getElementById("page-title").textContent=view==="dashboard"?"Decision Dashboard":view==="investigate"?"Investigate Return":view==="history"?"Customer + Product History":"Action Simulation";
  window.scrollTo({top:0,behavior:"smooth"});
}

function parseCSV(text){
  const lines=text.trim().split(/\\r?\\n/).filter(Boolean);
  if(lines.length<2)return [];
  const headers=lines[0].split(",").map(s=>s.trim());
  return lines.slice(1).map(line=>{
    const cells=[];let cur="",quote=false;
    for(let i=0;i<line.length;i++){
      const ch=line[i];
      if(ch==='"'){ if(quote && line[i+1]==='"'){cur+='"';i++;} else quote=!quote; }
      else if(ch==="," && !quote){cells.push(cur);cur="";} else cur+=ch;
    }cells.push(cur);
    const obj={};headers.forEach((h,i)=>obj[h]=cells[i]??"");return obj;
  });
}

document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
document.getElementById("refreshBtn").addEventListener("click",renderDashboard);
document.getElementById("investigateForm").addEventListener("submit",investigate);

document.getElementById("csvInput").addEventListener("change",async e=>{
  const file=e.target.files?.[0];if(!file)return;
  const text=await file.text();const imported=parseCSV(text);
  if(!imported.length){alert("Could not read the CSV.");return;}
  records=imported;renderDashboard();
  alert(`Loaded ${records.length} return records. The dashboard has been recalculated.`);
});

renderDashboard();
