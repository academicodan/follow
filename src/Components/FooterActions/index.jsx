import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

const useStyles = makeStyles(() => ({
    footerButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
    },
}))

export const FooterActions = () => {
    const classes = useStyles()
    return (
        <div className={classes.footerButton}>
            <Button
                color="primary"
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                startIcon={<CloudUploadIcon />}
            >
                Registrar
            </Button>
        </div>
    )
}
