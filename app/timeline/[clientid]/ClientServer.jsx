"use client"
const ClientServer = () => {
    const handler=()=>{
        alert("click")
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