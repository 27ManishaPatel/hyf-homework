fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => {
        console.log(data.answer)

    });

setTimeout(function() {
    console.log("hello")
}, 5000)


function wait(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, delay * 1000)
    })
}
wait(2).then(() => {
    console.log("finished")
})

// // Create a promise that resolves after 4 seconds. 
// // Use this promise to log out the text 'hello' after 4 seconds.
// // Now make the promise fail by rejecting it with an error message instead of 
// // resolving it, and log the error message to the console.
function creatPromise(time) {
    return new Promise((resolve, reject) => {
        if (time > 5) {
            reject();
        }
        setTimeout(() => {
            resolve()
        }, time * 1000)
    })
}
creatPromise(6)
    .then(() => {
        console.log("Hello")
    })
    .catch(() => {
        console.log("error")
    });



fetch("http://api.open-notify.org/astros.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.people)
        setTimeout(() => {
            fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
        }, 4000)

    });

async function getPostComment() {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await post.json()
    const comment = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comments = await comment.json()
    posts.forEach(post => {
        const heading = document.createElement("h3")
        heading.innerHTML = post.title;
        document.body.appendChild(heading);
        const para = document.createElement("p")
        para.innerHTML = post.body;
        document.body.appendChild(para);
        const myUl = document.createElement("ul");
        document.body.appendChild(myUl);

        const postComments = comments.filter(comment => comment.postId === post.id);
        postComments.forEach(pcomment => {
            const myLi = document.createElement("li");
            myLi.innerHTML = pcomment.body;
            myUl.appendChild(myLi);
        })
    })
};
getPostComment();