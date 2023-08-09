            
            var rIndex,
            table = document.getElementById("table");
        
        // check the empty input
        function checkEmptyInput()
        {
            var isEmpty = false,
                name = document.getElementById("name").value,
                univ = document.getElementById("univ").value,
                dept = document.getElementById("dept").value;
                adm = document.getElementById("adm").value;
        
            if(name === ""){
                alert("Name Cannot Be Empty, please fill it");
                isEmpty = true;
            }
            else if(univ === ""){
                alert("University Cannot Be Empty, please fill it");
                isEmpty = true;
            }
            else if(dept === ""){
                alert("Department Cannot Be Empty, please fill it");
                isEmpty = true;
            }
            else if(adm === ""){
                alert("Admission Line Cannot Be Empty, please fill it");
                isEmpty = true;
            }
            return isEmpty;
        }
        
        // add Row
        function addHtmlTableRow()
        {
            // get the table by id
            // create a new row and cells
            // get value from input text
            // set the values into row cell's
            if(!checkEmptyInput()){
            var newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1),
                cell3 = newRow.insertCell(2),
                cell4 = newRow.insertCell(3),    
                name = document.getElementById("name").value,
                univ = document.getElementById("univ").value,
                dept = document.getElementById("dept").value;
                adm = document.getElementById("adm").value;
        
            cell1.innerHTML = name;
            cell2.innerHTML = univ;
            cell3.innerHTML = dept;
            cell4.innerHTML = adm;
            // call the function to set the event to the new row
            selectedRowToInput();
        }
        }
        
        // display selected row data into input text
        function selectedRowToInput()
        {
            
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].onclick = function()
                {
                  // get the seected row index
                  rIndex = this.rowIndex;
                  document.getElementById("name").value = this.cells[0].innerHTML;
                  document.getElementById("univ").value = this.cells[1].innerHTML;
                  document.getElementById("dept").value = this.cells[2].innerHTML;
                  document.getElementById("adm").value = this.cells[3].innerHTML;
                };
            }
        }
        selectedRowToInput();
        
        function editHtmlTbleSelectedRow()
        {
            var name = document.getElementById("name").value,
                univ = document.getElementById("univ").value,
                dept = document.getElementById("dept").value;
                adm = document.getElementById("adm").value;
           if(!checkEmptyInput()){
            table.rows[rIndex].cells[0].innerHTML = name;
            table.rows[rIndex].cells[1].innerHTML = univ;
            table.rows[rIndex].cells[2].innerHTML = dept;
            table.rows[rIndex].cells[3].innerHTML = adm;
          }
        }
        
        function removeSelectedRow()
        {
            table.deleteRow(rIndex);
            // clear input text
            document.getElementById("name").value = "";
            document.getElementById("univ").value = "";
            document.getElementById("dept").value = "";
            document.getElementById("adm").value = "";    
        }