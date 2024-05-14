import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useLanguage } from '../context/LanguageContext';
import { t } from "../context/translations"
import { Link } from 'react-router-dom';

const Proyects = () => {
    const contx = useLanguage()
    const l = contx?.l
    return (
        <div className='sm:h-[66vh] flex justify-evenly items-center flex-col sm:flex-row'>
                <Card sx={{ maxWidth: 345 }} className='mt-4'>

                    <CardActionArea>
                    <Link to={'https://apps.registrocivil.gob.ec/portalCiudadano/index.jsf'}>
                        <CardMedia
                        component="img"
                        height="140"
                        image="/images/RCE.png"
                        alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {(l!==undefined) ? t[l].rce: ""}
                            </Typography>
                        </CardContent>
                        </Link>
                    </CardActionArea>
                </Card>
                <div className='sm:w-1/3 w-[90%] flex flex-col gap-5 mt-4'>
                    <h1 className='text-lg text-justify'>{(l!==undefined) ? t[l].rceDescrpP1: ""}</h1>
                    <h1 className='text-lg text-justify'>{(l!==undefined) ? t[l].rceDescrpP2: ""}</h1>
                </div>
        </div>
    );
};

export default Proyects;