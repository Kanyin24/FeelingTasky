// creates the close button for each item in the list
const myNodelist = document.getElementsByTagName('LI');
let i = 0;
for (i = 0; i < myNodelist.length; i += 1) {
  let span = document.createElement('SPAN');
  let txt = document.createElement('P'); // this is the P tag
  span.classList.add("mystyle"); // name for reference later
  txt.innerHTML = '\u00D7';
  span.appendChild(txt);

  // add the X's to the nodes
  myNodelist[i].appendChild(span);
}

// hides the task if not needed
const close = document.getElementsByClassName('close');
let j;
for (j = 0; j < close.length; j += 1) {
  // eslint-disable-next-line func-names
  close[i].onclick = function () { // define the function soon
    const div = this.parentElement;
    div.style.display = 'none';
  };
}


function submitTasks () {
  console.log("worked"); 
}



// listen for click on add button and call addTaskToList
//document.getElementById('add').addEventListener('click', addTaskToList);

// listen for click on next button and call submitTasks
document.getElementById('submit').addEventListener('click', submitTasks);

// listen for click on x button and call removeTask
// document.getElementById('delete').addEventListener('click', removeTask);


const thisIs = [0, 1, 2];