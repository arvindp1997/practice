import "./styles.css";

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

const userInfo = <p>my name is aravind. i like to code. i like DSA</p>;

const arr = [1, 2, 3, 4, 5];

const arrsqr = arr.map(myFunction);

function myFunction(item) {
  return item * 10 + " ";
}

const printmyinfo = <h1>i am {24} years old my birth date 24th march 1997</h1>;

console.log(arrsqr);

const Show = () => {
  return <p> testing printing </p>;
};

const FunctionComponent = () => {
  return <h3> i am testinf function based component </h3>;
};

const CubeOfArr = () => {
  return arr.map((item) => item * item * item + "  ");
};

function Car(props) {
  return (
    <p>
      I have {props.brand} car which is {props.age} years old
    </p>
  );
}

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

function MissedGoal() {
  return <p>missed a goal!</p>;
}

function MadeGoal() {
  return <p>made a goal !hurray!!</p>;
}

function Goal(props) {
  const isGoal = props.goal;

  if (isGoal) return <MadeGoal />;
  else return <MissedGoal />;
}

function Garage(props) {
  const cars = props.car;

  return <p>you have {cars.length} cars in your garage</p>;
}

const a1 = [5, 4, 3, 2, 1];
const a2 = [6, 7, 8];
const a3 = [9, 10];

const resultarr = a1.concat(a2, a3);
console.log(resultarr);
resultarr.sort();
resultarr.reverse();

export default function App() {
  const cars = ["Audi", "BMW", "Tata"];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {myelement}
      {userInfo}
      {arrsqr}
      {printmyinfo}
      {arr}
      <Show />
      <FunctionComponent />
      <CubeOfArr />
      <Car brand="mercedez" age="5" />
      <Football />
      <Goal goal={false} />
      <Garage car={cars} />

      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
