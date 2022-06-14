const http = new easyHTTP()

const post = {
    title: 'Post Title',
    body: 'This is the post body'
}

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//
//     // console.log(this);
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(posts);
//     }
// })

//get single post

// http.get('https://jsonplaceholder.typicode.com/posts/5', function (err, post) {
//
//     // console.log(this);
//     if (err) {
//         console.error(err)
//     } else {
//         console.log(post);
//     }
// })

// http.post('https://jsonplaceholder.typicode.com/posts', post, function (err, p) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(p)
//         }
//     }
// )

http.put('https://jsonplaceholder.typicode.com/posts/33', post, function (err, p) {
        if (err) {
            console.log(err)
        } else {
            console.log(p)
        }
    }
)









// console.log(http);


//function
// function getThis() {
//
//     this.color = 'green'
//     let team = 'ManUnited'
//     console.log('1 - getThis THIS is : ' + this, this.color);
//     console.log('2 - getThis THIS Color is : ' + this.color);
//     console.log('4 - TEAM: ' + this.team);
//
//     console.dir(this)
//     console.log(team);
//
//
//
// }








// first invocation
// console.log('first invocation')
// let val = new getThis()
// console.log('=====================');
//
// console.log('val: ', val);
//
//
// console.log('=====================');

// second invocation
// console.log('second invocation')
//
// getThis();
//
// getThis();
//
// console.log(color)
// console.log(team)
//object
const car = {
    'wheel': 4,
    'doors': 5,
    toHorn: function () {
        console.log('BEEEEP !', this);

    },
    toTurnOn: () => {
        console.log('GO !', this);
        this.getThis()
    },
    toTurnOff: () => {
        console.log('Stop !', this);
        let toExitTheCar = function () {
            console.log('Dont gorget to close the car');
            console.log(this);

        }

        toExitTheCar()
    }
}

// car.toHorn()
// car.toTurnOn()


// car.toTurnOff()

// console.log(car);
