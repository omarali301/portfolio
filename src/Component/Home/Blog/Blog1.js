import React from 'react';
import  javascript from '../../../images/javascript.png';
import Zoom from 'react-reveal/Zoom';
import Footer from '../Footer/Footer';

const Blog1 = () => {
    return (

        <div id="home" className="container header-color">
             {/* <Header/> */}
            <div className="row pt-5">
               
                <div className="col-md-5 spacing">
                    <h1> 10 JavaScript question and answer</h1>
                    <p>Today I will discuss about 10 JavaScript question and answer
Now let’s get’s started.
1. What is truth and falls value ?
Answer : when if else condition value is 0 it will be falsy value
And when it value is grater then 0 it will be truth value.<br/>
2. What is different undefined vs null?
Answer : Here are more get way to undefined such as :
when a variable declare but not it value it will undefined
again when you declare 2 variable but give it one value and other variable you did not give it value it will show undefined.
Now we compere with null :
Null means empty or existing so it will use just for check that before it was but now check it by null .<br/>
3. What is different double == and === ?
Answer : when we check just two value is equal then we use double == and when we check two value and ther type then we use === .<br/>
4. How to find largest element of an array ?
Answer : Firstly you write an array then create a variable and it’s give position 0 value and then run loop then make it condition such as :
{/* Var marks = [20,35,65,95,85,77,10]
Var marks = marks[0];
For (var I =0; i<marks . length; i++){
Var element = marks[i];
If(element > max){
Max = element;
}
} */}
Console.log (“largest element show”)
Now you will get a result in 95.<br/>
6. How to remove a duplicate item from an array?
Answer: Now write an array which you give more duplicate item and then make an empty array below it and then run a for loop and now index it and check it == -1 and push it empty array now you will see it just unique item.
<br/>
7. What is windows, global variable, and global scope?
Answer: window means JavaScript overall execution place all are doing here .
Global variable is which you can access any place where you want to use.
And when inside a function declare a variable and unwished to mistake to write var it will be using a global variable so it will be global scope.
<br/>
8. How to understand the “ this “ keyword?
Answer: when we execute if it left side are not something it will be window context and if it something then context.
<br/>
9. How to count a number of words in a string?
Answer : Firstly declear a variable and make a sentence inside “ ”, and then run a for loop and then check 2 condition when it full fill then you will see result. Now we show it in code
Var sentence = “I am a new web developer in react js”
{/* Var count = 0;
for (var i= 0; i<sentence.length; i++){
var character = sentence[i]:
if (character == “ “ && sentence [i-1] != “ “){
count++
}
}
Count++
Console.log(count); */}
Now you will see count word number 9<br/>
10. How to reverse a string?
Answer: if we make a sentence start last latter to first and run it to end of the sentence now it will be revers sentence now . if it understands the code is easy for you now show how to do it
{/* Function reversString(str){
Var reverse = “”;
For (var i=0; i<str.length; i++){
Var char = str[i];
Reverse = char + revrser;
}
Return reverse
} */}
Var sentence =”hello Bangladesh”
If you run this code it will be reverse sentence.</p>
                         <button className="btn btn-primary"><a href="#contact"><span className="button-color">Hire Me</span></a></button>
                </div>
                <div className="col-md-6 headerImg">
                <Zoom> <img style={{height:'400px'}}src={javascript} alt=""/></Zoom>
                </div>
            </div>
            <hr></hr>
            <Footer/>
        </div>
       
        
    );
};

export default Blog1;