// easyHTTP constructor
function easyHTTP() {
    this.http = new XMLHttpRequest();
}


//Get Data
easyHTTP.prototype.get = function (url, callback) {

    let self = this
    this.http.open('GET', url, true);
    this.http.onload = function () {

        if (self.http.status === 200) {


            const posts = JSON.parse(self.http.responseText)
            callback(null, posts)
        } else {
            callback('Error' + ' ' + self.http.status)
        }
    }

    this.http.send()
}

//Send data
easyHTTP.prototype.post = function (url, data, callback) {


    // console.log(url, data, callback);
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    this.http.onload = function () {
        // console.log(data)
        if (this.status === 201) {
            const ppp = JSON.parse(this.responseText)
            callback(null, ppp)
        } else {
            callback('Error ' + '' + this.status)
        }
    }

    this.http.send(JSON.stringify(data))

}


//Update data
easyHTTP.prototype.put = function (url, data, callback) {

    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    this.http.onload = function () {
        if (this.status === 200) {
            const ppp = JSON.parse(this.responseText)
            callback(null, ppp)
        } else {
            callback('Error ' + '' + this.status)
        }
    }

    this.http.send(JSON.stringify(data))

}

//Delete data

easyHTTP.prototype.delete = function (url, callback) {
    let self = this
    this.http.open('DELETE', url, true);
    this.http.onload = function () {

        if (self.http.status === 200) {



            callback(null, 'Post Deleted')
        } else {
            callback('Error, post has not been deleted' + ' ' + self.http.status)
        }
    }

    this.http.send()
}