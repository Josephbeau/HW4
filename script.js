/*
File: index.html
GUI Assignment: Creating a multiplication website where the user can input the start and end of a row
and column for a multiplication table to be created dynamically for them on command.
Joseph Beausoleil, UMass Lowell Computer Science, Joseph_Beausoleli@uml.student.edu
What to submit: My HTML, CSS, and JS files along with github link
Copyright (c) 2021 by Jospeh. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JB on June 3, 2024
*/

$(document).ready(function() { 
    $("#parent").tabs({ 
            active: false, 
            collapsible: true 
        }) 
}) 

function myClick() {
    //resets all edited feilds
    document.getElementById("table").innerHTML = "";
    document.getElementById("errorMessage").innerHTML = "";
    document.getElementById("test").innerHTML = "Selectied Numbers: ";

    //collects data from form
    let SC = document.getElementById("SC").value;
    let EC = document.getElementById("EC").value;
    let SR = document.getElementById("SR").value;
    let ER = document.getElementById("ER").value;

    //grabs the table
    let table = document.getElementById("table");


    //validates input
    let error = document.getElementById("errorMessage");
    if(isNaN(SC) || SC < -50 || SC > 50 || SC > EC || SC == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";
        document.getElementById("fill").reset();
        return false;
    }

    if(isNaN(EC) || EC < -50 || EC > 50 || SC > EC  || EC == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";       
        document.getElementById("fill").reset();
        return false;
    }

    if(isNaN(SR) || SR < -50 || SR > 50 || SR > ER  || SR == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";      
        document.getElementById("fill").reset();
        return false;
    }

    if(isNaN(ER) || ER < -50 || ER > 50 || SR > ER || ER == null){
        error.innerHTML = "Please enter a range of integers from -50 to 50. Please also make sure that the starting number is less than the ending number";
        document.getElementById("fill").reset();
        return false;
    }

    //displays input
    document.getElementById("test").innerHTML = "Selectied Numbers: " + SC + " to " + EC + ", " + SR + " to " + ER;    
    createTable(table, SC, EC, SR, ER);
    saveTable(SC, EC, SR, ER);
}

function createTable(table, SC, EC, SR, ER){
        //creates the first row
        let trFirst = document.createElement('tr');
        let tdBlank = document.createElement('td');
        let blank = document.createTextNode("");
        tdBlank.append(blank);
        trFirst.append(tdBlank);
    
        for(let i = SC; i <= EC; i++){
            let td = document.createElement('td');
            let num = document.createTextNode(i);
    
            td.append(num);
            trFirst.append(td);
            table.append(trFirst);
        }
    
        //creates the rest of teh multiplication table. THe first loop does the rows and the secodn loop does the columns
        for(let i = SR; i <= ER; i++){
            let tr = document.createElement('tr');
    
            let tdFirst = document.createElement('td');
            let numFirst = document.createTextNode(i);
    
            tdFirst.append(numFirst);
            tr.append(tdFirst);
            for(let j = SC; j <= EC; j++){
                let td = document.createElement('td');
                let num = document.createTextNode(j * i);
        
                td.append(num);
                tr.append(td);
                table.append(tr);
            }
        }
}

/*
this is the function I used to save each table. I got it to do that but nothing else. I juse
Couldnt figure out how to wokr with the tabs library. So all I am able to do is save the tables
All of them display and there is no way to isolate them. There is also no way to delete the tables
aside from refreshing the page.

*/
function saveTable(SC, EC, SR, ER){
//creates the needed variables
    let li = document.createElement('li');
    let a = document.createElement('a');
    let table = document.createElement('table');
    let div = document.createElement('div');
    let Txt = document.createTextNode(SC + ", " + EC + ', ' + SR + ', ' + ER);

    //creates the link for the table
    a.href = '#' + SC + EC + SR + ER;
    a.append(Txt);
    li.append(a);
    $("ul").append(li);

    //recreates the table and apeds it to the div with the ID corresponding to the link. Everything is done
    //using the combination of numbers inputed
    createTable(table, SC, EC, SR, ER);
    table.id = "table";
    div.classList.add("dynam");
    div.id = SC + EC + SR + ER;
    div.append(table);
    $("#parent").append(div);

    return 0;
}


