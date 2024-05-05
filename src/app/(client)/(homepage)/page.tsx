import RefreshRouter from "./_components/RefreshRouter";
import Form from "@/app/(admin)/dashboard/_components/Form";
import MainSlider from "./_components/MainSlider";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { PRODUCT } from "@/models/products";

async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data: any[] = [];

  querySnapshot.forEach((doc) => data.push({ id: doc.id, data: doc.data() }));

  return data;
}

export default async function Home() {
  const products: PRODUCT[] = await getProducts();

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100 pt-12 dark:bg-black/30">
      <MainSlider />
      <div className="flex gap-3">
        <RefreshRouter />
        <Form />
      </div>

      {/* <ul className="container my-12">
        <li>
          <Table>
            <TableCaption>المنتجات</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">الاسم</TableHead>
                <TableHead className="text-center">السعر</TableHead>
                <TableHead className="text-center">النوع</TableHead>
                <TableHead className="text-center">التقييم</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell className="text-center">{product.price}</TableCell>
                  <TableCell className="text-center">{product.type}</TableCell>
                  <TableCell className="text-center">{product.rate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </li>
      </ul> */}
      {/* <Form /> */}
    </main>
  );
}
