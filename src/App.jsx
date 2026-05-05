import { useEffect, useState } from "react";
import AppBody from "./AppBody";
import Sidebar from "./Sidebar";
import AppHeader from "./components/custom/app-header";

const App = () => {
  // const [state, setState] = useState("pending");
  const [cardObjectList, setCardObjectList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const url = "https://api.freeapi.app/api/v1/public/randomproducts";
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
            id: item["id"],
            title: item["title"],
            description: item["description"],
            price: item["price"],
            discountPercentage: item["discountPercentage"],
            stock: item["stock"],
            thumbnail: item["thumbnail"],
          });
        });
        setCardObjectList(items);
      } catch (error) {
        if (error === "AbortError") {
          // Request aborted
        } else {
          console.error("Error fetching products:", error.message);
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
      <AppHeader title="ChaiMart" />
      <AppBody
        CardObjectList={cardObjectList}
        className="flex flex-col gap-10 sm:text-xs justify-center sm:justify-evenly p-4 sm:flex-row sm:flex-wrap sm:mx-auto"
      />
    </Sidebar>
  );
};

export default App;
