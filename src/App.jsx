import { useEffect, useState } from "react";
import AppBody from "./AppBody";
import Sidebar from "./Sidebar";
import AppHeader from "./components/custom/app-header";

const App = () => {
  // const [state, setState] = useState("pending");
  const [cardObjectList, setCardObjectList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const url = "https://api.freeapi.app/api/v1/public/youtube/videos";
    const method = "GET";
    const headers = {
      accept: "application/json",
    };

    const signal = controller.signal;

    const sendRequest = async () => {
      try {
        const resBody = await fetch(url, {
          method,
          headers,
          signal,
        });

        // setState("requesting");
        const resJson = await resBody.json();

        const items = [];
        resJson["data"]["data"].map((item) => {
          items.push({
            id: item["items"]["id"],
            imageUrl: item["items"]["snippet"]["thumbnails"]["standard"]["url"],
            videoTitle: item["items"]["snippet"]["title"],
            channelTitle: item["items"]["snippet"]["channelTitle"],
            likeCount: item["items"]["statistics"]["likeCount"],
            viewCount: item["items"]["statistics"]["viewCount"],
          });
        });
        setCardObjectList(items);
      } catch (error) {
        if (error === "AbortError") {
          // Request aborted
        } else {
          console.error("Error fetching videos:", error.message);
          // setState(error);
        }
      }
    };

    sendRequest();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Sidebar>
      <AppHeader title="ChaiTube" />
      <AppBody
        CardObjectList={cardObjectList}
        className="flex flex-col gap-10 sm:text-xs sm:justify-evenly p-4 sm:flex-row sm:flex-wrap sm:mx-auto"
      />
    </Sidebar>
  );
};

export default App;
