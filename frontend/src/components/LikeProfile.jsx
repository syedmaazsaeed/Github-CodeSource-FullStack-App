import { FaHeart } from "react-icons/fa";

const LikeProfile = () => {

    const handleLikeProfile = async () => {

        // Send Request to our EndPoint 
        
        

    };
    
    return (
       <button className="p-2 text-xs w-full font-medium rounded-md bg-glass border border-blue-400 flex items-center gap-2"
       
       onClick={handleLikeProfile}

       >
       <FaHeart size={16}/> Liked Profile   
       </button>
    )

}
export default LikeProfile;
