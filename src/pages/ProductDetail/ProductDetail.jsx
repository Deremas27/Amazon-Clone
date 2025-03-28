import axios from "axios";
import React, { useEffect, useState } from "react";
import { productUrl } from "../../Api/endPoint";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/Product/ProductCard";
import LayOut from "../../components/LayOut/LayOut";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        let request = await axios.get(`${productUrl}/products/${productId}`);
        setProducts(request.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <LayOut>
        {isLoading ? (
          <Loader />
        ) : (
          <ProductCard
            product={products}
            flex={true}
            renderDisc={true}
            renderAdd={true}
          />
        )}
      </LayOut>
    </>
  );
}

export default ProductDetail;
