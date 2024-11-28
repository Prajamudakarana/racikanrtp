// Mendapatkan elemen-elemen dari DOM
var x = [2454, 1552, 1883, 1937, 261, 2434, 388, 80, 1937, 744, 1491, 1312, 8, 345, 1583, 2696, 3, 894, 1817, 1295, 1807, 261, 1302, 1134, 1740, 1325, 2450, 2176, 2777, 2538, 1192, 1481, 359, 2546, 1879, 1947, 1580, 990, 535, 238, 2523, 2037, 2565, 8, 2963, 2061, 2443, 1059, 2397, 107, 1179, 151, 2146, 1238, 837, 1184, 396, 2943, 247, 1921, 2404, 947, 605, 1824, 2732, 204, 2897, 2556, 269, 2324, 308, 2797, 1980, 1180, 1070, 2778, 1609, 2677, 2995, 97, 1656, 277, 2695, 1227, 2323, 2372, 2027, 957, 1048, 1519, 2247, 599, 2007, 2884, 2154, 1686, 999, 2375, 2497, 812, 1609, 1325, 1076, 539, 844, 151, 1343, 1342, 587, 1305, 1864, 1289, 156, 163, 1900, 2570, 459, 424, 2711, 2895, 2262, 2630, 2219, 1778, 682, 1021, 2320, 1587, 2486, 571, 2726, 2228, 2326, 1927, 383, 2795, 555, 2124, 2512, 2579, 2681, 2177, 2849, 500, 1873, 1567, 891, 2852, 656, 2810, 369, 1982, 48, 587, 2114, 650, 741, 2381, 455, 125, 1819, 1344, 192, 939, 1902, 491, 1644, 1970, 1617, 1548, 2424, 1761, 963, 340, 391, 1832, 848, 1255, 251, 2978, 1468, 1530, 891, 512, 2173, 2208, 981, 1104, 1945, 1110, 1318, 2982, 989, 677, 1992, 2313, 727, 2192, 1683, 1018, 599, 2839, 2256, 2392, 1418, 1036, 337, 1703, 1719, 2268, 1125, 1475, 1662, 2007, 1035, 2327, 4, 43, 2588, 955, 1036, 2470, 78, 2613, 1515, 131, 550, 343, 2179, 1632, 2501, 1434, 1435, 1917, 1671, 2369, 1012, 783, 2640, 145, 1727, 2613, 144, 2103, 221, 715, 2505, 115, 1047, 2613, 2494, 715, 1672, 2078, 542, 2251, 2823, 2930, 2241, 484, 1081, 1993, 2970, 2794, 1126, 1206, 1358, 2283, 627, 62, 196, 2661, 408, 1036, 501, 14, 2579, 1548, 1110, 570, 565, 478, 52, 1057, 1027, 438, 159, 2743, 632, 106, 2002, 1888, 1009, 44, 1601, 683, 1273, 865, 2564, 2654, 429, 2168, 540, 371, 1435, 2783, 876, 2057, 2383, 2219, 834, 2470, 958, 166, 2101, 2348, 191, 406, 1784, 713, 1262, 1891, 1560, 1099, 683, 2745, 2083, 300, 2306, 2023, 2026, 699, 1500, 751, 1849, 1171, 1774, 1839, 508, 2775, 2497, 2095, 2532, 366, 458, 405, 1041, 2116, 234, 1189, 1914, 98, 1097, 1253, 900, 126, 1574, 1872, 2208, 2853, 491, 312, 504, 25, 2367, 113, 1938, 2502, 2995, 1460, 2893, 337, 233, 2898, 236, 1659, 2361, 2498, 2530, 354, 2446, 421, 2221, 840, 1121, 431, 1029, 1600, 2372, 88, 1479, 1863, 2922, 404, 2549, 704, 1309, 1144, 800, 2651, 2264, 334, 1017, 910, 1655, 2235, 2620, 755, 2331, 182, 1478, 676, 2330, 1548, 1248, 37, 686, 2402, 1444, 922, 2213, 2642, 2504, 697, 297, 2635, 1969, 200, 56, 386, 1298, 2146, 2047, 2957, 2957, 2054, 1971, 529, 225, 1913, 1560, 2465, 2357, 2933, 2070, 1139, 180, 721, 1440, 2110, 1737, 579, 447, 1207, 1532, 2195, 374, 1148, 2134, 978, 783, 2968, 2705, 1899, 2711, 24, 748, 1489, 2141, 2861, 542, 2162, 1912, 1555, 1896, 1362, 1066, 649, 2376, 2843, 863, 539, 451, 2059, 2643, 2269, 2755, 350, 283, 520, 2361, 589, 2882, 1137, 701, 2063, 1615, 736, 1748, 2168, 109, 1199, 1697, 2848, 2012, 1700, 1311, 1437, 1238, 888, 2069, 2827, 804, 105, 2459, 1474, 49, 1972, 1468, 857, 2215, 2135, 2069, 1586, 2961, 1263, 2837, 870, 2561, 29, 2573, 1434, 963, 2326, 1922, 858, 1850, 2115, 1913, 485, 2882, 1550, 1666, 1177, 2405, 495, 1888, 169, 1897, 2278, 1376, 564, 1194, 2809, 2160, 912, 1076, 2368, 842, 862, 108, 2111, 1328, 2560, 312, 2916, 1394, 160, 251, 2522, 734, 835, 46, 1685, 448, 2710, 1948, 1670, 355, 2879, 2404, 569, 2126, 1559, 76, 2398, 1562, 975, 267, 757, 851, 129, 2416, 622, 2445, 2280, 210, 1527, 161, 267, 640, 375, 1600, 2437, 1762, 2691, 2871, 1553, 1239, 2022, 2571, 2268, 2696, 2814, 935, 1243, 2853, 1957, 228, 1575, 1255, 2462, 337, 1302, 1013, 1241, 2611, 724, 163, 2072, 446, 2234, 2503, 2867, 356, 1478, 2742, 1856, 1262, 2610, 2992, 2983, 433, 2233, 423, 2101, 2730, 1095, 1277, 2816, 1902, 2209, 1510, 2027, 1251, 2326, 1491, 1153, 2771, 716, 121, 1815, 1346, 2429, 1162, 2693, 109, 763, 1146, 1590, 2357, 2634, 677, 953, 933, 1525, 375, 2406, 312, 1140, 236, 1037, 2351, 2300, 2185, 1187, 2650, 2223, 2506, 1742, 1892, 2006, 22, 140, 1364, 1533, 2304, 2287, 1985, 2334, 1119, 651, 533, 616, 672, 1835, 318, 1360, 866, 1289, 889, 2945, 450, 2421, 2064, 969, 1881, 1264, 461, 2028, 1083, 1896, 2735, 1276, 2784, 1086, 1413, 1769, 1680, 1815, 1440, 2622, 787, 2921, 1342, 1932, 2880, 270, 2092, 2419, 1119, 965, 2308, 390, 1703, 1271, 1856, 726, 1716, 2696, 1325, 386, 2076, 775, 83, 1134, 241, 2279, 2044, 673, 2876, 2182, 1883, 755, 2424, 2166, 1208, 2431, 2340, 635, 1553, 5, 109, 468, 1594, 899, 2380, 1861, 568, 317, 955, 2044, 2986, 1419, 174, 1738, 1977, 882, 2440, 925, 450, 325, 2307, 1332, 1282, 1790, 1588, 739, 1729, 1343, 2158, 1807, 1482, 1118, 494, 252, 2106, 977, 2463, 2733, 1295, 2110, 1847, 1219, 2595, 398, 898, 2419, 2249, 2754, 1181, 1193, 2231, 1118, 757, 1641, 1860, 1710, 985, 2879, 1844, 143, 1269, 405, 1994, 455, 1913, 126, 2917, 1671, 1002, 400, 2390, 1703, 623, 559, 2481, 1067, 2598, 1184, 1986, 605, 944, 1763, 626, 1987, 1306, 2757, 634, 2659, 70, 2948, 1967, 1148, 673, 2548, 1686, 1871, 1454, 2713, 202, 2573, 1875, 646, 2997, 1090, 2962, 446, 2307, 2019, 2460, 370, 301, 2060, 425, 2274, 52, 2717, 2634, 2063, 1643, 14, 1514, 424, 2618, 2224, 2274, 91, 185, 2686, 2421, 63, 1082, 1588, 1332, 1455, 51, 2190, 2994, 154, 450, 389, 2034, 2353, 97, 598, 1536, 2648, 2028, 2331, 1789, 448, 1184, 1541, 2671, 604, 959, 10, 1504, 859, 1137, 844, 2334, 1342, 549, 1163, 915, 1315, 744, 388, 1294, 841, 1157, 857, 1938, 1940, 2535, 931, 637, 763, 1019, 701, 1115, 2768, 2344, 2939, 1108, 744, 2091, 994, 1627, 948, 2750, 2522, 2161, 535, 2234, 1826, 770, 1753, 1525, 459, 958, 20, 2317, 184, 1850, 2749, 798, 2163, 304, 780, 360, 2011, 1788, 2151, 700, 2829, 377, 1380, 2688, 1441, 1044, 422, 2186, 2287, 318, 2282, 410, 2650, 2408, 2499, 2402, 643, 226, 554, 994, 2672, 2820, 826, 863, 2863, 329, 2283, 28, 454, 585, 1925, 1156, 2533, 1710, 1471, 670, 1694, 681, 2385, 2698, 403, 741, 1111, 60, 1481, 637, 1247, 2103, 2572, 90, 965, 355, 2404, 1727, 1260, 961, 1990, 720, 1208, 2406, 301, 1648, 2457, 1335, 298, 91, 2331, 525, 1106, 2603, 2372, 33, 2831, 2743, 598, 969, 18, 1096, 1965, 2450, 1111, 1990, 2123, 2513, 305, 515, 1339, 349, 1200, 1702, 1610, 55, 904, 2419, 2084, 2190, 301, 184, 2086];

