import React, { useState } from "react";

const AppContext = React.createContext({
    state: '',
    setState: (state: any) => { },
});

export const AppContextProvider = (props:any) => {
    const [state, setState] = useState('');
return (
        <AppContext.Provider
            value={{
                state: state,
                setState: setState,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;