// app/page.jsx  (বা route page)

import ClientPart from "./ClientPart";

const Page = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const allData = await res.json();

  const data = allData[0]; 

  return (
    <div>
      <ClientPart data={data} />
    </div>
  );
};

export default Page;