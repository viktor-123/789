(()=>{
    const title = document.createElement('h1')
    title.textContent = "Список статей"
    document.body.append(title)
    async function getArticles(){
        fetch('https://gorest.co.in/public/v1/posts')
        .then(r => {
            let arr = r.json()
        return arr
        })
        .then(r => {
            document.body.insertAdjacentHTML('beforeend', `
              <ul>${r.data.map(n => `
               <li>
                <a href="article.html">${n.title}</a>
                </li>`).join('')}
              </ul>
            `);
        });

    }
    getArticles()
    let notesOnPage =3;
    
    const pages = document.createElement('li')
    document.body.append(pages)
    for(let page of pages){
        page.addEventListener('click', function(){
            let pageNum = +this.innerHTML;

            let start =(pageNum - 1) * notesOnPage
            let end = start + notesOnPage

            let notes = arr.slice(start, end)
            console.log(notes)
        })
    }
})()