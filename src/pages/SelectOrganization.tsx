import React, { useEffect, useState } from "react";

import { useAxios } from "../hooks/useAxios";

type Organization = {
  id: string;
  domain: string;
};

export const SelectOrganization: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const axios = useAxios();

  const handleMount = () => {
    const handleAsync = async () => {
      const result = await axios.get("/organizations");
      const data = result.data as Organization[];

      setOrganizations(data);
      setIsLoaded(true);
    };

    handleAsync();
  };

  // TODO (Nic)
  // - Navigate to a /org/:orgId route

  const handleOrgClick = (organizationId: string) => {
    console.log({ organizationId });
  };

  useEffect(handleMount, []);

  if (!isLoaded) {
    return <div>I am fetching data...</div>;
  }

  return (
    <div>
      {organizations.map((organization) => {
        const handleClick = () => {
          handleOrgClick(organization.id);
        };

        return (
          <div key={organization.id} onClick={handleClick}>
            {organization.domain}
          </div>
        );
      })}
    </div>
  );
};
