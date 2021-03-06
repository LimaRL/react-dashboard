import { useState } from "react";
import Modal from 'react-modal'

import { TransactionsProvider } from "./hooks/useTransactions";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

  function handleOpenNewTrasactionModal() {
    setIsNewTrasactionModalOpen(true)
  }
  
  function handleCloseNewTrasactionModal() {
    setIsNewTrasactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTrasactionModalOpen} onRequestClose={handleCloseNewTrasactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}
