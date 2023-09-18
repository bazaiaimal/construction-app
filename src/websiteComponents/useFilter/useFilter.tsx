import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";

const useFilter = () => {
  const [filter, setFilter] = useState([
    { id: 1, description: "Civil Engineer", category: "Long Term Projects" },
    {
      id: 2,
      description: "Electrical Engineer",
      category: "Short Term Projects",
    },
  ]);

  return <></>;
};

export default useFilter;
