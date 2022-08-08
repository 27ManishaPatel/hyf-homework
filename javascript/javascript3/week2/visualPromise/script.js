console.log("hello")
    // DOM list elements 
const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

// function to move boxes 
function boxMove(xBox, targetBoxPos) {
    return {
        x: targetBoxPos.x - (xBox.getBoundingClientRect()).left,
        y: targetBoxPos.y - (xBox.getBoundingClientRect()).top
    }
};

// original position of boxes
const origin = { x: 0, y: 0 };

// target position to move 
const redBoxTarget = boxMove(redBox, { x: 20, y: 300 });
const blueBoxTarget = boxMove(blueBox, { x: 400, y: 300 });
const greenBoxTarget = boxMove(greenBox, { x: 400, y: 20 });

async function translateOneByOne() {
    await moveElement(redBox, redBoxTarget).then(()=>{
        console.log("moved red Box");
    });
    
    await moveElement(blueBox, blueBoxTarget).then(()=>{
        console.log("moved blue Box");
    });
  
    await moveElement(greenBox, greenBoxTarget).then(()=>{
        console.log("moved green Box");
    });
    
    //back to the original position  
    await Promise.all([moveElement(redBox, origin), 
        moveElement(blueBox, origin), 
        moveElement(greenBox, origin) ]).then(()=>{
            console.log("all Boxes moved to it's origin")
        })
   /*  await moveElement(redBox, origin);
    console.log("red Box moved to it's origin");
    await moveElement(blueBox, origin);
    console.log("blue Box moved to it's origin");
    await moveElement(greenBox, origin);
    console.log("green Box moved to it's origin"); */
    
    // calling all at once function

    translateAllAtOnce();
};
translateOneByOne();

async function translateAllAtOnce() {
    await Promise.all([moveElement(redBox, redBoxTarget),
    moveElement(blueBox, blueBoxTarget),
    moveElement(greenBox, greenBoxTarget)])
    .then(()=>{
        console.log("moved all  Boxes together")
    })
}