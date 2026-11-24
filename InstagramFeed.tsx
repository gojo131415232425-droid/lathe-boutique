import Image from 'next/image';
import { ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import Instagram from '@/components/icons/Instagram';

export default function InstagramFeed() {
  const instaPosts = [
    {
      id: 'ig-1',
      image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80',
      caption: 'Pastel Organza magic in motion ✨ #LatheBoutique',
      likes: '1.4k'
    },
    {
      id: 'ig-2',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
      caption: 'Regal Kanjeevaram soft silk for the modern bride 👑',
      likes: '2.8k'
    },
    {
      id: 'ig-3',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
      caption: 'Bespoke custom Anarkali client diaries 🌸',
      likes: '950'
    },
    {
      id: 'ig-4',
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80',
      caption: 'Meenakari weaves in rich wine tones 🍷 #TrendingSaree',
      likes: '3.1k'
    }
  ];

  return (
    <section className="py-14 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#A67C33] font-bold">
            <Instagram className="w-4 h-4 text-[#C69D56]" />
            Instagram Trends
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#480E1E] mt-1">
            Follow @lathe_botique
          </h2>
          <p className="text-xs sm:text-sm text-[#480E1E]/70 mt-1">
            Tag us in your photos to get featured on our feed!
          </p>
          <div className="pt-2">
            <a
              href="https://www.instagram.com/lathe_botique/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#C69D56]/50 text-xs font-bold text-[#581125] hover:bg-[#581125] hover:text-[#FAF7F2] transition-all shadow-xs"
            >
              <span>View @lathe_botique on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/lathe_botique/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#F8F1E4] shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#3E0B19]/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-[#FAF7F2]">
                <div className="flex justify-end">
                  <Instagram className="w-5 h-5 text-[#E2C288]" />
                </div>
                <div>
                  <p className="text-xs line-clamp-2 font-medium">{post.caption}</p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-[#E2C288]">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-current" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> Comment
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
