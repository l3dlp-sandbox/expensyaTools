import { AI } from "./ai";
import { Application } from "./application";
import { Client } from "./client";
import { Cloud } from "./cloud";
import { CustomDimensions } from "./custom-dimensions";
import { Exception } from "./exception";
import { Operation } from "./operation";
import { AppSession } from "./app-session";
import { InsightType } from "./insight-type.enum";
import { User } from "./user";

export interface AppInsight {
  ai: AI;
  application: Application;
  client: Client;
  cloud: Cloud;
  count: number;
  customDimensions: CustomDimensions;
  customMeasurements: string;
  exception: Exception;
  id: string;
  operation: Operation;
  session: AppSession;
  timestamp: Date;
  type: InsightType;
  user: User;
}
