import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

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
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
