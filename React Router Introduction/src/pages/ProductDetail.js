//returns a new object and we set up the keys to the dynamic segment path identifier(s) we setup(productId)
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

    console.log(params.id)

  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
