import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        // by default it is empty. You can null your name on github.
        default:""
    },
    profileUrl:{
        type:String,
        required:true,
    },
    avatarUrl:{
        type:String,

    },
    likedProfiles:{
        type:[String],
        default:[]
    },
    likedBy:[
        {
            username:{
                type:String,
                required:true,
            },
            avatarUrl:{
                type:String,
            },
            likedDate:{
                type:Date,
                default:Date.now
            }
        }
    ]

}, {timestamps:true});
//createdAt, updatedAt

const User = mongoose.model('User', userSchema);

export default User;