var text = document.getElementsByClassName("percent-txt"); // elemen dengan kelas percent-txt, yang digunakan untuk menampilkan persentase.
var barr = document.getElementsByClassName("percent-bar"); // elemen dengan kelas percent-bar, yang digunakan untuk menampilkan bar kemajuan.
var jam = document.getElementsByClassName("jamgacorRange"); // elemen dengan kelas jamgacorRange, yang digunakan untuk menampilkan jam gacor.
var pola1 = [
    document.getElementsByClassName("pola1"), // elemen dengan kelas pola1, pola2, dan pola3 untuk menampilkan pola.
    document.getElementsByClassName("pola2"), // elemen dengan kelas pola untuk mengatur warna latar belakang pola.
    document.getElementsByClassName("pola3") // elemen dengan kelas jamgacor yang digunakan untuk mengatur warna latar belakang jam.
];
var pola = document.getElementsByClassName("pola");
var jambg = document.getElementsByClassName("jamgacor");

var random = ["✔️✖️✖️", "✖️✔️✖️", "✖️✖️✔️", "✔️✖️✔️", "✖️✔️✔️", "✖️✖️✖️"]; // Array yang berisi string simbol yang akan digunakan dalam pola.
var random2 = [10, 20, 50, 70, 100]; // Array yang berisi angka yang digunakan dalam pola.
var random3 = ["Auto", "Auto", "Manual 3", "Manual 5", "Manual 7", "Manual 9", "Auto"]; // Array yang berisi jenis pola (Auto atau Manual).

