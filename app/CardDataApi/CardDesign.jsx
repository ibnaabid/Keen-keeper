

const CardDesign = ({allClient}) => {
    const{bio,id,name,picture,email,status,tags,goal,next_due_date,days_since_contact}=allClient;

    return (
        <div>
            <h2>{allClient.bio}</h2>
        </div>
    );
};

export default CardDesign;