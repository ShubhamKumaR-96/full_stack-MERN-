import React from "react";
import { useRecoilValue } from "recoil";
import { jobs, message, myNetwork, notification, totalNotification } from "../../atom";

const MyRecoil = () => {
  const myNetworks = useRecoilValue(myNetwork);
  const jobsCount=useRecoilValue(jobs)
  const nofications=useRecoilValue(notification)
  const messagging=useRecoilValue(message)
  const totalNotificationCount=useRecoilValue(totalNotification)


  return (
    <div>
      <button>Home</button>
      <button>My Network ({myNetworks >= 100 ? "99+" : myNetworks} ) </button>
      <button>Jobs ({jobsCount})</button>
      <button>Notification ({nofications}) </button>
      <button>Message ({messagging}) </button>
      <button>Me ({totalNotificationCount})</button>
    </div>
  );
};

export default MyRecoil;
