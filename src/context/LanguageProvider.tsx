import React, { Children, useReducer } from 'react';
import { LanguageContext,  } from './LanguageContext';
import LanguageReducer from './LanguageReducer';

const LanguageProvide = (Children: any) => {
    const [state, dispatch] = useReducer(LanguageReducer ,"ES")
    return (
        <LanguageContext.Provider value={{state,dispatch:dispatch}}>
                {Children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvide;