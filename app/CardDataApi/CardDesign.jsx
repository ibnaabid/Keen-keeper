import Image from "next/image";
import Link from "next/link";

const CardDesign = ({ allClient }) => {
  const {
    id,
    name,
    picture,
    days_since_contact,
    status,
    tags,
  } = allClient;

  const getStatusColor = (status) => {
    if (status === "overdue") return "badge-error";   
    if (status === "on-track") return "badge-success"; 
    if (status === "almost due") return "badge-warning"; 
    return "badge-neutral";
  };

  return (
<Link href={`/timeline/${id}`} className="relative card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-base-200">      <figure className="relative h-64 bg-base-200">
        <Image
          
  src={allClient?.picture}
  alt={allClient?.name}
          width={180}
          height={50}
          className="rounded-full bg-cover"
        />
      </figure>

      <div className="absolute top-4 right-4">
        <div className={`badge ${getStatusColor(status)} badge-md font-medium px-4 py-1 shadow-md`}>
          {status.toUpperCase()}
        </div>
      </div>

      <div className="card-body p-6">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-2xl text-center font-semibold leading-tight">
            {name}
          </h2>

          <div className="badge badge-neutral badge-sm font-medium">
            {days_since_contact} days
          </div>
        </div>
      </div>

      <div className="btn btn-success flex gap-3 px-5 text-center">
        {tags}
      </div>
    </Link>
  );
};

export default CardDesign;