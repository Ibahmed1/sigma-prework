function getStartDateAndConvertToMilliseconds() {
  let startDateMilliseconds = Date.parse(
    prompt("Enter a date in the format: yyyy-mm-dd")
  );
  while (isNaN(startDateMilliseconds)) {
    startDateMilliseconds = Date.parse(
      prompt("Wrong format!\nPlease enter a date in the format: yyyy-mm-dd")
    );
  }
  return startDateMilliseconds;
}

function timeSinceADate() {
  const startDateMilliseconds = getStartDateAndConvertToMilliseconds();

  const currentDateMilliseconds = Date.now();
  const timeSinceStartDate = currentDateMilliseconds - startDateMilliseconds;
  const yearsSinceStartDate = Math.floor(timeSinceStartDate / 31556952000);

  return yearsSinceStartDate;
}

console.log(timeSinceADate());
