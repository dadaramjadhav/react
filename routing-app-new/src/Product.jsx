import { useLocation, useSearchParams } from "react-router-dom";
const Product = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const address = searchParams.get("address");

  const location = useLocation();
  return (
    <div>
      Product: name: {name}: address: {address}
      <br />
      Location: {location.pathname}
    </div>
  );
};

export default Product;
