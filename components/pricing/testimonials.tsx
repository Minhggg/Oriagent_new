import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-100 text-orange-600 hover:bg-orange-200 mb-4">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            What{" "}
            <span className="relative inline-block underline underline-offset-3 decoration-4 decoration-[#ccff00]">
              people
            </span>{" "}
            say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how AI Agents are transforming workflows and boosting productivity for users across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              As someone who was skeptical of AI tools, I'm completely converted. This has become an essential part of
              my workflow.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person6.avif" />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Neco</span>
            </div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              I was able to automate complex workflows that I thought would require custom development. The AI agent
              just gets it.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person7.avif" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Joseph</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-bold text-[#8cc63f] mb-1">40,000+</div>
            <div className="text-xs text-[#8cc63f] font-medium">Users trust Aiagent.app</div>
          </div>
          <div className="md:col-span-3 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              As a developer, I appreciate the thought that went into this product. It's robust, reliable, and
              surprisingly intelligent.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person8.avif" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Anton</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              The integration capabilities with my existing tools made adoption seamless. Every update brings new
              valuable features.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person9.avif" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Charlie</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-bold text-[#8cc63f] mb-1">57%</div>
            <div className="text-xs text-[#8cc63f] font-medium">AI resolution rate</div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              I was skeptical at first, but after using it for a week, I can't imagine working without it. Truly
              exceptional product.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person10.avif" />
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Chris</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              The AI agent has completely transformed our workflow efficiency. It handles complex tasks with remarkable
              accuracy and saves us hours every day.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person11.avif" />
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Kamil</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              Wow! Such a beautiful and intuitive solution to make AutoGPT usable for everyone. Been playing with it for
              a bit and immediately subscribed. Great job and looking forward what you'll add in the future.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person12.avif" />
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Dom</span>
            </div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              I've recommended this to everyone on my team. The ROI is immediate and the learning curve is practically
              non-existent.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person13.avif" />
                <AvatarFallback>F</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Frank</span>
            </div>
          </div>

          {/* Row 5 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              This is genuinely so cool ... I have no idea what you did on the backend of things but it is so fine-tuned
              to exactly what I was hoping it to make and it did it on the first try.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person14.avif" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Ari</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-bold text-[#8cc63f] mb-1">72%</div>
            <div className="text-xs text-[#8cc63f] font-medium">Users reporting improved productivity</div>
          </div>
          <div className="md:col-span-2 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              Incredible tool that has transformed how I handle my daily tasks. The AI agent understands exactly what I
              need and delivers consistently.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person15.avif" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Sander</span>
            </div>
          </div>

          {/* Row 6 */}
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              Finally, an AI solution that actually delivers on its promises. This has saved me countless hours on
              research and content creation.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person17.avif" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Per Magnus</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              The interface is sleek and the AI is surprisingly capable. I've tried many AI tools but this one stands
              above the rest.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person16.avif" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Phuc</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              The speed and accuracy of the AI agent is impressive. It's like having a skilled assistant available 24/7.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person18.avif" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Lucas</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border rounded-2xl bg-white">
            <p className="text-sm mb-6">
              This tool has drastically improved my productivity. What used to take hours now takes minutes. Absolutely
              worth every penny.
            </p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/person1.png" />
                <AvatarFallback>L</AvatarFallback>
              </Avatar>
              <span className="font-medium text-sm">Leo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
