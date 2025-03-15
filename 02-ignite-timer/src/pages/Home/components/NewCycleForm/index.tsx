import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import {
  FormContainer,
  MinutesAmountInput,
  MinutesAmountInputWrapper,
  TaskInput,
} from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register, setValue, getValues } = useFormContext();

  function handleIncrease() {
    const currentValue = getValues("minutesAmount") || 0;
    if (currentValue < 60) {
      setValue("minutesAmount", currentValue + 1);
    }
  }

  function handleDecrease() {
    const currentValue = getValues("minutesAmount") || 0;
    if (currentValue > 1) {
      setValue("minutesAmount", currentValue - 1);
    }
  }

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="tasks"
        type="text"
        placeholder="Dê um nome para a sua tarefa"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="tasks">
        <option value="Estudar" />
        <option value="Trabalhar" />
        <option value="Exercícios" />
        <option value="Ler" />
      </datalist>

      <label htmlFor="minutesAmount">por</label>
      <MinutesAmountInputWrapper>
        <button type="button" onClick={handleDecrease} disabled={!!activeCycle}>
          <Minus size={16} />
        </button>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          min={1}
          max={60}
          disabled={!!activeCycle}
          {...register("minutesAmount", { valueAsNumber: true })}
        />
        <button type="button" onClick={handleIncrease} disabled={!!activeCycle}>
          <Plus size={16} />
        </button>
      </MinutesAmountInputWrapper>

      <span>minutos.</span>
    </FormContainer>
  );
}
