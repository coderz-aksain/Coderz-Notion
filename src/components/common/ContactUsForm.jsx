import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CTAButton } from '../HomePage/CTAButton';
import CountryCode from '../../data/countrycode.json'
import { ContactUs } from '../../services/operations/authAPI';
import { useDispatch } from 'react-redux';

export const ContactUsForm = () => {
    const [loading,setLoading]=useState(false);
    const dispatch=useDispatch();


    const {register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSuccessful }
    } = useForm();

    // const submitContactForm=async(data)=>{
    //     console.log("Logging Data",data)
    //     try{
    //         setLoading(true);
    //         // const response=a
    //         const response={status:"OK"};
    //         console.log("Logging response",response);
    //         setLoading(false);

    //     }catch(error){
    //         console.log("Error: ",error.message);
    //         setLoading(false);

    //     }

    // }


    const submitContactForm = async (data) => {
        console.log("Logging Data", data);
      
 
          dispatch(ContactUs(data));
      
      
      };


    
    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                firstName:"",
                lastName:"",
                email:"",
                countryCode:"",
                phoneNumber:"",
                message:"",
            })
        }
    },[isSubmitSuccessful,reset])
  return (
    <div >
        <form onSubmit={handleSubmit(submitContactForm)}>
            <div className='flex flex-col  gap-6'>
                <div className=' flex gap-5'>
                    {   /* firstName */}
                    <div className='flex flex-col'>
                    <label className='text-white mb-2 text-[0.875rem] leading-[1.375rem]' htmlFor="firstName">First Name <sup className="text-pink-200">*</sup></label>
                
                    <input type="text"
                     name="firstName"
                     className='text-richblack-800 h-10 rounded-md'
                     id="firstName"
                     placeholder='Enter Your First Name'
                     {...register("firstName", { required: true, maxLength: 20 })} />
                     {
                        errors.firstName && (
                            <span>
                                Please enter valid first name
                            </span>
                        )
                     }
                    </div>
                    {/* lastName */}
                    <div className='flex flex-col'>
                    <label className='text-white mb-2 text-[0.875rem] leading-[1.375rem]' htmlFor="lastName">Last Name <sup className="text-pink-200">*</sup></label>
                
                    <input type="text"
                     name="lastName"
                     className='text-richblack-800 h-10 rounded-md'
                     id="lastName"
                     placeholder='Enter Your Last Name'
                     {...register("lastName", { required: true, maxLength: 15 })} />
                     {
                        errors.lastName && (
                            <span>
                                Please enter Your Last Name
                            </span>
                        )
                     }
                    </div>

                </div>
                {/* email */}
                <div className='flex flex-col'>
                <label className='text-white mb-2 text-[0.875rem] leading-[1.375rem]' htmlFor="email">Email <sup className="text-pink-200">*</sup></label>
                
                <input
                type="email"
                name="email"
                id="email"
                className='text-richblack-800 h-10 rounded-md'
                placeholder='Enter Your Email'
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                />
                {errors.email && (
                <span>
                Please enter a valid email address.
                </span>
                )}
                </div>



                {/* phone number */}
                <div className='flex flex-col gap-2'>
                <label className='text-white mb-2 text-[0.875rem] leading-[1.375rem]' htmlFor="phoneNumber">Phone Number <sup className="text-pink-200">*</sup></label>
                
                    <div className='flex flex-row  gap-5'>
                        {/* dropdown */}
                       
                            <select
                            name='countryCode'
                            id='countryCode'
                            
                            className='text-richblack-800 w-[100px] h-10 rounded-md'
                            {...register("countryCode",{required:true})}
                            >
                            {
                                CountryCode.map((element,index)=>{
                                    return(
                                        
                                        <option  key={index} value={element.code}>
                                            {element.code}-{element.country}
                                        </option>
                                    
                                    )
                                })

                            }

                            </select>

                            <input type="number"
                            id='phoneNumber'
                            className='text-richblack-800 h-10 rounded-md w-[calc(100%-100px)]'
                            name='phoneNumber'
                            placeholder='123455689'
                            
                            
                            {...register("phoneNumber",{required:{value:true,message:"Please Enter Phone Number"} ,maxLength:{value:10,message:"invalid Phone Number"},minLength:{value:8,message:"invalid Phone Number"}})}

                             />
                        
                        
                         
                             
                                
                             
                        
                        

                    </div>
                    {errors.phoneNumber && (
                <span>
                Please enter a valid phoneNumber.
                </span>
                )}

                </div>

                {/* message */}
                <div className='flex flex-col'>
                <label className='text-white mb-2 text-[0.875rem] leading-[1.375rem]' htmlFor="message">Message <sup className="text-pink-200">*</sup></label>
                
                        <textarea name="message"
                         id="message"
                         className='text-richblack-800 rounded-md'
                        cols="30"
                         rows="7"
                         placeholder='Enter Your Message Here'
                         {...register("message",{required:true})}
                         />
                         {
                            errors.message &&(
                                <span>
                                    Please Enter Your Message
                                </span>
                            )
                         }
                </div>
                
                <button type='submit' className='rounded-md bg-blue-25  py-3 text-richblack-800'>
                    Send Message
                </button>
            

        </div>
        </form>

    </div>
  )
}
