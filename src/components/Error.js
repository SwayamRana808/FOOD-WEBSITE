 import { useRouteError } from "react-router-dom"
 const Error = () => {
    const err=useRouteError()
    console.log(err)
  return (
    <div><h1 className="text-white">OPPS!!</h1><h2>Error :{err.status}</h2></div>
  )
}

export default Error