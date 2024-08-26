import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";
import { z } from "zod";

const outputSchema = z.object({
  country: z.string().describe("The country"),
  capital: z.string().describe("The capital of the country"),
});

dotenv.config();

const llm = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Try out and see if you can get a json output

const llmWithJsonResponse = llm.withStructuredOutput(outputSchema);

const question =
  "What is the capital of France and also tell me the population?";

const response = await llmWithJsonResponse.invoke(question);

console.log(response);
