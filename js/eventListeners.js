const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// capture phase
grandparent.addEventListener(
  "click",
  (e) => {
    console.log("Grandparent Capture");
  },
  { capture: true }
);

grandparent.addEventListener("click", (e) => {
  console.log("Grandparent Bubble");
});


parent.addEventListener(
  "click",
  (e) => {
    e.stopPropagation(); //stopping propagation
    console.log("Parent Capture");
  },
  { capture: true }
);

parent.addEventListener("click", (e) => {
  console.log("Parent Bubble");
});


child.addEventListener(
  "click",
  (e) => {
    console.log("Child Capture");
  },
  { capture: true }
);

child.addEventListener("click", (e) => {
  console.log("Child Bubble");
});


document.addEventListener(
  "document",
  (e) => {
    console.log("Document Capture");
  },
  { click: true }
);

document.addEventListener("document", (e) => {
  console.log("Document Bubble");
});


// if you only want to run an event once and never again, pass property once: True

/*Example:

child.addEventListener(
  "click",
  (e) => {
    console.log("Child Capture");
  },
  { once: true }
);
*/

// removeEventListener removes the event listener, keep in mind that you can only remove a function or variable
// instead of arrow functions