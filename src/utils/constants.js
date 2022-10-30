import {
  AccessTimeOutlinedIcon,
  DownloadIcon,
  EmojiEventsOutlinedIcon,
  HomeOutlinedIcon,
  MusicNoteOutlinedIcon,
  MusicVideoIcon,
  NewspaperOutlinedIcon,
  OndemandVideoIcon,
  RestoreOutlinedIcon,
  SlowMotionVideoIcon,
  SportsEsportsOutlinedIcon,
  SubscriptionsOutlinedIcon,
  WhatshotIcon,
  YouTubeIcon,
} from "../assets/icons/icons";

export function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? (h < 10 ? "0" + h + ":" : h + ":") : "";
  var mDisplay = m > 0 ? (m < 10 ? "0" + m + ":" : m + ":") : "";
  var sDisplay = s > 0 ? (s < 10 ? "0" + s : s) : "";
  return hDisplay + mDisplay + sDisplay;
}

export const buttonFilters = [
  {
    name: "All",
    path: "/search/?q=new",
  },
  {
    name: "Music",
    path: "/search/?q=music",
  },
  {
    name: "Sports",
    path: "/search/?q=sports",
  },
  {
    name: "Entertainment",
    path: "/search/?q=entertainment",
  },
  {
    name: "Movies",
    path: "/search/?q=movies",
  },
  {
    name: "Live",
    path: "/search/?q=live",
  },
  {
    name: "Gaming",
    path: "/search/?q=gaming",
  },
  {
    name: "Fashion & Style",
    path: "/search/?q=fashion-and-style",
  },
  {
    name: "Sports Entertainment",
    path: "/search/?q=sports-entertainment",
  },
  {
    name: "NBA",
    path: "/search/?q=nba",
  },
  {
    name: "WWE",
    path: "/search/?q=wwe",
  },
  {
    name: "Premier League",
    path: "/search/?q=premier-league",
  },
  {
    name: "UFC",
    path: "/search/?q=ufc",
  },
  {
    name: "Boxing",
    path: "/search/?q=boxing",
  },
];

export const sidebarMenu = [
  {
    icon: <HomeOutlinedIcon />,
    name: "Home",
    path: "/",
    redirect: false,
    disabled: false,
  },
  {
    icon: <OndemandVideoIcon />,
    name: "Shorts",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <SubscriptionsOutlinedIcon />,
    name: "Subscriptions",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <YouTubeIcon />,
    name: "Originals",
    path: "",
    redirect: false,
    disabled: false,
  },
  {
    icon: <SlowMotionVideoIcon />,
    name: "YouTube Music",
    path: "https://music.youtube.com/",
    redirect: true,
    disabled: false,
  },
  {
    icon: <MusicVideoIcon />,
    name: "Library",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <RestoreOutlinedIcon />,
    name: "History",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    name: "Watch Later",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <DownloadIcon />,
    name: "Downloads",
    path: "",
    redirect: false,
    disabled: true,
  },
];

export const sidebarExplore = [
  {
    icon: <WhatshotIcon />,
    name: "Trending",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <MusicNoteOutlinedIcon />,
    name: "Music",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <SportsEsportsOutlinedIcon />,
    name: "Gaming",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <NewspaperOutlinedIcon />,
    name: "News",
    path: "",
    redirect: false,
    disabled: true,
  },
  {
    icon: <EmojiEventsOutlinedIcon />,
    name: "Sport",
    path: "",
    redirect: false,
    disabled: true,
  },
];

export const sidebarMoreFrom = [
  {
    icon: <YouTubeIcon sx={{ color: "#005952" }} />,
    name: "Create Studio",
    path: "https://studio.youtube.com/",
    redirect: true,
    disabled: false,
  },
  {
    icon: <YouTubeIcon sx={{ color: "#005952" }} />,
    name: "YouTube Music",
    path: "https://music.youtube.com/",
    redirect: true,
    disabled: false,
  },
  {
    icon: <YouTubeIcon sx={{ color: "#005952" }} />,
    name: "YouTube Kids",
    path: "https://www.youtubekids.com/?source=youtube_web",
    redirect: true,
    disabled: false,
  },
  {
    icon: <YouTubeIcon sx={{ color: "#005952" }} />,
    name: "YouTube TV",
    path: "https://tv.youtube.com/welcome/?utm_source=youtube_web&utm_medium=ep&utm_campaign=home&ve=34273&utm_servlet=prod",
    redirect: true,
    disabled: false,
  },
];
