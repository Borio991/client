import getBillboards from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container';

async function Home() {
  const billboard = await getBillboards('a24c418b-0e4f-4453-bc3f-28807f1ed236');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container className="mb-2 md:mb-6">
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
      </div>
      <div className="flex fex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}

export default Home;
