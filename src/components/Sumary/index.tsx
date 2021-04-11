import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles';

export function Sumary() {
  const { sumary } = useTransactions()
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(sumary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(sumary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  )
}