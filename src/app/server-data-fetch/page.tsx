import Link from "next/link";

const fetchListOfUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    return response.users;
  } catch (error) {
    console.error(error);
  }
};

const page = async () => {
  const users = await fetchListOfUsers();

  return (
    <div className=" flex-col flex">
      Server side fetching
      {users.map((user: any) => (
        <Link href={`/server-data-fetch/${user.id}`}>{user?.firstName}</Link>
      ))}
    </div>
  );
};

export default page;