var game = window.location.pathname;
if (game === "/pragmatic" || game === "/pragmatic.html") {
    game = "";
}

var xxx = 0;
for (let i = 0; i < game.length; i++) {
    xxx += game.charCodeAt(i);
}
// menghitung nilai xxx berdasarkan karakter dalam string game. Ini digunakan untuk menghasilkan variasi yang berbeda dalam pola.

function getRandomPercentage() {
    return Math.floor(Math.random() * 101); // Menghasilkan angka acak antara 0 dan 100
}

function initializeValues() {
    for (let i = 0; i < text.length; i++) {
        var percentTxt = text[i];
        var bar = barr[i];
        var randomValue = getRandomPercentage(); // Ambil nilai acak
        percentTxt.innerHTML = randomValue + "%"; // Tampilkan nilai acak
        bar.setAttribute("aria-valuenow", randomValue);
        bar.style.width = randomValue + "%";
        bar.className = "percent-bar"; // Reset class names

        // Set warna berdasarkan nilai acak
        updateBarColor(bar, randomValue);

        // Set default jam dan pola
        updateJamAndPola(i, randomValue);
    }
}

function updateBarColor(bar, value) {
    bar.classList.remove("red", "yellow", "green"); // Reset kelas warna
    if (value < 30) {
        bar.classList.add("red");
    } else if (value >= 30 && value <= 70) {
        bar.classList.add("yellow");
    } else {    
        bar.classList.add("green");
    }
}

