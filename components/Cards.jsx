import React from 'react'
import card1 from "../assets/card1.jpg"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card4.jpg"

const cardlist = [
    {
        photo: card1,
        title: "React Developer",
        description: "Skilled in building interactive UIs with React.",
        button: "Hire Me"
    },
    {
        photo: card2,
        title: "UI/UX Designer",
        description: "Designing user-first experiences using Figma & Adobe XD.",
        button: "View Portfolio"
    },
    {
        photo: card3,
        title: "Full Stack Engineer",
        description: "MERN stack expert with 5 years of experience.",
        button: "Contact Now"
    },
    {
        photo: card4,
        title: "SEO Specialist",
        description: "Helping businesses grow with modern SEO strategies.",
        button: "Learn More"
    }
];

const Card = ({ photo, title, description, children }) => {
    return (
        <div className='container p-24 flex justify-center items-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    cardlist.map((item) => {
                        return (
                            <div key={item.title} className='shadow-xl rounded-xl p-11 flex flex-col gap-y-8'>
                                <img className='w-[80px] h-[80px] rounded-full object-fit ' src={item.photo} alt="" />
                                <div className='flex flex-col gap-3'>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card