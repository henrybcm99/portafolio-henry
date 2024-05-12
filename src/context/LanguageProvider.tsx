import React, { useState } from 'react';
import { LanguageContext,  } from './LanguageContext';

const LanguageProvide = ({children}: any) => {
    const [l, setL] = useState<'ES' | 'EN'>("EN")
    
    return (
        <LanguageContext.Provider value={{l,setL}}>
                {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvide;
