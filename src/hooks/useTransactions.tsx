import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface SumaryProps {
  deposits: number;
  withdraws: number;
  total: number;
}

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TranscationsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  sumary: SumaryProps;
}

const TrasnactionsContext = createContext<TranscationsContextData>({} as TranscationsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const [sumary, setSumary] = useState<SumaryProps>({} as SumaryProps)
  
  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, [])

  useEffect(() => {
    const result = transactions.reduce((accumulator, transaction) => {
      if(transaction.type === 'deposit') {
        accumulator.deposits += transaction.amount
        accumulator.total += transaction.amount
      } else {
        accumulator.withdraws += transaction.amount
        accumulator.total -= transaction.amount
      }

      return accumulator
    }, {
      deposits: 0,
      withdraws: 0,
      total: 0,
    });

    setSumary(result)

  }, [transactions])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', transactionInput)
    const { transaction } = response.data;
    setTransactions([ ...transactions, transaction])
  }

  return(
    <TrasnactionsContext.Provider 
      value={{ 
        transactions, 
        createTransaction,
        sumary,
      }}
    >
      {children}
    </TrasnactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TrasnactionsContext);
  return context;
}