var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject() {
  var xmlHttp;
  if(window.ActiveXObject) {
    try{
      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) {
      xmlHttp = false;
    }
  } else {
    try {
      xmlHttp = new XMLHttpRequest();
    } catch(e) {
      xmlHttp = false;
    }
  }

  if(!xmlHttp) {
    alert("can't create the object!")
  } else {
    return xmlHttp;
  }
}

function submitData(){
    // var hr = new XMLHttpRequest();
    var url = "login.php";
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var contact = document.getElementById("userContact").value;
    var radios = document.getElementsByName('genderS');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var gender = radios[i].value;
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    var vars = "name="+name+"&email="+email+"&contact="+contact+"&gender="+gender;
    xmlHttp.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    xmlHttp.onreadystatechange = function() {
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var return_data = xmlHttp.responseText;
      document.getElementById("status").innerHTML = return_data;
      }
    }
    // Send the data to PHP now... and wait for response to update the status div
    xmlHttp.send(vars); // Actually execute the request
    document.getElementById("status").innerHTML = "processing...";
  }

function displayUser(){

  // userName = encodeURIComponent(document.getElementById('userInput').value);
    var name = document.getElementById("userInput").value;
    var queryString = "?name="+ name;
    xmlHttp.open("GET", "result.php"+queryString, true);
    // Set content type header information for sending url encoded variables in the request
    // xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    xmlHttp.onreadystatechange = function() {
      if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var return_data = xmlHttp.responseText;
      document.getElementById("users").innerHTML = return_data;
      }
    }
    // Send the data to PHP now... and wait for response to update the status div
    xmlHttp.send(null); // Actually execute the request
    document.getElementById("users").innerHTML += "processing...";
}