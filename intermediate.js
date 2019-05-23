var i = 0
    document.writeln("<table border='2'><tr>");
    for (i = 0; i < employees.length; i++) {
        document.writeln("<td>");
        document.writeln("<table border='1' width=100 >");
        document.writeln("<tr><td><b>ID</b></td><td width=50>" + employees[i].uniqueId + "</td></tr>");
        document.writeln("<tr><td><b>Name</b></td><td width=50>" + employees[i].firstName+ " " +employees[i].lastName + "</td></tr>");
        document.writeln("<tr><td><b>email</b></td><td width=50>" + employees[i].email + "</td></tr>");
        document.writeln("<tr><td><b>jobTitle</b></td><td width=50>" + employees[i].jobTitle + "</td></tr>");
        document.writeln("<tr><td><b>salary</b></td><td width=50>" + employees[i].salary + "</td></tr>");
        document.writeln("</table>");
        document.writeln("</td>");
    }
    
    document.writeln("</tr></table>");


    