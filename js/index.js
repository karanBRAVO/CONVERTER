// adds elements to option tag and working of Num pad
console.log("*** Converter ***");
// alert("Welcome to My Converter...");
 
const firstSection = document.getElementById("firstSection");
const secondSection = document.getElementById("secondSection");
const backIcon = document.getElementById("backIcon");
const topHeading = document.getElementById("topHeading");
const convert_from_input = document.getElementById("convert_from_input");
const convert_to_output = document.getElementById("convert_to_output");

const item_from_1 = document.getElementById("item_from_1");
const item_from_2 = document.getElementById("item_from_2");
const item_from_3 = document.getElementById("item_from_3");
const item_from_4 = document.getElementById("item_from_4");
const item_from_5 = document.getElementById("item_from_5");
const item_from_6 = document.getElementById("item_from_6");
const item_from_7 = document.getElementById("item_from_7");
const item_from_8 = document.getElementById("item_from_8");
const item_from_9 = document.getElementById("item_from_9");
const item_from_10 = document.getElementById("item_from_10");
const item_from_11 = document.getElementById("item_from_11");
const item_from_12 = document.getElementById("item_from_12");
const item_from_13 = document.getElementById("item_from_13");
const item_from_14 = document.getElementById("item_from_14");
const item_from_15 = document.getElementById("item_from_15");
const item_from_16 = document.getElementById("item_from_16");
const item_from_17 = document.getElementById("item_from_17");
const item_to_1 = document.getElementById("item_to_1");
const item_to_2 = document.getElementById("item_to_2");
const item_to_3 = document.getElementById("item_to_3");
const item_to_4 = document.getElementById("item_to_4");
const item_to_5 = document.getElementById("item_to_5");
const item_to_6 = document.getElementById("item_to_6");
const item_to_7 = document.getElementById("item_to_7");
const item_to_8 = document.getElementById("item_to_8");
const item_to_9 = document.getElementById("item_to_9");
const item_to_10 = document.getElementById("item_to_10");
const item_to_11 = document.getElementById("item_to_11");
const item_to_12 = document.getElementById("item_to_12");
const item_to_13 = document.getElementById("item_to_13");
const item_to_14 = document.getElementById("item_to_14");
const item_to_15 = document.getElementById("item_to_15");
const item_to_16 = document.getElementById("item_to_16");
const item_to_17 = document.getElementById("item_to_17");

function changeInnerText(item, text) {
    item.innerText = text;
    item.value = text;
}

