var i = 0
    document.writeln("<table border='2'><tr>");
    for (i = 0; i < books.Pascal.length; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>Name</b></td><td width=50>" + books.Pascal[i].Name + "</td></tr>");
        document.writeln("<tr><td><b>Price</b></td><td width=50>" + books.Pascal[i].price + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    }
    
    document.writeln("</tr></table>");