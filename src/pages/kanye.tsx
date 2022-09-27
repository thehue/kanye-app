import { useAppDispatch, useAppSelector } from "../app/hooks";
import { load, selectKanye } from "../features/kanye/kanyeSlice";
import styled from "@emotion/styled";
import Head from "next/head";

export default function Kanye() {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector(selectKanye);

  const onClick = () => {
    dispatch(load());
  };

  return (
    <div>
      <Head>
        <title>Random Quote</title>
      </Head>
      <h2>Generate random Kanye West quote</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <p>{data.quote}</p>
      )}
      <Button disabled={isLoading} onClick={onClick}>
        Generate Kanye Quote
      </Button>
    </div>
  );
}

const Button = styled.button`
  padding: 10px;
  background: lightpink;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
`;
