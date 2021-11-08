import { IconButton} from "@material-ui/core";
import NavigateNextOutlinedIcon from '@material-ui/icons/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@material-ui/icons/NavigateBeforeOutlined';
import { Link } from "react-router-dom";
import { DoneOutlined, Height } from "@material-ui/icons";

export const FooterActions = ({path, isDisable, isFinish}) => {
  return (
    <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: "100px"
          }}
        >
          <Link to={path} style={{ textDecoration: "none" }}>
            <IconButton size="large" type="submit" disabled={isDisable}>
              <NavigateBeforeOutlinedIcon fontSize="large" />
            </IconButton>
          </Link>
          {
            isFinish ? (
              <IconButton size="large" type="submit" color='primary'>
                <DoneOutlined fontSize="large" />
              </IconButton>
            ) : (
              <IconButton size="large" type="submit" color='primary'>
                <NavigateNextOutlinedIcon fontSize="large" />
              </IconButton>
            )
          }
        </div>
  )
}