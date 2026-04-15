"use client"
import { showToast } from "nextjs-toast-notify";

const ClientServer = () => {
    const handler=()=>{
      
        showToast.success("add to page")
    }
    return (
        <div>
                <button onClick={handler} className="btn btn-soft btn-active text-2xl font-bold">Call</button>
    <button  onClick={handler}className="btn btn-soft btn-active text-2xl font-bold">Text</button>
    <button onClick={handler} className="btn btn-soft btn-active text-2xl font-bold">Video</button>
        </div>
    );
};

export default ClientServer;