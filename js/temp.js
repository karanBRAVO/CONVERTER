function differentTempConversions(from, to) {
    // degree celsius
    if (from == 'Degree Celsius (°C)' && to == 'Degree Rankine (°R)') {
        convert_to_output.value = (convert_from_input.value * (9/5)) + 491.67;
    }
    else if (from == 'Degree Rankine (°R)' && to == 'Degree Celsius (°C)') {
        convert_to_output.value = (convert_from_input.value - 491.67) * (5/9);
    }
    else if (from == 'Degree Celsius (°C)' && to == 'Degree Reaumur (°Re)') {
        convert_to_output.value = (convert_from_input.value * 0.8);
    }
    else if (from == 'Degree Reaumur (°Re)' && to == 'Degree Celsius (°C)') {
        convert_to_output.value = (convert_from_input.value * 1.25);
    }
    else if (from == 'Degree Celsius (°C)' && to == 'Degree Fahrenheit (°F)') {
        convert_to_output.value = (convert_from_input.value * (9/5)) + 32;
    }
    else if (from == 'Degree Fahrenheit (°F)' && to == 'Degree Celsius (°C)') {
        convert_to_output.value = (convert_from_input.value - 32) * (5/9);
    }
    else if (from == 'Degree Celsius (°C)' && to == 'Kelvin (K)') {
        convert_to_output.value = Number(convert_from_input.value) + 273.15;
    }
    else if (from == 'Kelvin (K)' && to == 'Degree Celsius (°C)') {
        convert_to_output.value = Number(convert_from_input.value) - 273.15;
    }
    // degree rankine
    else if (from == 'Degree Rankine (°R)' && to == 'Degree Reaumur (°Re)') {
        convert_to_output.value = (convert_from_input.value - 32 - 459.67) / 2.25;
    }
    else if (from == 'Degree Reaumur (°Re)' && to == 'Degree Rankine (°R)') {
        convert_to_output.value = (convert_from_input.value * 2.25) + 32 + 459.67;
    }
    else if (from == 'Degree Rankine (°R)' && to == 'Degree Fahrenheit (°F)') {
        convert_to_output.value = Number(convert_from_input.value) - 459.67;
    }
    else if (from == 'Degree Fahrenheit (°F)' && to == 'Degree Rankine (°R)') {
        convert_to_output.value = Number(convert_from_input.value) + 459.67;
    }
    else if (from == 'Degree Rankine (°R)' && to == 'Kelvin (K)') {
        convert_to_output.value = Number(convert_from_input.value) * (5/9);
    }
    else if (from == 'Kelvin (K)' && to == 'Degree Rankine (°R)') {
        convert_to_output.value = Number(convert_from_input.value)* (9/5);
    }
    // degree reaumur
    else if (from == 'Degree Reaumur (°Re)' && to == 'Degree Fahrenheit (°F)') {
        convert_to_output.value = (convert_from_input.value * 2.25) + 32;
    }
    else if (from == 'Degree Fahrenheit (°F)' && to == 'Degree Reaumur (°Re)') {
        convert_to_output.value = (convert_from_input.value - 32) / 2.25;
    }
    else if (from == 'Degree Reaumur (°Re)' && to == 'Kelvin (K)') {
        convert_to_output.value = (convert_from_input.value * 1.25) + 273.15;
    }
    else if (from == 'Kelvin (K)' && to == 'Degree Reaumur (°Re)') {
        convert_to_output.value = (convert_from_input.value - 273.15) / 1.25;
    }
    // degree fahrenheit
    else if (from == 'Degree Fahrenheit (°F)' && to == 'Kelvin (K)') {
        convert_to_output.value = ((convert_from_input.value - 32) * (5/9)) + 273.15;
    }
    else if (from == 'Kelvin (K)' && to == 'Degree Fahrenheit (°F)') {
        convert_to_output.value = ((convert_from_input.value - 273.15) * (9/5)) + 32;
    }
}