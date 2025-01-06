import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({
  post,
  isDarkBackground,
}: BlogCardProps) {
  return (
    
    <Card
      className={`p-4 transition-transform transform hover:scale-105 hover:shadow-2xl ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center rounded-t-lg transition-opacity">
          <a
            href={`/posts/${post.id}`}
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500"
          >
            Read More
          </a>
        </div>
      </div>
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
      </div>
    </Card>
  );
}
