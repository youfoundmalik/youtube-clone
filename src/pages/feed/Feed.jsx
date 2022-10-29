import { useState, useEffect, Fragment } from "react";
import "./feed.scss";
import { Box, Stack } from "@mui/material";

import MainLayout from "../../components/layouts/mainLayout/MainLayout";
import SidebarLayout from "../../components/layouts/sidebarLayout/SidebarLayout";
import VideoCardSkeleton from "../../components/common/video/VideoCardSkeleton";
import VideoCard from "../../components/common/video/VideoCard";
import { FetchFromAPI } from "../../services/FetchFromAPI";
import { useCallback } from "react";

let videos = [];
let shorts = [];
let channels = [];

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8];

  const sorting = useCallback((prop) => {
    for (let index = 0; index < prop.length; index++) {
      const element = prop[index];
      if (element.type === "video") {
        if (element.video?.thumbnails[0]?.height < 500) {
          videos.push(element);
        } else {
          shorts.push(element);
        }
      } else {
        channels.push(element);
      }
    }
  }, []);

  useEffect(
    () => async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      setIsLoading(true);
      try {
        const data = await FetchFromAPI("/search/?q=premier-league", signal);
        setData(data.contents);
        sorting(data?.contents);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
      return () => {
        controller.abort();
      };
    },
    [sorting]
  );

  return (
    <MainLayout>
      <SidebarLayout>
        <Stack className="feed-container">
          <Box direction="row" className="feed-header">
            <Stack className="categories">categories</Stack>
          </Box>
          <Box className="feed-body">
            <Stack direction="row" className="content">
              {(isLoading || !data) &&
                dummyData.map((item) => <VideoCardSkeleton key={item} />)}
              {!isLoading &&
                videos.length > 0 &&
                videos
                  ?.slice(0, 12)
                  ?.map((item, idx) => (
                    <Fragment key={idx}>
                      {item.video && (
                        <VideoCard
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
              {!isLoading && shorts.length > 0 && (
                <Stack direction="row" className="shorts">
                  {shorts?.map((item, idx) => (
                    <Fragment key={idx}>
                      {item.video && (
                        <VideoCard
                          isShorts={true}
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
              )}
              {!isLoading &&
                videos.length > 0 &&
                videos
                  ?.slice(12)
                  ?.map((item, idx) => (
                    <Fragment key={idx}>
                      {item.video && (
                        <VideoCard
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
