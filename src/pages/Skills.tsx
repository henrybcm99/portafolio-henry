
import Card from '@mui/material/Card';
import { useLanguage } from '../context/LanguageContext';
import { t } from "../context/translations"
import CardContent from '@mui/material/CardContent';
import { SiReact } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";


const Skills = () => {
    const contx = useLanguage()
    const l = contx?.l
    return (
        <div>
            <div className="flex sm:h-[66vh] h-auto justify-center text-5xl flex-col items-center">
                {/* {(l!==undefined) ? t[l].myskills: ""} */}
                <div className='flex flex-col justify-around items-center'>
                    <h1 className='mb-3 font-semibold'>{(l!==undefined) ? t[l].tools: ""}</h1>
                    <Card>
                        <CardContent className='flex justify-between sm:gap-5 gap-2 flex-wrap'>
                            <div className='flex flex-col items-center'>
                                <SiReact className='text-blue-500'/>
                                <h1 className='text-lg'>Reactjs</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <RiTailwindCssFill className='text-blue-500'/>
                                <h1 className='text-lg'>TailwindCss</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <RiNextjsFill className='text-blue-500'/>
                                <h1 className='text-lg'>Nextjs</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <FaBootstrap className='text-blue-500'/>
                                <h1 className='text-lg'>Bootstrap</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiMui className='text-blue-500'/>
                                <h1 className='text-lg'>Material UI</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiDjango className='text-blue-500'/>
                                <h1 className='text-lg'>Django</h1>
                            </div>
                        </CardContent>
                    </Card>
                    <h1 className='mt-5 mb-3 font-semibold'>{(l!==undefined) ? t[l].languages: ""}</h1>
                    <Card>
                        <CardContent className='flex justify-between sm:gap-5 gap-2 flex-wrap'>
                            <div className='flex flex-col items-center'>
                                <FaHtml5 className='text-blue-500'/>
                                <h1 className='text-lg'>Html</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <FaCss3Alt className='text-blue-500'/>
                                <h1 className='text-lg'>Css</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <IoLogoJavascript className='text-blue-500'/>
                                <h1 className='text-lg'>Javascript</h1>
                            </div>
                            <div className='flex flex-col items-center'>
                                <SiTypescript className='text-blue-500'/>
                                <h1 className='text-lg'>Typescript</h1>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Skills;