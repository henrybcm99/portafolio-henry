import React from 'react';
import { Avatar } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Home = () => {
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
                        Hi 👋, I'm Henry Cobas Maldonado
                    </h1>
                    <h1 className='text-lg sm:w-2/3 mt-4'>
                        Computer Science Engineer, at the University of Information Sciences (UCI) from Cuba
                    </h1>
                    <a className='sm:w-[20%] mt-4 h-8 bg-blue-500 flex items-center justify-center rounded-lg w-1/2' href="CV. Henry Cobas Maldonado.pdf" download={true}>Dowload CV</a>
                </div>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                    <p>
                    Experiences in the development of innovative, attractive, functional and responsive interfaces created from tool designs such as Figma
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">About me</h3>
                    <p>
                    Passionate about programming, solving problems, always open to learning new technologies and good teamwork
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Home;