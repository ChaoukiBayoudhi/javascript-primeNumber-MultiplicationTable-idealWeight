document.write("<table border='1px'>");

document.write("<tr style='font-size:30px;color:#f00;background-color:#000;'>");
document.write("<th>  X  </th>");
for (i = 1; i <= 10; i++) {
    document.write("<th> " + i + "</th>");
}

document.write("</tr>");

for (k = 1; k <= 10; k++) {
    var colorCode = "";
    if (k % 2 === 0) {
        colorCode = "#fe8";
    } else {
        colorCode = "#77e125";
    }

    document.write("<tr style='background-color:" + colorCode + "'>");
    document.write("<td style='font-size:30px;color:#f00;background-color:#000;'>" + k + "</td>");

    for (j = 1; j <= 10; j++) {
        document.write("<td style='font-size:23px;'>" + j + " X " + k + " = " + j * k + "</td>")
    }

    document.write("</tr>");
}

document.write("</table>");