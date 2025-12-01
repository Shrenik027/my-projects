const App = () => {
  // ! Example1: Basic jsx with variables

  const name = "React Learner";
  const greeting = "Welcome to JSX";

  // !Example 2:Jasx with Expressions
  const num1 = 10;
  const num2 = 5;

  // !Example 3:Jsx with conditional rendering
  const isLoggedIn = true;

  // !Example 4:Jsx with lists
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <h1>JSX Examples</h1>
      {/*Example1:basic jsx*/}
      <section>
        <h2>1.Basic jsx with variables</h2>
        {greeting},{name}
      </section>

      <section>
        <h2>2.jsx with expressions</h2>
        {num1} + {num2} = {num1 + num2}
      </section>

      <section>
        <h2>3.JSX with contitional rendering</h2>
        <p>
          {isLoggedIn ? <span>Welcome back!</span> : <span>Please Login!</span>}{" "}
        </p>
      </section>

      <section>
        <h2>3.JSX with Lists</h2>
        <ul>
          {fruits.map((fruit, index) => {
            return <li key={index}>{fruit}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};
export default App;
