import { parentPort, workerData } from "worker_threads";
import { AsyncLocalStorage } from "async_hooks";
import { manipulateDataForWorker2 } from "./data-manipulation.js";

const asyncLocalStorage = new AsyncLocalStorage();

asyncLocalStorage.run({ ...workerData }, () => {
  console.log(`[${new Date().toISOString()}]: worker2`);
  const data = asyncLocalStorage.getStore();
  const result = manipulateDataForWorker2(data);
  parentPort.postMessage(result);
});
