import React from 'react';

const ProfileCards = ({ profileimges, name = "kunal", role }) => {
    return (
        <div className="p-5 ">
            <div className='flex justify-center '>
                <div className="w-[300px] h-[400px] bg-gray-500 rounded-2xl p-6 flex flex-col items-center gap-13 shadow-2xl shadow-gray-950">
                    <div className='w-40 h-40'>
                        <img className="object-contain w-full h-full rounded-full object-fit" src={profileimges} alt="profile" />
                    </div>

                    <div className='flex flex-col gap-2 text-white'>
                        <h1 className="text-center font-bold text-2xl ">{name}</h1>
                        <p className="text-center font-semibold ">{role}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileCards;


// name = "kunal" - default prop 

