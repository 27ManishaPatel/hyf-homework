
//building a voice assistant.
//function called getReply(command).
let personName = "";
const todoList = [];

const today = new Date();
const date = today.getDate();

const options = { year: 'numeric', month: 'long' };
const formatedDate = date + ". of " + today.toLocaleString('en-US', options);

function getReply(command) {
    if (command === "" || typeof command !== "string") {
        alert("Give some command Please!");
    }
    else if (command.includes("Hello my name is") && personName == "") {
        personName = command.split(" ").pop();
        return `Nice to meet you ${personName}`;

    } else if (command.includes("Hello my name is") && personName != "") {
        return `${personName} Hi again!`;

    } else if (command === "what is my name?") {
        return `Your name is ${personName}`;

    } if (command === "Add fishing to my todo") {
        todoList.push("fishing");
        return todoList[0] + "added to your todoList.";

    } else if (command === "Add singing in the shower to my todo") {
        todoList.push("Singing in the shower");
        return todoList[1] + "added to your todoList.";

    } else if (command === "What is on my todo?") {
        return "You have " + todoList.length + " in list to do ' " + todoList + " '";

    } else if (command === "Remove fishing from my todo") {
        const indexOfFishing = todoList.splice(todoList.indexOf("fishing"), 1);
        return "Removed " + indexOfFishing + " from your todoList."

    } else if (command === "What day is it today?") {
        return formatedDate;

    } else if (command.includes("What is")) {
        const stringOperations = command.replace("What is ", "");
        const array = stringOperations.split("");
        if (array[1] === "+") {
            return parseInt(array[0]) + parseInt(array[2]);
        } else if (array[1] === "-") {
            return array[0] - array[2];
        } else if (array[1] === "*") {
            return array[0] * array[2];
        } else if (array[1] === "/") {
            return array[0] / array[2];
        }
    } else if (command === "Set a timer for 1 minutes") {

        const startingMinutes = command.replace(/\D/g, "");
        const time = startingMinutes * 1000 * 60;
        setTimeout(function () {
            console.log('Timer done');
        }, time);
        return `The timer is set for ${startingMinutes} minutes`;
        //     setInterval(updateCountDown, 1000);
        //     function updateCountDown() {
        //         const minutes = Math.floor(time / 60);
        //         const seconds = time % 60;
        //         time--;
        //         console.log(`Timer is set ${minutes}: ${seconds}`);
        //         if (minutes == 0 && seconds == 0) {
        //             return alert("Timer Done");
        //         }
        //     }
    }
}

console.log(getReply("Hello my name is Manisha"));
console.log(getReply("Hello my name is Manisha"));
console.log(getReply("what is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 6+9"));
console.log(getReply("Set a timer for 1 minutes"));