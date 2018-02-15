$('document').ready(function () {
    var BuyAmount = $("#buy_amnt");
    var BuyPrice = $("#buy_price");

    /*
    $("#buybtn").on('click', function () {
        var price = parseFloat(BuyPrice.val());
        var amnt = parseFloat(BuyAmount.val());
        
        var x = toString(price);

        if (price == "" && amnt == "") {

            console.log("error");
        } 
        else {
            
            var x = toString(price);
            var y = toString(amnt);

            if (numValidator(price) && numValidator(amnt)) {
                var obj = {
                    buyprice: price,
                    buyamount: amnt
                };

                console.log(obj);
            } 
            
            else {
                console.log("not a number")
            }

        }


    });

    function numValidator(text){
        var regx = /^[+]?\d*\.?\d*(\.\d{1,4})?$/;
       // var newRegx = /^[0-9]{1,11}(?:\.[0-9]{1,3})?$/;
        return regx.test(text);
    }
    */

    BuyAmount.keypress(function (e) {
        var text = $(this);
        var x = text.val();
        if (e.which == 189) {
            text.val("negative amount not accepted")
        } else {

            if (e.which >= 47 && e.which <= 57 || e.which == 46) {
                var k = x.replace("NaN","");
                var y = x.indexOf(".");
                var z = x.slice(y, (y + 9));
                var fs1 = x.slice(0, y);
                if (e.which >= 47 && e.which <= 57) {
                    if(e.which==46){
                    var fs2 = parseFloat(fs1.concat(z));
                    }
                    var fs2 = parseFloat(fs1.concat(z));
                    $(this).val(fs2);
                }

                console.log(fs2);
                console.log(e.which);
            } else {
                x = "";
                text.val("plz enter valid amonut");
            }
            
            switch(e.which){
                case 47:
            }

        }
    });







});
