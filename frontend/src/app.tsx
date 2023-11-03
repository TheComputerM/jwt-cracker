import { component$, useSignal, $, Slot } from '@builder.io/qwik';

const Button = component$(() => {
  return (
    <button>
      Content: <Slot />
    </button>
  );
});

const Accordion = component$(() => {
  const isOpen = useSignal(false);
  return (
    <div>
      <h1 onClick$={() => (isOpen.value = !isOpen.value)}>
        {isOpen.value ? '▼' : '▶︎'}
      </h1>
      {isOpen.value && <Slot />}
    </div>
  );
});

export const App = component$(() => {
  const count = useSignal(0);
  const increment = $(() => count.value++);
  return (
    <>
      <button onClick$={increment}>Increment</button>
      <p>Count: {count.value}</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime deleniti culpa quam repellat consectetur molestiae minima vel odit quis veniam quae dolor rerum sapiente omnis, accusamus natus in iusto provident magnam at ab explicabo enim blanditiis fugiat? Nobis ipsa eligendi dolorum, numquam eos quis a ipsam repellendus repellat. Possimus neque placeat similique veritatis reprehenderit odio id accusamus repellat ea facere voluptates sequi provident rerum natus vel, commodi dolores amet.
      </p>
      <Button>I will kill god</Button>
      <Accordion>
        I am pre-rendered on the Server and hidden until needed.
      </Accordion>
      <p>
        Finish Project
      </p>
    </>
  );
});