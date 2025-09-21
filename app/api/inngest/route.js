import { checkBudgetAlert } from "@/lib/inngest/functions";
import {inngest} from "@/lib/inngest/client"; 
import { serve } from "inngest/next";

console.log("Serving Inngest route...");

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [ checkBudgetAlert],
});