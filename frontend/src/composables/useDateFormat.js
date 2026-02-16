// src/composables/useDateFormat.js

import { ref } from 'vue';

// Composable to format dates in various formats
export function useDateFormat() {

  // Format date to yyyy-mm-dd
  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  // Format date to dd-mm-yyyy
  const formatDateToDDMMYYYY = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

    const formatMonth = (selectedDate) => {
    const month = String(selectedDate.month + 1).padStart(2, "0");
    const year = selectedDate.year;
    return `${year}-${month}`;
  };

  return { formatDateToYYYYMMDD, formatDateToDDMMYYYY ,formatMonth };
}
