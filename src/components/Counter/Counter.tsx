import { useAppDispatch, useAppSelector } from "../../hooks";
import { decrement, increment } from "../../store/slices/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.counter);
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <button data-testid="inc-btn" onClick={onIncrement}>
        +
      </button>
      <button data-testid="dec-btn" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
