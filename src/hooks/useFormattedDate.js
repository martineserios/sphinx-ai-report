import { useState, useEffect } from "react";

const useFormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${year}`;

    setFormattedDate(formattedDate);
  }, []);

  return formattedDate;
};

export default useFormattedDate;
