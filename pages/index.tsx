import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";
import SubredditRow from "../components/SubredditRow";
import { GET_SUBREDDIT_WITH_LIMIT } from "../graphql/querys";

const Home: NextPage = () => {
  const { data } = useQuery(GET_SUBREDDIT_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });

  const subreddits: Subreddit[] = data?.getSubredditListLimit;
  console.log(subreddits);

  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Post box */}
      <PostBox />

      {/* Feed */}
      <div className="flex">
        <Feed />

        <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top comminities</p>
          <div>
            {subreddits?.map((s, i) => (
              <SubredditRow key={s.id} topic={s.topic} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex">{/* Feed */}</div>
    </div>
  );
};

export default Home;
