

const Dynamic = async({params}) => {
    const{id}=await params
    return (
        <div>
            <h2>id:{id}</h2>
            
        </div>
    );
};

export default Dynamic;