console.log("nikhil");
let url="https://api.covid19india.org/data.json";
fetch(url).then((response)=>response.json())
.then((data)=>getdata(data))
function getdata(data){
    console.log(data['statewise'])
    let array1=data['statewise'];
    array1.forEach(element => {
        let html=`<tr>
        <th scope="row" class='bg-info'>${element['state']}</th>
        <td class="" style="background-color:#eb5287;">${element['confirmed']}</td>
        <td class="bg-warning">${element['active']}</td>
        <td class='bg-danger'>${element['deaths']}</td>
        <td class="bg-success">${element['recovered']}</td>\
        <td class=""style="background-color:#f09462;">${element['lastupdatedtime']}</td>
      </tr>`
      let table=document.getElementById('tableBody')
      table.innerHTML+=html;
        });
    }









// active: "749537"
// confirmed: "7596667"
// deaths: "115252"
// deltaconfirmed: "1931"
// deltadeaths: "16"
// deltarecovered: "0"
// lastupdatedtime: "20/10/2020 11:38:27"
// migratedother: "1261"
// recovered: "6730617"
// state: "Total"
// statecode: "TT"
// statenotes: ""