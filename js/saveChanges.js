class SendPrices {

    constructor(prioraty, newPrices) {
        this.prioraty = prioraty;
        this.newPrices = newPrices;


    }
    ajax_search() {

        $.ajax({
            type: "POST",
            url: "saveChanges.php",
            data: this.prioraty + "&newPrices=" + this.newPrices,
            success: function (data) {
                console.log(typeof (data));
                console.log(data);


            }
        });
    }

}

$('.setPrice').click(function () {
    event.preventDefault();
    let newPriceArr = [];
    $('.form-control').each(function (i, elem) {
        newPriceArr.push(elem.value)
    })





    let checkedPrioraty;

    if ($("#by_less").prop('checked') == true) {
        checkedPrioraty = "prioraty=by_less"

    }
    if ($("#by_last").prop('checked') == true) {
        checkedPrioraty = "prioraty=by_last"
    }
    console.log(checkedPrioraty)
    let setPrice = $("#selectDate").val();
    event.preventDefault();





    let a = new SendPrices(checkedPrioraty, newPriceArr);
    a.ajax_search();

}
)  