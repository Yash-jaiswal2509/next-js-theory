"use client";

import { useEffect, useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUSers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users").then((res) =>
        res.json()
      );

      if (response?.users) {
        setUsers(response.users);
        setLoading(false);
      }
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };

  useEffect(() => {
    fetchUSers();
  }, []);

  return (
    <div>
      Client Side fetching
      <div>
        {users?.map((user: any) => (
          <div key={user.id}>
            <p>{user.firstName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
