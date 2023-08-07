function CurrentDate() {
  const today: Date = new Date();
  const day: number = today.getDate();
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December",
  ];
  const month: string = monthNames[today.getMonth()];
  const year: number = today.getFullYear();

  console.log(month, year, day);
  return (
    <div>
      <h1>
        As of {month} {day}, {year}
      </h1>
    </div>
  );
}

export default CurrentDate;
