function differentSpeedConversions(from, to) {
    // speed of light
    if (from == 'Speed of light (c)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value * 299792;
    }
    else if (from == 'Kilometer/second (km/s)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 299792;
    }
    else if (from == 'Speed of light (c)' && to == 'Mile/hour (mph)') {
        convert_to_output.value = convert_from_input.value * 6.706e+8;
    }
    else if (from == 'Mile/hour (mph)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 6.706e+8;
    }
    else if (from == 'Speed of light (c)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value * 874030;
    }
    else if (from == 'Mach (Ma)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 874030;
    }
    else if (from == 'Speed of light (c)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value * 1.18e+10;
    }
    else if (from == 'Inch/second (in/s)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 1.18e+10;
    }
    else if (from == 'Speed of light (c)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value * 2.998e+8;
    }
    else if (from == 'Meter/second (m/s)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 2.998e+8;
    }
    else if (from == 'Speed of light (c)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value * 1.079e+9;
    }
    else if (from == 'Kilometer/hour (km/h)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 1.079e+9;
    }
    else if (from == 'Speed of light (c)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value * 5.827e+8;
    }
    else if (from == 'Knot (kt)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 5.827e+8;
    }
    else if (from == 'Speed of light (c)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 9.836e+8;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Speed of light (c)') {
        convert_to_output.value = convert_from_input.value / 9.836e+8;
    }
    // kilometer per second
    else if (from == 'Kilometer/second (km/s)' && to == 'Mile/hour (mph)') {
        convert_to_output.value = convert_from_input.value * 2236.94;
    }
    else if (from == 'Mile/hour (mph)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value / 2236.94;
    }
    else if (from == 'Kilometer/second (km/s)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value * 2.91545;
    }
    else if (from == 'Mach (Ma)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value / 2.91545;
    }
    else if (from == 'Kilometer/second (km/s)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value * 39370.1;
    }
    else if (from == 'Inch/second (in/s)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value / 39370.1;
    }
    else if (from == 'Kilometer/second (km/s)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value * 1000;
    }
    else if (from == 'Meter/second (m/s)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value / 1000;
    }
    else if (from == 'Kilometer/second (km/s)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value * 3600;
    }
    else if (from == 'Kilometer/hour (km/h)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value / 3600;
    }
    else if (from == 'Kilometer/second (km/s)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value * 1943.84;
    }
    else if (from == 'Knot (kt)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value / 1943.84;
    }
    else if (from == 'Kilometer/second (km/s)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 3280.8323097113;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Kilometer/second (km/s)') {
        convert_to_output.value = convert_from_input.value / 3280.8323097113;
    }
    // miles per hour
    else if (from == 'Miles/hour (mph)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value * 2.91545;
    }
    else if (from == 'Mach (Ma)' && to == 'Miles/hour (mph)') {
        convert_to_output.value = convert_from_input.value / 2.91545;
    }
    else if (from == 'Miles/hour (mph)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value * 17.6;
    }
    else if (from == 'Inch/second (in/s)' && to == 'Miles/hour (mph)') {
        convert_to_output.value = convert_from_input.value / 17.6;
    }
    else if (from == 'Miles/hour (mph)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value * 0.44704;
    }
    else if (from == 'Meter/second (m/s)' && to == 'Miles/hour (mph)') {
        convert_to_output.value = convert_from_input.value / 0.44704;
    }
    else if (from == 'Miles/hour (mph)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value * 1.60934;
    }
    else if (from == 'Kilometer/hour (km/h)' && to == 'Miles/hour (mph)') {
        convert_to_output.value = convert_from_input.value / 1.60934;
    }
    else if (from == 'Miles/hour (mph)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value * 0.868976;
    }
    else if (from == 'Knot (kt)' && to == 'Miles/hour (mph)') {
        convert_to_output.value = convert_from_input.value / 0.868976;
    }
    else if (from == 'Miles/hour (mph)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 1.4666632757333393222;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Miles/hour (mph)') {
        convert_to_output.value = convert_from_input.value / 1.4666632757333393222;
    }
    // mach -> speed of sound
    else if (from == 'Mach (Ma)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value * 13503.9;
    }
    else if (from == 'Inch/second (in/s)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value / 13503.9;
    }
    else if (from == 'Mach (Ma)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value * 343;
    }
    else if (from == 'Meter/second (m/s)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value / 343;
    }
    else if (from == 'Mach (Ma)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value * 1234.8;
    }
    else if (from == 'Kilometer/hour (km/h)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value / 1234.8;
    }
    else if (from == 'Mach (Ma)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value * 666.739;
    }
    else if (from == 'Knot (kt)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value / 666.739;
    }
    else if (from == 'Mach (Ma)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 1125.33;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Mach (Ma)') {
        convert_to_output.value = convert_from_input.value / 1125.33;
    }
    // inch per second
    else if (from == 'Inch/second (in/s)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value * 0.0254;
    }
    else if (from == 'Meter/second (m/s)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value / 0.0254;
    }
    else if (from == 'Inch/second (in/s)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value * 0.09144;
    }
    else if (from == 'Kilometer/hour (km/h)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value / 0.09144;
    }
    else if (from == 'Inch/second (in/s)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value * 0.0493737;
    }
    else if (from == 'Knot (kt)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value / 0.0493737;
    }
    else if (from == 'Inch/second (in/s)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 0.0833333;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Inch/second (in/s)') {
        convert_to_output.value = convert_from_input.value / 0.0833333;
    }
    // meter per second
    else if (from == 'Meter/second (m/s)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value * 3.6;
    }
    else if (from == 'Kilometer/hour (km/h)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value / 3.6;
    }
    else if (from == 'Meter/second (m/s)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value * 1.94384;
    }
    else if (from == 'Knot (kt)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value / 1.94384;
    }
    else if (from == 'Meter/second (m/s)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 3.28084;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Meter/second (m/s)') {
        convert_to_output.value = convert_from_input.value / 3.28084;
    }
    // kilometer per hour
    else if (from == 'Kilometer/hour (km/h)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value * 0.539957;
    }
    else if (from == 'Knot (kt)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value / 0.539957;
    }
    else if (from == 'Kilometer/hour (km/h)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 0.911344;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Kilometer/hour (km/h)') {
        convert_to_output.value = convert_from_input.value / 0.911344;
    }
    // knot
    else if (from == 'Knot (kt)' && to == 'Foot/second (ft/s)') {
        convert_to_output.value = convert_from_input.value * 1.68781;
    }
    else if (from == 'Foot/second (ft/s)' && to == 'Knot (kt)') {
        convert_to_output.value = convert_from_input.value / 1.68781;
    }
}