function updateJamAndPola(index, value) {
    if (value >= 30) {
        var hour2 = (new Date().getUTCHours() + 7) % 24;
        var min1 = value % 60;
        var randomTarget = (hour2 + 1) % 24; // Target jam
        var jamDisplay = (hour2 < 10 ? "0" : "") + hour2 + ":" + (min1 < 10 ? "0" : "") + min1 + " - " + (randomTarget < 10 ? "0" : "") + randomTarget + ":" + (min1 < 10 ? "0" : "") + min1;

        jam[index].innerText = jamDisplay;

        // Update pola
        for (let j = 0; j < 3; j++) {
            var idx = (xxx + value + index + j) % random2.length; // Menggunakan index yang berbeda
            if (random3[idx] === "Auto") {
                pola1[j][index].innerText = random2[idx] + " " + random[idx] + " " + random3[idx];
            } else {
                pola1[j][index].innerText = random3[idx] + " " + random[idx];
            }
        }

        // Set warna pola
        pola[index].style.backgroundColor = (value > 70) ? "#28a745" : "#ffc107";
        jambg[index].style.backgroundColor = (value > 70) ? "#28a745" : "#ffc107";
    } else {
        jam[index].innerText = "-"; // Tidak ada jam jika di bawah 30%
        pola[index].style.backgroundColor = "#dc3545"; // Warna default
        jambg[index].style.backgroundColor = "#dc3545"; // Warna default
        for (let j = 0; j < 3; j++) {
            pola1[j][index].innerText = "JANGAN MAIN!!!"; // Tampilkan pesan jika di bawah 30%
        }
    }
}

function updateValues(xx) {
    for (let i = 0; i < text.length; i++) {
        var percentTxt = text[i];
        var bar = barr[i];
        percentTxt.innerHTML = xx + "%";
        bar.setAttribute("aria-valuenow", xx);
        bar.style.width = xx + "%";
        bar.className = "percent-bar"; // Reset class names

        updateBarColor(bar, xx); // Update warna bar

        // Update jam dan pola berdasarkan nilai
        updateJamAndPola(i, xx);
    }
}

document.getElementById("activateBtn").addEventListener("click", function() {
    updateValues(98); // untuk memanggil fungsi updateValues dengan nilai 98 ketika tombol ditekan
});

// ini untuk mengembalikan fungsi tampilan awal setelah di refresh
initializeValues();