import { useParams } from "react-router-dom";
const Services = () => {
  const { id } = useParams();
  return <div>Services: {id}</div>;
};
export default Services;
