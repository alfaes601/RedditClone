import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POST, GET_ALL_POST_BY_TOPIC } from "../graphql/querys";
import Post from "./Post";

type Props = {
  topic?: string;
};
function Feed({ topic }: Props) {
  console.log("Topic en Feed: " + topic);
  const { data, error } = !topic
    ? useQuery(GET_ALL_POST)
    : useQuery(GET_ALL_POST_BY_TOPIC, {
        variables: {
          topic: topic,
        },
      });
  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic;
  return (
    <div className="mt-5 space-y-4">
      {posts && (
        <>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
}

export default Feed;
