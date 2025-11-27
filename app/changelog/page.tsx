import {
  Search,
  Share,
  Copy,
  MoreHorizontal,
  ArrowUpRight,
  LinkIcon,
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function ChangeLogPage() {
  return (
    <div className="min-h-screen bg-white text-[#37352f]">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 flex h-10 items-center justify-between bg-white px-3 backdrop-blur-sm transition-all">

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
        </div>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
                <Share className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl">Share site</DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 pb-4 pt-3 ">
                <div className="rounded-xl border bg-muted/20 p-4">
                  
                  <div className="aspect-[2/1] relative bg-black rounded-xl overflow-hidden mb-2">
                    <Image
                      src="/astronaut2.jpg"
                      alt="Preview"
                      width={400}
                      height={200}
                      className="object-cover opacity-80"
                    />
                  </div>
                  
                  
                </div>

                <div className="flex items-center gap-2">
                  <Input readOnly value="https://oriagent.com/changelog" className="flex-1 bg-muted/10" />
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Copy URL
                  </Button>
                </div>

                <div className="flex justify-center gap-2 pt-2">
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 bg-transparent">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
            <Copy className="h-4 w-4" />
            <span className="sr-only">Duplicate</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted/90">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <ArrowUpRight className="mr-2 h-4 w-4" />
                View original page
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:text-red-600">Report page</DropdownMenuItem>
              <DropdownMenuItem>Cookie settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="ml-2 h-4 w-[1px] bg-border" />

          <Button
            variant="ghost"
            className="ml-2 h-8 gap-1.5 px-2 text-xs font-medium text-muted-foreground hover:bg-muted/50 border border-transparent hover:border-border"
          >
            Made with
            <span className="flex h-4 w-4 items-center justify-center rounded-[2px] bg-black text-[10px] font-bold text-white">
              N
            </span>
          </Button>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-[30vh] w-full bg-black overflow-hidden group">
        <Image
          src="/astronaut.jpg"
          alt="Cover"
          fill
          className="object-cover object-left opacity-90 "
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
      </div>

      {/* Main Content */}
      <main className="relative mx-auto max-w-3xl px-4 pb-24 sm:px-12 lg:px-24">
        {/* Page Icon */}
        <div className="relative -mt-9 mb-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-md text-foreground/80 transition-transform hover:scale-105">
            <ArrowUpRight className="h-16 w-16 font-extrabold text-gray-800" strokeWidth={1.5} />
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-12 space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-[#37352f] sm:text-5xl">Change log</h1>
          <div className="space-y-4 text-lg text-[#37352f]/80">
            <p className="leading-relaxed">
              We'll do our best to keep you updated on all that is happening behind the scene. Looking forward to taking you along the journey.
            </p>
            <Link
              href="#"
              className="inline-block text-muted-foreground hover:text-foreground hover:underline decoration-muted-foreground/50 underline-offset-4"
            >
              @aiagent_app
            </Link>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-16 border-l border-border/40 pl-8 ml-2 relative">
          
          {/* Entry 1: Flows */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@July 8, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">Flows are live</h2>
            </div>

            <div className="space-y-6">
              <p className="text-[#37352f]/80 leading-relaxed">
                Visually build multi-step workflows by dragging and connecting agents, tools, and tasks. From simple sequences to complex logic—Flows let you orchestrate everything in one interactive canvas.
              </p>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog1.webp" 
                  alt="changelog1"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 2: Teams */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@June 28, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">Teams are live</h2>
            </div>

            <div className="space-y-6">
              <p className="text-[#37352f]/80 leading-relaxed">
                Introducing Teams: combine multiple AI agents into coordinated units that pass information and execute complex, multi-step workflows together. Your AI just became collaborative.
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-[#37352f]/80 leading-relaxed">
                  <li><strong>Multi-agent coordination:</strong> Assign multiple agents to a single mission—each with its own role and specialty.</li>
                  <li><strong>Chained tasks with smart handoff:</strong> One agent's output becomes the next agent's input—enabling deep, multi-stage reasoning.</li>
                  <li><strong>Reusable blueprints:</strong> Save and deploy team configurations for repetitive research, writing, or scraping jobs.</li>
              </ul>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog2.webp"
                  alt="changelog2"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 3: Tools */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@June 6, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">15+ Tools Now Available for Agents</h2>
            </div>

            <div className="space-y-6">
              <p className="text-[#37352f]/80 leading-relaxed">
                We've supercharged your agent toolkit. From scraping LinkedIn and Reddit to generating images and analyzing TikTok profiles—your agents can now access 15+ built-in tools to automate research, content, and competitive intel like never before.
              </p>
              
              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog3.webp"
                  alt="changelog3"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 4: Model Selection */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@May 30, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">Model selection, leveled up</h2>
            </div>

            <div className="space-y-6">
              <p className="text-[#37352f]/80 leading-relaxed">
                We've redesigned the model picker for clarity and speed. Easily compare model strengths, context limits, and performance tags like Fast, Reasoning, or Powerful. Choose what fits your task—GPT‑4.1, Claude, Grok, XAI, and more.
              </p>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                {/* ĐIỀN LINK ẢNH VÀO src="" BÊN DƯỚI */}
                <Image
                  src="/changelog4.webp"
                  alt="Changelog4"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Entry 5: Agent Team Execution */}
          <div className="relative">
            <div className="absolute -left-[39px] top-1.5 h-3 w-3 rounded-full border-2 border-muted-foreground/30 bg-white" />

            <div className="mb-4 flex flex-wrap items-baseline gap-2">
              <span className="text-muted-foreground">@May 27, 2025</span>
              <span className="text-muted-foreground">—</span>
              <h2 className="text-xl font-semibold text-[#37352f]">Clearer Agent Team Execution</h2>
            </div>

            <div className="space-y-6">
              <p className="text-[#37352f]/80 leading-relaxed">
                We upgraded how team agent executions are displayed. You'll now see input variables, agent roles, task flow, and real-time progress in one glanceable view. Cleaner, clearer, and easier to follow.
              </p>

              <div className="overflow-hidden rounded-xl border bg-muted/10 shadow-sm">
                <Image
                  src="/changelog5.webp"
                  alt="changelog5"
                  width={1000}
                  height={600}
                  className="w-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
