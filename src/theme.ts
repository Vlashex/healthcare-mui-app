import { createTheme } from "@mui/material";


const theme = createTheme({
    typography: {
        
    },
    palette: {
        primary: {
            main: '#000'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                color: '#000',
                underline: 'none',
            }
        },
        MuiInput: {
            defaultProps: {
                sx: {
                    background: '#fff',
                    borderRadius: '300px',
                    p: '0 0 0 50px',

                    "::placeholder": {
                        fontSize: '5px'
                    }
                    
                },
                disableUnderline: true
            }
        },
    }

})

export default theme