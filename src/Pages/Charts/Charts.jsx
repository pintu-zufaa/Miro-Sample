/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Link } from 'react-router-dom';
import '../Charts/Chart.css'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { FaPlus } from "react-icons/fa";
import { format } from 'date-fns';

const Charts = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(moment());

    const handleAddClick = (date) => {
        setSelectedDate(date);
        // You can implement your logic to add events to this date
        console.log(`Add button clicked for ${date}`);
    };

    const goToPreviousMonth = () => {
        setCurrentMonth(currentMonth.clone().subtract(1, 'month'));
    };

    const goToNextMonth = () => {
        setCurrentMonth(currentMonth.clone().add(1, 'month'));
    };
    const goToToday = () => {
        setCurrentMonth(moment()); // Set current month to the current date
    };

    // const today = moment();

    const daysInMonth = currentMonth.daysInMonth();
    const startDate = moment(currentMonth).startOf('month');

    const calendarRows = [];

    const day = format(new Date(currentMonth?._d), 'eee')
    const weeks = currentMonth?._locale?._weekdaysShort
    const firstDayOfMonthIndex = currentMonth.startOf('month').day();

    for (let i = 0; i < daysInMonth; i++) {
        const date = moment(startDate).add(i, 'days');
        const newDate = new Date()

        const today = format(new Date(newDate), 'PP')
        const thisDay = format(new Date(date?._d), 'PP')

        if (today === thisDay) {
            console.log(today);
        }

        calendarRows.push(
            <div key={i}>
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
                    <div className='flex gap-5'>
                        <button onClick={goToPreviousMonth}>{'<'}Previous</button>
                        <button onClick={goToToday}>{'<<'}Today {'>>'}</button>
                        <button onClick={goToNextMonth}>Next{'>'}</button>
                    </div>
                    <div className="calendar-header">
                        {currentMonth.format('MMMM YYYY')}
                    </div>


                    <div className="grid grid-cols-7 gap-5 w-full">
                        {weeks.map((dayName, i) => (
                            <h2
                                key={i}
                                className={`text-lg font-semibold text-center border `}
                            >
                                {dayName}
                            </h2>
                        ))}
                        {/* Fill empty columns for days before the first day of the month */}
                        {Array.from({ length: firstDayOfMonthIndex }, (_, i) => (
                            <div key={i} className="border p-3 h-40 bg-gray-100 rounded-sm"></div>
                        ))}
                        {calendarRows.map((calendarRow, i) => (
                            <div
                                key={i}
                                className={`border p-3 h-40 ${moment(startDate).add(i, 'days').isSame(moment(), 'day') ? 'bg-slate-300' : 'bg-gray-100'} rounded-sm`}
                            >
                                {calendarRow}
                                {/* ... (rest of your calendar row JSX) */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charts;