// Function to get today's date
import { transactionsInterface } from "@/src/api/types.tscomponent";
import React from "react";

interface Transaction {
  transactions: transactionsInterface[];
  startDate: Date;
  endDate: Date;
  setFilteredData: React.Dispatch<React.SetStateAction<any>>;
  setFilterOptions: React.Dispatch<React.SetStateAction<any>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function filterByDateRange(
  transactions,
  startDate,
  endDate,
  setFilteredData,
  setFilterOptions,
  setOpen
): Transaction {
  const t = transactions?.filter((entry) => {
    const entryDate = new Date(entry.date);

    return entryDate >= startDate && entryDate <= endDate;
  });
  setFilteredData(t);
  // setFilterOptions("");
  setOpen(false);
}

function getToday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

// Function to get the first day of the month
function getFirstDayOfMonth(): Date {
  const today = getToday();
  return new Date(today.getFullYear(), today.getMonth(), 1);
}

// Function to get the first day of the last three months
function getFirstDayOfLastThreeMonths(): Date {
  const today = getToday();
  const lastThreeMonths = new Date(today);
  lastThreeMonths.setMonth(today.getMonth() - 3);
  return new Date(lastThreeMonths.getFullYear(), lastThreeMonths.getMonth(), 1);
}

// Get today's date
export const today: Date = getToday();

// Filter data for today
export const todayData = (
  transactions,
  setFilteredData,
  setFilterOptions,
  setOpen
) => {
  filterByDateRange(
    transactions,
    today,
    today,
    setFilteredData,
    setFilterOptions,
    setOpen
  );
};

// Filter data for the last 7 days
export const last7DaysData = (
  transactions,
  setFilteredData,
  setFilterOptions,
  setOpen
) => {
  console.log(transactions);
  filterByDateRange(
    transactions,
    new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000),
    today,
    setFilteredData,
    setFilterOptions,
    setOpen
  );
};

// Filter data for this month
export const thisMonthData = (
  transactions,
  setFilteredData,
  setFilterOptions,
  setOpen
) => {
  filterByDateRange(
    transactions,
    getFirstDayOfMonth(),
    today,
    setFilteredData,
    setFilterOptions,
    setOpen
  );
};

// Filter data for the last three months
export const lastThreeMonthsData = (
  transactions,
  setFilteredData,
  setFilterOptions,
  setOpen
) => {
  filterByDateRange(
    transactions,
    getFirstDayOfLastThreeMonths(),
    today,
    setFilteredData,
    setFilterOptions,
    setOpen
  );
};

// Function to filter data by selected types
export function filterBySelectedTypes(
  data: transactionsInterface[],
  selectedTypes: string[],
  setFilteredData: React.Dispatch<React.SetStateAction<any>>,
  setFilterOptions: React.Dispatch<React.SetStateAction<any>>,

  filterValue: string,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setSelected: React.Dispatch<React.SetStateAction<string[]>>
) {
  if (selectedTypes.length === 0) {
    return data; // No types selected, return all data
  }

  const t = data.filter((entry) => {
    const entryType = entry?.[filterValue] || "";

    return selectedTypes.includes(entryType.toLowerCase());
  });

  setFilteredData(t);
  setOpen(false);
  setSelected([]);
}
