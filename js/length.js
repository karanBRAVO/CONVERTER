function differentLengthConversions(from, to) {
    // decimeter  
    if (from == "Decimeter (dm)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-17;
    }
    else if (from == "Light year (ly)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 94607379375591296.12109744560076;
    }
    else if (from == "Decimeter (dm)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 100;
    }
    else if (from == "Millimeter (mm)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 0.01;
    }
    else if (from == "Decimeter (dm)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 0.0001;
    }
    else if (from == "Kilometer (km)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 10_000;
    }
    else if (from == "Decimeter (dm)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 10;
    }
    else if (from == "Centimeter (cm)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 0.1;
    }
    else if (from == "Decimeter (dm)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 0.1;
    }
    else if (from == "Meter (m)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 10;
    }
    else if (from == "Decimeter (dm)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 100_000;
    }
    else if (from == "Micrometer (µm)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 0.00001;
    }
    else if (from == "Decimeter (dm)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-18;
    }
    else if (from == "Parsec (pc)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 308568642637397902.35036735096906;
    }
    else if (from == "Decimeter (dm)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-13;
    }
    else if (from == "Astronomical unit (AU)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 1495975825030.66750441312868;
    }
    else if (from == "Decimeter (dm)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.6041e-9;
    }
    else if (from == "Lunar distance (LD)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 384009830.65166468261587;
    }
    else if (from == "Decimeter (dm)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 100_000_000_000;
    }
    else if (from == "Picometer (pm)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 1e-11;
    }
    else if (from == "Decimeter (dm)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 100_000_000;
    }
    else if (from == "Nanometer (nm)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 1e-8;
    }
    else if (from == "Decimeter (dm)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 0.10936133;
    }
    else if (from == "Yard (yd)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 9.14399998610112;
    }
    else if (from == "Decimeter (dm)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 0.32808399;
    }
    else if (from == "Foot (ft)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 3.04799999536704;
    }
    else if (from == "Decimeter (dm)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.000054;
    }
    else if (from == "Nautical mile (nmi)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 18518.51851851851852;
    }
    else if (from == "Decimeter (dm)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 3.93700787;
    }
    else if (from == "Inch (in)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 0.25400000025908;
    }
    else if (from == "Decimeter (dm)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 0.00006214;
    }
    else if (from == "Mile (mi)" && to == "Decimeter (dm)") {
        convert_to_output.value = convert_from_input.value * 16092.69391696169939;
    }
    // light year
    else if (from == "Light year (ly)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 9460737937559129612.109744560076;
    }
    else if (from == "Millimeter (mm)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-19;
    }
    else if (from == "Light year (ly)" && to == "kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 9460737937559.129612109744560076;
    }
    else if (from == "kilometer (km)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-13;
    }
    else if (from == "Light year (ly)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 946073793755912961.2109744560076;
    }
    else if (from == "Centimeter (cm)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-18;
    }
    else if (from == "Light year (ly)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 9460737937559129.612109744560076;
    }
    else if (from == "Meter (m)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-16;
    }
    else if (from == "Light year (ly)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 9460737937559129612109.744560076;
    }
    else if (from == "Micrometer (µm)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-22;
    }
    else if (from == "Light year (ly)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 0.3066007568590350047303689687795749852;
    }
    else if (from == "Parsec (pc)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 3.2615705526772958278433828997429642;
    }
    else if (from == "Light year (ly)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 63241.2488174077578051087984862840296;
    }
    else if (from == "Astronomical unit (AU)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 0.0000158124644705741555216467701476;
    }
    else if (from == "Light year (ly)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 246367076.631977294228949858088939116;
    }
    else if (from == "Lunar distance (LD)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 4.0589839099880956952497459e-9;
    }
    else if (from == "Light year (ly)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 9460737937559129612109744560.076;
    }
    else if (from == "Picometer (pm)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-28;
    }
    else if (from == "Light year (ly)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 9460737937559129612109744.560076;
    }
    else if (from == "Nanometer (nm)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.057e-25;
    }
    else if (from == "Light year (ly)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 10346388836329233.6802270577105017626108;
    }
    else if (from == "Yard (yd)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 9.66520798530888384e-17;
    }
    else if (from == "Light year (ly)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 31039166508987701.0406811731315052878324;
    }
    else if (from == "Foot (ft)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 3.22173599510296128e-17;
    }
    else if (from == "Light year (ly)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 5108798486281.92999053926206244104;
    }
    else if (from == "Nautical mile (nmi)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.95740740740740740756e-13;
    }
    else if (from == "Light year (ly)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 372469997161778618.7322611163670889979812;
    }
    else if (from == "Inch (in)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 2.6847800027384756e-18;
    }
    else if (from == "Light year (ly)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 5878902554399.2431409649952696312264;
    }
    else if (from == "Mile (mi)" && to == "Light year (ly)") {
        convert_to_output.value = convert_from_input.value * 1.700997747022851625523e-13;
    }
    // millimeter
    else if (from == "Millimeter (mm)" && to == "kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 0.000001;
    }
    else if (from == "kilometer (km)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 1000_000;
    }
    else if (from == "Millimeter (mm)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 0.1;
    }
    else if (from == "Centimeter (cm)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 10;
    }
    else if (from == "Millimeter (mm)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 0.001;
    }
    else if (from == "Meter (m)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 1000;
    }
    else if (from == "Millimeter (mm)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 1000;
    }
    else if (from == "Micrometer (µm)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 0.001;
    }
    else if (from == "Millimeter (mm)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-20;
    }
    else if (from == "Parsec (pc)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 30856864263739790235.036735096906;
    }
    else if (from == "Millimeter (mm)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-15;
    }
    else if (from == "Astronomical unit (AU)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 149597582503066.750441312868;
    }
    else if (from == "Millimeter (mm)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.6041e-11;
    }
    else if (from == "Lunar distance (LD)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 38400983065.166468261587;
    }
    else if (from == "Millimeter (mm)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 1000_000_000;
    }
    else if (from == "Picometer (pm)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 1e-9;
    }
    else if (from == "Millimeter (mm)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 1000_000;
    }
    else if (from == "Nanometer (nm)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 0.000001;
    }
    else if (from == "Millimeter (mm)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 0.0010936133;
    }
    else if (from == "Yard (yd)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 914.399998610112;
    }
    else if (from == "Millimeter (mm)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 0.0032808399;
    }
    else if (from == "Foot (ft)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 304.799999536704;
    }
    else if (from == "Millimeter (mm)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 5.4e-7;
    }
    else if (from == "Nautical mile (nmi)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 1851851.851851851852;
    }
    else if (from == "Millimeter (mm)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 0.0393700787;
    }
    else if (from == "Inch (in)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 25.400000025908;
    }
    else if (from == "Millimeter (mm)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 6.214e-7;
    }
    else if (from == "Mile (mi)" && to == "Millimeter (mm)") {
        convert_to_output.value = convert_from_input.value * 1609269.391696169939;
    }
    // kilometer
    else if (from == "Kilometer (km)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 100_000;
    }
    else if (from == "Centimeter (cm)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 0.00001;
    }
    else if (from == "Kilometer (km)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 1000;
    }
    else if (from == "Meter (m)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 0.001;
    }
    else if (from == "Kilometer (km)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 1000_000_000;
    }
    else if (from == "Micrometer (µm)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 1e-9;
    }
    else if (from == "Kilometer (km)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-14;
    }
    else if (from == "Parsec (pc)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 30856864263739.790235036735096906;
    }
    else if (from == "Kilometer (km)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-9;
    }
    else if (from == "Astronomical unit (AU)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 149597582.503066750441312868;
    }
    else if (from == "Kilometer (km)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 0.000026041;
    }
    else if (from == "Lunar distance (LD)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 38400.983065166468261587;
    }
    else if (from == "Kilometer (km)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 1000_000_000_000_000;
    }
    else if (from == "Picometer (pm)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 1e-15;
    }
    else if (from == "Kilometer (km)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 1000_000_000_000;
    }
    else if (from == "Nanometer (nm)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 1e-12;
    }
    else if (from == "Kilometer (km)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 1093.6133;
    }
    else if (from == "Yard (yd)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 0.000914399998610112;
    }
    else if (from == "Kilometer (km)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 3280.8399;
    }
    else if (from == "Foot (ft)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 0.000304799999536704;
    }
    else if (from == "Kilometer (km)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.54;
    }
    else if (from == "Nautical mile (nmi)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 1.851851851851851852;
    }
    else if (from == "Kilometer (km)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 39370.0787;
    }
    else if (from == "Inch (in)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 0.000025400000025908;
    }
    else if (from == "Kilometer (km)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 0.6214;
    }
    else if (from == "Mile (mi)" && to == "Kilometer (km)") {
        convert_to_output.value = convert_from_input.value * 1.609269391696169939;
    }
    // centimeter
    else if (from == "Centimeter (cm)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 0.01;
    }
    else if (from == "Meter (m)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 100;
    }
    else if (from == "Centimeter (cm)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 10000;
    }
    else if (from == "Micrometer (µm)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 0.0001;
    }
    else if (from == "Centimeter (cm)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-19;
    }
    else if (from == "Parsec (pc)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 3085686426373979023.5036735096906;
    }
    else if (from == "Centimeter (cm)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-14;
    }
    else if (from == "Astronomical unit (AU)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 14959758250306.6750441312868;
    }
    else if (from == "Centimeter (cm)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.6041e-10;
    }
    else if (from == "Lunar distance (LD)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 3840098306.5166468261587;
    }
    else if (from == "Centimeter (cm)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 10_000_000_000;
    }
    else if (from == "Picometer (pm)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 1e-10;
    }
    else if (from == "Centimeter (cm)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 10_000_000;
    }
    else if (from == "Nanometer (nm)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 1e-7;
    }
    else if (from == "Centimeter (cm)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 0.010936133;
    }
    else if (from == "Yard (yd)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 91.4399998610112;
    }
    else if (from == "Centimeter (cm)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 0.032808399;
    }
    else if (from == "Foot (ft)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 30.4799999536704;
    }
    else if (from == "Centimeter (cm)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.0000054;
    }
    else if (from == "Nautical mile (nmi)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 185185.1851851851852;
    }
    else if (from == "Centimeter (cm)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 0.393700787;
    }
    else if (from == "Inch (in)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 2.5400000025908;
    }
    else if (from == "Centimeter (cm)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 0.000006214;
    }
    else if (from == "Mile (mi)" && to == "Centimeter (cm)") {
        convert_to_output.value = convert_from_input.value * 160926.9391696169939;
    }
    // meter
    else if (from == "Meter (m)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 1000_000;
    }
    else if (from == "Micrometer (µm)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 0.000001;
    }
    else if (from == "Meter (m)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-17;
    }
    else if (from == "Parsec (pc)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 30856864263739790.235036735096906;
    }
    else if (from == "Meter (m)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-12;
    }
    else if (from == "Astronomical unit (AU)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 149597582503.066750441312868;
    }
    else if (from == "Meter (m)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.6041e-8;
    }
    else if (from == "Lunar distance (LD)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 38400983.065166468261587;
    }
    else if (from == "Meter (m)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 1000_000_000_000;
    }
    else if (from == "Picometer (pm)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 1e-12;
    }
    else if (from == "Meter (m)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 1000_000_000;
    }
    else if (from == "Nanometer (nm)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 1e-9;
    }
    else if (from == "Meter (m)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 1.0936133;
    }
    else if (from == "Yard (yd)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 0.914399998610112;
    }
    else if (from == "Meter (m)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 3.2808399;
    }
    else if (from == "Foot (ft)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 0.304799999536704;
    }
    else if (from == "Meter (m)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.00054;
    }
    else if (from == "Nautical mile (nmi)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 1851.851851851851852;
    }
    else if (from == "Meter (m)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 39.3700787;
    }
    else if (from == "Inch (in)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 0.025400000025908;
    }
    else if (from == "Meter (m)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 0.0006214;
    }
    else if (from == "Mile (mi)" && to == "Meter (m)") {
        convert_to_output.value = convert_from_input.value * 1609.269391696169939;
    }
    // micrometer
    else if (from == "Micrometer (µm)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-23;
    }
    else if (from == "Parsec (pc)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 30856864263739790235036.735096906;
    }
    else if (from == "Micrometer (µm)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-18;
    }
    else if (from == "Astronomical unit (AU)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 149597582503066750.441312868;
    }
    else if (from == "Micrometer (µm)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.6041e-14;
    }
    else if (from == "Lunar distance (LD)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 38400983065166.468261587;
    }
    else if (from == "Micrometer (µm)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 1000_000;
    }
    else if (from == "Picometer (pm)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 0.000001;
    }
    else if (from == "Micrometer (µm)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 1000;
    }
    else if (from == "Nanometer (nm)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 0.001;
    }
    else if (from == "Micrometer (µm)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 0.0000010936133;
    }
    else if (from == "Yard (yd)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 914399.998610112;
    }
    else if (from == "Micrometer (µm)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 0.0000032808399;
    }
    else if (from == "Foot (ft)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 304799.999536704;
    }
    else if (from == "Micrometer (µm)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 5.4e-10;
    }
    else if (from == "Nautical mile (nmi)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 1851851851.851851852;
    }
    else if (from == "Micrometer (µm)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 0.0000393700787;
    }
    else if (from == "Inch (in)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 25400.000025908;
    }
    else if (from == "Micrometer (µm)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 6.214e-10;
    }
    else if (from == "Mile (mi)" && to == "Micrometer (µm)") {
        convert_to_output.value = convert_from_input.value * 1609269391.696169939;
    }
    // parsec
    else if (from == "Parsec (pc)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 206265.7948573950018051265594287778476;
    }
    else if (from == "Astronomical unit (AU)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 0.0000048481135744846363282769350322836;
    }
    else if (from == "Parsec (pc)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 803543602.292047877510591618658529146;
    }
    else if (from == "Lunar distance (LD)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 1.2444875388809953534810330199e-9;
    }
    else if (from == "Parsec (pc)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 30856864263739790235036735096.906;
    }
    else if (from == "Picometer (pm)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-29;
    }
    else if (from == "Parsec (pc)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 30856864263739790235036735.096906;
    }
    else if (from == "Nanometer (nm)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 3.24077e-26;
    }
    else if (from == "Parsec (pc)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 33745477155120542.3402462994905531904498;
    }
    else if (from == "Yard (yd)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 2.96336008349569266624e-17;
    }
    else if (from == "Parsec (pc)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 101236431465361627.0207388984716595713494;
    }
    else if (from == "Foot (ft)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 9.8778669449856422208e-18;
    }
    else if (from == "Parsec (pc)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 16662706702419.48672691983695232924;
    }
    else if (from == "Nautical mile (nmi)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 6.00142592592592592640604e-14;
    }
    else if (from == "Parsec (pc)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 1214837174498653097.8748877581562413465022;
    }
    else if (from == "Inch (in)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 8.231555808396186916e-19;
    }
    else if (from == "Parsec (pc)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 19174455453487.9056520518271892173884;
    }
    else if (from == "Mile (mi)" && to == "Parsec (pc)") {
        convert_to_output.value = convert_from_input.value * 5.21527196652719665321303e-14;
    }
    // astronomical unit
    else if (from == "Astronomical unit (AU)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 3895.670645962361248242228395588;
    }
    else if (from == "Lunar distance (LD)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 0.0002566952113974117737414044602;
    }
    else if (from == "Astronomical unit (AU)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 149597582503066750441312.868;
    }
    else if (from == "Picometer (pm)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-24;
    }
    else if (from == "Astronomical unit (AU)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 149597582503066750441.312868;
    }
    else if (from == "Nanometer (nm)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.6846e-21;
    }
    else if (from == "Astronomical unit (AU)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 163601905873.2010890704006219059444;
    }
    else if (from == "Yard (yd)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 6.1123982307091546752e-12;
    }
    else if (from == "Astronomical unit (AU)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 490805717619.6032672112018657178332;
    }
    else if (from == "Foot (ft)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 2.0374660769030515584e-12;
    }
    else if (from == "Astronomical unit (AU)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 80782694.55165604523830894872;
    }
    else if (from == "Nautical mile (nmi)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 1.23788888888888888898792e-8;
    }
    else if (from == "Astronomical unit (AU)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 5889668596475.4809562277473444827116;
    }
    else if (from == "Inch (in)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 1.697888401731846168e-13;
    }
    else if (from == "Astronomical unit (AU)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 92959937.7674056787242318161752;
    }
    else if (from == "Mile (mi)" && to == "Astronomical unit (AU)") {
        convert_to_output.value = convert_from_input.value * 1.07573221757322175742394e-8;
    }
    // Lunar distance
    else if (from == "Lunar distance (LD)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 38400983065166468261.587;
    }
    else if (from == "Picometer (pm)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.6041e-20;
    }
    else if (from == "Lunar distance (LD)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 38400983065166468.261587;
    }
    else if (from == "Nanometer (nm)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.6041e-17;
    }
    else if (from == "Lunar distance (LD)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 41995825.8131408164048994223071;
    }
    else if (from == "Yard (yd)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 2.3811890363805926592e-8;
    }
    else if (from == "Lunar distance (LD)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 125987477.4394224492146982669213;
    }
    else if (from == "Foot (ft)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 7.937296787935308864e-9;
    }
    else if (from == "Lunar distance (LD)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 20736.53085518989286125698;
    }
    else if (from == "Nautical mile (nmi)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 0.000048224074074074074077932;
    }
    else if (from == "Lunar distance (LD)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 1511849725.4329710840597323768969;
    }
    else if (from == "Inch (in)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 6.61441400674670228e-10;
    }
    else if (from == "Lunar distance (LD)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 23862.3708766944433777501618;
    }
    else if (from == "Mile (mi)" && to == "Lunar distance (LD)") {
        convert_to_output.value = convert_from_input.value * 0.000041906984229159961381499;
    }
    // picometer
    else if (from == "Picometer (pm)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 0.001;
    }
    else if (from == "Nanometer (nm)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 1000;
    }
    else if (from == "Picometer (pm)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 1.0936133e-12;
    }
    else if (from == "Yard (yd)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 914399998610.112;
    }
    else if (from == "Picometer (pm)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 3.2808399e-12;
    }
    else if (from == "Foot (ft)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 304799999536.704;
    }
    else if (from == "Picometer (pm)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 5.4e-16;
    }
    else if (from == "Nautical mile (nmi)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 1851851851851851.852;
    }
    else if (from == "Picometer (pm)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 3.93700787e-11;
    }
    else if (from == "Inch (in)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 25400000025.908;
    }
    else if (from == "Picometer (pm)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 6.214e-16;
    }
    else if (from == "Mile (mi)" && to == "Picometer (pm)") {
        convert_to_output.value = convert_from_input.value * 1609269391696169.939;
    }
    // nanometer
    else if (from == "Nanometer (nm)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 1.0936133e-9;
    }
    else if (from == "Yard (yd)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 914399998.610112;
    }
    else if (from == "Nanometer (nm)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 3.2808399e-9;
    }
    else if (from == "Foot (ft)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 304799999.536704;
    }
    else if (from == "Nanometer (nm)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 5.4e-13;
    }
    else if (from == "Nautical mile (nmi)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 1851851851851.851852;
    }
    else if (from == "Nanometer (nm)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 3.93700787e-8;
    }
    else if (from == "Inch (in)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 25400000.025908;
    }
    else if (from == "Nanometer (nm)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 6.214e-13;
    }
    else if (from == "Mile (mi)" && to == "Nanometer (nm)") {
        convert_to_output.value = convert_from_input.value * 1609269391696.169939;
    }
    // yard
    else if (from == "Yard (yd)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 2.9999999999999999930688;
    }
    else if (from == "Foot (ft)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 0.3333333333333333325632;
    }
    else if (from == "Yard (yd)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.0004937759992494608;
    }
    else if (from == "Nautical mile (nmi)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 2025.2098148148148149768316;
    }
    else if (from == "Yard (yd)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 35.9999999085600000558144;
    }
    else if (from == "Inch (in)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 0.0277777778483333333764;
    }
    else if (from == "Yard (yd)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 0.0005682081591363235968;
    }
    else if (from == "Mile (mi)" && to == "Yard (yd)") {
        convert_to_output.value = convert_from_input.value * 1759.91841004184100435055887;
    }
    // foot
    else if (from == "Foot (ft)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.00016459199974982016;
    }
    else if (from == "Nautical mile (nmi)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 6075.6294444444444449304948;
    }
    else if (from == "Foot (ft)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 11.9999999695200000186048;
    }
    else if (from == "Inch (in)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 0.0833333335450000001292;
    }
    else if (from == "Foot (ft)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 0.0001894027197121078656;
    }
    else if (from == "Mile (mi)" && to == "Foot (ft)") {
        convert_to_output.value = convert_from_input.value * 5279.75523012552301255230130517661;
    }
    // Nautical mile
    else if (from == "Nautical mile (nmi)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 72907.5531481481481539807524;
    }
    else if (from == "Inch (in)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.00001371600001399032;
    }
    else if (from == "Nautical mile (nmi)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 1.1507407407407407408328;
    }
    else if (from == "Mile (mi)" && to == "Nautical mile (nmi)") {
        convert_to_output.value = convert_from_input.value * 0.86900547151593176706;
    }
    // inch
    else if (from == "Inch (in)" && to == "Mile (mi)") {
        convert_to_output.value = convert_from_input.value * 0.0000157835600160992312;
    }
    else if (from == "Mile (mi)" && to == "Inch (in)") {
        convert_to_output.value = convert_from_input.value * 63357.0626005793369870041993;
    }
}