import { useState, useEffect } from "react";

const useFadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return isVisible;
};

export default useFadeIn;
