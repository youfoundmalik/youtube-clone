import { useState, useEffect, Fragment } from "react";
import "./feed.scss";
import { Box, Stack } from "@mui/material";

import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SidebarLayout from "../../components/layouts/sidebarLayout/SidebarLayout";
import VideoCardSkeleton from "../../components/common/video/VideoCardSkeleton";
import VideoCard from "../../components/common/video/VideoCard";
import { FetchFromAPI } from "../../services/FetchFromAPI";
import { buttonFilters } from "../../utils/constants";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [filterBy, setFilterBy] = useState("All");
  const [data, setData] = useState(null);
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchData = async (params, signal) => {
    setIsLoading(true);
    try {
      const data = await FetchFromAPI(params, signal);
      setData(data.contents);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () => () => {
      const controller = new AbortController();
      const signal = controller.signal;
      fetchData("/search/?q=new", signal);
      return () => {
        controller.abort();
      };
    },
    []
  );

  return (
    <MainLayout setIsCollapsed={setIsCollapsed} isCollapsed={isCollapsed}>
      <SidebarLayout isCollapsed={isCollapsed}>
        <Stack className="feed-container">
          <Box direction="row" className="feed-header">
            <Stack direction="row" className="categories">
              {buttonFilters.map((item, idx) => (
                <div
                  className={`filter ${filterBy === item.name ? "active" : ""}`}
                  key={idx}
                  onClick={() => {
                    fetchData(item.path);
                    setFilterBy(item.name);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </Stack>
          </Box>
          <Box className="feed-body">
            <Stack direction="row" className="content">
              {(isLoading || !data) &&
                dummyData.map((item) => <VideoCardSkeleton key={item} />)}
              {!isLoading &&
                data?.length > 0 &&
                data?.map((item, idx) => (
                  <Fragment key={idx}>
                    {item.video && item.video?.thumbnails[0]?.height < 400 && (
                      <VideoCard
                        collapsed={isCollapsed}
                        id={item?.video?.videoId}
                        thumbnail={item?.video?.thumbnails[0].url}
                        isLive={item?.video?.isLiveNow}
                        duration={item?.video?.lengthSeconds}
                        title={item?.video?.title}
                        channelName={item?.video?.author?.title}
                        channelId={item?.video?.author?.channelId}
                        isVerified={
                          item?.video?.author?.badges[0]?.text === "Verified"
                            ? true
                            : false
                        }
                        avatar={item?.video?.author?.avatar[0]?.url}
                        timePosted={item?.video?.publishedTimeText}
                        views={item?.video?.stats?.views}
                      />
                    )}
                  </Fragment>
                ))}
            </Stack>
          </Box>
        </Stack>
      </SidebarLayout>
    </MainLayout>
  );
};

export default Feed;
