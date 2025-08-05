import webllm from "../lib/web-llm.js";

const handler = new webllm.WebWorkerMLCEngineHandler();

self.onmessage = (msg) => {
  handler.onmessage(msg);
};