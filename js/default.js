class Default {

    ajax_search() {

        $.ajax({
            type: "POST",
            url: "default.php",
            data: "",
            success: function (data) {


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





let a = new Default();
a.ajax_search();



