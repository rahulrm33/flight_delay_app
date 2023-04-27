function sendData() {
    console.log("Hii")
    const form = document.getElementById("myForm");
    const originlocation = document.getElementById("oriid").value
    const destlocation = document.getElementById("destid").value
    const depDate = document.getElementById("ddateid").value
    const depTime = document.getElementById("depTime").value
    const arrDate = document.getElementById("adateid").value
    const arrTime = document.getElementById("arrTime").value
    const aircraftNumber = document.getElementById("aircraftid").value
    const carrierCode = document.getElementById("carrierid").value
    const flightNumber = document.getElementById("flightid").value
    const year = document.getElementById("yid").value
    const month = document.getElementById("mid").value
    const date = document.getElementById("did").value
    const hour = document.getElementById("hid").value
    const minute = document.getElementById("miid").value
    const second = document.getElementById("sid").value
    const formData = new FormData(form);

    const duration = "PT"+hour+"H"+minute+"M"

    var url = `https://test.api.amadeus.com/v1/travel/predictions/flight-delay?originLocationCode=${encodeURIComponent(originlocation)}&destinationLocationCode=${encodeURIComponent(destlocation)}&departureDate=${encodeURIComponent(depDate)}&departureTime=${depTime}&arrivalDate=${encodeURIComponent(arrDate)}&arrivalTime=${arrTime}&aircraftCode=${encodeURIComponent(aircraftNumber)}&carrierCode=${encodeURIComponent(carrierCode)}&flightNumber=${encodeURIComponent(flightNumber)}&duration=${encodeURIComponent(duration)}`

    console.log(arrTime,depTime);
    const accessToken = "9lNy4rqVq5GeICE2Kf7izfkuW2FI";
    const timeout = 5000;
    fetch(url, {
        method: "GET",
        headers: {
        "Authorization": `Bearer ${accessToken}`,
        },
        // body: formData,
    },{ timeout })
    .then(response => response.json())
    .then(data => {
        var prob1=data.data[0].probability;
        var res1=data.data[0].result;
        var prob2=data.data[1].probability;
        var res2=data.data[1].result;
        var prob3=data.data[2].probability;
        var res3=data.data[2].result;
        var prob4=data.data[3].probability;
        var res4=data.data[3].result;
        var highest = Math.max(prob1,prob2,prob3,prob4)
        console.log(res1,res2,res3,res4)
        // let strr="";
        console.log(highest)
        if(highest == prob1){
            var strr = res1;
            document.getElementById("result").innerHTML = strr;
        } 
        else if(highest == prob2){
            var strr = res2;
            document.getElementById("result").innerHTML = strr;
        } 
        else if(highest == prob3){
            var strr = res3;
            document.getElementById("result").innerHTML = strr;
        } 
        else{
            var strr = res4;
            document.getElementById("result").innerHTML = strr;
        } 

        console.log(strr);
        // for(let i =0;i<4;i++){
        //     if(highest===data.data[i].probability){
        //         document.getElementById("result").innerHTML = JSON.stringify(data.data[i].result);
        //         break;
        //     }

        // }
        console.log(strr);
        
    })
    .catch(error => {
        console.error(error);
    });
    }