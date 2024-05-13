import React from 'react';
import { Avatar } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useLanguage } from '../context/LanguageContext';
import { t } from "../context/translations"

const Home = () => {
    const contx = useLanguage()
    const l = contx?.l
    return (
        <div>
            <div className='flex mb-10 sm:flex-row flex-col justify-center items-center mt-14'>
                <Avatar
                    className='mr-10' 
                    src='/images/me.jpg' 
                    sx={{ width: 140, height: 140 }}
                 />
                <div className='flex justify-between sm:items-start items-center flex-col'>
                    <h1 className='text-4xl'>
                        {(l!==undefined) ? t[l].hi: ""}
                    </h1>
                    <h1 className='text-lg sm:w-2/3 mt-4'>
                        {(l!==undefined) ? t[l].computer: ""}
                    </h1>
                    <a className='sm:w-[20%] mt-4 h-8 bg-blue-500 flex items-center justify-center rounded-lg w-1/2' href="CV. Henry Cobas Maldonado.pdf" download={true}>
                        {(l!==undefined) ? t[l].dowl: ""}
                    </a>
                </div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">{(l!==undefined) ? t[l].front: ""}</h3>
                    <p>
                        {(l!==undefined) ? t[l].exp: ""}
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">{(l!==undefined) ? t[l].aboutme: ""}</h3>
                    <p>
                        {(l!==undefined) ? t[l].passionate: ""}
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Home;