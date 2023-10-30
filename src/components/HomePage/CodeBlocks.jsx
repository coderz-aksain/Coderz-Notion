import React from 'react';
import { CTAButton } from './CTAButton';
import HighlightText from './HighlightText';
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-reveal'
const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {
    return (
        <div className={`flex ${position} my-20 justify-between gap-10`}>
            <Fade left distance='20%' duration={1500}>
            {/*Section 1*/}
            <div className=' p-7 rounded-2xl w-[50%] bg-none flex flex-col gap-8 shadow-[1px_1px_30px_7px] shadow-richblue-400 '>
                {heading}
                <div className='text-richblack-300 font-bold'>
                    {subheading}
                </div>

                <div className='flex gap-7 mt-7 mx-2 shadow-caribbeangreen-50 '>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className='flex gap-2 items-center'>
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>
            </Fade>
            {/*Section 2*/}
            <Fade right distance='20%' duration={1500}>
            <div className='h-fit flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px] shadow-[1px_1px_50px_2px] shadow-pink-600'>
                {/*HW -> BG gradient*/}
                <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold  '>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>

                <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
                    <TypeAnimation
                        sequence={[codeblock, 2000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        style={{
                            whiteSpace: "pre-line",
                            display: "block",
                        }}
                        omitDeletionAnimation={true}
                    />
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default CodeBlocks;
