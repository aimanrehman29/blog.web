import React from 'react'
import BlogCard from './BlogCard'

const Mega = () => {
    const posts=[
        {
          "id": "1",
          "title": "The Art of Mindful Living",
          "description": "Mindful living is about embracing the present moment fully. By focusing on the here and now, we can reduce stress and increase happiness. Practicing mindfulness involves meditation, deep breathing, and gratitude exercises.\n\nIncorporating mindfulness into daily routines, such as eating or walking, can transform mundane activities into meaningful experiences. This shift in perspective encourages a deeper appreciation for life and a greater sense of balance.",
          "date": "2023-12-01",
          "imageUrl": "/images/image copy 2.png"
        },
        {
          "id": "2",
          "title": "Exploring the Future of AI",
          "description": "Artificial Intelligence is revolutionizing industries across the globe. From healthcare to finance, AI-driven tools are enhancing efficiency and decision-making. Technologies like machine learning and natural language processing are at the forefront of this evolution.\n\nDespite its benefits, AI raises ethical concerns such as job displacement and data privacy. Striking a balance between innovation and responsibility will shape the trajectory of AI in the years to come.",
          "date": "2023-11-20",
          "imageUrl": "/images/image copy 3.png"
        },
        {
          "id": "3",
          "title": "10 Tips for a Healthy Lifestyle",
          "description": "A healthy lifestyle involves a combination of regular exercise, a balanced diet, and sufficient sleep. Drinking water, avoiding processed foods, and staying active are foundational practices for maintaining good health.\n\nAdditionally, mental health is equally important. Activities like yoga, journaling, or simply spending time in nature can boost emotional well-being. Small, consistent efforts lead to sustainable habits over time.",
          "date": "2023-11-15",
          "imageUrl": "/images/image copy 4.png"
        },
        {
          "id": "4",
          "title": "Top Travel Destinations for 2024",
          "description": "As travel rebounds, new destinations are capturing the hearts of adventurers. Locations like Kyoto, Japan, with its serene temples, and Patagonia, Chile, with its rugged landscapes, are must-visit spots for the upcoming year.\n\nAdditionally, eco-tourism is on the rise. Travelers are seeking sustainable adventures, such as exploring the Amazon rainforest or the Norwegian fjords. These destinations promise breathtaking experiences while preserving the planet.",
          "date": "2023-12-10",
          "imageUrl": "/images/image copy 6.png"
        },
        {
          "id": "5",
          "title": "The Evolution of Web Development",
          "description": "Web development has undergone significant changes, from static HTML pages to dynamic, interactive applications. Modern frameworks like React and Next.js simplify the development process, enabling developers to build robust solutions quickly.\n\nThe future of web development includes advancements in serverless architecture, AI integration, and Web3 technologies. Staying ahead in this field requires continuous learning and adapting to emerging trends.",
          "date": "2023-11-30",
          "imageUrl": "/images/image copy 11.png"
        },
         {
              "id": "6",
              "title": "Meditation for Beginners",
              "description": "Meditation is a powerful tool for improving mental clarity and emotional well-being. Beginners often struggle with focus, but short, guided meditations can help.\n\nStart by setting aside 5–10 minutes daily, focusing on your breath, and letting go of distractions. Over time, meditation can enhance your mindfulness and reduce stress levels.",
              "date": "2023-12-05",
              "imageUrl": "/images/image copy 5.png"
            },
            {
              "id": "7",
              "title": "5G Technology: What You Need to Know",
              "description": "5G is more than just faster internet; it’s set to transform industries. With ultra-low latency and high-speed connectivity, 5G enables innovations in autonomous vehicles, IoT devices, and smart cities.\n\nHowever, the rollout of 5G also raises concerns about infrastructure costs and cybersecurity challenges. Understanding these trade-offs is key to embracing this new era of connectivity.",
              "date": "2023-11-28",
              "imageUrl": "/images/image copy 12.png"
            },
            {
              "id": "8",
              "title": "How to Build a Capsule Wardrobe",
              "description": "A capsule wardrobe simplifies your closet and enhances your style. Start by choosing versatile basics that match multiple outfits, such as neutral-colored tops, jeans, and jackets.\n\nNot only does this approach save time and money, but it also promotes sustainability by reducing unnecessary clothing purchases. Focus on quality over quantity.",
              "date": "2023-11-22",
              "imageUrl": "/images/image copy 7.png"
            },
            {
              "id": "9",
              "title": "Discovering Iceland: A Winter Wonderland",
              "description": "Icelands stunning glaciers, geysers, and the northern lights make it a dream destination for adventurers. Winter offers unique experiences, such as glacier hikes and ice cave tours.\n\nDon't miss out on Reykjavik’s cozy cafes and the Blue Lagoon’s thermal spas. Iceland is a perfect mix of natural beauty and modern comforts.",
              "date": "2023-12-12",
              "imageUrl": "/images/image copy 13.png"
            },
            {
              "id": "10",
              "title": "Mastering Git and GitHub for Developers",
              "description": "Version control is essential for modern software development. Git and GitHub allow teams to collaborate effectively by managing code changes and tracking versions.\n\nFrom branching strategies to resolving merge conflicts, mastering these tools will streamline your workflow and improve project management.",
              "date": "2023-12-08",
              "imageUrl": "/images/image copy 8.png"
            },
            {
              "id": "11",
              "title": "Mindful Eating: A Healthier Relationship with Food",
              "description": "Mindful eating encourages savoring each bite and listening to your body’s hunger cues. It helps prevent overeating and promotes better digestion.\n\nPractices such as eating without distractions and appreciating the flavors of your meal can turn every dining experience into a mindful moment.",
              "date": "2023-12-15",
              "imageUrl": "/images/image copy 14.png"
            },
            {
              "id": "12",
              "title": "Quantum Computing: The Next Frontier",
              "description": "Quantum computing has the potential to solve complex problems that are beyond the capabilities of classical computers. Fields like cryptography, material science, and machine learning could be revolutionized.\n\nWhile still in its early stages, quantum computing presents exciting opportunities and challenges for developers and researchers alike.",
              "date": "2023-12-20",
              "imageUrl": "/images/image copy 9.png"
            },
            {
              "id": "13",
              "title": "Sustainable Travel Tips for 2024",
              "description": "Traveling sustainably means minimizing your environmental impact while exploring new destinations. Choose eco-friendly accommodations, reduce single-use plastics, and support local businesses.\n\nConsider alternative modes of transport, like trains or buses, to cut down on carbon emissions. Every small effort counts toward preserving our planet.",
              "date": "2023-12-25",
              "imageUrl": "/images/image copy 15.png"
            },
            {
              "id": "14",
              "title": "The Role of AI in Personalized Learning",
              "description": "AI is transforming education by offering personalized learning experiences. Adaptive learning platforms analyze a students progress and tailor content to their needs.\n\nFrom automated grading to virtual tutors, AI is making education more accessible and effective for learners worldwide.",
              "date": "2023-12-18",
              "imageUrl": "/images/image copy 10.png"
            },
           
          ]
          
      
      
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-black mt-20 '>Explore Insights: Mindfulness, Technology, Lifestyle, Travel, and Development
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:p-0 lg:p-20">
  {posts.map((post, index) => (
    <div className="fade-in" key={post.id}>
      <BlogCard post={post} isDarkBackground={index % 2 === 0} />
    </div>
  ))}
</div>

    </div>
  )
}

export default Mega
