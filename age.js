function timeSinceADate() {
  const startDateMilliseconds = Date.parse(
    prompt("Enter a date in the format: yyyy-mm-dd")
  );
  const currentDateMilliseconds = Date.now();
  const timeSinceStartDate = currentDateMilliseconds - startDateMilliseconds;
  const yearsSinceStartDate = Math.floor(timeSinceStartDate / 31556952000);

  return yearsSinceStartDate;
}

console.log(timeSinceADate());
