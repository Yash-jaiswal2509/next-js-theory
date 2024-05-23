const page = ({
  params,
  searchParams,
}: {
  params: string;
  searchParams: string;
}) => {
  console.log(params);
console.log(searchParams);

  return <div>Product Details</div>;
};

export default page;
