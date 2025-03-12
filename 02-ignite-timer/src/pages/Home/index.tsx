import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="tasks"
            type="text"
            placeholder="Dê um nome para a sua tarefa"
          />

          <datalist id="tasks">
            <option value="Estudar" />
            <option value="Trabalhar" />
            <option value="Exercícios" />
            <option value="Ler" />
          </datalist>

          <label htmlFor="minutesAmount">por</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
