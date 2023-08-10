/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Questions = () => {
    const [teamName, setTeamName] = useState();
    const [work, setWork] = useState();
    const [confirm, setConfirm] = useState();
    const [profession, setProfession] = useState();
    const [role, setRole] = useState();
    const [size, setSize] = useState();
    const [medium, setMedium] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
        const details = {
            teamName, work, confirm, profession, role, size, medium
        }
        console.log(details);
    }

    const handleTeamName = (e) => {
        // console.log(e.target.value);
        setTeamName(e.target.value)
    }

    const handleWork = (e) => {
        // console.log(e.target.value);
        setWork(e.target.value)
    }

    const handleConfirm = (e) => {
        // console.log(e.target.value);
        setConfirm(e.target.value)
    }

    const handleProfession = (e) => {
        // console.log(e.target.value);
        setProfession(e.target.value)
    }

    const handleRole = (e) => {
        // console.log(e.target.value);
        setRole(e.target.value);
    }

    const handleCompanySize = (e) => {
        // console.log(e.target.value);
        setSize(e.target.value)

    }

    const handleMedium = (e) => {
        // console.log(e.target.value);
        setMedium(e.target.value);
    }

    return (
        <div className='min-h-screen pt-24 mb-20 pb-20 w-1/4'>
            <Link to='/chart' className='font-semibold'>--Go to Chart</Link>
            <h2 className='text-6xl font-bold'>Tell Us About Your Team</h2>
            <form onSubmit={handleSubmit} className="form-control w-full flex flex-col gap-5">
                <label className="label">
                    <span className="label-text text-xl font-semibold">What is your team name?</span>
                </label>
                <input onChange={handleTeamName} type="text" placeholder="e.g Product Marketing" name='team_name' className="px-6 text-2xl py-4 border border-black rounded-md w-full" />
                {
                    teamName &&
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">What kind of work do you do?</span>
                            </label>
                            <select onChange={handleWork} defaultValue='Chose a Option' className=" px-6 text-2xl py-4 border border-black rounded-md w-full">
                                <option disabled>Chose a Option</option>
                                <option>UX Research</option>
                                <option>Operations</option>
                                <option>Product Management</option>
                                <option>Engineer / Development</option>
                                <option>Sales / Sucess</option>
                            </select>
                        </div>
                    </div>
                }
                {
                    work &&
                    <div className='flex flex-col gap-5'>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Have you ever used Mero before?</span>
                        </label>
                        <div className="form-control">
                            <label className={`label cursor-pointer px-5 py-3 rounded-full border ${confirm === "Yes" && 'border-primary'}`}>
                                <span className="label-text text-xl">No,It's My First time</span>
                                <input
                                    onChange={handleConfirm} type="radio"
                                    name="radio-10" className="radio checked:bg-blue-500 hidden"
                                    value='Yes'
                                    checked={confirm === 'Yes'}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className={`label cursor-pointer px-5 py-3 rounded-full border ${confirm === "No" && 'border-primary'}`}>
                                <span className="label-text text-xl">Yes, a couple of times</span>
                                <input
                                    onChange={handleConfirm} type="radio"
                                    name="radio-10" className="radio checked:bg-blue-500 hidden"
                                    value='No'
                                    checked={confirm === 'No'}
                                />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className={`label cursor-pointer px-5 py-3 rounded-full border ${confirm === "Other" && 'border-primary'}`}>
                                <span className="label-text text-xl">Yes, quite often</span>
                                <input
                                    onChange={handleConfirm} type="radio"
                                    name="radio-10" className="radio checked:bg-blue-500 hidden"
                                    value='Other'
                                    checked={confirm === 'Other'}
                                />
                            </label>
                        </div>
                    </div>
                }

                {
                    confirm &&
                    <div className=''>
                        <label className="label">
                            <span className="label-text text-xl font-semibold">What will you use Miro for?</span>
                        </label>
                        <div className='flex gap-5 items-center'>
                            <div className="form-control">
                                <label className={`label cursor-pointer px-5 py-3 rounded-full border ${profession === "Work" && 'border-primary'}`}>
                                    <span className="label-text text-xl">Work</span>
                                    <input
                                        onChange={handleProfession} type="radio"
                                        name="radio-10" className="radio checked:bg-blue-500 hidden"
                                        value='Work'
                                        checked={profession === 'Work'}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className={`label cursor-pointer px-5 py-3 rounded-full border ${profession === "Personal" && 'border-primary'}`}>
                                    <span className="label-text text-xl">Personal</span>
                                    <input
                                        onChange={handleProfession} type="radio"
                                        name="radio-10" className="radio checked:bg-blue-500 hidden"
                                        value='Personal'
                                        checked={profession === 'Personal'}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className={`label cursor-pointer px-5 py-3 rounded-full border ${profession === "Education" && 'border-primary'}`}>
                                    <span className="label-text text-xl">Education</span>
                                    <input
                                        onChange={handleProfession} type="radio"
                                        name="radio-10" className="radio checked:bg-blue-500 hidden"
                                        value='Education'
                                        checked={profession === 'Education'}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                }
                {
                    profession &&
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">What's your role?</span>
                            </label>
                            <select onChange={handleRole} defaultValue='Chose a Option' className=" px-6 text-2xl py-4 border border-black rounded-md w-full">
                                <option disabled>Chose a Option</option>
                                <option>Executive (C-Level, VP)</option>
                                <option>Director</option>
                                <option>Team Manager</option>
                                <option>Individual Contributor</option>
                                <option>Contractor / Freelancer</option>
                            </select>
                        </div>
                    </div>
                }
                {
                    role &&
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">What's your company Size?</span>
                            </label>
                            <select onChange={handleCompanySize} defaultValue='Choose company Size' className=" px-6 text-2xl py-4 border border-black rounded-md w-full">
                                <option disabled>Choose company Size</option>
                                <option>Only Me</option>
                                <option>2 - 50</option>
                                <option>51- 250</option>
                                <option>251 - 1K</option>
                                <option>1K - 5K</option>
                            </select>
                        </div>
                    </div>
                }
                {
                    size &&
                    <div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">How did you hear about Miro?</span>
                            </label>
                            <select onChange={handleMedium} defaultValue='Select Option' className=" px-6 text-2xl py-4 border border-black rounded-md w-full">
                                <option disabled>Select Option</option>
                                <option>LinkedIn</option>
                                <option>Work / School</option>
                                <option>Google (Search Engine)</option>
                                <option>Twitter</option>
                                <option>Friend / Word of Mouth</option>
                            </select>
                        </div>
                    </div>
                }

                <button type="submit"
                    className={teamName && work && confirm && profession && role && size && medium ? 'w-full bg-primary text-3xl font-semibold px-6 py-4 my-5 text-white rounded-md' : 'w-full bg-red-100 text-3xl font-semibold px-6 py-4 my-5 text-gray-500 rounded-md disabled'}
                    disabled={!teamName && !work && !confirm && !profession && !role && !size && !medium}>Continue</button>
            </form>
        </div>
    );
};

export default Questions;