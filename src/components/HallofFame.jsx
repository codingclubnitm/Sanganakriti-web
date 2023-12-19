import React from 'react';
import 'HallofFame.css';

const Fame = () => {
    return (

    // // Hall of fame
    // <div class="h-[600px] w-full bg-background -space-y-32">

    //     {/* Header */}
    //     <div class="w-full h-[80px] text-center text-white text-[50px] font-bold font-['Inter'] tracking-[15px]">HALL OF FAME</div>
        
        
    //     {/* creating div for the both conical gradient objects */}
    //     <div class="flex items-center place-content-center opacity-70 border-opacity-20 -space-x-10">

    //         {/* left conical gradient */}
    //         <div class="brightness-200  h-[500px] w-[500px] rounded-full bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-blue-800 via-blue-500 to-transparent to-30% rotate-90"></div>
    //         {/* right conical gradient */}
    //         <div class="brightness-200  h-[500px] w-[500px] rounded-full bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-transparent from-70% via-blue-500 to-blue-800 -rotate-90"></div>
   
    //     {/* created div for the image */}
    //     </div>
        
    //     <div class="w-full flex justify-center items-center">
    //         {/* Image to be presented */}
    //         <img src='images/pic.png' class="h-[175px] w-[150px] rounded-xl absolute"></img>
    //         <div class="h-[20px] w-full"></div>
    //     </div>
    //     <div class=" ">
    //         <div class="h-[80px] w-[150px] rounded-[50%] bg-"></div>
    //     </div>   
    // </div>
    
    <div class="all bg-background h-[95vh] w-full">
        <div class="container">
            <div>
                <h1>HALL OF FAME</h1>
                <h3>Winner of Quiz</h3>
            </div>
            <div>
                <div class="light"></div>
                <div class="tube"></div>
                <div class="content">
                    <img src='images/frame.png' class= "frame"></img>
                    {/* <img src='images/pic.png' class="pic"></img> */}
                </div>
            </div>
        
        </div>
    </div>

    );
};

export default Fame;