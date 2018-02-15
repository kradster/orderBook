$('document').ready(function () {
    var myArray = [];
    var coins  = [];
    var mycoins = [
        ark=[],
        bat=[],
        bcc=[],
        bts=[],
        cloak=[],
        cvc=[],
        dash=[],
        dcn=[],
        dgb=[],
        doge=[],
        etc=[],
        eth=[],
        fct=[],
        gnt=[],
        inr=[],
        lsk=[],
        ltc=[],
        neo=[],
        nxt=[],
        omg=[],
        pay=[],
        pivx=[],
        qtum=[],
        rep=[],
        sc=[],
        steem=[],
        strat=[],
        xem=[],
        xmr=[],
        xrp=[],
        zec=[]
    
        
    ];
    getRates();
    //setInterval(getRates,1000);
    
    function getRates(){
        $.ajax({
     url: "http://localhost/orderBook/data/ajax_rate.json",
     type: "GET",
     dataType: "json",
     data: {},
     success: function(data){
         for(var x in data){
             myArray.push(data[x]);
         }
         console.log(myArray);
         for(var i  in myArray[0].crypto){
             coins.push(myArray[0].crypto[i]);
         }
         console.log(coins);
         extracData();
         
            },
     error: function(error){
      console.log(error);
      }
   });
    }
    
    //console.log(mycoins);
    
    function extracData(arr){
        for(var i = 0;i<mycoins.length;i++){
                mycoins[i].push(coins[i]);
        }
        console.log(mycoins);
    }

    var ctx = document.getElementById("myChart").getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
                borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
                borderWidth: 1
        }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
            }]
            }
        }
    });

});