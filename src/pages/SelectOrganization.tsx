import React, { useEffect, useState } from "react";

import { useAxios } from "../hooks/useAxios";

export const SelectOrganization: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const axios = useAxios();

  const handleMount = () => {
    const handleAsync = async () => {
      const result = await axios.get("/organizations");
      console.log(result.data);
      setIsLoaded(true);
    };

    handleAsync();
  };

  useEffect(handleMount, []);

  if (!isLoaded) {
    return <div>I am fetching data...</div>;
  }

  return <div>I am SelectOrganization</div>;
};
