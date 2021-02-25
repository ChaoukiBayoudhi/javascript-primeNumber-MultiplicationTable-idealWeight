document.write("<center><table border='1px'>");
n = 20;
for (var a = 1; a <= n; a++) {
    document.write("<tr style='height:40px'>");
    for (var b = 1; b <= n; b++) {
        document.write("<td style='width:40px'><center><font size='4'>" + a * b + "</center></font></td>");
    }
    document.write("</tr>");
}
document.write("</table></center>");