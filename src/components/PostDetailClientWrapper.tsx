'use client';

import ReactionShareBar from "./reactionShareBar";

export default function PostDetailClientWrapper({ title }: { title: string }) {
  return <ReactionShareBar postTitle={title} />;
}