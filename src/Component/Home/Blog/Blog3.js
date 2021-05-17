import React from 'react';
import Zoom from 'react-reveal/Zoom';
import  javascriptintroduce from '../../../images/javascriptintroduce.png';
import Footer from '../Footer/Footer';

const Blog3 = () => {
    return (
         
        <div id="home" className="container header-color">
             {/* <Header/> */}
            <div className="row pt-5">
               
                <div className="col-md-5 spacing">
                    <h1> Re-Introduce javascript</h1>
                    <br/>
                    <p>JavaScript is a powerful language, it use highly profile application showing that deeper knowledge of this technology is an important skill for any web or mobile developer.
JavaScript was created 1995 by Brendan and JavaScript first release in 1996 it’s originally called live script. The standard received a significant update as ECMAScript edition 3 in 1999 and for last the 6th major edition of the standard, published in June of 2015.
Overview
Javascript has more valule and those value type below :
1. Number
2. String
3. Boolean
4. Function
5. Object
6. Symbol
And Array which a kind of object.
Number :
The number type is numbers between -(253 − 1) and 253–1) it refers to “integers”, which’s usually meant is a representation of an integer using a Number value. This isn’t real integers if you see this example you can see this :
Console.log(3/2); // 1.5, not 1
Console.log ( Math.floor(3/2)); // 1
Number has string and integer You can convert a string to an integer using the create-in parseInt() function
Such as : parseInt(‘567’, 10); // 567
Same, you can parse floating-point numbers using this parseFloat() function.
Strings
JavaScript is case-sensitive and uses the Unicode character To find the length of a string
Such as : ‘omar’.length; // 4
Variables
New variables in javascript are declared using one of 3 types of keywords such as : let , const, or var.
Operators
JavaScript’s numeric operators are here +, -, *, / , and %
Arrays
Arrays in JavaScript are originaly a special type of object.</p>
                  
                </div>
                <div className="col-md-6 headerImg">
                <Zoom> <img style={{height:'300px'}}src={javascriptintroduce} alt=""/></Zoom>
                </div>
            </div>
            <hr></hr>
            <Footer/>
        </div>
    );
};

export default Blog3;