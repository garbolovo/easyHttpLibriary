const http = new easyHTTP()

const post = {
    title: 'Post Title',
    body: 'This is the post body'
}

// get posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {

    // console.log(this);
    if (err) {
        console.error(err)
    } else {
        console.log(posts);
    }
})

//get single post

http.get('https://jsonplaceholder.typicode.com/posts/5', function (err, post) {

    // console.log(this);
    if (err) {
        console.error(err)
    } else {
        console.log(post);
    }
})

//Send post
http.post('https://jsonplaceholder.typicode.com/posts', post, function (err, p) {
        if (err) {
            console.log(err)
        } else {
            console.log(p)
        }
    }
)

// Update post
http.put('https://jsonplaceholder.typicode.com/posts/33', post, function (err, p) {
        if (err) {
            console.log(err)
        } else {
            console.log(p)
        }
    }
)

//Delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, msg) {

    // console.log(this);
    if (err) {
        console.error(err)
    } else {
        console.log(msg);
    }
})







