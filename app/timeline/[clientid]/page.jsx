import Image from "next/image";
import ClientServer from "./ClientServer";

const DynamicCard = async ({ params }) => {
  const { clientid } = await params;

  const res = await fetch("http://localhost:3000/friends.json");

  const allData = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = allData.find((item) => item.id == Number(clientid));

  if (!data) {
    return <h2>No Data Found</h2>;
  }

  return (
<div className="max-w-5xl mx-auto mb-12 mt-10 flex gap-8">

  {/* LEFT SIDE */}
  <div className="bg-white shadow-lg p-6 rounded-xl w-1/2">
    <div className="flex flex-col items-center gap-4">
      <Image
        src={data.picture}
        alt={data.name}
        width={120}
        height={120}
        className="rounded-full"
      />

      <h2 className="text-2xl font-bold">{data.name}</h2>

      <div className="badge badge-info">
        {data.days_since_contact} days
      </div>

      <div className="badge badge-success">
        {data.status}
      </div>

      <p className="text-center text-gray-400 mt-4">{data.bio}</p>

      <p className="text-gray-500 font-bold">{data.email}</p>
      
    </div>
       {/* Buttons */}
    <div className="flex flex-col gap-3 mt-4">
      <button className="btn btn-warning">Snooze 2 weeks</button>
      <button className="btn btn-neutral">Archive</button>
      <button className="btn btn-error">Delete</button>
    </div>
  </div>
  

  {/* RIGHT SIDE */}
  <div className="bg-white shadow-lg p-6 rounded-xl w-1/2 flex flex-col gap-4">

    <h2 className="text-xl font-semibold">Details</h2>

    <div className="p-3 bg-gray-100 rounded">
      <strong>Goal:</strong> {data.goal}
    </div>

    <div className="p-3 bg-gray-100 rounded">
      <strong>Next Date:</strong> {data.next_due_date}
    </div>

    <div className="p-3 bg-gray-100 rounded">
      <strong>Tags:</strong> {data.tags}
    </div>

 <div className="mt-10 flex gap-5 px-3 py-5">
<ClientServer data={data}></ClientServer>
 </div>

  </div>

</div>
  );
};

export default DynamicCard;