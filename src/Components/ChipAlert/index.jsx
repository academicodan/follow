import Chip from '@material-ui/core/Chip'
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
    {
        label: {
            color: '#e0e0e0',
        },
        outlined: {
            border: '1px solid #ff3333',
        },
        icon: {
            color: '#ff3333',
        },
    },
    { name: 'MuiChip' }
)

const ChipAlert = () => {
    const classes = useStyles()

    return (
        <Chip
            icon={<ErrorOutlineOutlinedIcon color="secondary" />}
            label="Possível Fraude"
            variant="outlined"
            className={`${classes.outlined} ${classes.icon} ${classes.label}`}
        />
    )
}

export default ChipAlert
