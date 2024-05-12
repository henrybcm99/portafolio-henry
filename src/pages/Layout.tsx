
import { AppBar, Divider ,  Switch,  Toolbar, } from '@mui/material';
import { Outlet, Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLanguage } from '../context/LanguageContext';





const Layout = () => {

    // const {dispatch} = useLanguage()

    const handleTraslate = (text: string) => {
      // dispatch({type: "CHANGE_LANGUAGE", payload: text})
    }
    return (
      <div className='bg-neutral-300 640px'>
        <AppBar position="sticky">
          <Toolbar className='flex gap-2 sm:gap-10 flex-wrap justify-between'>
            <h1>PORTAFOLIO</h1>
            <div className='flex justify-center gap-2 sm:gap-10 flex-wrap'>
              <Link to="/" color="inherit" ></Link>
              <Link to="skills" color="inherit" >SKILLS</Link>
              <Link to="proyects" color="inherit" >PROYECTS</Link>
            </div>
            <div className='flex flex-row items-center'>
              <h1>ES</h1>
                <Switch defaultChecked color="default" onChange={(e)=> handleTraslate(e.target.value? "ES" : "EN")}/>
              <h1>EN</h1>
            </div>
          </Toolbar>
        </AppBar>
        <Outlet />
        <div className='mt-10 sm:h-28'>
          <Divider className='sm:h-[23%]' textAlign="center">CONTACT ME</Divider>
          <div className='sm:h-[77%] flex flex-row flex-wrap justify-center items-center gap-6'>
            <a href="https://www.linkedin.com/in/henry-cobas-maldonado-142957247/" target='_blank'>
              <LinkedInIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://wa.me/+5356061715?text=Hi Henry,We are interested in work with you!" target='_blank'>
              <WhatsAppIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://github.com/henrybcm99" target='_blank'>
              <GitHubIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://t.me/@Henrybcm" target='_blank'>
              <TelegramIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
            <a href="https://www.facebook.com/henry%20cobas%20maldonado" target='_blank'>
              <FacebookIcon sx={{ fontSize: 40}} color='primary'/>
            </a>
          </div>
          
        </div>
        
      </div>
    );
};

export default Layout;