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
import { format } from 'date-fns';

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

    const calendarRows = [];

    const day = format(new Date(today?._d), 'eee')
    const weeks = today?._locale?._weekdaysShort

    for (let i = 0; i < daysInMonth; i++) {
        const date = moment(startDate).add(i, 'days');
        const newDate = new Date()

        const today = format(new Date(newDate), 'PP')
        const thisDay = format(new Date(date?._d), 'PP')
        // console.log(thisDay);
        if (today === thisDay) {
            console.log(today);
        }

        calendarRows.push(
            <div key={i} className={`border p-3 h-40 ${today === thisDay ? ' bg-slate-300' : 'bg-gray-100'} rounded-sm`}>
                <div className='flex justify-between '>
                    <span className='text-lg font-semibold'>{date.date()}</span>

                    <Menu align='end' arrow={true} menuButton={<MenuButton>
                        <div>
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
                    {/* <div className="grid grid-cols-7 gap-5 w-full mb-5 rounded-sm">
                        {
                            weeks?.map((day, i) =>
                                <h2 key={i} className='text-lg font-semibold text-center border'>{day}</h2>
                            )
                        }
                    </div> */}
                    <div className="grid grid-cols-7 gap-5 w-full">
                        {
                            weeks?.map((day, i) =>
                                <h2 key={i} className='text-lg font-semibold text-center border'>{day}</h2>
                            )
                        }
                        {calendarRows}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;