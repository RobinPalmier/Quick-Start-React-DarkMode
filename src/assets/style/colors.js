import storage from 'local-storage-fallback';

const palette = {
    isDark: JSON.parse(storage.getItem('isDark')),
    themeLight: '#EDEDED',
    themeDark: '#272726',
};

export default palette;