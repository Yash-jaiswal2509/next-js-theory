const page = ({ params }: { params: string }) => {
  console.log(params);
  return (
    <div>
      Showing you slug behaviour of routing with the help of spread operator
    </div>
  );
};

export default page;
