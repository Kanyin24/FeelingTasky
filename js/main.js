
const listA = [], listB = [], listC = [];
let listOftasks = [];
const jenny = 0 ;

if (window.location.href.includes("index.html")){

  document.getElementById('add').addEventListener('click', () => {
    // creates the close button
    const toDoList = document.getElementById("tasks");

    const singleList = document.createElement("LI");
    const container = document.createElement("DIV");
    const span1 = document.createElement("SPAN");
    const span2 = document.createElement("SPAN");
    
    let newTask = document.getElementById("zero").value.trim();
    if (newTask === ' ' || newTask === '') {
      alert('Please add a task! Blank tasks aren\'t accepted.');
    } else {
      span1.innerHTML = document.getElementById("zero").value ;
      span1.classList.add("input-value");
      span2.innerHTML = "\u00D7" ;
      document.getElementById("zero").value = "";
    }
      container.appendChild(span1);
      container.appendChild(span2);
      singleList.appendChild(container);
      toDoList.appendChild(singleList);

      span2.addEventListener('click', () => {
        span2.parentElement.parentElement.style.display = 'none';
      })
  });

  document.getElementById('submit').addEventListener('click', () => {
    // gather unordered list into array
    let elements = document.getElementsByClassName("input-value");
    let j = 0;

    for (j=0; j<elements.length; j += 1) {
      listOftasks.push(elements[j].innerHTML);
    }
    window.location.href = "../views/dragBar.html?sentArray="+listOftasks;
    console.log("hello");
  });
}

if (window.location.href.includes("dragBar.html")){
  // when the page loads print all the tasks
  document.getElementById("body").onload = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get('sentArray')
    if (product == null) {return};
    listOftasks = product.split(",");

    // Grabbing and declaring elements 
    let draggedItem = null ;
    const tasklistInitial = document.getElementById("initial-list-spot");
    const taskColumns = document.querySelectorAll(".list");

    if (listOftasks[0] == "") {return} ;

    for (let i = 0 ; i < listOftasks.length ; i++){
      // Creating and setting properties
      let task = document.createElement("P");
      task.innerHTML = listOftasks[i];
      task.setAttribute("draggable", true);
      task.classList.add("mystyle");

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
        col.addEventListener('dragover', e => {
          e.preventDefault();
          if (col.id == "initial-list-spot"){
            col.style.backgroundColor = "#a2767f"
          } else {
            col.style.backgroundColor = "#5a5661"
          }
        });
        col.addEventListener('dragenter', e => {
          e.preventDefault()
          if (col.id == "initial-list-spot"){
            col.style.backgroundColor = "#a2767f"
          } else {
            col.style.backgroundColor = "#5a5661"
          }
        });
        col.addEventListener('dragleave', e => {
          e.preventDefault()
          if (col.id == "initial-list-spot"){
            col.style.backgroundColor = "#b5838d"
          } else {
            col.style.backgroundColor = "#6d6875"
          }
        });
        col.addEventListener('drop', () => { 
          col.appendChild(draggedItem);
          if (col.id == "initial-list-spot"){
            col.style.backgroundColor = "#b5838d"
          } else {
            col.style.backgroundColor = "#6d6875"
          }
        });
      })
      // Appending to first column
      tasklistInitial.appendChild(task);
    }
  };

  function sortRatedtasks(){
    console.log("we entered");
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

  document.getElementById('complete').addEventListener('click', () => {
    sortRatedtasks();
    
    const popup = document.getElementById("popup");
    popup.style.display = "flex";

    arrayWork();

    popup.scrollIntoView();
  });

  // SECTION 3
  document.getElementById('next').addEventListener('click', arrayWork);
    
  let length;
  let index;
  let task;
  let trackArray = null;

  function arrayWork()
  {

    const AChildren = document.getElementById("A").childNodes;
    const BChildren = document.getElementById("B").childNodes;
    const CChildren = document.getElementById("C").childNodes;
    for(let i = 0 ; i < AChildren.length; i++){
      if (task == AChildren[i].innerHTML){
        document.getElementById("A").removeChild(AChildren[i]);
      }
    }

    for(let i = 0 ; i < BChildren.length; i++){
      if (task == BChildren[i].innerHTML){
        document.getElementById("B").removeChild(BChildren[i]);
      }
    }

    for(let i = 0 ; i < CChildren.length; i++){
      if (task == CChildren[i].innerHTML){
        document.getElementById("C").removeChild(CChildren[i]);
      }
    }

    //call function from above that creates the lists
    const moveOn = document.getElementById("next-task");
    const currentTask = document.getElementById("current-task");
    let empty = chooseRandom(trackArray);

    moveOn.style.display = "none";
    document.getElementById("countdown").innerHTML = "0 : 0 : 0";
        
    if(empty){
      empty = chooseRandom(trackArray);
    } 
    if (empty){
      empty = chooseRandom(trackArray);
    }
    if (empty){
      currentTask.innerHTML = "All Tasks Completed" ;
      task = null ;
      return;
    }

    // Put the task on the screen
    currentTask.innerHTML = task ;
  }

  function chooseRandom(trackPrevArray){
    if (trackPrevArray == null || trackPrevArray == 'listB'){

      length = listA.length;
      if(length <= 0){
        trackArray = 'listC';
        return true;
      }

      index = Math.floor((Math.random() * (length-1)));
      console.log(index);
      task = listA[index];
      trackArray = 'listC';
      listA.splice(index, 1);
      return false;
    }

    if (trackPrevArray == 'listA'){

      length = listB.length;
      if(length <= 0){
        trackArray = 'listB';
        return true;
      }

      index = Math.floor((Math.random() * (length-1)));
      console.log(index);
      task = listB[index];
      trackArray = 'listB';
      listB.splice(index, 1);
      return false;
    }

    if (trackPrevArray == 'listC'){

      length = listC.length;
      if(length <= 0){
        trackArray = 'listA';
        return true;
      }

      index = Math.floor((Math.random() * (length-1)));
      console.log(index);
      task = listC[index];
      trackArray = 'listA';
      listC.splice(index, 1);
      return false;
    }
  }

  //TIMER
  document.getElementById('setTime').addEventListener('click', addTimeInput);


  //adding the input value to the variable for usage of Countdown Timer
  function addTimeInput(){
    //repeat until a time is given
    if (document.getElementById('time').value == 0){
      document.getElementById("countdown").innerHTML = "Please enter a number";
    }
    else
    {
        const moveOn = document.getElementById("next-task");
        moveOn.style.display = "none";
        let inputTime, countDownTime, timeLeft, now, timeRemaining;
        inputTime = document.getElementById('time').value *60 * 1000; //convert to milliseconds

        countDownTime = new Date().getTime() + inputTime;

        // Update the count down every 1 second
        timeLeft = setInterval(() => {
        // Get today's date and time
        now = new Date().getTime();
          
        // Find the distance between now and the count down date
        timeRemaining = countDownTime - now;
          
        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
          
        // Output the result in an element
        document.getElementById("countdown").innerHTML = hours + " : "
        + minutes + " : " + seconds;
          
        // If the count down is over, write 
        if (timeRemaining < 0) {
          const NOTIFICATION_TITLE = 'Time\'s Up!'
          const NOTIFICATION_BODY = 'Time to move on to the next task. :)'
          

          new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
            

          clearInterval(timeLeft);
          document.getElementById("countdown").innerHTML = "TIME'S UP";
          moveOn.style.display = "flex";
          document.getElementById('time').value = " ";
        }
        }, 900);
      }
  }
}