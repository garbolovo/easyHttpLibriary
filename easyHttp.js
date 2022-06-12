// easyHTTP constructor
function easyHTTP() {
    this.http = new XMLHttpRequest();
    // console.log('This is: ' + this);

    console.dir(this)

    this.message = 'Hello World !'
}


//Get request
easyHTTP.prototype.get = function (url, callback) {

    console.dir(this)
    let self = this
    this.http.open('GET', url, true);
    this.http.onload = function () {
        console.dir(this)

        if (self.http.status === 200) {


            const posts = JSON.parse(self.http.responseText)
            callback(null, posts)
        } else {
            callback('Error' + ' ' + self.http.status)
        }
    }


    this.http.send()

}

//Post data
easyHTTP.prototype.post = function (url, data, callback) {
    console.log(url, data, callback);
}