function convert(converter) {
    firstSection.style.display = "none";
    secondSection.style.display = "flex";
    if (converter==="length") {
        topHeading.innerText = "Length Conversion";
        changeInnerText(item_from_1, "Decimeter (dm)");
        changeInnerText(item_to_1, "Decimeter (dm)");
        changeInnerText(item_from_2, "Light year (ly)");
        changeInnerText(item_to_2, "Light year (ly)");
        changeInnerText(item_from_3, "Millimeter (mm)");
        changeInnerText(item_to_3, "Millimeter (mm)");
        changeInnerText(item_from_4, "Kilometer (km)");
        changeInnerText(item_to_4, "Kilometer (km)");
        changeInnerText(item_from_5, "Centimeter (cm)");
        changeInnerText(item_to_5, "Centimeter (cm)");
        changeInnerText(item_from_6, "Meter (m)");
        changeInnerText(item_to_6, "Meter (m)");
        changeInnerText(item_from_7, "Micrometer (µm)");
        changeInnerText(item_to_7, "Micrometer (µm)");
        changeInnerText(item_from_8, "Parsec (pc)");
        changeInnerText(item_to_8, "Parsec (pc)");
        changeInnerText(item_from_9, "Astronomical unit (AU)");
        changeInnerText(item_to_9, "Astronomical unit (AU)");
        changeInnerText(item_from_10, "Lunar Distance (LD)");
        changeInnerText(item_to_10, "Lunar Distance (LD)");
        changeInnerText(item_from_11, "Picometer (pm)");
        changeInnerText(item_to_11, "Picometer (pm)");
        changeInnerText(item_from_12, "Nanometer (nm)");
        changeInnerText(item_to_12, "Nanometer (nm)");
        changeInnerText(item_from_13, "Yard (yd)");
        changeInnerText(item_to_13, "Yard (yd)");
        changeInnerText(item_from_14, "Foot (ft)");
        changeInnerText(item_to_14, "Foot (ft)");
        changeInnerText(item_from_15, "Nautical mile (nmi)");
        changeInnerText(item_to_15, "Nautical mile (nmi)");
        changeInnerText(item_from_16, "Inch (in)");
        changeInnerText(item_to_16, "Inch (in)");
        changeInnerText(item_from_17, "Mile (mi)");
        changeInnerText(item_to_17, "Mile (mi)");
    }
    else if (converter==="area") {
        topHeading.innerText = "Area Conversion";
        changeInnerText(item_from_1, "Square meter (m^2)");
        changeInnerText(item_to_1, "Square meter (m^2)");
        changeInnerText(item_from_2, "Square decimeter (dm^2)");
        changeInnerText(item_to_2, "Square decimeter (dm^2)");
        changeInnerText(item_from_3, "Square centimeter (cm^2)");
        changeInnerText(item_to_3, "Square centimeter (cm^2)");
        changeInnerText(item_from_4, "Square kilometer (km^2)");
        changeInnerText(item_to_4, "Square kilometer (km^2)");
        changeInnerText(item_from_5, "Square millimeter (mm^2)");
        changeInnerText(item_to_5, "Square millimeter (mm^2)");
        changeInnerText(item_from_6, "Are (ar)");
        changeInnerText(item_to_6, "Are (ar)");
        changeInnerText(item_from_7, "Hectare (ha)");
        changeInnerText(item_to_7, "Hectare (ha)");
        changeInnerText(item_from_8, "Acre (ac)");
        changeInnerText(item_to_8, "Acre (ac)");
        changeInnerText(item_from_9, "Square inch (in^2)");
        changeInnerText(item_to_9, "Square inch (in^2)");
        changeInnerText(item_from_10, "Square foot (ft^2)");
        changeInnerText(item_to_10, "Square foot (ft^2)");
        changeInnerText(item_from_11, "Square yard (yd^2)");
        changeInnerText(item_to_11, "Square yard (yd^2)");
        changeInnerText(item_from_12, "Square mile (mi^2)");
        changeInnerText(item_to_12, "Square mile (mi^2)");
        changeInnerText(item_from_13, "-");
        changeInnerText(item_to_13, "-");
        changeInnerText(item_from_14, "-");
        changeInnerText(item_to_14, "-");
        changeInnerText(item_from_15, "-");
        changeInnerText(item_to_15, "-");
        changeInnerText(item_from_16, "-");
        changeInnerText(item_to_16, "-");
        changeInnerText(item_from_17, "-");
        changeInnerText(item_to_17, "-");
    }
    else if (converter==="volume") {
        topHeading.innerText = "Volume Conversion";
        changeInnerText(item_from_1, "Hectoliter (hl)");
        changeInnerText(item_to_1, "Hectoliter (hl)");
        changeInnerText(item_from_2, "Cubic meter (m^3)");
        changeInnerText(item_to_2, "Cubic meter (m^3)");
        changeInnerText(item_from_3, "Cubic centimeter (cm^3)");
        changeInnerText(item_to_3, "Cubic centimeter (cm^3)");
        changeInnerText(item_from_4, "Deciliter (dl)");
        changeInnerText(item_to_4, "Deciliter (dl)");
        changeInnerText(item_from_5, "Centiliter (cl)");
        changeInnerText(item_to_5, "Centiliter (cl)");
        changeInnerText(item_from_6, "Cubic decimeter (dm^3)");
        changeInnerText(item_to_6, "Cubic decimeter (dm^3)");
        changeInnerText(item_from_7, "Liter (l)");
        changeInnerText(item_to_7, "Liter (l)");
        changeInnerText(item_from_8, "Cubic millimeter (mm^3)");
        changeInnerText(item_to_8, "Cubic millimeter (mm^3)");
        changeInnerText(item_from_9, "Milliliter (ml))");
        changeInnerText(item_to_9, "Milliliter (ml))");
        changeInnerText(item_from_10, "Cubic foot (ft^3)");
        changeInnerText(item_to_10, "Cubic foot (ft^3)");
        changeInnerText(item_from_11, "Cubic yard (yd^3)");
        changeInnerText(item_to_11, "Cubic yard (yd^3)");
        changeInnerText(item_from_12, "Cubic inch (in^3)");
        changeInnerText(item_to_12, "Cubic inch (in^3)");
        changeInnerText(item_from_13, "Acre-foot (af^3)");
        changeInnerText(item_to_13, "Acre-foot (af^3)");
        changeInnerText(item_from_14, "Foot (ft)");
        changeInnerText(item_to_14, "Foot (ft)");
        changeInnerText(item_from_15, "Gallon (gal)");
        changeInnerText(item_to_15, "Gallon (gal)");
        changeInnerText(item_from_16, "-");
        changeInnerText(item_to_16, "-");
        changeInnerText(item_from_17, "-");
        changeInnerText(item_to_17, "-");
    }
    else if (converter==="speed") {
        topHeading.innerText = "Speed Conversion";
        changeInnerText(item_from_1, "Speed of light (c)");
        changeInnerText(item_to_1, "Speed of light (c)");
        changeInnerText(item_from_2, "Kilometer/second (km/s)");
        changeInnerText(item_to_2, "Kilometer/second (km/s)");
        changeInnerText(item_from_3, "Mile/hour (mph)");
        changeInnerText(item_to_3, "Mile/hour (mph)");
        changeInnerText(item_from_4, "Mach (Ma)");
        changeInnerText(item_to_4, "Mach (Ma)");
        changeInnerText(item_from_5, "inch/second (in/s)");
        changeInnerText(item_to_5, "inch/second (in/s)");
        changeInnerText(item_from_6, "Meter/second (m/s)");
        changeInnerText(item_to_6, "Meter/second (m/s)");
        changeInnerText(item_from_7, "Kilometer/hour (km/h)");
        changeInnerText(item_to_7, "Kilometer/hour (km/h)");
        changeInnerText(item_from_8, "Knot (kt)");
        changeInnerText(item_to_8, "Knot (kt)");
        changeInnerText(item_from_9, "Foot/second (ft/s)");
        changeInnerText(item_to_9, "Foot/second (ft/s)");
        changeInnerText(item_from_10, "-");
        changeInnerText(item_to_10, "-");
        changeInnerText(item_from_11, "-");
        changeInnerText(item_to_11, "-");
        changeInnerText(item_from_12, "-");
        changeInnerText(item_to_12, "-");
        changeInnerText(item_from_13, "-");
        changeInnerText(item_to_13, "-");
        changeInnerText(item_from_14, "-");
        changeInnerText(item_to_14, "-");
        changeInnerText(item_from_15, "-");
        changeInnerText(item_to_15, "-");
        changeInnerText(item_from_16, "-");
        changeInnerText(item_to_16, "-");
        changeInnerText(item_from_17, "-");
        changeInnerText(item_to_17, "-");
    }
    else if (converter==="weight") {
        topHeading.innerText = "Weight Conversion";
        changeInnerText(item_from_1, "Gram (g)");
        changeInnerText(item_to_1, "Gram (g)");
        changeInnerText(item_from_2, "Microgram (µg)");
        changeInnerText(item_to_2, "Microgram (µg)");
        changeInnerText(item_from_3, "Quintal (q)");
        changeInnerText(item_to_3, "Quintal (q)");
        changeInnerText(item_from_4, "Carat (ct)");
        changeInnerText(item_to_4, "Carat (ct)");
        changeInnerText(item_from_5, "Ton (t)");
        changeInnerText(item_to_5, "Ton (t)");
        changeInnerText(item_from_6, "Milligram (mg)");
        changeInnerText(item_to_6, "Milligram (mg)");
        changeInnerText(item_from_7, "Kilogram (kg)");
        changeInnerText(item_to_7, "Kilogram (kg)");
        changeInnerText(item_from_8, "Pound(lb)");
        changeInnerText(item_to_8, "Pound(lb)");
        changeInnerText(item_from_9,  "Grain (gr)");
        changeInnerText(item_to_9,  "Grain (gr)");
        changeInnerText(item_from_10, "Ounce (oz)");
        changeInnerText(item_to_10, "Ounce (oz)");
        changeInnerText(item_from_11, "Stone (st)");
        changeInnerText(item_to_11, "Stone (st)");
        changeInnerText(item_from_12, "Long hundredweight (lg cwt)");
        changeInnerText(item_to_12, "Long hundredweight (lg cwt)");
        changeInnerText(item_from_13, "-");
        changeInnerText(item_to_13, "-");
        changeInnerText(item_from_14, "-");
        changeInnerText(item_to_14, "-");
        changeInnerText(item_from_15, "-");
        changeInnerText(item_to_15, "-");
        changeInnerText(item_from_16, "-");
        changeInnerText(item_to_16, "-");
        changeInnerText(item_from_17, "-");
        changeInnerText(item_to_17, "-");
    }
    else if (converter==="temp") {
        topHeading.innerText = "Temperature Conversion";
        changeInnerText(item_from_1, "Degree Celsius (°C)");
        changeInnerText(item_to_1, "Degree Celsius (°C)");
        changeInnerText(item_from_2, "Degree Rankine (°R)");
        changeInnerText(item_to_2, "Degree Rankine (°R)");
        changeInnerText(item_from_3, "Degree Reaumur (°Re)");
        changeInnerText(item_to_3, "Degree Reaumur (°Re)");
        changeInnerText(item_from_4, "Degree Fahrenheit (°F)");
        changeInnerText(item_to_4, "Degree Fahrenheit (°F)");
        changeInnerText(item_from_5, "Kelvin (K)");
        changeInnerText(item_to_5, "Kelvin (K)");
        changeInnerText(item_from_6, "-");
        changeInnerText(item_to_6, "-");
        changeInnerText(item_from_7, "-");
        changeInnerText(item_to_7, "-");
        changeInnerText(item_from_8, "-");
        changeInnerText(item_to_8, "-");
        changeInnerText(item_from_9, "-");
        changeInnerText(item_to_9, "-");
        changeInnerText(item_from_10, "-");
        changeInnerText(item_to_10, "-");
        changeInnerText(item_from_11, "-");
        changeInnerText(item_to_11, "-");
        changeInnerText(item_from_12, "-");
        changeInnerText(item_to_12, "-");
        changeInnerText(item_from_13, "-");
        changeInnerText(item_to_13, "-");
        changeInnerText(item_from_14, "-");
        changeInnerText(item_to_14, "-");
        changeInnerText(item_from_15, "-");
        changeInnerText(item_to_15, "-");
        changeInnerText(item_from_16, "--");
        changeInnerText(item_to_16, "-");
        changeInnerText(item_from_17, "-");
        changeInnerText(item_to_17, "-");
    }
    else if (converter==="power") {
        topHeading.innerText = "Power Conversion";
        changeInnerText(item_from_1, "Joule/second (J/s)");
        changeInnerText(item_to_1, "Joule/second (J/s)");
        changeInnerText(item_from_2, "British thermal unit/second (Btu/s)");
        changeInnerText(item_to_2, "British thermal unit/second (Btu/s)");
        changeInnerText(item_from_3, "Metric horsepower(PS)");
        changeInnerText(item_to_3, "Metric horsepower(PS)");
        changeInnerText(item_from_4, "Kilogram -meter/second (kg m/s)");
        changeInnerText(item_to_4, "Kilogram -meter/second (kg m/s)");
        changeInnerText(item_from_5, "Kilocalorie/second (kcal/s)");
        changeInnerText(item_to_5, "Kilocalorie/second (kcal/s)");
        changeInnerText(item_from_6, "Watt (W)");
        changeInnerText(item_to_6, "Watt (W)");
        changeInnerText(item_from_7, "Imperial horsepower (hp)");
        changeInnerText(item_to_7, "Imperial horsepower (hp)");
        changeInnerText(item_from_8, "Foot-pound/second (ft lb/s)");
        changeInnerText(item_to_8, "Foot-pound/second (ft lb/s)");
        changeInnerText(item_from_9, "Newton-meter/second (N m/s)");
        changeInnerText(item_to_9, "Newton-meter/second (N m/s)");
        changeInnerText(item_from_10, "Kilowatt (kW)");
        changeInnerText(item_to_10, "Kilowatt (kW)");
        changeInnerText(item_from_11, "-");
        changeInnerText(item_to_11, "-");
        changeInnerText(item_from_12, "-");
        changeInnerText(item_to_12, "-");
        changeInnerText(item_from_13, "-");
        changeInnerText(item_to_13, "-");
        changeInnerText(item_from_14, "-");
        changeInnerText(item_to_14, "-");
        changeInnerText(item_from_15, "-");
        changeInnerText(item_to_15, "-");
        changeInnerText(item_from_16, "-");
        changeInnerText(item_to_16, "--");
        changeInnerText(item_from_17, "-");
        changeInnerText(item_to_17, "-");
    }
    else if (converter==="pressure") {
        topHeading.innerText = "Pressure Conversion";
        changeInnerText(item_from_1, "Millimeter of water (mmH2O)");
        changeInnerText(item_to_1, "Millimeter of water (mmH2O)");
        changeInnerText(item_from_2, "Pounds/square foot (psf)");
        changeInnerText(item_to_2, "Pounds/square foot (psf)");
        changeInnerText(item_from_3, "kilogram-force/square centimeter (kgf/cm^2)");
        changeInnerText(item_to_3, "kilogram-force/square centimeter (kgf/cm^2)");
        changeInnerText(item_from_4, "Pound/square inch (psi)");
        changeInnerText(item_to_4, "Pound/square inch (psi)");
        changeInnerText(item_from_5, "Millimeter of mercury (mmHg)");
        changeInnerText(item_to_5, "Millimeter of mercury (mmHg)");
        changeInnerText(item_from_6, "Bar");
        changeInnerText(item_to_6, "Bar");
        changeInnerText(item_from_7, "Inch of mercury (inHg)");
        changeInnerText(item_to_7, "Inch of mercury (inHg)");
        changeInnerText(item_from_8, "Millibar (mbar)");
        changeInnerText(item_to_8, "Millibar (mbar)");
        changeInnerText(item_from_9, "Hectopascal (hPa)");
        changeInnerText(item_to_9, "Hectopascal (hPa)");
        changeInnerText(item_from_10, "Standard atmosphere (atm)");
        changeInnerText(item_to_10, "Standard atmosphere (atm)");
        changeInnerText(item_from_11, "Kilopascal (kPa)");
        changeInnerText(item_to_11, "Kilopascal (kPa)");
        changeInnerText(item_from_12, "Kilogram-force/square meter (kgf/m^2)");
        changeInnerText(item_to_12, "Kilogram-force/square meter (kgf/m^2)");
        changeInnerText(item_from_13, "Megapascal (Mpa)");
        changeInnerText(item_to_13, "Megapascal (Mpa)");
        changeInnerText(item_from_14, "-");
        changeInnerText(item_to_14, "-");
        changeInnerText(item_from_15, "-");
        changeInnerText(item_to_15, "-");
        changeInnerText(item_from_16, "-");
        changeInnerText(item_to_16, "-");
        changeInnerText(item_from_17, "-");
        changeInnerText(item_to_17, "-");
    }
}
 
// Move back button
function back() {
    firstSection.style.display = "block";
    secondSection.style.display = "none";
    removeAll();
}

// Num pad logic
function removeAll() {
    convert_from_input.value = '';
    convert_to_output.value = '';
}

function removeLast() {  // Todo
    convert_from_input.value = Math.trunc(convert_from_input.value / 10);
}

function showNumbers(num) {
    convert_from_input.value = convert_from_input.value + num;
}

function addTwoZeros() {
    convert_from_input.value = convert_from_input.value + '00';
}

function addDecimal() {
    convert_from_input.value = convert_from_input.value + '.';
}