import { BudgetTypeEnum } from "../../../../enums";
import { BudgetExpensesAllocationsResponse } from "../../../budget/expenses/budget-expenses-allocations.response";
import { BudgetIncomesAllocationsResponse } from "../../../budget/incomes/budget-incomes-allocations.response";

export interface TransactionBudgetAllocationsResponse {
  type: BudgetTypeEnum;

  mainBudget: BudgetIncomesAllocationsResponse | BudgetExpensesAllocationsResponse;

  previousBudget: BudgetIncomesAllocationsResponse | BudgetExpensesAllocationsResponse | null;
}
