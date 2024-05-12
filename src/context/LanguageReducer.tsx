

const LanguageReducer = (state: any, action: any) => {
    switch(action.type){
        case "CHANGE_LANGUAGE":
            return {Language: action.payload}
        default: return state
    }
};

export default LanguageReducer;