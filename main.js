//var storedItem = localStorage.getItem("storedItem")
let arrayHeader = ["Name","Country","Email"];
let arrayData[] = ["Sigit Prasetya","Indonesia","sigit@gmail.com"];
    arrayData[] = ["Song Hye Kyo","South Korea","songsong@gmail.com"];
    arrayData[] = ["Andy Lau","Hongkong","andyLau@gmail.com"];
    arrayData[] = ["Enji Shaun","United State","shaun2@gmail.com"];
    arrayData[] = ["Azumi","Japan","azumiK@gmail.com"];
    
function Save()
{
	var FirstName = document.getElementById("FirstName").value;
	var LastName = document.getElementById("LastName").value;
	var PhoneNumber = document.getElementById("PhoneNumber").value;
	var People = document.getElementById("People").value;
	var TimeRequested = document.getElementById("TimeRequested").value;
	//var Item = document.getElementById("FirstName").value;

	if (People > 6 || People <= 0)
	{
		alert("Error, Too many people")
		document.getElementById("People").value = "";
		

	}
	else 
	{
		console.log(FirstName + " " + LastName + " " + PhoneNumber + " " + People + " " + TimeRequested);
		SavedFN.innerHTML = document.getElementById("FirstName").value;
		SavedLN.innerHTML = document.getElementById("LastName").value;
		SavedPN.innerHTML = document.getElementById("PhoneNumber").value;
		SavedT.innerHTML = document.getElementById("TimeRequested").value;
		SavedNOP.innerHTML = document.getElementById("People").value;
		
    	
    	




		//localStorage.getItem("storedItem, Item");
		//document.getElementById("FirstName").innerHTML = Item;
		
	}
	

	
}
function Clear()
{
	document.getElementById("FirstName").value = "";
	document.getElementById("LastName").value = "";
	document.getElementById("PhoneNumber").value = "";
	document.getElementById("People").value = "";
	document.getElementById("TimeRequested").value = "";
}
//function Get()
//{
	//localStorage.getItem = ("storedItem");
	//document.getElementById("FirstName").innerHTML = Item;
//}
var SavedFN = document.getElementById('FN');
var SavedLN = document.getElementById('LN');
var SavedPN = document.getElementById('PN');
var SavedT = document.getElementById('T');
var SavedNOP = document.getElementById('NOP');

function export_csv(arrayHeader, arrayData, delimiter, fileName) {
            let header = arrayHeader.join(delimiter) + '\n';
            let csv = header;
            arrayData.forEach( obj => {
                let row = [];
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        row.push(obj[key]);
                    }
                }
                csv += row.join(delimiter)+"\n";
            });
 
            let csvData = new Blob([csv], { type: 'text/csv' });  
            let csvUrl = URL.createObjectURL(csvData);
 
            let hiddenElement = document.createElement('a');
            hiddenElement.href = csvUrl;
            hiddenElement.target = '_blank';
            hiddenElement.download = fileName + '.csv';
            hiddenElement.click();
        }