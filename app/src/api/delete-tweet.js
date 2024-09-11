import { useWorkspace } from "@/composables";

export const deleteTweet = async (tweet) => {
  const { wallet, program } = useWorkspace();
  await program.value.methods
    .deleteTweet()
    .accounts({
      author: wallet.value.publicKey,
      tweet: tweet.publicKey,
    })
    .rpc();
};
