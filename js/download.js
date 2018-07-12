 class Request {

    ajax_search() {

        $.ajax({
            type: "POST",
            url: "downloadPriceForAdmin.php",
            data: "",
            success: function rewrite(data) {

                if (data == false) {

                    console.log("err");
                } else {
                    console.log(data);


                    let inputArr = document.getElementsByClassName("form-control")

                    let i = 0;
                    $.each(JSON.parse(data), function (key, val) {

                        inputArr[i].value = val.price
                        i++
                        $("#" + val.period_priority).attr('checked', 'checked')
                    }

                    )




                }


            }
        });
    }

}





let a = new Request();
a.ajax_search();




      
