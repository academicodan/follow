import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.4rem',
    },
})

const LabelIcon = ({ label, validation }) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Typography variant="button">{label}</Typography>
            {validation && <ReportProblemOutlinedIcon color="error" />}
        </div>
    )
}

export default LabelIcon
