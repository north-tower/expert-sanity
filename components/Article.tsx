import Link from 'next/link'
import { motion } from "framer-motion";
import { Clock, User, ArrowRight } from "lucide-react";

interface ArticleProps {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

function Article({ id, date, title, description, image }: ArticleProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-blue-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </div>

      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        {title}
      </h2>

      <p className="text-gray-600 mb-6 line-clamp-3">
        {description}
      </p>

      <Link
        href={`/post/${id}`}
        className="inline-flex items-center gap-2 text-blue-600 font-medium group/link"
      >
        <span className="relative">
          Read More
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform"></span>
        </span>
        <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-bl-[100px] -z-10"></div>
    </motion.article>
  );
}

export default Article;