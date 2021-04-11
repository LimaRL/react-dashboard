import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionsTypes, RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          type="text"
          placeholder="Título"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input 
          type="number"
          placeholder="Valor"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <TransactionsTypes>
          <RadioBox 
            type="button"
            onClick={() => setType('deposit')}
            isChecked={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => setType('withdraw')}
            isChecked={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionsTypes>

        <input 
          type="text"
          placeholder="Categoria"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}