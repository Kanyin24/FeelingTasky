function add_x () {
  // creates the close button
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i+=1) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "closetag";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

  // makes the close button cause the div to display when clicked
  var close = document.getElementsByClassName("closetag");
  var i;
  for (i = 0; i < close.length; i+=1) {
    // function prototype
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function addTaskToList () {
  let task = document.getElementById("zero").value.trim();
  
  if (task === ' ' || task === '') {
    alert('Please add a task! Blank tasks aren\'t accepted.');
  } else {
    console.log(task);
  }


}

function submitTasks () {
  // gather unordered list into array
  let array = [];
  let elements = document.getElementsByTagName("LI");
  let j = 0;

  for (j=0; j<elements.length; j += 1) {
    array.push(elements[j].innerHTML);
  }

  // store array in localStorage  
  console.log(array);


  // redirect to the next page
  window.location.href="../views/dragBar.html";
 }


// listen for click on add button and call addTaskToList
document.getElementById('add').addEventListener('click', addTaskToList);

// listen for click on next button and call submitTasks
document.getElementById('submit').addEventListener('click', submitTasks);

add_x()