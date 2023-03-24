const router = require("express").Router();
const Post = require("./model1");



router.post("/", async(req,res) => {
    const newPost = new Post(req.body);
    try{
        const savePost =  await newPost.save();
        res.status(200).json(savePost)

    }catch(err){
        res.status(500).json(err)

    }
})
router.get("/",async (req,res) => {
    try{
        const user = await Post.find(req.params.id)
        res.status(200).json(user)

    }catch(err){
        res.status(500).json(err)

    }
})


router.get("/:id",async (req,res) => {
    try{
        const user = await Post.findById(req.params.id)
        res.status(200).json(user)

    }catch(err){
        res.status(500).json(err)

    }
})

router.put("/:id", async(req,res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt)
        }
        try{
            const updatedUser = await Post.findByIdAndUpdate(req.params.id, {
                $set : req.body
            },{new:true});
            res.status(200).json(updatedUser)
        

        }catch(err){
            res.status(500).json(err)
    
        }
    }else{
        res.status(401).json("You can update only your account")
    }
})

// delete

router.delete("/:id", async(req,res) => {
    if(req.body.userId === req.params.id){
        try{
            const user = await Post.findById(req.params.id);
            try{
                await Post.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been Deleted..")
            
    
            }catch(err){
                res.status(500).json(err)
        
            }
    

        }catch(err){
            res.status(404).json("User not Found")

        }
        
    }else{
        res.status(401).json("You can Delete only your account")
    }
})


module.exports= router;