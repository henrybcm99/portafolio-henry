
import Card from '@mui/material/Card';
import { useLanguage } from '../context/LanguageContext';
import { t } from "../context/translations"
import CardContent from '@mui/material/CardContent';
const Skills = () => {
    const contx = useLanguage()
    const l = contx?.l
    return (
        <div>
            <div className="flex justify-center text-5xl mt-14 flex-col items-center">
                {(l!==undefined) ? t[l].myskills: ""}
                <Card>
                    <CardContent>
                        
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Skills;