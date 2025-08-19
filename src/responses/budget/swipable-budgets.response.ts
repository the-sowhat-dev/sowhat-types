import { SwipableBudgetResponse } from "./swipable-budget.response";

export interface SwipableBudgetsResponse {
  previousBudget: SwipableBudgetResponse | null;
  currentBudget: SwipableBudgetResponse | null;
  nextBudget: SwipableBudgetResponse | null;
}
