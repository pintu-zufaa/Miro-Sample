/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import CustomEvent from '../../Components/CustomEvent/CustomEvent';
import '../Charts/Chart.css'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FaPlus } from "react-icons/fa";

const Charts = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleAddClick = (date) => {
        setSelectedDate(date);
        // You can implement your logic to add events to this date
        console.log(`Add button clicked for ${date}`);
    };

    const today = moment();

    const daysInMonth = today.daysInMonth();
    const startDate = moment(today).startOf('month');

    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const calendarRows = [];


    for (let i = 0; i < daysInMonth; i++) {
        const date = moment(startDate).add(i, 'days');
        calendarRows.push(
            <div key={i} className="border p-3 h-40 bg-gray-200 rounded-sm">
                <div className='flex justify-between '>
                    {/* <button onClick={() => handleAddClick(date)} >
                        <div className='text-lg bg-gray-400 p-1 w-5 h-5 flex justify-center items-center rounded-full'>
                            <h2>+</h2>
                        </div>
                    </button> */}

                    <span className='text-lg font-semibold'>{date.date()}</span>
                    <Menu menuButton={<MenuButton>
                        <div
                        // onClick={() => handleAddClick(date)}
                        >
                            <div className=' bg-gray-400 p-1 w-5 h-5 flex justify-center items-center rounded-full'>
                                <FaPlus />
                            </div>
                        </div>
                    </MenuButton>} transition>
                        <MenuItem>
                            <div className='flex gap-2 items-center'>
                                <FaPlus />
                                <p>Add Programm</p>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='flex gap-2 items-center'>
                                <FaPlus />
                                <p>Add Workout</p>
                            </div>
                        </MenuItem>
                    </Menu>


                </div>
            </div>
        );
    }
    return (
        <div className='min-h-screen flex flex-col gap-5 py-20 w-3/4 mx-auto'>
            <Link to='/' className='font-semibold'>--Go to Home</Link>
            <div>
                <div className="custom-calendar">
                    <div className="calendar-header">
                        {today.format('MMMM YYYY')}
                    </div>
                    <div className="grid grid-cols-7 gap-5 w-full mb-5 rounded-sm">
                        {
                            weeks?.map((day, i) =>
                                <h2 key={i} className='text-lg font-semibold text-center border'>{day}</h2>
                            )
                        }
                    </div>
                    <div className="grid grid-cols-7 gap-5 w-full">
                        {calendarRows}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;