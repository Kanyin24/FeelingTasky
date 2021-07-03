const listA = [], listB = [], listC = [];
// SECTION 1







// SECTION 2

const listOfTasks = ["one", "two", "three"];

  // when the page loads print all the tasks
  document.getElementById("body").onload = () => {
    // Grabbing and declaring elements 
    let draggedItem = null ;
    const taskListInitial = document.getElementById("initial-list-spot");
    const taskColumns = document.querySelectorAll(".list");

    for (let i = 0 ; i < listOfTasks.length ; i++){
      // Creating and setting properties
      let task = document.createElement("P");
      task.innerHTML = listOfTasks[i];
      task.classList.add("task-item");
      task.setAttribute("draggable", true);

      // Adding draggable event listeners
      task.addEventListener('dragstart', (e) => {
        draggedItem = task ;
        setTimeout(() => { task.style.display = "none" ; }, 0);
      })

      task.addEventListener('dragend', (e) => {
        setTimeout(() => {
           task.style.display = "block" ; 
           draggedItem = null ;
        }, 0);
      })

      // Making the columns accept dragged items

      taskColumns.forEach(col => {
        col.addEventListener('dragover', e => {e.preventDefault()});
        col.addEventListener('dragenter', e => {
          e.preventDefault()
          col.style.backgroundColor = "rgb(48, 145, 125)"
        });
        col.addEventListener('dragleave', e => {
          e.preventDefault()
          col.style.backgroundColor = "rgb(48, 145, 145)"
        });
        col.addEventListener('drop', () => { 
          col.appendChild(draggedItem);
          col.style.backgroundColor = "rgb(48, 145, 145)";
        });
      })
      // Appending to first column
      taskListInitial.appendChild(task);
    }
  };

  function sortRatedTasks(){
    const childrenA = document.getElementById("A").children,
          childrenB= document.getElementById("B").children,
          childrenC = document.getElementById("C").children;

    // Populate each array   
    for (let i = 0; i < childrenA.length; i++) {
      listA.push(childrenA[i].innerHTML);
    }

    for (let i = 0; i < childrenB.length; i++) {
      listB.push(childrenB[i].innerHTML);
    }

    for (let i = 0; i < childrenC.length; i++) {
      listC.push(childrenC[i].innerHTML);
    }
    
  }

  // this is how you will access array A B C in section 3
  function getABCarray () {
    sortRatedTasks();
    for (let i = 0; i < listA.length; i++) {
      console.log(listA[i]);
    }
  };







// SECTION 3
//variables declared
let Length1;
let Task1;
<<<<<<< Updated upstream:js/main.js
//event listener to call ArrayWork
document.getElementById('next').addEventListener('click', ArrayWork)

  
function ArrayWork(Array1, Array2, Array3)
=======
let Length2;
let Task2;
let Length3;
let Task3;
let TrackArray = null;

function ArrayWork()
>>>>>>> Stashed changes:main.js
{
  let index = null;
  //call function from above that creates the lists
    sortRatedTasks();

    //chooses task in list A at random
    if(TrackArray == null || TrackArray == 'ListC')
    {
<<<<<<< Updated upstream:js/main.js
        Count = Array1[Math.floor(Math.random() * 4];
    }  */

}


 
//TIMER

 // add event listener for timer button
 document.getElementById('setTime').addEventListener('click', addTimeInput);

 let inputTime;

 //adding the input value to the variable for usage of Countdown Timer
function addTimeInput(){

  inputTime = document.getElementById('time').value *60 * 1000; //convert to milliseconds
  
  var countDownTime = new Date().getTime() + inputTime;
 
  //TestCODE
  var isItWorking = document.createElement("P");
  isItWorking.innerHTML = inputTime.toString() + "milliseconds";
  document.body.appendChild(isItWorking); 
  //
 
  // Update the count down every 1 second
var timeLeft = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var timeRemaining = countDownTime - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
  // Output the result in an element
  document.getElementById("countdown").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write 
  if (timeRemaining < 0) {
    clearInterval(timeLeft);
    document.getElementById("countdown").innerHTML = "TIME's UP!";
  }
}, 1000);
}

=======
      Length1 = ListA.Length - 1;
      Task1 = Math.floor(Math.random() * Length1);
      Task1 = ListA[index];
      TrackArray = 'ListA';
    }
    //chooses task in list B at random
    else if(TrackArray == 'ListA')
    {
      Length2 = ListB.Length - 1;
      Task2 = Math.floor(Math.random() * Length2);
      Task2 = ListB[index];
    }
    //chooses task in list C at random
    else if(TrackArray == 'ListB')
    {
      Length3 = listC.Length - 1;
      Task3 = Math.floor(Math.random() * Length3);
      Task3 = listC[index];
    }
    
    //here put the task1 in <p> tag
    const CurrentTask = document.createElement(Task1);
>>>>>>> Stashed changes:main.js

    //delete array[index] depending on which one the task chosen is from
    delete ListA[index];
    delete ListB[index];
    delete listC[index];

}



// SECTION 4