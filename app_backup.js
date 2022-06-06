const postEl = document.querySelector('.post')
// console.dir(postEl)
// console.log(postEl)
const postTitleEl = postEl.querySelector('.post_title')
const postBodyEl = postEl.querySelector('.post_body')


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/5', true);
xhr.onload = function() {

    // console.log(this);

    if(this.status === 200) {
        console.log(this.responseText);
        const post = JSON.parse(this.responseText)
        console.log(post);
        postTitleEl.innerHTML = `<h3>${post.title}</h3>`
        postBodyEl.innerHTML = `<p>${post.body}</p>`
    }
}


xhr.send()


