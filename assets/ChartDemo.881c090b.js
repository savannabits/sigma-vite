import{r as a,c as l,b as r,d as o,o as t}from"./vendor.2897f5d5.js";const e={data:()=>({lineData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:"#2f4860",borderColor:"#2f4860",tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:"#00bb7e",borderColor:"#00bb7e",tension:.4}]},pieData:{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},polarData:{datasets:[{data:[11,16,7,3,14],backgroundColor:["#FF6384","#4BC0C0","#FFCE56","#E7E9ED","#36A2EB"],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},barData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"#2f4860",data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:"#00bb7e",data:[28,48,40,19,86,27,90]}]},doughnutData:{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},radarData:{labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]}})},d={class:"grid p-fluid"},n={class:"col-12 lg:col-6"},s={class:"card"},i=r("h5",null,"Linear Chart",-1),u={class:"card flex flex-column align-items-center"},c=r("h5",null,"Pie Chart",-1),b={class:"card flex flex-column align-items-center"},g=r("h5",null,"Polar Area Chart",-1),C={class:"col-12 lg:col-6"},f={class:"card"},p=r("h5",null,"Bar Chart",-1),h={class:"card flex flex-column align-items-center"},y=r("h5",null,"Doughnut Chart",-1),F={class:"card flex flex-column align-items-center"},B=r("h5",null,"Radar Chart",-1);e.render=function(e,D,k,v,E,A){const m=a("Chart");return t(),l("div",d,[r("div",n,[r("div",s,[i,o(m,{type:"line",data:E.lineData},null,8,["data"])]),r("div",u,[c,o(m,{type:"pie",data:E.pieData,style:{width:"50%"}},null,8,["data"])]),r("div",b,[g,o(m,{type:"polarArea",data:E.polarData,style:{width:"50%"}},null,8,["data"])])]),r("div",C,[r("div",f,[p,o(m,{type:"bar",data:E.barData},null,8,["data"])]),r("div",h,[y,o(m,{type:"doughnut",data:E.doughnutData,style:{width:"50%"}},null,8,["data"])]),r("div",F,[B,o(m,{type:"radar",data:E.radarData,style:{width:"50%"}},null,8,["data"])])])])};export{e as default};
