
import { AppBar, Divider ,  Switch,  Toolbar, } from '@mui/material';
import { Link, Outlet } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { t } from "../context/translations"
import "./layout.css";


const Layout = () => {
    const [check, setCheck] = useState(true)
    const contex = useLanguage()
    const dispatch = contex?.setL
    const l = contex?.l
    
    const handleTraslate = (text: 'ES' | 'EN') => {
      if(dispatch !== undefined)
        dispatch(text) 
      setCheck(!check)
    }


    return (
      <div className='bg-neutral-300 '>
        <AppBar position="sticky" className='h-[67px] bar'>
          <Toolbar className='flex gap-2 sm:gap-10 flex-wrap justify-between'>
            <h1>{(l!==undefined) ? t[l].portafolio: ""}</h1>
            <div className='flex justify-center gap-2 sm:gap-10 flex-wrap'>
              <Link to="/" color="inherit" >{(l!==undefined) ? t[l].home: ""}</Link>
              <Link to="skills" color="inherit" >{(l!==undefined) ? t[l].skills: ""}</Link>
              <Link to="proyects" color="inherit" >{(l!==undefined) ? t[l].proyects: ""}</Link>
            </div>
            <div className='flex flex-row items-center'>
              <h1>ES</h1>
                <Switch defaultChecked color="default" onChange={(e)=> handleTraslate(!check?"EN": "ES")}/>
              <h1>EN</h1>
            </div>
          </Toolbar>
        </AppBar>
        <Outlet />
        <div className='pt-10 h-[22vh]'>
          <Divider className='h-[23%]' textAlign="center">{(l!==undefined) ? t[l].contact: ""}</Divider>
          <div className='h-[77%] flex flex-row flex-wrap justify-center items-center gap-6'>
            <a href="https://www.linkedin.com/in/henry-cobas-maldonado-142957247/">
              <LinkedInIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://wa.me/+5356061715?text=Hi Henry,We are interested in work with you!">
              <WhatsAppIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://github.com/henrybcm99">
              <GitHubIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://t.me/@Henrybcm">
              <TelegramIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://www.facebook.com/henry%20cobas%20maldonado">
              <FacebookIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
          </div>
          
        </div>
        
      </div>
    );
};

export default Layout;