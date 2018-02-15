$('document').ready(function () {
    var SellAmount = $("#sell_amnt");
    var SellPrice = $("#sell_price");
    
    $("#sellbtn").on('click', function () {
        
        var price = parseFloat(SellPrice.val());
        var amnt = parseFloat(SellAmount.val());
        
        if (price == "" && amnt == "") {

            console.log("error");
        } else {

            if (numValidator(price) && numValidator(amnt)) {
                if(confirm("Are You Want Sale"))
                var obj = {
                    sellprice: price,
                    sellamount: amnt
                };

                console.log(obj);
            } else {
                console.log("not a number")
            }

        }


    });

    function numValidator(text) {
        var regx = /^[-+]?\d*\.?\d*$/;
        return regx.test(text);
    }

        
    });