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







// SECTION 4