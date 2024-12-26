export const getTweets = (req, res) => {
  return res.json({
    msg: "Welcome to the tweet route version1",
  });
};

export const getTweetId=(req,res)=>{
  return res.json({
    msg:`Welcome to the tweet route version1 with id ${req.params.id}`
  })
}

export const getComment = (req, res) => {
  return res.json({
    comment: "What a comments man on your posts",
  });
};


export const createTweets=(req,res)=>{
  return res.json({
    msg:"Tweet created successfully",
    body:req.body
  })
}