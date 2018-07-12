
    
class Request {

    constructor(setPrice) {
        this.setPrice = setPrice;



    }
    ajax_search() {

        $.ajax({
            type: "POST",
            url: "dateRequest.php",
            data: "setPrice=" + this.setPrice,
            success: function (data) {
                console.log(typeof (data));

                if (data == false) {

                    console.log("err");
                } else {
                    console.log(data);
                    data = data.split('"').join('');
                    $("#cost").html(data);



                }


            }
        });
    }

}


$("#subDate").click(function () {
    // let setPrice= Date.parse($("#selectDate").val())/1000;
    let setPrice = $("#selectDate").val();
    event.preventDefault();
    console.log(setPrice);
    let a = new Request(setPrice);
    a.ajax_search();


})






















    
    
 


