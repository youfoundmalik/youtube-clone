import "./index.scss";
import { Skeleton, Stack } from "@mui/material";

const VideoCardSkeleton = () => {
  return (
    <Stack spacing={0.5} className="video-card-container" sx={{minWidth: '280px'}}>
      <Skeleton variant="rectangular" className="card-thumbnail" height="150px" />
      <Stack spacing={1} direction="row">
        <Skeleton variant="circular" width={35} height={35} className="channel-logo" />
        <Stack className="card-desc"sx={{width: '90%'}}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className="title"
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            className="channel"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default VideoCardSkeleton;
