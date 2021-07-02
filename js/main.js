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
const Work1 = ['English work', 'Finish calc homework', 'Finish French speech']
let Count = 0;
let Length1;
let Task1;

function ArrayWork(Array1, Array2, Array3)
{
    Length1 = Array1.Length - 1;
    Task1 = Array1[Math.floor(Math.random() * Length)];
    Task1 = Array1[Task1];

    //looping through array1
    /*for (let i = 0; i<Array1.Length; i++)
    {
        Count = Array1[Math.floor(Math.random() * 4];
    }  */
}

var countDownDate = new Date("July 3, 2021").getTime();

// Update the count down every 1 second
var timeLeft = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var timeRemaining = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(timeLeft);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);




// SECTION 4