export async function GET(request: Request): Promise<any> {
  const data = await fetch("https://e-commerce-c5320-default-rtdb.europe-west1.firebasedatabase.app/products.json").then((data) =>
    data.json()
  );
  return Response.json(data);
}
