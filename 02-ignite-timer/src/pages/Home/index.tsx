import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { CyclesContext } from "../../contexts/CyclesContext";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./styles";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().nonempty("A tarefa não pode ser vazia"),
  minutesAmount: zod
    .number()
    .min(1, "O ciclo deve ter no mínimo 5 minutos")
    .max(60, "O ciclo deve ter no máximo 60 minutos"),
});

type NewCycleFormData = Zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const isSubmitButtonDisabled = !watch("task") || !watch("minutesAmount");

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitButtonDisabled} type="submit">
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
