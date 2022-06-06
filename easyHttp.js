// easy http class
function easyHTTP() {
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    this.http.onload = function() {

        console.log(this);
    
    if(this.status === 200){
        const posts = JSON.parse(this.responseText)
       callback(null, posts)
    } else {
        callback('Error' + ' ' + this.status)
    }
       
       
       
    //    console.log(this);
    //    console.log(url);
    }


    this.http.send()
    
}