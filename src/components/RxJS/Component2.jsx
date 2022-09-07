import { useState } from "react";
import { useEffect } from "react"
import { sharingInformationService } from "../../services/sharing-information.service"

const Component2 = () => {

  const [count, setCount] = useState(0)

  const subscription$ = sharingInformationService.getSubject();
  useEffect(() => {
    subscription$.subscribe((data) => {
      console.log(data)
      if(data){
        setCount(count + 1)
      } else setCount(count - 1)
    })
  })


  return (
    <div>{count}</div>
  )
}

export default Component2