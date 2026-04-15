import ClientPart from "../btnCardClicked/page";

const Page = async () => {
  const res = await fetch("http://localhost:3000/friends.json", { cache: "force-cache" });
  const allData = await res.json();

  return <ClientPart data={allData[0]} />;
};

export default Page;