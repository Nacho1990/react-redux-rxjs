import { useHomeContext } from "../context/home.context";

function ComponentContext1() {
  const { setHomeContextValue } = useHomeContext();
  
  const handleClick = () => setHomeContextValue();
  const handleClick2 = () => setHomeContextValue({});
  

  return (
    <div>
      <button onClick={handleClick}>Enviar informacion por un context</button>
      <button onClick={handleClick2}>Vaciar info</button>
    </div>
  );
}
export default ComponentContext1;