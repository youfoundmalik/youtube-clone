import "./index.scss";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SensorsIcon, VerifiedIcon } from "../../../assets/icons/icons";
import { secondsToHms } from "../../../utils/constants";

const VideoCard = (props) => {
  const duration = secondsToHms(props.duration);
  return (
    <Box
      className="video-card-container"
      id={props.collapsed ? "collapsed-sidebar" : ""}
    >
      <Link to={`/video/${props.id}`}>
        <Box className="card-thumbnail">
          <img src={props.thumbnail} alt={props.title} />
          <div className="duration">{duration}</div>
        </Box>
      </Link>
      <Box className="card-details">
        <Avatar src={props.avatar} className="channel-logo" />
        <Stack className="card-desc">
          <Link to={`/video/${props.id}`} className="title">
            {props.title}
          </Link>
          <Stack className="more">
            <Stack direction="row" className="channel">
              <Link to={`/channel/${props.channelId}`} className="name">
                {props.channelName}
              </Link>
              {props.isVerified && (
                <VerifiedIcon
                  sx={{ height: "14px", width: "14px", color: "#606060" }}
                />
              )}
            </Stack>
            <Stack direction="row" className="extra">
              <Typography className="views">
                {parseInt(props.views).toLocaleString()} views
              </Typography>
              <Typography className="time">{props.timePosted}</Typography>
            </Stack>
            {props.isLive && (
              <Stack direction="row" className="live-btn">
                <SensorsIcon
                  sx={{ width: "19px", height: "19px", color: "#fff" }}
                />
                <p>LIVE</p>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoCard;
