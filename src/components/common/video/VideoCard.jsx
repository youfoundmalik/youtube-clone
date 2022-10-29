import "./index.scss";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { VerifiedIcon } from "../../../assets/icons/icons";

const VideoCard = (props) => {
  return (
    <Box
      className="video-card-container"
      id={props.isShorts ? "shorts" : "video"}
    >
      <Link to={`/video/${props.id}`}>
        <Box className="card-thumbnail">
          <img src={props.thumbnail} alt={props.title} />
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
              <Typography className="views">{props.views} views</Typography>
              <Typography className="time">{props.timePosted}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoCard;
