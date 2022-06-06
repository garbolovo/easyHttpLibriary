const http = new easyHTTP()

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {

    // console.log(this);
    if(err) {
        console.error(err)
    } else {
        console.log(posts);
    }
})