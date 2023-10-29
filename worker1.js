import { parentPort, workerData } from "worker_threads";
import { AsyncLocalStorage } from "async_hooks";
import { manipulateDataForWorker1 } from "./data-manipulation.js";

const asyncLocalStorage = new AsyncLocalStorage();

asyncLocalStorage.run({ ...workerData }, () => {
  console.log(`[${new Date().toISOString()}]: worker1`);
  const data = asyncLocalStorage.getStore();
  const result = manipulateDataForWorker1(data);
  parentPort.postMessage(result);
});
