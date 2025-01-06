"use client";
import AuthorCard from "@/components/AuthoreCard";
import CommentSection from "@/components/CommentSection";
import Image from "next/image";
import React from "react";
const posts = [
  {
    id: "1",
    title: "The Art of Mindful Living",
    description:
      "Mindful living is about embracing the present moment fully. By focusing on the here and now, we can reduce stress and increase happiness. Practicing mindfulness involves meditation, deep breathing, and gratitude exercises.\n\nIncorporating mindfulness into daily routines, such as eating or walking, can transform mundane activities into meaningful experiences. This shift in perspective encourages a deeper appreciation for life and a greater sense of balance.",

    imageUrl: "/images/image copy 2.png",
  },
  {
    id: "2",
    title: "Exploring the Future of AI",
    description:
      "Artificial Intelligence is revolutionizing industries across the globe. From healthcare to finance, AI-driven tools are enhancing efficiency and decision-making. Technologies like machine learning and natural language processing are at the forefront of this evolution.\n\nDespite its benefits, AI raises ethical concerns such as job displacement and data privacy. Striking a balance between innovation and responsibility will shape the trajectory of AI in the years to come.",

    imageUrl: "/images/image copy 3.png",
  },
  {
    id: "3",
    title: "10 Tips for a Healthy Lifestyle",
    description:
      "A healthy lifestyle involves a combination of regular exercise, a balanced diet, and sufficient sleep. Drinking water, avoiding processed foods, and staying active are foundational practices for maintaining good health.\n\nAdditionally, mental health is equally important. Activities like yoga, journaling, or simply spending time in nature can boost emotional well-being. Small, consistent efforts lead to sustainable habits over time.",

    imageUrl: "/images/image copy 4.png",
  },
  {
    id: "4",
    title: "Top Travel Destinations for 2024",
    description:
      "As travel rebounds, new destinations are capturing the hearts of adventurers. Locations like Kyoto, Japan, with its serene temples, and Patagonia, Chile, with its rugged landscapes, are must-visit spots for the upcoming year.\n\nAdditionally, eco-tourism is on the rise. Travelers are seeking sustainable adventures, such as exploring the Amazon rainforest or the Norwegian fjords. These destinations promise breathtaking experiences while preserving the planet.",

    imageUrl: "/images/image copy 6.png",
  },
  {
    id: "5",
    title: "The Evolution of Web Development",
    description:
      "Web development has undergone significant changes, from static HTML pages to dynamic, interactive applications. Modern frameworks like React and Next.js simplify the development process, enabling developers to build robust solutions quickly.\n\nThe future of web development includes advancements in serverless architecture, AI integration, and Web3 technologies. Staying ahead in this field requires continuous learning and adapting to emerging trends.",

    imageUrl: "/images/image copy 11.png",
  },
  {
    id: "6",
    title: "Meditation for Beginners",
    description:
      "Meditation is a powerful tool for improving mental clarity and emotional well-being. Beginners often struggle with focus, but short, guided meditations can help.\n\nStart by setting aside 5–10 minutes daily, focusing on your breath, and letting go of distractions. Over time, meditation can enhance your mindfulness and reduce stress levels.",

    imageUrl: "/images/image copy 5.png",
  },
  {
    id: "7",
    title: "5G Technology: What You Need to Know",
    description:
      "5G is more than just faster internet; it’s set to transform industries. With ultra-low latency and high-speed connectivity, 5G enables innovations in autonomous vehicles, IoT devices, and smart cities.\n\nHowever, the rollout of 5G also raises concerns about infrastructure costs and cybersecurity challenges. Understanding these trade-offs is key to embracing this new era of connectivity.",

    imageUrl: "/images/image copy 12.png",
  },
  {
    id: "8",
    title: "How to Build a Capsule Wardrobe",
    description:
      "A capsule wardrobe simplifies your closet and enhances your style. Start by choosing versatile basics that match multiple outfits, such as neutral-colored tops, jeans, and jackets.\n\nNot only does this approach save time and money, but it also promotes sustainability by reducing unnecessary clothing purchases. Focus on quality over quantity.",

    imageUrl: "/images/image copy 7.png",
  },
  {
    id: "9",
    title: "Discovering Iceland: A Winter Wonderland",
    description:
      "Icelands stunning glaciers, geysers, and the northern lights make it a dream destination for adventurers. Winter offers unique experiences, such as glacier hikes and ice cave tours.\n\nDon't miss out on Reykjavik’s cozy cafes and the Blue Lagoon’s thermal spas. Iceland is a perfect mix of natural beauty and modern comforts.",

    imageUrl: "/images/image copy 13.png",
  },
  {
    id: "10",
    title: "Mastering Git and GitHub for Developers",
    description:
      "Version control is essential for modern software development. Git and GitHub allow teams to collaborate effectively by managing code changes and tracking versions.\n\nFrom branching strategies to resolving merge conflicts, mastering these tools will streamline your workflow and improve project management.",

    imageUrl: "/images/image copy 8.png",
  },
  {
    id: "11",
    title: "Mindful Eating: A Healthier Relationship with Food",
    description:
      "Mindful eating encourages savoring each bite and listening to your body’s hunger cues. It helps prevent overeating and promotes better digestion.\n\nPractices such as eating without distractions and appreciating the flavors of your meal can turn every dining experience into a mindful moment.",

    imageUrl: "/images/image copy 14.png",
  },
  {
    id: "12",
    title: "Quantum Computing: The Next Frontier",
    description:
      "Quantum computing has the potential to solve complex problems that are beyond the capabilities of classical computers. Fields like cryptography, material science, and machine learning could be revolutionized.\n\nWhile still in its early stages, quantum computing presents exciting opportunities and challenges for developers and researchers alike.",

    imageUrl: "/images/image copy 9.png",
  },
  {
    id: "13",
    title: "Sustainable Travel Tips for 2024",
    description:
      "Traveling sustainably means minimizing your environmental impact while exploring new destinations. Choose eco-friendly accommodations, reduce single-use plastics, and support local businesses.\n\nConsider alternative modes of transport, like trains or buses, to cut down on carbon emissions. Every small effort counts toward preserving our planet.",

    imageUrl: "/images/image copy 15.png",
  },
  {
    id: "14",
    title: "The Role of AI in Personalized Learning",
    description:
      "AI is transforming education by offering personalized learning experiences. Adaptive learning platforms analyze a students progress and tailor content to their needs.\n\nFrom automated grading to virtual tutors, AI is making education more accessible and effective for learners worldwide.",

    imageUrl: "/images/image copy 10.png",
  },
];

export default function Post({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap params using `React.use`
  const { id } = React.use(params);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="mt-4 text-3xl font-bold text-gray-900 text-center">
        {post.title}
      </h1>
      <div className="flex justify-center">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={600}
            height={400}
            className="w-[500px] h-auto rounded-md mt-10"
          />
        )}
      </div>

      <div className="mt-6 text-lg text-slate-700 px-10">
        {renderParagraphs(post.description)}
      </div>
      <div className="p-10">
        <CommentSection postId={post.id} />
        
      </div>
      <div><AuthorCard /></div>

    </div>
  );
}
