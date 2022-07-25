function toGetUrlRepo(userName) {
    const user = fetch(`https://api.github.com/search/repositories?q=user:${userName}`)
    user.then(Response => Response.json())
        .then(data => {
            console.log(data)
            const ul = document.createElement("ul");
            ul.innerHTML = userName;
            ul.className = "user-name"
            document.body.appendChild(ul)

            const repo = data.items.forEach(name => {
                const li = document.createElement("li");
                li.innerHTML = `${name.name} : https://github.com/${name.full_name}`;
                li.className = "users-repo-url"
                ul.appendChild(li)
            });
        })
}
toGetUrlRepo("Hailegebriel22");
toGetUrlRepo("patel-prakashkumar");
toGetUrlRepo("Hanouj");