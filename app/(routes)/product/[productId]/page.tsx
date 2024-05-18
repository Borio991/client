import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/Gallery';
import Info from '@/components/Info';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

interface Props {
  params: {
    productId: string;
  };
}

const ProductPage = async ({ params }: Props) => {
  const product = await getProduct(params.productId);
  const SuggestedProducts = await getProducts({ categoryId: product?.category?.id });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 lg:items-start lg:gap-x-4">
            <Gallery images={product.images} />
            <div className="mt-10 px-0 sm:px-0 sm:mt-16 lg:mt-0">
              <Info product={product} />
            </div>
          </div>
          <hr className="mt-10" />
          <ProductList items={SuggestedProducts} title="You may also like" />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
