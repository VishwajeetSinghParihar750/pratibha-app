import axios from "axios";
import React, { useEffect, useState } from "react";

function Protected({ children }) {
  let [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    console.log(document.cookie);

    let toRun = async () => {
      try {
        let { data } = await axios.post(
          `${process.env.REACT_APP_API_ENDPOINT}/verify2FA`,
          {},

          { withCredentials: true }
        );

        if (data && data?.verified == true) {
          setLoggedIn(() => true);
        }
      } catch (e) {
        console.log(e);
        setLoggedIn(() => false);
      }
    };
    toRun();
  }, []);

  console.log("loggedIn : ", loggedIn);

  return <>{loggedIn && children}</>;
}

export default Protected;
