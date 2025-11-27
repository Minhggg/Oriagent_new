"use client"
import { X, Sparkles } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { GoogleIcon, PhantomIcon } from "@/components/icons"

interface SignInModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SignInModal({ open, onOpenChange }: SignInModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] bg-[#0A0A0A] border-zinc-800 text-white p-0 gap-0 overflow-hidden shadow-2xl">
        <div className="p-6 relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
            <span className="sr-only">Close</span>
          </button>

          <div className="mb-8">
            <DialogTitle className="text-sm font-medium text-white mb-1">Sign In / Sign up</DialogTitle>
            <p className="text-xs text-zinc-500">Sign in to your account</p>
          </div>

          <div className="flex flex-col items-center justify-center mb-8">
            <div className="mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-white tracking-tight">Ai Agent</h2>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full bg-transparent border-zinc-800 text-white hover:bg-zinc-900 hover:text-white h-11 font-normal relative"
            >
              <GoogleIcon className="w-5 h-5 absolute left-4" />
              Sign in with Google
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-zinc-800" />
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
                <span className="bg-[#0A0A0A] px-2 text-zinc-500">Or continue with</span>
              </div>
            </div>

            <Button className="w-full bg-[#5B5B9B] hover:bg-[#4A4A8A] text-white h-11 font-normal relative border-none">
              <PhantomIcon className="w-5 h-5 absolute left-4" />
              Install Phantom Wallet
            </Button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[10px] text-zinc-500">
              By using oriagent.com you agree to our{" "}
              <a href="#" className="underline hover:text-zinc-400">
                Terms of use
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
