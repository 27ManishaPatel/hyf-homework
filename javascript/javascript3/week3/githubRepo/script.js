function toGetUrlRepo(userName) {
  const user = fetch(
    `https://api.github.com/search/repositories?q=user:${userName}`,
  )
  user
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data)
      const ul = document.createElement('ul')
      ul.innerHTML = `${userName} 's Repositories`
      ul.className = 'user-name'
      document.body.appendChild(ul)

      const repo = data.items.forEach((name) => {
        const li = document.createElement('li')
       li.innerHTML = `${name.name} : ${name.git_url}`
        li.className = 'users-repo-url'
        ul.appendChild(li);
      })
    })
}
async function toGetRepo() {
  await Promise.all([
    toGetUrlRepo('Hailegebriel22'),
    toGetUrlRepo('patel-prakashkumar'),
    toGetUrlRepo('Hanouj'),
  ])
}

toGetRepo() 
