import React from "react";
const testimonials = [
    {
      name: "Danial Golman",
      image: "/user1.png",
      review:
        "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency's SEO strategy.",
    },
    {
      name: "Danial Golman",
      image: "/user1.png",
      review:
        "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency's SEO strategy.",
    },
    {
      name: "Danial Golman",
      image: "/user1.png",
      review:
        "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency's SEO strategy.",
    },
    {
      name: "Danial Golman",
      image: "/user1.png",
      review:
        "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency's SEO strategy.",
    },
    {
      name: "Danial Golman",
      image: "/user1.png",
      review:
        "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency's SEO strategy.",
    },
    {
      name: "Danial Golman",
      image: "/user1.png",
      review:
        "This platform transformed how we manage SEO campaigns—saving us time and boosting our results effortlessly! The open marketplace and smart management tools are game-changers for our agency's SEO strategy.",
    },
  ];
  
  const TestimonialCard = () => {
    return (
      <div className="p-10 mt-20 text-center bg-gray-100 min-h-screen px-4 md:px-10">
        <span className="text-purple-500 font-semibold uppercase tracking-widest text-sm">● Testimonials</span>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center w-full sm:w-80 mx-auto">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mx-auto" />
              <h3 className="font-semibold text-lg mt-2">{testimonial.name}</h3>
              <div className="flex justify-center my-2">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default TestimonialCard;
  