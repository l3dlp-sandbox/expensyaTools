import { AppInsight } from "./app-insight";

export interface AppInsightResult {
  aiMessages: string;
  odataContext: string;
  value: AppInsight[];
}
