import { useHomeContext } from "../context/home.context";

function ComponentContext2() {
  const { homeContextValue  } = useHomeContext();

  console.log("en cmpnt 2", homeContextValue)

  return (
    <div>El value es: {homeContextValue?.title} </div>
  )
}

export default ComponentContext2