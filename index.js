function search(country){
  let url= `http://universities.hipolabs.com/search?country=${country}`

fetch(url)
.then((accept)=> {
  console.log(accept);
     return accept.json()})
.then((final) => {
  console.log(final);
  for( i in final)
{
    var row = document.createElement("tr");

    var td0 = document.createElement("td")
    var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    
    td0.innerText= final[i]["name"];
    td1.innerText=final[i]["state-province"];
    td2.innerText=final[i]["alpha_two_code"];
    td3.innerText=final[i]["domains"];
    
    head.appendChild(row);

    row.appendChild(td0);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
}
});
}

window.onload = () =>{
  let country = document.getElementById("searchCountry");
  country.onkeyup = (event) =>{
    search(country.value)
  }
}
var head = document.getElementById("table");
var row = document.createElement("tr");
head.appendChild(row);
reloadButton.addEventListener("click", reload, false);
const reloadtButton = document.querySelector("#reload");

function reload() {
    reload = location.reload();
}