// help us to know which option is selected
$(document).ready(function () { 
    $("#equals").click(function () {
        const from = $("#convert_from").find("option:selected").text();
        const to = $("#convert_to").find("option:selected").text();

        if (convert_from_input.value > 0) {
            sameConversion(from, to, item_from_1, item_to_1);
            sameConversion(from, to, item_from_2, item_to_2);
            sameConversion(from, to, item_from_3, item_to_3);
            sameConversion(from, to, item_from_4, item_to_4);
            sameConversion(from, to, item_from_5, item_to_5);
            sameConversion(from, to, item_from_6, item_to_6);
            sameConversion(from, to, item_from_7, item_to_7);
            sameConversion(from, to, item_from_8, item_to_8);
            sameConversion(from, to, item_from_9, item_to_9);
            sameConversion(from, to, item_from_10, item_to_10);
            sameConversion(from, to, item_from_11, item_to_11);
            sameConversion(from, to, item_from_12, item_to_12);
            sameConversion(from, to, item_from_13, item_to_13);
            sameConversion(from, to, item_from_14, item_to_14);
            sameConversion(from, to, item_from_15, item_to_15);
            sameConversion(from, to, item_from_16, item_to_16);
            sameConversion(from, to, item_from_17, item_to_17);
            differentLengthConversions(from, to);
            differentAreaConversions(from, to);
            differentVolumeConversions(from, to);
            differentSpeedConversions(from, to);
            differentWeightConversions(from, to);
            differentTempConversions(from, to);
            differentPowerConversions(from, to);
            differentPressureConversions(from, to);
        }
    });
});

function sameConversion(from, to, item_from, item_to) {
    if (from == item_from.innerText && to == item_to.innerText) {
        convert_to_output.value = convert_from_input.value;
    }
}
