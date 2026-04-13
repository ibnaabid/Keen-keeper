
import Image from "next/image";
import Link from "next/link";

const CardDesign = ({ allClient }) => {
  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date
  } = allClient;

  const statusColor = 
    status === "overdue" ? "badge-error" :
    status === "almost due" ? "badge-warning" : 
    "badge-success";

  return (
    <Link href={`/blogs/${id}`} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-base-200">
      
      <figure className="relative h-64 bg-base-200">
        <Image
              
          src={picture}
          alt={name}
          width={180}
          height={50}
        className="rounded-full bg-cover"
        >

        </Image>
        
      </figure>
<div className="absolute top-4 right-4">
          <div className={`badge ${statusColor} badge-md font-medium px-4 py-1 shadow-md`}>
            {status.toUpperCase()}
          </div>
        </div>
      <div className="card-body p-6">
      
        <div className="flex justify-between items-center ">
          <h2 className="card-title text-2xl text-center font-semibold leading-tight">
            {name}
          </h2>
 <div className="badge badge-neutral badge-sm font-medium">
            {days_since_contact} days
          </div>
         
          
        </div>
      </div>
      <div className="btn btn-success flex gap-3 px-5 text-center"
      >{tags}</div>
    </Link>
  );
};

export default CardDesign;