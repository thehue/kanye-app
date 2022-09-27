import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/CounterSlice";
import { ChangeEvent, useState } from "react";
import styled from "@emotion/styled";
import Head from "next/head";

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setIncrementAmount(Number(value));
  };

  const onClickIncrement = () => {
    dispatch(increment());
  };

  const onClickDecrement = () => {
    dispatch(decrement());
  };

  const onClickIncrementAmount = () => {
    dispatch(incrementByAmount(incrementAmount));
  };

  return (
    <>
      <Head>
        <title>Kanye Counter</title>
      </Head>
      <div>
        <h1>Welcome to the greatest app in the world!</h1>
        <h2>The current number is {count}</h2>
        <div>
          <Input
            type="number"
            value={incrementAmount}
            onChange={onChangeInput}
          />
          <Button onClick={onClickIncrementAmount}>Increment by amount</Button>
        </div>
        <ButtonWrapper>
          <Button color={"lightgray"} onClick={onClickDecrement}>
            Decrement by 1
          </Button>
          <Button color={"lightgray"} onClick={onClickIncrement}>
            Increment by 1
          </Button>
        </ButtonWrapper>
      </div>
    </>
  );
}

const Button = styled.button<{ color?: string }>`
  padding: 10px;
  border: none;
  border-radius: 3px;
  background: ${({ color }) => color || "powderblue"};
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 3px;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 9px;
  border: 1px solid lightgray;
  border-radius: 3px;
  outline: none;

  & + ${Button} {
    margin-left: 3px;
  }

  &:focus {
    border: 1px solid powderblue;
  }
`;
