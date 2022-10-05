import Head from "next/head";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  speak,
} from "../redux/counter";
import useSWR from "swr";

import Shoes from "./shoes";
import Hero from "./hero";
import News from "./news";
const Home = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("api/items.json", fetcher);
  console.log("logg data: ", data);

  return (
    <div className="container mx-auto min-w-full">
      <Head>
        <title>Løpesjappa 🏃</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <main className="container mx-auto text-center">
        <div className="App text-gray-100">
          <h1> The count is: {count}</h1>
          <button
            className="m-2 p-2 bg-gray-400"
            onClick={() => dispatch(increment())}
          >
            increment
          </button>
          <button
            className="m-2 p-2 bg-gray-400"
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
          <button
            className="m-2 p-2 bg-gray-400"
            onClick={() => dispatch(incrementByAmount(33))}
          >
            Increment by 33
          </button>
          <button
            className="m-2 p-2 bg-gray-400"
            onClick={() => dispatch(speak())}
          >
            Speak to console
          </button>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
