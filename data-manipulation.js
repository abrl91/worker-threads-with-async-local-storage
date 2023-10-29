export function manipulateDataForWorker1(data) {
  data.details.phone = "1234567890";
  return data;
}

export function manipulateDataForWorker2(data) {
  data.details.address = "456 avenue, city";
  return data;
}
