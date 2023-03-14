import { NextPageWithLayout } from "@/pages/page";
import PrimaryLayout from "@/components/layouts/primary/PrimaryLayout";
import Items from "@/components/items/list/List";
import Button from "@/components/button/Button";
import BidProvider from "@/hooks/BidProvider";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchItems, updateItemBid } from "@/stores/item/actions";
import { getItemsSelector } from "@/stores/item/selectors";
import Loading from "@/components/loading/Loading";
import Alert from "@/components/alert/Alert";
import { useSocket } from "@/hooks/SocketProvider";

const Home: NextPageWithLayout = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getItemsSelector);
  const { socketOnUpdateBid } = useSocket();
  // filter items by status
  const [filterCompleted, setFilterCompleted] = useState(true);
  const [filterOngoing, setFilterOngoing] = useState(true);
  useEffect(() => {
    // fetch items after mounted
    dispatch(fetchItems());

    // listen the update current price bid from socket
    socketOnUpdateBid((data: any) => {
      // map the update current price to the items list
      dispatch(updateItemBid(data));
    });
  }, []);

  return (
    <BidProvider>
      {selector.loading && <Loading />}
      <section className="my-6">
        {selector.error && <Alert message={selector.error} />}
        <h1 className="my-6">
          <Button color={filterCompleted ? "primary" : "default"}
                  onClick={() => setFilterCompleted(!filterCompleted)}
          >Completed</Button> {" "}
          <Button color={filterOngoing ? "primary" : "default"}
                  onClick={() => setFilterOngoing(!filterOngoing)}
          >Ongoing</Button>
        </h1>
        <Items items={(selector.data || []).filter((item: any) =>
          (item.status === "Completed" && filterCompleted) ||
          (item.status === "Ongoing" && filterOngoing)
        )} />
      </section>
    </BidProvider>
  );
};

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  );
};

export default Home;
