export enum BankAccountTransactionTypeEnum {
  TRANSFER = "TRANSFER", // Transfer
  ORDER = "ORDER", // Order
  CHECK = "CHECK", // Check
  DEPOSIT = "DEPOSIT", // Mandatory/voluntary deposits, contributions, money transfers
  PAYBACK = "PAYBACK", // Payback
  WITHDRAWAL = "WITHDRAWAL", // Withdrawal
  LOAN_REPAYMENT = "LOAN_REPAYMENT", // Loan payment
  BANK = "BANK", // Bank fees
  CARD = "CARD", // Card operation
  DEFERRED_CARD = "DEFERRED_CARD", // Deferred card operation
  SUMMARY_CARD = "SUMMARY_CARD", // Monthly debit of a deferred card
  UNKNOWN = "UNKNOWN", //Unknown transaction type
  MARKET_ORDER = "MARKET_ORDER", // Market order
  MARKET_FEE = "MARKET_FEE", // Fees regarding a market order
  ARBITRAGE = "ARBITRAGE", // Arbitrage
  PROFIT = "PROFIT", // Positive earnings from interests/coupons/dividends
}
