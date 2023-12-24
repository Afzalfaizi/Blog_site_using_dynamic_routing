"use client"
import { useState } from "react";
import DisplayFormData from "./displayFormData";
import { log } from "console";

export default function ContactForm() {
  const onChangeHandler = (e)=>{
    console.log("onChangeHandler", e.target.value);

  }
  return (
    <>
        <form className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Full Name
        </label>
        <input
          onChange={onChangeHandler}
          type="text"
          name="fullName"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Email
        </label>
        <input
          onChange={onChangeHandler}
          type="email"
          name="email"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Address
        </label>
        <input
          type="text"
          name="address"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          City
        </label>
        <input
          type="text"
          name="city"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Country
        </label>
        <input
          type="text"
          name="country"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Gender
        </label>
        <select
          name="gender"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Occupation
        </label>
        <input
          type="text"
          name="occupation"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Message
        </label>
        <textarea
          name="message"
          className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-purple-400"
        ></textarea>
      </div>

      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:shadow-outline-purple"
        >
          Submit
        </button>
      </div>
    </form>
    <DisplayFormData/>
    </>
  )
}
