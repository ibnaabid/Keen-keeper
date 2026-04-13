// app/card-api/page.tsx   (অথবা যে পেজে রাখতে চাও)
import CardDesign from "./CardDesign";

async function getFriends() {
  const res = await fetch("http://localhost:3000/friends.json", {
  });

  if (!res.ok) {
    throw new Error("Failed to fetch friends data");
  }

  return await res.json();
}

const CardApi = async () => {
  const response = await getFriends();  

  return (
    <div className="p-8 bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
       Your Friends
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {response.map((allClient) => (
          <CardDesign 
            key={allClient.id} 
            allClient={allClient}   
          />
        ))}
      </div>
    </div>
  );
};

export default CardApi;