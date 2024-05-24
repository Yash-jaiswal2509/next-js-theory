const fetchUserDetail = async (id: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/user/${id}`).then(
      (res) => res.json()
    );
    return response;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

const page = async ({ params }: { params: { details: string } }) => {
  const user = await fetchUserDetail(params?.details);

  return (
    <div>
      This is user details page
      <ul>
        <li>{user?.firstName}</li>
        <li>{user?.lastName}</li>
        <li>{user?.age}</li>
        <li>{user?.birthDate}</li>
      </ul>
    </div>
  );
};

export default page;
