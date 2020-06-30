import { useReducer } from 'react';
import storage from 'local-storage-fallback';
import palette from '../assets/style/colors';

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_DARK_MODE":
            storage.setItem('isDark', !state.isDark);
            return {
                isDark: !state.isDark,
                themeLight: palette.themeLight,
                themeDark: palette.themeDark,
            }
        default: {
            return state;
        }
    }
};

const useGlobalState = () => {
    const [state, dispatch] = useReducer(reducer, {
        theme: { palette },
        isDark: storage.getItem('isDark') 
            ? JSON.parse(storage.getItem('isDark')) 
            : true,
    });
    
    return { state, dispatch };
}

export default useGlobalState;