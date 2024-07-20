var n1 ="holleo";
var n2="word";

function a(){
console.log("n2+n2");
}

function b() {
    var n1 =4;
    var n2=3;
console.log(n2+n2);
}
function c() {
    var n1 =Object();
    n1="ahmed";
console.log("my name"+n1);
}
function d() {
    var n1 =Object();
    var n2=Object();
    n1=1;
    n2=2;
console.log(n2+n2);
}
function e() {
    var n1 =Object();
    var n2=Object();
    n3=n1.n2;
console.log(n2+n2);
};

console.log(e());
console.log(d());
console.log(c());
console.log(a());

function Circle (radius) { this. radius = radius;
}
this.getArea = function () {
};
return Math.PI* Math.pow(this.radius, 2);
var myCircle = new Circle(10); 
console.log(myCircle);



function Circle1 (radius) {
     this. radius = radius;
}

var myCircle = new Circle1(10); console.log(myCircle);


var array = new Array();
 array[0] = "Yaakov";
  array[1] = 2;
array[2] = function (name) 
{
     console.log("Hello" + name);
};
array[3] = {course: " HTML, CSS & JS"};
console.log(array);
console.log(array);
console.log(array[2]);
array[2];


var names2 = ["Yaakov", "John", "Joe"];
var myObj = {
 name: "Yaakov",
course: "HTML/CSS/JS",
 platform: "Courera"};

for (var prop in myObj)
    { console.log(prop +":"+myObj[prop])
}



function makeMultiplier (multiplier) {
    return (
    function (x) {
    return multiplier * x;
    }
    );
    }
    var doubleAll = makeMultiplier(2);
    console.log(doubleAll(10));


    const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
      console.log(myArr);  


      
var facebook = { name: "Facebook", ceo: {
    firstName: "Mark", favColor: "blue"
    },
    "stock of company": 110
    };
    