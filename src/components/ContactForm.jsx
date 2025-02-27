import React from 'react'

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#F2F3F7] p-4">
    <div className=" p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-lg font-semibold mb-4 text-[#1F1F5E]">Get Started</h2>
        <form className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-[#000000]">Name</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-[#E7E7FF] text-[#000000]"
                    placeholder="Your Name"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-[#000000]">Email</label>
                <input
                    type="email"
                    className="w-full p-2 border rounded-md bg-[#E7E7FF] text-[#000000]"
                    placeholder="john@gmail.com"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-[#000000]">Phone Number</label>
                <input
                    type="tel"
                    className="w-full p-2 border rounded-md bg-[#E7E7FF] text-[#000000]"
                    placeholder="+91 98258 75656"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-[#000000]">Organization</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-[#E7E7FF] text-[#000000]"
                    placeholder="Starbucks"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-[#000000]">Country</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded-md bg-[#E7E7FF] "
                    placeholder="India"
                />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer">Start Now</button>
        </form>
    </div>
    <div className=" md:block md:w-1/3 lg:w-1/3 p-6">
        <div className="bg-gray-300 h-100  flex justify-center items-center w-full rounded-lg">
            <span className="text-gray-600">image</span>
        </div>
    </div>
</div>
  )
}

export default ContactForm