import { runWorker } from "./run-worker.js";

const globalObject = {
  worker1: {
    name: "Harry Potter",
    age: 32,
    details: {
      hobbies: ["reading", "coding"],
      address: "9 3/4 street, city",
    },
  },
  worker2: {
    name: "Hermione Granger",
    age: 30,
    details: {
      phone: "0987654321",
      address: "456 street, city",
    },
  },
};

async function main() {
  const [result1, result2] = await Promise.all([
    runWorker("./worker1.js", globalObject["worker1"]),
    runWorker("./worker2.js", globalObject["worker2"]),
  ]);

  const mergedResult = {
    ...result1,
    ...result2,
    details: {
      ...result1.details,
      ...result2.details,
    },
  };

  console.log("Merged Result:", mergedResult);
}

main();
