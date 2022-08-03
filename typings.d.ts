type Comment = {
  created_at: string
  id: number
  post_id: number
  text: string
  username: string
};

type Subreddit = {
  created_at: string
  id: number
  topic: string
};

type Vote = {
  created_at: string
  id: number
  post_id: number
  upvote: boolean
  username: string
};

type Post = {
  id: number
  body: string
  image: string
  subreddit_id: number
  created_at: string
  title: string
  username: string
  votes: Vote[]
  comments: Comment[]
  subreddit: Subreddit[]
};
