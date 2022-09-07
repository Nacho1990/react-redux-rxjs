import { useHomeContext } from "../context/home.context";

function ComponentContext2() {
  const { homeContextValue  } = useHomeContext();

  console.log(homeContextValue)

  return (
    <div>El value es: {homeContextValue.title} </div>
  )
}

export default ComponentContext2