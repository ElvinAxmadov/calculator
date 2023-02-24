// $(document).ready(function () {
//     const name = document.getElementById("random-text").innerHTML
//     const name1 = document.getElementById("bookName").value
//     console.log(name, "name")
//     // console.log(name1)

//     const imageId = document.getElementById('myImage')

//     document.getElementById("bookName").style.color = "red";

//     const getUserById = (Id) => {
//         url = `api/contracts/:${Id}`
//     }


//     const newActor = {
//         name: "Zahra",
//         surname: "Sharifova",
//         gender: "female",
//         car: [1, 5, 6]
//     }

//     // console.log(typeof (newActor))


//     // const input = document.getElementById("bookName");

//     // input.addEventListener("input", function (e) {
//     //     console.log(e.target.value);
//     // });

//     const getBookName = (e) => {
//         console.log(e.target.value);
//     };

//     const getSum = (a, b) => {
//         document.getElementById("bookName").value = a + b
//     }

//     getSum(5, 7)

//     // console.log(fruit)

//     const input = document.getElementById("bookName");
//     input.addEventListener("input", getBookName);


//     const changeLight = () => {
//         // document.getElementById('image').src='https://www.w3schools.com/js/pic_bulboff.gif'"
//         var image = document.getElementById('image');
//         // window.alert("hi mother hacker")
//         // image.src.toggle("https://www.w3schools.com/js/pic_bulbon.gif");
//         const a1 = 24
//         const a2 = "24"

//         if (a1 === a2) {
//             console.log("value and type are the same")
//         } else {
//             console.log("value is the same")
//         }

//         if (image.src === "https://www.w3schools.com/js/pic_bulboff.gif") {
//             image.src = 'https://www.w3schools.com/js/pic_bulbon.gif'
//         } else {
//             image.src = 'https://www.w3schools.com/js/pic_bulboff.gif'
//         }

//     }

//     let fruit = ["apple", "banana", "tomato"];

//     const newFruit = "graphes";

//     fruit.push(newFruit);

//     const paramMoreThanOne = (name, surname) => {
//         document.getElementById("random-text").innerHTML = `${name} ${surname} `
//     }
//     paramMoreThanOne("Zahra", "")


//     const turnOn = document.getElementById("turnOn");
//     turnOn.addEventListener("click", changeLight);

// })


(function () {
    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
            console.log("screen value is===== " + e.target.dataset.num)
            // console.log("screen value type is " + typeof screen.value)
        })
    });

    equal.addEventListener('click', function (e) {
        console.log("screen value is " + screen.value)
        if (screen.value === '') {
            screen.value = 'Please enter values';
        } else {
            console.log("else part start")
            let str = screen.value
            console.log(str,"star--------------")
            let res1 = eval(str)
            console.log('res1-------------:', res1)
            let answer = eval(screen.value);
            console.log(answer)
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function (e) {
        screen.value = '';
    })

})();