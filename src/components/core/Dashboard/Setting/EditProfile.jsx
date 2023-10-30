import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../../../services/operations/SettingAPI'
import IconBtn from '../../../common/IconBtn'


const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]
const EditProfile = () => {
    const { user,profileId } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // console.log("dob is",profileId);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const submitProfileForm = async (data) => {
      // console.log("Form Data - ", data)
      try {
        dispatch(updateProfile(token, data))
      } catch (error) {
        console.log("ERROR MESSAGE - ", error.message)
      }
    }

    // Function to convert date to dd/mm/yyyy format
function formatDateToDDMMYYYY(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  }

 
    return (
      <>
        <form onSubmit={handleSubmit(submitProfileForm)}>
          {/* Profile Information */}
          <div className="my-10 flex flex-col gap-y-6 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
            <h2 className="text-lg font-semibold text-richblack-5">
              Profile Information
            </h2>
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="firstName" className="lable-style text-richblack-300 font-semibold ">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name"
                  className="form-style h-10  px-5 rounded-lg"
                  {...register("firstName", { required: true })}
                  defaultValue={user?.firstName}
                />
                {errors.firstName && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your first name.
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="lastName" className="lable-style  text-richblack-300 font-semibold ">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter first name"
                  className="form-style h-10  px-5 rounded-lg"
                  {...register("lastName", { required: true })}
                  defaultValue={user?.lastName}
                />
                {errors.lastName && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your last name.
                  </span>
                )}
              </div>
            </div>
  
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="dateOfBirth" className="lable-style  text-richblack-300 font-semibold ">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  className="form-style h-10  px-5 rounded-lg"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "Please enter your Date of Birth.",
                    },
                    max: {
                      value: new Date().toISOString().split("T")[0],
                      message: "Date of Birth cannot be in the future.",
                    },
                  })}
                  defaultValue={user?.additionDetails?.dateOfBirth}
                //   defaultValue={formatDateToDDMMYYYY(user?.additionDetails?.dateOfBirth) ?? ''}
                />
                {errors.dateOfBirth && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    {errors.dateOfBirth.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="gender" className="lable-style  text-richblack-300 font-semibold ">
                  Gender
                </label>
                <select
                  type="text"
                  name="gender"
                  id="gender"
                  className="form-style h-10  px-5 rounded-lg"
                  {...register("gender", { required: true })}
                  defaultValue={user?.additionDetails?.gender}
                >
                  {genders.map((ele, i) => {
                    return (
                      <option key={i} value={ele}>
                        {ele}
                      </option>
                    )
                  })}
                </select>
                {errors.gender && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your Date of Birth.
                  </span>
                )}
              </div>
            </div>
  
            <div className="flex flex-col gap-5 lg:flex-row">
              <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="contactNumber" className="lable-style  text-richblack-300 font-semibold ">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  id="contactNumber"
                  placeholder="Enter Contact Number"
                  className="form-style h-10  px-5 rounded-lg"
                  {...register("contactNumber", {
                    required: {
                      value: true,
                      message: "Please enter your Contact Number.",
                    },
                    maxLength: { value: 12, message: "Invalid Contact Number" },
                    minLength: { value: 10, message: "Invalid Contact Number" },
                  })}
                  defaultValue={user?.additionDetails?.contactNumber}
                />
                {errors.contactNumber && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    {errors.contactNumber.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2 lg:w-[48%]">
                <label htmlFor="about" className="lable-style  text-richblack-300 font-semibold ">
                  About
                </label>
                <input
                  type="text"
                  name="about"
                  id="about"
                  placeholder="Enter Bio Details"
                  className="form-style h-10  px-5 rounded-lg"
                  {...register("about", { required: true })}
                  defaultValue={user?.additionDetails?.about}
                />
                {errors.about && (
                  <span className="-mt-1 text-[12px] text-yellow-100">
                    Please enter your About.
                  </span>
                )}
              </div>
            </div>
          </div>
  
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                navigate("/dashboard/my-profile")
              }}
              className="cursor-pointer rounded-md bg-richblack-700 py-2 px-5 font-semibold text-richblack-50"
            >
              Cancel
            </button>
            <IconBtn type="submit" text="Save"  />
          </div>
        </form>
      </>
  )
}

export default EditProfile