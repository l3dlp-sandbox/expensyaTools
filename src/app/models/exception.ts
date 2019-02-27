export interface Exception {
  assembly: string;
  handledAt: string;
  innermostAssembly: string;
  innermostMessage: string;
  innermostMethod: string;
  innermostType: string;
  message: string;
  method: string;
  outerAssembly: string;
  outerMessage: string;
  outerMethod: string;
  outerType: string;
  problemId: string;
  severityLevel: number;
  type: string;
}
