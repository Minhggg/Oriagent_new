// app/sign-up/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage() {
  return (
    // Container bao bọc, căn giữa form trên toàn bộ màn hình
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Tạo Tài Khoản</CardTitle>
          <CardDescription className="text-center">
            Nhập thông tin của bạn để bắt đầu sử dụng AI Agent.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Xác nhận Mật khẩu</Label>
            <Input id="confirm-password" type="password" required />
          </div>
        </CardContent>

        <CardFooter className="flex-col">
          <Button className="w-full bg-black hover:bg-gray-800">Đăng Ký</Button>
          <div className="mt-4 text-center text-sm text-gray-600">
            Đã có tài khoản?{" "}
            <Link href="/sign-in" className="text-black font-semibold hover:underline">
              Đăng nhập
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}