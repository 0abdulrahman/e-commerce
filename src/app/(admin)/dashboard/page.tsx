import RefreshRouter from "@/app/(client)/(homepage)/_components/RefreshRouter";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import Form from "./_components/Form";

export default async function Page() {
  const data = await fetch("https://e-commerce-c5320-default-rtdb.europe-west1.firebasedatabase.app/products.json", {
    next: { tags: ["x"] },
  })
    .then((data) => data.json())
    .then((data) => Object.keys(data).map((k) => data[k]));

  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-100 pt-12 dark:bg-black/30">
      <div className="flex gap-3">
        <RefreshRouter />
        <Form />
      </div>

      <ul className="container my-12">
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
      </ul>
    </main>
  );
}
