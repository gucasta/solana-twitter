import { useWorkspace } from "@/composables";

export const updateTweet = async (tweet, topic, content) => {
  const { wallet, program } = useWorkspace();
  await program.value.methods
    .updateTweet(topic, content)
    .accounts({
      author: wallet.value.publicKey,
      tweet: tweet.publicKey,
    })
    .rpc();

  tweet.topic = topic;
  tweet.content = content;
};
